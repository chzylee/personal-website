# Personal Website

Static portfolio site built with [Astro](https://astro.build), deployed to [Cloudflare Pages](https://pages.cloudflare.com).

## Local development

```bash
npm install
npm run dev        # starts dev server at http://localhost:4321
npm run build      # production build → dist/
npm run preview    # preview the production build locally
npm run check      # TypeScript type-checking
```

## Adding a project

Open `src/data/projects.ts` and add an entry to the `projects` array:

```ts
{
  title: 'My Project',
  description: 'What it does in 1–2 sentences.',
  tags: ['TypeScript', 'AWS'],
  githubUrl: 'https://github.com/you/repo',
  liveUrl: 'https://example.com',   // optional
},
```

Projects appear in the order they are defined in the array.

## Adding a writing post

Create a new Markdown file in `src/content/writing/`:

```
src/content/writing/my-post-slug.md
```

Required frontmatter:

```yaml
---
title: "My Post Title"
date: 2025-06-01
draft: false
description: "One-sentence summary shown in the writing list."
---

Post body goes here...
```

- Set `draft: true` to hide a post from the public list while you work on it.
- Posts are sorted newest-first by `date`.
- Post body content is not currently rendered (no individual post pages yet). The list shows date, title, and description only.

## Cloudflare Pages deployment

1. Push this repository to GitHub.
2. In the Cloudflare Pages dashboard, connect the repo and use these build settings:

   | Setting | Value |
   |---|---|
   | Framework preset | Astro |
   | Build command | `npm run build` |
   | Build output directory | `dist` |
   | Node.js version | 20 |

3. Deploy. Every push to `main` will trigger a new build automatically.

## Personalisation notes

- **LinkedIn URL** — update the `href` in `src/components/Hero.astro` to your actual LinkedIn profile.
- **Colors / spacing** — all tokens live in `src/styles/global.css` under `:root { … }`. Change them there and they cascade everywhere.
- **Name** — update the `<h1>` in `src/components/Hero.astro` and the `<title>` / `<meta name="description">` in `src/pages/index.astro`.
