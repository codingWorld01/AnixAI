import { NextRequest, NextResponse } from "next/server";
import { sendEmail } from "@/lib/email";
import axios from "axios";

interface FormData {
  interest: string;
  aiJourneyStage: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  message: string;
}

export async function POST(request: NextRequest) {
  const body: FormData = await request.json();
  const { interest, aiJourneyStage, firstName, lastName, email, phone, company, message } = body;

  if (!interest || !aiJourneyStage || !firstName || !lastName || !email || !company || !message || !phone) {
    return NextResponse.json({ error: "All required fields must be filled" }, { status: 400 });
  }

  const emailText = `
    New contact form submission received:

    Name: ${firstName} ${lastName}
    Email: ${email}
    Phone: ${phone || "Not provided"}
    Company: ${company}
    Interest: ${interest}
    AI Journey Stage: ${aiJourneyStage}
    Message: ${message}
  `;

  const emailHtml = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Contact Form Submission</title>
    </head>
    <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f4f4f4;">
      <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #f4f4f4; padding: 20px;">
        <tr>
          <td align="center">
            <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="max-width: 600px; background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
              <tr>
                <td style="padding: 20px; background-color: #1a73e8; border-top-left-radius: 8px; border-top-right-radius: 8px; text-align: center;">
                  <h1 style="color: #ffffff; margin: 0; font-size: 24px;">New Contact Form Submission</h1>
                </td>
              </tr>
              <tr>
                <td style="padding: 30px;">
                  <p style="color: #333333; font-size: 16px; line-height: 1.5; margin: 0 0 20px;">Hello,</p>
                  <p style="color: #333333; font-size: 16px; line-height: 1.5; margin: 0 0 20px;">
                    You have received a new contact form submission. Here are the details:
                  </p>
                  <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0">
                    <tr><td style="padding: 10px 0; font-size: 16px; color: #333333;"><strong>Name:</strong> ${firstName} ${lastName}</td></tr>
                    <tr><td style="padding: 10px 0; font-size: 16px; color: #333333;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #1a73e8; text-decoration: none;">${email}</a></td></tr>
                    <tr><td style="padding: 10px 0; font-size: 16px; color: #333333;"><strong>Phone:</strong> ${phone || "Not provided"}</td></tr>
                    <tr><td style="padding: 10px 0; font-size: 16px; color: #333333;"><strong>Company:</strong> ${company}</td></tr>
                    <tr><td style="padding: 10px 0; font-size: 16px; color: #333333;"><strong>Interest:</strong> ${interest}</td></tr>
                    <tr><td style="padding: 10px 0; font-size: 16px; color: #333333;"><strong>AI Journey Stage:</strong> ${aiJourneyStage}</td></tr>
                    <tr><td style="padding: 10px 0; font-size: 16px; color: #333333;"><strong>Message:</strong> ${message}</td></tr>
                  </table>
                  <p style="color: #333333; font-size: 16px; line-height: 1.5; margin: 20px 0;">
                    Please follow up with the sender at your earliest convenience.
                  </p>
                  <table role="presentation" border="0" cellspacing="0" cellpadding="0">
                    <tr>
                      <td style="border-radius: 4px; background-color: #1a73e8;">
                        <a href="mailto:${email}" style="display: inline-block; padding: 12px 24px; color: #ffffff; font-size: 16px; text-decoration: none; border-radius: 4px;">Reply to Sender</a>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
              <tr>
                <td style="padding: 20px; background-color: #f8f9fa; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; text-align: center;">
                  <p style="color: #666666; font-size: 14px; margin: 0;">© 2025 Your Company Name. All rights reserved.</p>
                  <p style="color: #666666; font-size: 14px; margin: 5px 0;">100 Pine Street, Suite 1250, San Francisco, CA 94111</p>
                  <p style="color: #666666; font-size: 14px; margin: 5px 0;"><a href="mailto:info@anixai.io" style="color: #1a73e8; text-decoration: none;">info@anixai.io</a> | +1 (415) 555-1234</p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </body>
    </html>
  `;

  try {
    await sendEmail({
      to: process.env.EMAIL_TO || "yatharthaurangpure27@gmail.com",
      subject: `New Contact Form Submission from ${firstName} ${lastName}`,
      text: emailText,
      html: emailHtml,
    });

    // Trigger AI agent to process the email
    await axios.post('http://localhost:3000/api/ai-email-agent');

    return NextResponse.json({ message: "Email sent and AI agent triggered" }, { status: 200 });
  } catch (error) {
    console.error("Error in API route:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}