# foodismymuse.com — the Ember OS front door

The public marketing site and app gateway for **Ember OS**. Three pages (Home, Platform, Mission) and two portal cards that sign straight into Muse Kitchen and Cotyledon on their subdomains. Static, no back end.

```bash
pnpm install
pnpm dev        # http://localhost:3001
pnpm build      # static prerender of every route
```

- Plan: `PLAN.md`. Rules and hand-off: `Docs/CLAUDE.md`. Phases and log: `Docs/ROADMAP.md`.
- App URLs: `src/config/apps.ts`. Copy: `content/*.md` (decks) and `src/content/*.ts` (what renders).
- Theme: `design/tokens.css`. Served files: `public/` (`brand/` logos, `images/<page>/`, `files/` PDFs). Working material, not served: `library/` (see its README).
