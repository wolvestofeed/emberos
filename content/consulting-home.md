# Home — copy deck (Food Is My Muse Consulting)

Route: `/` · Look: the default style sheet (`design/default-style-sheet.md`) · Sections in order. Text in [brackets] is a slot Rob fills, and it renders on the page as-is until he does. Rendered by `src/content/consulting-home.ts`; the services by `src/content/services.ts`.

---

## 1. Header

Wordmark: **Food Is My Muse Consulting** (set in type, the only wordmark)

Nav: **Services** · **Work** · **Tool Kit** · **About** · [Book a call] → BOOKING_URL (`src/config/site.ts`)

---

## 2. Hero

**Eyebrow (Rob, 2026-10-20):** INDEPENDENT FOOD BUSINESSES & RESTAURANTS IN AUSTIN

**Headline (Rob, 2026-10-20):**
You've mastered your food craft.
Now it's time to run your business.

**Lede (Rob, 2026-10-20):** **Food is My Muse Consulting** led by Rob Bogatin, is Austin's first food business partner that offers owners an integrated, whole systems foundation to launch, sustain and grow your business.

**Buttons:** [Book a 30-minute call] (primary) · [See how I work] → `/services`

**Traced-order card (per Rob, 2026-10-19, replacing the plate-costing card; illustrative, labeled as such):**

| One order, every department | Cost | Hours |
|---|---|---|
| **Catering order: 150 boxed lunches at $18** (bold, under the title, above the rule) | | |
| Purchasing: Ingredients, ordered and received | $802.50 | 1.00 h |
| Production: Prep and cook, 18 h at $22 | $396.00 | 18.00 h |
| Operations: Packaging and delivery | $230.00 | 4.00 h |
| Sales and admin: Booking and invoicing | $22.00 | 1.00 h |
| Accounting: Share of rent and overhead | $175.00 | none |
| **True cost** | **$1,625.50** | **24.00 h** |
| Price | $2,700.00 | |
| **True margin** | **39.8%, $1,074.50** | |

Under the money and hours (Rob, 2026-10-20), **Order sustainability report**, one metric per row:

| Order sustainability report | |
|---|---|
| Carbon emissions | 144 kg CO₂e |
| Methane | 3.4 kg CH₄ |
| Water | 4,725 L |
| Energy consumption | 158 kWh |
| Waste, compost | 23.3 kg |
| Waste, landfill | 6.8 kg |

The page computes the money and hour totals from the rows. All figures are illustrative; real ones replace them when Rob supplies them.

**Caption under the card (working line, Rob may rewrite):** An integrated whole-systems foundation: accounting and sustainability built into every process, so one order shows its true cost, its hours and its footprint.

---

## 3. For owners of

Chefs and restaurateurs · CPG founders · Caterers · Ghost kitchens · Bakers

---

## 3b. Sound familiar? (paper, ledger rules)

**Eyebrow:** SOUND FAMILIAR?

**Heading:** [Heading in Rob's words]

Four to six symptoms, Rob's words. The slots carry the agreed direction as prompts:
1. [Symptom, in Rob's words: busy but not making money]
2. [Symptom: real food and labor cost unknown]
3. [Symptom: working in the business every day]
4. [Symptom: staff turnover]
5. [Symptom: prices are a guess]

---

## 3c. Whole systems (dark band)

**Eyebrow:** WHOLE SYSTEMS

**Heading:** Every system, wired to the books.

**Body:** [Rob's explanation: every system he builds is wired to the accounting, so nothing in the business runs blind.]

Right, a ledger card, **One ledger**: Food cost and production · Labor cost and staffing · Cash flow and sales forecasts · Sustainability

"Whole systems" is the term.

---

## 3d. The Diagnostic (cream band)

**Eyebrow:** START HERE

**Heading:** Business Diagnostic (the offer's name and line from `content/services.md`)

[Fixed fee $___] · [Book a 30-minute call] · See what is included → `/services#diagnostic`

Right, a ledger card, **What you get**: the Diagnostic's "What is included" list from `content/services.md`.

---

## 3e. How it works (paper)

**Eyebrow:** HOW IT WORKS

**Heading:** A diagnostic, then a retainer with the software, then your own system.

Four steps, scope copy:
1. **A call.** Thirty minutes on where the business stands and whether the Diagnostic is the right first step.
2. **The Diagnostic.** About two weeks on the business as it is, at a fixed fee. It ends in a written report: real costs and a ranked list of fixes.
3. **A retainer, software included.** Stabilize for an open business, Business Launch before opening, Scale for growth. Three months minimum. Month one sets the business up on Muse Kitchen and CompTable and trains the people who use them; both are included while the retainer runs.
4. **Independence.** The engagement ends with you running the business on your own system. Keep a monthly check-in if you want one, with an active-client subscription discount.

---

## 4. Services

**Eyebrow:** WORK WITH

**Heading:** Rob Bogatin

**Description:** [Description of Rob: background, how he works, and what a founder gets from working with him.]

Four offer cards, in order (the deck for each is `content/services.md`; structure in `Docs/roadmaps/consulting-roadmap.md`, Update 1):
01 Business Diagnostic · 02 Stabilize · 03 Business Launch · 04 Scale
Each card: one line, and a bracketed price slot until Rob sets prices or decides to show none.

---

## 5. Operating history (dark band)

**Eyebrow:** OPERATING HISTORY

**Heading:** On the line and in the books.

[Photo: Rob at work in a kitchen] → `public/images/consulting/`

Confirmed facts (Rob, 2026-10-19):
- Co-owner — A Philadelphia pizzeria
- Co-owner — A 150-seat bar and grill in Boulder
- Co-packer — SW Colorado's kettle co-packer: prepared foods, SOPs, COGS
- Social enterprise — Good Food Collective: farm-to-shelf production and financial model for heritage orchards
- Finance — Director of Operations and Finance, San Juan Mountains Association

---

## 6. Tool Kit

**Eyebrow:** TOOL KIT

**Heading:** The software that comes with the work.

**Lead (approved line):** Every engagement comes with its own software, set up and taught by the person who built it.

**Body:** Both are included while a retainer is active. Rob sets the business up on both, trains the staff who use them, and keeps working weekly or monthly until the owner runs the business without him.

Two app tiles, right:
- **Muse Kitchen** (with the kit's "Powered by Ember OS" badge) — Runs production, costing and the kitchen. — List price [$___]/month
- **CompTable** (getcomptable.com; facts only, never advice) — Models compensation, payroll cost and labor compliance. — List price [$___]/month

**Link:** Open the Tool Kit → `/tool-kit`

Cotyledon does not appear on the consulting pages.

---

## 7. Closing

**Heading:** [Closing line in Rob's words]

**Button:** [Book a 30-minute call]

---

## 8. Footer

**Food Is My Muse Consulting** / Rob Bogatin · Austin, Texas · [email]
