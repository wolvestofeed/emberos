export interface Step {
  title: string;
  body: string;
}

export interface HowItWorksContent {
  eyebrow: string;
  heading: string;
  steps: Step[];
}

/** "How it works" (roadmap Update 1, U1.3): three or four numbered steps on paper, numerals in copper-ink. */
export function HowItWorks({ content }: { content: HowItWorksContent }) {
  return (
    <section aria-labelledby="how-heading" className="container-wide py-16 sm:py-[88px]">
      <div className="flex flex-col gap-3">
        <p className="eyebrow text-copper-ink">{content.eyebrow}</p>
        <h2 id="how-heading" className="max-w-[20em] font-serif text-[clamp(2rem,4.5vw,2.625rem)] font-medium leading-[1.1] tracking-[-0.01em] text-ink">
          {content.heading}
        </h2>
      </div>
      <ol className="mt-10 grid gap-x-8 gap-y-8 border-t border-ink pt-8 sm:grid-cols-2 lg:grid-cols-4">
        {content.steps.map((step, i) => (
          <li key={step.title} className="flex flex-col gap-3">
            <span className="figures font-serif text-[15px] text-copper-ink">{String(i + 1).padStart(2, '0')}</span>
            <h3 className="font-serif text-[26px] font-semibold leading-[1.15] text-ink">{step.title}</h3>
            <p className="text-[15px] leading-relaxed text-ink-soft">{step.body}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
