/** The head of an inner consulting page: eyebrow, H1 and an optional lede, in the hero's type. */
export function PageIntro({ eyebrow, heading, lede, id = 'page-heading' }: { eyebrow: string; heading: string; lede?: string; id?: string }) {
  return (
    <section aria-labelledby={id} className="container-wide pb-10 pt-14 sm:pb-12 sm:pt-[88px]">
      <div className="flex max-w-[40em] flex-col gap-5">
        <p className="eyebrow text-copper-ink">{eyebrow}</p>
        <h1 id={id} className="whitespace-pre-line font-serif text-[clamp(2.5rem,6vw,3.75rem)] font-medium leading-[1.05] tracking-[-0.02em] text-ink">
          {heading}
        </h1>
        {lede ? <p className="text-lg leading-relaxed text-ink-soft">{lede}</p> : null}
      </div>
    </section>
  );
}
