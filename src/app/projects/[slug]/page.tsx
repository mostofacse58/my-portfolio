import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  FaArrowLeft,
  FaArrowRight,
  FaCircleCheck,
  FaLock,
  FaUpRightFromSquare,
} from 'react-icons/fa6';
import Chip from '@/components/ui/Chip';
import Reveal from '@/components/ui/Reveal';
import { getProjectBySlug, projects } from '@/data/projects';

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) return { title: 'Project not found' };

  return {
    title: project.name,
    description: project.shortDescription,
    openGraph: {
      title: project.name,
      description: project.shortDescription,
      images: [{ url: project.image, alt: project.name }],
    },
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  const index = projects.findIndex((p) => p.slug === slug);
  const next = projects[(index + 1) % projects.length];
  /* Several of these are closed client systems with nothing published beyond a
     summary. Rather than pad the page out, the features block is skipped and
     the reader is told plainly that the rest is available in conversation. */
  const hasFeatures = Boolean(project.features?.length);

  return (
    <article className="py-32 sm:py-36">
      <div className="container-page">
        {/* ── Header ─────────────────────────────────────── */}
        <Reveal>
          <Link
            href="/projects"
            className="hover:text-brand-300 inline-flex items-center gap-2 text-sm text-slate-400 transition-colors"
          >
            <FaArrowLeft className="h-3 w-3" />
            Back to all projects
          </Link>

          <div className="mt-6 flex flex-wrap items-center gap-2.5">
            <Chip variant="brand">{project.category}</Chip>
            <Chip>{project.role}</Chip>
            <Chip>{project.timeline}</Chip>
          </div>

          <h1 className="text-fg mt-5 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            {project.name}
          </h1>
          <p className="text-brand-300/90 mt-3 max-w-3xl text-lg">{project.tagline}</p>
        </Reveal>

        {/* ── Cover ──────────────────────────────────────── */}
        <Reveal delay={0.08} className="mt-10">
          <div className="glow-ring bg-surface-2 border-line relative aspect-16/9 overflow-hidden rounded-2xl border sm:aspect-21/9">
            <Image
              src={project.image}
              alt={`${project.name} cover`}
              fill
              priority
              sizes="(max-width: 1280px) 100vw, 1280px"
              className="object-cover"
            />
            {/* ink, not surface — see ProjectCard: the cover is dark in both themes.
                Light-touch for the same reason: this crop is 21:9, so the cover's
                own text sits in the lower half of what remains visible. */}
            <div className="from-ink-950/55 absolute inset-0 bg-gradient-to-t via-transparent to-transparent" />
          </div>
        </Reveal>

        {/* ── Action buttons ─────────────────────────────── */}
        <Reveal delay={0.12} className="mt-8">
          <div className="flex flex-wrap items-center gap-3">
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="from-brand-500 to-accent-500 shadow-brand-500/25 text-onbrand inline-flex items-center gap-2.5 rounded-xl bg-gradient-to-r px-6 py-3.5 text-sm font-semibold shadow-lg transition-all hover:-translate-y-0.5 hover:brightness-110"
              >
                <FaUpRightFromSquare className="h-4 w-4" />
                View live project
              </a>
            ) : (
              <span className="glass inline-flex cursor-not-allowed items-center gap-2.5 rounded-xl px-6 py-3.5 text-sm font-semibold text-slate-500">
                <FaLock className="h-3.5 w-3.5" />
                {project.liveNote ?? 'Internal system — no public URL'}
              </span>
            )}

            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="glass hover:border-line-strong hover:text-fg inline-flex items-center gap-2.5 rounded-xl px-6 py-3.5 text-sm font-semibold text-slate-200 transition-all hover:-translate-y-0.5"
              >
                <FaUpRightFromSquare className="h-4 w-4" />
                Source repository
              </a>
            ) : (
              <span className="glass inline-flex cursor-not-allowed items-center gap-2.5 rounded-xl px-6 py-3.5 text-sm font-semibold text-slate-500">
                <FaLock className="h-3.5 w-3.5" />
                {project.repoNote ?? 'Private client repository'}
              </span>
            )}
          </div>

          {project.privateRepo && (
            <p className="mt-3 max-w-2xl text-xs leading-relaxed text-slate-500">
              This system was built under an employment or client contract, so the source code and
              live environment are not mine to publish. I am happy to walk through the architecture,
              schema design and trade-offs in an interview.
            </p>
          )}
        </Reveal>

        {/* ── Body ───────────────────────────────────────── */}
        <div className="mt-16 grid gap-10 lg:grid-cols-12">
          <div className="space-y-12 lg:col-span-8">
            <Reveal>
              <h2 className="text-fg text-2xl font-semibold">Overview</h2>
              <div className="rule-gradient mt-4 h-px w-20" aria-hidden />
              <div className="mt-6 space-y-4 text-[0.95rem] leading-relaxed text-slate-400">
                {project.description.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </Reveal>

            {hasFeatures && (
              <Reveal>
                <h2 className="text-fg text-2xl font-semibold">
                  {project.category === 'Implementation' ? 'Scope of work' : 'Modules & features'}
                </h2>
                <div className="rule-gradient mt-4 h-px w-20" aria-hidden />
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {project.features?.map((feature) => (
                    <li
                      key={feature}
                      className="border-line bg-tint flex items-start gap-3 rounded-xl border p-4 text-[0.9rem] leading-relaxed text-slate-300"
                    >
                      <FaCircleCheck className="text-brand-400 mt-0.5 h-4 w-4 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </Reveal>
            )}

            <Reveal>
              <div className="glass border-l-brand-500/60 rounded-2xl border-l-2 p-6">
                <h2 className="text-fg text-base font-semibold">Want the detail?</h2>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  The architecture decisions, schema design and the problems that nearly broke this
                  one are best covered in conversation — none of it is published, and I would rather
                  talk it through than summarise it here.
                </p>
                <Link
                  href="/#contact"
                  className="text-brand-300 hover:text-brand-200 mt-4 inline-flex items-center gap-2 text-sm font-semibold transition-colors"
                >
                  Get in touch
                  <FaArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </Reveal>
          </div>

          {/* ── Sidebar ──────────────────────────────────── */}
          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-28 lg:space-y-6">
              <Reveal>
                <div className="glass rounded-2xl p-6">
                  <h2 className="text-fg text-sm font-semibold tracking-wider uppercase">
                    Technology stack
                  </h2>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <li key={tech}>
                        <span className="border-line bg-tint inline-flex rounded-lg border px-2.5 py-1.5 font-mono text-xs text-slate-300">
                          {tech}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              <Reveal delay={0.06} className="mt-6 lg:mt-0">
                <div className="glass rounded-2xl p-6">
                  <h2 className="text-fg text-sm font-semibold tracking-wider uppercase">
                    At a glance
                  </h2>
                  <dl className="mt-4 space-y-3.5 text-sm">
                    <div>
                      <dt className="text-xs text-slate-500">My role</dt>
                      <dd className="mt-0.5 text-slate-200">{project.role}</dd>
                    </div>
                    <div>
                      <dt className="text-xs text-slate-500">Status</dt>
                      <dd className="mt-0.5 text-slate-200">{project.timeline}</dd>
                    </div>
                    <div>
                      <dt className="text-xs text-slate-500">Category</dt>
                      <dd className="mt-0.5 text-slate-200">{project.category}</dd>
                    </div>
                  </dl>
                </div>
              </Reveal>

              <Reveal delay={0.1} className="mt-6 lg:mt-0">
                <Link
                  href={`/projects/${next.slug}`}
                  className="glass group hover:border-brand-400/30 block rounded-2xl p-6 transition-all hover:-translate-y-0.5"
                >
                  <span className="text-xs tracking-wider text-slate-500 uppercase">
                    Next project
                  </span>
                  <span className="mt-2 flex items-center justify-between gap-3">
                    <span className="group-hover:text-brand-300 text-fg text-sm font-semibold transition-colors">
                      {next.name}
                    </span>
                    <FaArrowRight className="text-brand-400 h-3.5 w-3.5 shrink-0 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            </div>
          </aside>
        </div>

        {/* ── CTA ────────────────────────────────────────── */}
        <Reveal className="mt-20">
          <div className="glass flex flex-col items-center gap-5 rounded-2xl p-10 text-center">
            <h2 className="text-fg text-2xl font-semibold">
              Want to talk through how this was built?
            </h2>
            <p className="max-w-xl text-sm text-slate-400">
              I enjoy the architecture conversation as much as the code. Let&apos;s talk.
            </p>
            <Link
              href="/#contact"
              className="from-brand-500 to-accent-500 text-onbrand inline-flex items-center gap-2.5 rounded-xl bg-gradient-to-r px-6 py-3.5 text-sm font-semibold transition-all hover:brightness-110"
            >
              Get in touch
              <FaArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </Reveal>
      </div>
    </article>
  );
}
