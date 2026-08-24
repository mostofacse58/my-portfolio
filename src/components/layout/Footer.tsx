import Link from 'next/link';
import { FaEnvelope, FaGlobe, FaLocationDot } from 'react-icons/fa6';
import { navLinks, socialLinks } from '@/data/navigation';
import { profile } from '@/data/profile';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="no-print bg-surface-2/60 border-line relative border-t">
      <div className="via-brand-500/50 absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent to-transparent" />

      <div className="container-page py-14">
        <div className="grid gap-10 md:grid-cols-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <Link href="/" className="flex items-center gap-2.5">
              <span className="from-brand-500 to-accent-500 text-onbrand grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br text-sm font-bold">
                {profile.initials}
              </span>
              <span className="text-fg text-base font-semibold">{profile.name}</span>
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-400">
              {profile.designation} · {profile.secondaryTitle}. {profile.yearsOfExperience}+ years
              building enterprise systems for manufacturing, government and SaaS.
            </p>

            <div className="mt-5 flex flex-wrap gap-2.5">
              {socialLinks.map(({ label, href, icon: Icon, hoverClass }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={`border-line bg-tint grid h-10 w-10 place-items-center rounded-xl border text-slate-400 transition-all hover:-translate-y-0.5 ${hoverClass}`}
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Nav */}
          <div className="md:col-span-3">
            <h3 className="text-fg text-sm font-semibold tracking-wider uppercase">Explore</h3>
            <ul className="mt-4 grid grid-cols-2 gap-y-2.5 md:grid-cols-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={`/${link.href}`}
                    className="hover:text-brand-300 text-sm text-slate-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <h3 className="text-fg text-sm font-semibold tracking-wider uppercase">Get in touch</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href={`mailto:${profile.email}`}
                  className="hover:text-brand-300 flex items-center gap-3 text-slate-400 transition-colors"
                >
                  <FaEnvelope className="text-brand-400 h-4 w-4 shrink-0" />
                  {profile.email}
                </a>
              </li>
              <li>
                <a
                  href={profile.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-300 flex items-center gap-3 text-slate-400 transition-colors"
                >
                  <FaGlobe className="text-brand-400 h-4 w-4 shrink-0" />
                  {profile.websiteLabel}
                </a>
              </li>
              <li className="flex items-center gap-3 text-slate-400">
                <FaLocationDot className="text-brand-400 h-4 w-4 shrink-0" />
                {profile.location}
              </li>
            </ul>
          </div>
        </div>

        <div className="border-line mt-12 flex flex-col items-center justify-between gap-3 border-t pt-6 text-xs text-slate-500 sm:flex-row">
          <p>
            © {year} {profile.name}. All rights reserved.
          </p>
          <p className="font-mono">Built with Next.js, Tailwind CSS &amp; Framer Motion</p>
        </div>
      </div>
    </footer>
  );
}
