/** The "Built for" strip (style sheet §6.4): a cream band naming who the practice serves. */
export function AudienceStrip({ label, audiences }: { label: string; audiences: string[] }) {
  return (
    <section aria-labelledby="built-for-heading" className="border-y border-cream-line bg-cream">
      <div className="container-wide flex flex-wrap items-center gap-x-8 gap-y-3 py-7">
        <h2 id="built-for-heading" className="eyebrow text-ink-soft">
          {label}
        </h2>
        <ul className="flex flex-wrap gap-x-8 gap-y-3 font-serif text-[22px] text-ink">
          {audiences.map((a) => (
            <li key={a}>{a}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
