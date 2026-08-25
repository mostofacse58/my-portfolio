import type { LanguageItem } from '@/types';

/* ────────────────────────────────────────────────────────────────────────────
 *  SOURCES OF TRUTH — everything in this file is taken from something Golam
 *  has published or supplied himself. Nothing here is inferred.
 *
 *    [P]   https://mostofacse58.github.io/mostofacse58/   (his portfolio)
 *    [G]   https://github.com/mostofacse58                (GitHub profile)
 *    [CV]  Golam Mostofa-details_cv.pdf                   (his own CV, 4 pages)
 *
 *  If a fact is not in one of those, it is not in this file.
 *
 *  Deliberately NOT carried over from the CV, because a hiring portfolio is
 *  the wrong place for them: date of birth, parents' names, marital status,
 *  religion, blood group, national/permanent address, and present/expected
 *  salary. They are in the PDF if he ever wants them; they are not on the web.
 * ──────────────────────────────────────────────────────────────────────────── */

export const profile = {
  name: 'Golam Mostofa',
  shortName: 'Mostofa',
  initials: 'GM',
  designation: 'Senior Software Engineer', // [P]
  secondaryTitle: 'ERP Architect', // [P]

  /** Rotating headline in the hero — each one is a title or stack he claims. */
  roles: [
    'Senior Software Engineer',
    'ERP Architect',
    'Full-Stack Developer',
    'ASP.NET Core Engineer',
    'Laravel & Next.js Developer',
  ],

  /** His own phrasing, lightly tightened. [P] */
  tagline:
    'I turn fragmented factory floors into synchronized digital ecosystems — HRMS, Payroll, Production, Finance and Costing, built to survive a live shift.',

  /** [CV] "Current Location" — Rangpur Sadar, Rangpur 5400. */
  location: 'Rangpur, Bangladesh',
  /** Factual badge in the hero. Not an availability claim — he has not made one. */
  statusBadge: '11+ years in enterprise ERP',

  email: 'golam.mostofa58@gmail.com', // [P]
  /** [CV] second address printed alongside the first. */
  altEmail: 'mostofa.cse.pust@yahoo.com',
  /** [CV] as printed, local format. */
  phone: '01723695251',
  /** Same number in dialable international form, for tel: and WhatsApp links. */
  phoneIntl: '+8801723695251',
  website: 'https://gtechsoft.xyz/', // [P]
  websiteLabel: 'gtechsoft.xyz',
  currentEmployer: 'Ventura Leatherware Mfy (BD) Ltd.', // [G] profile `company` field

  yearsOfExperience: 11, // [P] "11+ Years"; [CV] "Total Year of Experience: 11.8 yrs"

  /**
   * No PDF has been published to the site yet. Rather than ship a dead download
   * button, the "Resume" call to action points at /resume — a print-optimised
   * page built from this same data layer, which any browser can save as a PDF.
   *
   * To switch to a real file: drop it in /public/resume/ and set this to the
   * path. Every resume button picks it up automatically.
   */
  resumeFile: null as string | null,
  resumePath: '/resume',

  /** Hero portrait — his own avatar, background removed so the card shows through. */
  photo: '/images/profile.webp',
  /** Same headshot on a solid background, for structured data and rich cards. */
  photoSolid: '/images/profile.jpg',
  ogImage: '/images/og-image.png',

  stats: [
    { value: '11+', label: 'Years Experience' }, // [P]
    { value: '18', label: 'ERP Modules Live' }, // [P] "All 18 modules delivered and live"
    { value: '5', label: 'Industry Domains' }, // [P] Army/Govt, Textile, Leather, Energy, IT
    { value: '6', label: 'Flagship Products' }, // matches the six featured cards below
  ],

  about: {
    /** Both paragraphs are his own About copy. [P] */
    journey: [
      'I am a Senior Software Engineer and ERP Architect with over 11 years of experience building high-stakes enterprise systems. My career has been shaped in the complex operational landscapes of Bangladesh’s Army MGO Branch, Textile, IT, Energy and Leather manufacturing industries.',
      'I specialise in turning fragmented factory floors into synchronized digital ecosystems — covering HRMS, Payroll, Production, Finance and Costing. I have evolved from a solid .NET and SQL Server foundation into modern full-stack development using PHP Laravel, Next.js and cloud-native platforms.',
      'I also led the full implementation of Epicor ERP and built the MaatDrive SaaS platform serving the German market. Alongside that I run GTechSoft, my own software venture, delivering custom web applications and ERP systems for clients across several industries.',
    ],
    /** [G] GitHub bio, expanded into a one-line positioning statement. */
    bio: 'Full-stack developer — PHP, Laravel, ASP.NET Core, React, Node.js, Next.js, Express.js, MySQL and SQL Server. Building scalable enterprise solutions.',
  },
} as const;

/** [CV] "Language Proficiency" table, reproduced as printed. */
export const languages: LanguageItem[] = [
  { language: 'Bangla', reading: 'High', writing: 'High', speaking: 'High' },
  { language: 'English', reading: 'High', writing: 'High', speaking: 'Medium' },
];

/**
 * [CV] "Extra Curricular Activities" — the professional strengths he lists.
 * Rendered as plain chips; no percentages are attached because he gives none.
 */
export const strengths = [
  'Analytical thinking & planning',
  'Strong verbal and written communication',
  'Accuracy and attention to detail',
  'Organisation and prioritisation',
  'Problem analysis and judgment',
];

export type Profile = typeof profile;
