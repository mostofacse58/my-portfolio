import Reveal from './Reveal';
import { cn } from '@/lib/utils';

type SectionHeadingProps = {
  /** Two-digit index rendered in mono to the left of the eyebrow, e.g. "02". */
  index?: string;
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'center' | 'left';
  className?: string;
};

export default function SectionHeading({
  index,
  eyebrow,
  title,
  description,
  align = 'left',
  className,
}: SectionHeadingProps) {
  return (
    <Reveal className={cn('mb-14', align === 'center' && 'text-center', className)}>
      <span
        className={cn(
          'flex items-center gap-3 font-mono text-xs tracking-[0.25em] uppercase',
          align === 'center' && 'justify-center',
        )}
      >
        {index && <span className="text-brand-400/60">{index}</span>}
        <span className="bg-brand-400 h-px w-8" aria-hidden />
        <span className="text-brand-300">{eyebrow}</span>
      </span>

      <h2 className="text-fg mt-5 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl lg:text-[2.6rem]">
        {title}
      </h2>

      {description && (
        <p
          className={cn(
            'mt-5 max-w-2xl text-base leading-relaxed text-slate-400',
            align === 'center' && 'mx-auto',
          )}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}
