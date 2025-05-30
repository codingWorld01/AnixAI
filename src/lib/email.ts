import nodemailer from "nodemailer";

interface EmailData {
  to: string;
  subject: string;
  text: string;
  html: string;
}

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
});

/**
 * Sends an email using Nodemailer
 * @param emailData - The email data (to, subject, text, html)
 * @returns Promise that resolves when the email is sent
 * @throws Error if the email fails to send
 */
export async function sendEmail(emailData: EmailData): Promise<void> {
  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: emailData.to,
    subject: emailData.subject,
    text: emailData.text,
    html: emailData.html,
  };

  try {
    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("Failed to send email");
  }
}