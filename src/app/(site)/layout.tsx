import { SiteHeader } from '@/components/consulting/SiteHeader';
import { SiteFooter } from '@/components/consulting/SiteFooter';

/** The consulting pages: paper ground (the body default), SiteHeader and SiteFooter. */
export default function SiteLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <SiteHeader />
      <main id="main" className="flex-1">
        {children}
      </main>
      <SiteFooter />
    </>
  );
}
