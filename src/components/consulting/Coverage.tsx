export interface CoverageArea {
  name: string;
  line: string;
}

export interface CoverageContent {
  eyebrow: string;
  heading: string;
  areas: CoverageArea[];
}

/** "What every engagement covers" (roadmap Update 1, U1.4): a cream band naming the four areas, one line each. */
export function Coverage({ content }: { content: CoverageContent }) {
  return (
    <section aria-labelledby="coverage-heading" className="border-t border-cream-line bg-cream">
      <div className="container-wide py-16 sm:py-[88px]">
        <div className="flex flex-col gap-3">
          <p className="eyebrow text-copper-ink">{content.eyebrow}</p>
          <h2 id="coverage-heading" className="max-w-[20em] font-serif text-[clamp(2rem,4.5vw,2.625rem)] font-medium leading-[1.1] tracking-[-0.01em] text-ink">
            {content.heading}
          </h2>
        </div>
        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {content.areas.map((a) => (
            <li key={a.name} className="flex flex-col gap-3 rounded-tile border border-cream-line bg-white p-7">
              <h3 className="font-serif text-[22px] font-semibold leading-[1.15] text-ink">{a.name}</h3>
              <p className="text-[15px] leading-relaxed text-ink-soft">{a.line}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
