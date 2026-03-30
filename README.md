# Personal Website

Static portfolio built with [Astro](https://astro.build), deployed to [Cloudflare Pages](https://pages.cloudflare.com).
No React, no Tailwind, no SSR — plain TypeScript, plain CSS, static output only.

## Local development

```bash
npm install
npm run dev        # http://localhost:4321  (hot-reload)
npm run build      # production build → dist/
npm run preview    # preview the production build locally
npm run check      # TypeScript + Astro type-checking
```

## File structure

```
src/
  assets/
    photo.jpg              # Profile photo (hero + sticky nav)
    photos/                # Slideshow background images (16:9)
  components/
    Hero.astro             # Full-viewport hero: slideshow, name, subtitle, nav, icons
    StickyNav.astro        # Fixed top bar — appears on scroll via IntersectionObserver
    About.astro            # Centered prose block below the hero
  content/
    config.ts              # Zod schema for writing collection
    writing/               # Markdown posts (see "Adding a writing post" below)
  data/
    projects.ts            # Project list (see "Adding a project" below)
  scripts/
    nav.ts                 # Toggles .sticky-nav--visible on scroll
  pages/
    index.astro            # Single page — composes all sections
  styles/
    global.css             # CSS custom properties, reset, @keyframes
public/
  favicon.svg              # NL monogram favicon
  NoahLeeResume.pdf        # Served at /NoahLeeResume.pdf — replace to update resume
```

## Updating the resume

Drop the new PDF into `public/` as `NoahLeeResume.pdf`. That's it — both the hero
and sticky nav Resume links point to `/NoahLeeResume.pdf`.

PDFs go in `public/`, not `src/assets/`. Astro only serves `public/` files as static
assets; `src/assets/` is for images that Astro processes and optimises.

## Adding or editing a project

Open [src/data/projects.ts](src/data/projects.ts). Each entry in the `projects` array
is typed as:

```ts
{
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  liveUrl?: string;   // optional — shows an external-link icon if present
}
```

Projects render in the order they appear in the array — put your strongest work first.

Tags are displayed as small pills. Keep them broad (e.g. `AWS`, `TypeScript`) and put
specific service names (ECS, Lambda, SQS) in the description text where they have context.

## Adding a writing post

Create a Markdown file in `src/content/writing/`. The filename becomes the slug.

```
src/content/writing/my-post-slug.md
```

Required frontmatter:

```yaml
---
title: "Post Title"
date: 2025-06-01
draft: false
description: "One-sentence summary shown in the writing list."
---

Post body goes here...
```

- Set `draft: true` to hide a post while you're working on it — it won't appear publicly.
- Posts are sorted newest-first by `date`.
- Post body content is not yet rendered (no individual post pages). Only the date, title,
  and description show in the writing list.

## Adding photos to the hero slideshow

1. Drop 16:9 images into `src/assets/photos/`.
2. Open [src/components/Hero.astro](src/components/Hero.astro) and add an import:
   ```ts
   import p14 from '../assets/photos/YOUR_FILE.jpg';
   ```
3. Add it to the `slidePhotos` array.
4. Update the `@keyframes photo-cycle` percentages in
   [src/styles/global.css](src/styles/global.css) — the comment in that file explains
   the math. The key numbers are:
   - `PHOTO_SLOT = 5` (4s visible + 1s fade)
   - `PHOTO_TOTAL = number_of_photos × 5`

## Rotating subtitle phrases

Edit the `phrases` array near the top of [src/components/Hero.astro](src/components/Hero.astro).

If you change the number of phrases, update the `@keyframes phrase-cycle` percentages
in [src/styles/global.css](src/styles/global.css). The comment there walks through the
math. Key numbers:
- `SLOT = 3.5` (3s visible + 0.5s fade)
- `TOTAL = number_of_phrases × 3.5`

## Theming

All color and spacing tokens live in [src/styles/global.css](src/styles/global.css)
under `:root { … }`. Change them there and they apply everywhere.

```css
--color-bg:         #0e0e0e;   /* page background */
--color-text:       #e8e8e8;   /* primary text */
--color-text-muted: #888888;   /* secondary text */
--color-border:     #2a2a2a;   /* dividers */
--font-size-name:   clamp(3.5rem, 10vw, 8rem);  /* hero name */
```

## Cloudflare Pages deployment

1. Push this repository to GitHub.
2. In the Cloudflare Pages dashboard, connect the repo with these build settings:

   | Setting               | Value          |
   |-----------------------|----------------|
   | Framework preset      | Astro          |
   | Build command         | `npm run build`|
   | Build output directory| `dist`         |
   | Node.js version       | 20             |

3. Every push to `main` triggers a rebuild and redeploy automatically.
