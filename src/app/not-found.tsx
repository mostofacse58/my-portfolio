import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa6';

export default function NotFound() {
  return (
    <section className="flex min-h-dvh items-center justify-center px-6 py-32 text-center">
      <div>
        <p className="text-gradient text-7xl font-bold sm:text-9xl">404</p>
        <h1 className="text-fg mt-4 text-2xl font-semibold sm:text-3xl">Page not found</h1>
        <p className="mx-auto mt-3 max-w-md text-sm text-slate-400">
          That link does not resolve. It may have moved, or it never existed in the first place.
        </p>
        <Link
          href="/"
          className="from-brand-500 to-accent-500 text-onbrand mt-8 inline-flex items-center gap-2.5 rounded-xl bg-gradient-to-r px-6 py-3.5 text-sm font-semibold transition-all hover:brightness-110"
        >
          <FaArrowLeft className="h-3.5 w-3.5" />
          Back to portfolio
        </Link>
      </div>
    </section>
  );
}
