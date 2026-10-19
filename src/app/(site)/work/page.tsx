import type { Metadata } from 'next';
import Image from 'next/image';
import { header, cases } from '@/content/work';
import { closing } from '@/content/consulting-home';
import { PageIntro } from '@/components/consulting/PageIntro';
import { ClosingCTA } from '@/components/consulting/ClosingCTA';

export const metadata: Metadata = {
  title: 'Work',
  description: header.headline,
};

/**
 * Case studies from Rob's confirmed history, as ledger rows: a label, a title, the story, and where
 * Rob has supplied them, the business's logo on a white tile and its products on the shelf.
 */
export default function WorkPage() {
  return (
    <>
      <PageIntro eyebrow={header.eyebrow} heading={header.headline} lede={header.lede} />
      <div className="container-wide pb-16 sm:pb-[88px]">
        <ul className="divide-y divide-cream-line border-t border-cream-line">
          {cases.map((c) => {
            const wideLogo = c.logo && c.logo.width / c.logo.height > 3;
            return (
              <li key={`${c.label}-${c.title}`} className="flex flex-wrap gap-x-10 gap-y-3 py-10 sm:py-12">
                <p className="flex-[0_0_180px] pt-2 font-label text-[11px] uppercase tracking-[0.24em] text-copper-ink">{c.label}</p>
                <div className="min-w-0 flex-[1_1_480px]">
                  <h2 className="font-serif text-[clamp(1.5rem,3vw,1.75rem)] font-medium leading-[1.2] text-ink">{c.title}</h2>
                  <p className="mt-3 max-w-[40em] text-[17px] leading-relaxed text-ink-soft">{c.body}</p>

                  {c.logo ? (
                    <figure className={`mt-7 rounded-tile border border-cream-line bg-white ${wideLogo ? 'px-6 py-5' : 'inline-block p-4'}`}>
                      <Image
                        src={c.logo.src}
                        alt={c.logo.alt}
                        width={c.logo.width}
                        height={c.logo.height}
                        className={wideLogo ? 'h-auto w-full' : 'h-24 w-24'}
                        sizes={wideLogo ? '(min-width: 1200px) 900px, 100vw' : '96px'}
                      />
                    </figure>
                  ) : null}

                  {c.photos?.length ? (
                    <ul className={`mt-5 grid gap-4 ${c.photos.length === 1 ? 'max-w-[36rem]' : 'grid-cols-1 sm:grid-cols-3'}`}>
                      {c.photos.map((p) => (
                        <li key={p.src}>
                          <Image
                            src={p.src}
                            alt={p.alt}
                            width={p.width}
                            height={p.height}
                            className="h-auto w-full rounded-tile border border-cream-line"
                            sizes="(min-width: 1200px) 300px, (min-width: 640px) 33vw, 100vw"
                          />
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <ClosingCTA content={closing} />
    </>
  );
}
