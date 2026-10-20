import { PrimaryButton, SecondaryButton } from '@/components/consulting/Buttons';
import { TracedOrderCard, type TracedOrderExample } from '@/components/consulting/TracedOrderCard';

export interface HeroContent {
  eyebrow: string;
  headline: string;
  /** A second headline line, set in tomato (the button's red, #B33A24) on its own line. */
  headlineAccent?: string;
  /** The lede opens with Rob's name in ink, then his intro line in ink-soft. */
  lede: { name: string; intro: string };
  primary: { label: string; href: string };
  secondary: { label: string; href: string };
  /** One order traced through every department (brief section 6). */
  traced: TracedOrderExample;
  /** One line under the card naming what it shows: the whole-systems foundation. */
  caption: string;
}

/** Hero (style sheet §6.2): text top-left, the traced-order card right; one column under about 1100 px. */
export function Hero({ content }: { content: HeroContent }) {
  const { eyebrow, headline, headlineAccent, lede, primary, secondary, traced, caption } = content;
  return (
    <section aria-labelledby="hero-heading" className="container-wide flex flex-wrap items-start gap-10 pb-12 pt-14 sm:gap-14 sm:pb-[72px] sm:pt-[88px]">
      <div className="flex min-w-0 flex-[1_1_440px] flex-col gap-6">
        <p className="eyebrow text-copper-ink">{eyebrow}</p>
        <h1 id="hero-heading" className="whitespace-pre-line font-serif text-[clamp(2.5rem,6vw,3.75rem)] font-medium leading-[1.05] tracking-[-0.02em] text-ink">
          {headline}
          {headlineAccent ? (
            <>
              {'\n'}
              <span className="text-tomato">{headlineAccent}</span>
            </>
          ) : null}
        </h1>
        <p className="max-w-[34em] text-lg leading-relaxed text-ink-soft">
          <strong className="font-semibold text-ink">{lede.name}</strong> {lede.intro}
        </p>
        <div className="mt-2 flex flex-wrap gap-3">
          <PrimaryButton href={primary.href}>{primary.label}</PrimaryButton>
          <SecondaryButton href={secondary.href}>{secondary.label}</SecondaryButton>
        </div>
      </div>
      <figure className="min-w-0 flex-[1_1_600px]">
        <TracedOrderCard example={traced} />
        <figcaption className="mt-4 px-1 text-sm leading-relaxed text-ink-soft">{caption}</figcaption>
      </figure>
    </section>
  );
}
