import type { Metadata } from 'next';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa6';
import ProjectCard from '@/components/ui/ProjectCard';
import Reveal from '@/components/ui/Reveal';
import { projects } from '@/data/projects';
import { profile } from '@/data/profile';

export const metadata: Metadata = {
  title: 'Projects',
  description: `Enterprise ERP systems, SaaS products and web applications built by ${profile.name}.`,
};

export default function ProjectsPage() {
  return (
    <section className="py-32 sm:py-36">
      <div className="container-page">
        <Reveal>
          <Link
            href="/#projects"
            className="hover:text-brand-300 inline-flex items-center gap-2 text-sm text-slate-400 transition-colors"
          >
            <FaArrowLeft className="h-3 w-3" />
            Back to portfolio
          </Link>

          <h1 className="text-fg mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
            All <span className="text-gradient">Projects</span>
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-400">
            {projects.length} builds across enterprise ERP, SaaS and the web. Each one opens into
            the detail — scope, stack and where it runs.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal key={project.slug} delay={(index % 3) * 0.08}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
