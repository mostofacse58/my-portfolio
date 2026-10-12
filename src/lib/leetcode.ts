import { leetcodeProfile, leetcodeSnapshot } from '@/data/leetcode';
import type { LeetCodeStats } from '@/types';

const QUERY = `query ($u: String!) {
  allQuestionsCount { difficulty count }
  matchedUser(username: $u) {
    profile { ranking }
    submitStatsGlobal { acSubmissionNum { difficulty count } }
    languageProblemCount { languageName problemsSolved }
    tagProblemCounts {
      advanced { tagName problemsSolved }
      intermediate { tagName problemsSolved }
      fundamental { tagName problemsSolved }
    }
  }
}`;

type Count = { difficulty: string; count: number };
type Tag = { tagName: string; problemsSolved: number };
type Response = {
  data?: {
    allQuestionsCount?: Count[];
    matchedUser?: {
      profile?: { ranking?: number | null };
      submitStatsGlobal?: { acSubmissionNum?: Count[] };
      languageProblemCount?: { languageName: string; problemsSolved: number }[];
      tagProblemCounts?: Partial<Record<'advanced' | 'intermediate' | 'fundamental', Tag[]>>;
    } | null;
  };
};

const byDifficulty = (rows: Count[]) => {
  const get = (d: string) => rows.find((r) => r.difficulty === d)?.count ?? 0;
  return { easy: get('Easy'), medium: get('Medium'), hard: get('Hard'), all: get('All') };
};

/**
 * Live stats from LeetCode's public GraphQL API, cached for a day. Any failure —
 * network, a changed schema, a renamed profile — falls back to the snapshot in
 * src/data/leetcode.ts, so the section never renders empty or broken.
 */
export async function getLeetCodeStats(): Promise<LeetCodeStats> {
  try {
    const res = await fetch('https://leetcode.com/graphql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Referer: leetcodeProfile.url },
      body: JSON.stringify({ query: QUERY, variables: { u: leetcodeProfile.username } }),
      next: { revalidate: 86400 },
      signal: AbortSignal.timeout(8000),
    });
    if (!res.ok) return leetcodeSnapshot;

    const { data } = (await res.json()) as Response;
    const user = data?.matchedUser;
    const solvedRows = user?.submitStatsGlobal?.acSubmissionNum;
    if (!data?.allQuestionsCount || !solvedRows) return leetcodeSnapshot;

    const solved = byDifficulty(solvedRows);
    // A zeroed answer means the profile vanished or went private — keep the snapshot.
    if (solved.all === 0) return leetcodeSnapshot;

    const tags = Object.values(user.tagProblemCounts ?? {}).flat();
    return {
      totals: byDifficulty(data.allQuestionsCount),
      solved,
      ranking: user.profile?.ranking ?? null,
      topTopics: tags
        .filter((t) => t.problemsSolved > 0)
        .sort((a, b) => b.problemsSolved - a.problemsSolved)
        .slice(0, 10)
        .map((t) => ({ name: t.tagName, solved: t.problemsSolved })),
      languages: (user.languageProblemCount ?? [])
        .filter((l) => l.problemsSolved > 0)
        .sort((a, b) => b.problemsSolved - a.problemsSolved)
        .map((l) => ({ name: l.languageName, solved: l.problemsSolved })),
      asOf: new Date().toISOString().slice(0, 10),
    };
  } catch {
    return leetcodeSnapshot;
  }
}
