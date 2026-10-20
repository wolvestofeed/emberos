import type { Metadata } from 'next';
import { header, cases } from '@/content/work';
import { closing } from '@/content/consulting-home';
import { PageIntro } from '@/components/consulting/PageIntro';
import { ClosingCTA } from '@/components/consulting/ClosingCTA';

export const metadata: Metadata = {
  title: 'Work',
  description: header.headline,
};

/** Rob's operating history as ledger rows: a label, a title, the one line that also feeds the home page. */
export default function WorkPage() {
  return (
    <>
      <PageIntro eyebrow={header.eyebrow} heading={header.headline} lede={header.lede} />
      <div className="container-wide pb-16 sm:pb-[88px]">
        <ul className="divide-y divide-cream-line border-t border-cream-line">
          {cases.map((c) => (
            <li key={`${c.label}-${c.title}`} className="flex flex-wrap gap-x-10 gap-y-3 py-10 sm:py-12">
              <p className="flex-[0_0_180px] pt-2 font-label text-[11px] uppercase tracking-[0.24em] text-copper-ink">{c.label}</p>
              <div className="min-w-0 flex-[1_1_480px]">
                <h2 className="font-serif text-[clamp(1.5rem,3vw,1.75rem)] font-medium leading-[1.2] text-ink">{c.title}</h2>
                <p className="mt-3 max-w-[40em] text-[17px] leading-relaxed text-ink-soft">{c.fact}</p>
                {c.body ? <p className="mt-3 max-w-[40em] text-[17px] leading-relaxed text-ink-soft">{c.body}</p> : null}
              </div>
            </li>
          ))}
        </ul>
      </div>
      <ClosingCTA content={closing} />
    </>
  );
}
