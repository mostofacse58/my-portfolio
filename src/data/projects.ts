import type { Project } from '@/types';

/* ────────────────────────────────────────────────────────────────────────────
 *  Every project below appears on Golam's own portfolio. Where he published a
 *  module list, that list is reproduced as `features`; where he published only
 *  a title and a category, `features` is deliberately OMITTED and the detail
 *  page renders without that section. Nothing here is padded out with invented
 *  bullet points, fabricated metrics, or challenges he never described.
 *
 *  `liveUrl` is set only for the two products with a public URL he links to
 *  himself (maatdrive.com, gtechsoft.xyz). Everything else is closed client or
 *  in-house work, so it renders a disabled button with an explanation instead
 *  of a broken link.
 *
 *  Ask Claude Code:  /add-project      → scaffold a new project entry
 *                    /update-content   → bulk-edit links and copy
 * ──────────────────────────────────────────────────────────────────────────── */

/** The stack Golam states for his in-house ERP work. Shared to keep it honest. */
const ERP_SUITE_STACK = [
  'ASP.NET Core',
  'C#',
  'Dapper ORM',
  'SQL Server',
  'PHP Laravel',
  'Bootstrap',
  'SSRS',
  'EPPlus',
  'iTextSharp',
];

/** Standing note for the in-house modules, so the wording stays consistent. */
const SUITE_CONTEXT =
  'This module is part of the 18-module custom ERP suite I built and delivered across manufacturing and government sectors. All 18 modules are live in production.';

export const projects: Project[] = [
  {
    slug: 'maatdrive-saas-platform',
    name: 'MaatDrive — Business Management SaaS',
    tagline:
      'A cloud business-management platform serving trade, crafts and service companies in Germany.',
    image: '/images/projects/maatdrive.png',
    category: 'SaaS Product',
    featured: true,
    role: 'Architect & Lead Developer',
    timeline: 'Live product',
    mainTech: ['Laravel', 'Next.js', 'MySQL', 'SaaS'],
    techStack: [
      'PHP Laravel',
      'Next.js',
      'React',
      'MySQL',
      'Bootstrap',
      'Tailwind CSS',
      'REST API',
      'Multi-tenant SaaS',
    ],
    shortDescription:
      'A cloud-based business management SaaS platform built for trade, crafts and service companies serving the German market.',
    description: [
      'MaatDrive is a cloud-based Business Management SaaS platform built for trade, crafts and service companies serving the German market. It is the flagship product of my work outside of factory-floor ERP — same discipline, delivered as multi-tenant software rather than an in-house installation.',
      'The platform brings the day-to-day running of a small trade business into one place: the customer record, what is in stock, what has been invoiced, which project the hours were booked against, and what the accountant needs at the end of the period.',
    ],
    features: [
      'Customer Management',
      'Inventory',
      'Invoicing',
      'Project Management',
      'Accounting Preparation',
      'Time Tracking',
    ],
    liveUrl: 'https://maatdrive.com/',
    githubUrl: null,
    privateRepo: true,
    repoNote: 'Commercial product — closed source',
  },
  {
    slug: 'epicor-erp-implementation',
    name: 'Epicor Kinetic ERP — Implementation Lead',
    tagline:
      'Full enterprise rollout of a Gartner Magic Quadrant leader inside a manufacturing company.',
    image: '/images/projects/epicor.png',
    category: 'Implementation',
    featured: true,
    role: 'Implementation Lead',
    timeline: 'Enterprise deployment',
    mainTech: ['Epicor Kinetic', 'BAQ / BPM', 'SQL Server', 'SCM'],
    techStack: [
      'Epicor Kinetic ERP',
      'BAQ (Business Activity Queries)',
      'BPM (Business Process Management)',
      'SQL Server',
      'Data migration',
      'Financial Management',
      'Supply Chain Management',
    ],
    shortDescription:
      'Led the full enterprise implementation of Epicor Kinetic ERP in a manufacturing company — customization, module setup, data migration and user training.',
    description: [
      'I led the full enterprise implementation of Epicor Kinetic ERP — a Gartner Magic Quadrant leader — inside a manufacturing company. An implementation of this size is as much an organisational project as a technical one: the system has to end up matching how the plant actually runs, not the other way round.',
      'My remit covered the platform customization through BAQ and BPM, the production module setup, financial management, supply chain, migrating the existing data into it, and training the people who would use it every day.',
    ],
    features: [
      'BAQ and BPM customization',
      'Production module setup',
      'Financial management configuration',
      'Supply chain management (SCM)',
      'Enterprise data migration',
      'End-user training',
    ],
    liveUrl: null,
    githubUrl: null,
    privateRepo: true,
    liveNote: 'Enterprise deployment — no public URL',
  },
  {
    slug: 'custom-erp-suite',
    name: 'Custom ERP Suite — 18 Modules',
    tagline:
      'A complete in-house ERP suite spanning manufacturing and government. All 18 modules live.',
    image: '/images/projects/erp-suite.png',
    category: 'ERP System',
    featured: true,
    role: 'ERP Architect & Lead Developer',
    timeline: 'Delivered and live',
    mainTech: ['ASP.NET Core', 'C#', 'SQL Server', 'Dapper'],
    techStack: ERP_SUITE_STACK,
    shortDescription:
      'A complete in-house ERP suite built across manufacturing and government sectors — 18 modules covering inventory, production, finance, audit and administration, all delivered and live.',
    description: [
      'This is the body of work the rest of my portfolio hangs off: a complete in-house ERP suite built across manufacturing and government sectors, covering the operational spine of a factory from the store room to the board report.',
      'Eighteen modules were delivered and are live — Inventory, Assets, Accounts, TPM, MES, Production, Internal Audit, Administration, Hoshin Kanri, Gate Pass, eSignature and more. Several of them are broken out as their own entries in this portfolio.',
    ],
    features: [
      'Inventory',
      'Assets',
      'Accounts',
      'TPM (Total Productive Maintenance)',
      'MES (Manufacturing Execution System)',
      'Production',
      'Internal Audit',
      'Administration',
      'Hoshin Kanri',
      'Gate Pass',
      'eSignature',
    ],
    liveUrl: null,
    githubUrl: null,
    privateRepo: true,
  },
  {
    slug: 'gtechsoft',
    name: 'GTechSoft — Software Venture',
    tagline: 'My own software venture: custom web applications, ERP systems and SaaS for clients.',
    image: '/images/projects/gtechsoft.png',
    category: 'Web App',
    featured: true,
    role: 'Founder & Lead Engineer',
    timeline: 'Ongoing',
    mainTech: ['Laravel', 'Next.js', 'ASP.NET Core', 'MySQL'],
    techStack: [
      'PHP Laravel',
      'CodeIgniter',
      'Next.js',
      'React',
      'ASP.NET Core',
      'MySQL',
      'SQL Server',
      'Tailwind CSS',
    ],
    shortDescription:
      'The software development venture I founded, delivering custom web applications, ERP systems and SaaS solutions for clients across different industries and markets.',
    description: [
      'GTechSoft is the software development venture I founded and built, delivering custom web applications, ERP systems and SaaS solutions for clients across different industries and markets.',
      'It is where work that does not belong to a single employer lives — product builds like MaatDrive, smaller client systems, and the consulting engagements that come out of eleven years spent inside other people’s factories.',
    ],
    liveUrl: 'https://gtechsoft.xyz/',
    githubUrl: null,
    privateRepo: true,
    repoNote: 'Client work — closed source',
  },
  {
    slug: 'mdm-android-device-management',
    name: 'MDM — Android Device Management Platform',
    tagline:
      'Provision, lock down and remotely control company-owned Android devices across factory floors, meeting rooms and field units.',
    image: '/images/projects/mdm.png',
    category: 'Web App',
    featured: false,
    role: 'Architect & Lead Developer',
    timeline: 'Live in production',
    mainTech: ['Kotlin', 'Node.js', 'Next.js', 'TypeScript'],
    techStack: [
      'Kotlin',
      'Android Device Owner API',
      'Node.js',
      'Express.js',
      'TypeScript',
      'Next.js',
      'Kysely',
      'Pino',
      'REST API',
      'WebSocket',
      'Kiosk / lock-task mode',
      'JWT auth',
    ],
    shortDescription:
      'A full-stack enterprise Mobile Device Management platform — a Kotlin Device Owner agent, a Node.js control server and a Next.js admin console — giving zero-touch enrolment, policy enforcement and live device telemetry from one dashboard.',
    description: [
      'An end-to-end MDM stack for company-owned Android hardware: a Kotlin device agent built on the Android Device Owner API, a REST and WebSocket control server in Node.js, Express and TypeScript, and a Next.js administration console. One dashboard covers every device on the estate, from factory-floor terminals to meeting-room tablets and field units.',
      'The hard part of MDM is not the dashboard — it is the command channel. Devices go offline, come back on a different network and still have to converge on the policy they were given. A persistent channel plus a policy-sync model handles that, and Pino structured logging across request, command and device events is what makes a field incident traceable rather than a guess.',
      'The data layer is built on Kysely so every device, policy, group and audit-log query is compile-time checked against the schema — the kind of guarantee that matters when a wrong query can lock a factory shift out of its terminals.',
    ],
    features: [
      'Device Owner provisioning — QR and zero-touch enrolment',
      'Kiosk and lock-task mode with app whitelisting and blacklisting',
      'Uninstall protection, factory-reset, USB and settings restrictions',
      'Remote lock, unlock, reboot and wipe over a persistent command channel',
      'Silent app install, update and configuration push',
      'Device grouping with live online/offline status',
      'Battery and storage telemetry, policy templates',
      'Full audit trail of every administrative action',
    ],
    liveUrl: null,
    githubUrl: null,
    privateRepo: true,
  },
  {
    slug: 'vos-apps-employee-super-app',
    name: 'VOS Apps — Unified Employee Super-App',
    tagline:
      'One intranet-secured Android app delivering 11+ enterprise services to the entire workforce.',
    image: '/images/projects/vos-apps.png',
    category: 'Mobile App',
    featured: false,
    role: 'Architect & Lead Developer',
    timeline: 'Live in production',
    mainTech: ['Android SDK', 'Java', 'REST API', 'SQL Server'],
    techStack: [
      'Android SDK',
      'Java',
      'REST API integration',
      'Intranet-secured architecture',
      'Role-based access control',
      'Push notifications',
      'Workflow & approval engine',
      'SQL Server',
    ],
    shortDescription:
      'A single centralised Android platform delivering 11+ enterprise services over the company intranet — one app replacing the scattered systems the whole workforce used to juggle.',
    description: [
      'VOS Apps was built for the IT department’s digital transformation programme: a modular Android super-app that puts Employee Self-Service, approvals, meal booking, asset management and the operations modules behind one login, on the phone the employee already carries.',
      'Everything stays inside the company network. The security model is intranet-only with authenticated users and role-based access, so enterprise data never leaves the local network — a hard requirement that shaped the architecture rather than being bolted on afterwards.',
      'The approval engine is where the time was won. Real-time status tracking and push notifications cut approval and processing cycles to a third of what they were, and the attendance, leave, meal-booking and asset modules took the paper forms out of the organisation almost entirely. The module architecture is plug-in by design, so new services are added on demand without disrupting the ones already running.',
    ],
    features: [
      'Employee Self-Service (ESS)',
      'EK Click',
      'Automation',
      'VOS Operations',
      'VLMBD',
      'Meal Booking',
      'Asset Management and Asset History',
      'Approval Services with real-time status tracking',
      'Attendance & Leave Management',
      'Push Notifications',
      'Reports & Dashboards',
    ],
    liveUrl: null,
    githubUrl: null,
    privateRepo: true,
    liveNote: 'Intranet-only — no public access',
  },
  {
    slug: 'inventory-management',
    name: 'Inventory Management',
    tagline: 'Stock and store control for manufacturing and government operations.',
    image: '/images/projects/inventory.png',
    category: 'ERP System',
    featured: false,
    role: 'Developer',
    timeline: 'Live in production',
    mainTech: ['ASP.NET Core', 'C#', 'SQL Server', 'Dapper'],
    techStack: ERP_SUITE_STACK,
    shortDescription:
      'The inventory and store-control module of the custom ERP suite, built for manufacturing and government operations.',
    description: [
      'Inventory Management is the stock and store-control module of the ERP suite — the system of record for what the operation physically holds.',
      SUITE_CONTEXT,
    ],
    liveUrl: null,
    githubUrl: null,
    privateRepo: true,
  },
  {
    slug: 'hrms-payroll-system',
    name: 'HRMS & Payroll System',
    tagline: 'People, attendance and payroll for a manufacturing workforce.',
    image: '/images/projects/hrms.png',
    category: 'ERP System',
    featured: false,
    role: 'Developer',
    timeline: 'Live in production',
    mainTech: ['ASP.NET Core', 'C#', 'SQL Server', 'SSRS'],
    techStack: ERP_SUITE_STACK,
    shortDescription:
      'The HRMS and Payroll module of the custom ERP suite — one of the core systems I have built and maintained across the manufacturing sector.',
    description: [
      'HRMS and Payroll is one of the modules I have built and maintained repeatedly across my career — for leather manufacturing, energy and textile companies, and inside the in-house ERP suite.',
      'Payroll is the module with the least tolerance for error in any factory system: it runs to a fixed calendar, every figure is checked by the person it belongs to, and a defect is visible to the entire workforce the same day.',
    ],
    liveUrl: null,
    githubUrl: null,
    privateRepo: true,
  },
  {
    slug: 'production-mes-module',
    name: 'Production MES Module',
    tagline: 'Manufacturing execution on the factory floor — production tracked where it happens.',
    image: '/images/projects/mes.png',
    category: 'ERP System',
    featured: false,
    role: 'Developer',
    timeline: 'Live in production',
    mainTech: ['ASP.NET Core', 'C#', 'SQL Server', 'ECharts'],
    techStack: ERP_SUITE_STACK,
    shortDescription:
      'The Manufacturing Execution System module of the custom ERP suite, covering production on the factory floor.',
    description: [
      'The Production MES module covers manufacturing execution — production recorded on the floor rather than reconstructed afterwards from paperwork.',
      SUITE_CONTEXT,
    ],
    liveUrl: null,
    githubUrl: null,
    privateRepo: true,
  },
  {
    slug: 'accounts-finance-module',
    name: 'Accounts & Finance Module',
    tagline: 'The ledger the rest of the ERP suite reports into.',
    image: '/images/projects/finance.png',
    category: 'ERP System',
    featured: false,
    role: 'Developer',
    timeline: 'Live in production',
    mainTech: ['ASP.NET Core', 'C#', 'SQL Server', 'iTextSharp'],
    techStack: ERP_SUITE_STACK,
    shortDescription:
      'The Accounts and Finance module of the custom ERP suite, alongside the financial reporting work I delivered across the manufacturing and energy sectors.',
    description: [
      'Accounts and Finance is the ledger the rest of the suite reports into, and financial reporting has been a constant across my roles — costing and financial reporting for leather, energy and textile companies, then the finance module of the in-house suite.',
      'Reporting is delivered the way finance teams actually want to receive it: SSRS output, Excel exports through EPPlus, and PDF documents generated with iTextSharp.',
    ],
    liveUrl: null,
    githubUrl: null,
    privateRepo: true,
  },
  {
    slug: 'gate-pass-system',
    name: 'Gate Pass System',
    tagline: 'Controlled movement of people and goods through the factory gate.',
    image: '/images/projects/gatepass.png',
    category: 'Web App',
    featured: false,
    role: 'Developer',
    timeline: 'Live in production',
    mainTech: ['PHP Laravel', 'MySQL', 'Bootstrap', 'REST API'],
    techStack: [
      'PHP Laravel',
      'MySQL',
      'Bootstrap',
      'JavaScript',
      'REST API',
      'ASP.NET Core',
      'SQL Server',
    ],
    shortDescription:
      'A web application governing the movement of people and goods through the factory gate, delivered as part of the 18-module ERP suite.',
    description: [
      'The Gate Pass system governs movement through the factory gate — the point where an ERP stops being an office system and starts being enforced by a person standing at a barrier.',
      SUITE_CONTEXT,
    ],
    liveUrl: null,
    githubUrl: null,
    privateRepo: true,
  },
  {
    slug: 'esignature-system',
    name: 'eSignature System',
    tagline: 'Approvals signed off digitally instead of chasing paper around a plant.',
    image: '/images/projects/esignature.png',
    category: 'Web App',
    featured: false,
    role: 'Developer',
    timeline: 'Live in production',
    mainTech: ['PHP Laravel', 'MySQL', 'Bootstrap', 'iTextSharp'],
    techStack: [
      'PHP Laravel',
      'MySQL',
      'Bootstrap',
      'JavaScript',
      'iTextSharp',
      'ASP.NET Core',
      'SQL Server',
    ],
    shortDescription:
      'A digital approval and signing workflow replacing paper sign-off, delivered as part of the 18-module ERP suite.',
    description: [
      'The eSignature module moves approvals off paper: a document is raised, routed to whoever has to sign it, and signed digitally, with the trail kept in the system rather than in a folder.',
      SUITE_CONTEXT,
    ],
    liveUrl: null,
    githubUrl: null,
    privateRepo: true,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export const projectSlugs = projects.map((p) => p.slug);
