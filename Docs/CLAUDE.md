# CLAUDE.md — foodismymuse.com (Ember OS front door)

Rules and oversight for any agent working in this folder.

## What this is
The public marketing site and app gateway for **Ember OS**, at foodismymuse.com. Ember OS is Rob Bogatin's operating system for nutritious, regenerative food businesses. Its applications, each "powered by Ember OS":
- **Muse Kitchen** — scratch commissary kitchens. Live at getcomptable.com/muse; planned subdomain muse.foodismymuse.com.
- **Cotyledon** — microgreens and sprouts growers. On localhost; planned subdomain cotyledon.foodismymuse.com.

## Portal entries
The two portal cards on the home page sign directly into Muse Kitchen and Cotyledon. There are no separate app entry pages on this site.

## Scope
Front-end UI surface only: copy, design tokens, static pages and components. No back end, auth, database or form handling here. The apps own their own sign-in.

## Decisions in force
- Three pages: Home, Platform, Mission. The two portal cards on Home sign directly into the apps.
- The Mission page is Rob's first-person note. Every biographical fact on it is confirmed by Rob before publishing.
- Cotyledon's app rules (no icons, no persuasive copy, replace-not-log) do not govern this site. Log every change in `Docs/ROADMAP.md` → Update Log.
- No walkthrough or demo call-to-action.

## Rules
1. **The domain is not a brand.** "Food is my muse" may appear as a mission line if Rob chooses; foodismymuse.com never appears as a logo, name or title.
2. **Brand assets come from the kits only:** the Ember OS web library, the Muse Kitchen + Ember logo files, the Cotyledon logo files. Never redraw or alter a logo.
3. **Confidentiality (from Muse's rules):** never name Muse's source company, incubator, standards partner or the ERRA mark.
4. **Every product claim must be true of the software today.** Source claims from `Cotyledon/docs/outline.md` and the Muse docs. No invented customers, testimonials, metrics, certifications or partner names.
5. **App URLs are constants** in one config file, so the Muse link can move from getcomptable.com/muse to its subdomain in one edit.
6. **Talk first, build second.** When Rob raises a question, discuss and agree before building.
7. **Stack:** Next.js App Router + React + TypeScript + Tailwind 4, matching the other WTF Publishing apps.
8. **Accessibility:** WCAG AA contrast, 360 px minimum width, keyboard navigable, alt text on every logo and screen.
9. **Git:** never commit or push without Rob's explicit per-action approval. The repo has no remote yet; a push needs Rob to create one and say so.

## Brand reference
- Ember OS ground: forest-charcoal #1B2621 / #0E3326; cream #F4EEE3; flame amber #FFA928, #F2601E. Wordmark: Montserrat Bold + Light.
- Muse Kitchen: emerald #0E6B4E, copper #B8733A, mint #9FD8BE, deep #0B2A22. Cormorant Garamond + Poppins.
- Cotyledon: deep forest #0E3326, cream #F4EEE3, mint #9ED5B5, copper #B8733A.
- Endorsement line on every app mark: "POWERED BY EMBER OS".

## Build and deploy (hand-off)
- Install and run: `pnpm install`, `pnpm dev` (port 3001). Checks: `pnpm typecheck`, `pnpm lint`, `pnpm build`. The build is fully static (no server code, no env needed to build).
- App URLs: `src/config/apps.ts`. Muse Kitchen defaults to getcomptable.com/muse; set `NEXT_PUBLIC_MUSE_URL` (or edit the default) when muse.foodismymuse.com is live. Cotyledon defaults to cotyledon.foodismymuse.com. `NEXT_PUBLIC_SITE_URL` sets canonical and Open Graph URLs (see `.env.example`).
- Copy: `src/content/{home,platform,mission}.ts` mirror `content/*.md`. Edit the deck, then the data file. The Mission note's biographical facts are the ones marked [✓ verify] in the deck.
- Screens: `src/content/home.ts` → `screens`. An entry without `src` renders as a captioned frame. Add real screens under `public/screens/` with width and height.
- Fonts load through `next/font/google` and are self-hosted at build; no third-party requests at runtime. The CSP in `next.config.ts` allows nothing external.
- Deploy: one Vercel project for this folder (its own repo, the house layout). Apex and `www` point here; `muse.` and `cotyledon.` are the apps' own projects. Nothing here needs a database, Clerk, Stripe or Neon.

## Where things live
- `PLAN.md` — the agreed plan (site map, page sections, platform content, visual direction).
- `content/` — final copy per page (Markdown decks). `src/content/` — the same copy as typed data the pages render. `design/tokens.css` — the Tailwind 4 theme. `src/components/` and `src/app/` — components and pages. `src/config/apps.ts` — the app URLs. `public/brand/` — logo files from the kits.
- `Docs/TODO.md` — one-off items. `Docs/ROADMAP.md` — build phases with an Update Log at the bottom.
