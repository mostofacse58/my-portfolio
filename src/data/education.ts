import type { EducationItem, TrainingItem } from '@/types';

/* ────────────────────────────────────────────────────────────────────────────
 *  SOURCE — Golam Mostofa-details_cv.pdf, the "Academic / Education" and
 *  "Training" tables. Institutes, results, pass years and course durations are
 *  reproduced as printed there; nothing is rounded, relabelled or inferred.
 *
 *  This supersedes the earlier version of this file, which carried only the
 *  two degrees his public portfolio lists and omitted institutions and GPAs
 *  because they were not published at the time.
 * ──────────────────────────────────────────────────────────────────────────── */

export const education: EducationItem[] = [
  {
    id: 'bsc',
    degree: 'B.Sc. in Computer Science & Engineering',
    institution: 'Pabna University of Science & Technology',
    period: '2010 — 2013',
    result: 'CGPA 3.53 / 4.00',
    detail:
      'Four-year engineering degree in Computer Science & Engineering — the software engineering, algorithms, database systems and object-oriented foundations everything since has been built on. Passed 2013.',
  },
  {
    id: 'hsc',
    degree: 'Higher Secondary Certificate (HSC)',
    institution: 'Shah Abdur Rouf College',
    period: '2006 — 2008',
    result: 'GPA 3.90 / 5.00',
    detail:
      'Science group with a Mathematics and Physics focus — the analytical grounding that shaped a career in enterprise software engineering.',
  },
  {
    id: 'ssc',
    degree: 'Secondary School Certificate (SSC)',
    institution: 'Shalti Samas Dighi Adarsha High School',
    period: '2000 — 2006',
    result: 'GPA 4.50 / 5.00',
    detail: 'Science group.',
  },
];

/* ────────────────────────────────────────────────────────────────────────────
 *  Certifications and training — the "Training" table of the same CV, newest
 *  first. `credentialId`, `url` and `inProgress` are unset because the CV
 *  records no certificate numbers, no verification links and no completion
 *  status; the UI drops each of those rather than showing a placeholder.
 * ──────────────────────────────────────────────────────────────────────────── */

export const training: TrainingItem[] = [
  {
    id: 'ph-ai-powered-web',
    title: 'AI Powered Complete Web Development',
    provider: 'Programming Hero',
    location: 'Banani, Dhaka',
    period: '2026',
    duration: '6 months',
    topics: [
      'HTML',
      'CSS',
      'Responsive design',
      'JavaScript (ES6)',
      'DOM',
      'React',
      'Context API',
      'React Router',
      'Next.js',
      'Node.js',
      'Express',
      'MongoDB',
      'JWT auth',
      'REST APIs',
      'Git & GitHub',
    ],
  },
  {
    id: 'ph-ai-driven-bootcamp',
    title: 'Next Level AI-Driven Software Engineering Bootcamp',
    provider: 'Programming Hero',
    location: 'Banani, Dhaka',
    period: '2026',
    duration: '6 months',
    topics: ['Node.js', 'Express.js', 'MongoDB', 'TypeScript'],
  },
  {
    id: 'devskill-aspnet-core-mvc',
    title: 'Full Stack ASP.NET Core MVC Web Development',
    provider: 'Dev Skill',
    location: 'Mirpur-10, Dhaka',
    period: '2025',
    duration: '6 months',
    topics: [
      'C#',
      'ASP.NET Core MVC',
      'Razor',
      'Dependency injection',
      'SQL',
      'Entity Framework',
      'AutoMapper',
      'Identity & security',
      'Web API',
      'Angular',
      'Docker',
      'AWS',
      'Testing',
      'Git',
    ],
  },
];
