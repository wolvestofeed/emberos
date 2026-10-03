# foodismymuse.com — Front-End Plan

The public front door of **Ember OS**. The domain is only the address; the brand on every page is Ember OS, with Muse Kitchen and Cotyledon as its applications, each "powered by Ember OS".

Scope of this folder: the front-end UI surface only — page copy, design tokens, and static page code that a Claude Code agent assembles into a site. No back end, no auth, no forms that post anywhere.

Status: **plan agreed 2026-10-02.** Copy deck drafted in `content/` for Rob's edit.

---

## 1. Site map

| Route | Page | Purpose |
|---|---|---|
| `/` | Home | Welcome to Ember OS; entry cards to both apps directly under the hero; values; engines and modules; transparency spotlight; mission teaser |
| `/platform` | Platform | The full module map: every engine and module across both apps, grouped, with what each does |
| `/mission` | Mission | The food ecosystem Ember OS is built for: seed, soil, growing, preparing, hospitality, community. Regenerative, sustainable, nutritious |

**Portal entries are the two cards on the home page, not pages.** Each card signs directly into its app; there is no intermediate page.

Subdomains (served by the apps themselves, not this site):
- `muse.foodismymuse.com` → Muse Kitchen. **Today it lives at getcomptable.com/muse**; the subdomain needs the lift-out described in `Muse Kitchen/README.md`. Until then the Muse buttons point at getcomptable.com/muse. The URL is one constant in the code.
- `cotyledon.foodismymuse.com` → Cotyledon. Goes live after this project phase; the card links to its subdomain.

## 2. Home page, top to bottom

1. **Header.** Ember OS mark + wordmark (left). Nav: Platform, Mission, and a "Sign in" menu with Muse Kitchen and Cotyledon (the same direct links as the cards). Sticky, dark.
2. **Hero.** One headline and one supporting line: Ember OS is the operating system for nutritious, regenerative food businesses — seed to soil to table. The Ember illustration carries the hero on the dark forest ground it was painted on.
3. **Portal entry cards — directly under the hero, above the fold on desktop.** Two cards side by side (stacked on phones). Each card is the sign-in: its button goes straight to the app's sign-in screen.
   - Muse Kitchen tile and lockup, "Scratch commissary kitchens", one line on what it runs, button: *Sign in to Muse Kitchen*
   - Cotyledon tile and lockup, "Microgreens and sprouts growers", one line on what it runs, button: *Sign in to Cotyledon*
   Each card wears its own app's palette (Muse emerald/copper; Cotyledon forest/mint) on the shared Ember ground, so the family reads at a glance.
4. **The food ecosystem strip.** Seed → Soil → Grow → Prepare → Serve & gather, with each stage labelled by the app that runs it (Cotyledon: seed, soil, grow; Muse Kitchen: prepare, serve). Room for future apps at either end.
5. **What we stand for.** Four values, each one sentence plus one line of proof from the product:
   - *Complete transparency* — every figure carries its source (SOURCED, STATED, DERIVED, PLACEHOLDER…), and a placeholder never looks like a quoted number.
   - *Regenerative and sustainable* — emissions, energy, water, waste and supplier footprint measured in the same system that runs production.
   - *Nutrition first* — e.g. Cotyledon scores a subscriber's flats against nutrition targets, every benefit citing its research source.
   - *Hospitality and community* — food as gathering; the client, customer and family portals that bring the people being fed into the system.
6. **Engines and modules.** A grid of the platform's major features (detail in §3), 8–10 tiles, each a name and one line. Links to `/platform`.
7. **Transparency spotlight.** A visual sample of a cost figure with its provenance chip and source line — the single feature no competitor shows. Built as a static mock, not a screenshot.
8. **Product glimpses.** Real screens (the existing Muse screenshots, re-shot under the Muse Kitchen name if the current ones still say Impact OS).
9. **Mission teaser.** Two or three lines from the mission and a link to `/mission`.
10. **Footer.** Ember OS mark, the two apps, Platform, Mission, contact, © line. "foodismymuse.com" appears nowhere as a brand.

## 3. Platform content (home grid + `/platform`)

Drawn from Cotyledon's outline of record (§5–6) and Muse Kitchen's module set. Muse's own module list needs confirming (§7, question 3).

| Engine / module | What it covers | Muse Kitchen | Cotyledon |
|---|---|---|---|
| Production engine | Plans, scheduling, capacity, time studies, calendar, plan of record v. actual | ✓ recipes, batches | ✓ grow plans, sowings, grow calendar |
| CPA-grade accounting | Double-entry ledger, US GAAP ASC 330 perpetual inventory at actual cost, P&L, balance sheet, cash flow, receivables, payables, capital and financing | ✓ | ✓ |
| Unit economics | Cost per unit from tagged inputs; cost to serve | ✓ | ✓ |
| Sustainability | Facility, energy, refrigerants, equipment and rebates, Scope 3 inputs, supplier LCA, logistics, waste, water | ✓ | ✓ |
| Supply chain | Procurement, suppliers, purchase orders at published price | ✓ | ✓ |
| Inventory and safety | FIFO lots, traceability; food safety (Muse) / Produce Safety Rule and sprouts Subpart M (Cotyledon) | ✓ | ✓ |
| People | Staffing, schedule, SOPs and training | ✓ | ✓ |
| Sales and clients | Sales portal, prospects, customers/subscribers, orders | ✓ | ✓ |
| Client portals | Customer portal and order builder; parent portal (Muse); client portal and Flat Builder (Cotyledon) | ✓ | ✓ |
| Billing and payments | Stripe subscriptions and invoicing, each distribution billed on hand-over | ✓ | ✓ |
| Nutrition | Nutrition targets scored against variety profiles, every benefit sourced | — | ✓ |
| R&D | Blends and experiments, expensed under ASC 730 | — | ✓ |
| Multi-tenant workspaces | Each business is its own workspace, isolated in the database | ✓ | ✓ |

## 4. Visual direction

- **Ground:** the forest-charcoal of the Ember illustration (≈ #1B2621 → #0E3326), cream (#F4EEE3) for light sections, alternating dark/light bands down the page.
- **Accents:** Ember flame amber (#FFA928 / #F2601E) used sparingly for the primary action; each app's own palette inside its card and portal page.
- **Type:** Montserrat (the Ember wordmark's face) for nav, labels and UI; a warm serif for display headlines (candidates: Cormorant Garamond, already Muse's face, or Fraunces). Poppins for small tracked labels, matching the "POWERED BY" line.
- **Imagery:** the three logo kits, the Ember painted illustration as the hero, real product screens. No stock photography unless Rob supplies his own (Vallecito racks, the grow room).
- **Accessibility:** WCAG AA contrast on every text/background pair; works at 360 px wide; no horizontal scroll.

## 5. What lands in this folder

```
foodismymuse/
├── PLAN.md                     this plan
├── Docs/
│   ├── CLAUDE.md               rules for agents working on the site
│   ├── TODO.md                 one-off items
│   └── ROADMAP.md              build phases, open/complete
├── content/                    final copy, one file per page (home.md, platform.md, mission.md)
│                               — what the agent pastes in
├── design/
│   ├── tokens.css              colors, type, spacing, radii as CSS variables (Tailwind 4 @theme)
│   └── preview/                a static HTML preview of each page for Rob's review
├── src/                        Next.js App Router + React + TypeScript + Tailwind 4, the house stack:
│   ├── app/                    page.tsx for /, /platform, /mission; layout.tsx (header/footer)
│   └── components/             Header, Footer, PortalCard, ValueTile, ModuleTile, EcosystemStrip,
│                               ProvenanceSpotlight, ScreenGallery, CTA
└── public/brand/               logo files copied from the three kits (Ember, Muse Kitchen, Cotyledon)
```

The Claude Code agent wires routes, deploys, and connects the subdomains; this folder hands it finished copy, tokens and static components.

## 6. Build order (after agreement)

1. Copy deck for all three pages (`content/*.md`) → Rob edits.
2. Design tokens + home page static preview → Rob reviews the look.
3. Platform and Mission previews.
4. Port the approved previews to Next.js/Tailwind components in `src/`.
5. Hand-off notes for the Claude Code agent in `Docs/CLAUDE.md`.

## 7. Decisions (2026-10-02)

1. Interior pages: **Platform and Mission.**
2. Mission page: **a first-person note from Rob** — passionate, grounded, clear arc and logic, vivid and textural, mildly poetic. Voice modeled on his book *On the Edge of Greatness*.
3. Muse Kitchen module list: read from `Comptable/docs/muse/overview.md`. Muse's confidentiality rules apply here too: no source company, incubator, standards partner or the ERRA mark on this site.
4. No walkthrough or demo call-to-action.
5. Cotyledon's app rules (text-only, no icons, no persuasive copy, replace-not-log) **do not apply** to this marketing site. Changes are logged in the roadmap's Update Log.
6. Cotyledon goes live after this phase; its card links to `cotyledon.foodismymuse.com`.
