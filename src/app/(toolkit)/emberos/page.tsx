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
    accent: 'text-muse-mint',
    dot: 'bg-muse-mint',
    tone: 'muse' as const,
  },
  comptable: {
    card: 'bg-[#1A2B3C] border-[#059669]',
    lockup: { src: '/brand/comptable/comptable-horizontal-on-dark.svg', alt: 'CompTable', w: 4515, h: 1167, cls: 'my-6 h-20 w-auto' },
    accent: 'text-[#6EE7B7]',
    dot: 'bg-[#6EE7B7]',
    tone: 'comptable' as const,
  },
};

/**
 * The Ember OS landing page (`/emberos`, 2026-11-19): where the consulting menu's Ember OS item and the
 * Ember OS logo go. Muse Kitchen and CompTable side by side, Local Pulse across both, how they connect, Cotyledon below.
 */
export default function EmberOsPage() {
  const { hero, apps, localPulse, together, cotyledon } = emberOs;
  return (
    <>
      <section aria-labelledby="ember-heading" className="bg-ground text-cream">
        <div className="container-site flex flex-col items-center pt-12 text-center sm:pt-16">
          <Image src="/brand/ember/ember-os-stacked-256.png" alt="" width={256} height={256} priority className="h-24 w-24 rounded-[18%] sm:h-28 sm:w-28" />
          <p className="eyebrow mt-6 text-amber">{hero.eyebrow}</p>
          <h1 id="ember-heading" className="mt-4 max-w-4xl font-display text-4xl leading-[1.08] sm:text-5xl">
            {hero.headline}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-mist sm:text-xl">{hero.support}</p>
        </div>

        <div className="container-site pb-16 pt-10 sm:pb-20 sm:pt-12">
          <h2 className="sr-only">The two applications</h2>
          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
            {apps.map((a) => (
              <AppCard key={a.key} app={a} />
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="pulse-heading" className="border-t border-ground-line bg-ground-raised text-cream">
        <div className="container-site py-14 sm:py-16">
          <div className="mx-auto max-w-3xl rounded-tile border border-amber/60 p-6 text-center sm:p-10">
            <p className="eyebrow text-amber">{localPulse.eyebrow}</p>
            <h2 id="pulse-heading" className="mt-3 font-display text-3xl text-copper-light sm:text-4xl">
              {localPulse.heading}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-mist sm:text-lg">{localPulse.body}</p>
            <a href={localPulse.link.href} className="mt-6 inline-block font-sans text-sm font-semibold text-amber underline underline-offset-4 hover:text-cream">
              {localPulse.link.label}
            </a>
          </div>
        </div>
      </section>

      <section aria-labelledby="together-heading" className="border-t border-ground-line bg-ground-deep text-cream">
        <div className="container-site py-14 sm:py-16">
          <div className="mx-auto max-w-3xl text-center">
            <h2 id="together-heading" className="font-display text-3xl text-copper-light sm:text-4xl">
              {together.heading}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-mist sm:text-lg">{together.body}</p>
            <Link href={together.link.href} className="mt-6 inline-block font-sans text-sm font-semibold text-amber underline underline-offset-4 hover:text-cream">
              {together.link.label}
            </Link>
          </div>
          <div className="mx-auto mt-12 flex max-w-3xl flex-col items-center justify-center gap-3 border-t border-ground-line pt-8 text-center sm:flex-row sm:gap-4">
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
