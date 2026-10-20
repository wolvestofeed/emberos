import type { Metadata } from 'next';
import { servicesPage, software } from '@/content/services';
import { closing } from '@/content/consulting-home';
import { PageIntro } from '@/components/consulting/PageIntro';
import { ClosingCTA } from '@/components/consulting/ClosingCTA';
import { SoftwareAndTerms } from '@/components/consulting/SoftwareAndTerms';

export const metadata: Metadata = {
  title: 'Services',
  description: 'Business Diagnostic, Stabilize, Business Launch and Scale: costing, accounting, operations and production for food businesses.',
};

/** One section per service, in the fixed order, each reachable from its card on the home page. */
export default function ServicesPage() {
  const { header, sections } = servicesPage;
  return (
    <>
      <PageIntro eyebrow={header.eyebrow} heading={header.headline} headingAccent={header.headlineAccent} lede={header.lede} />
      <div className="container-wide pb-16 sm:pb-[88px]">
        <ul className="divide-y divide-cream-line border-t border-cream-line">
          {sections.map(({ service, included, outcome }) => (
            <li key={service.slug} id={service.slug} className="flex scroll-mt-8 flex-wrap gap-x-14 gap-y-6 py-12 sm:py-14">
              <div className="flex min-w-0 flex-[1_1_320px] flex-col gap-3">
                <span className="figures font-serif text-[15px] text-copper-ink">{service.numeral}</span>
                <h2 className="font-serif text-[clamp(1.75rem,4vw,2.25rem)] font-medium leading-[1.15] text-ink">{service.name}</h2>
                <p className="max-w-[36em] text-[17px] leading-relaxed text-ink-soft">{service.line}</p>
                <p className="figures mt-2 text-[13px] font-semibold text-ink">{service.price}</p>
              </div>
              <div className="min-w-0 flex-[1_1_380px]">
                <h3 className="eyebrow text-copper-ink">What is included</h3>
                <ul className="mt-4 divide-y divide-cream-deep border-y border-cream-deep">
                  {included.map((line, i) => (
                    <li key={i} className="py-3 text-[15px] leading-relaxed text-ink">
                      {line}
                    </li>
                  ))}
                </ul>
                <h3 className="eyebrow mt-8 text-copper-ink">What you have at the end</h3>
                <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">{outcome}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <SoftwareAndTerms content={software} />
      <ClosingCTA content={closing} />
    </>
  );
}
