export interface WholeSystemsContent {
  eyebrow: string;
  heading: string;
  /** Rob's explanation, a bracketed slot until he writes it. */
  body: string;
  /** The connected lines of the business, shown as one ledger. */
  ledger: { title: string; lines: string[] };
}

/**
 * The headline idea of the practice (brief §1): every system Rob builds is wired to the books.
 * A dark band so it carries weight: the explanation left, the connected lines as a ledger right.
 */
export function WholeSystems({ content }: { content: WholeSystemsContent }) {
  const { eyebrow, heading, body, ledger } = content;
  return (
    <section aria-labelledby="whole-systems-heading" className="on-dark bg-ground text-cream">
      <div className="container-wide flex flex-wrap items-center gap-10 py-16 sm:gap-14 sm:py-[88px]">
        <div className="flex min-w-0 flex-[1_1_480px] flex-col gap-5">
          <p className="eyebrow text-copper-light">{eyebrow}</p>
          <h2 id="whole-systems-heading" className="font-serif text-[clamp(2rem,4.5vw,2.625rem)] font-medium leading-[1.1] tracking-[-0.01em]">
            {heading}
          </h2>
          <p className="max-w-[36em] text-[17px] leading-relaxed text-mist">{body}</p>
        </div>
        <div className="min-w-0 flex-[1_1_380px]">
          <div className="rounded-tile border border-ground-line bg-ground-raised p-7 shadow-card">
            <h3 className="border-b-2 border-cream pb-3 font-serif text-[22px] font-semibold leading-tight text-cream">{ledger.title}</h3>
            <ol className="figures">
              {ledger.lines.map((line, i) => (
                <li key={line} className="flex gap-4 border-b border-ground-line py-3.5 font-serif text-[22px] leading-snug text-cream last:border-b-0">
                  <span className="shrink-0 pt-1 font-serif text-[15px] text-copper-light">{String(i + 1).padStart(2, '0')}</span>
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
