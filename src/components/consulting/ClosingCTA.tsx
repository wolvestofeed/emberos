import { PrimaryButton } from '@/components/consulting/Buttons';

export interface ClosingContent {
  heading: string;
  button: { label: string; href: string };
}

/** The cream closing band (style sheet §6.8): Rob's closing line and the primary button. */
export function ClosingCTA({ content }: { content: ClosingContent }) {
  return (
    <section aria-labelledby="closing-heading" className="border-t border-cream-line bg-cream">
      <div className="container-wide flex flex-wrap items-center justify-between gap-6 py-14 sm:py-[72px]">
        <h2 id="closing-heading" className="min-w-0 flex-[1_1_420px] font-serif text-[clamp(1.75rem,4vw,2.25rem)] font-medium leading-[1.15] text-ink">
          {content.heading}
        </h2>
        <PrimaryButton href={content.button.href}>{content.button.label}</PrimaryButton>
      </div>
    </section>
  );
}
