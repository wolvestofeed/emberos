import type { AppPageContent } from '@/content/app-page';
import { SectionHeading } from '@/components/Section';

const COLS: Record<number, string> = { 3: 'lg:grid-cols-3', 4: 'lg:grid-cols-4', 5: 'lg:grid-cols-5', 6: 'lg:grid-cols-6' };

/**
 * Section 2 of an application page: the departments it runs (Muse Kitchen) or the stages of the food
 * ecosystem (Cotyledon). Arrows join the blocks only when they are a sequence.
 */
export function AppStrip({ strip }: { strip: AppPageContent['strip'] }) {
  return (
    <>
      <SectionHeading id="ecosystem-heading" eyebrow={strip.eyebrow} title={strip.heading} tone="light" align="center" />
      <ol className={`mt-12 grid gap-4 sm:grid-cols-2 lg:gap-3 ${COLS[strip.blocks.length] ?? 'lg:grid-cols-5'}`}>
        {strip.blocks.map((b, i) => (
          <li key={b.name} className="relative flex flex-col rounded-tile border border-cream-line bg-paper p-5 shadow-card-light">
            <span className="font-label text-[0.65rem] uppercase tracking-[0.3em] text-copper">
              {strip.blockLabel} {i + 1}
            </span>
            <h3 className="mt-2 font-display text-2xl leading-none text-copper">{b.name}</h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft">{b.line}</p>
            {strip.sequence && i < strip.blocks.length - 1 ? (
              <span aria-hidden="true" className="absolute -right-3 top-1/2 hidden -translate-y-1/2 text-cream-line lg:block">
                <svg viewBox="0 0 16 16" className="h-4 w-4">
                  <path d="M3 8h9m0 0L8.5 4.5M12 8l-3.5 3.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            ) : null}
          </li>
        ))}
      </ol>
    </>
  );
}
