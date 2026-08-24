'use client';

import { motion, useScroll, useSpring } from 'framer-motion';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 26, restDelta: 0.001 });

  return (
    <motion.div
      aria-hidden
      style={{ scaleX }}
      className="from-brand-400 via-brand-500 to-accent-500 fixed inset-x-0 top-0 z-[60] h-0.5 origin-left bg-gradient-to-r"
    />
  );
}
