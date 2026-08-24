import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa6';
import ProjectCard from '@/components/ui/ProjectCard';
import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';
import { featuredProjects, projects } from '@/data/projects';

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 sm:py-28">
      <div className="container-page">
        <SectionHeading
          index="04"
          eyebrow="Projects"
          title="Selected work"
          description="A live SaaS product, an enterprise Epicor rollout, and an 18-module ERP suite running in production. Open any card for the full story."
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <Reveal key={project.slug} delay={(index % 3) * 0.08}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 text-center">
          <Link
            href="/projects"
            className="glass group hover:border-brand-400/40 hover:text-fg inline-flex items-center gap-2.5 rounded-xl px-6 py-3.5 text-sm font-semibold text-slate-200 transition-all hover:-translate-y-0.5"
          >
            Browse all {projects.length} projects
            <FaArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
