'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaCircleCheck, FaPaperPlane, FaTriangleExclamation } from 'react-icons/fa6';

type Status = 'idle' | 'sending' | 'success' | 'error';

const inputClass =
  'w-full rounded-xl border border-line bg-tint px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 transition-colors focus:border-brand-400/60 focus:bg-tint-strong focus:outline-none';

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [message, setMessage] = useState('');

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());

    setStatus('sending');
    setMessage('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = (await res.json()) as { ok?: boolean; message?: string };

      if (!res.ok || !data.ok) throw new Error(data.message ?? 'Something went wrong.');

      setStatus('success');
      setMessage(data.message ?? 'Thanks — your message is on its way.');
      form.reset();
    } catch (err) {
      setStatus('error');
      setMessage(
        err instanceof Error
          ? err.message
          : 'Could not send right now. Please email me directly instead.',
      );
    }
  }

  return (
    <form onSubmit={handleSubmit} className="glass rounded-2xl p-7 sm:p-8" noValidate>
      <h3 className="text-fg text-xl font-semibold">Send me a message</h3>
      <p className="mt-2 text-sm text-slate-400">
        Tell me about the role or the project — I reply within a day.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-xs font-medium text-slate-300">
            Your name <span className="text-brand-400">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Jane Rahman"
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="email" className="mb-1.5 block text-xs font-medium text-slate-300">
            Email <span className="text-brand-400">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@company.com"
            className={inputClass}
          />
        </div>
      </div>

      <div className="mt-4">
        <label htmlFor="subject" className="mb-1.5 block text-xs font-medium text-slate-300">
          Subject
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          placeholder="ERP architecture / senior engineer role"
          className={inputClass}
        />
      </div>

      <div className="mt-4">
        <label htmlFor="message" className="mb-1.5 block text-xs font-medium text-slate-300">
          Message <span className="text-brand-400">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="A few lines about what you are building…"
          className={`${inputClass} resize-y`}
        />
      </div>

      {/* Honeypot — hidden from humans, catches naive bots */}
      <input
        type="text"
        name="company_website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden
        className="pointer-events-none absolute -left-[9999px] h-0 w-0 opacity-0"
      />

      <button
        type="submit"
        disabled={status === 'sending'}
        className="from-brand-500 to-accent-500 shadow-brand-500/20 text-onbrand mt-6 inline-flex w-full items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r px-6 py-3.5 text-sm font-semibold shadow-lg transition-all hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {status === 'sending' ? (
          <>
            <span className="border-onbrand/30 border-t-onbrand h-4 w-4 animate-spin rounded-full border-2" />
            Sending…
          </>
        ) : (
          <>
            <FaPaperPlane className="h-4 w-4" />
            Send message
          </>
        )}
      </button>

      {message && (
        <motion.p
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          role="status"
          className={`mt-4 flex items-start gap-2.5 rounded-xl border p-3.5 text-sm ${
            status === 'success'
              ? 'border-emerald-500/30 bg-emerald-500/10 text-emerald-300'
              : 'border-rose-500/30 bg-rose-500/10 text-rose-300'
          }`}
        >
          {status === 'success' ? (
            <FaCircleCheck className="mt-0.5 h-4 w-4 shrink-0" />
          ) : (
            <FaTriangleExclamation className="mt-0.5 h-4 w-4 shrink-0" />
          )}
          {message}
        </motion.p>
      )}
    </form>
  );
}
