import type { Metadata } from 'next';
import Image from 'next/image';
import { comptable } from '@/content/comptable';
import { Section, SectionHeading } from '@/components/Section';
import { Button } from '@/components/Button';
import { SeatAtTheTable } from '@/components/SeatAtTheTable';

export const metadata: Metadata = {
  title: 'CompTable',
  description: comptable.hero.sub,
};

/**
 * The CompTable page in the Ember OS section: a summary of the getcomptable.com home page (2026-11-10).
 * Every word comes from src/content/comptable.ts; every button that signs up or reads further goes to
 * getcomptable.com. The hero sits on cream because the CompTable name logo is dark on white.
 */
export default function CompTablePage() {
  const { hero, questions, localPulse, network, share, engine, inventory, privacy, callouts, teamPhoto } = comptable;
  return (
    <>
      {/* 1. Hero */}
      <section aria-labelledby="comptable-heading" className="bg-cream text-ink">
        <div className="container-site grid items-center gap-10 py-16 sm:py-24 lg:grid-cols-[1fr_1fr] lg:gap-14">
          <div>
            <p className="eyebrow text-copper">{hero.eyebrow}</p>
            <Image src="/brand/comptable/comptable-name-logo.webp" alt="CompTable" width={800} height={175} priority className="mt-5 h-12 w-auto sm:h-14" />
            <h1 id="comptable-heading" className="mt-8 font-display text-4xl leading-[1.08] text-ink sm:text-5xl">
              {hero.headlineLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h1>
            <p className="mt-6 text-lg font-medium leading-relaxed text-ink">{hero.sub}</p>
            <p className="mt-3 text-lg leading-relaxed text-ink-soft">{hero.lede}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href={hero.primary.href} external>
                {hero.primary.label}
              </Button>
              <Button href={hero.secondary.href} tone="ghost-light" external>
                {hero.secondary.label}
              </Button>
            </div>
          </div>
          <Image
            src={hero.screenshot.src}
            alt={hero.screenshot.alt}
            width={hero.screenshot.width}
            height={hero.screenshot.height}
            className="h-auto w-full rounded-card border border-cream-line shadow-card-light"
            sizes="(min-width: 1024px) 40rem, 100vw"
          />
        </div>
      </section>

      {/* 2. The questions operators ask */}
      <Section band="dark" ariaLabelledBy="questions-heading">
        <SectionHeading id="questions-heading" eyebrow={questions.eyebrow} title={questions.heading} />
        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {questions.cards.map((card) => (
            <li key={card.title} className="flex flex-col">
              <ul className="flex-1 space-y-3 border-l-2 border-amber/60 pl-4">
                {card.questions.map((q) => (
                  <li key={q} className="font-display text-xl leading-snug text-cream">
                    {q}
                  </li>
                ))}
              </ul>
              <div className="mt-5 rounded-card border border-ground-line bg-ground-raised p-6 shadow-card">
                <h3 className="font-display text-2xl leading-tight text-copper-light">{card.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-mist">{card.body}</p>
              </div>
            </li>
          ))}
        </ul>
        <p className="mt-12 max-w-3xl text-lg leading-relaxed text-mist">{questions.closing}</p>
      </Section>

      {/* 3. The Local Pulse */}
      <Section band="light" id="local-pulse" ariaLabelledBy="pulse-heading">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <SectionHeading id="pulse-heading" eyebrow={localPulse.eyebrow} title={localPulse.heading} tone="light" />
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">{localPulse.body}</p>
            <div className="mt-8">
              <Button href={localPulse.link.href} external>
                {localPulse.link.label}
              </Button>
            </div>
          </div>
          <div className="rounded-card border border-cream-line bg-paper p-7 shadow-card-light">
            <p className="eyebrow text-copper">{localPulse.metricsLabel}</p>
            <ul className="mt-4 divide-y divide-cream-line">
              {localPulse.metrics.map((m) => (
                <li key={m} className="py-3 font-sans text-base font-medium text-ink">
                  {m}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* 4. The peer network */}
      <Section band="dark" id="peer-network" ariaLabelledBy="network-heading">
        <SectionHeading id="network-heading" eyebrow={network.eyebrow} title={network.heading} />
        {network.body.map((p) => (
          <p key={p.slice(0, 32)} className="mt-5 max-w-3xl text-lg leading-relaxed text-mist">
            {p}
          </p>
        ))}
        <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {network.steps.map((step, i) => (
            <li key={step.lead} className="rounded-card border border-ground-line bg-ground-raised p-6 shadow-card">
              <span className="font-label text-[0.65rem] uppercase tracking-[0.3em] text-amber">Step {i + 1}</span>
              <h3 className="mt-3 font-display text-2xl leading-tight text-copper-light">{step.lead}</h3>
              <p className="mt-3 text-sm leading-relaxed text-mist">{step.text}</p>
            </li>
          ))}
        </ol>
        <p className="mt-10 max-w-3xl text-base leading-relaxed text-mist">{network.monthly}</p>
      </Section>

      {/* 5. The more you share */}
      <Section band="deep" ariaLabelledBy="share-heading">
        <div className="mx-auto max-w-3xl text-center">
          <h2 id="share-heading" className="font-display text-4xl leading-tight text-copper-light sm:text-5xl">
            {share.heading}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-mist">{share.body}</p>
        </div>
      </Section>

      {/* 6. Compliance is the foundation */}
      <Section band="light" ariaLabelledBy="engine-heading">
        <p className="eyebrow mb-3 text-copper">{engine.eyebrow}</p>
        <h2 id="engine-heading" className="max-w-3xl font-display text-4xl leading-tight text-copper sm:text-5xl">
          {engine.headingLines.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-ink-soft">{engine.sub}</p>
        <ol className="mt-10 grid gap-3 sm:grid-cols-3">
          {engine.tiers.map((t) => (
            <li key={t.tier} className="rounded-tile border border-cream-line bg-paper p-5 shadow-card-light">
              <span className="font-label text-[0.65rem] uppercase tracking-[0.3em] text-copper">{t.tier}</span>
              <p className="mt-2 font-display text-2xl leading-tight text-ink">{t.name}</p>
            </li>
          ))}
        </ol>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {engine.blocks.map((b) => (
            <div key={b.title} className="rounded-card border border-cream-line bg-paper p-7 shadow-card-light">
              <h3 className="font-display text-2xl leading-tight text-copper">{b.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">{b.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* 7. What runs on the platform */}
      <Section band="dark" ariaLabelledBy="inventory-heading">
        <SectionHeading id="inventory-heading" eyebrow={inventory.eyebrow} title={inventory.heading} />
        <div className="mt-12 grid gap-10 lg:grid-cols-3">
          <div>
            <h3 className="eyebrow text-amber">{inventory.outputsLabel}</h3>
            <ul className="mt-4 space-y-2.5">
              {inventory.outputs.map((o) => (
                <li key={o} className="text-base leading-snug text-cream">
                  {o}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="eyebrow text-amber">{inventory.simulatorsLabel}</h3>
            <ul className="mt-4 space-y-5">
              {inventory.simulators.map((s) => (
                <li key={s.name}>
                  <p className="font-sans text-base font-semibold text-copper-light">
                    {s.name}
                    {s.tag ? <span className="ml-2 rounded-sm border border-mist/40 px-1.5 py-0.5 font-label text-[0.6rem] uppercase tracking-[0.16em] text-mist">{s.tag}</span> : null}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-mist">{s.line}</p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="eyebrow text-amber">{inventory.templatesLabel}</h3>
            <ul className="mt-4 space-y-5">
              {inventory.templates.map((t) => (
                <li key={t.name}>
                  <p className="font-sans text-base font-semibold text-copper-light">{t.name}</p>
                  <p className="mt-1 text-sm leading-relaxed text-mist">{t.line}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* 8. Privacy */}
      <Section band="light" ariaLabelledBy="privacy-heading">
        <SectionHeading id="privacy-heading" eyebrow={privacy.eyebrow} title={privacy.heading} tone="light" />
        <ol className="mt-12 grid gap-5 md:grid-cols-3">
          {privacy.layers.map((l, i) => (
            <li key={l.title} className="rounded-card border border-cream-line bg-paper p-7 shadow-card-light">
              <span className="font-display text-4xl leading-none text-copper">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="mt-4 font-display text-2xl leading-tight text-copper">{l.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">{l.body}</p>
            </li>
          ))}
        </ol>
        <p className="mt-10">
          <a href={privacy.link.href} className="inline-flex items-center gap-2 font-sans text-sm font-semibold text-ink hover:underline">
            {privacy.link.label}
            <span aria-hidden="true">→</span>
          </a>
        </p>
      </Section>

      {/* 9. For accountants and for local coalitions */}
      <Section band="dark" ariaLabelledBy="callouts-heading">
        <h2 id="callouts-heading" className="sr-only">
          For accountants and local coalitions
        </h2>
        <div className="grid gap-5 md:grid-cols-2">
          {callouts.map((c) => (
            <div key={c.heading} className="flex flex-col rounded-card border border-ground-line bg-ground-raised p-8 shadow-card">
              <p className="eyebrow text-amber">{c.eyebrow}</p>
              <h3 className="mt-3 font-display text-3xl leading-tight text-copper-light">{c.heading}</h3>
              <p className="mt-4 flex-1 text-base leading-relaxed text-mist">{c.body}</p>
              <p className="mt-6">
                <a href={c.link.href} className="inline-flex items-center gap-2 font-sans text-sm font-semibold text-amber hover:underline">
                  {c.link.label}
                  <span aria-hidden="true">→</span>
                </a>
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* 10. Have a seat at the table */}
      <Section band="deep" ariaLabelledBy="seat-heading">
        <SeatAtTheTable photo={teamPhoto} hideSecondary />
      </Section>
    </>
  );
}
