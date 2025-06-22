import { ImapFlow } from 'imapflow';
import nodemailer from 'nodemailer';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextRequest, NextResponse } from 'next/server';
import dotenv from 'dotenv';
import fs from 'fs/promises';
import path from 'path';

dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

const imapConfig = {
  host: 'imap.secureserver.net',
  port: 993,
  secure: true,
  auth: {
    user: process.env.GODADDY_EMAIL || 'info@anixai.io',
    pass: process.env.GODADDY_EMAIL_PASSWORD,
  },
  connectionTimeout: 30000,
  socketTimeout: 120000, // Increased to 120 seconds
};

const smtpConfig = {
  host: 'smtpout.secureserver.net',
  port: 587,
  secure: false,
  auth: {
    user: process.env.GODADDY_EMAIL || 'info@anixai.io',
    pass: process.env.GODADDY_EMAIL_PASSWORD,
  },
  tls: {
    rejectUnauthorized: false,
  },
};

const transporter = nodemailer.createTransport(smtpConfig);

const PROCESSED_EMAILS_FILE = path.join(process.cwd(), 'processed-emails.json');
async function loadProcessedEmails(): Promise<Set<string>> {
  try {
    const data = await fs.readFile(PROCESSED_EMAILS_FILE, 'utf8');
    return new Set(JSON.parse(data));
  } catch (error) {
    return new Set<string>();
  }
}
async function saveProcessedEmails(processedEmails: Set<string>) {
  await fs.writeFile(PROCESSED_EMAILS_FILE, JSON.stringify([...processedEmails]), 'utf8');
}

async function analyzeEmailAndDraftResponse(emailContent: string): Promise<string> {
  const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
  const prompt = `
    Analyze the following email content from a contact form submission and draft a professional response.
    
    Guidelines:
    - Keep the tone friendly and professional
    - Acknowledge the specific details they provided (e.g., name, company, message)
    - Thank them for their interest
    - Mention that someone from the team will follow up within 24-48 hours
    - If their message mentions specific services or needs (e.g., urgent meeting), acknowledge those
    
    Email content to analyze:
    ${emailContent}
    
    Draft a personalized response based on the above information.
  `;

  const result = await model.generateContent(prompt);
  return result.response.text();
}

async function streamToString(stream: NodeJS.ReadableStream): Promise<string> {
  const chunks: Buffer[] = [];
  for await (const chunk of stream) {
    chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk));
  }
  return Buffer.concat(chunks).toString('utf8');
}

async function decodeContent(content: string, encoding?: string): Promise<string> {
  if (!encoding) return content;
  
  try {
    switch (encoding.toLowerCase()) {
      case 'base64':
        return Buffer.from(content, 'base64').toString('utf8');
      case 'quoted-printable':
        return content.replace(/=([0-9A-F]{2})/g, (match, hex) => 
          String.fromCharCode(parseInt(hex, 16))
        ).replace(/=\r?\n/g, '');
      default:
        return content;
    }
  } catch (error) {
    console.error('Error decoding content:', error);
    return content;
  }
}

async function extractEmailBody(client: ImapFlow, uid: string, bodyStructure: any): Promise<string> {
  try {
    let bodyContent = '';
    
    if (bodyStructure.childNodes && Array.isArray(bodyStructure.childNodes)) {
      for (const part of bodyStructure.childNodes) {
        if (part.type === 'text' && (part.subtype === 'plain' || part.subtype === 'html')) {
          const partId = part.part || '1';
          const { content } = await client.download(uid, partId);
          let rawContent = await streamToString(content);
          const decodedContent = await decodeContent(rawContent, part.encoding);
          
          if (part.subtype === 'plain') {
            bodyContent = decodedContent;
          } else if (part.subtype === 'html') {
            bodyContent = decodedContent;
            // Extract form data from HTML
            const nameMatch = decodedContent.match(/<strong>Name:<\/strong>\s*([^<]+)/i);
            const emailMatch = decodedContent.match(/<strong>Email:<\/strong>\s*<a[^>]*>([^<]+)<\/a>/i);
            const phoneMatch = decodedContent.match(/<strong>Phone:<\/strong>\s*([^<]+)/i);
            const companyMatch = decodedContent.match(/<strong>Company:<\/strong>\s*([^<]+)/i);
            const interestMatch = decodedContent.match(/<strong>Interest:<\/strong>\s*([^<]+)/i);
            const aiJourneyMatch = decodedContent.match(/<strong>AI Journey Stage:<\/strong>\s*([^<]+)/i);
            const messageMatch = decodedContent.match(/<strong>Message:<\/strong>\s*([^<]+)/i);

            const formData = [
              nameMatch ? `Name: ${nameMatch[1].trim()}` : '',
              emailMatch ? `Email: ${emailMatch[1].trim()}` : '',
              phoneMatch ? `Phone: ${phoneMatch[1].trim()}` : '',
              companyMatch ? `Company: ${companyMatch[1].trim()}` : '',
              interestMatch ? `Interest: ${interestMatch[1].trim()}` : '',
              aiJourneyMatch ? `AI Journey Stage: ${aiJourneyMatch[1].trim()}` : '',
              messageMatch ? `Message: ${messageMatch[1].trim()}` : ''
            ].filter(Boolean).join('\n');

            if (formData) bodyContent = formData;
          }
        }
      }
    } else if (bodyStructure.type === 'text') {
      const { content } = await client.download(uid, '1');
      let rawContent = await streamToString(content);
      bodyContent = await decodeContent(rawContent, bodyStructure.encoding);
      if (bodyStructure.subtype === 'html') {
        bodyContent = bodyContent.replace(/<[^>]*>/g, '').trim();
      }
    }
    
    return bodyContent || 'No readable content found';
  } catch (error) {
    console.error('Error extracting email body:', error);
    return 'Error extracting email content';
  }
}

async function processEmails() {
  let processedEmails = await loadProcessedEmails();
  const client = new ImapFlow(imapConfig);

  try {
    await client.connect();
    await client.mailboxOpen('INBOX');

    const unseenUids = await client.search({ seen: false, subject: 'New Contact Form Submission' });
    
    if (unseenUids.length === 0) {
      console.log('No unseen contact form submissions found');
      return;
    }
    
    console.log(`Found ${unseenUids.length} unseen contact form submissions`);
    
    for (let i = 0; i < unseenUids.length; i += 3) { // Reduced batch size to 3
      const batchUids = unseenUids.slice(i, i + 3);
      const messages = await client.fetch(batchUids, { envelope: true, bodyStructure: true, uid: true });

      for await (const message of messages) {
        const uid = String(message.uid);
        
        if (processedEmails.has(uid)) {
          continue;
        }

        console.log(`Processing email UID: ${uid} from ${message.envelope?.from?.[0].address}`);
        
        const bodyContent = await extractEmailBody(client, uid, message.bodyStructure);
        
        const emailContent = `
From: ${message.envelope?.from?.[0].address}
Subject: ${message.envelope?.subject}
Date: ${message.envelope?.date}

Body:
${bodyContent}
        `.trim();
        
        console.log('Extracted email content:', emailContent);
        
        try {
          const draftContent = await analyzeEmailAndDraftResponse(emailContent);

          const mailOptions = {
            from: 'info@anixai.io',
            to: message.envelope?.from?.[0].address,
            subject: `Re: ${message.envelope?.subject}`,
            text: draftContent,
            draft: true,
          };

          await transporter.sendMail(mailOptions);
          console.log(`Draft created for email from ${message.envelope?.from?.[0].address}`);
          
          processedEmails.add(uid);
          await saveProcessedEmails(processedEmails);
          await client.messageFlagsAdd(uid, ['\\Seen']);
        } catch (smtpError) {
          console.error('Error creating draft:', smtpError);
        }

        // Add a small delay between processing emails
        if (i + 1 < unseenUids.length) await new Promise(resolve => setTimeout(resolve, 2000));
      }
    }
  } catch (error) {
    console.error('Error processing emails:', error);
  } finally {
    try {
      await client.logout();
    } catch (logoutError) {
      console.warn('Failed to logout:', logoutError);
    }
  }
}

export async function POST(req: NextRequest) {
  try {
    await processEmails();
    return NextResponse.json({ 
      message: 'Email processing completed successfully' 
    }, { status: 200 });
  } catch (error) {
    console.error('Error in POST handler:', error);
    return NextResponse.json({ 
      error: 'Failed to process emails',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
}