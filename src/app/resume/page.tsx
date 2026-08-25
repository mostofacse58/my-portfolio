import type { Metadata } from 'next';
import Link from 'next/link';
import { FaArrowLeft, FaEnvelope, FaGlobe, FaLocationDot, FaPhone } from 'react-icons/fa6';
import PrintButton from '@/components/ui/PrintButton';
import Reveal from '@/components/ui/Reveal';
import { education, training } from '@/data/education';
import { experiences } from '@/data/experience';
import { socialLinks } from '@/data/navigation';
import { languages, profile } from '@/data/profile';
import { featuredProjects } from '@/data/projects';
import { coreSkills, techGroups } from '@/data/skills';

export const metadata: Metadata = {
  title: 'Resume',
  description: `Resume of ${profile.name} — ${profile.designation} & ${profile.secondaryTitle}, ${profile.yearsOfExperience}+ years in enterprise ERP.`,
};

/**
 * A print-optimised resume built from the same data layer as the rest of the
 * site, so it can never drift out of step with the portfolio. `@media print`
 * in globals.css strips the nav, footer and this page's own chrome.
 */
export default function ResumePage() {
  return (
    <section className="py-32 sm:py-36 print:py-0">
      {/* The inner wrapper caps the measure — `container-page` already sets a
          max-width, and stacking a second one on the same element would leave
          the winner up to Tailwind's generated order. */}
      <div className="container-page">
        <div className="mx-auto max-w-4xl">
          <Reveal className="no-print">
            <Link
              href="/"
              className="hover:text-brand-300 inline-flex items-center gap-2 text-sm text-slate-400 transition-colors"
            >
              <FaArrowLeft className="h-3 w-3" />
              Back to portfolio
            </Link>
          </Reveal>

          {/* ── Header ─────────────────────────────────────── */}
          <header className="print-break mt-8 print:mt-0">
            <h1 className="text-fg text-4xl font-bold tracking-tight sm:text-5xl">
              {profile.name}
            </h1>
            <p className="text-gradient mt-2 text-lg font-semibold">
              {profile.designation} &amp; {profile.secondaryTitle}
            </p>

            <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-400">
              <li>
                <a
                  href={`mailto:${profile.email}`}
                  className="hover:text-brand-300 flex items-center gap-2 transition-colors"
                >
                  <FaEnvelope className="text-brand-400 h-3.5 w-3.5" />
                  {profile.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${profile.phoneIntl}`}
                  className="hover:text-brand-300 flex items-center gap-2 transition-colors"
                >
                  <FaPhone className="text-brand-400 h-3.5 w-3.5" />
                  {profile.phone}
                </a>
              </li>
              <li>
                <a
                  href={profile.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-300 flex items-center gap-2 transition-colors"
                >
                  <FaGlobe className="text-brand-400 h-3.5 w-3.5" />
                  {profile.websiteLabel}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FaLocationDot className="text-brand-400 h-3.5 w-3.5" />
                {profile.location}
              </li>
            </ul>

            <ul className="mt-2 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-400">
              {socialLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-brand-300 transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <PrintButton />
              <p className="no-print text-xs text-slate-500">
                Choose &ldquo;Save as PDF&rdquo; as the destination.
              </p>
            </div>
          </header>

          {/* ── Summary ────────────────────────────────────── */}
          <ResumeSection title="Profile">
            <p className="text-[0.95rem] leading-relaxed text-slate-400">
              {profile.about.journey[0]}
            </p>
            <p className="mt-3 text-[0.95rem] leading-relaxed text-slate-400">
              {profile.about.journey[1]}
            </p>
          </ResumeSection>

          {/* ── Experience ─────────────────────────────────── */}
          <ResumeSection title="Experience">
            <ol className="space-y-7">
              {experiences.map((job) => (
                <li key={job.id} className="print-break">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h3 className="text-fg text-base font-semibold">{job.role}</h3>
                    <span className="font-mono text-xs text-slate-500">
                      {job.period} · {job.duration}
                    </span>
                  </div>
                  {job.company && (
                    <p className="text-brand-300 mt-1 text-sm font-medium">{job.company}</p>
                  )}
                  <p className="mt-2.5 text-sm leading-relaxed text-slate-400">{job.summary}</p>
                  {job.projects.length > 0 && (
                    <p className="mt-2 text-xs text-slate-500">
                      <span className="font-medium">Systems:</span> {job.projects.join(' · ')}
                    </p>
                  )}
                </li>
              ))}
            </ol>
          </ResumeSection>

          {/* ── Skills ─────────────────────────────────────── */}
          <ResumeSection title="Core proficiency">
            <ul className="grid gap-x-10 gap-y-2 sm:grid-cols-2">
              {coreSkills.map((skill) => (
                <li key={skill.name} className="flex items-baseline justify-between gap-3 text-sm">
                  <span className="text-slate-300">{skill.name}</span>
                  <span className="text-brand-300 font-mono text-xs tabular-nums">
                    {skill.level}%
                  </span>
                </li>
              ))}
            </ul>
          </ResumeSection>

          <ResumeSection title="Technology">
            <dl className="space-y-2.5">
              {techGroups.map((group) => (
                <div key={group.id} className="flex flex-wrap gap-x-3 text-sm">
                  <dt className="text-fg w-28 shrink-0 font-medium">{group.title}</dt>
                  <dd className="flex-1 text-slate-400">{group.items.join(' · ')}</dd>
                </div>
              ))}
            </dl>
          </ResumeSection>

          {/* ── Projects ───────────────────────────────────── */}
          <ResumeSection title="Selected projects">
            <ol className="space-y-5">
              {featuredProjects.map((project) => (
                <li key={project.slug} className="print-break">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h3 className="text-fg text-sm font-semibold">{project.name}</h3>
                    <span className="font-mono text-xs text-slate-500">{project.category}</span>
                  </div>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-400">
                    {project.shortDescription}
                  </p>
                  <p className="mt-1.5 font-mono text-xs text-slate-500">
                    {project.mainTech.join(' · ')}
                    {project.liveUrl && ` · ${project.liveUrl.replace(/^https?:\/\/|\/$/g, '')}`}
                  </p>
                </li>
              ))}
            </ol>
          </ResumeSection>

          {/* ── Education ──────────────────────────────────── */}
          <ResumeSection title="Education">
            <ol className="space-y-4">
              {education.map((item) => (
                <li key={item.id} className="print-break">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h3 className="text-fg text-sm font-semibold">{item.degree}</h3>
                    <span className="font-mono text-xs text-slate-500">{item.period}</span>
                  </div>
                  {item.institution && (
                    <p className="text-brand-300 mt-1 text-sm">
                      {item.institution}
                      {item.result && <span className="text-slate-500"> · {item.result}</span>}
                    </p>
                  )}
                  {item.detail && (
                    <p className="mt-1.5 text-sm leading-relaxed text-slate-400">{item.detail}</p>
                  )}
                </li>
              ))}
            </ol>
          </ResumeSection>

          {/* ── Certifications & training ──────────────────── */}
          {training.length > 0 && (
            <ResumeSection title="Certifications & training">
              <ol className="space-y-4">
                {training.map((item) => (
                  <li key={item.id} className="print-break">
                    <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                      <h3 className="text-fg text-sm font-semibold">{item.title}</h3>
                      <span className="font-mono text-xs text-slate-500">
                        {[item.inProgress ? 'In progress' : item.period, item.duration]
                          .filter(Boolean)
                          .join(' · ')}
                      </span>
                    </div>
                    {item.provider && (
                      <p className="text-brand-300 mt-1 text-sm">
                        {item.provider}
                        {item.location && <span className="text-slate-500"> · {item.location}</span>}
                      </p>
                    )}
                    {item.topics && item.topics.length > 0 && (
                      <p className="mt-1.5 font-mono text-xs text-slate-500">
                        {item.topics.join(' · ')}
                      </p>
                    )}
                  </li>
                ))}
              </ol>
            </ResumeSection>
          )}

          {/* ── Languages ──────────────────────────────────── */}
          <ResumeSection title="Languages">
            <ul className="flex flex-wrap gap-x-8 gap-y-2">
              {languages.map((item) => (
                <li key={item.language} className="text-sm">
                  <span className="text-fg font-semibold">{item.language}</span>
                  <span className="ml-2 text-slate-400">
                    Reading {item.reading.toLowerCase()} · Writing {item.writing.toLowerCase()} ·
                    Speaking {item.speaking.toLowerCase()}
                  </span>
                </li>
              ))}
            </ul>
          </ResumeSection>
        </div>
      </div>
    </section>
  );
}

function ResumeSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="border-line mt-10 border-t pt-8">
      <h2 className="text-fg mb-5 text-xs font-semibold tracking-[0.2em] uppercase">{title}</h2>
      {children}
    </section>
  );
}
