# Event graphics

Drop the graphics you made for events/series here (`.png`, `.jpg`, `.webp`, `.avif`).

They're wired in by **filename** from the data files:

- `src/data/features.ts` → `fgcFeatures` (shown on `/fgc`)
- `src/data/communityProjects.ts` → Midweek Mashers `features` (shown on `/work/midweek-mashers`)

Set a feature's images by filename:

- One graphic: `imageFile: 'fgc-event-1.png'`
- Several graphics: `imageFiles: ['fgc-event-1.png', 'fgc-event-2.png']` → renders a
  carousel with prev/next arrows that also auto-advances over time (pauses on hover/focus,
  and is disabled for visitors who prefer reduced motion).

Until a matching file exists, that slot renders a labelled placeholder, so the
layout looks right while the real graphic is pending. Also fill in `imageAlt` describing
what the graphic shows.

Large source images are fine — `astro:assets` optimizes them at build.
