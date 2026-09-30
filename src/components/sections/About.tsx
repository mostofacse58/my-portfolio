import {
  FaBriefcase,
  FaEnvelope,
  FaGlobe,
  FaLanguage,
  FaLocationDot,
  FaPhone,
  FaQuoteLeft,
  FaWhatsapp,
} from 'react-icons/fa6';
import Chip from '@/components/ui/Chip';
import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';
import { languages, profile, strengths } from '@/data/profile';
import { domains, services } from '@/data/services';

const glance = [
  { label: 'Experience', value: `${profile.yearsOfExperience}+ years`, icon: FaBriefcase },
  { label: 'Location', value: profile.location, icon: FaLocationDot },
  { label: 'Email', value: profile.email, icon: FaEnvelope, href: `mailto:${profile.email}` },
  { label: 'Phone', value: profile.phone, icon: FaPhone, href: `tel:${profile.phoneIntl}` },
  {
    label: 'WhatsApp',
    value: profile.phone,
    icon: FaWhatsapp,
    href: profile.whatsapp,
    external: true,
  },
  {
    label: 'Website',
    value: profile.websiteLabel,
    icon: FaGlobe,
    href: profile.website,
    external: true,
  },
  {
    label: 'Languages',
    value: languages.map((l) => l.language).join(', '),
    icon: FaLanguage,
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-28">
      <div className="container-page">
        <SectionHeading
          index="01"
          eyebrow="About Me"
          title="Eleven years inside other people's factories"
          description="From the Army MGO Branch to leather, textile and energy manufacturing — and now SaaS built for a European market."
        />

        <div className="grid gap-6 lg:grid-cols-12">
          {/* Story */}
          <Reveal className="lg:col-span-7">
            <article className="glass h-full rounded-2xl p-7 sm:p-9">
              <h3 className="text-fg text-xl font-semibold">My engineering story</h3>
              <div className="rule-gradient mt-4 h-px w-20" aria-hidden />

              <div className="mt-6 space-y-4 text-[0.95rem] leading-relaxed text-slate-400">
                {profile.about.journey.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>

              <div className="border-brand-500/20 bg-brand-500/[0.07] mt-7 rounded-xl border p-5">
                <p className="text-brand-100/90 flex items-start gap-3 text-sm leading-relaxed">
                  <FaQuoteLeft className="text-brand-400 mt-1 h-3.5 w-3.5 shrink-0" />
                  <span>{profile.about.bio}</span>
                </p>
              </div>

              {strengths.length > 0 && (
                <div className="mt-7">
                  <h4 className="text-xs tracking-wider text-slate-500 uppercase">How I work</h4>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {strengths.map((strength) => (
                      <li key={strength}>
                        <Chip>{strength}</Chip>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </article>
          </Reveal>

          {/* At a glance + domains */}
          <div className="flex flex-col gap-6 lg:col-span-5">
            <Reveal delay={0.1}>
              <div className="glass rounded-2xl p-7 sm:p-8">
                <h3 className="text-fg text-xl font-semibold">At a glance</h3>
                <dl className="mt-6 space-y-4">
                  {glance.map(({ label, value, icon: Icon, href, external }) => (
                    <div key={label} className="flex items-start gap-3.5">
                      <span className="bg-brand-500/12 text-brand-400 mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-lg">
                        <Icon className="h-3.5 w-3.5" />
                      </span>
                      <div className="min-w-0">
                        <dt className="text-xs tracking-wider text-slate-500 uppercase">{label}</dt>
                        <dd className="mt-0.5 truncate text-sm font-medium text-slate-200">
                          {href ? (
                            <a
                              href={href}
                              target={external ? '_blank' : undefined}
                              rel={external ? 'noopener noreferrer' : undefined}
                              className="hover:text-brand-300 transition-colors"
                            >
                              {value}
                            </a>
                          ) : (
                            value
                          )}
                        </dd>
                      </div>
                    </div>
                  ))}
                </dl>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="glass rounded-2xl p-7 sm:p-8">
                <h3 className="text-fg text-xl font-semibold">Domain expertise</h3>
                <p className="mt-2 text-sm text-slate-400">
                  The sectors my systems have had to survive in.
                </p>

                <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                  {domains.map(({ id, label, icon: Icon }) => (
                    <li
                      key={id}
                      className="border-line bg-tint hover:border-brand-400/30 hover:bg-tint-strong flex items-center gap-3 rounded-xl border p-3 transition-all"
                    >
                      <Icon className="text-brand-400 h-4 w-4 shrink-0" />
                      <span className="text-xs leading-snug font-medium text-slate-300">
                        {label}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            {languages.length > 0 && (
              <Reveal delay={0.2}>
                <div className="glass rounded-2xl p-7 sm:p-8">
                  <h3 className="text-fg text-xl font-semibold">Languages</h3>
                  <p className="mt-2 text-sm text-slate-400">Self-assessed, as on my CV.</p>

                  <table className="mt-6 w-full text-left text-sm">
                    <thead>
                      <tr className="text-xs tracking-wider text-slate-500 uppercase">
                        <th scope="col" className="pb-3 font-medium">
                          Language
                        </th>
                        <th scope="col" className="pb-3 font-medium">
                          Read
                        </th>
                        <th scope="col" className="pb-3 font-medium">
                          Write
                        </th>
                        <th scope="col" className="pb-3 font-medium">
                          Speak
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-line divide-y">
                      {languages.map((l) => (
                        <tr key={l.language}>
                          <th scope="row" className="text-fg py-3 font-medium">
                            {l.language}
                          </th>
                          <td className="py-3 text-slate-400">{l.reading}</td>
                          <td className="py-3 text-slate-400">{l.writing}</td>
                          <td className="py-3 text-slate-400">{l.speaking}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Reveal>
            )}
          </div>
        </div>

        {/* What I do */}
        <Reveal className="mt-6">
          <div className="glass rounded-2xl p-7 sm:p-9">
            <h3 className="text-fg text-xl font-semibold">What I do</h3>
            <p className="mt-2 text-sm text-slate-400">
              Four things, done properly, for eleven years.
            </p>

            <ul className="mt-7 grid gap-5 md:grid-cols-2">
              {services.map(({ id, title, body, icon: Icon }) => (
                <li
                  key={id}
                  className="group border-line bg-tint hover:border-brand-400/30 hover:bg-tint-strong rounded-xl border p-6 transition-all hover:-translate-y-1"
                >
                  <span className="from-brand-500 to-accent-500 text-onbrand shadow-brand-500/20 grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br shadow-lg">
                    <Icon className="h-4 w-4" />
                  </span>
                  <h4 className="text-fg mt-4 text-base font-semibold">{title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">{body}</p>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
