import type { ExperienceItem } from '@/types';

/* ────────────────────────────────────────────────────────────────────────────
 *  SOURCE — Golam Mostofa-details_cv.pdf, the "Experience" section. Employers,
 *  locations, job titles, start/end dates and durations are exactly as printed
 *  there; the summaries are his own "Duties/Responsibilities" and "Area of
 *  Expertise" text, tightened for the page.
 *
 *  This replaces the earlier three-role timeline, which was written from his
 *  public portfolio at a point when no employer before Ventura was named.
 *
 *  Two roles run concurrently from 2021 — the CV marks both "Continuing", so
 *  both carry `current: true`. The ERP delivery detail on the Ventura entry
 *  (Epicor, the 18-module suite, MaatDrive) comes from his portfolio and is
 *  kept because it is the same employer and the same period.
 *
 *  NOTE: his portfolio also describes 2013—2016 work for the Army MGO Branch
 *  and an IT firm. The CV's work history starts in Jan 2015 with Promiti and
 *  does not mention it, so it is not represented below — see CLAUDE.md §7.
 * ──────────────────────────────────────────────────────────────────────────── */

export const experiences: ExperienceItem[] = [
  {
    id: 'constant-ads-sr-swe',
    role: 'Sr. Software Engineer',
    company: 'Constant Ads',
    location: 'Austria',
    period: 'Jun 2021 — Present',
    duration: '5.3 yrs',
    current: true,
    summary:
      'Back-end development and application logic in PHP — Laravel and CodeIgniter. I shape the Laravel project structure, set the conventions the team builds against, run code reviews and share the approach with other developers across both internal and client-facing projects.',
    projects: ['Laravel', 'CodeIgniter', 'Vue.js', 'React.js', 'jQuery & Ajax', 'Bootstrap'],
  },
  {
    id: 'ventura-sr-officer',
    role: 'Sr. Officer — Software & ERP',
    company: 'Ventura Leatherware Mfy (BD) Ltd.',
    location: 'Uttara EPZ, Rangpur',
    period: 'Apr 2021 — Present',
    duration: '5.4 yrs',
    current: true,
    summary:
      'Leading full-cycle ERP development and architecture on the leather manufacturing floor — the Epicor ERP implementation, an 18-module custom ERP suite, the MaatDrive SaaS platform for the German market, and the RESTful API layer behind them, built with Laravel, Vue.js, React, Node.js and SQL Server.',
    projects: [
      'Epicor ERP Implementation',
      'Custom ERP Suite — 18 modules',
      'MaatDrive SaaS',
      'RESTful API design',
      'Laravel & Vue.js',
      'React / Node.js / MongoDB',
    ],
  },
  {
    id: 'ventura-officer',
    role: 'Officer — Software Development',
    company: 'Ventura Leatherware Mfy (BD) Ltd.',
    location: 'Nilphamari',
    period: 'Jul 2017 — Apr 2021',
    duration: '3.8 yrs',
    summary:
      'Data analysis, database design and development across the plant systems, plus day-to-day database support on Microsoft SQL Server and MySQL. Built the reporting layer the management team ran on, including Power BI analysis.',
    projects: ['SQL Server', 'MySQL', 'PHP (OOP)', 'Database design', 'Power BI reporting'],
  },
  {
    id: 'promiti-programmer',
    role: 'Programmer',
    company: 'Promiti Computer and Networks',
    location: 'Dhanmondi, Dhaka',
    period: 'Jan 2015 — Jun 2017',
    duration: '2.5 yrs',
    summary:
      'Analysis, design, database design, coding and development as a database engineer and programmer — alongside software implementation for clients and web development work.',
    projects: ['Database engineering', 'Software implementation', 'Web development'],
  },
];
