import nodemailer from "nodemailer";

interface EmailData {
  from?: string;
  to: string;
  subject: string;
  text: string;
  html: string;
}

/**
 * Sends an email using GoDaddy's SMTP service
 * @param emailData - The email data (from, to, subject, text, html)
 * @returns Promise that resolves when the email is sent
 * @throws Error if the email fails to send
 */
export async function sendEmail(emailData: EmailData): Promise<void> {
  // Create a transporter using GoDaddy's SMTP settings
  const transporter = nodemailer.createTransport({
    host: "smtpout.secureserver.net", // GoDaddy SMTP server
    port: 465, // Use port 465 for SSL (recommended) or 587 for TLS
    secure: true, // Use SSL (true for port 465, false for port 587 with secureConnection: true)
    auth: {
      user: process.env.GODADDY_EMAIL || "info@anixai.io", // Your GoDaddy email address
      pass: process.env.GODADDY_EMAIL_PASSWORD || "", // Your GoDaddy email password
    },
  });

  const msg = {
    from: emailData.from || process.env.GODADDY_EMAIL || "info@anixai.io",
    to: emailData.to,
    subject: emailData.subject,
    text: emailData.text,
    html: emailData.html,
  };

  try {
    await transporter.sendMail(msg);
    console.log("Email sent successfully to", emailData.to);
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error(
      "Failed to send email: " + (error instanceof Error ? error.message : String(error))
    );
  }
}