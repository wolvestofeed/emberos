import { PrimaryButton, SecondaryButton } from '@/components/consulting/Buttons';
import { CostingCard, type CostingExample } from '@/components/consulting/CostingCard';

export interface HeroContent {
  eyebrow: string;
  headline: string;
  /** The lede opens with Rob's name in ink, then his intro line in ink-soft. */
  lede: { name: string; intro: string };
  primary: { label: string; href: string };
  secondary: { label: string; href: string };
  costing: CostingExample;
}

/** Hero (style sheet §6.2): text left, the costing card right; one column under about 960 px. */
export function Hero({ content }: { content: HeroContent }) {
  const { eyebrow, headline, lede, primary, secondary, costing } = content;
  return (
    <section aria-labelledby="hero-heading" className="container-wide flex flex-wrap items-center gap-10 pb-12 pt-14 sm:gap-14 sm:pb-[72px] sm:pt-[88px]">
      <div className="flex min-w-0 flex-[1_1_520px] flex-col gap-6">
        <p className="eyebrow text-copper-ink">{eyebrow}</p>
        <h1 id="hero-heading" className="font-serif text-[clamp(2.5rem,6vw,3.75rem)] font-medium leading-[1.05] tracking-[-0.02em] text-ink">
          {headline}
        </h1>
        <p className="max-w-[34em] text-lg leading-relaxed text-ink-soft">
          <strong className="font-semibold text-ink">{lede.name}</strong> {lede.intro}
        </p>
        <div className="mt-2 flex flex-wrap gap-3">
          <PrimaryButton href={primary.href}>{primary.label}</PrimaryButton>
          <SecondaryButton href={secondary.href}>{secondary.label}</SecondaryButton>
        </div>
      </div>
      <div className="min-w-0 flex-[1_1_400px]">
        <CostingCard example={costing} />
      </div>
    </section>
  );
}
