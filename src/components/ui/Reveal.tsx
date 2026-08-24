'use client';

import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { fadeUp, viewportOnce } from '@/lib/motion';

type RevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: 'div' | 'li' | 'section' | 'article';
};

/** Scroll-triggered fade-up wrapper used across every section. */
export default function Reveal({ children, delay = 0, className, as = 'div' }: RevealProps) {
  const MotionTag = motion[as];

  return (
    <MotionTag
      className={className}
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      transition={{ delay }}
    >
      {children}
    </MotionTag>
  );
}
