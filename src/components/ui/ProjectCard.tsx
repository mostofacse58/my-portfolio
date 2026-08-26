import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight, FaLock, FaUpRightFromSquare } from 'react-icons/fa6';
import Chip from '@/components/ui/Chip';
import type { Project } from '@/types';

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="glass group hover:border-brand-400/30 hover:shadow-brand-500/10 flex h-full flex-col overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl">
      {/* Cover */}
      <Link
        href={`/projects/${project.slug}`}
        className="bg-surface-2 relative block aspect-16/10 overflow-hidden"
        tabIndex={-1}
        aria-hidden
      >
        <Image
          src={project.image}
          alt=""
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Vignette on the artwork itself — ink, not surface: fading a dark cover
            to white in the light theme washes out anything inside the image.

            Kept deliberately light. The covers are designed artwork with their own
            text in the lower half, and a heavy scrim (this was `from-ink-950` at
            full opacity) crushed it into the background. The category chip below
            carries its own backdrop, so it does not need a full-cover scrim to
            stay readable. */}
        <div className="from-ink-950/55 absolute inset-0 bg-gradient-to-t via-transparent to-transparent" />
        <span className="absolute top-4 left-4">
          <Chip variant="overlay">{project.category}</Chip>
        </span>
      </Link>

      {/* Body */}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-fg text-lg leading-snug font-semibold">
          <Link
            href={`/projects/${project.slug}`}
            className="hover:text-brand-300 transition-colors"
          >
            {project.name}
          </Link>
        </h3>

        <p className="text-brand-300/90 mt-2 text-sm">{project.tagline}</p>

        <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-slate-400">
          {project.shortDescription}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.mainTech.map((tech) => (
            <span
              key={tech}
              className="border-line bg-tint rounded-md border px-2 py-1 font-mono text-xs text-slate-400"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="border-line mt-6 flex items-center justify-between gap-3 border-t pt-5">
          <Link
            href={`/projects/${project.slug}`}
            className="group/btn btn-primary inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-semibold transition-all"
          >
            View Details
            <FaArrowRight className="h-3 w-3 transition-transform group-hover/btn:translate-x-0.5" />
          </Link>

          <div className="flex items-center gap-1.5">
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.name} — live site`}
                className="hover:border-brand-400/50 hover:text-brand-300 border-line grid h-9 w-9 place-items-center rounded-lg border text-slate-400 transition-colors"
              >
                <FaUpRightFromSquare className="h-3.5 w-3.5" />
              </a>
            ) : (
              <span
                title={project.liveNote ?? 'Internal system — no public URL'}
                className="border-line grid h-9 w-9 place-items-center rounded-lg border text-slate-600"
              >
                <FaLock className="h-3.5 w-3.5" />
              </span>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
