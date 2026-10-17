# Images

The design library for the Ember OS welcome site: the platform logo and both products' lockups, in
the variants the brand family uses. Nothing here is served. The site serves the subset in
`public/brand/` and `public/screens/`; to use a new file on a page, copy it there first.

Naming, shared across the Ember OS repos: `-on-dark` and `-on-light` are transparent and coloured for
that surface; `-badge-` versions lead with the Ember mark; `@2x` is double resolution.

| Folder | What is in it | Reach for it when |
|---|---|---|
| `ember-os/stacked/` | the Ember OS logo, mark over wordmark, 256 / 512 / 1024 px | the platform on its own: hero, decks, social |
| `ember-os/wordmark/` | EMBER OS alone, transparent dark and white, small sizes, and on its background | headers and footers |
| `ember-os/icon/` | the square mark 32 to 1024 px and `favicon.ico` | favicons, app icons, avatars |
| `muse-kitchen/stacked/`, `horizontal/`, `icon/` | Muse Kitchen lockups on dark and light, plain and badge, PNG 1x/@2x and SVG, the 128 px icon | the Muse Kitchen card and anything naming the kitchen product |
| `cotyledon/stacked/`, `horizontal/`, `icon/` | Cotyledon lockups on dark and light, plain and badge, PNG 1x/@2x, icons 128 / 256 / 512 | the Cotyledon card and anything naming the farm product |
| `endorsement/` | POWERED BY EMBER OS, badge and text, on dark and light, PNG and SVG | wherever a product is shown with its endorsement |
| `screenshots/` | the four site screens (webp), three Muse Kitchen pages and the Cotyledon preview | platform and product sections |

The full libraries, with every surface and size, are `Cotyledon/images/` (Ember OS and Cotyledon)
and `Muse Kitchen/images/` (Muse Kitchen), beside this repo.

## Referencing a file

```markdown
![Ember OS](images/ember-os/stacked/ember-os-stacked-512.png)
```

On a page, after copying into `public/brand/`:

```tsx
<Image src="/brand/ember/ember-os-stacked-1024.png" alt="Ember OS" width={512} height={512} />
```
