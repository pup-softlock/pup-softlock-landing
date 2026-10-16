# Pup Softlock

Personal landing page and social navigation hub for Pup Softlock.

**Website:** [pup-softlock.nl](https://pup-softlock.nl)

Built with Nuxt 4, Vue 3, TypeScript, and Bulma/Sass. Ark UI for Vue is also installed. Pages are rendered to static HTML for GitHub Pages.

## Pages

- `/` — Profile, social links, interests, and a one-time 18+ chastity reveal.
- `/events` — Upcoming events, with compact and full views.
- `/past-events` — Past attendance, grouped by year.
- `/llms.txt` — Public profile context and links for AI agents.

## Development

Install dependencies and start the local server:

```bash
npm ci
npm run dev
```

Open [localhost:3000](http://localhost:3000).

## Validation and Build

```bash
npm run lint
npm run typecheck
npm run build
```

Both `npm run build` and `npm run generate` produce the static site in `.output/public/`.

## Editing Content

- [app/data/profile.ts](app/data/profile.ts) — Profile copy, social destinations, interest tags, and optional stories. Set a story's `enabled` flag to temporarily hide or restore it.
- [app/data/events.ts](app/data/events.ts) — Upcoming events, listed chronologically.
- [app/data/past-events.ts](app/data/past-events.ts) — Past events grouped by year.
- [app/pages/index.vue](app/pages/index.vue) — Profile layout, reveal behavior, and SEO metadata.
- [app/assets/scss/main.scss](app/assets/scss/main.scss) — Bulma configuration and shared styling.
- [public/llms.txt](public/llms.txt) — AI-facing profile context. Keep it in sync with profile wording and social platform descriptions.
- `public/` — Profile images, the party hero photo, and other static assets.

Use AP-style title case for headings. Keep Instagram as the primary content platform and Bluesky identified as specifically for 18+ content.

## Deployment

[The GitHub Pages workflow](.github/workflows/nuxtjs.yml) builds and deploys `.output/public/` when changes are pushed to `master`. It can also be run manually from GitHub Actions.
