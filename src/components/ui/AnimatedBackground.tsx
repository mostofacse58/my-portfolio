/**
 * Decorative aurora wash over a dot matrix. Purely visual, hidden from
 * assistive tech. The dots (rather than a ruled grid) plus the emerald/gold
 * wash are the quiet signature of this site — change them here, once.
 */
export default function AnimatedBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="dot-bg absolute inset-0 opacity-70" />

      <div className="bg-brand-500/20 animate-aurora absolute top-[-14rem] left-[-10rem] h-[36rem] w-[36rem] rounded-full blur-[130px]" />
      <div
        className="bg-accent-500/15 animate-aurora absolute top-[16rem] right-[-12rem] h-[30rem] w-[30rem] rounded-full blur-[130px]"
        style={{ animationDelay: '-7s' }}
      />
      <div
        className="bg-brand-700/25 animate-aurora absolute bottom-[-16rem] left-[28%] h-[34rem] w-[34rem] rounded-full blur-[140px]"
        style={{ animationDelay: '-14s' }}
      />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,transparent_18%,var(--color-surface)_76%)]" />
    </div>
  );
}
