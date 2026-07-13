import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { name, email, subject, body } = await req.json();

  if (!name || !email || !body) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  try {
    await resend.emails.send({
      from: "dobdog contact form <contact@dobdog.com>",
      to: "contact@dobdog.com",
      replyTo: email,
      subject: subject
        ? `[${subject}] Message from ${name}`
        : `Message from ${name}`,
      text: `From: ${name} <${email}>\n\n${body}`,
    });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Resend error:", err);
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}
