import { FaBriefcase } from 'react-icons/fa6';
import Chip from '@/components/ui/Chip';
import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';
import { experiences } from '@/data/experience';

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-28">
      <div className="container-page">
        <SectionHeading
          index="03"
          eyebrow="Experience"
          title="Where the work happened"
          description="Eleven years across government, manufacturing and energy — three roles, each one further up the stack."
        />

        <div className="relative">
          {/* Single left spine — the whole timeline reads top to bottom on every
              breakpoint, so nothing has to reflow between mobile and desktop. */}
          <div
            aria-hidden
            className="from-brand-500/70 via-accent-500/30 absolute top-2 bottom-2 left-[1.15rem] w-px bg-gradient-to-b to-transparent"
          />

          <ol className="space-y-8">
            {experiences.map((job, index) => (
              <li key={job.id} className="relative">
                {/* Node */}
                <span
                  aria-hidden
                  /* brand-500/accent-500 rather than the -400 steps: those darken
                     in the light theme and would leave a near-black icon on a
                     dark fill. The inactive node is dark ink in BOTH themes, so
                     its icon uses literal white — a theme-following colour would
                     go invisible there. */
                  className={`border-surface absolute top-6 left-0 z-10 grid h-10 w-10 place-items-center rounded-full border-4 ${
                    job.current
                      ? 'from-brand-500 to-accent-500 bg-gradient-to-br'
                      : 'from-ink-700 to-ink-800 bg-gradient-to-br'
                  }`}
                >
                  <FaBriefcase
                    className={`h-3.5 w-3.5 ${job.current ? 'text-onbrand' : 'text-white/75'}`}
                  />
                </span>

                <Reveal delay={index * 0.06} className="ml-16">
                  <article className="glass hover:border-brand-400/25 rounded-2xl p-6 transition-all sm:p-7">
                    <div className="flex flex-wrap items-center gap-2">
                      <Chip variant={job.current ? 'success' : 'default'}>
                        {job.period}
                        {job.current && ' · Current'}
                      </Chip>
                      <Chip>{job.duration}</Chip>
                    </div>

                    <h3 className="text-fg mt-4 text-lg leading-snug font-semibold">{job.role}</h3>

                    {job.company && (
                      <p className="text-brand-300 mt-1.5 text-sm font-medium">{job.company}</p>
                    )}

                    <p className="mt-4 text-sm leading-relaxed text-slate-400">{job.summary}</p>

                    {job.projects.length > 0 && (
                      <div className="border-line mt-5 border-t pt-4">
                        <p className="mb-2.5 font-mono text-xs tracking-wider text-slate-500 uppercase">
                          Systems delivered
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {job.projects.map((project) => (
                            <Chip key={project} variant="accent">
                              {project}
                            </Chip>
                          ))}
                        </div>
                      </div>
                    )}
                  </article>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
