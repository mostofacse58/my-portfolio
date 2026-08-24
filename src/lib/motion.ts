import type { Variants } from 'framer-motion';

/** One easing curve for the whole site — do not invent a new one per file. */
const ease = [0.22, 0.61, 0.36, 1] as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.65 } },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.55, ease } },
};

export const slideLeft: Variants = {
  hidden: { opacity: 0, x: -36 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease } },
};

export const slideRight: Variants = {
  hidden: { opacity: 0, x: 36 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease } },
};

export const stagger = (staggerChildren = 0.08, delayChildren = 0): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren, delayChildren } },
});

/** Shared viewport config so every section reveals consistently. */
export const viewportOnce = { once: true, amount: 0.2 } as const;
