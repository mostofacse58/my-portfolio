'use client';

import { FaPrint } from 'react-icons/fa6';

/** Opens the browser print dialog — where "Save as PDF" lives on every OS. */
export default function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="from-brand-500 to-accent-500 shadow-brand-500/25 text-onbrand no-print inline-flex items-center gap-2.5 rounded-xl bg-gradient-to-r px-6 py-3.5 text-sm font-semibold shadow-lg transition-all hover:-translate-y-0.5 hover:brightness-110"
    >
      <FaPrint className="h-4 w-4" />
      Print / Save as PDF
    </button>
  );
}
