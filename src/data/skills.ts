import {
  FaChartColumn,
  FaCloud,
  FaCubes,
  FaDatabase,
  FaLaptopCode,
  FaServer,
} from 'react-icons/fa6';
import type { Skill, TechGroup } from '@/types';

/* ────────────────────────────────────────────────────────────────────────────
 *  The eight bars below are reproduced EXACTLY as Golam publishes them on his
 *  own portfolio — same labels, same percentages. They are his self-assessment,
 *  not an estimate made here, which is why they are kept as one flat list
 *  rather than being split up and re-scored per technology.
 *
 *  The chip groups underneath carry no numbers at all: every entry is a
 *  technology he names somewhere on his site or in his GitHub bio, and that is
 *  all that is being claimed for them.
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

/* NOTE on the gradients below: these are TILE FILLS carrying a near-black icon,
   so every stop must stay LIGHT in both themes. That rules out the brand and
   accent ramps at steps 50–400, plus emerald-300 and rose-300 — all of those
   are deliberately darkened for the light theme in globals.css, which would
   leave a near-black icon sitting on a dark green tile. Raw Tailwind steps are
   never overridden, so they are the safe choice here. */
export const techGroups: TechGroup[] = [
  {
    id: 'backend',
    title: 'Backend',
    icon: FaServer,
    gradient: 'from-emerald-400 to-teal-500',
    items: [
      'ASP.NET Core',
      'C#',
      'Web API',
      'Dapper ORM',
      'PHP',
      'Laravel',
      'CodeIgniter',
      'Node.js',
      'Express.js',
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend',
    icon: FaLaptopCode,
    gradient: 'from-amber-400 to-orange-500',
    items: ['Next.js', 'React', 'JavaScript', 'Bootstrap', 'Tailwind CSS', 'HTML5', 'CSS3'],
  },
  {
    id: 'databases',
    title: 'Databases',
    icon: FaDatabase,
    gradient: 'from-teal-300 to-cyan-500',
    items: ['SQL Server', 'MySQL', 'PostgreSQL', 'MongoDB', 'Stored Procedures', 'Data Migration'],
  },
  {
    id: 'reporting',
    title: 'Reporting & BI',
    icon: FaChartColumn,
    gradient: 'from-yellow-300 to-amber-500',
    items: ['Power BI', 'SSRS', 'Apache ECharts', 'EPPlus (Excel)', 'iTextSharp (PDF)'],
  },
  {
    id: 'erp',
    title: 'ERP Platforms',
    icon: FaCubes,
    gradient: 'from-lime-300 to-emerald-500',
    items: [
      'Epicor Kinetic',
      'BAQ / BPM customization',
      'Production & MES',
      'HRMS & Payroll',
      'Finance & Costing',
      'Inventory & Assets',
    ],
  },
  {
    id: 'platforms',
    title: 'Delivery',
    icon: FaCloud,
    gradient: 'from-green-300 to-teal-400',
    items: ['SaaS architecture', 'API-first design', 'Enterprise data migration', 'User training'],
  },
];

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
