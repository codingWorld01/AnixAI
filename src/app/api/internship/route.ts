import { NextRequest, NextResponse } from "next/server";
import { sendEmail } from "@/lib/email";
import jsPDF from "jspdf";
import * as path from "path";
import * as os from "os";
import * as fs from "fs";


interface FormData {
  name: string;
  duration: string;
  role: string;
  email: string;
  type: "offer" | "certificate";
  confirmationDeadline: string;
  startDate: string;
}

export async function POST(request: NextRequest) {
  const body: FormData = await request.json();
  const { name, duration, role, email, type, startDate, confirmationDeadline } = body;

  if (!name || !duration || !role || !email || !type) {
    return NextResponse.json({ error: "All required fields are required" }, { status: 400 });
  }

  try {
    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "a4",
    });

    if (type === "offer") {
      generateOfferLetterPDF(pdf, name, duration, role, startDate, confirmationDeadline);
    } else {
      generateCertificatePDF(pdf, name, duration, role);
    }

    // Get PDF as buffer
    const pdfBuffer = Buffer.from(pdf.output("arraybuffer"));

    // Create temporary file for PDF
    const tempDir = os.tmpdir();
    const pdfFileName = `${type}_${name.replace(/\s+/g, "_")}.pdf`;
    const pdfTempFilePath = path.join(tempDir, pdfFileName);
    fs.writeFileSync(pdfTempFilePath, pdfBuffer);

    // Prepare attachments array
    const attachments = [{ filename: pdfFileName, path: pdfTempFilePath }];

    // Add Word file attachment only for offer letter
    if (type === "offer") {
      const wordFilePath = path.join(process.cwd(), "public", "code_of_conduct.docx");
      if (fs.existsSync(wordFilePath)) {
        attachments.push({ filename: "code_of_conduct.docx", path: wordFilePath });
      } else {
        console.warn("Code of conduct file not found at:", wordFilePath);
      }
    }

    // Send email with attachments
    await sendEmail({
      to: email,
      subject: `${type === "offer" ? "Internship Offer Letter" : "Internship Completion Certificate"} for ${name}`,
      text: `Dear ${name},\n\nPlease find attached your ${type === "offer" ? "internship offer letter" : "internship completion certificate"}${
        type === "offer" ? " and the code of conduct document" : ""
      }.\n\nBest regards,\nThe Anix AI Team`,
      attachments,
    });

    // Clean up temporary PDF file
    try {
      fs.unlinkSync(pdfTempFilePath);
    } catch (cleanupError) {
      console.warn("Failed to cleanup temporary PDF file:", cleanupError);
    }

    return NextResponse.json({ message: "Document generated and sent successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({
      error: "Failed to generate or send document",
      details: error instanceof Error ? error.message : "Unknown error",
    }, { status: 500 });
  }
}



function generateOfferLetterPDF(pdf: jsPDF, name: string, duration: string, role: string, startDate: string, confirmationDeadline: string) {
  const pageWidth = pdf.internal.pageSize.getWidth();
  const margin = 20;
  const maxWidth = pageWidth - 2 * margin;
  
  let yPosition = 0;

  // Create black banner header
  const bannerHeight = 30;
  pdf.setFillColor(0, 0, 0); // Black background
  pdf.rect(0, 0, pageWidth, bannerHeight, "F");
  
  const logoStartX = 12;
  const logoStartY = 5; // Adjusted to center vertically in the 30mm banner
  const logoWidth = 30; // Adjust based on your logo's aspect ratio
  const logoHeight = 22; // Adjust to fit within 30mm banner height

  // Add AnixAI logo on the left
  const logoPath = path.join(process.cwd(), "public", "images/anixlogo.png"); // Path to your logo
  const fs = require("fs");
  const logoData = fs.readFileSync(logoPath).toString("base64");
  pdf.addImage(logoData, "PNG", logoStartX, logoStartY, logoWidth, logoHeight, undefined, "FAST");

  // Contact information positioning
  const contactX = pageWidth - 35;
  const separatorX = pageWidth - 40;
  
  // Vertical separator line
  pdf.setDrawColor(255, 255, 255);
  pdf.setLineWidth(1);
  pdf.line(separatorX, 5, separatorX, bannerHeight - 5);
  
  // Add contact information on the right side
  pdf.setFontSize(9);
  pdf.setFont("helvetica", "normal");
  pdf.setTextColor(255, 255, 255); // White text for contact info
  
  // Email
  pdf.text("info@anixai.io", contactX, logoStartY + 6);
  
  // Website
  pdf.text("anixai.io", contactX, logoStartY + 11);
  
  // Phone
  pdf.text("+919324744953", contactX, logoStartY + 16);
  
  // Reset for document content
  pdf.setTextColor(0, 0, 0);
  yPosition = bannerHeight + 20;

  // Subject
  pdf.setFontSize(12);
  pdf.setFont("helvetica", "bold");
  const subjectPrefix = "Subject: ";
  pdf.text(subjectPrefix, margin, yPosition);
  pdf.setFont("helvetica", "normal"); // Reset to normal for the rest of the subject
  const subjectText = " Internship Confirmation – Welcome to the Global AI Association Initiative!";
  const subjectLines = pdf.splitTextToSize(subjectText, maxWidth - pdf.getTextWidth(subjectPrefix));
  pdf.text(subjectLines, margin + pdf.getTextWidth(subjectPrefix), yPosition);
  yPosition += subjectLines.length * 6 + 10;

  // Body content
  pdf.setFontSize(12);
  pdf.setFont("helvetica", "normal");

  // Greeting and Congratulations
  pdf.setFont("helvetica", "bold"); // Make "Dear" bold
  const greeting = `Dear ${name.split(" ")[0]},`;
  pdf.text(greeting, margin, yPosition);
  pdf.setFont("helvetica", "normal"); // Reset to normal after greeting
  yPosition += 10;

  const congrats = "Congratulations!";
  pdf.text(congrats, margin, yPosition);
  yPosition += 10;

  // Paragraph 1 with bold segments
  const para1Prefix = "We are happy to inform you that you have been selected for the prestigious Internship Program with ";
  const para1AnixAI = "Anix AI";
  const para1Middle = ", focusing on the establishment and growth of the ";
  const para1GlobalAI = "Global AI Association (gainova.org)";
  const para1Suffix = ` as a ${role}.`;

  pdf.setFont("helvetica", "normal");
  const para1PrefixLines = pdf.splitTextToSize(para1Prefix, maxWidth);
  pdf.text(para1PrefixLines, margin, yPosition);
  yPosition += para1PrefixLines.length * 6;

  pdf.setFont("helvetica", "bold");
  pdf.text(para1AnixAI, margin, yPosition);
  yPosition += 6;

  pdf.setFont("helvetica", "normal");
  const para1MiddleLines = pdf.splitTextToSize(para1Middle, maxWidth);
  pdf.text(para1MiddleLines, margin, yPosition);
  yPosition += para1MiddleLines.length * 6;

  pdf.setFont("helvetica", "bold");
  pdf.text(para1GlobalAI, margin, yPosition);
  yPosition += 6;

  pdf.setFont("helvetica", "normal");
  const para1SuffixLines = pdf.splitTextToSize(para1Suffix, maxWidth);
  pdf.text(para1SuffixLines, margin, yPosition);
  yPosition += para1SuffixLines.length * 6;

  const para2 = `This is a unique opportunity to collaborate on an international project that blends cutting-edge AI initiatives with strategic, technical, and operational contributions. Your internship will span ${duration}, starting on ${startDate}, providing you with the chance to build real-world expertise, grow your network, and enhance your personal and professional brand on a global scale.`;
  const para2Lines = pdf.splitTextToSize(para2, maxWidth);
  pdf.text(para2Lines, margin, yPosition);
  yPosition += para2Lines.length * 6;

  // Attachments
  pdf.setFont("helvetica", "bold");
  pdf.text("Please find attached:", margin, yPosition);
  yPosition += 10;

  pdf.setFont("helvetica", "normal");
  const attachment1 = "• Your Internship Offer Letter";
  const attachment2 = "• Code of Conduct – outlining our shared values and professional standards";
  pdf.text(attachment1, margin + 5, yPosition);
  yPosition += 6;
  pdf.text(attachment2, margin + 5, yPosition);
  yPosition += 10;

  // Confirmation Steps
  pdf.setFont("helvetica", "bold");
  pdf.text("To confirm your participation:", margin, yPosition);
  yPosition += 10;

  pdf.setFont("helvetica", "normal");
  const step1Text = `1. Reply to this email with your acceptance of the offer by ${confirmationDeadline}.`;
  const step2Text = "2. Review, sign, and return the Code of Conduct as part of your onboarding process. Please attach it in email as well.";
  const step1Lines = pdf.splitTextToSize(step1Text, maxWidth);
  const step2Lines = pdf.splitTextToSize(step2Text, maxWidth);
  pdf.text(step1Lines, margin + 5, yPosition);
  yPosition += step1Lines.length * 6;
  pdf.text(step2Lines, margin + 5, yPosition);
  yPosition += step2Lines.length * 6 + 10;

  // Closing
  const closing = `We are excited to welcome you to this dynamic journey where your contribution will directly impact the future of AI innovation and collaboration.`;
  const closingLines = pdf.splitTextToSize(closing, maxWidth);
  pdf.text(closingLines, margin, yPosition);
  yPosition += closingLines.length * 6;

  const tagline = `Let’s build the future of AI & Students, together!`;
  const taglineLines = pdf.splitTextToSize(tagline, maxWidth);
  pdf.text(taglineLines, margin, yPosition);
  yPosition += taglineLines.length * 6 + 10;

  // Signature
  pdf.text("Warm regards,", margin, yPosition);
  yPosition += 5;
  pdf.setFont("helvetica", "bold");
  pdf.text("The Anix AI HR Team", margin, yPosition);
  yPosition += 5;
  pdf.setFont("helvetica", "normal");
  pdf.text("Empowering Tomorrow’s Innovators", margin, yPosition);
  yPosition += 10;

  // Contact info
  pdf.setFontSize(10);
  pdf.text("Email: info@anixai.io", margin, yPosition);
  yPosition += 5;
  pdf.text(`Date: ${new Date().toLocaleDateString()}`, margin, yPosition);
  yPosition += 5;
  pdf.text("Website: anixai.io", margin, yPosition);
  yPosition += 5;
  pdf.text("Phone: +91 93247 44953", margin, yPosition);
  yPosition += 5;
  pdf.text("Subject: Internship offer at Anix AI", margin, yPosition);
}


function generateCertificatePDF(pdf: jsPDF, name: string, duration: string, role: string) {
  const pageWidth = pdf.internal.pageSize.getWidth();
  const pageHeight = pdf.internal.pageSize.getHeight();
  const margin = 20;
  
  // Draw border
  pdf.setDrawColor(79, 70, 229); // #4f46e5
  pdf.setLineWidth(3);
  pdf.rect(margin, margin, pageWidth - 2 * margin, pageHeight - 2 * margin);
  
  // Inner border
  pdf.setLineWidth(1);
  pdf.rect(margin + 5, margin + 5, pageWidth - 2 * margin - 10, pageHeight - 2 * margin - 10);

  let yPosition = 60;

  // Title
  pdf.setFontSize(28);
  pdf.setFont("helvetica", "bold");
  pdf.setTextColor(79, 70, 229); // #4f46e5
  const title = "Internship Completion Certificate";
  const titleWidth = pdf.getTextWidth(title);
  pdf.text(title, (pageWidth - titleWidth) / 2, yPosition);
  
  yPosition += 40;

  // Content
  pdf.setFontSize(16);
  pdf.setFont("helvetica", "normal");
  pdf.setTextColor(51, 51, 51); // #333
  
  const certifyText = "This is to certify that";
  const certifyWidth = pdf.getTextWidth(certifyText);
  pdf.text(certifyText, (pageWidth - certifyWidth) / 2, yPosition);
  yPosition += 20;

  // Name (highlighted)
  pdf.setFontSize(22);
  pdf.setFont("helvetica", "bold");
  pdf.setTextColor(17, 17, 17); // #111
  const nameWidth = pdf.getTextWidth(name);
  pdf.text(name, (pageWidth - nameWidth) / 2, yPosition);
  yPosition += 25;

  // Role description
  pdf.setFontSize(16);
  pdf.setFont("helvetica", "normal");
  pdf.setTextColor(51, 51, 51); // #333
  const roleText = `has successfully completed an internship as a ${role}`;
  const roleWidth = pdf.getTextWidth(roleText);
  pdf.text(roleText, (pageWidth - roleWidth) / 2, yPosition);
  yPosition += 15;

  const companyText = `at Anix AI for a duration of ${duration}.`;
  const companyWidth = pdf.getTextWidth(companyText);
  pdf.text(companyText, (pageWidth - companyWidth) / 2, yPosition);
  yPosition += 40;

  // Signature section
  pdf.setFontSize(12);
  pdf.setFont("helvetica", "bold");
  pdf.setTextColor(51, 51, 51); // #333
  const signatureText = "Anix AI Team";
  pdf.text(signatureText, pageWidth - margin - 60, yPosition);
  yPosition += 10;
  
  pdf.setFont("helvetica", "normal");
  const dateText = `Issued on: ${new Date().toLocaleDateString()}`;
  pdf.text(dateText, pageWidth - margin - 60, yPosition);

  // Footer
  yPosition = pageHeight - 40;
  pdf.setFontSize(10);
  pdf.setTextColor(102, 102, 102); // #666
  const footerText1 = "100 Pine Street, Suite 1250, San Francisco, CA 94111";
  const footerText2 = "info@anixai.io | anixai.io | +91 93247 44953";
  
  const footer1Width = pdf.getTextWidth(footerText1);
  const footer2Width = pdf.getTextWidth(footerText2);
  
  pdf.text(footerText1, (pageWidth - footer1Width) / 2, yPosition);
  pdf.text(footerText2, (pageWidth - footer2Width) / 2, yPosition + 7);
}