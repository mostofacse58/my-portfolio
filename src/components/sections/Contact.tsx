import { FaEnvelope, FaGlobe, FaLinkedinIn, FaLocationDot, FaPhone } from 'react-icons/fa6';
import ContactForm from '@/components/sections/ContactForm';
import Reveal from '@/components/ui/Reveal';
import ResumeButton from '@/components/ui/ResumeButton';
import SectionHeading from '@/components/ui/SectionHeading';
import { socialLinks } from '@/data/navigation';
import { profile } from '@/data/profile';

/* The phone number is the one printed on his own CV — see src/data/profile.ts.
   It is rendered as a tel: link so it dials straight from a phone. */
const channels = [
  {
    label: 'Email',
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: FaEnvelope,
    hint: 'Best for detailed enquiries',
  },
  {
    label: 'Phone',
    value: profile.phone,
    href: `tel:${profile.phoneIntl}`,
    icon: FaPhone,
    hint: 'Direct line, Bangladesh time',
  },
  {
    label: 'LinkedIn',
    value: 'in/golammostofa58',
    href: 'https://www.linkedin.com/in/golammostofa58/',
    icon: FaLinkedinIn,
    hint: 'Professional network',
  },
  {
    label: 'Website',
    value: profile.websiteLabel,
    href: profile.website,
    icon: FaGlobe,
    hint: 'My software venture',
  },
  {
    label: 'Location',
    value: profile.location,
    href: 'https://maps.google.com/?q=Rangpur,Bangladesh',
    icon: FaLocationDot,
    hint: 'Open to remote work',
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 sm:py-28">
      <div className="container-page">
        <SectionHeading
          index="06"
          eyebrow="Contact"
          title="Let's talk"
          description="Hiring, contracting, or want a second opinion on an ERP architecture? Pick whichever channel suits you."
        />

        <div className="grid gap-6 lg:grid-cols-12">
          {/* Channels */}
          <div className="flex flex-col gap-5 lg:col-span-5">
            {channels.map((channel, index) => {
              const Icon = channel.icon;
              const external = channel.href.startsWith('http');
              return (
                <Reveal key={channel.label} delay={index * 0.06}>
                  <a
                    href={channel.href}
                    target={external ? '_blank' : undefined}
                    rel={external ? 'noopener noreferrer' : undefined}
                    className="glass group hover:border-brand-400/30 flex items-center gap-4 rounded-2xl p-5 transition-all hover:-translate-y-0.5"
                  >
                    <span className="from-brand-500 to-accent-500 shadow-brand-500/20 text-onbrand grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br shadow-lg">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs tracking-wider text-slate-500 uppercase">
                        {channel.label}
                      </span>
                      <span className="group-hover:text-brand-300 text-fg block truncate text-sm font-medium transition-colors">
                        {channel.value}
                      </span>
                      <span className="block text-xs text-slate-500">{channel.hint}</span>
                    </span>
                  </a>
                </Reveal>
              );
            })}

            <Reveal delay={0.3}>
              <div className="glass rounded-2xl p-5">
                <p className="text-xs tracking-wider text-slate-500 uppercase">Or connect on</p>
                <div className="mt-3 flex flex-wrap gap-2.5">
                  {socialLinks.map(({ label, href, icon: Icon, hoverClass }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className={`border-line bg-tint grid h-10 w-10 place-items-center rounded-xl border text-slate-400 transition-all hover:-translate-y-0.5 ${hoverClass}`}
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  ))}
                </div>

                <ResumeButton variant="soft" fullWidth className="mt-5" label="View my resume" />
              </div>
            </Reveal>
          </div>

          {/* Form */}
          <Reveal delay={0.12} className="lg:col-span-7">
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
