import {
  FaChartColumn,
  FaCode,
  FaCubes,
  FaDatabase,
  FaLaptopCode,
  FaScrewdriverWrench,
  FaServer,
  FaSitemap,
} from 'react-icons/fa6';
import type { Skill, SkillGroup, TechGroup } from '@/types';

/* ────────────────────────────────────────────────────────────────────────────
 *  The eight bars below are reproduced EXACTLY as Golam publishes them on his
 *  own portfolio — same labels, same percentages. They are his self-assessment,
 *  not an estimate made here. The resume page renders this list.
 * ──────────────────────────────────────────────────────────────────────────── */

export const coreSkills: Skill[] = [
  { name: 'ERP Architecture & Design', level: 95 },
  { name: 'ASP.NET Core / C# / Dapper', level: 92 },
  { name: 'SQL Server / MySQL / PostgreSQL', level: 90 },
  { name: 'Power BI / SSRS / ECharts / Reporting', level: 88 },
  { name: 'PHP / Laravel / CodeIgniter', level: 85 },
  { name: 'Next.js / React / Bootstrap / Tailwind', level: 82 },
  { name: 'Epicor ERP (Kinetic / BAQ / BPM)', level: 80 },
  { name: 'Node.js / Express / MongoDB', level: 75 },
];

/* ────────────────────────────────────────────────────────────────────────────
 *  THE TOOLKIT — every technology below is one Golam names on his portfolio,
 *  in his GitHub bio, or in the Skill section of his CV. The GROUPING and the
 *  TECHNOLOGY LIST are therefore sourced.
 *
 *  The PER-ITEM PERCENTAGES are NOT. Only the eight numbers in `coreSkills`
 *  above are published by him; the rest were drafted here so the section could
 *  render as bars, seeded from those eight where a skill maps onto one. Treat
 *  every level below as a first pass for Golam to correct — a self-assessment
 *  is his to make, and an inflated one is the easiest thing in the world for an
 *  interviewer to test. Once he has been through them, delete this paragraph.
 *
 *  NOTE on the gradients: these are TILE FILLS carrying a near-black icon, so
 *  every stop must stay LIGHT in both themes. That rules out the brand and
 *  accent ramps at steps 50–400, plus emerald-300 and rose-300 — all of those
 *  are deliberately darkened for the light theme in globals.css, which would
 *  leave a near-black icon sitting on a dark tile. Raw Tailwind steps are never
 *  overridden, so they are the safe choice here.
 * ──────────────────────────────────────────────────────────────────────────── */

export const skillGroups: SkillGroup[] = [
  {
    id: 'languages',
    title: 'Languages',
    icon: FaCode,
    gradient: 'from-emerald-400 to-teal-500',
    skills: [
      { name: 'C#', level: 92 },
      { name: 'T-SQL', level: 90 },
      { name: 'PHP', level: 85 },
      { name: 'JavaScript (ES6+)', level: 85 },
      { name: 'TypeScript', level: 78 },
      { name: 'C / C++', level: 70 },
      { name: 'Java', level: 68 },
    ],
  },
  {
    id: 'backend',
    title: 'Backend',
    icon: FaServer,
    gradient: 'from-amber-400 to-orange-500',
    skills: [
      { name: 'ASP.NET Core / Web API', level: 92 },
      { name: 'Dapper ORM', level: 90 },
      { name: 'REST API design', level: 90 },
      { name: 'PHP Laravel', level: 85 },
      { name: 'CodeIgniter', level: 85 },
      { name: 'Entity Framework Core', level: 80 },
      { name: 'Node.js / Express.js', level: 75 },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend',
    icon: FaLaptopCode,
    gradient: 'from-teal-300 to-cyan-500',
    skills: [
      { name: 'HTML5 & CSS3', level: 90 },
      { name: 'Bootstrap', level: 88 },
      { name: 'jQuery & AJAX', level: 86 },
      { name: 'Next.js (App Router)', level: 82 },
      { name: 'React', level: 82 },
      { name: 'Tailwind CSS', level: 80 },
      { name: 'Vue.js', level: 76 },
    ],
  },
  {
    id: 'databases',
    title: 'Databases',
    icon: FaDatabase,
    gradient: 'from-cyan-300 to-sky-500',
    skills: [
      { name: 'MS SQL Server', level: 92 },
      { name: 'Stored procedures & tuning', level: 90 },
      { name: 'MySQL', level: 88 },
      { name: 'Schema design & indexing', level: 88 },
      { name: 'PostgreSQL', level: 76 },
      { name: 'MongoDB', level: 72 },
      { name: 'Oracle', level: 65 },
    ],
  },
  {
    id: 'erp',
    title: 'ERP Platforms',
    icon: FaCubes,
    gradient: 'from-lime-300 to-emerald-500',
    skills: [
      { name: 'HRMS & Payroll', level: 92 },
      { name: 'Production & MES', level: 90 },
      { name: 'Inventory & Assets', level: 90 },
      { name: 'Finance & Costing', level: 88 },
      { name: 'Epicor Kinetic', level: 80 },
      { name: 'BAQ / BPM customisation', level: 78 },
    ],
  },
  {
    id: 'reporting',
    title: 'Reporting & BI',
    icon: FaChartColumn,
    gradient: 'from-yellow-300 to-amber-500',
    skills: [
      { name: 'SSRS / RDLC', level: 90 },
      { name: 'EPPlus (Excel)', level: 88 },
      { name: 'Power BI', level: 85 },
      { name: 'iTextSharp (PDF)', level: 85 },
      { name: 'Apache ECharts', level: 82 },
    ],
  },
  {
    id: 'architecture',
    title: 'Architecture',
    icon: FaSitemap,
    gradient: 'from-green-300 to-teal-400',
    skills: [
      { name: 'ERP architecture & design', level: 95 },
      { name: 'Enterprise data migration', level: 88 },
      { name: 'API-first design', level: 88 },
      { name: 'N-Tier / layered design', level: 85 },
      { name: 'Multi-tenant SaaS', level: 82 },
    ],
  },
  {
    id: 'tools',
    title: 'Tools & Platforms',
    icon: FaScrewdriverWrench,
    gradient: 'from-orange-300 to-amber-500',
    skills: [
      { name: 'Visual Studio & VS Code', level: 92 },
      { name: 'SQL Server Management Studio', level: 92 },
      { name: 'Git & GitHub', level: 88 },
      { name: 'Postman', level: 85 },
      { name: 'Vercel', level: 78 },
      { name: 'Docker', level: 62 },
    ],
  },
];

/**
 * Chip view of the same data, kept as one source of truth. The resume page
 * renders the toolkit without scores, so it maps over this.
 */
export const techGroups: TechGroup[] = skillGroups.map(({ id, title, icon, gradient, skills }) => ({
  id,
  title,
  icon,
  gradient,
  items: skills.map((s) => s.name),
}));

/** Flat, ordered list used by the marquee strip under the hero. */
export const marqueeTech = [
  'ASP.NET Core',
  'C#',
  'SQL Server',
  'Laravel',
  'PHP',
  'Next.js',
  'React',
  'Node.js',
  'Express.js',
  'MySQL',
  'PostgreSQL',
  'MongoDB',
  'Dapper',
  'Epicor Kinetic',
  'Power BI',
  'SSRS',
  'ECharts',
  'Tailwind CSS',
];
