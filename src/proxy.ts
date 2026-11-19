import { NextResponse, type NextRequest } from 'next/server';

/**
 * /EmberOS, /Emberos and any other spelling of the Ember OS landing page in another case go to /emberos
 * (Rob, 2026-11-19). A next.config redirect cannot do this: its paths match regardless of case, so it would
 * also catch /emberos and loop.
 */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (pathname !== '/emberos' && pathname.toLowerCase() === '/emberos') {
    const url = request.nextUrl.clone();
    url.pathname = '/emberos';
    return NextResponse.redirect(url, 308);
  }
  return NextResponse.next();
}

/** Every casing of /emberos, letter by letter; the check above lets /emberos itself through. */
export const config = { matcher: ['/:path([Ee][Mm][Bb][Ee][Rr][Oo][Ss])'] };
