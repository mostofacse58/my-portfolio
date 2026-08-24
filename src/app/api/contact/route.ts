import { NextResponse } from 'next/server';
import { profile } from '@/data/profile';

export const runtime = 'nodejs';

type ContactPayload = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
  /** Honeypot field — must stay empty */
  company_website?: string;
};

/** Very small in-memory rate limiter (per warm instance). */
const hits = new Map<string, { count: number; resetAt: number }>();
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const record = hits.get(ip);

  if (!record || now > record.resetAt) {
    hits.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }
  record.count += 1;
  return record.count > MAX_PER_WINDOW;
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export async function POST(request: Request) {
  try {
    const ip =
      request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ??
      request.headers.get('x-real-ip') ??
      'unknown';

    if (rateLimited(ip)) {
      return NextResponse.json(
        { ok: false, message: 'Too many messages. Please try again a little later.' },
        { status: 429 },
      );
    }

    const body = (await request.json()) as ContactPayload;

    // Honeypot: silently accept so bots do not learn anything.
    if (body.company_website) {
      return NextResponse.json({ ok: true, message: 'Thanks — your message was received.' });
    }

    const name = body.name?.trim() ?? '';
    const email = body.email?.trim() ?? '';
    const subject = body.subject?.trim() || 'Portfolio enquiry';
    const message = body.message?.trim() ?? '';

    if (name.length < 2) {
      return NextResponse.json({ ok: false, message: 'Please enter your name.' }, { status: 400 });
    }
    if (!emailPattern.test(email)) {
      return NextResponse.json(
        { ok: false, message: 'Please enter a valid email address.' },
        { status: 400 },
      );
    }
    if (message.length < 10) {
      return NextResponse.json(
        { ok: false, message: 'Please write at least a sentence or two.' },
        { status: 400 },
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const to = process.env.CONTACT_TO_EMAIL;
    const from = process.env.CONTACT_FROM_EMAIL;

    /* No mail provider configured — log and succeed so the form still works locally. */
    if (!apiKey || !to || !from) {
      console.info('[contact] (no mail provider configured)', { name, email, subject });
      return NextResponse.json({
        ok: true,
        message: `Message received. Email delivery is not configured yet — please also reach me directly at ${profile.email}.`,
      });
    }

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject: `[Portfolio] ${subject}`,
        text: `From: ${name} <${email}>\n\n${message}`,
      }),
    });

    if (!res.ok) {
      console.error('[contact] provider error', await res.text());
      return NextResponse.json(
        { ok: false, message: 'Could not send right now. Please email me directly.' },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true, message: 'Thanks — I will get back to you shortly.' });
  } catch (error) {
    console.error('[contact] unexpected error', error);
    return NextResponse.json(
      { ok: false, message: 'Unexpected error. Please email me directly.' },
      { status: 500 },
    );
  }
}
