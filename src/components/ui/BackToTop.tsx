'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa6';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Back to top"
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.7 }}
          whileHover={{ y: -3 }}
          className="glass no-print text-brand-300 hover:border-brand-400/50 hover:text-brand-200 fixed right-5 bottom-5 z-50 grid h-11 w-11 place-items-center rounded-full shadow-lg transition-colors sm:right-8 sm:bottom-8"
        >
          <FaArrowUp className="h-4 w-4" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
