# foodismymuse.com

The marketing site for **Food Is My Muse Consulting**, Rob Bogatin's food business consulting practice. Ember OS has its own section with a page per application (Muse Kitchen, Cotyledon, CompTable); the Muse Kitchen and Cotyledon pages each carry a portal card that signs straight into the app on its subdomain. Static, no back end.

```bash
pnpm install
pnpm dev        # http://localhost:3001
pnpm build      # static prerender of every route
```

- Build order: `Docs/roadmaps/consulting-roadmap.md`. Style spec: `design/default-style-sheet.md`. Rules and hand-off: `Docs/CLAUDE.md`. Phases and log: `Docs/ROADMAP.md`. The Ember OS pages' plan: `PLAN.md`.
- App URLs: `src/config/apps.ts`. Copy: `src/content/*.ts` is what renders; `content/*.md` holds the Ember OS pages' decks.
- Theme: `design/tokens.css`. Served files: `public/` (`brand/` logos, `images/<page>/`, `files/` PDFs). Working material, not served: `library/` (see its README).
