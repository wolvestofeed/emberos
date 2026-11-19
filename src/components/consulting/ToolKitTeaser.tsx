import Image from 'next/image';
import { TextLink } from '@/components/consulting/Buttons';

export interface ToolKitApp {
  name: string;
  /** Facts only. CompTable copy never advises (brief §5). */
  line: string;
  /** List price slot, e.g. "[$___]/month". */
  price: string;
  /** The app's brand title: its square mark beside its name set in its own brand type (Rob, 2026-11-18). */
  brand: 'muse-kitchen' | 'comptable';
  href?: string;
  /** A second link under the price, e.g. CompTable's Live Demo (2026-11-18). */
  extra?: { label: string; href: string };
}

export interface ToolKitTeaserContent {
  eyebrow: string;
  heading: string;
  /** The approved line (brief §1). */
  lead: string;
  body: string;
  apps: ToolKitApp[];
  link: { label: string; href: string };
}

/** Muse Kitchen: the square icon and MUSE KITCHEN in the kit's Cormorant small caps, the logo's deep green. */
function MuseKitchenTitle() {
  return (
    <span className="inline-flex items-center gap-3">
      <Image src="/brand/muse-kitchen/muse-kitchen-icon-128.png" alt="" width={128} height={128} className="h-11 w-11 rounded-[22%]" sizes="44px" />
      <span className="font-display text-[24px] font-semibold uppercase leading-none tracking-[0.08em] text-[#0B2A22]">Muse Kitchen</span>
    </span>
  );
}

/** CompTable: the hexagon mark and the wordmark as getcomptable.com sets it, "Comp" bold navy and "Table" italic emerald. */
function CompTableTitle() {
  return (
    <span className="inline-flex items-center gap-3">
      <Image src="/brand/comptable/comptable-mark.svg" alt="" width={880} height={1021} className="h-11 w-auto" unoptimized />
      <span className="text-[28px] leading-none tracking-[-0.01em]" style={{ fontFamily: '"Adobe Garamond Pro", Garamond, Georgia, serif' }}>
        <span className="font-bold text-[#1A2B3C]">Comp</span>
        <span className="italic text-[#059669]">Table</span>
      </span>
    </span>
  );
}

/**
 * The software that comes with the work (brief §4 and §6): the approved line and the terms in one
 * paragraph on the left, with the Ember OS logo beside the link; the two apps as tiles on the right, each
 * titled with its own mark and brand type, then its line and price.
 */
export function ToolKitTeaser({ content }: { content: ToolKitTeaserContent }) {
  const { eyebrow, heading, lead, body, apps, link } = content;
  return (
    <section aria-labelledby="toolkit-heading" className="bg-cream"><div className="container-wide flex flex-wrap items-center gap-10 py-16 sm:gap-14 sm:py-[88px]">
      <div className="flex min-w-0 flex-[1_1_420px] flex-col gap-3.5">
        <p className="eyebrow text-copper-ink">{eyebrow}</p>
        <h2 id="toolkit-heading" className="font-serif text-[clamp(1.75rem,4vw,2.25rem)] font-medium leading-[1.15] text-ink">
          {heading}
        </h2>
        <p className="max-w-[36em] text-[17px] leading-relaxed text-ink">{lead}</p>
        <p className="max-w-[36em] text-base leading-relaxed text-ink-soft">{body}</p>
        <div className="flex items-center gap-4 self-start">
          <TextLink href={link.href}>{link.label}</TextLink>
          <a href={link.href} aria-label={link.label} className="shrink-0 rounded-[18%] shadow-tile transition-transform hover:-translate-y-0.5">
            <Image src="/brand/ember/ember-os-stacked-256.png" alt="Ember OS" width={256} height={256} className="h-[72px] w-[72px] rounded-[18%]" sizes="72px" />
          </a>
        </div>
      </div>
      <ul className="grid min-w-0 flex-[1_1_380px] gap-4">
        {apps.map((app) => (
          <li key={app.name} className="flex flex-col gap-3 rounded-tile border border-cream-line bg-white p-6 shadow-tile">
            <h3 aria-label={app.name}>
              {app.href ? (
                <a href={app.href} className="rounded-sm">
                  {app.brand === 'comptable' ? <CompTableTitle /> : <MuseKitchenTitle />}
                </a>
              ) : app.brand === 'comptable' ? (
                <CompTableTitle />
              ) : (
                <MuseKitchenTitle />
              )}
            </h3>
            <p className="text-[15px] leading-relaxed text-ink-soft">{app.line}</p>
            <p className="figures border-t border-cream-deep pt-3 text-[13px] font-semibold text-ink">{app.price}</p>
            {app.extra ? (
              <a href={app.extra.href} className="self-start font-sans text-[14px] font-semibold text-copper-ink underline underline-offset-4 hover:text-ink">
                {app.extra.label}
              </a>
            ) : null}
          </li>
        ))}
      </ul>
      </div>
    </section>
  );
}
