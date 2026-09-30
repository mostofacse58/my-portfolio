'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';
import { FaBars, FaXmark } from 'react-icons/fa6';
import ResumeButton from '@/components/ui/ResumeButton';
import ThemeToggle from '@/components/ui/ThemeToggle';
import { navLinks } from '@/data/navigation';
import { profile } from '@/data/profile';
import { cn } from '@/lib/utils';

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === '/';

  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('#home');

  /* Elevate the bar once the user scrolls */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* Highlight the section currently in view */
  useEffect(() => {
    if (!isHome) return;

    const sections = navLinks
      .map((l) => document.querySelector<HTMLElement>(l.href))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(`#${visible.target.id}`);
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: [0, 0.25, 0.5, 1] },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [isHome]);

  /* Lock body scroll while the mobile drawer is open */
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  /* Close on Escape */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const hrefFor = useCallback((hash: string) => (isHome ? hash : `/${hash}`), [isHome]);

  return (
    <>
      <a
        href="#about"
        className="focus:bg-brand-500 focus:text-onbrand sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[70] focus:rounded-lg focus:px-4 focus:py-2 focus:text-sm focus:font-semibold"
      >
        Skip to content
      </a>

      <header
        className={cn(
          'no-print fixed inset-x-0 top-0 z-50 transition-all duration-300',
          scrolled
            ? 'bg-surface/80 border-line border-b backdrop-blur-xl'
            : 'border-b border-transparent bg-transparent',
        )}
      >
        <nav
          aria-label="Primary"
          className="container-page flex h-[var(--nav-height)] items-center justify-between gap-4"
        >
          {/* Brand */}
          <Link
            href="/"
            className="group flex shrink-0 items-center gap-2.5"
            aria-label={`${profile.name} — home`}
          >
            <span className="from-brand-500 to-accent-500 shadow-brand-500/25 text-onbrand grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br text-sm font-bold shadow-lg transition-transform group-hover:scale-105">
              {profile.initials}
            </span>
            <span className="text-fg hidden text-sm font-semibold tracking-tight sm:block">
              {profile.shortName}
              <span className="text-brand-400 ml-1.5 font-mono text-xs font-normal">[erp]</span>
            </span>
          </Link>

          {/* Desktop links */}
          <ul className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => {
              const isActive = isHome && active === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={hrefFor(link.href)}
                    className={cn(
                      'relative block px-2.5 py-2 text-sm font-medium transition-colors xl:px-3',
                      isActive ? 'text-fg' : 'hover:text-fg text-slate-400',
                    )}
                  >
                    {link.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-active"
                        className="from-brand-400 to-accent-400 absolute inset-x-2 -bottom-0.5 h-0.5 rounded-full bg-gradient-to-r"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <ThemeToggle />

            {/* The wrapper carries the responsive hiding — putting `hidden` on the
                button itself would fight its own `inline-flex`. */}
            <span className="hidden sm:block">
              <ResumeButton label="Resume" size="sm" />
            </span>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              aria-controls="mobile-menu"
              className="glass grid h-10 w-10 place-items-center rounded-xl text-slate-200 lg:hidden"
            >
              {open ? <FaXmark className="h-4 w-4" /> : <FaBars className="h-4 w-4" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="bg-ink-950/70 fixed inset-0 z-40 backdrop-blur-sm lg:hidden"
            />
            <motion.div
              id="mobile-menu"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 320, damping: 34 }}
              className="bg-surface-2/95 border-line fixed top-0 right-0 z-50 h-dvh w-[min(20rem,85vw)] border-l px-6 pt-[calc(var(--nav-height)+1rem)] pb-8 backdrop-blur-xl lg:hidden"
            >
              <ul className="flex flex-col gap-1">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.05 }}
                  >
                    <Link
                      href={hrefFor(link.href)}
                      onClick={() => setOpen(false)}
                      className="hover:bg-tint hover:text-fg block rounded-xl px-4 py-3 text-base font-medium text-slate-300 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>

              <ResumeButton
                variant="soft"
                fullWidth
                className="mt-6"
                onNavigate={() => setOpen(false)}
              />

              <p className="mt-6 text-xs leading-relaxed text-slate-500">
                {profile.designation} · {profile.secondaryTitle}
                <br />
                {profile.location}
              </p>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
