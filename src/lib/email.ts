import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY || "");

interface EmailData {
  from?: string;
  to: string;
  subject: string;  
  text: string;
  html: string;
}

/**
 * Sends an email using SendGrid
 * @param emailData - The email data (from, to, subject, text, html)
 * @returns Promise that resolves when the email is sent
 * @throws Error if the email fails to send
 */
export async function sendEmail(emailData: EmailData): Promise<void> {
  const msg = {
    from: "yatharthaurangpure27@gmail.com",
    to: emailData.to,
    subject: emailData.subject,
    text: emailData.text,
    html: emailData.html,
  };

  try {
    await sgMail.send(msg);
    console.log("Email sent successfully to", emailData.to);
  } catch (error) {
    console.error("Error sending email:", error);

    if (error instanceof Error && "response" in error) {
      const sendGridError = error as any;
      console.error("SendGrid error response:", sendGridError.response?.body);
      throw new Error(
        `Failed to send email: ${error.message} - ${sendGridError.response?.body?.errors?.[0]?.message || "Unknown error"
        }`
      );
    }
    throw new Error("Failed to send email: " + (error instanceof Error ? error.message : String(error)));
  }
}