import { FaFacebookF, FaGithub, FaGlobe, FaLinkedinIn } from 'react-icons/fa6';
import type { NavLink, SocialLink } from '@/types';

export const navLinks: NavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

/** Every href below is a profile Golam links to from his own site. */
export const socialLinks: SocialLink[] = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/golammostofa58/',
    icon: FaLinkedinIn,
    hoverClass: 'hover:border-[#0A66C2] hover:text-[#4DA3F0]',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/mostofacse58',
    icon: FaGithub,
    /* GitHub has no brand colour to hover to, so it uses the foreground token —
       literal white here would vanish against the light theme. */
    hoverClass: 'hover:border-line-strong hover:text-fg',
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/golam.mostofa51',
    icon: FaFacebookF,
    hoverClass: 'hover:border-[#1877F2] hover:text-[#4A9BFF]',
  },
  {
    label: 'GTechSoft',
    href: 'https://gtechsoft.xyz/',
    icon: FaGlobe,
    hoverClass: 'hover:border-brand-400/60 hover:text-brand-300',
  },
];
