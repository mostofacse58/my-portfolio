'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FaArrowRight, FaEnvelope, FaLocationDot } from 'react-icons/fa6';
import ResumeButton from '@/components/ui/ResumeButton';
import { socialLinks } from '@/data/navigation';
import { profile } from '@/data/profile';
import { marqueeTech } from '@/data/skills';
import { fadeUp, stagger } from '@/lib/motion';

/** Typewriter cycling through profile.roles */
function RotatingRole() {
  const roles = profile.roles;
  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[index % roles.length];
    const done = !deleting && text === current;
    const cleared = deleting && text === '';

    if (done) {
      const t = setTimeout(() => setDeleting(true), 1800);
      return () => clearTimeout(t);
    }
    if (cleared) {
      setDeleting(false);
      setIndex((i) => (i + 1) % roles.length);
      return;
    }

    const t = setTimeout(
      () =>
        setText(deleting ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1)),
      deleting ? 40 : 85,
    );
    return () => clearTimeout(t);
  }, [text, deleting, index, roles]);

  return (
    <span className="text-gradient" aria-label={profile.designation}>
      {text}
      <span className="bg-brand-400 ml-0.5 inline-block w-[2px] animate-pulse align-middle text-transparent">
        |
      </span>
    </span>
  );
}

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-dvh items-center pt-28 pb-20">
      <div className="container-page">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
          {/* ── Portrait ───────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="order-1 flex justify-center lg:col-span-5 lg:justify-start"
          >
            <div className="animate-float relative">
              <div className="from-brand-500/30 via-accent-500/20 absolute -inset-5 rounded-[2.5rem] bg-gradient-to-br to-transparent blur-2xl" />

              {/* Gradient hairline frame, offset so it reads as a printed edge
                  rather than a border — the portrait signature of this site. */}
              <div
                aria-hidden
                className="border-brand-500/40 absolute -inset-3 rounded-[2.25rem] border"
              />

              <div className="glow-ring bg-surface-2 border-line relative overflow-hidden rounded-[2rem] border">
                <Image
                  src={profile.photo}
                  alt={`${profile.name} — ${profile.designation} and ${profile.secondaryTitle}`}
                  width={440}
                  height={520}
                  priority
                  sizes="(max-width: 1024px) 70vw, 400px"
                  className="h-[22rem] w-[18rem] object-cover object-top sm:h-[26rem] sm:w-[21rem] lg:h-[29rem] lg:w-[23rem]"
                />
              </div>

              {/* Floating badges */}
              <div className="glass absolute -right-4 -bottom-5 rounded-2xl px-4 py-3 shadow-xl">
                <p className="text-fg text-2xl font-bold">{profile.yearsOfExperience}+</p>
                <p className="text-xs tracking-wide text-slate-400 uppercase">Years Experience</p>
              </div>

              <div className="glass absolute -top-4 -left-4 rounded-2xl px-4 py-3 shadow-xl">
                <p className="text-brand-300 font-mono text-xs">{profile.secondaryTitle}</p>
              </div>
            </div>
          </motion.div>

          {/* ── Copy ───────────────────────────────────────── */}
          <motion.div
            variants={stagger(0.09)}
            initial="hidden"
            animate="show"
            className="order-2 lg:col-span-7"
          >
            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-2.5">
              <span className="border-brand-500/30 bg-brand-500/10 text-brand-300 inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs font-medium">
                <span className="relative flex h-2 w-2">
                  <span className="bg-brand-400 absolute inline-flex h-full w-full animate-ping rounded-full opacity-75" />
                  <span className="bg-brand-400 relative inline-flex h-2 w-2 rounded-full" />
                </span>
                {profile.statusBadge}
              </span>
              <span className="border-line bg-tint inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-xs text-slate-400">
                <FaLocationDot className="text-brand-400 h-3 w-3" />
                {profile.location}
              </span>
            </motion.div>

            <motion.p variants={fadeUp} className="text-brand-400 mt-7 font-mono text-sm">
              Hello, I&apos;m
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="text-fg mt-2 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
            >
              {profile.name}
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-3 min-h-[3.5rem] text-xl font-semibold sm:min-h-[2.5rem] sm:text-2xl lg:text-3xl"
            >
              <RotatingRole />
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="mt-5 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg"
            >
              {profile.tagline}
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fadeUp} className="mt-9 flex flex-wrap items-center gap-3">
              <ResumeButton />

              <a
                href={`mailto:${profile.email}`}
                className="glass hover:border-brand-400/40 hover:text-fg inline-flex items-center gap-2.5 rounded-xl px-6 py-3.5 text-sm font-semibold text-slate-200 transition-all hover:-translate-y-0.5"
              >
                <FaEnvelope className="h-4 w-4" />
                Email me
              </a>

              <Link
                href="#projects"
                className="group text-brand-300 hover:text-brand-200 inline-flex items-center gap-2 px-2 py-3.5 text-sm font-semibold transition-colors"
              >
                See my work
                <FaArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>

            {/* Socials */}
            <motion.div variants={fadeUp} className="mt-9">
              <p className="mb-3 font-mono text-xs tracking-wider text-slate-500 uppercase">
                Find me on
              </p>
              <div className="flex flex-wrap gap-2.5">
                {socialLinks.map(({ label, href, icon: Icon, hoverClass }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    title={label}
                    className={`border-line bg-tint grid h-11 w-11 place-items-center rounded-xl border text-slate-400 transition-all hover:-translate-y-1 ${hoverClass}`}
                  >
                    <Icon className="h-[1.05rem] w-[1.05rem]" />
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* ── Stats ───────────────────────────────────────── */}
        <motion.dl
          variants={stagger(0.08, 0.4)}
          initial="hidden"
          animate="show"
          className="border-line mt-16 grid grid-cols-2 gap-4 border-t pt-10 lg:grid-cols-4"
        >
          {profile.stats.map((s) => (
            <motion.div key={s.label} variants={fadeUp}>
              <dt className="sr-only">{s.label}</dt>
              <dd>
                <span className="text-gradient block text-3xl font-bold sm:text-4xl">
                  {s.value}
                </span>
                <span className="mt-1 block text-xs tracking-wide text-slate-500 uppercase sm:text-sm">
                  {s.label}
                </span>
              </dd>
            </motion.div>
          ))}
        </motion.dl>
      </div>

      {/* ── Tech marquee ──────────────────────────────────── */}
      <div className="border-line bg-tint pointer-events-none absolute inset-x-0 bottom-0 overflow-hidden border-y py-3">
        <div className="animate-marquee flex w-max gap-8 whitespace-nowrap">
          {[...marqueeTech, ...marqueeTech].map((tech, i) => (
            <span key={`${tech}-${i}`} className="font-mono text-xs tracking-wider text-slate-600">
              {tech}
              <span className="text-brand-500/40 ml-8">▪</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
