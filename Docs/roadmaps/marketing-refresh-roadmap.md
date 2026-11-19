# foodismymuse.com — Marketing refresh (home, services, Ember OS pages, Muse Kitchen welcome page)

Planned 2026-11-18 with Rob. Nothing here is built yet; each step is built on Rob's go-ahead. The copy
is Rob's: `src/content/*.ts` stays the authority, and drafts below are proposals for him to rewrite.

## Timeline

- **Start: 2026-11-10 20:46**, the last push of the site (`f3eb77e`). The Ember OS section's Muse Kitchen,
  Cotyledon and CompTable pages replaced the Tool Kit pages; the CompTable copy was read from
  getcomptable.com that day.
- **2026-11-16**, `Muse Kitchen/docs/muse-kitchen-platform-overview.md`: Part 1 is the executive
  summary, Part 9 the internal cross-reference of the build against these pages.
- **2026-11-17**, after the overview: the Sales CRM in every kitchen (part of Batch Kitchen mode), one
  ledger a business with statements by location and unit, the Muse Kitchen onboarding guide
  (`Muse Kitchen/docs/training/muse-kitchen-onboarding-guide.html`, PDF 16 Nov).
- **CompTable, 2026-11-12 to 17**: Model Generator Phases 13–19 (Hybrid Tipping Model removed), two more
  Austin businesses in the Live Demo, take-home pay with local income tax in nine states, filing
  status per roster row, Dictate on roster import and goals, the Local Pulse sharing checklist, the
  five-part beta guide (`Comptable/docs/beta/beta-onboarding-guide.md`).

## Built since the site and not named on it

**Muse Kitchen**
- Two modes, each with its own pages. Restaurant mode: Menu, Beverages, Resale Items, par and count
  sheets, prep list, order guide, line checks, unit economics by channel (dine-in, takeout, delivery,
  catering).
- The onboarding wizard (voice or typed); last month's reports imported from any POS, accounting or
  payroll software as a baseline month; a go-live date per location.
- Receipt and bill capture by camera (AI reading, a person reviews, approval into the books); the bill
  register.
- Every location its own books, now rolled into one ledger a business.
- Reports: 35 (27 for a restaurant owner, 32 for a batch kitchen), five lenses (Performance, Loss &
  leakage, Alerts & compliance, Utilization & staffing, Sustainability), workbook export. The page says
  "exports across every module".
- Local Pulse for kitchens: 19 metrics against a Local Group, the introduction network. Today only in
  the closing band, whose primary link is `tbd`.
- Libraries that ship: 700 suppliers, an equipment catalog by mode, 43 food emission factors.
- Sustainability per portion, the evidence pack, the organics compliance pack.
- The Sales CRM (2026-11-17).

**Wording that predates the build (Muse Kitchen page)**
- Cotyledon terms: "sowings", "grow units", "the Produce Safety Rule", the broccoli tray spotlight.
- "Recipe & Roster Assistant": the recipe assistant is the one assistant.
- "subscriptions billed through Stripe": payments are not built (Phase 5).

**CompTable**
- The Live Demo: eight businesses and a CPA firm view.
- Take-home pay with filing status and local tax; roster, schedule and staff schedule links; Dictate;
  the Working Model and Under Consideration; member invites; the OT Analysis tool; trust badges
  (Maintained, Default — editable, Your input).
- Template names: the beta guide's demo table uses names such as "Service Charge with Tips" that differ
  from the page's five templates. Check against getcomptable.com.
- Price still open: $50/month + tokens here, "Get started free" on getcomptable.com.

## Site rules this plan must meet (`Docs/CLAUDE.md`)
- Voice copy is Rob's: every draft line here is a proposal for him to rewrite, never pasted over his.
- CompTable copy states facts and math and never advises.
- Cotyledon never appears on the consulting pages.
- Every change is logged in `Docs/ROADMAP.md` → Update Log.

## Decisions for Rob first
- [x] CompTable price line (Rob, 2026-11-18): "Get started free" on every CompTable price line, as on
      getcomptable.com. Done on the home Tool Kit teaser and the Services card and terms.
- [x] CompTable template names (Rob, 2026-11-18): match getcomptable.com. Checked 2026-11-18 against
      `Comptable/apps/web/src/components/platform-inventory.tsx`: the five names on `/comptable` already
      match (Traditional, Full House Service Charge, BOH-only Service Charge, Full House Tip Pool, Tip
      Credit Elimination). The beta guide's names are the in-app wizard's labels. No change.
- [x] Software terms (Rob, 2026-11-18): both lines stand. The software is free for up to three months
      across the diagnostic and project timeline; after that, a client on retainer pays the monthly
      subscription. No change to the copy. Beta users are free today, and that never goes on the site.
- [x] Diagnostic length (Rob, 2026-11-18): How it works keeps "about two to four weeks" (it covers both
      diagnostics); the Services matrix keeps 01 at about two weeks and 02 at two to four.
- [x] The copper "Begin onboarding" button stays upper right of the header bar (Rob, 2026-11-18); the
      welcome page points to it.

## 1. Home page (`src/content/consulting-home.ts`)
- [x] Hero eyebrow: "Indy Food businesses" to "Independent food businesses" (Rob's call). Keep the
      traced-order card.
- [x] "Every input is wired to the books": add receipts and bills by camera, every location's books in
      one ledger, plate cost by channel.
- [x] A short new band, "Start from where you are": last month's reports from your POS and QuickBooks
      become the starting point; a go-live date keeps practice off the books.
- [x] Tool Kit teaser: Muse Kitchen line names both modes; CompTable line names take-home pay and the
      Live Demo, with a "Try the Live Demo" link.

## 2. Services page polish (`src/content/services.ts`)
- [x] Header lede: one fuller line on who Rob serves and how (today: "works with owner operators onsite
      and in-person").
- [x] Muse Kitchen covers: the two modes, the baseline import, receipt capture, reports, Local Pulse.
- [x] CompTable covers: the Live Demo, take-home pay, scheduling.
- [x] Sustain (not Business Launch, which is before opening and has no last month): month one starts
      from the last month's POS, accounting and payroll reports, imported into Muse Kitchen.
- [ ] A new Restaurant dashboard screenshot (Rob takes it in the signed-in app).

## 3. Ember OS pages
**Muse Kitchen (`src/content/muse-kitchen.ts`)**
- [x] Hero names both modes.
- [x] New sections: Two modes (the onboarding guide's comparison table, condensed); Start from where you
      are (wizard, import, go-live); Capture by camera; Reports and lenses; Local Pulse for kitchens;
      Libraries that ship.
- [x] Every-module list: Restaurant mode's pages, Bills & Payables, the CRM, locations and the
      consolidated ledger; Reports line names the 35 reports and lenses.
- [x] Remove the Cotyledon wording; replace the broccoli spotlight with a restaurant plate.
- [ ] Screens: Restaurant dashboard, Reports, Receipt Capture, Local Pulse (Rob takes them).

**CompTable (`src/content/comptable.ts`)**
- [x] A Live Demo section: the eight businesses and the firm view, with a button.
- [x] Add take-home pay (filing status, local tax in nine states), roster and schedule with staff
      links, Dictate, the OT Analysis tool.
- [x] A band, "How CompTable and Muse Kitchen work together": the four flows from Part 5 of the beta
      guide, with its note that the connection is being built.
- [x] Apply the price decision.

**Closing band (`src/content/app-page.ts`)**
- [x] Muse Kitchen's Local Pulse button points at the new Local Pulse section, not `tbd`.

## 4. Muse Kitchen welcome page (Muse Kitchen repo)
`src/app/(musekitchen)/(front)/kitchen/page.tsx` and its styles. An app page, not the marketing site.
Keep the sky background and the brand stack; the copy sits on a translucent card over the sky.

Draft copy:

> **Welcome to Muse Kitchen**
> The operating system for independent restaurants and batch kitchens: production, purchasing, your
> books, your people and sustainability, in one place.
>
> **Once you're signed in**
> - **Look around.** Every page is open to explore before you set anything up.
> - **Begin onboarding when you're ready.** Press the copper **Begin onboarding** button in the header
>   bar, upper right. Describe your business by voice or type it in, and the wizard sets up your
>   locations, your mode and your starting month.
>
> [ **Login** ]  [ Create account ]
> *New here? Read the onboarding guide · See Muse Kitchen on foodismymuse.com*

- [ ] Rob rewrites the copy.
- [x] Build the card, the two buttons and the footer links.
- [x] The title drops "regenerative, scratch kitchens" in favor of naming restaurants and batch
      kitchens.

## Order
1. The decisions above.
2. Muse Kitchen page (the largest gap).
3. Home page.
4. Services polish.
5. The welcome page, any time.

Rob reviews on `pnpm dev`; commit, push and deploy on his say-so.

## Built 2026-11-18 (not committed)
Rob said "proceed with content update plan". Every draft line is a proposal for Rob's rewrite.
- **Services** (`services.ts`): header lede, Sustain's month-one import line, six Muse Kitchen covers,
  two more CompTable covers, the dash and period fixes.
- **Home** (`consulting-home.ts`, new `components/consulting/StartBand.tsx`): eyebrow, eight ledger
  lines, the "Start from where you are" band between How it works and the Tool Kit (cream), the Tool
  Kit lines, and a Live Demo link on the CompTable tile (`ToolKitApp.extra`).
- **Muse Kitchen** (`muse-kitchen.ts`; `app-page.ts` and `AppLanding.tsx` gain optional `highlights`
  and `seatPrimaryHref`): hero support names both modes; eight highlight cards after "Before you
  commit"; Restaurant mode group and new module lines; Cotyledon wording out; Recipe Assistant; the
  spotlight is a brisket plate; the closing band's Local Pulse button lands on `#local-pulse`.
  Cotyledon's page is unchanged (its closing band link is still `tbd`).
- **CompTable** (`comptable.ts`, `app/(toolkit)/comptable/page.tsx`): the Live Demo band after the hero
  with the eight businesses and a sign-up button; three outputs (take-home pay, roster and schedule,
  Dictate); the OT Analysis tool; "How CompTable and Muse Kitchen work together" before the closing band.
- **Welcome page** (Muse Kitchen repo, `(front)/kitchen/page.tsx` and `muse.css`): the welcome card
  with the two steps, Login and Create account, and a link to foodismymuse.com/muse-kitchen. No link to
  the onboarding guide: it lives in `docs/`, which the app does not serve.
- Checks: site typecheck, lint and build pass; Muse Kitchen typecheck passes. Not viewed in a browser.
- Still open: new screenshots (Restaurant dashboard, Reports, Receipt Capture, Local Pulse), which Rob
  takes in the signed-in app.

