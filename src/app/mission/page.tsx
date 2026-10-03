import type { Metadata } from 'next';
import { header, note, signature } from '@/content/mission';
import { Section } from '@/components/Section';
import { CTA } from '@/components/CTA';

export const metadata: Metadata = {
  title: 'Mission',
  description: header.sub,
};

export default function MissionPage() {
  return (
    <>
      <section aria-labelledby="mission-heading" className="bg-ground text-cream">
        <div className="container-site py-16 sm:py-24">
          <div className="max-w-3xl">
            <p className="eyebrow text-amber">{header.eyebrow}</p>
            <h1 id="mission-heading" className="mt-4 font-display text-6xl leading-[1.0] sm:text-7xl">
              {header.headline}
            </h1>
            <p className="mt-6 text-lg text-mist sm:text-xl">{header.sub}</p>
          </div>
        </div>
      </section>

      <Section band="light" ariaLabelledBy="note-heading">
        <h2 id="note-heading" className="sr-only">
          A note from Rob
        </h2>
        <article className="mx-auto max-w-2xl">
          {note.map((para, i) => (
            <p
              key={i}
              className={
                i === 0
                  ? 'font-display text-3xl leading-snug sm:text-4xl'
                  : 'mt-7 text-lg leading-relaxed text-ink sm:text-xl'
              }
            >
              {para}
            </p>
          ))}
          <p className="mt-12 font-display text-3xl italic">— {signature}</p>
        </article>
      </Section>

      <Section band="deep" ariaLabelledBy="cta-heading">
        <CTA />
      </Section>
    </>
  );
}
