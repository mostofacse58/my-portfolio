import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';
import SkillBar from '@/components/ui/SkillBar';
import { skillGroups } from '@/data/skills';

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-28">
      <div className="container-page">
        <SectionHeading
          index="02"
          eyebrow="Skills"
          title="The toolkit"
          description="Grouped by where it lives in the stack. The bars are my own assessment, ordered honestly — the ones I would happily be interviewed on are at the top of each list."
        />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {skillGroups.map((group, index) => {
            const Icon = group.icon;
            return (
              <Reveal key={group.id} delay={(index % 4) * 0.06}>
                <div className="glass hover:border-brand-400/25 h-full rounded-2xl p-6 transition-all hover:-translate-y-1">
                  <div className="flex items-center gap-3">
                    <span
                      className={`grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br ${group.gradient} text-ink-950 shadow-lg`}
                    >
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="text-fg text-base font-semibold">{group.title}</h3>
                  </div>

                  <div className="mt-6 space-y-4">
                    {group.skills.map((skill, i) => (
                      <SkillBar
                        key={skill.name}
                        name={skill.name}
                        level={skill.level}
                        delay={i * 0.04}
                      />
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
