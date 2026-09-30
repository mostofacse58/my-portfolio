import type { CertificateItem } from '@/types';

/* ────────────────────────────────────────────────────────────────────────────
 *  SOURCE — the certificate files Golam supplied (mostofa-portfolio/public/
 *  gp, hackerrank, botcamp) and the verification links he gave. Every title,
 *  date and credential ID below was read off the certificate itself and
 *  cross-checked against the issuer's public verification page:
 *
 *    Grameenphone Academy   grameenphone.academy/cert/<id>
 *    HackerRank             hackerrank.com/certificates/<id>
 *    freeCodeCamp           freecodecamp.org/certification/mostofacse/…
 *
 *  `skills` for HackerRank is the issuer's own description of each test. The
 *  Grameenphone Academy pages publish no syllabus, so their skills are the
 *  course title broken into its topics and nothing more.
 *
 *  Grouped on the page by `issuer`, in the order issuers first appear here.
 *  Newest first within each issuer.
 *
 *  NOT YET INCLUDED — Golam_Mostofa_Certificate.pdf. Its text is drawn as
 *  vector layers, so the title and issuer could not be read reliably; add it
 *  once he confirms what it is.
 * ──────────────────────────────────────────────────────────────────────────── */

export const certificates: CertificateItem[] = [
  /* ── HackerRank ────────────────────────────────────────────────────────── */
  {
    id: 'hr-sql-intermediate',
    title: 'SQL (Intermediate)',
    issuer: 'HackerRank',
    level: 'Skill certificate',
    issued: '30 Sep 2026',
    issuedIso: '2026-09-30',
    skills: ['Complex joins', 'Unions', 'Sub-queries'],
    credentialId: '7D99DC0276FF',
    verifyUrl: 'https://www.hackerrank.com/certificates/7d99dc0276ff',
    image: '/certificates/hackerrank/sql-intermediate.webp',
    file: '/certificates/hackerrank/sql-intermediate.pdf',
  },
  {
    id: 'hr-problem-solving-intermediate',
    title: 'Problem Solving (Intermediate)',
    issuer: 'HackerRank',
    level: 'Skill certificate',
    issued: '30 Sep 2026',
    issuedIso: '2026-09-30',
    skills: ['Data structures', 'HashMaps, stacks & queues', 'Algorithms'],
    credentialId: '152E0A6E7EE5',
    verifyUrl: 'https://www.hackerrank.com/certificates/152e0a6e7ee5',
    image: '/certificates/hackerrank/problem-solving-intermediate.webp',
    file: '/certificates/hackerrank/problem-solving-intermediate.pdf',
  },
  {
    id: 'hr-frontend-developer-react',
    title: 'Frontend Developer (React)',
    issuer: 'HackerRank',
    level: 'Role certificate',
    issued: '30 Sep 2026',
    issuedIso: '2026-09-30',
    skills: ['React', 'CSS', 'JavaScript'],
    credentialId: 'BB7B297CABDD',
    verifyUrl: 'https://www.hackerrank.com/certificates/bb7b297cabdd',
    image: '/certificates/hackerrank/frontend-developer-react.webp',
    file: '/certificates/hackerrank/frontend-developer-react.pdf',
  },
  {
    id: 'hr-sql-advanced',
    title: 'SQL (Advanced)',
    issuer: 'HackerRank',
    level: 'Skill certificate',
    issued: '24 Sep 2026',
    issuedIso: '2026-09-24',
    skills: ['Query optimisation', 'Data modelling', 'Indexing', 'Window functions', 'Pivots'],
    credentialId: '075A1D25060A',
    verifyUrl: 'https://www.hackerrank.com/certificates/075a1d25060a',
    image: '/certificates/hackerrank/sql-advanced.webp',
    file: '/certificates/hackerrank/sql-advanced.pdf',
  },

  /* ── freeCodeCamp ──────────────────────────────────────────────────────── */
  {
    id: 'fcc-data-analysis-python',
    title: 'Data Analysis with Python',
    issuer: 'freeCodeCamp',
    level: 'Developer certification · ~300 hours',
    issued: '23 Sep 2026',
    issuedIso: '2026-09-23',
    skills: ['Python', 'Data analysis'],
    verifyUrl: 'https://freecodecamp.org/certification/mostofacse/data-analysis-with-python-v7',
    image: '/certificates/freecodecamp/data-analysis-with-python.webp',
  },

  /* ── Grameenphone Academy ──────────────────────────────────────────────── */
  {
    id: 'gp-ai-workflows-agents',
    title: 'AI Workflows & Agents',
    issuer: 'Grameenphone Academy',
    issued: '16 Sep 2026',
    issuedIso: '2026-09-16',
    skills: ['AI workflows', 'AI agents'],
    verifyUrl: 'https://www.grameenphone.academy/cert/feebeef50fef',
    image: '/certificates/grameenphone/ai-workflows-agents.webp',
    file: '/certificates/grameenphone/ai-workflows-agents.pdf',
  },
  {
    id: 'gp-genai-prompt-engineering',
    title: 'GenAI and Prompt Engineering',
    issuer: 'Grameenphone Academy',
    issued: '16 Sep 2026',
    issuedIso: '2026-09-16',
    skills: ['Generative AI', 'Prompt engineering'],
    verifyUrl: 'https://www.grameenphone.academy/cert/252dd7978eef',
    image: '/certificates/grameenphone/genai-prompt-engineering.webp',
    file: '/certificates/grameenphone/genai-prompt-engineering.pdf',
  },
  {
    id: 'gp-ai-powered-communication',
    title: 'AI-Powered Communication',
    issuer: 'Grameenphone Academy',
    issued: '16 Sep 2026',
    issuedIso: '2026-09-16',
    skills: ['AI tools', 'Communication'],
    verifyUrl: 'https://www.grameenphone.academy/cert/ea3e91bdc9d4',
    image: '/certificates/grameenphone/ai-powered-communication.webp',
    file: '/certificates/grameenphone/ai-powered-communication.pdf',
  },
  {
    id: 'gp-ai-pro-aptitude-hacks',
    title: 'AI-Pro Aptitude Hacks',
    issuer: 'Grameenphone Academy',
    issued: '16 Sep 2026',
    issuedIso: '2026-09-16',
    skills: ['AI tools', 'Aptitude'],
    verifyUrl: 'https://www.grameenphone.academy/cert/8cf4746cfaf6',
    image: '/certificates/grameenphone/ai-pro-aptitude-hacks.webp',
    file: '/certificates/grameenphone/ai-pro-aptitude-hacks.pdf',
  },
  {
    id: 'gp-sharpen-interview-skills',
    title: 'Sharpen Your Interview Skills',
    issuer: 'Grameenphone Academy',
    issued: '16 Sep 2026',
    issuedIso: '2026-09-16',
    skills: ['Interview preparation'],
    verifyUrl: 'https://www.grameenphone.academy/cert/7172ad85fd4b',
    image: '/certificates/grameenphone/sharpen-your-interview-skills.webp',
    file: '/certificates/grameenphone/sharpen-your-interview-skills.pdf',
  },
];

/** Certificates grouped by issuer, preserving first-appearance order. */
export const certificateGroups = certificates.reduce<
  { issuer: string; items: CertificateItem[] }[]
>((groups, cert) => {
  const group = groups.find((g) => g.issuer === cert.issuer);
  if (group) group.items.push(cert);
  else groups.push({ issuer: cert.issuer, items: [cert] });
  return groups;
}, []);
