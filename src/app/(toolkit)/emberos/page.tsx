import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { emberOs, type EmberOsApp } from '@/content/ember-os';
import { Button } from '@/components/Button';

export const metadata: Metadata = {
  title: { absolute: 'Ember OS: Muse Kitchen and CompTable' },
  description: 'Ember OS is two applications built on one system: Muse Kitchen for the kitchen and the books, CompTable for wages and benefits.',
};

/** Each app's card in its own brand: lockup, colors and button tone, as on its sign-in card. */
const BRAND = {
  muse: {
    card: 'bg-muse-deep border-muse-emerald',
    lockup: { src: '/brand/muse-kitchen/muse-kitchen-stacked-on-dark.png', alt: 'Muse Kitchen, powered by Ember OS', w: 1638, h: 1020, cls: 'h-32 w-auto' },
    icon: { src: '/brand/muse-kitchen/muse-kitchen-icon-128.png', unoptimized: false },
    accent: 'text-muse-mint',
    dot: 'bg-muse-mint',
    tone: 'muse' as const,
  },
  comptable: {
    card: 'bg-[#1A2B3C] border-[#059669]',
    lockup: { src: '/brand/comptable/comptable-horizontal-on-dark.svg', alt: 'CompTable', w: 4515, h: 1167, cls: 'my-6 h-20 w-auto' },
    icon: { src: '/brand/comptable/comptable-mark.svg', unoptimized: true },
    accent: 'text-[#6EE7B7]',
    dot: 'bg-[#6EE7B7]',
    tone: 'comptable' as const,
  },
};

/**
 * The Ember OS landing page (`/emberos`, 2026-11-19): where the consulting menu's Ember OS item and the
 * Ember OS logo go. A light hero, then four numbered sections: the 2-app stack, actuals vs. planning,
 * the two engines (the app cards) and Local Pulse; Cotyledon below.
 */
export default function EmberOsPage() {
  const { hero, stack, planning, engines, apps, localPulse, startHeading, startSteps, cotyledon } = emberOs;
  return (
    <>
      {/* Hero */}
      <section aria-labelledby="ember-heading" className="bg-ground text-cream">
        <div className="container-site flex flex-col items-center py-14 text-center sm:py-20">
          <Image src="/brand/ember/ember-os-stacked-1024.png" alt="" width={1024} height={1024} sizes="224px" priority className="h-48 w-48 rounded-[18%] sm:h-56 sm:w-56" />
          <p className="eyebrow mt-6 text-amber">{hero.eyebrow}</p>
          <h1 id="ember-heading" className="mt-4 max-w-3xl text-balance font-display text-4xl leading-[1.08] sm:text-6xl">
            {hero.headline}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-mist sm:text-xl">{hero.support}</p>
        </div>
      </section>

      {/* 01 The 2-App Stack */}
      <section aria-labelledby="stack-heading" className="border-t border-ground-line bg-ground-raised text-cream">
        <div className="container-site py-16 sm:py-20">
          <SectionHead id="stack-heading" section={stack} />
          {/* POS off to the side on the left; the two Ember OS apps stacked together on the right. */}
          <div className="mx-auto mt-10 grid max-w-4xl items-center gap-6 md:grid-cols-[2fr_3fr] md:gap-8">
            {stack.layers
              .filter((l) => l.key === 'pos')
              .map((l) => (
                <div key={l.key} className="flex items-center gap-4 self-center rounded-tile border border-dashed border-mist/30 p-5 sm:gap-5">
                  <span aria-hidden="true" className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-mist/30 font-sans text-xs font-semibold tracking-wider text-mist">
                    POS
                  </span>
                  <div className="min-w-0">
                    <p className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <span className="font-display text-xl text-cream">{l.name}</span>
                      <span className="font-sans text-xs font-semibold uppercase tracking-[0.16em] text-mist">{l.role}</span>
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-mist sm:text-base">{l.line}</p>
                  </div>
                </div>
              ))}

            <div className="rounded-tile border border-amber/40 p-3 sm:p-4">
              <p className="flex items-center justify-center gap-2 pb-3 pt-1">
                <Image src="/brand/ember/ember-mark-64.png" alt="" width={64} height={64} className="h-5 w-5 rounded" />
                <span className="eyebrow text-amber">Ember OS</span>
              </p>
              <ul className="grid gap-3">
                {stack.layers.map((l) => {
                  if (l.key === 'pos') return null;
                  const brand = BRAND[l.key];
                  return (
                    <li key={l.key} className={`flex items-center gap-4 rounded-tile border p-5 sm:gap-5 ${brand.card}`}>
                      <Image src={brand.icon.src} alt="" width={128} height={128} unoptimized={brand.icon.unoptimized} className="h-12 w-12 shrink-0 rounded-lg object-contain" />
                      <div className="min-w-0">
                        <p className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                          <span className="font-display text-xl text-cream">{l.name}</span>
                          <span className={`font-sans text-xs font-semibold uppercase tracking-[0.16em] ${brand.accent}`}>{l.role}</span>
                        </p>
                        <p className="mt-1 text-sm leading-relaxed text-mist sm:text-base">{l.line}</p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 02 Actuals vs. Planning Mode */}
      <section aria-labelledby="planning-heading" className="border-t border-ground-line bg-ground text-cream">
        <div className="container-site py-16 sm:py-20">
          <SectionHead id="planning-heading" section={planning} />
          <div className="mx-auto mt-10 grid max-w-4xl gap-6 md:grid-cols-2">
            {planning.modes.map((m, i) => (
              <div key={m.name} className={`rounded-tile border p-6 sm:p-8 ${i === 1 ? 'border-amber/60 bg-ground-raised' : 'border-ground-line bg-ground-deep'}`}>
                <p className={`eyebrow ${i === 1 ? 'text-amber' : 'text-mist'}`}>{m.tag}</p>
                <h3 className="mt-2 font-display text-2xl text-copper-light">{m.name}</h3>
                <ul className="mt-5 space-y-2.5">
                  {m.points.map((p) => (
                    <li key={p} className="flex gap-3 text-sm leading-relaxed text-mist sm:text-base">
                      <span aria-hidden="true" className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${i === 1 ? 'bg-amber' : 'bg-mist/60'}`} />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 03 The Two Engines */}
      <section aria-labelledby="engines-heading" className="border-t border-ground-line bg-ground-raised text-cream">
        <div className="container-site py-16 sm:py-20">
          <SectionHead id="engines-heading" section={engines} />
          <div className="mx-auto mt-10 grid max-w-5xl gap-6 md:grid-cols-2">
            {apps.map((a) => (
              <AppCard key={a.key} app={a} />
            ))}
          </div>
          <p className="mt-8 text-center">
            <Link href={engines.link.href} className="font-sans text-sm font-semibold text-amber underline underline-offset-4 hover:text-cream">
              {engines.link.label}
            </Link>
          </p>
        </div>
      </section>

      {/* 04 Peer-to-Peer Intelligence */}
      <section aria-labelledby="pulse-heading" className="border-t border-ground-line bg-ground-deep text-cream">
        <div className="container-site py-16 sm:py-20">
          <div className="mx-auto max-w-4xl rounded-tile border border-amber/60 p-6 sm:p-12">
            <SectionHead id="pulse-heading" section={localPulse} />
            <dl className="mt-10 grid gap-6 sm:grid-cols-3">
              {localPulse.pillars.map((p) => (
                <div key={p.name} className="border-t border-amber/40 pt-4 text-center sm:text-left">
                  <dt className="font-display text-lg text-cream">{p.name}</dt>
                  <dd className="mt-1 text-sm leading-relaxed text-mist">{p.line}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-10 text-center">
              <a href={localPulse.link.href} className="font-sans text-sm font-semibold text-amber underline underline-offset-4 hover:text-cream">
                {localPulse.link.label}
              </a>
            </p>
          </div>

          <h2 id="start-heading" className="mx-auto mt-16 max-w-4xl text-balance text-center font-display text-3xl leading-[1.12] text-cream sm:text-4xl">
            {startHeading}
          </h2>
          <ol aria-labelledby="start-heading" className="mx-auto mt-8 grid max-w-4xl gap-x-10 md:grid-cols-3">
            {startSteps.map((s, i) => (
              <li key={s.title} className="flex gap-4 border-t border-amber/40 py-5">
                <span className="pt-1 font-display text-[15px] tabular-nums text-amber">{String(i + 1).padStart(2, '0')}</span>
                <span className="flex flex-col gap-1.5">
                  <span className="font-display text-[22px] leading-snug text-cream">{s.title}</span>
                  <span className="text-[15px] leading-relaxed text-mist">{s.body}</span>
                </span>
              </li>
            ))}
          </ol>

          <div className="mx-auto mt-14 flex max-w-3xl flex-col items-center justify-center gap-3 border-t border-ground-line pt-8 text-center sm:flex-row sm:gap-4">
            <Image src="/brand/cotyledon/cotyledon-icon-128.png" alt="" width={128} height={128} className="h-9 w-9 rounded-md" />
            <p className="text-sm text-mist">{cotyledon.line}</p>
            <Link href={cotyledon.link.href} className="font-sans text-sm font-semibold text-coty-mint underline underline-offset-4 hover:text-cream">
              {cotyledon.link.label}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

/** Numbered section title, two-line headline and lead, centered. */
function SectionHead({ id, section }: { id: string; section: { number: string; title: string; headline: string; subhead?: string; lead: string } }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="eyebrow text-amber">
        {section.number && (
          <>
            <span className="tabular-nums">{section.number}</span>
            <span aria-hidden="true" className="mx-2 text-amber/50">·</span>
          </>
        )}
        {section.title}
      </p>
      <h2 id={id} className="mt-4 text-balance font-display text-3xl leading-[1.12] text-cream sm:text-5xl">
        {section.headline}
        {section.subhead && <span className="mt-2 block text-copper-light">{section.subhead}</span>}
      </h2>
      <p className="mt-6 text-base leading-relaxed text-mist sm:text-lg">{section.lead}</p>
    </div>
  );
}

function AppCard({ app }: { app: EmberOsApp }) {
  const b = BRAND[app.key];
  return (
    <article className={`flex flex-col rounded-card border p-8 shadow-card sm:p-10 ${b.card}`}>
      <div className="flex justify-center">
        <Image src={b.lockup.src} alt={b.lockup.alt} width={b.lockup.w} height={b.lockup.h} unoptimized={b.lockup.src.endsWith('.svg')} className={b.lockup.cls} />
      </div>
      <h3 className={`mt-6 text-center font-sans text-sm font-semibold uppercase tracking-[0.18em] ${b.accent}`}>{app.audience}</h3>
      <p className="mt-4 text-base leading-relaxed text-cream-ink/90">{app.summary}</p>
      <ul className="mt-5 flex-1 space-y-2.5">
        {app.points.map((p) => (
          <li key={p} className="flex gap-3 text-sm leading-relaxed text-cream-ink/85">
            <span aria-hidden="true" className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${b.dot}`} />
            <span>{p}</span>
          </li>
        ))}
      </ul>
      <div className="mt-8 grid gap-3">
        <Button href={app.learn.href} tone={b.tone} className="w-full">
          {app.learn.label}
        </Button>
        <Button href={app.start.href} tone="ghost-dark" external className="w-full">
          {app.start.label}
        </Button>
      </div>
    </article>
  );
}
