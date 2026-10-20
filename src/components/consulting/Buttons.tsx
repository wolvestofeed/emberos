import Link from 'next/link';
import type { ReactNode } from 'react';

/** Booking links may be mailto: or an outside calendar; everything else is a page on this site. */
const isExternal = (href: string) => /^(https?:|mailto:|tel:)/.test(href);

interface AnchorProps {
  href: string;
  className: string;
  children: ReactNode;
}

function Anchor({ href, className, children }: AnchorProps) {
  if (isExternal(href)) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

export interface ButtonProps {
  href: string;
  children: ReactNode;
  /** `sm` is the header size. Both keep a 44 px touch target. */
  size?: 'md' | 'sm';
  className?: string;
}

/** Tomato, white text, pill. The one accent on the consulting pages (style sheet §6.10). */
export function PrimaryButton({ href, children, size = 'md', className = '' }: ButtonProps) {
  const pad = size === 'sm' ? 'px-5 py-3 text-sm' : 'px-[26px] py-[15px] text-[15px]';
  return (
    <Anchor
      href={href}
      className={`inline-flex items-center justify-center rounded-pill bg-tomato font-sans font-semibold text-white shadow-button transition-[background-color,box-shadow,transform] duration-200 hover:-translate-y-px hover:bg-tomato-deep hover:shadow-button-hover active:translate-y-0 active:bg-tomato-deep active:shadow-button ${pad} ${className}`}
    >
      {children}
    </Anchor>
  );
}

/** Outline in ink, cream on hover. */
export function SecondaryButton({ href, children, className = '' }: Omit<ButtonProps, 'size'>) {
  return (
    <Anchor
      href={href}
      className={`inline-flex items-center justify-center rounded-pill border-[1.5px] border-ink px-6 py-3.5 font-sans text-[15px] font-semibold text-ink transition-[background-color,box-shadow] duration-200 hover:bg-cream hover:shadow-tile ${className}`}
    >
      {children}
    </Anchor>
  );
}

/** Copper-ink, underlined; ink on hover. */
export function TextLink({ href, children, className = '' }: Omit<ButtonProps, 'size'>) {
  return (
    <Anchor href={href} className={`font-sans text-[15px] font-semibold text-copper-ink underline underline-offset-4 transition-colors hover:text-ink ${className}`}>
      {children}
    </Anchor>
  );
}
