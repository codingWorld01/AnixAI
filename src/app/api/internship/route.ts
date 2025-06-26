import { NextRequest, NextResponse } from "next/server";
import { sendEmail } from "@/lib/email";
import jsPDF from "jspdf";

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
    return NextResponse.json({ error: "All fields are required" }, { status: 400 });
  }

  try {
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4'
    });

    if (type === "offer") {
      generateOfferLetterPDF(pdf, name, duration, role, startDate, confirmationDeadline);
    } else {
      generateCertificatePDF(pdf, name, duration, role);
    }

    // Get PDF as buffer
    const pdfBuffer = Buffer.from(pdf.output('arraybuffer'));

    // Create temporary file for email attachment
    const fs = await import('fs');
    const path = await import('path');
    const os = await import('os');
    
    const tempDir = os.tmpdir();
    const fileName = `${type}_${name.replace(/\s+/g, "_")}.pdf`;
    const tempFilePath = path.join(tempDir, fileName);
    
    // Write PDF buffer to temporary file
    fs.writeFileSync(tempFilePath, pdfBuffer);

    // Send email with PDF attachment
    await sendEmail({
      to: email,
      subject: `${type === "offer" ? "Internship Offer Letter" : "Internship Completion Certificate"} for ${name}`,
      text: `Dear ${name},\n\nPlease find attached your ${type === "offer" ? "internship offer letter" : "internship completion certificate"}.\n\nBest regards,\nThe Anix AI Team`,
      attachments: [{ 
        filename: fileName,
        path: tempFilePath
      }],
    });

    // Clean up temporary file
    try {
      fs.unlinkSync(tempFilePath);
    } catch (cleanupError) {
      console.warn("Failed to cleanup temporary file:", cleanupError);
    }

    return NextResponse.json({ message: "Document generated and sent successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({ 
      error: "Failed to generate or send document", 
      details: error instanceof Error ? error.message : "Unknown error"
    }, { status: 500 });
  }
}

function generateOfferLetterPDF(pdf: jsPDF, name: string, duration: string, role: string, startDate: string, confirmationDeadline: string) {
  const pageWidth = pdf.internal.pageSize.getWidth();
  const pageHeight = pdf.internal.pageSize.getHeight();
  const margin = 20;
  const maxWidth = pageWidth - 2 * margin;
  
  let yPosition = 30;

  // Title
  pdf.setFontSize(24);
  pdf.setFont("helvetica", "bold");
  const title = "INTERNSHIP OFFER LETTER";
  const titleWidth = pdf.getTextWidth(title);
  pdf.text(title, (pageWidth - titleWidth) / 2, yPosition);
  
  yPosition += 20;

  // Body content
  pdf.setFontSize(12);
  pdf.setFont("helvetica", "normal");
  
  // Greeting
  const greeting = `Dear ${name},`;
  pdf.text(greeting, margin, yPosition);
  yPosition += 15;

  // Paragraph 1
  const para1 = `We are pleased to offer you an internship opportunity at Anix AI in the establishment of the Global AI Association in the domain of ${role}.`;
  const para1Lines = pdf.splitTextToSize(para1, maxWidth);
  pdf.text(para1Lines, margin, yPosition);
  yPosition += para1Lines.length * 7 + 10;

  // Paragraph 2
  const para2 = `The internship is scheduled to begin on ${startDate}. During this period, you will be engaged in tasks and projects aligned with the objectives of our team and overall organizational goals.`;
  const para2Lines = pdf.splitTextToSize(para2, maxWidth);
  pdf.text(para2Lines, margin, yPosition);
  yPosition += para2Lines.length * 7 + 10;

  // Paragraph 3
  const para3 = `Further details regarding your responsibilities, reporting structure, work schedule, and required documentation will be communicated to you separately. We expect all interns to demonstrate a professional attitude, maintain confidentiality, and actively contribute to the assigned work.`;
  const para3Lines = pdf.splitTextToSize(para3, maxWidth);
  pdf.text(para3Lines, margin, yPosition);
  yPosition += para3Lines.length * 7 + 10;

  // Paragraph 4
  const para4 = `Please confirm your acceptance of this offer by ${confirmationDeadline} by replying to this email or signing and returning the attached confirmation letter.`;
  const para4Lines = pdf.splitTextToSize(para4, maxWidth);
  pdf.text(para4Lines, margin, yPosition);
  yPosition += para4Lines.length * 7 + 10;

  // Paragraph 5
  const para5 = `We look forward to your association with Anix AI and hope this internship proves to be a valuable learning experience for you.`;
  const para5Lines = pdf.splitTextToSize(para5, maxWidth);
  pdf.text(para5Lines, margin, yPosition);
  yPosition += para5Lines.length * 7 + 20;

  // Signature
  pdf.text("Warm regards,", margin, yPosition);
  yPosition += 10;
  pdf.setFont("helvetica", "bold");
  pdf.text("HR team", margin, yPosition);
  yPosition += 7;
  pdf.setFont("helvetica", "normal");
  pdf.text("Anix AI", margin, yPosition);
  yPosition += 20;

  // Contact info
  pdf.setFontSize(10);
  pdf.text("Email: info@anix.io", margin, yPosition);
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