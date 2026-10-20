# About — copy deck

Route: `/about` · Rendered by `src/content/about.ts`. Text in [brackets] is a slot Rob fills.

Per Rob (2026-10-19): the About page carries the Mission note, the same text as the Tool Kit's `/mission` page, and nothing else about his history; operating history has its own page, `/work`.

---

**Eyebrow:** ABOUT

**Headline:** Rob Bogatin

**Lede:** Food is my muse. Why I built Ember OS, and who it is for.

---

## A note from Rob

The note is `content/mission.md` word for word, and `src/content/about.ts` imports it from `src/content/mission.ts`, so an edit to the Mission deck and its data file changes both pages. The first paragraph is set large; the signature closes it.

---

## Get in touch (`#contact`)

**Heading:** Get in touch

**Body:** [A line on the best way to start: a call, an email, what to bring.]

[email] · [Book a 30-minute call] when a booking link or email is set (`src/config/site.ts`)
