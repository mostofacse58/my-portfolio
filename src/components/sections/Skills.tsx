import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';
import SkillBar from '@/components/ui/SkillBar';
import { coreSkills, techGroups } from '@/data/skills';

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-28">
      <div className="container-page">
        <SectionHeading
          index="02"
          eyebrow="Skills"
          title="What I am strongest at"
          description="The bars are my own assessment, ordered honestly — architecture and the .NET/SQL Server core first, the newer stack further down. Underneath is the full toolkit, without the scoring."
        />

        {/* Core proficiency */}
        <Reveal>
          <div className="glass rounded-2xl p-7 sm:p-9">
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <h3 className="text-fg text-xl font-semibold">Core proficiency</h3>
              <span className="font-mono text-xs text-slate-500">self-assessed</span>
            </div>
            <div className="rule-gradient mt-4 h-px w-20" aria-hidden />

            <div className="mt-8 grid gap-x-10 gap-y-6 md:grid-cols-2">
              {coreSkills.map((skill, i) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  delay={(i % 2) * 0.08}
                />
              ))}
            </div>
          </div>
        </Reveal>

        {/* Toolkit */}
        <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {techGroups.map((group, index) => {
            const Icon = group.icon;
            return (
              <Reveal key={group.id} delay={(index % 3) * 0.06}>
                <div className="glass group hover:border-brand-400/25 h-full rounded-2xl p-6 transition-all hover:-translate-y-1">
                  <div className="flex items-center gap-3">
                    <span
                      className={`grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br ${group.gradient} text-ink-950 shadow-lg`}
                    >
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="text-fg text-base font-semibold">{group.title}</h3>
                  </div>

                  <ul className="mt-5 flex flex-wrap gap-1.5">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="border-line bg-tint rounded-md border px-2.5 py-1 font-mono text-xs text-slate-400"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
