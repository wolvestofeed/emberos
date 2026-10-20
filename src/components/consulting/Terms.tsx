export interface TermsContent {
  eyebrow: string;
  heading: string;
  /** Each term: a short label and the plain statement. Prices are bracketed slots. */
  items: { label: string; text: string }[];
  /** The single-projects note, a line under the list rather than a fifth card. */
  note: string;
}

/** Software and terms on /services (brief §4): a ledger of plain statements, label left, text right. */
export function Terms({ content }: { content: TermsContent }) {
  const { eyebrow, heading, items, note } = content;
  return (
    <section aria-labelledby="terms-heading" className="container-wide py-16 sm:py-[88px]">
      <div className="flex flex-col gap-3">
        <p className="eyebrow text-copper-ink">{eyebrow}</p>
        <h2 id="terms-heading" className="max-w-[20em] font-serif text-[clamp(2rem,4.5vw,2.625rem)] font-medium leading-[1.1] tracking-[-0.01em] text-ink">
          {heading}
        </h2>
      </div>
      <dl className="mt-10 border-t border-ink">
        {items.map((t) => (
          <div key={t.label} className="flex flex-wrap gap-x-10 gap-y-2 border-b border-cream-deep py-5">
            <dt className="flex-[0_0_200px] pt-1 font-label text-[11px] uppercase tracking-[0.24em] text-copper-ink">{t.label}</dt>
            <dd className="figures min-w-0 max-w-[40em] flex-[1_1_360px] text-[17px] leading-relaxed text-ink">{t.text}</dd>
          </div>
        ))}
      </dl>
      <p className="mt-6 max-w-[40em] text-[15px] leading-relaxed text-ink-soft">{note}</p>
    </section>
  );
}
