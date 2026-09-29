import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_NAME_LENGTH = 100;
const MAX_SUBJECT_LENGTH = 100;
const MAX_BODY_LENGTH = 5000;

// Best-effort only: this resets on every cold start and isn't shared across
// serverless instances, so it won't stop a determined attacker — but it
// blocks naive repeat-submit spam without needing an external store.
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const requestLog = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (requestLog.get(ip) ?? []).filter(
    (t) => now - t < RATE_LIMIT_WINDOW_MS,
  );
  recent.push(now);
  requestLog.set(ip, recent);
  return recent.length > RATE_LIMIT_MAX_REQUESTS;
}

// Header injection defense-in-depth: strip CR/LF before these land in the
// email subject line.
function sanitizeHeaderValue(value: string): string {
  return value.replace(/[\r\n]+/g, " ").trim();
}

export async function POST(req: Request) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many requests, please try again later" },
      { status: 429 },
    );
  }

  const { name, email, subject, body } = await req.json();

  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof body !== "string" ||
    !name.trim() ||
    !email.trim() ||
    !body.trim()
  ) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  if (!EMAIL_RE.test(email)) {
    return NextResponse.json(
      { error: "Invalid email address" },
      { status: 400 },
    );
  }

  if (
    name.length > MAX_NAME_LENGTH ||
    (typeof subject === "string" && subject.length > MAX_SUBJECT_LENGTH) ||
    body.length > MAX_BODY_LENGTH
  ) {
    return NextResponse.json({ error: "Field too long" }, { status: 400 });
  }

  const safeName = sanitizeHeaderValue(name);
  const safeSubject = typeof subject === "string" ? sanitizeHeaderValue(subject) : "";

  try {
    await resend.emails.send({
      from: "dobdog contact form <contact@dobdog.com>",
      to: "contact@dobdog.com",
      replyTo: email,
      subject: safeSubject
        ? `[${safeSubject}] Message from ${safeName}`
        : `Message from ${safeName}`,
      text: `From: ${safeName} <${email}>\n\n${body}`,
    });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Resend error:", err);
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}
