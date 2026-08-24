import { cn } from '@/lib/utils';

type ChipProps = {
  children: React.ReactNode;
  variant?: 'default' | 'brand' | 'accent' | 'success' | 'overlay';
  className?: string;
};

const variants = {
  default: 'border-line bg-tint text-slate-300',
  brand: 'border-brand-500/30 bg-brand-500/10 text-brand-200',
  accent: 'border-accent-500/30 bg-accent-500/10 text-accent-300',
  success: 'border-emerald-500/30 bg-emerald-500/10 text-emerald-300',
  /* For chips laid over a cover image. Covers are dark in BOTH themes, so this
     variant deliberately uses non-flipping tokens — ink and literal white. A
     theme-following colour goes invisible here in light mode. */
  overlay: 'bg-ink-950/60 text-white border-white/25 backdrop-blur-sm',
};

export default function Chip({ children, variant = 'default', className }: ChipProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium',
        variants[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
