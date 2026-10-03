import { APP_LIST } from '@/config/apps';
import { Button } from '@/components/Button';

export interface CTAProps {
  heading?: string;
  body?: string;
}

/** The closing band with the two sign-in buttons, the same direct links as the home cards. */
export function CTA({ heading = 'Sign in', body }: CTAProps) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <h2 id="cta-heading" className="font-display text-4xl leading-tight text-copper-light sm:text-5xl">
        {heading}
      </h2>
      {body ? <p className="mt-4 text-lg leading-relaxed text-mist">{body}</p> : null}
      <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
        {APP_LIST.map((app) => (
          <Button key={app.key} href={app.url} tone={app.key === 'muse' ? 'muse' : 'cotyledon'} external>
            {app.signInLabel}
          </Button>
        ))}
      </div>
    </div>
  );
}
