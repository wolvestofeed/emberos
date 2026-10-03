import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="bg-ground text-cream">
      <div className="container-site py-24 text-center">
        <p className="eyebrow text-amber">404</p>
        <h1 className="mt-4 font-display text-5xl">That page is not here.</h1>
        <p className="mt-8">
          <Link href="/" className="font-sans text-sm font-semibold text-amber hover:underline">
            Back to Ember OS
          </Link>
        </p>
      </div>
    </section>
  );
}
