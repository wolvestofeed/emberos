# foodismymuse.com — Default Style Sheet

The visual system for every page of foodismymuse.com **except** the Ember OS Tool Kit pages, which keep the current dark Ember OS look (`design/tokens.css` as it stands today). This document is the build spec: a coding agent should be able to build the consulting pages from this file and the reference mock-up alone.

- **Reference mock-up:** `design/mockups/consulting-home.html` (static, open it in a browser; not served).
- **Design canvas:** Rob's Design artifact "Food Is My Muse Consulting", board "A" (the one this sheet documents). Board "C" was the rejected alternative.
- **Roadmap:** `Docs/roadmaps/consulting-roadmap.md`.
- **Agreed with Rob:** 2026-10-19. Colors, fonts and type hierarchy are approved. Copy on the mock-up is placeholder and Rob will rewrite it.

---

## 1. Persona

**The operator who has been on the line and in the books.** The audience is new food business founders: chefs and restaurateurs, CPG founders, caterers, ghost kitchens and bakers. They are buying help with business setup, costing and accounting, operations and SOPs, and production and scale.

The feel is warm, exact and practical, like a back-of-house clipboard and a clean ledger. It is the daytime side of the Ember OS family. It shares the forest ink, cream and copper, but sits on a light paper background instead of the dark Ember background.

**It is not:**
- a fintech or trading look: no glowing arrows, globes, gradient washes or stock data imagery;
- a farm-rustic look (that is Cotyledon's and Muse Kitchen's territory);
- a boutique-agency look.

**Numbers are the brand.** Figures are set with tabular numerals and ledger rules, and they are allowed to be the largest element in a block (see the costing card, section 6.3).

---

## 2. Brand architecture

| Element | Rule |
|---|---|
| Wordmark | **Food Is My Muse Consulting**, set in type (Newsreader 600). It is the only wordmark in the main header and the largest element in it. There is no drawn logo and no icon mark yet. |
| Rob Bogatin | The main asset, but not the wordmark. He is introduced in the hero description (his name in bold at the start of the line) and given his own section: his name as a section heading plus a description, placed above the service cards. |
| Ember OS and the apps | Live on the **Tool Kit** page. The current Ember OS home content becomes that page. On consulting pages, Ember OS appears only through the kit's own "Powered by Ember OS" badge file (`public/brand/…` or `library/logos/endorsement/`). Never redraw or retypeset it (CLAUDE.md rule 1). |
| Muse Kitchen separation | "Muse" appears in both names. Never use Muse Kitchen's look on consulting pages: no Cormorant in wide capitals, no emerald-and-soil tile. |

---

## 3. Color tokens

Add these to `design/tokens.css` (Tailwind 4 `@theme inline`). Several already exist under the same values and are marked "existing". The new tokens carry no `consult-` prefix, because this is the site's default palette.

| Token | Hex | Status | Use |
|---|---|---|---|
| `--color-paper` | `#FBF8F2` | existing | Page background |
| `--color-cream` | `#F4EEE3` | existing | Light bands (the "Built for" strip, the closing call-to-action band), placeholder fills |
| `--color-cream-deep` | `#E9E0CF` | existing | Inner ledger rules, card-footer rules |
| `--color-cream-line` | `#D6CAB5` | existing | Card borders, band borders, header bottom rule |
| `--color-white` | `#FFFFFF` | Tailwind default | Card surfaces on paper |
| `--color-ink` | `#1B2621` | existing | Body and heading text, the heavy ledger rule, outline button |
| `--color-ink-soft` | `#4F5E56` | existing | Secondary text: descriptions, ledes, small labels |
| `--color-ground` | `#1B2621` | existing | Dark bands: operating history, footer |
| `--color-ground-raised` | `#243129` | existing | Placeholder and inset fills on dark bands |
| `--color-ground-line` | `#3A4941` | existing | Row rules and dashed borders on dark bands |
| `--color-mist` | `#C8D1CB` | existing | Secondary text on dark bands |
| `--color-copper-ink` | `#8F4F22` | **new** | Copper for small text on light backgrounds: eyebrows, the tracked labels, service numerals, links |
| `--color-copper-light` | `#D28B4C` | existing | Copper eyebrows and row labels on dark bands |
| `--color-tomato` | `#B33A24` | **new** | The one accent: primary buttons, the headline figure in the costing card, focus ring |
| `--color-tomato-deep` | `#8F2C1B` | **new** | Primary button hover and active state |

**Do not** use the kit copper `#B8733A` (`--color-copper`) for text on paper below 24 px. It measures 3.6:1, which fails AA for normal text. Use `--color-copper-ink` instead. The kit copper may still appear as a non-text accent, or as large display text of 24 px and up.

The amber (`#FFA928`) and flame (`#F2601E`) stay reserved for Ember OS and app sign-in actions, and never appear on consulting pages.

### Contrast (WCAG 2.1, measured 2026-10-19)

| Pair | Ratio | Passes |
|---|---|---|
| ink on paper | 14.7:1 | AA / AAA |
| ink on cream | 13.5:1 | AA / AAA |
| ink-soft on paper | 6.5:1 | AA |
| ink-soft on white | 6.8:1 | AA |
| ink-soft on cream | 5.9:1 | AA |
| copper-ink on paper | 6.0:1 | AA |
| copper-ink on white | 6.3:1 | AA |
| copper-ink on cream | 5.5:1 | AA |
| white on tomato (button) | 5.9:1 | AA |
| tomato on white (costing figure) | 5.9:1 | AA |
| tomato on paper | 5.6:1 | AA |
| cream on ground | 13.5:1 | AA / AAA |
| copper-light on ground | 5.6:1 | AA |
| mist on ground | 10.0:1 | AA / AAA |
| mist on ground-raised | 8.7:1 | AA / AAA |
| kit copper `#B8733A` on paper | 3.6:1 | large text only (24 px and up) |

---

## 4. Typography

| Role | Family | Weights | Load |
|---|---|---|---|
| Display and headings, wordmark, large figures | **Newsreader** (variable, optical-size axis) | 400, 500, 600 | `next/font/google`: `Newsreader({ subsets: ['latin'], axes: ['opsz'], variable: '--font-newsreader', display: 'swap' })`. With `axes`, leave `weight` out (it is a variable font). |
| Body text, navigation, buttons | **Montserrat** | 400, 500, 600, 700 | Already loaded in `src/app/layout.tsx` (`--font-montserrat`) |
| Tracked labels (eyebrows, row labels) | **Poppins** | 500 | Already loaded (`--font-poppins`) |

Add to tokens: `--font-serif: var(--font-newsreader), Georgia, serif;`. Keep `--font-sans` and `--font-label` as they are. Cormorant (`--font-display`) stays in use on the Tool Kit pages only.

The CSP in `next.config.ts` allows nothing external. The mock-up's Google Fonts `<link>` is for the mock-up only; production self-hosts through `next/font`.

### Type scale

Sizes are the desktop values from the mock-up. On phones, use the `clamp()` column; the mock-up uses fixed px.

| Style | Family / weight | Size | Line height | Tracking | Notes |
|---|---|---|---|---|---|
| Wordmark (header) | Newsreader 600 | 32 px — `clamp(1.375rem, 3.2vw, 2rem)` | 1.1 | −0.01em | The largest element in the header. Ink. |
| Wordmark (footer) | Newsreader 600 | 22 px | 1.2 | — | Cream on ground, with "Rob Bogatin" under it at 13 px in mist |
| H1 hero | Newsreader 500 | 60 px — `clamp(2.5rem, 6vw, 3.75rem)` | 1.05 | −0.02em | Ink |
| H2 section | Newsreader 500 | 42 px — `clamp(2rem, 4.5vw, 2.625rem)` | 1.1 | −0.01em | |
| H2 secondary (Tool Kit teaser, closing band) | Newsreader 500 | 36 px — `clamp(1.75rem, 4vw, 2.25rem)` | 1.15 | — | |
| H3 card title | Newsreader 600 | 26 px | 1.15 | — | |
| Lede (hero description) | Montserrat 400 | 18 px | 1.6 | — | ink-soft, max-width 34em |
| Section description | Montserrat 400 | 17 px | 1.6 | — | ink-soft, max-width 40em |
| Body | Montserrat 400 | 16 px | 1.6 | — | |
| Card body | Montserrat 400 | 15 px | 1.6 | — | ink-soft |
| Nav link | Montserrat 500 | 14 px | — | — | ink, no underline |
| Button | Montserrat 600 | 15 px (14 px in the header) | — | — | |
| Eyebrow | Poppins 500, uppercase | 11 px | — | 0.32em | copper-ink on light, copper-light on dark |
| Row label / small tag | Poppins 500, uppercase | 10–11 px | — | 0.24em | |
| Audience names ("Built for" strip) | Newsreader 400 | 22 px | — | — | |
| History row text | Newsreader 400 | 22 px | — | — | cream on ground |
| Costing figure | Newsreader 500 | 40 px | 1 | — | tomato |
| Costing rows | Montserrat 400 | 15 px | — | — | `font-variant-numeric: tabular-nums` |

**Every figure** (prices, costs, percentages, service numerals 01–04) uses `font-variant-numeric: tabular-nums`. Add a utility for it: `@utility figures { font-variant-numeric: tabular-nums; }`.

---

## 5. Layout, shape and depth

- **Container:** max-width 1200 px (75rem), side padding 24 px. Phone gutter is 16 px, per CLAUDE.md rule 6 (360 px minimum width). The existing `container-site` utility is 72rem; add `container-wide` at 75rem rather than changing it.
- **Section rhythm:** 88 px vertical padding on major sections; 72 px on the closing band; 28 px on the "Built for" strip; 32 px in the footer.
- **Hero (per Rob, 2026-10-20):** two columns aligned to the top, text `flex: 1 1 440px` and the traced-order card `flex: 1 1 600px`, gap 56 px. They wrap to one column under about 1100 px. Top padding 88 px, bottom 72 px.
- **Grids:** service cards use `repeat(auto-fit, minmax(250px, 1fr))`, gap 20 px. That gives 4 across at 1200 px, 2 on a tablet and 1 on a phone.
- **Radius:** 14 px (`--radius-tile`, existing 0.875rem) on cards and placeholders; 999 px (`--radius-pill`) on buttons.
- **Borders:** 1 px `cream-line` on cards. Ledger rows: 1 px `cream-deep` between rows and 1 px ink above the total. The costing card header gets a 2 px ink rule.
- **Shadow:** only on the hero costing card: `--shadow-card-light` (existing) or `0 14px 30px -18px rgba(27,38,33,0.35)`. Service cards are flat.
- **Bands (home, brief §6):** paper (hero) → cream strip (owners) → paper (symptoms) → dark ground (whole systems) → cream (Diagnostic) → paper (how it works) → paper with a top rule (Rob and the offers) → dark ground (history) → paper (Tool Kit) → cream (closing) → dark footer. Never put two dark bands next to each other.

---

## 6. Components

The build order follows the page top to bottom. Names are suggestions for `src/components/consulting/`.

### 6.1 SiteHeader
- Paper background, 1 px `cream-line` bottom rule, padding 20 px 24 px.
- **Left:** the wordmark "Food Is My Muse Consulting" as a link to `/`. It is the only wordmark: no tagline under it and no logo image.
- **Right:** a `<nav aria-label="Main">` with Services, Work, Tool Kit and About (14 px Montserrat 500, gap 28 px), then the primary button "Book a call" (header size: padding 12 px 20 px, 14 px).
- **Wrapping:** the row wraps (`flex-wrap`). Below about 720 px, collapse the four links into a `<details>` menu, as the current Header does with its Sign in menu. Keep the Book a call button visible.
- **Separate from the Ember header:** this is a new component. The existing `Header.tsx`, with its Sign in menu, stays on the Tool Kit pages and gains a link back to the consulting site. SiteHeader has no Sign in menu; the apps are reached through Tool Kit.

### 6.2 Hero
- **Eyebrow:** "Setup · Costing · Operations · Production".
- **Headline:** H1 in ink; an optional second line (`headlineAccent`) on its own line in tomato `#B33A24`, the button's red.
- **Lede:** the paragraph opens with **Rob Bogatin** in ink, weight 600, followed by his intro line in ink-soft.
- **Buttons:** primary "Book a 30-minute call" and secondary "See the services" (outline), gap 12 px, wrapping.
- **Right column:** the costing card (6.3).

### 6.3a TracedOrderCard (the hero card, per Rob 2026-10-19)
The card sits in a `<figure>`; its `<figcaption>` is one line under the card, 14 px ink-soft, naming the whole-systems foundation the card shows.
One order or production batch traced through every department. Same surface, header, rules and result row as the CostingCard below, with three columns: the line (a copper-ink department tag over the item, 10 px tracked), its cost, its hours (ink-soft, a dash where none). The order line sits in bold under the title, above the 2 px rule. Under the rule, two ledgers side by side (`flex: 1 1 300px` and `1 1 200px`, gap 32 px; they stack under about 640 px): the costing table with a tracked column-header row on the left, the sustainability report on the right under its own 17 px Newsreader title. The footer: **True cost** with total hours in bold, **Price** in ink-soft, then **True margin** as the percentage in Newsreader 40 px tomato with the dollar figure beside it. Totals are computed from the rows. The **Order sustainability report**: one metric per row with its figure and unit right-aligned, 1 px `cream-deep` rules between and a 1 px ink rule under the last: carbon emissions, methane, water, energy consumption, waste to compost, waste to landfill. Labeled "Illustrative example" until Rob supplies real figures.

### 6.3 CostingCard ("ledger card")
The original hero card, replaced in the hero by 6.3a and kept for service pages. It shows a worked plate costing and must be labeled **"Illustrative example"** until Rob supplies real figures.
- **Surface:** white, 1 px `cream-line` border, radius 14 px, padding 28 px, light shadow.
- **Header row:** title "Plate costing" (Newsreader 600, 22 px) and the label "Illustrative example" (Poppins 10 px tracked, ink-soft), over a 2 px ink rule.
- **Item line:** 14 px ink-soft.
- **Rows:** label left, figure right, 9 px vertical padding, 1 px `cream-deep` between rows, 1 px ink under the last component row.
- **Totals:** "Plate cost" in bold, then "Menu price" in ink-soft.
- **Result row:** "Food cost" (600) with the percentage in Newsreader 40 px tomato, over a top rule.
- **Mock-up data** (illustrative, arithmetic checked): short rib 10 oz $4.85, polenta $0.62, greens and dressing $0.48, jus and garnish $0.39. Plate cost $6.34, menu price $28.00, food cost 22.6%.
- **Data:** build it from a typed array, so the component can be reused on service pages with other examples.
- **Markup:** use a `<table>` (with `<caption>`, `<th scope="row">` and right-aligned numeric cells) rather than divs, so screen readers read it as a table. The look stays the same.

### 6.4 AudienceStrip ("Built for")
- Cream band with 1 px `cream-line` rules above and below.
- The label "Built for" (eyebrow style, ink-soft), then the audience names in Newsreader 22 px, wrapping with a gap of 12 px 32 px.
- **Audiences:** Chefs and restaurateurs, CPG founders, Caterers, Ghost kitchens, Bakers.
- **Markup:** a `<ul>` with list styling removed.

### 6.5 Rob introduction and offer cards (the Services section)
- **Section head:** eyebrow "Services", then the H2 **Rob Bogatin**, then a description paragraph about Rob (17 px ink-soft, max-width 40em). Rob will rewrite this section's copy, and may relabel or drop the "Services" eyebrow.
- **ServiceCard × 4:** white, 1 px `cream-line`, radius 14 px, padding 28 px, column layout with a 14 px gap. Each card has:
  - a numeral `01`–`04` (Newsreader 15 px, copper-ink, tabular);
  - an H3 title;
  - a 15 px ink-soft description;
  - a footer line pinned to the bottom (`margin-top: auto`) over a 1 px `cream-deep` rule, holding the price placeholder at 13 px, weight 600.
- **Offers, in order (roadmap Updates 1 and 2):** 01 Business Diagnostic; 02 Stabilize; 03 Business Launch; 04 Scale. The names are fixed and reused on proposals and invoices. The former department services are the areas every offer covers (6.14). The card's footer line is the offer's own price slot.
- **Prices:** placeholders until Rob sets them. Never invent one.

### 6.6 OperatingHistory (dark band)
- Ground background, cream text.
- **Left column** (`flex: 1 1 340px`): the eyebrow "Operating history" (copper-light), then an H2, then a 4:3 photo slot. The slot uses a `next/image` from `public/images/consulting/` once Rob supplies the photo. Until then it is a dashed `ground-line` placeholder on `ground-raised`, labeled in mist.
- **Right column** (`flex: 1 1 520px`): rows of a label (Poppins 11 px, tracked, copper-light, 180 px wide) and a fact (Newsreader 22 px), padding 22 px 0, with 1 px `ground-line` between rows. The rows wrap on a phone (label above fact).
- **Facts:** Rob's operating history. Currently: the Philadelphia pizzeria (owner); the 150-seat Boulder bar and grill (owner); SW Colorado's kettle co-packer (prepared foods, SOPs, COGS); Good Food Collective (farm-to-shelf production and financial model for heritage orchards); Director of Operations and Finance, San Juan Mountains Association.
- **Markup:** a `<dl>`.

### 6.7 ToolKitTeaser (brief §4 and §6)
- Paper background.
- **Left** (`flex: 1 1 420px`): eyebrow "Tool Kit", an H2 at 36 px, the approved line in 17 px ink, the terms line in 16 px ink-soft, and the text link "Open the Tool Kit".
- **Right** (`flex: 1 1 380px`): two white tiles, one per app (`cream-line` border, radius 14 px, padding 24 px): the name (Newsreader 22 px, 600), its one line (15 px ink-soft, facts only), and the list price slot over a 1 px `cream-deep` rule. Muse Kitchen's tile carries the kit's "Powered by Ember OS" badge at 20 px high beside the name; CompTable's does not. Ember OS appears nowhere else on the consulting pages, and Cotyledon never.

### 6.8 ClosingCTA
- Cream band with a top 1 px `cream-line` rule.
- An H2 at 36 px (Rob's closing line) on the left and the primary button on the right, wrapping.

### 6.9 SiteFooter
- Ground background, mist text, 13 px.
- **Left:** the wordmark (Newsreader 22 px, cream).
- **Right:** "Austin, Texas". Per Rob (2026-10-20), no name and no email in the footer.
- The legal entity line is still open (TODO.md).

### 6.11 Symptoms ("Sound familiar?")
- Paper. Eyebrow in copper-ink, H2 at the section size, max-width 20em.
- A `<ul>` on a three-column grid (two on a tablet, one on a phone), 1 px `cream-deep` rule above each item and below the list. Each item: a tabular numeral `01`–`06` (Newsreader 15 px, copper-ink) beside the line in Newsreader 22 px, ink.
- Four to six lines. The copy is Rob's; the agreed direction's symptoms stand in until he rewrites them.

### 6.12 DiagnosticBlock (the entry offer)
- Cream band with 1 px `cream-line` rules above and below.
- **Left** (`flex: 1 1 480px`): eyebrow "Start here", the offer's name as the H2, its one line in 17 px ink-soft, the price slot (15 px, 600, tabular), then the primary button and a text link to `/services#diagnostic`.
- **Right** (`flex: 1 1 380px`): a ledger card in the CostingCard's look (white, `cream-line` border, radius 14 px, padding 28 px, light shadow): the title "What you get" over a 2 px ink rule, then an `<ol>` of the offer's included items, numerals in copper-ink, 1 px `cream-deep` rules between.

### 6.13 HowItWorks
- Paper. Eyebrow and H2 as in 6.11.
- An `<ol>` of three or four steps on a four-column grid (two on a tablet, one on a phone) under a 1 px ink rule: numeral (Newsreader 15 px, copper-ink, tabular), H3 card title (26 px), 15 px ink-soft body. No cards, no borders between steps.

### 6.14 SoftwareAndTerms (on `/services`, per Rob 2026-10-20; replaces Coverage and Terms)
- Cream band with a 1 px `cream-line` rule above, after the offer sections and before the closing band.
- Eyebrow, H2 and a 17 px ink lead (the approved software line and the one-sentence rule).
- **App tiles:** two white tiles on a two-column grid (one column under 1024 px): a 16:9 screenshot across the top (or a dashed placeholder on cream), then the name (Newsreader 26 px, 600) with the kit's text-only POWERED BY EMBER OS at 26 px high beside it on Muse Kitchen only (the badge version is too small to read at that height); CompTable's wordmark also sits over the top-right of its screenshot, where the engine screen's top bar is blank, its one line in ink-soft, a short ruled list of what it covers, and the list price slot pinned to the bottom.
- **Matrix:** a white tile holding a `<table>`: Offer (numeral in copper-ink serif, the name linked to its section), Form, Muse Kitchen, CompTable, Minimum. "Included" in 600 ink; a dash in ink-soft where not. It scrolls sideways on a phone.
- **Terms:** the former Terms `<dl>` under a 22 px Newsreader title, with the single-projects note.

### 6.15 WholeSystems (the headline idea, brief §1)
- Dark ground band, cream text, `on-dark` focus ring. Placed between the symptoms and the Diagnostic.
- **Left** (`flex: 1 1 480px`): eyebrow "Whole systems" in copper-light, H2 at the section size, Rob's explanation in 17 px mist (a slot until he writes it).
- **Right** (`flex: 1 1 380px`): a ledger card on `ground-raised` with a `ground-line` border: the title "One ledger" over a 2 px cream rule, then an `<ol>` of the connected lines in Newsreader 22 px cream, numerals in copper-light, 1 px `ground-line` rules between.

### 6.10 Buttons and links

| Variant | Style |
|---|---|
| Primary | Tomato background, white text, Montserrat 600 15 px, padding 15 px 26 px, pill radius. Hover and active: `--color-tomato-deep`. |
| Secondary | Transparent background, 1.5 px ink border, ink text, padding 14 px 24 px, pill radius. Hover: cream background. |
| Text link | copper-ink, underlined. Hover: ink. |
| Nav link | ink, no underline. Hover: underline. |
| Focus | 3 px tomato outline, 3 px offset, on every interactive element. |

All buttons are `<a>` links (book a call, see services) or real `<button>` elements. Touch targets are at least 44 px tall.

---

## 7. Imagery

- **Photography:** real kitchens, real hands, and Rob at work. Use no stock photography and no AI-generated food imagery.
- **Placement:** web-sized files go in `public/images/consulting/`; originals go in `library/screenshots/` (or a new `library/photos/`, per `library/README.md`).
- **LinkedIn header graphic:** the data-and-globe image Rob uses there is mood only. Its one usable idea, a faint grid of figures behind content, is optional texture for later. It should never be literal arrows or a globe.
- **Icons:** none in this version. If any are added later, use simple stroke icons in ink and never emoji.

---

## 8. Scoping: how the two looks coexist

Today `src/app/globals.css` gives `body` the dark ground and cream text. The consulting look becomes the default and the Ember look becomes the exception. Decided structure (2026-10-19):

1. Move the site-wide `body` colors out of `globals.css` and into route-group layouts:
   - `src/app/(site)/layout.tsx` — paper background, ink text, SiteHeader and SiteFooter. This covers Home, Services, Work, About and Contact.
   - `src/app/(toolkit)/layout.tsx` — ground background, cream text, plus the existing `Header` and `Footer`. This covers the Tool Kit page (today's home content), `/platform` and `/mission`, unchanged.
2. Keep every existing token. Add only the new ones from sections 3 and 4.
3. The root `layout.tsx` keeps fonts, the skip link and metadata. Move the current Header and Footer into the toolkit layout. The metadata `title` and `siteName` change from "Ember OS" to "Food Is My Muse Consulting" on the site group.

---

## 9. Accessibility checklist (CLAUDE.md rule 6)

- [ ] Every text pair is in the contrast table in section 3 (all pass AA).
- [ ] 360 px width: the header collapses, the hero stacks, cards go to one column, history rows stack, and nothing scrolls sideways.
- [ ] Headings in order: one H1 per page, then H2 per section and H3 per card.
- [ ] The costing card is a real `<table>` with a caption.
- [ ] The skip link still targets `#main`.
- [ ] The focus ring is visible on every link and button.
- [ ] Alt text on the Ember OS badge and on Rob's photo.

---

## 10. Copy status

All copy on the mock-up is placeholder or neutral stand-in. Rob writes the real copy, and drafts in his voice are modeled only on his own writing. Bracketed text marks a slot Rob still has to fill:

- the hero intro line after his name;
- the description of Rob in the Services section;
- the closing line;
- prices;
- his email;
- the photo.

The audience names, service names and operating-history facts are confirmed.
