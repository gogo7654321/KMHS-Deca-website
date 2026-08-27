# KMHS DECA

Website for the Kennesaw Mountain High School DECA chapter — a sister site to the
KMHS Beta Club site, built in the same style with DECA's blue-and-white colors.

## Pages
- **Home** — hero, why-join benefits, competition strip, leadership CTA
- **Leadership** — the student officer board with bios
- **Compete** — DECA+ prep hub, competitive events, how-to-compete, vocabulary
- **About** — what DECA is, our chapter, our advisor
- **Contact** — Instagram, GroupMe, advisor

## Tech
Next.js (App Router) · React · TypeScript · Tailwind CSS

## Running locally
```bash
npm install
npm run dev
```
Runs on http://localhost:3001 (Beta Club uses 3000, so both can run at once).

## Adding exec photos
Drop officer photos into `public/execs/` — see `public/execs/README.md` for the
exact filenames. Until then, the site shows blue initials avatars automatically.

## Links used
- GroupMe, Instagram (@kmhs_deca), DECA+ (decaplus.org), deca.org/compete,
  and the competition vocabulary Quizlet — all configured in `src/lib/data.ts`.
- Advisor: Paul Goodman (paul.goodman@cobbk12.org) — DECA+ login contact.
