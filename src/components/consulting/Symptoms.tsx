export interface SymptomsContent {
  eyebrow: string;
  heading: string;
  /** Four to six lines the owner recognizes. */
  items: string[];
}

/** "Sound familiar?" (roadmap Update 1, U1.1): paper, ledger rules between the symptoms. */
export function Symptoms({ content }: { content: SymptomsContent }) {
  return (
    <section aria-labelledby="symptoms-heading" className="container-wide py-16 sm:py-[88px]">
      <div className="flex flex-col gap-3">
        <p className="eyebrow text-copper-ink">{content.eyebrow}</p>
        <h2 id="symptoms-heading" className="max-w-[20em] font-serif text-[clamp(2rem,4.5vw,2.625rem)] font-medium leading-[1.1] tracking-[-0.01em] text-ink">
          {content.heading}
        </h2>
      </div>
      <ul className="mt-10 grid gap-x-10 border-b border-cream-deep sm:grid-cols-2 lg:grid-cols-3">
        {content.items.map((line, i) => (
          <li key={i} className="flex gap-4 border-t border-cream-deep py-5">
            <span className="figures pt-1 font-serif text-[15px] text-copper-ink">{String(i + 1).padStart(2, '0')}</span>
            <span className="font-serif text-[22px] leading-snug text-ink">{line}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
