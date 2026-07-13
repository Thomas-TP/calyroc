import { Resend } from "resend";

export async function sendEmail({
  to,
  subject,
  html,
  text,
  replyTo,
}: {
  to: string;
  subject: string;
  html: string;
  text: string;
  replyTo?: string;
}): Promise<boolean> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set -- email not sent:", subject);
    return false;
  }

  try {
    const resend = new Resend(apiKey);
    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL ?? "Calyroc <hello@calyroc.com>",
      to,
      replyTo,
      subject,
      html,
      text,
    });
    return true;
  } catch (error) {
    console.error("Failed to send email:", subject, error);
    return false;
  }
}
