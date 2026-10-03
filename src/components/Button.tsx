import Link from 'next/link';
import type { ReactNode } from 'react';

type Tone = 'amber' | 'muse' | 'cotyledon' | 'ghost-dark' | 'ghost-light';

const TONES: Record<Tone, string> = {
  amber: 'bg-amber text-ink hover:bg-[#ffb94d]',
  muse: 'bg-muse-mint text-muse-deep hover:bg-[#b4e2cc]',
  cotyledon: 'bg-coty-mint text-coty-forest hover:bg-[#b3dfc5]',
  'ghost-dark': 'border border-mist/40 text-cream hover:border-cream hover:bg-white/5',
  'ghost-light': 'border border-ink/30 text-ink hover:border-ink hover:bg-ink/5',
};

export interface ButtonProps {
  href: string;
  children: ReactNode;
  tone?: Tone;
  external?: boolean;
  className?: string;
}

/** One button style for the site. External links (the apps) open in the same tab: the card is the sign-in. */
export function Button({ href, children, tone = 'amber', external = false, className = '' }: ButtonProps) {
  const cls = `inline-flex items-center justify-center gap-2 rounded-pill px-5 py-3 font-sans text-sm font-semibold tracking-wide transition-colors ${TONES[tone]} ${className}`;
  if (external) {
    return (
      <a href={href} className={cls}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}
