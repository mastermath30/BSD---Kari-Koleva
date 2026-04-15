"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const reason = formData.get("reason") as string;
  const message = formData.get("message") as string;

  if (!name || !email || !reason || !message) {
    return { error: "Please fill in all required fields." };
  }

  const { error } = await resend.emails.send({
    from: "Kari Koleva Website <noreply@karikoleva.com>",
    to: "karikoleva@icloud.com",
    replyTo: email,
    subject: `New message from ${name} — ${reason}`,
    text: [
      `Name: ${name}`,
      `Email: ${email}`,
      `Reason: ${reason}`,
      ``,
      `Message:`,
      message,
    ].join("\n"),
  });

  if (error) {
    console.error("Resend error:", error);
    return { error: "Failed to send message. Please try again or email directly." };
  }

  return { success: true };
}
