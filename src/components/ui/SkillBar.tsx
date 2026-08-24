'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

type SkillBarProps = {
  name: string;
  level: number;
  gradient?: string;
  delay?: number;
};

export default function SkillBar({
  name,
  level,
  gradient = 'from-brand-500 to-accent-500',
  delay = 0,
}: SkillBarProps) {
  return (
    <div>
      <div className="mb-2 flex items-baseline justify-between gap-3">
        <span className="text-sm font-medium text-slate-200">{name}</span>
        <span className="text-brand-300 font-mono text-xs tabular-nums">{level}%</span>
      </div>

      <div
        className="bg-tint-strong h-1.5 w-full overflow-hidden rounded-full"
        role="meter"
        aria-valuenow={level}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`${name} proficiency`}
      >
        <motion.div
          className={cn('h-full rounded-full bg-gradient-to-r', gradient)}
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 1, delay, ease: 'easeOut' }}
        />
      </div>
    </div>
  );
}
