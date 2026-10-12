import type { LeetCodeStats } from '@/types';

/* ────────────────────────────────────────────────────────────────────────────
 *  SOURCE — Golam's public LeetCode profile, supplied by him:
 *  https://leetcode.com/u/mostofacse58/
 *
 *  The section reads these numbers live from LeetCode's public GraphQL API at
 *  build time and refreshes them once a day (see src/lib/leetcode.ts). The
 *  snapshot below is what renders if LeetCode cannot be reached — it is the
 *  same API's answer on the `asOf` date, not an estimate.
 * ──────────────────────────────────────────────────────────────────────────── */

export const leetcodeProfile = {
  username: 'mostofacse58',
  url: 'https://leetcode.com/u/mostofacse58/',
};

export const leetcodeSnapshot: LeetCodeStats = {
  totals: { easy: 971, medium: 2128, hard: 982, all: 4081 },
  solved: { easy: 264, medium: 316, hard: 61, all: 641 },
  ranking: 144744,
  topTopics: [
    { name: 'Array', solved: 334 },
    { name: 'String', solved: 157 },
    { name: 'Hash Table', solved: 129 },
    { name: 'Math', solved: 91 },
    { name: 'Sorting', solved: 90 },
    { name: 'Two Pointers', solved: 82 },
    { name: 'Dynamic Programming', solved: 74 },
    { name: 'Depth-First Search', solved: 73 },
    { name: 'Greedy', solved: 64 },
    { name: 'Tree', solved: 61 },
  ],
  languages: [
    { name: 'JavaScript', solved: 639 },
    { name: 'MS SQL Server', solved: 1 },
  ],
  asOf: '2026-10-12',
};
