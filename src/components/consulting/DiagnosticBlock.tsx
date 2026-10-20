import { PrimaryButton, TextLink } from '@/components/consulting/Buttons';

export interface DiagnosticContent {
  eyebrow: string;
  heading: string;
  body: string;
  /** "[Fixed fee $___]" until Rob sets it. */
  price: string;
  primary: { label: string; href: string };
  detail: { label: string; href: string };
  /** The ledger card on the right. */
  card: { title: string; items: string[] };
}

/**
 * The Diagnostic as the entry offer (roadmap Update 1, U1.2): a cream band, the pitch on the left,
 * and "what you get" on the right as a ledger card in the CostingCard's look.
 */
export function DiagnosticBlock({ content }: { content: DiagnosticContent }) {
  const { eyebrow, heading, body, price, primary, detail, card } = content;
  return (
    <section aria-labelledby="diagnostic-heading" className="border-y border-cream-line bg-cream">
      <div className="container-wide flex flex-wrap items-center gap-10 py-16 sm:gap-14 sm:py-[88px]">
        <div className="flex min-w-0 flex-[1_1_480px] flex-col gap-5">
          <p className="eyebrow text-copper-ink">{eyebrow}</p>
          <h2 id="diagnostic-heading" className="font-serif text-[clamp(2rem,4.5vw,2.625rem)] font-medium leading-[1.1] tracking-[-0.01em] text-ink">
            {heading}
          </h2>
          <p className="max-w-[36em] text-[17px] leading-relaxed text-ink-soft">{body}</p>
          <p className="figures text-[15px] font-semibold text-ink">{price}</p>
          <div className="mt-1 flex flex-wrap items-center gap-x-6 gap-y-3">
            <PrimaryButton href={primary.href}>{primary.label}</PrimaryButton>
            <TextLink href={detail.href}>{detail.label}</TextLink>
          </div>
        </div>
        <div className="min-w-0 flex-[1_1_380px]">
          <div className="rounded-tile border border-cream-line bg-white p-7 shadow-card-light">
            <h3 className="border-b-2 border-ink pb-3 font-serif text-[22px] font-semibold leading-tight text-ink">{card.title}</h3>
            <ol className="figures">
              {card.items.map((line, i) => (
                <li key={i} className="flex gap-4 border-b border-cream-deep py-3 text-[15px] leading-relaxed text-ink last:border-b-0">
                  <span className="shrink-0 pt-px font-serif text-copper-ink">{String(i + 1).padStart(2, '0')}</span>
                  <span>{line}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
