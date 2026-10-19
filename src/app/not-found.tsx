import Link from 'next/link';
import { SiteHeader } from '@/components/consulting/SiteHeader';
import { SiteFooter } from '@/components/consulting/SiteFooter';

/** Global 404, outside both route groups, so it carries the consulting header and footer itself. */
export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main id="main" className="flex-1">
        <section className="container-wide py-24 text-center">
          <p className="eyebrow text-copper-ink">404</p>
          <h1 className="mt-4 font-serif text-[clamp(2rem,4.5vw,2.625rem)] font-medium leading-[1.1] text-ink">That page is not here.</h1>
          <p className="mt-8">
            <Link href="/" className="font-sans text-[15px] font-semibold text-copper-ink underline underline-offset-4 hover:text-ink">
              Back to the front page
            </Link>
          </p>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
