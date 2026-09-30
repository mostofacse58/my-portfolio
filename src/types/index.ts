import type { IconType } from 'react-icons';

export type NavLink = {
  label: string;
  href: string;
};

export type SocialLink = {
  label: string;
  href: string;
  icon: IconType;
  /** Tailwind class applied on hover, e.g. 'hover:text-[#0077B5]' */
  hoverClass: string;
};

/**
 * A single self-assessed proficiency bar.
 *
 * `coreSkills` carries the eight levels Golam publishes himself; the levels
 * inside `skillGroups` were drafted for him to correct — see the note at the
 * top of `src/data/skills.ts` before treating any of them as his word.
 */
export type Skill = {
  name: string;
  /** 0–100, drives the animated proficiency bar */
  level: number;
};

/** A named group of technologies shown as chips — no invented percentages. */
export type TechGroup = {
  id: string;
  title: string;
  icon: IconType;
  /** Tailwind gradient stops, e.g. 'from-brand-400 to-teal-500' */
  gradient: string;
  items: string[];
};

/**
 * A named group of technologies, each carrying a self-assessed level so the
 * group renders as a stack of bars rather than a chip cloud.
 */
export type SkillGroup = {
  id: string;
  title: string;
  icon: IconType;
  /** Tailwind gradient stops for the icon tile — see the note in skills.ts. */
  gradient: string;
  skills: Skill[];
};

export type ServiceItem = {
  id: string;
  title: string;
  body: string;
  icon: IconType;
};

export type DomainItem = {
  id: string;
  label: string;
  icon: IconType;
};

export type ExperienceItem = {
  id: string;
  role: string;
  /** Omitted where the employer is not public. */
  company?: string;
  location?: string;
  period: string;
  duration: string;
  current?: boolean;
  summary: string;
  /** Systems or modules named for this role. Empty array renders nothing. */
  projects: string[];
};

export type EducationItem = {
  id: string;
  degree: string;
  /** Omitted where the institution is not published. */
  institution?: string;
  period: string;
  /** GPA / class. Omitted where not published. */
  result?: string;
  detail?: string;
};

/**
 * A training course or certification. Everything except `id`, `title` and
 * `period` is optional so an entry can be as thin as the certificate is.
 */
export type TrainingItem = {
  id: string;
  title: string;
  /** Awarding institute or bootcamp. Omitted where not recorded. */
  provider?: string;
  /** Where it ran, e.g. 'Banani, Dhaka'. Omitted for remote or unrecorded. */
  location?: string;
  /** Year or range exactly as it appears on the certificate. Omitted where the
   *  year is not recorded — the card then renders no date chip at all. */
  period?: string;
  /** Length of the course, e.g. '6 months'. Omitted where not recorded. */
  duration?: string;
  /** Syllabus, rendered as chips. Absent or empty renders no chip row. */
  topics?: string[];
  /** Certificate / credential number. Omitted where there is none. */
  credentialId?: string;
  /** Verification link. Omitted where not published. */
  url?: string;
  /** Still under way — renders an 'In progress' chip instead of the year. */
  inProgress?: boolean;
};

/** A spoken language and its self-assessed level, as listed on his CV. */
export type LanguageItem = {
  language: string;
  reading: string;
  writing: string;
  speaking: string;
};

export type ProjectCategory =
  | 'ERP System'
  | 'SaaS Product'
  | 'Web App'
  | 'Mobile App'
  | 'Desktop App'
  | 'Implementation';

export type Project = {
  /** URL segment: /projects/<slug> */
  slug: string;
  name: string;
  tagline: string;
  /** Path under /public */
  image: string;
  category: ProjectCategory;
  featured: boolean;
  role: string;
  timeline: string;
  /** Shown as chips on the card — keep to ~4 */
  mainTech: string[];
  /** Full stack list shown on the detail page */
  techStack: string[];
  shortDescription: string;
  description: string[];
  /**
   * Modules / capabilities. Optional on purpose: several of these systems are
   * closed client work with nothing published beyond a summary, and the detail
   * page would rather omit a section than pad it out with invented bullets.
   */
  features?: string[];
  liveUrl: string | null;
  githubUrl: string | null;
  /** Set true for closed-source client work so the UI explains why there is no repo */
  privateRepo?: boolean;
  /**
   * Label for the disabled live-demo button when `liveUrl` is null.
   * Defaults to the internal-system wording used by the client ERP projects.
   */
  liveNote?: string;
  /**
   * Label for the disabled repository button when `githubUrl` is null.
   * Defaults to the client-work wording.
   */
  repoNote?: string;
};

/** One verifiable certificate, grouped on the page by `issuer`. */
export type CertificateItem = {
  id: string;
  title: string;
  /** Awarding body — certificates are grouped under this heading. */
  issuer: string;
  /** Short qualifier shown as a chip, e.g. 'Skill certificate'. Optional. */
  level?: string;
  /** Issue date exactly as printed on the certificate, e.g. '30 Sep 2026'. */
  issued: string;
  /** Machine-readable form of `issued` for <time dateTime>. */
  issuedIso: string;
  /** What the certificate covers, rendered as chips. */
  skills: string[];
  /** Certificate / credential number as printed. Optional. */
  credentialId?: string;
  /** Public verification page on the issuer's site. */
  verifyUrl: string;
  /** Thumbnail under /public — 1200 px wide. */
  image: string;
  /** Downloadable copy under /public. Optional; the button is dropped without it. */
  file?: string;
};
