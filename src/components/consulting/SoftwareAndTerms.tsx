import Image from 'next/image';
import { offer } from '@/content/services';

export interface SoftwareApp {
  name: string;
  /** Facts only. CompTable copy never advises. */
  line: string;
  /** What it covers, two or three short items. */
  covers: string[];
  /** List price slot, e.g. "List price [$___]/month". */
  price: string;
  /** Only Muse Kitchen carries the kit's "Powered by Ember OS" badge. */
  emberBadge?: boolean;
  href?: string;
  /** The app's own wordmark, shown in place of the typed name (CompTable's, from its kit). */
  logo?: { src: string; alt: string; width: number; height: number };
  /** Web-sized screenshot in public/images/consulting/software/; without it, a labeled placeholder. */
  screenshot?: { src: string; alt: string; width: number; height: number };
  /** A wordmark laid over the screenshot's top bar, top right (CompTable's engine screen has a blank bar). */
  overlay?: { src: string; alt: string; width: number; height: number };
  screenshotPlaceholder?: string;
}

export interface OfferTerms {
  /** The offer's numeral, '01'…'05'; the name comes from services. */
  numeral: string;
  form: string;
  museKitchen: boolean;
  compTable: boolean;
  minimum: string;
}

export interface SoftwareAndTermsContent {
  eyebrow: string;
  heading: string;
  lead: string;
  apps: SoftwareApp[];
  matrix: { heading: string; rows: OfferTerms[] };
  terms: { heading: string; items: { label: string; text: string }[]; note?: string };
}

const SUBTITLE = 'font-label text-[10px] uppercase tracking-[0.24em] text-ink-soft';

function Included({ yes }: { yes: boolean }) {
  return yes ? (
    <span className="font-semibold text-ink">Included</span>
  ) : (
    <span className="text-ink-soft" aria-label="Not included">
      —
    </span>
  );
}

/**
 * Software and terms on /services: the two apps as tiles with a screenshot, a matrix of what each
 * offer comes with, and the plain terms under it. Replaces the coverage band and the terms list.
 */
export function SoftwareAndTerms({ content }: { content: SoftwareAndTermsContent }) {
  const { eyebrow, heading, lead, apps, matrix, terms } = content;
  return (
    <section aria-labelledby="software-heading" className="border-t border-cream-line bg-cream">
      <div className="container-wide py-16 sm:py-[88px]">
        <div className="flex flex-col gap-3">
          <p className="eyebrow text-copper-ink">{eyebrow}</p>
          <h2 id="software-heading" className="max-w-[20em] whitespace-pre-line font-serif text-[clamp(2rem,4.5vw,2.625rem)] font-medium leading-[1.1] tracking-[-0.01em] text-ink">
            {heading}
          </h2>
          <p className="max-w-[40em] text-[17px] leading-relaxed text-ink">{lead}</p>
        </div>

        {/* The apps */}
        <ul className="mt-10 grid gap-5 lg:grid-cols-2">
          {apps.map((app) => (
            <li key={app.name} className="flex flex-col overflow-hidden rounded-tile border border-cream-line bg-white shadow-tile">
              {app.screenshot ? (
                <div className="relative">
                  <Image
                    src={app.screenshot.src}
                    alt={app.screenshot.alt}
                    width={app.screenshot.width}
                    height={app.screenshot.height}
                    className="aspect-[16/9] w-full border-b border-cream-line object-cover object-left-top"
                    sizes="(min-width: 1024px) 560px, 100vw"
                  />
                  {app.overlay ? (
                    <Image src={app.overlay.src} alt={app.overlay.alt} width={app.overlay.width} height={app.overlay.height} className="absolute right-5 top-4 h-7 w-auto" sizes="140px" />
                  ) : null}
                </div>
              ) : (
                <div className="flex aspect-[16/9] w-full items-center justify-center border-b border-dashed border-cream-line bg-cream p-6 text-center text-sm text-ink-soft">
                  {app.screenshotPlaceholder}
                </div>
              )}
              <div className="flex flex-1 flex-col gap-3 p-6">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h3 className="font-serif text-[26px] font-semibold leading-tight text-ink">
                    {app.logo ? (
                      <a href={app.href ?? '#'} className="inline-block rounded-sm" aria-label={app.name}>
                        <Image src={app.logo.src} alt={app.logo.alt} width={app.logo.width} height={app.logo.height} className="h-8 w-auto" sizes="160px" />
                      </a>
                    ) : app.href ? (
                      <a href={app.href} className="rounded-sm hover:underline">
                        {app.name}
                      </a>
                    ) : (
                      app.name
                    )}
                  </h3>
                  {app.emberBadge ? (
                    <Image src="/brand/ember/powered-by-ember-os-text-on-light.png" alt="Powered by Ember OS" width={764} height={88} className="h-[26px] w-auto" sizes="230px" />
                  ) : null}
                </div>
                <p className="text-[15px] leading-relaxed text-ink-soft">{app.line}</p>
                <ul className="divide-y divide-cream-deep border-y border-cream-deep">
                  {app.covers.map((c) => (
                    <li key={c} className="py-2 text-[15px] text-ink">
                      {c}
                    </li>
                  ))}
                </ul>
                <p className="figures mt-auto pt-1 text-[13px] font-semibold text-ink">{app.price}</p>
              </div>
            </li>
          ))}
        </ul>

        {/* What each offer comes with */}
        <div className="mt-12 rounded-tile border border-cream-line bg-white p-6 shadow-tile sm:p-7">
          <h3 className="border-b-2 border-ink pb-3 font-serif text-[22px] font-semibold leading-tight text-ink">{matrix.heading}</h3>
          <div className="overflow-x-auto">
            <table className="figures w-full min-w-[40rem] text-[15px] text-ink">
              <thead>
                <tr className={SUBTITLE}>
                  <th scope="col" className="w-full pb-1.5 pt-3 text-left font-medium">
                    Offer
                  </th>
                  <th scope="col" className="whitespace-nowrap pb-1.5 pl-6 pt-3 text-left font-medium">
                    Form
                  </th>
                  <th scope="col" className="whitespace-nowrap pb-1.5 pl-6 pt-3 text-left font-medium">
                    Muse Kitchen
                  </th>
                  <th scope="col" className="whitespace-nowrap pb-1.5 pl-6 pt-3 text-left font-medium">
                    CompTable
                  </th>
                  <th scope="col" className="whitespace-nowrap pb-1.5 pl-6 pt-3 text-left font-medium">
                    Minimum
                  </th>
                </tr>
              </thead>
              <tbody>
                {matrix.rows.map((r) => {
                  const o = offer(r.numeral);
                  return (
                    <tr key={r.numeral} className="border-t border-cream-deep last:border-b last:border-b-ink">
                      <th scope="row" className="py-3 pr-3 text-left font-normal">
                        <span className="mr-3 font-serif text-copper-ink">{o.numeral}</span>
                        <a href={`#${o.slug}`} className="font-semibold text-ink hover:underline">
                          {o.name}
                        </a>
                      </th>
                      <td className="whitespace-nowrap py-3 pl-6 text-ink-soft">{r.form}</td>
                      <td className="whitespace-nowrap py-3 pl-6">
                        <Included yes={r.museKitchen} />
                      </td>
                      <td className="whitespace-nowrap py-3 pl-6">
                        <Included yes={r.compTable} />
                      </td>
                      <td className="whitespace-nowrap py-3 pl-6 text-ink-soft">{r.minimum}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* The terms */}
        <div className="mt-12">
          <h3 className="font-serif text-[22px] font-semibold leading-tight text-ink">{terms.heading}</h3>
          <dl className="mt-4 border-t border-ink">
            {terms.items.map((t) => (
              <div key={t.label} className="flex flex-wrap gap-x-10 gap-y-2 border-b border-cream-deep py-5">
                <dt className="flex-[0_0_200px] pt-1 font-label text-[11px] uppercase tracking-[0.24em] text-copper-ink">{t.label}</dt>
                <dd className="figures min-w-0 max-w-[40em] flex-[1_1_360px] text-[17px] leading-relaxed text-ink">{t.text}</dd>
              </div>
            ))}
          </dl>
          {terms.note ? <p className="mt-6 max-w-[40em] text-[15px] leading-relaxed text-ink-soft">{terms.note}</p> : null}
        </div>
      </div>
    </section>
  );
}
