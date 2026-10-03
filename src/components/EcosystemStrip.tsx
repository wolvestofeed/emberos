import { ecosystem } from '@/content/home';
import { AppTag } from '@/components/AppTag';
import { SectionHeading } from '@/components/Section';

/** Seed → Soil → Grow → Prepare → Serve & gather, each stage labelled by the app that runs it. */
export function EcosystemStrip() {
  return (
    <>
      <SectionHeading id="ecosystem-heading" eyebrow="The food ecosystem" title={ecosystem.heading} tone="light" align="center" />
      <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5 lg:gap-3">
        {ecosystem.stages.map((s, i) => (
          <li key={s.stage} className="relative flex flex-col rounded-tile border border-cream-line bg-paper p-5 shadow-card-light">
            <span className="font-label text-[0.65rem] uppercase tracking-[0.3em] text-copper">Stage {i + 1}</span>
            <h3 className="mt-2 font-display text-2xl leading-none text-copper">{s.stage}</h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft">{s.line}</p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {s.runsOn.map((app) => (
                <AppTag key={app} app={app} />
              ))}
            </div>
            {i < ecosystem.stages.length - 1 ? (
              <span aria-hidden="true" className="absolute -right-3 top-1/2 hidden -translate-y-1/2 text-cream-line lg:block">
                <svg viewBox="0 0 16 16" className="h-4 w-4">
                  <path d="M3 8h9m0 0L8.5 4.5M12 8l-3.5 3.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            ) : null}
          </li>
        ))}
      </ol>
      <p className="mt-6 text-center text-sm text-ink-soft">Room for the next application at either end of the chain.</p>
    </>
  );
}
