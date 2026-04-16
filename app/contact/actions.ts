"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const MAX_FILE_BYTES = 25 * 1024 * 1024; // 25 MB — iCloud receiving limit
const MAX_TOTAL_BYTES = 40 * 1024 * 1024; // 40 MB — Resend API limit

export async function sendContactEmail(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const reason = formData.get("reason") as string;
  const message = formData.get("message") as string;

  if (!name || !email || !reason || !message) {
    return { error: "Please fill in all required fields." };
  }

  // Collect uploaded files (filter out empty file entries)
  const files = formData.getAll("images").filter(
    (f): f is File => f instanceof File && f.size > 0
  );

  // Validate individual file sizes
  const oversized = files.find((f) => f.size > MAX_FILE_BYTES);
  if (oversized) {
    return {
      error: `"${oversized.name}" is too large. Please keep each file under 25 MB.`,
    };
  }

  // Validate total size
  const totalBytes = files.reduce((sum, f) => sum + f.size, 0);
  if (totalBytes > MAX_TOTAL_BYTES) {
    return {
      error: `Total attachment size exceeds 40 MB. Please reduce the number or size of files.`,
    };
  }

  // Convert files to Resend attachment format
  const attachments = await Promise.all(
    files.map(async (file) => ({
      filename: file.name,
      content: Buffer.from(await file.arrayBuffer()),
    }))
  );

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
    ...(attachments.length > 0 && { attachments }),
  });

  if (error) {
    console.error("Resend error:", error);
    return { error: "Failed to send message. Please try again or email directly." };
  }

  return { success: true };
}
