import { spotlight, type Provenance } from '@/content/home';
import { SectionHeading } from '@/components/Section';

const CHIP: Record<Provenance, string> = {
  SOURCED: 'bg-prov-sourced text-white',
  STATED: 'bg-prov-stated text-white',
  DERIVED: 'bg-prov-derived text-white',
  PLACEHOLDER: 'border-2 border-dashed border-prov-placeholder bg-transparent text-prov-placeholder',
  UNCONFIRMED: 'bg-prov-unconfirmed text-white',
  DATED: 'bg-prov-dated text-white',
};

function Chip({ tag }: { tag: Provenance }) {
  return (
    <span className={`inline-flex items-center rounded-sm px-1.5 py-0.5 font-label text-[0.62rem] font-medium uppercase tracking-[0.16em] ${CHIP[tag]}`}>
      {tag}
    </span>
  );
}

/** A static mock of cost rows with provenance chips and source lines. Example values, labelled as such. */
export function ProvenanceSpotlight() {
  return (
    <div className="grid items-center gap-12 lg:grid-cols-2">
      <div>
        <SectionHeading id="spotlight-heading" eyebrow="Transparency" title={spotlight.heading} tone="light" />
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">{spotlight.body}</p>
        <dl className="mt-8">
          <dt className="eyebrow text-copper">The chips</dt>
          <dd className="mt-3 flex flex-wrap gap-2">
            {spotlight.legend.map((tag) => (
              <Chip key={tag} tag={tag} />
            ))}
          </dd>
        </dl>
      </div>

      <figure className="rounded-card border border-cream-line bg-paper p-2 shadow-card-light">
        <div className="rounded-tile bg-ground p-5 text-cream sm:p-6">
          <p className="eyebrow text-amber">Grow plan · Broccoli, 10 × 20 tray</p>
          <ul className="mt-5 divide-y divide-ground-line">
            {spotlight.rows.map((row) => {
              const placeholder = row.tag === 'PLACEHOLDER';
              return (
                <li key={row.label} className="py-4 first:pt-0 last:pb-0">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <span className="font-sans text-sm font-medium">{row.label}</span>
                    <span className="flex items-baseline gap-2">
                      <span
                        className={`font-mono text-xl tabular-nums ${placeholder ? 'text-prov-placeholder/90 [text-decoration:underline_dashed] underline-offset-4' : 'text-cream'}`}
                      >
                        {row.value}
                      </span>
                      <span className="text-xs text-mist">{row.unit}</span>
                      <Chip tag={row.tag} />
                    </span>
                  </div>
                  <p className="mt-1.5 text-xs text-mist">{row.source}</p>
                </li>
              );
            })}
          </ul>
        </div>
        <figcaption className="px-4 py-3 text-center text-xs text-ink-soft">{spotlight.exampleNote}</figcaption>
      </figure>
    </div>
  );
}
