import { NextRequest, NextResponse } from "next/server";
import { sendEmail } from "@/lib/email";
import * as fs from "fs";
import * as path from "path";
import puppeteer from "puppeteer";

interface FormData {
  name: string;
  duration: string;
  role: string;
  email: string;
  type: "offer" | "certificate";
  confirmationDeadline: string,
  startDate: string;
}

export async function POST(request: NextRequest) {
  const body: FormData = await request.json();
  const { name, duration, role, email, type, startDate, confirmationDeadline } = body;

  if (!name || !duration || !role || !email || !type) {
    return NextResponse.json({ error: "All fields are required" }, { status: 400 });
  }

  const pdfPath = path.join(process.cwd(), "public", `${type}_${name.replace(/\s+/g, "_")}.pdf`);

  // Generate HTML content
  const htmlContent = type === "offer" ? generateOfferLetterHtml(name, duration, role, startDate, confirmationDeadline)
 : generateCertificateHtml(name, duration, role);

  // Launch Puppeteer with bundled Chromium
  const browser = await puppeteer.launch({
    args: ["--no-sandbox", "--disable-setuid-sandbox"], // Required for some environments
    headless: true,
  });

  try {
    const page = await browser.newPage();
    await page.setContent(htmlContent, { waitUntil: "networkidle0" });

    // Generate PDF
    await page.pdf({
      path: pdfPath,
      format: "A4",
      printBackground: true, // Include background colors/images
      margin: { top: "20mm", right: "20mm", bottom: "20mm", left: "20mm" },
    });

    await browser.close();

    await sendEmail({
      to: email,
      subject: `${type === "offer" ? "Internship Offer Letter" : "Internship Completion Certificate"} for ${name}`,
      text: `Dear ${name},\n\nPlease find attached your ${type === "offer" ? "internship offer letter" : "internship completion certificate"}.\n\nBest regards,\nThe Anix AI Team`,
      attachments: [{ filename: path.basename(pdfPath), path: pdfPath }],
    });

    // Clean up
    fs.unlinkSync(pdfPath);

    return NextResponse.json({ message: "Document generated and sent successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error:", error);
    if (browser) await browser.close();
    fs.unlinkSync(pdfPath);
    return NextResponse.json({ error: "Failed to generate or send document" }, { status: 500 });
  }
}

// Modified HTML generator based on the uploaded Anix AI Offer Letter design
function generateOfferLetterHtml(name: string, duration: string, role: string, startDate: string, confirmationDeadline: string) {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <style>
        body {
          font-family: Arial, sans-serif;
          margin: 0;
          padding: 40px;
          font-size: 14px;
          line-height: 1.6;
        }
        .container {
          max-width: 800px;
          margin: auto;
        }
        .title {
          text-align: center;
          font-size: 24px;
          font-weight: bold;
          margin-bottom: 30px;
        }
        .footer {
          margin-top: 50px;
        }
        .signature {
          margin-top: 40px;
        }
        .contact-info {
          font-size: 12px;
          margin-top: 30px;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="title">INTERNSHIP OFFER LETTER</div>
        <p>Dear ${name},<br>

        We are pleased to offer you an internship opportunity at <strong>Anix AI in the establishment of the Global AI Association</strong> in the domain of <strong>${role}</strong>.</p>

        <p>The internship is scheduled to begin on <strong>${startDate}</strong>. During this period, you will be engaged in tasks and projects aligned with the objectives of our team and overall organizational goals.</p>

        <p>Further details regarding your responsibilities, reporting structure, work schedule, and required documentation will be communicated to you separately. We expect all interns to demonstrate a professional attitude, maintain confidentiality, and actively contribute to the assigned work.</p>

        <p>Please confirm your acceptance of this offer by <strong>${confirmationDeadline}</strong> by replying to this email or signing and returning the attached confirmation letter.</p>

        <p>We look forward to your association with Anix AI and hope this internship proves to be a valuable learning experience for you.</p>

        <div class="signature">
          Warm regards,<br>
          <strong>HR team </strong><br>
          Anix AI
        </div>

        <div class="contact-info">
          Email: info@anix.io<br>
          Date: ${new Date().toLocaleDateString()}<br>
          Website: anixai.io<br>
          Phone: +91 93247 44953<br>
          Subject: Internship offer at Anix AI
        </div>
      </div>
    </body>
    </html>
  `;
}


function generateCertificateHtml(name: string, duration: string, role: string) {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <style>
        body {
          margin: 0;
          padding: 0;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background: #f4f4f9;
        }
        .certificate {
          max-width: 800px;
          margin: 50px auto;
          padding: 40px;
          background: white;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
          border: 10px solid #4f46e5;
          border-radius: 10px;
          text-align: center;
        }
        .title {
          font-size: 32px;
          font-weight: bold;
          color: #4f46e5;
          margin-bottom: 40px;
        }
        .content {
          font-size: 18px;
          color: #333;
          margin-bottom: 30px;
          line-height: 1.6;
        }
        .name {
          font-size: 26px;
          font-weight: 600;
          color: #111;
          margin: 20px 0;
        }
        .footer {
          margin-top: 40px;
          font-size: 14px;
          color: #666;
        }
        .signature {
          margin-top: 40px;
          text-align: right;
          font-weight: bold;
        }
      </style>
    </head>
    <body>
      <div class="certificate">
        <div class="title">Internship Completion Certificate</div>
        <div class="content">
          <p>This is to certify that</p>
          <div class="name">${name}</div>
          <p>has successfully completed an internship as a <strong>${role}</strong></p>
          <p>at <strong>Anix AI</strong> for a duration of <strong>${duration}</strong>.</p>
        </div>
        <div class="signature">
          <p>Anix AI Team</p>
          <p>Issued on: ${new Date().toLocaleDateString()}</p>
        </div>
        <div class="footer">
          100 Pine Street, Suite 1250, San Francisco, CA 94111<br>
          info@anixai.io | anixai.io | +91 93247 44953
        </div>
      </div>
    </body>
    </html>
  `;
}
