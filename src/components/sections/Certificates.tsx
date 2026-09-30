import Image from 'next/image';
import {
  FaArrowUpRightFromSquare,
  FaCalendar,
  FaChevronDown,
  FaCircleCheck,
  FaFilePdf,
} from 'react-icons/fa6';
import Chip from '@/components/ui/Chip';
import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';
import { certificateGroups, certificates } from '@/data/certificates';

/* Server component. The issuer groups collapse with native <details>, which is
   keyboard- and screen-reader-accessible out of the box and needs no client JS. */
export default function Certificates() {
  if (certificates.length === 0) return null;

  return (
    <section id="certificates" className="relative py-24 sm:py-28">
      <div className="container-page">
        <SectionHeading
          index="06"
          eyebrow="Certificates"
          title="Verified, not just listed"
          description={`${certificates.length} certificates from ${certificateGroups.length} issuers. Every one links to the issuer's own verification page.`}
        />

        <div className="space-y-6">
          {certificateGroups.map((group, groupIndex) => (
            <Reveal key={group.issuer} delay={groupIndex * 0.06}>
              <details open className="glass group/issuer rounded-2xl">
                <summary className="focus-visible:outline-brand-400 flex cursor-pointer list-none items-center justify-between gap-4 rounded-2xl p-5 focus-visible:outline-2 focus-visible:outline-offset-2 sm:p-6 [&::-webkit-details-marker]:hidden">
                  <span className="flex min-w-0 items-center gap-3">
                    <span className="from-brand-500 to-accent-500 shadow-brand-500/20 text-onbrand grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br shadow-lg">
                      <FaCircleCheck className="h-4 w-4" aria-hidden />
                    </span>
                    <span className="min-w-0">
                      <span className="text-fg block text-lg font-semibold">{group.issuer}</span>
                      <span className="block text-xs text-slate-500">
                        {group.items.length} certificate{group.items.length > 1 ? 's' : ''}
                      </span>
                    </span>
                  </span>
                  <FaChevronDown
                    className="h-4 w-4 shrink-0 text-slate-400 transition-transform group-open/issuer:rotate-180"
                    aria-hidden
                  />
                </summary>

                <ul className="grid gap-5 px-5 pb-5 sm:px-6 sm:pb-6 md:grid-cols-2 xl:grid-cols-3">
                  {group.items.map((cert) => (
                    <li key={cert.id}>
                      <article className="border-line bg-tint hover:border-brand-400/30 flex h-full flex-col overflow-hidden rounded-xl border transition-all hover:-translate-y-1">
                        <a
                          href={cert.verifyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="focus-visible:outline-brand-400 relative block aspect-[16/10] bg-white focus-visible:outline-2 focus-visible:-outline-offset-2"
                        >
                          <Image
                            src={cert.image}
                            alt={`${cert.title} certificate from ${cert.issuer}, issued to Golam Mostofa`}
                            fill
                            sizes="(min-width: 1280px) 360px, (min-width: 768px) 45vw, 90vw"
                            className="object-contain p-2"
                          />
                        </a>

                        <div className="flex flex-1 flex-col p-5">
                          <h3 className="text-fg text-base leading-snug font-semibold">
                            {cert.title}
                          </h3>
                          {cert.level && <p className="text-brand-300 mt-1 text-sm">{cert.level}</p>}

                          <p className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-500">
                            <span className="flex items-center gap-1.5">
                              <FaCalendar className="h-3 w-3" aria-hidden />
                              <time dateTime={cert.issuedIso}>{cert.issued}</time>
                            </span>
                            {cert.credentialId && (
                              <span className="font-mono">ID {cert.credentialId}</span>
                            )}
                          </p>

                          {cert.skills.length > 0 && (
                            <ul className="mt-4 flex flex-wrap gap-1.5">
                              {cert.skills.map((skill) => (
                                <li key={skill}>
                                  <Chip className="px-2.5 py-0.5">{skill}</Chip>
                                </li>
                              ))}
                            </ul>
                          )}

                          <div className="mt-auto flex flex-wrap gap-2 pt-5">
                            <a
                              href={cert.verifyUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="border-brand-500/30 bg-brand-500/10 text-brand-200 hover:bg-brand-500/20 focus-visible:outline-brand-400 inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-xs font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2"
                            >
                              <FaArrowUpRightFromSquare className="h-3 w-3" aria-hidden />
                              Verify on {cert.issuer}
                            </a>
                            {cert.file && (
                              <a
                                href={cert.file}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`View ${cert.title} certificate (PDF)`}
                                className="border-line hover:border-line-strong hover:text-fg focus-visible:outline-brand-400 inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-xs font-medium text-slate-300 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2"
                              >
                                <FaFilePdf className="h-3 w-3" aria-hidden />
                                PDF
                              </a>
                            )}
                          </div>
                        </div>
                      </article>
                    </li>
                  ))}
                </ul>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
