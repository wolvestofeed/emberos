# foodismymuse.com — Consulting build-out

A sub-roadmap of `Docs/ROADMAP.md` (Phase 6). foodismymuse.com becomes the marketing site for **Food Is My Muse Consulting**, Rob Bogatin's food business consulting practice. The current Ember OS content becomes the **Tool Kit** page and keeps its look.

- **Style spec:** `design/default-style-sheet.md` (the build spec; a coding agent builds from it and the mock-up alone).
- **Reference mock-up:** `design/mockups/consulting-home.html`.
- **Rules:** `Docs/CLAUDE.md`. Builds on Rob's yes (rule 5); commits and pushes are per-action (rule 8).

## Decided (2026-10-19)
- Persona, colors, fonts and type hierarchy: the paper-and-ledger direction, approved by Rob.
- Wordmark: "Food Is My Muse Consulting", set in type, the only wordmark in the main header. Rob Bogatin is introduced in the hero line and has his own section above the service cards.
- Site map: `/` Home, `/services`, `/work`, `/about`, `/tool-kit` (today's home content), with `/platform` and `/mission` unchanged under the Tool Kit look. No contact page: "Book a call" is a link.
- Two route groups: `(site)` for the consulting look, `(toolkit)` for the Ember OS look. URLs do not change.
- Sign in stays in the Tool Kit header only. The Tool Kit header gains a link back to the consulting site. SiteHeader nav: Services, Work, Tool Kit, About, plus Book a call.
- Book a call: an email link until Rob supplies a booking link. No form on this site.
- Favicon and social avatar: the Ember OS ones until Rob supplies a monogram or mark.
- Services, fixed names in order: Business Setup; Costing and Accounting; Operations and SOPs; Production and Scale.
- Audiences: Chefs and restaurateurs, CPG founders, Caterers, Ghost kitchens, Bakers.

## Build order

### C1 — Tokens, fonts, structure
- [x] Tokens in `design/tokens.css`: `--color-copper-ink`, `--color-tomato`, `--color-tomato-deep`, `--font-serif`; the `figures` and `container-wide` utilities; contrast table extended.
- [x] Newsreader through `next/font/google` (variable, `opsz` axis) in `src/app/layout.tsx`.
- [x] Route groups `(site)` and `(toolkit)`, each with its own layout carrying the body colors (moved out of `globals.css`), header and footer.
- [x] Metadata: title, `siteName` and description for the consulting practice on `(site)` (`src/config/site.ts`); the Tool Kit pages keep the Ember OS metadata. No Open Graph image on the site group until there is a mark for the practice.

### C2 — Components, `src/components/consulting/`
- [x] SiteHeader (wordmark, nav, Book a call, `<details>` menu under about 720 px)
- [x] Hero (eyebrow, H1, lede opening with Rob's name, two buttons)
- [x] CostingCard (a `<table>` from typed data, labeled "Illustrative example")
- [x] AudienceStrip ("Built for")
- [x] Services section (Rob Bogatin heading and description, four ServiceCards)
- [x] OperatingHistory (a `<dl>` with the photo slot)
- [x] ToolKitTeaser (the kit's "Powered by Ember OS" badge)
- [x] ClosingCTA
- [x] SiteFooter

### C3 — Pages and content
- [x] Today's home moves to `/tool-kit`, unchanged in look; links and the Tool Kit header updated.
- [x] New home at `/` from the components, matching the mock-up.
- [x] Copy deck `content/consulting-home.md` and typed data `src/content/consulting-home.ts`, the same pattern as the other pages. Slots Rob has not filled stay as bracketed placeholders.
- [x] `/services`: one section per service, sharing the service names.
- [x] `/work`: case studies from Rob's confirmed history only.
- [x] `/about`: Rob's background, every fact confirmed by Rob.

### C4 — Imagery
- [ ] Rob's photos (headshot, at work in a kitchen): web-sized in `public/images/consulting/`, originals in `library/photos/`.
- [x] The on-light "Powered by Ember OS" badge copied into `public/brand/ember/`.

### C5 — Checks and launch
- [ ] Accessibility pass against style sheet section 9 (AA contrast, 360 px, keyboard, alt text).
- [x] `pnpm typecheck`, `pnpm lint`, `pnpm build` pass; every route prerenders static (2026-10-19, eight routes).
- [ ] Rob reviews on `pnpm dev` (port 3001). Commit, push and deploy on his say-so.

## Waiting on Rob (not blocking the build)
- The hero intro line, the description of Rob, the closing line, his email.
- Prices, or the decision to show none.
- Case studies for Work and the facts for About.
- Photos.
- A booking link, if "Book a call" should not be email.
- A monogram or mark for the favicon and social avatar.

---

## Update Log
- **2026-10-19**: Sub-roadmap created. Agreed with Rob: the practice is branded Food Is My Muse Consulting, with Rob Bogatin as the main asset. Its audience is new food business founders (chefs, CPG founders, caterers, ghost kitchens, bakers) buying setup, costing and accounting, operations and production help. Two directions were mocked up on the Design canvas; Rob chose the paper-and-ledger one and approved its colors, fonts and type hierarchy. Per Rob, the wordmark moves to the header as the only wordmark, and Rob's name goes into the hero description and the Services section heading in place of "Four ways in". The style is documented as the site's default style sheet (`design/default-style-sheet.md`) with a static HTML mock-up (`design/mockups/consulting-home.html`). Nothing in `src/` has changed.
- **2026-10-19**: Per Rob: `Docs/CLAUDE.md` rewritten for the consulting site. The open decisions were taken by default (listed under Decided) so the build can start; what still waits on Rob is listed and does not block it.
- **2026-10-19**: Per Rob: C1 to C3 built on the defaults. `design/tokens.css` gains copper-ink, tomato, tomato-deep and `--font-serif`; `globals.css` makes paper and ink the body default with a tomato focus ring, `.toolkit` restores the Ember ground and `.on-dark` a copper-light ring on dark bands; `figures` and `container-wide` utilities. Newsreader loads through `next/font`. Route groups `src/app/(site)` (SiteHeader, SiteFooter) and `src/app/(toolkit)` (the old Header and Footer, Ember OS metadata); the former home is `(toolkit)/tool-kit/page.tsx`, Platform and Mission moved into the group with their URLs unchanged; the Tool Kit header and footer link back to the consulting site. Nine components in `src/components/consulting/` plus `PageIntro`. `src/config/site.ts` holds the practice name, nav and where Book a call goes (`NEXT_PUBLIC_BOOKING_URL`, else `mailto:` the `NEXT_PUBLIC_CONTACT_EMAIL`, else `/about#contact`). Pages `/`, `/services` (one section per service, anchored from the cards), `/work` (the five confirmed cases), `/about` (story slots, the history band, the contact block). Decks `content/consulting-home.md`, `services.md`, `work.md`, `about.md` with typed twins in `src/content/`. Every slot Rob owes renders as bracketed text. The 404 carries the consulting header. Checked on `pnpm dev` at desktop and 375 px.
