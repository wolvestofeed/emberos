import Image from 'next/image';
import { PrimaryButton } from '@/components/consulting/Buttons';

export interface ClosingContent {
  heading: string;
  button: { label: string; href: string };
}

export interface PartnerLogo {
  name: string;
  logo: { src: string; width: number; height: number };
  /** The partner's own site; the logo links there in a new tab. */
  href?: string;
}

/** One logo card: a tracked eyebrow over a wrapping row of logos. The same shape will serve a Clients card. */
export interface PartnersContent {
  eyebrow: string;
  items: PartnerLogo[];
}

/**
 * The cream closing band (style sheet §6.8), two halves from 900 px: Rob's closing line with the
 * primary button under it on the left, the Partners card on the right. They stack on narrower screens.
 */
export function ClosingCTA({ content, partners }: { content: ClosingContent; partners?: PartnersContent }) {
  return (
    <section aria-labelledby="closing-heading" className="border-t border-cream-line bg-cream">
      <div className="container-wide flex flex-wrap items-center gap-x-14 gap-y-10 py-14 sm:py-[72px]">
        <div className="min-w-0 flex-[1_1_400px]">
          <h2 id="closing-heading" className="whitespace-pre-line font-serif text-[clamp(1.75rem,4vw,2.25rem)] font-medium leading-[1.15] text-ink">
            {content.heading}
          </h2>
          <PrimaryButton href={content.button.href} className="mt-8">
            {content.button.label}
          </PrimaryButton>
        </div>
        {partners && partners.items.length > 0 ? <LogoCard content={partners} /> : null}
      </div>
    </section>
  );
}

function LogoCard({ content }: { content: PartnersContent }) {
  return (
    <aside aria-label={content.eyebrow} className="min-w-0 flex-[1_1_400px] rounded-tile border border-cream-line bg-white p-6 shadow-tile sm:p-8">
      <p className="eyebrow text-copper-ink">{content.eyebrow}</p>
      <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
        {content.items.map((item) => {
          const img = (
            <Image
              src={item.logo.src}
              alt={item.name}
              width={item.logo.width}
              height={item.logo.height}
              className="h-auto w-full max-w-[240px]"
            />
          );
          return (
            <li key={item.name} className="flex items-center">
              {item.href ? (
                <a href={item.href} target="_blank" rel="noopener noreferrer" className="inline-block rounded-sm" aria-label={`${item.name} (opens in a new tab)`}>
                  {img}
                </a>
              ) : (
                img
              )}
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
