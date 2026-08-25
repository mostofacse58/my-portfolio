import { FaAward, FaCertificate, FaClock, FaGraduationCap, FaLocationDot } from 'react-icons/fa6';
import Chip from '@/components/ui/Chip';
import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';
import { education, training } from '@/data/education';

export default function Education() {
  return (
    <section id="education" className="relative py-24 sm:py-28">
      <div className="container-page">
        <SectionHeading
          index="05"
          eyebrow="Education"
          title="Academic background"
          description="A Computer Science & Engineering degree — the foundation everything since has been built on — kept current with hands-on training in the stacks I ship with."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {education.map((item, index) => (
            <Reveal key={item.id} delay={index * 0.07}>
              <article className="glass hover:border-brand-400/25 h-full rounded-2xl p-7 transition-all hover:-translate-y-1">
                <span className="from-brand-500 to-accent-500 shadow-brand-500/20 text-onbrand grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br shadow-lg">
                  <FaGraduationCap className="h-5 w-5" />
                </span>

                <h3 className="text-fg mt-5 text-lg leading-snug font-semibold">{item.degree}</h3>

                {item.institution && (
                  <p className="text-brand-300 mt-2 text-sm">{item.institution}</p>
                )}

                <div className="mt-4 flex flex-wrap items-center gap-2">
                  <Chip>{item.period}</Chip>
                  {item.result && (
                    <Chip variant="success">
                      <FaAward className="mr-1.5 h-3 w-3" />
                      {item.result}
                    </Chip>
                  )}
                </div>

                {item.detail && (
                  <p className="mt-4 text-sm leading-relaxed text-slate-400">{item.detail}</p>
                )}
              </article>
            </Reveal>
          ))}
        </div>

        {/* ── Certifications & training ───────────────────────────────────────
            Rendered only when there is something to show. An empty `training`
            array leaves no heading and no empty grid behind. */}
        {training.length > 0 && (
          <div className="mt-16">
            <Reveal className="mb-8">
              <h3 className="text-fg flex items-center gap-3 text-xl font-semibold tracking-tight sm:text-2xl">
                <FaCertificate className="text-accent-400 h-5 w-5" aria-hidden />
                Certifications &amp; training
              </h3>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-400">
                Structured courses taken alongside full-time delivery work, to keep the stack
                current rather than to collect certificates.
              </p>
            </Reveal>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {training.map((item, index) => (
                <Reveal key={item.id} delay={index * 0.07}>
                  <article className="glass hover:border-accent-400/25 flex h-full flex-col rounded-2xl p-7 transition-all hover:-translate-y-1">
                    <span className="from-accent-500 to-brand-500 shadow-accent-500/20 text-onbrand grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br shadow-lg">
                      <FaCertificate className="h-5 w-5" />
                    </span>

                    <h4 className="text-fg mt-5 text-base leading-snug font-semibold">
                      {item.title}
                    </h4>

                    {item.provider && <p className="text-brand-300 mt-2 text-sm">{item.provider}</p>}

                    <div className="mt-4 flex flex-wrap items-center gap-2">
                      {item.inProgress ? (
                        <Chip variant="accent">In progress</Chip>
                      ) : (
                        item.period && <Chip>{item.period}</Chip>
                      )}
                      {item.duration && (
                        <Chip variant="brand">
                          <FaClock className="mr-1.5 h-3 w-3" />
                          {item.duration}
                        </Chip>
                      )}
                    </div>

                    {item.location && (
                      <p className="mt-3 flex items-center gap-2 text-xs text-slate-500">
                        <FaLocationDot className="h-3 w-3" aria-hidden />
                        {item.location}
                      </p>
                    )}

                    {item.topics && item.topics.length > 0 && (
                      <p className="mt-4 text-xs leading-relaxed text-slate-400">
                        {item.topics.join(' · ')}
                      </p>
                    )}

                    {(item.credentialId || item.url) && (
                      <p className="mt-4 font-mono text-xs text-slate-500">
                        {item.credentialId && <span>Credential {item.credentialId}</span>}
                        {item.url && (
                          <a
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-accent-300 focus-visible:outline-accent-400 rounded transition-colors focus-visible:outline-2 focus-visible:outline-offset-2"
                          >
                            {item.credentialId ? ' · Verify' : 'Verify certificate'}
                          </a>
                        )}
                      </p>
                    )}
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
