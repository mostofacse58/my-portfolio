import { FaArrowUpRightFromSquare, FaCode, FaRankingStar } from 'react-icons/fa6';
import Chip from '@/components/ui/Chip';
import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';
import { leetcodeProfile } from '@/data/leetcode';
import { getLeetCodeStats } from '@/lib/leetcode';

/* Difficulty colours are raw Tailwind steps on purpose: they are fills, and the
   brand/accent ramps are darkened for light-theme text (CLAUDE.md rule 7). */
const DIFFICULTIES = [
  { key: 'easy', label: 'Easy', bar: 'fill-emerald-400', text: 'text-emerald-400' },
  { key: 'medium', label: 'Medium', bar: 'fill-amber-400', text: 'text-amber-400' },
  { key: 'hard', label: 'Hard', bar: 'fill-rose-400', text: 'text-rose-400' },
] as const;

const fmt = new Intl.NumberFormat('en-GB');

/* Ring geometry for the solved-of-total gauge. */
const R = 52;
const CIRC = 2 * Math.PI * R;

export default async function LeetCode() {
  const stats = await getLeetCodeStats();
  const share = stats.totals.all > 0 ? stats.solved.all / stats.totals.all : 0;
  const asOf = new Date(stats.asOf).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });

  return (
    <section id="leetcode" className="relative py-24 sm:py-28">
      <div className="container-page">
        <SectionHeading
          index="07"
          eyebrow="Problem Solving"
          title={`${fmt.format(stats.solved.all)} problems solved on LeetCode`}
          description="Data structures and algorithms practice, kept up alongside delivery work. Numbers are read from my public LeetCode profile and refresh daily."
        />

        <div className="grid gap-6 lg:grid-cols-12">
          {/* Totals + difficulty split */}
          <Reveal className="lg:col-span-5">
            <div className="glass h-full rounded-2xl p-7 sm:p-8">
              <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-center">
                <svg
                  viewBox="0 0 120 120"
                  className="h-36 w-36 shrink-0 -rotate-90"
                  role="img"
                  aria-label={`${stats.solved.all} of ${stats.totals.all} problems solved`}
                >
                  <circle
                    cx="60"
                    cy="60"
                    r={R}
                    className="stroke-line fill-none"
                    strokeWidth="10"
                  />
                  <circle
                    cx="60"
                    cy="60"
                    r={R}
                    className="stroke-brand-500 fill-none"
                    strokeWidth="10"
                    strokeLinecap="round"
                    strokeDasharray={`${CIRC * share} ${CIRC}`}
                  />
                  <g className="[transform-origin:60px_60px] rotate-90">
                    <text
                      x="60"
                      y="58"
                      textAnchor="middle"
                      className="fill-fg font-display text-[22px] font-bold"
                    >
                      {fmt.format(stats.solved.all)}
                    </text>
                    <text x="60" y="76" textAnchor="middle" className="fill-slate-500 text-[10px]">
                      of {fmt.format(stats.totals.all)}
                    </text>
                  </g>
                </svg>

                <dl className="w-full space-y-4">
                  {DIFFICULTIES.map(({ key, label, bar, text }) => {
                    const solved = stats.solved[key];
                    const total = stats.totals[key];
                    const pct = total > 0 ? (solved / total) * 100 : 0;
                    return (
                      <div key={key}>
                        <div className="flex items-baseline justify-between text-sm">
                          <dt className={`font-medium ${text}`}>{label}</dt>
                          <dd className="text-slate-400">
                            <span className="text-fg font-semibold">{fmt.format(solved)}</span> /{' '}
                            {fmt.format(total)}
                          </dd>
                        </div>
                        <svg
                          viewBox="0 0 100 4"
                          preserveAspectRatio="none"
                          className="mt-2 h-1.5 w-full overflow-hidden rounded-full"
                          aria-hidden
                        >
                          <rect width="100" height="4" className="fill-line" />
                          <rect width={pct} height="4" className={bar} />
                        </svg>
                      </div>
                    );
                  })}
                </dl>
              </div>

              {stats.ranking && (
                <p className="border-line mt-7 flex items-center gap-3 border-t pt-5 text-sm text-slate-400">
                  <FaRankingStar className="text-accent-400 h-4 w-4 shrink-0" aria-hidden />
                  Global ranking
                  <span className="text-fg ml-auto font-semibold">
                    #{fmt.format(stats.ranking)}
                  </span>
                </p>
              )}
            </div>
          </Reveal>

          {/* Topics + languages */}
          <Reveal delay={0.1} className="lg:col-span-7">
            <div className="glass flex h-full flex-col rounded-2xl p-7 sm:p-8">
              <h3 className="text-fg text-xl font-semibold">Most-practised topics</h3>
              <ul className="mt-5 flex flex-wrap gap-2">
                {stats.topTopics.map((topic) => (
                  <li key={topic.name}>
                    <Chip>
                      {topic.name}
                      <span className="text-brand-300 ml-2 font-mono">{topic.solved}</span>
                    </Chip>
                  </li>
                ))}
              </ul>

              {stats.languages.length > 0 && (
                <>
                  <h4 className="mt-7 text-xs tracking-wider text-slate-500 uppercase">
                    Solved in
                  </h4>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {stats.languages.map((lang) => (
                      <li key={lang.name}>
                        <Chip variant="brand">
                          <FaCode className="mr-1.5 h-3 w-3" aria-hidden />
                          {lang.name}
                          <span className="ml-2 font-mono opacity-80">{lang.solved}</span>
                        </Chip>
                      </li>
                    ))}
                  </ul>
                </>
              )}

              <div className="mt-auto flex flex-wrap items-center justify-between gap-4 pt-8">
                <p className="text-xs text-slate-500">
                  As of <time dateTime={stats.asOf}>{asOf}</time>
                </p>
                <a
                  href={leetcodeProfile.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-brand-500/30 bg-brand-500/10 text-brand-200 hover:bg-brand-500/20 focus-visible:outline-brand-400 inline-flex items-center gap-2 rounded-lg border px-4 py-2.5 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2"
                >
                  <FaArrowUpRightFromSquare className="h-3.5 w-3.5" aria-hidden />
                  View LeetCode profile
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
