import type { Metadata } from 'next';
import { header, story, signature, contact } from '@/content/about';
import { PageIntro } from '@/components/consulting/PageIntro';
import { PrimaryButton } from '@/components/consulting/Buttons';

export const metadata: Metadata = {
  title: 'About',
  description: header.lede,
};

/** A phone number or an email address in Rob's contact line becomes a tel: or mailto: link, so it is one tap on a phone. The text is unchanged. */
const CONTACT_TOKEN = /(\+?1?[\s-]?\(?\d{3}\)?[\s-]?\d{3}[\s-]?\d{4}|[\w.+-]+@[\w-]+(?:\.[\w-]+)+)/g;

function linkContacts(text: string) {
  return text.split(CONTACT_TOKEN).map((part, i) => {
    if (i % 2 === 0) return part;
    const isEmail = part.includes('@');
    const href = isEmail ? `mailto:${part}` : `tel:+1${part.replace(/\D/g, '').replace(/^1/, '')}`;
    return (
      <a key={i} href={href} className="whitespace-nowrap text-ink underline underline-offset-4 hover:text-copper-ink">
        {part}
      </a>
    );
  });
}

/** Rob's note, the same text as the Mission page, then how to get in touch. Operating history lives on /work. */
export default function AboutPage() {
  return (
    <>
      <PageIntro eyebrow={header.eyebrow} heading={header.headline} lede={header.lede} />
      <section aria-label="A note from Rob" className="container-wide pb-16 sm:pb-[88px]">
        <article className="max-w-[40em]">
          {story.map((para, i) => (
            <p key={i} className={i === 0 ? 'font-serif text-[clamp(1.75rem,4vw,2.25rem)] font-medium leading-[1.2] text-ink' : 'mt-6 text-[17px] leading-relaxed text-ink'}>
              {para}
            </p>
          ))}
          <p className="mt-10 font-serif text-[clamp(1.5rem,3vw,1.75rem)] italic text-ink">— {signature}</p>
        </article>
      </section>

      <section id="contact" aria-labelledby="contact-heading" className="scroll-mt-8 border-t border-cream-line bg-cream">
        <div className="container-wide flex flex-wrap items-center justify-between gap-6 py-14 sm:py-[72px]">
          <div className="min-w-0 flex-[1_1_420px]">
            <h2 id="contact-heading" className="font-serif text-[clamp(1.75rem,4vw,2.25rem)] font-medium leading-[1.15] text-ink">
              {contact.heading}
            </h2>
            <p className="mt-3 max-w-[36em] text-[17px] leading-relaxed text-ink-soft">{linkContacts(contact.body)}</p>
          </div>
          <PrimaryButton href={contact.button.href}>{contact.button.label}</PrimaryButton>
        </div>
      </section>
    </>
  );
}
