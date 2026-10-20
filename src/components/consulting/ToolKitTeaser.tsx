import Image from 'next/image';
import { TextLink } from '@/components/consulting/Buttons';

export interface ToolKitApp {
  name: string;
  /** Facts only. CompTable copy never advises (brief §5). */
  line: string;
  /** List price slot, e.g. "[$___]/month". */
  price: string;
  /** Only Muse Kitchen carries the kit's "Powered by Ember OS" badge. */
  emberBadge?: boolean;
  href?: string;
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

/**
 * The software that comes with the work (brief §4 and §6): the approved line and the terms in one
 * paragraph on the left; the two apps as tiles on the right, each with its line and list price slot.
 * Ember OS appears only through the kit's badge file, on Muse Kitchen.
 */
export function ToolKitTeaser({ content }: { content: ToolKitTeaserContent }) {
  const { eyebrow, heading, lead, body, apps, link } = content;
  return (
    <section aria-labelledby="toolkit-heading" className="container-wide flex flex-wrap items-center gap-10 py-16 sm:gap-14 sm:py-[88px]">
      <div className="flex min-w-0 flex-[1_1_420px] flex-col gap-3.5">
        <p className="eyebrow text-copper-ink">{eyebrow}</p>
        <h2 id="toolkit-heading" className="font-serif text-[clamp(1.75rem,4vw,2.25rem)] font-medium leading-[1.15] text-ink">
          {heading}
        </h2>
        <p className="max-w-[36em] text-[17px] leading-relaxed text-ink">{lead}</p>
        <p className="max-w-[36em] text-base leading-relaxed text-ink-soft">{body}</p>
        <TextLink href={link.href} className="self-start">
          {link.label}
        </TextLink>
      </div>
      <ul className="grid min-w-0 flex-[1_1_380px] gap-4">
        {apps.map((app) => (
          <li key={app.name} className="flex flex-col gap-3 rounded-tile border border-cream-line bg-white p-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h3 className="font-serif text-[22px] font-semibold leading-tight text-ink">
                {app.href ? (
                  <a href={app.href} className="rounded-sm hover:underline">
                    {app.name}
                  </a>
                ) : (
                  app.name
                )}
              </h3>
              {app.emberBadge ? (
                <Image src="/brand/ember/powered-by-ember-os-badge-on-light.png" alt="Powered by Ember OS" width={898} height={152} className="h-5 w-auto" sizes="120px" />
              ) : null}
            </div>
            <p className="text-[15px] leading-relaxed text-ink-soft">{app.line}</p>
            <p className="figures border-t border-cream-deep pt-3 text-[13px] font-semibold text-ink">{app.price}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
