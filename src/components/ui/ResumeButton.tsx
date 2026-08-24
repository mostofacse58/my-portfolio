import Link from 'next/link';
import { FaDownload, FaFileLines } from 'react-icons/fa6';
import { profile } from '@/data/profile';
import { cn } from '@/lib/utils';

/**
 * One button, two behaviours.
 *
 * No resume PDF has been published, so by default this points at /resume — a
 * print-optimised page generated from the same data layer, which any browser
 * can save as a PDF. The moment `profile.resumeFile` is given a real path,
 * every instance of this button turns into a download without further edits.
 *
 * This is why there is no bare `<a href={profile.resumeFile} download>` left
 * anywhere in the codebase — that would have shipped a dead link.
 *
 * Size and layout are PROPS, not className overrides: Tailwind resolves two
 * competing utilities (px-4 vs px-6, flex vs inline-flex) by generated order,
 * not by the order they appear in the attribute, so passing an override
 * through `className` is a coin flip. Callers that need a different size or a
 * full-width button ask for it here instead.
 */
type ResumeButtonProps = {
  variant?: 'primary' | 'ghost' | 'soft';
  size?: 'md' | 'sm';
  fullWidth?: boolean;
  className?: string;
  label?: string;
  onNavigate?: () => void;
};

const variants = {
  primary:
    'from-brand-500 to-accent-500 shadow-brand-500/25 hover:shadow-brand-500/40 text-onbrand bg-gradient-to-r shadow-lg hover:-translate-y-0.5 hover:brightness-110',
  ghost: 'glass hover:border-brand-400/40 hover:text-fg text-slate-200 hover:-translate-y-0.5',
  soft: 'border-brand-500/30 bg-brand-500/10 text-brand-200 hover:bg-brand-500/20 border',
};

const sizes = {
  md: 'px-6 py-3.5',
  sm: 'px-4 py-2.5',
};

export default function ResumeButton({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className,
  label,
  onNavigate,
}: ResumeButtonProps) {
  const isFile = Boolean(profile.resumeFile);
  const text = label ?? (isFile ? 'Download Resume' : 'View Resume');
  const Icon = isFile ? FaDownload : FaFileLines;

  const classes = cn(
    'items-center gap-2.5 rounded-xl text-sm font-semibold transition-all',
    fullWidth ? 'flex w-full justify-center' : 'inline-flex',
    sizes[size],
    variants[variant],
    className,
  );

  if (isFile) {
    return (
      <a href={profile.resumeFile as string} download onClick={onNavigate} className={classes}>
        <Icon className="h-4 w-4" />
        {text}
      </a>
    );
  }

  return (
    <Link href={profile.resumePath} onClick={onNavigate} className={classes}>
      <Icon className="h-4 w-4" />
      {text}
    </Link>
  );
}
