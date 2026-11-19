export interface StartBandContent {
  eyebrow: string;
  heading: string;
  body: string;
  /** Three short steps, each a title and a line. */
  steps: { title: string; body: string }[];
}

/**
 * "Start from where you are" (marketing refresh, 2026-11-18): how an open business moves onto Muse
 * Kitchen from the software it already runs. A cream band between How it works and the Tool Kit.
 */
export function StartBand({ content }: { content: StartBandContent }) {
  const { eyebrow, heading, body, steps } = content;
  return (
    <section aria-labelledby="start-heading" className="bg-cream">
      <div className="container-wide py-16 sm:py-[88px]">
        <div className="flex flex-col gap-3">
          <p className="eyebrow text-copper-ink">{eyebrow}</p>
          <h2 id="start-heading" className="max-w-[22em] font-serif text-[clamp(2rem,4.5vw,2.625rem)] font-medium leading-[1.1] tracking-[-0.01em] text-ink">
            {heading}
          </h2>
          <p className="max-w-[40em] text-[17px] leading-relaxed text-ink-soft">{body}</p>
        </div>
        <ol className="mt-10 grid gap-x-10 border-b border-cream-deep md:grid-cols-3">
          {steps.map((s, i) => (
            <li key={s.title} className="flex gap-4 border-t border-cream-deep py-5">
              <span className="figures pt-1 font-serif text-[15px] text-copper-ink">{String(i + 1).padStart(2, '0')}</span>
              <span className="flex flex-col gap-1.5">
                <span className="font-serif text-[22px] leading-snug text-ink">{s.title}</span>
                <span className="text-[15px] leading-relaxed text-ink-soft">{s.body}</span>
              </span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
