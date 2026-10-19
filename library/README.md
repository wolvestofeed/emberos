# Library

Working material for the site: the logo kits, the full-size screenshots and the research a page
draws on. **Nothing in here is served.** A visitor can only open what is in `public/`, so to use a
file on a page, put a web-sized copy there first (see "Where things go" below).

| Folder | What is in it |
|---|---|
| `logos/ember-os/` | the Ember OS logo: stacked (256 / 512 / 1024), wordmark (dark, white, on background), square mark 32 to 1024 and `favicon.ico` |
| `logos/muse-kitchen/` | Muse Kitchen lockups, stacked and horizontal, on dark and light, plain and badge, PNG 1x/@2x and SVG, the 128 px icon |
| `logos/cotyledon/` | Cotyledon lockups, stacked and horizontal, on dark and light, plain and badge, PNG 1x/@2x, icons 128 / 256 / 512 |
| `logos/endorsement/` | POWERED BY EMBER OS, badge and text, on dark and light, PNG and SVG |
| `screenshots/` | the originals at full size: four Cotyledon screens (`cotyledon-*.png`, ~3100 px), the Cotyledon preview, three Muse Kitchen pages |
| `research/` | source documents a page cites before its claim lands in `content/` (rule 4 in `Docs/CLAUDE.md`). `Veggie-Planting-Calendar-Austin.pdf` is a seasonal reference for the mission copy |

Naming, shared across the Ember OS repos: `-on-dark` and `-on-light` are transparent and coloured for
that surface; `-badge-` versions lead with the Ember mark; `@2x` is double resolution. The full kits,
with every surface and size, are `Cotyledon/images/` and `Muse Kitchen/images/`, beside this repo.

## Where things go

Two trees, two jobs. If a visitor can open it, it lives in `public/`, and its path is its URL.
Everything else is working material and lives here.

| You have | Put it in | Reach it on a page as |
|---|---|---|
| a logo a page needs | `public/brand/<product>/` | `/brand/ember/ember-mark-64.png` |
| a photo or page image, web-sized | `public/images/<page>/` (`home/`, `consulting/`, `ember-os/`) | `/images/consulting/kitchen.webp` |
| a PDF or file to download or link | `public/files/` | `/files/guide.pdf` |
| the full-size original of an image | `screenshots/` here, or a new folder beside it | not served |
| copy for a page | `content/<page>.md`, then its typed twin `src/content/<page>.ts` | rendered by the page |
| reference material behind a claim | `research/` here | cited, not served |

Keep served images web-sized (the app screens are 1600 px WebP, 70 to 100 KB). The originals in
`screenshots/` are ~1 MB each and should never be copied into `public/` as they are.

```tsx
<Image src="/images/ember-os/dashboard.webp" alt="Cotyledon dashboard" width={1600} height={989} />
```
