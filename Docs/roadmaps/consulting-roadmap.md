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
- Offers, in order (superseded the four department services on 2026-10-19, see Updates 1 and 2): Business Diagnostic; Stabilize; Business Launch; Scale. Setup, costing and accounting, operations and SOPs, and production are the areas each offer covers.
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

## Update 1 — Offer structure for first-year operators (2026-10-19)

### Direction (agreed with Rob)
- **Primary client:** an owner whose food business is already formed and open, in its first one to two years, and struggling: busy but not making money, real food and labor cost unknown, stuck working in the business every day, staff turnover, prices that are a guess. Restaurants, commissary-kitchen businesses, caterers, bakers, ghost kitchens and CPG founders. Usually strong on the food or the product, missing the business systems.
- **Secondary client:** pre-opening founders. Kept open, but not what the home page leads with.
- **Texas formation and compliance is referred out.** Entity formation, sales tax and state permits, local health permits and liquor licensing go to a Texas attorney or CPA. Building the business itself (systems, chart of accounts, costing, budget, staffing, SOPs) is Rob's.
- **What sets Rob apart is integration:** every department's systems built with the accounting wired in, so the owner knows what everything costs and how long it takes. That is the headline idea, not the list of areas.
- **Model:** stages decide what the work is; cadence decides the price. The four former services (setup, costing and accounting, operations and SOPs, production and scale) become the areas covered inside every offer, not separately priced products.

### The offers

| # | Offer | Role | Form | Price slot |
|---|---|---|---|---|
| 01 | Business Diagnostic | Entry offer, the headline | Fixed fee, short fixed scope, written report with real costs and ranked fixes. Fee can be credited toward a retainer (Rob to decide). | [Fixed fee $___] |
| 02 | Stabilize | Core business, first-year operators | Monthly retainer at two cadences: monthly advisory or weekly embedded (the benchmark is Ronin Group's monthly and weekly retainer tiers). Three-month minimum, billed monthly in advance. | [From $___ a month] |
| 03 | Build | Secondary: pre-opening | Fixed-fee project. Formation and licensing through a Texas attorney or CPA. | [Project fee $___] |
| 04 | Scale | Secondary: growth | Project or retainer: production, wholesale and CPG pricing, co-packing, second unit or commissary. Growth strategy sits here, built on the numbers. | [Project or retainer, from $___] |

### Page outline
**Home (`/`)**, top to bottom:
1. Hero, speaking to the struggling owner (headline updated; Rob's intro line still his slot).
2. **New: "Sound familiar?"** A short band of four to six symptoms the owner recognizes. Needs a new component. The copy is Rob's.
3. **New: the Diagnostic** as its own feature block: what it is, what you get, the fee slot and Book a call. Needs a new component.
4. **New: "How it works"**: Diagnostic, then Stabilize, with the Build and Scale paths noted. Three or four steps. Needs a new component.
5. Work with Rob Bogatin: his description, and the four offer cards (existing component, cards updated).
6. Operating history (unchanged).
7. Tool Kit teaser. Decide whether Ember OS is included in a retainer or sold separately before saying so on the page.
8. Closing CTA.

The "For owners of" audience strip stays between the hero and the next section. It can merge into the symptoms band if that reads better.

**Services (`/services`)**: the head, one section per offer (updated), then **new: "What every engagement covers"**, a band naming the four areas (setup, costing and accounting, operations and SOPs, production) with one line each. Needs a new component.

### Done in this update (Cowork, 2026-10-19; text only, no components changed)
- [x] Home hero: eyebrow "Costing · Accounting · Operations · Production"; headline "Your food business is open. Now make it pay."; secondary button "See how it works". The headline is a working line; Rob may rewrite it.
- [x] Audience strip label: "Built for" → "For owners of".
- [x] Rob's section eyebrow: "Services" → "Work with", above the heading "Rob Bogatin".
- [x] The four cards are now the offers: 01 Business Diagnostic, 02 Stabilize, 03 Build, 04 Scale, each with a one-line description and its own price slot. Slugs changed to `#diagnostic`, `#stabilize`, `#build`, `#scale`.
- [x] `/services`: headline "Start with a diagnostic. Stay for the systems."; "What is included" filled for all four offers; the Diagnostic's outcome written; the other three outcomes left as Rob's slots. Metadata description updated.
- [x] Decks `content/consulting-home.md` and `content/services.md` mirror `src/content/consulting-home.ts` and `src/content/services.ts`. `tsc --noEmit` passes.

### Open: build (Claude Code)
- [x] U1.1 "Sound familiar?" symptoms band on Home (`Symptoms.tsx`, paper with ledger rules; the direction's symptoms as working lines).
- [x] U1.2 Diagnostic feature block on Home (`DiagnosticBlock.tsx`, cream band; "What you get" is the offer's included list in the ledger look).
- [x] U1.3 "How it works" steps on Home (`HowItWorks.tsx`: a call, the Diagnostic, Stabilize, Build or Scale; working copy).
- [x] U1.4 "What every engagement covers" band on `/services` (`Coverage.tsx`, cream band, four tiles).
- [x] U1.5 Home reordered to the outline above; the owners strip stays between the hero and the symptoms.
- [x] U1.6 Style sheet §6.11–6.14 added, 6.5 renamed to offer cards, §5 band order updated.

### Rob's decisions from Update 1
Carried into Update 2 below; the software question is answered there (included while a retainer is active).

## Update 2 — Whole systems, software and terms (brief from Cowork, 2026-10-19)

### Direction
- The headline idea is whole-systems consulting: every department's systems built with the accounting wired in, so the owner knows what everything costs and how long it takes. Food cost and production, labor and staffing, cash flow and forecasts, and sustainability are connected lines on one ledger. "Whole systems" is the term (vocabulary rule in `Docs/CLAUDE.md`).
- Software and subscribers: retainers (Stabilize, Business Launch, Scale) run three months minimum; month one onboards the business onto Muse Kitchen and CompTable; both subscriptions are included while the retainer is active; the engagement ends with the owner running the business on their own system. The Diagnostic and single projects are consulting only. Outside an engagement, subscriptions are at regular rates; after one, a monthly check-in retainer carries an active-client discount. Data export on leaving is fine print in the terms. Cotyledon does not appear on the consulting pages; CompTable copy never advises.

### Done (Cowork, text): Build renamed Business Launch (`#launch`); the Tool Kit teaser body for Muse Kitchen and CompTable; `/services` metadata; decks mirrored.

### Done (Claude Code, 2026-10-19)
- [x] U2.1 Symptoms and their heading are Rob's slots (the agreed direction stays as prompts inside the brackets).
- [x] U2.2 `WholeSystems.tsx`: a dark band between the symptoms and the Diagnostic; Rob's explanation as a slot, the four connected lines as a ledger.
- [x] U2.3 "How it works" rewritten: a call, the Diagnostic (about two weeks, fixed fee), a retainer with the software included and onboarding in month one, independence with the check-in option.
- [x] U2.4 `ToolKitTeaser.tsx` rebuilt: the approved line, the terms line, two app tiles with list price slots; the Ember badge on Muse Kitchen only; CompTable links to getcomptable.com.
- [x] U2.5 `Terms.tsx` on `/services` after the coverage band: minimum, software included with both list price slots, month one, the end, after (check-in retainer and discount slots), outside an engagement; single projects as a note. Quality control added to the operations line.
- [x] U2.6 Style sheet §6.7 rewritten, §6.15–6.16 added, §5 band order; `Docs/CLAUDE.md` decisions in force extended.

### Not done, waiting on Rob
- [x] Per Rob: the plate-costing card is replaced by `TracedOrderCard.tsx` (one catering order through purchasing, production, operations, sales and admin, accounting; true cost, true margin and total hours computed at the bottom; "Illustrative example"). `CostingCard.tsx` stays for service pages.
- [ ] The About page's Cotyledon paragraph: drop it from About, or an About-only version. His first-person writing; not rewritten. `/mission` stays as it is.

### Open: Rob's decisions
- [ ] Diagnostic length and fee, and whether the fee is credited toward a retainer.
- [ ] Retainer prices for the monthly and weekly cadences; the check-in retainer price; the active-client discount amount.
- [ ] Muse Kitchen and CompTable list prices.
- [ ] Single-project pricing, or "by quote".
- [ ] The About page's Cotyledon paragraph.
- [ ] One or two Texas referral partners (attorney or CPA) for formation and licensing.
- [ ] Copy: the hero intro line, the symptoms and their heading, the whole-systems explanation, the description of Rob, the three remaining outcomes, the closing line. The hero and `/services` headlines are working lines until he rewrites them.

---

## Update Log
- **2026-10-19**: Sub-roadmap created. Agreed with Rob: the practice is branded Food Is My Muse Consulting, with Rob Bogatin as the main asset. Its audience is new food business founders (chefs, CPG founders, caterers, ghost kitchens, bakers) buying setup, costing and accounting, operations and production help. Two directions were mocked up on the Design canvas; Rob chose the paper-and-ledger one and approved its colors, fonts and type hierarchy. Per Rob, the wordmark moves to the header as the only wordmark, and Rob's name goes into the hero description and the Services section heading in place of "Four ways in". The style is documented as the site's default style sheet (`design/default-style-sheet.md`) with a static HTML mock-up (`design/mockups/consulting-home.html`). Nothing in `src/` has changed.
- **2026-10-19**: Per Rob: `Docs/CLAUDE.md` rewritten for the consulting site. The open decisions were taken by default (listed under Decided) so the build can start; what still waits on Rob is listed and does not block it.
- **2026-10-19**: Per Rob: C1 to C3 built on the defaults. `design/tokens.css` gains copper-ink, tomato, tomato-deep and `--font-serif`; `globals.css` makes paper and ink the body default with a tomato focus ring, `.toolkit` restores the Ember ground and `.on-dark` a copper-light ring on dark bands; `figures` and `container-wide` utilities. Newsreader loads through `next/font`. Route groups `src/app/(site)` (SiteHeader, SiteFooter) and `src/app/(toolkit)` (the old Header and Footer, Ember OS metadata); the former home is `(toolkit)/tool-kit/page.tsx`, Platform and Mission moved into the group with their URLs unchanged; the Tool Kit header and footer link back to the consulting site. Nine components in `src/components/consulting/` plus `PageIntro`. `src/config/site.ts` holds the practice name, nav and where Book a call goes (`NEXT_PUBLIC_BOOKING_URL`, else `mailto:` the `NEXT_PUBLIC_CONTACT_EMAIL`, else `/about#contact`). Pages `/`, `/services` (one section per service, anchored from the cards), `/work` (the five confirmed cases), `/about` (story slots, the history band, the contact block). Decks `content/consulting-home.md`, `services.md`, `work.md`, `about.md` with typed twins in `src/content/`. Every slot Rob owes renders as bracketed text. The 404 carries the consulting header. Checked on `pnpm dev` at desktop and 375 px.
- **2026-10-19**: Per Rob: the offer structure changes (Update 1). The primary client is the first-year operator who is already open and struggling; pre-opening stays as a secondary path, and Texas formation and compliance are referred to a local attorney or CPA. The four department services become four offers (Business Diagnostic, Stabilize, Build, Scale), with the departments as the areas each covers. Text updated in Cowork: hero eyebrow, headline and secondary button, the audience label, the eyebrow over Rob's section, the four cards, and the `/services` headline and "What is included" lists; decks mirrored, `tsc --noEmit` passes. New components (symptoms, Diagnostic block, How it works, What every engagement covers) are open for Claude Code. Not committed.
- **2026-10-19**: Per Rob: Update 1 built on the dev site (Claude Code). Four components in `src/components/consulting/`: `Symptoms`, `DiagnosticBlock`, `HowItWorks`, `Coverage`; their copy in `src/content/consulting-home.ts` and `src/content/services.ts`, decks mirrored, style sheet §6.11–6.14. Home reordered: hero, owners strip, symptoms, the Diagnostic, how it works, Rob and the offers, history, Tool Kit, closing. `/services` gains the coverage band before the closing. The home history band's tags follow the Work page: Co-owner for the pizzeria and the bar and grill, Social enterprise for Good Food Collective. The symptoms, the "how it works" steps and both section headings are working copy from the agreed direction until Rob rewrites them. The Tool Kit teaser is unchanged pending the retainer decision.
- **2026-10-19**: Per Rob, on Cowork's brief (Update 2): the practice is whole-systems consulting with the software included during retainers and independence as the goal. Cowork renamed Build to Business Launch and rewrote the Tool Kit teaser body; Claude Code turned the symptoms into Rob's slots, added the whole-systems band and the software-and-terms block, rewrote how it works and the Tool Kit teaser (two apps, the approved line, list price slots, the Ember badge on Muse Kitchen only), added quality control to the operations line, and extended the style sheet and `Docs/CLAUDE.md`. The costing card and the About page's Cotyledon paragraph wait on Rob. Not committed.
- **2026-10-19**: Per Rob: the hero's plate-costing card is replaced by the traced-order card, an illustrative catering order traced through five departments with true cost, true margin and total hours. Style sheet section 6.3a. Not committed.
