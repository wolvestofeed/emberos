import Image from 'next/image';
import { TextLink } from '@/components/consulting/Buttons';

export interface ToolKitTeaserContent {
  eyebrow: string;
  heading: string;
  body: string;
  link: { label: string; href: string };
}

/** Points at the Tool Kit page (style sheet §6.7). Ember OS appears only through the kit's own badge file. */
export function ToolKitTeaser({ content }: { content: ToolKitTeaserContent }) {
  const { eyebrow, heading, body, link } = content;
  return (
    <section aria-labelledby="toolkit-heading" className="container-wide flex flex-wrap items-center gap-10 py-16 sm:py-[88px]">
      <div className="flex min-w-0 flex-[1_1_480px] flex-col gap-3.5">
        <p className="eyebrow text-copper-ink">{eyebrow}</p>
        <h2 id="toolkit-heading" className="font-serif text-[clamp(1.75rem,4vw,2.25rem)] font-medium leading-[1.15] text-ink">
          {heading}
        </h2>
        <p className="max-w-[36em] text-base leading-relaxed text-ink-soft">{body}</p>
        <TextLink href={link.href} className="self-start">
          {link.label}
        </TextLink>
      </div>
      <div className="min-w-0 flex-[0_1_320px]">
        <Image src="/brand/ember/powered-by-ember-os-badge-on-light.png" alt="Powered by Ember OS" width={898} height={152} className="h-auto w-full" sizes="320px" />
      </div>
    </section>
  );
}
