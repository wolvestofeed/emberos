# foodismymuse.com — Master Roadmap

Build phases for the Ember OS front door. Each item is marked open [ ] or completed [x].

## Phase 0 — Plan
- [x] Survey the apps and brand kits (Cotyledon outline and CLAUDE.md, Muse README, three logo kits)
- [x] Draft PLAN.md: site map, home sections, platform content, visual direction, deliverables
- [x] Rob reviews the plan and answers the open questions
- [x] Plan agreed

## Phase 1 — Copy
- [x] Home copy (draft)
- [x] Platform copy, module map accurate to both apps (draft)
- [x] Mission copy, Rob's first-person note (draft)
- [x] Portal card copy (Muse Kitchen, Cotyledon) on the home page (draft)
- [ ] Rob edits; copy locked

## Phase 2 — Design
- [x] Design tokens (`design/tokens.css`, Tailwind 4 theme)
- [x] Home page preview (the Next.js app itself, `pnpm dev` on port 3001; the static HTML previews were skipped in favour of the real pages)
- [x] Platform and Mission previews (same)
- [ ] Rob reviews; look locked

## Phase 3 — Components and pages
- [x] Brand assets copied to `public/brand/`
- [x] Layout: Header (with Sign in menu), Footer
- [x] Components: PortalCard (direct sign-in), EcosystemStrip, ValueTile, ModuleTile, ProvenanceSpotlight, ScreenGallery, CTA
- [x] Pages: `/`, `/platform`, `/mission`
- [x] App URL constants in one config (`src/config/apps.ts`)
- [x] Accessibility pass: AA contrast on every pair (table in `design/tokens.css`), 360 px layout, keyboard-operable Sign in menu, skip link, alt text on every logo
- [x] Product screens: four Cotyledon screens from Rob, compressed to 1600 px WebP in `public/screens/`

## Phase 4 — Hand-off
- [x] Hand-off notes for the Claude Code agent (`Docs/CLAUDE.md` → Build and deploy)
- [x] Repo `wolvestofeed/emberos`; Vercel project `emberos`; live at https://foodismymuse.com (www and http redirect to it, 308)
- [ ] Cotyledon on `cotyledon.foodismymuse.com` (its own project; tracked in `Cotyledon/docs/roadmaps/live-domain-roadmap.md`)

## Phase 5 — Payments (next major project, Rob, 2026-10-17)
The next major project after the copy pass: payments on Muse Kitchen (its own repo, roadmap Phase M, item M3) and payments on this marketing site. Nothing is designed yet. Open before anything is built: what the site sells (a subscription to an application, a one-off purchase, or both), whether the site checks out itself or hands the buyer to the app, and whether it is one Stripe account for Ember OS or one per application. Builds only on Rob's yes, per the repo rule.
- [ ] Decide what the site sells and where checkout lives
- [ ] Decide the Stripe account structure (one for Ember OS, or per application)
- [ ] Payments on Muse Kitchen (tracked in `Muse Kitchen/docs/roadmap.md`, Phase M, M3)
- [ ] Payments on this site

---

## Update Log
- **2026-10-02** — Folder set up. Surveyed Cotyledon's outline and rules, the Muse Kitchen README and the three brand kits. Drafted PLAN.md (five pages: Home, Platform, Mission, two portal entries; entry cards directly under the home hero) with seven open questions for Rob.
- **2026-10-02** — Corrected per Rob: the portal entries are the two cards on the home page and sign directly into each app; the separate Muse Kitchen and Cotyledon entry pages are removed. Site is three pages: Home, Platform, Mission.
- **2026-10-02** — Rob answered the open questions: Platform + Mission confirmed; Mission is his first-person note in the voice of his book; Muse docs connected; no walkthrough CTA; Cotyledon's app rules don't apply here and changes are logged; Cotyledon goes live after this phase. Drafted the copy deck: `content/home.md`, `content/platform.md` (modules from both apps' docs), `content/mission.md` (biographical facts flagged for verification).
- **2026-10-02** — Built the site. Next.js 16 App Router + React 19 + TypeScript + Tailwind 4 in this folder: `design/tokens.css`, `src/config/apps.ts` (the two app URLs), `src/content/*.ts` (the decks as typed data), the components and the three pages. Logo files copied from the three kits into `public/brand/`. Typecheck, lint and production build pass; all three routes prerender static. Home headline is option A until Rob picks. The screen gallery renders captioned frames until new screens are shot; the old screenshots were not used.
- **2026-10-02** — Rob supplied four Cotyledon screens (`content/cotyledon-*.png`, ~1 MB each at ~3100 px); resized to 1600 px WebP (70–100 KB) in `public/screens/` and wired into the home gallery. Home pull quote set to "TBD" at Rob's request; he is writing his own.
- **2026-10-02** — Per Rob: cut "Healthy people gather, and that is where community comes from" from the Mission note. Platform modules section: group headings and card titles in copper (`--color-copper-light` #D28B4C on the dark bands, 4.8:1; the kit's #B8733A stays for cream), app tags white on dark. The same card-title and tag treatment applies to the home module grid, which shares `ModuleTile`.
- **2026-10-02** — Per Rob: every section title and card title on every page is copper (`--color-copper` on cream, `--color-copper-light` on the dark bands). Removed the logo files no page uses. Folder initialised as a git repository, first commit; there is no remote yet.
- **2026-10-03** — Live. Pushed to `wolvestofeed/emberos`, imported into Vercel as `emberos` with no environment variables (the defaults in `src/config/apps.ts` are the production values). DNS at Squarespace: A `@` → 216.198.79.1, CNAME `www` → the project's vercel-dns target, CNAME `cotyledon` → cname.vercel-dns.com. The apex is primary; `www` redirects to it. Verified: https://foodismymuse.com 200, www and http 308 to the apex.
- **2026-10-03** — Cotyledon entry now deep-links to `/farm/dashboard`. The gate carries the path through `/enter`, so the password lands on the dashboard instead of Cotyledon's welcome page and its Login button.
- **2026-10-16** — Per Rob: home mission teaser quote set to the Mission note's audience line ("This is for the farmers, cooks, bakers, caterers and community kitchens…"), replacing "TBD". Hero supporting line replaced with Rob's positioning line, "The food business operating system that runs costing, people and sustainability side by side." His draft opened with "The only"; dropped as an unsourceable claim under rule 4 (every claim true of the software today). Deck mirrored in `content/home.md`.
- **2026-10-16** — Per Rob: rewrote the fourth paragraph of the Mission note. The notebook/spreadsheet/shoebox examples were cut as inaccurate; the paragraph now speaks in general terms (disconnected software, everything managed to the bottom line, people and culture and client health squeezed out) and frames the planet's health as the thing no one has had a practical way to account for until now. Deck and `src/content/mission.ts` updated together.
- **2026-10-16** — Per Rob: removed the footnote under the home ecosystem strip, "Room for the next application at either end of the chain." It was hardcoded in `EcosystemStrip.tsx` and had no line in the deck.
- **2026-10-16** — Per Rob: the home modules sub-line ("Most food software covers one piece…") was inaccurate and is replaced with "Now you can manage every slice of your business from one system, including sustainability measured from your own recipes and your own facility, not bolted on afterwards." Rob's draft said "the first recipe- and facility-driven sustainability platform"; "first" dropped under rule 4, as with "the only" in the hero. Deck mirrored.
- **2026-10-17**: Per Rob: Muse Kitchen left CompTable for its own repo (`wolvestofeed/emberos-musekitchen`) and runs at musekitchen.foodismymuse.com/kitchen. `NEXT_PUBLIC_MUSE_URL` was set on the Vercel project the same evening so every Muse Kitchen button moved at once; the default in `src/config/apps.ts` now matches, and `Docs/CLAUDE.md` and `PLAN.md` say where it lives.
- **2026-10-17**: Per Rob: `images/` added at the repo root as the design library (Ember OS, Muse Kitchen and Cotyledon lockups in stacked and horizontal forms, icons, endorsement badges, screens) with a README that names each file and how to reference it; `research/` added for working material, holding the Austin planting calendar.
- **2026-10-17**: Per Rob: new tagline, "A sustainable food business operating system that feeds people, farmers, our soil and the planet." It is the home headline and now also the footer line and the site-wide meta description. Rob also rewrote the hero support line, the ecosystem heading ("One platform, from seed to supper"), the hospitality value and the modules heading ("A complete production engine with ERP and CRM built in."). Deck mirrored for the hero.
- **2026-10-17**: Per Rob: the Mission note's audience paragraph now opens with the home teaser's wording ("the chefs, farmers, cooks, bakers, caterers and community kitchens who believe food can heal people and the places we call home"), keeping the duct tape sentence and the soil and people ending. Both decks mirrored.
- **2026-10-17**: Per Rob: "duct tape" is out of the Mission note. His audience already pays thousands for Toast and other POS systems; the problem is incomplete or inadequate software, not paper and improvisation. The audience paragraph now says "tired of running that belief on inadequate software." Deck mirrored.
- **2026-10-17**: Per Rob: Platform page headline is now "Everything you could possibly want in one system"; the intro drops "one operating model" and the "same engine underneath" clause; rule 1 now describes batches generated by incoming orders, activities combined per cycle and resources mapped across the business; rule 2 is titled "The production plan builds the costing." Deck mirrored.
- **2026-10-17**: Per Rob: forecasts, Compare and the recipe assistant were missing from the site. Home gains section 6b, "Plan it before you run it", three cards below the modules grid on the value tile. Platform's Production group: the middle card is now "Production planning, schedule, calendar" (compare removed from the name; line rewritten around the run, the day on the clock, the labor it demands and the calendar), plus three new cards: Forecasts, Compare, and Recipe assistant (Muse Kitchen only). Claims checked against the apps: forecasts are uncapped in both; Compare is by day in both and by recipe in Muse Kitchen only; the typed or dictated recipe change is the only AI feature in either app. "Scenario" never appears, per the apps' own rule. Both decks mirrored.
- **2026-10-17**: Per Rob: the next major project is payments, on Muse Kitchen and on this site. Logged as Phase 5 above and in `Docs/TODO.md`; nothing designed or built.
