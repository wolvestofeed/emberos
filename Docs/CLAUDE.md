# CLAUDE.md — foodismymuse.com

Rules and oversight for any agent working in this folder.

## What this is
The marketing site for **Food Is My Muse Consulting**, Rob Bogatin's food business consulting practice, at foodismymuse.com. The practice's audience is new food business founders: chefs and restaurateurs, CPG founders, caterers, ghost kitchens and bakers, buying help with business setup, costing and accounting, operations and SOPs, and production and scale.

**Ember OS** is the software that comes with the work. It lives on the site's **Tool Kit** page, which carries the former home content: Ember OS, its applications and the two portal cards that sign directly into them.
- **Muse Kitchen** — scratch commissary kitchens. Live at musekitchen.foodismymuse.com/kitchen (its own repo, `wolvestofeed/emberos-musekitchen`, since 17 October 2026).
- **Cotyledon** — microgreens and sprouts growers. On localhost; planned subdomain cotyledon.foodismymuse.com.

Build spec for the consulting look: `design/default-style-sheet.md`. Build order: `Docs/roadmaps/consulting-roadmap.md`.

## Scope
Front-end UI surface only: copy, design tokens, static pages and components. No back end, auth, database or form handling here. The apps own their own sign-in.

## Decisions in force
- Two looks, one site. Consulting pages (Home, Services, Work, About) use the default style sheet on paper. Tool Kit pages (`/tool-kit`, `/platform`, `/mission`) keep the dark Ember OS look unchanged. Route groups `(site)` and `(toolkit)` carry each look; URLs do not change.
- The wordmark is "Food Is My Muse Consulting", set in type. It is the only wordmark in the main header. Rob Bogatin is introduced in the hero line and has his own section above the service cards.
- The two portal cards on the Tool Kit page sign directly into the apps. There are no separate app entry pages on this site.
- The Mission page is Rob's first-person note. Every biographical fact on it, and on About and Work, is confirmed by Rob before publishing.
- "Book a call" is a link (email until Rob supplies a booking link). No form on this site; a form would need a third-party service and a CSP change.
- Cotyledon's app rules (no icons, no persuasive copy, replace-not-log) do not govern this site. Log every change in `Docs/ROADMAP.md` → Update Log.
- No walkthrough or demo call-to-action.

## Rules
1. **Brand assets come from the kits only:** the Ember OS web library, the Muse Kitchen + Ember logo files, the Cotyledon logo files. Never redraw or alter a logo.
2. **Confidentiality (from Muse's rules):** never name Muse's source company, incubator, standards partner or the ERRA mark.
3. **Every claim must be true today.** Product claims come from `Cotyledon/docs/outline.md` and the Muse docs. Consulting claims, history and prices come from Rob. No invented customers, testimonials, metrics, certifications or partner names.
4. **App URLs are constants** in one config file, so an app link moves in one edit.
5. **Talk first, build second.** When Rob raises a question, discuss and agree before building.
6. **Stack:** Next.js App Router + React + TypeScript + Tailwind 4, matching the other WTF Publishing apps.
7. **Accessibility:** WCAG AA contrast, 360 px minimum width, keyboard navigable, alt text on every logo and screen.
8. **Git:** never commit or push without Rob's explicit per-action approval. The remote `wolvestofeed/emberos` is **public**; nothing personal (certificates, receipts, anything with an address or phone) is ever committed. `.gitignore` keeps them out.

## Brand reference
- Ember OS ground: forest-charcoal #1B2621 / #0E3326; cream #F4EEE3; flame amber #FFA928, #F2601E. Wordmark: Montserrat Bold + Light.
- Muse Kitchen: emerald #0E6B4E, copper #B8733A, mint #9FD8BE, deep #0B2A22. Cormorant Garamond + Poppins.
- Cotyledon: deep forest #0E3326, cream #F4EEE3, mint #9ED5B5, copper #B8733A.
- Endorsement line on every app mark: "POWERED BY EMBER OS".

## Build and deploy (hand-off)
- Install and run: `pnpm install`, `pnpm dev` (port 3001). Checks: `pnpm typecheck`, `pnpm lint`, `pnpm build`. The build is fully static (no server code, no env needed to build).
- App URLs: `src/config/apps.ts`. Muse Kitchen defaults to musekitchen.foodismymuse.com/kitchen; `NEXT_PUBLIC_MUSE_URL` overrides it. Cotyledon defaults to cotyledon.foodismymuse.com/farm/dashboard, so the gate drops a visitor on the dashboard. `NEXT_PUBLIC_SITE_URL` sets canonical and Open Graph URLs (see `.env.example`).
- Copy: `src/content/*.ts` mirror `content/*.md`: `consulting-home`, `services`, `work`, `about` for the consulting pages; `home` (the Tool Kit page), `platform`, `mission` for the Ember OS pages. Edit the deck, then the data file. Bracketed text on a consulting page is a slot Rob has not filled yet and renders as-is. The Mission note's biographical facts are the ones marked [✓ verify] in the deck.
- The practice: `src/config/site.ts` holds the name, owner, nav and where Book a call goes (`NEXT_PUBLIC_BOOKING_URL`, else `mailto:` the `NEXT_PUBLIC_CONTACT_EMAIL`, else the contact block on `/about`; see `.env.example`).
- Screens: `src/content/home.ts` → `screens`. An entry without `src` renders as a captioned frame. Add real screens under `public/images/ember-os/` with width and height.
- Fonts load through `next/font/google` and are self-hosted at build; no third-party requests at runtime. The CSP in `next.config.ts` allows nothing external.
- Deploy: one Vercel project for this folder (its own repo, the house layout). Apex and `www` point here; `muse.` and `cotyledon.` are the apps' own projects. Nothing here needs a database, Clerk, Stripe or Neon.

## Where things live
- `PLAN.md` — the plan of the Ember OS site (2026-10-02), now the Tool Kit page's content. The consulting pages are planned in `Docs/roadmaps/consulting-roadmap.md`.
- `content/` — final copy per page (Markdown decks). `src/content/` — the same copy as typed data the pages render. `design/tokens.css` — the Tailwind 4 theme. `design/default-style-sheet.md` — the build spec for the consulting pages (the site's default look); `design/mockups/` — static reference mock-ups, never served. `src/app/(site)/` — the consulting pages and their layout; `src/app/(toolkit)/` — the Ember OS pages (`tool-kit`, `platform`, `mission`) and theirs. `src/components/consulting/` — the consulting components; `src/components/` — the Ember OS ones. `src/config/apps.ts` — the app URLs; `src/config/site.ts` — the practice. `public/brand/` — logo files from the kits.
- `Docs/TODO.md` — one-off items. `Docs/ROADMAP.md` — build phases with an Update Log at the bottom. `Docs/roadmaps/` — sub-roadmaps (`consulting-roadmap.md`).
- `public/` — everything a visitor can open; the path is the URL. `brand/` the logos pages use, `images/<page>/` web-sized page images (`home/`, `consulting/`, `ember-os/` for the app screens), `files/` PDFs and downloads. `library/` — working material, never served: `logos/` the three kits, `screenshots/` the full-size originals, `research/` source documents a page cites before its claim lands in `content/`. `library/README.md` says where each kind of file goes.
