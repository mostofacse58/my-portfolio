import {
  FaBolt,
  FaChartPie,
  FaCubes,
  FaDatabase,
  FaIndustry,
  FaLaptopCode,
  FaMicrochip,
  FaShieldHalved,
  FaShirt,
  FaBriefcase,
} from 'react-icons/fa6';
import type { DomainItem, ServiceItem } from '@/types';

/** "What I'm doing" — the four service blocks from his portfolio, verbatim. */
export const services: ServiceItem[] = [
  {
    id: 'erp',
    title: 'ERP System Development',
    icon: FaCubes,
    body: 'Architecting and building enterprise ERP modules — Inventory, Production, HRMS, Payroll, Finance, MES, and more — for manufacturing and industrial companies.',
  },
  {
    id: 'fullstack',
    title: 'Full Stack Web Development',
    icon: FaLaptopCode,
    body: 'Building scalable web applications using ASP.NET Core, PHP Laravel, CodeIgniter, Next.js, and React with clean API-first architecture and Bootstrap / Tailwind UI.',
  },
  {
    id: 'database',
    title: 'Database Architecture',
    icon: FaDatabase,
    body: 'Designing and optimizing complex relational databases using SQL Server, MySQL, and PostgreSQL. Expert in stored procedures, Dapper ORM, and large-scale data migration.',
  },
  {
    id: 'reporting',
    title: 'Reporting & Data Analytics',
    icon: FaChartPie,
    body: 'Delivering powerful business intelligence through Power BI, SSRS, Apache ECharts, EPPlus Excel exports, and custom PDF reports using iTextSharp.',
  },
];

/** The six sectors listed under "Domain Expertise" on his portfolio. */
export const domains: DomainItem[] = [
  { id: 'army', label: 'Army / Govt (MGO Branch)', icon: FaShieldHalved },
  { id: 'textile', label: 'Textile & Garments', icon: FaShirt },
  { id: 'leather', label: 'Leather Manufacturing', icon: FaIndustry },
  { id: 'energy', label: 'Energy Sector', icon: FaBolt },
  { id: 'it', label: 'IT Firm', icon: FaMicrochip },
  { id: 'gtechsoft', label: 'GTechSoft', icon: FaBriefcase },
];
