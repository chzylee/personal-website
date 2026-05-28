# CLAUDE.md — endotlee.com (Noah Lee's personal site)

## Site Purpose

This site exists to communicate one statement and back it with proof:

> **I build systems for people.**

The unusual combination — cloud infrastructure work + community architecture — IS the differentiator. The site is not "an engineer portfolio with community work alongside." It is one claim, demonstrated through both technical and human systems. Every UI decision is evaluated against whether it makes that claim land in the first 10 seconds.

**Audiences:**
1. Software recruiters and hiring managers
2. Freelance clients / small business owners
3. FGC tournament organization staff (e.g., EVO-tier)

**What the site must not feel like:** a template, a generic dark-mode dev portfolio, a résumé printed to HTML.
**What it must feel like:** an editorial piece by someone with a point of view.

---

## Tech Stack

- **Framework:** Astro (static, no hydration by default), deployed to Cloudflare Pages
- **Styling:** Vanilla CSS with custom properties — no Tailwind, no CSS-in-JS
- **Language:** TypeScript
- **Images:** `astro:assets` `<Image />` for all static images
- **Content:** Astro Content Collections (`src/content/writing/`)
- **Fonts:** Google Fonts (Bebas Neue, DM Serif Display, Instrument Sans, DM Mono)

---

## Design Language

### Aesthetic
Editorial / architectural. Dark background, off-white text, single electric-purple accent. Feels designed, not assembled. Dark because it fits the FGC/gaming cultural context; editorial because the typography and layout earn it.

### Color Palette

All values are custom properties in `src/styles/global.css`. Never hardcode hex in component files.

| Token | Value | Meaning |
|---|---|---|
| `--color-paper` | `#0e0d0b` | Page background — near black |
| `--color-paper-soft` | `#1a1815` | Elevated surface (context strip, contact footer) |
| `--color-ink` | `#f2ede6` | Primary text — warm off-white |
| `--color-ink-muted` | `#8a8480` | Secondary text |
| `--color-rust` | `#9b6dff` | Single accent (electric purple) — used sparingly |
| `--color-rule` | `#2a2723` | Dividers, hairlines, borders |
| `--color-context-bg` | `#1a1815` | Context strip surface (same as paper-soft) |
| `--color-context-ink` | `#f2ede6` | Text on context strip |
| `--color-context-muted` | `#8a8480` | Muted text on context strip |

**Rules:**
- Never use `#000` or `#fff`
- Purple (`--color-rust`, token name retained for code compatibility) is the only accent — do not introduce new colors
- The site is dark throughout. `--color-paper-soft` is the only elevated surface.

### Typography

| Token | Stack | Use |
|---|---|---|
| `--font-display` | `'Bebas Neue', sans-serif` | Hero headline, project titles, large numbers |
| `--font-serif` | `'DM Serif Display', serif` | Italic editorial moments — used surgically, not decoratively |
| `--font-body` | `'Instrument Sans', system-ui, sans-serif` | Body copy, descriptions, nav |
| `--font-mono` | `'DM Mono', monospace` | Labels, tags, stats, eyebrows |

**Rules:**
- The hero headline is the only place where display + serif italic + purple accent collide on the same line. This collision is the visual identity — preserve it exactly there, do not replicate it elsewhere.
- Italic serif is reserved for short, intentional phrases (`people`, `the same either way`). Never for entire paragraphs.
- Body copy is `1rem / 1.7`. Reading line length stays at 65–75ch (`max-width: 36rem` for prose).
- Eyebrow labels: `--font-mono`, `0.75rem`, letter-spacing `0.16em`, uppercase, muted color. The shared `.eyebrow` class in `global.css` codifies this.

### Spacing

4px base, no arbitrary values:

| Step | Value |
|---|---|
| xs | `0.25rem` |
| sm | `0.5rem` |
| md | `0.75rem` |
| base | `1rem` |
| lg | `1.5rem` |
| xl | `2rem` |
| 2xl | `3rem` |
| 3xl | `4rem` |
| 4xl | `6rem` |

When in doubt, take the larger step. The aesthetic depends on generous whitespace.

### Z-Index

| Layer | Value | Use |
|---|---|---|
| Base | `0` | Normal flow |
| Sticky page chrome | `100` | Sticky nav |
| Modals | `500` | Photo lightbox |

---

## Information Architecture

| Route | Purpose | Layout Mode |
|---|---|---|
| `/` | Hero + value cards + about teaser + selected work + recent writing + photography + contact | Marketing |
| `/work` | Two-section narrative: Part one (Community work) + Part two (Engineering work) | Reading |
| `/work/[slug]` | Deep case study per project | Reading |
| `/fgc` | Extended FGC work — graphics, specific events, scene context. Currently a placeholder; Noah builds this out over time | Reading |
| `/blog` | Writing index | Reading |
| `/blog/[slug]` | Individual post | Reading |
| `/photography` | (currently part of homepage; standalone deferred) | Tool / Gallery |

**Hero on homepage is the only "marketing" surface.** Everything else is reading mode. There are no tool-mode views in the current site.

### Homepage section order

1. **Hero** — split layout: left typographic panel (headline, subtext, stats, CTAs), right photo with bleed
2. **Context strip** — dark band, three columns (Systems Thinking / Builder from Zero / Human Infrastructure)
3. **About** — quiet 2-paragraph synthesis on paper background (NOT the old frosted-glass treatment)
4. **Selected work** — 3 teaser cards, link to /work
5. **Recent writing** — 3 most recent posts, list format
6. **Photography** — 3-column grid + lightbox (preserved)
7. **Contact** — real CTA: email at full size, copy button, availability line, social icons

### When a section adds a second pane

Promote to tool mode immediately. Drop reading max-width. No tool-mode views exist today, but if /work case studies grow split layouts (e.g., timeline + detail), they fall under this rule.

---

## Mobile-First Rules

**Strict mobile parity (must hold at 375×667):**
- Homepage hero
- Sticky nav / PageNav
- Selected work teasers
- Contact footer

**Acceptable but not pixel-perfect on mobile:**
- /work story arc internals
- /work/[slug] case study pages

This split is intentional — the surfaces that decide whether someone reaches out (hero, nav, contact) are mobile-strict. Deep reading surfaces can prioritize desktop fidelity.

**Universal mobile rules:**
- No horizontal scroll at any viewport
- Touch targets ≥ 44px on all interactive elements
- Hero on 375px: headline, subtext, stats row, primary CTA visible above fold

---

## Interactive States

| State | Implementation |
|---|---|
| Hover | `color` shift to `--color-rust` for links, `opacity` shift for icons. Always `transition: color 0.2s ease` or `transition: opacity 0.2s ease` — never `transition: all` |
| Focus | `outline: 2px solid var(--color-rust); outline-offset: 2px` — never `outline: none` alone |
| Active | None unless explicitly designed for a component |
| Disabled | `opacity: 0.4; cursor: not-allowed; pointer-events: none` |

---

## CSS Architecture

- **Custom properties only for design tokens.** No hardcoded hex.
- **BEM-style class names** (`.hero__headline`, `.context-strip__column`).
- **Scoped styles first.** Component styles in the `<style>` block of the `.astro` file. Global styles (`.eyebrow`, `.serif-italic`, keyframes, reset) live in `global.css`.
- **No `!important`.**
- **No ID selectors for styling.**
- **`min-width: 0` on all flex children containing text.**
- **No animating layout properties.** Only `transform` and `opacity`.
- **No `overflow: hidden` as a lazy fix.**
- **Font sizes in `rem`.** Never `px`.

---

## Editorial Voice Rules

These govern copy across the site:

- **Lead with the human problem, then the proof.** Project descriptions never open with tech stack.
- **First person, direct.** "I built this after running these events myself" beats "A serverless solution was created."
- **Specific numbers over claims.** "80 → 200+ players" beats "grew significantly."
- **No abstract mission statements.** Avoid "transformative solutions," "questioning the status quo," "passionate about."
- **Voice check:** if a sentence could appear on any other engineer's portfolio, rewrite it.

---

## Project-Specific Overrides

*Document intentional exceptions here. Each entry must include the rule and the reason.*

- **Hero photo gradient bleed:** the right-panel photo uses a `linear-gradient(to right, var(--color-paper), transparent 20%)` overlay on its left edge, merging the typographic and photographic panels. This is the only place a hard-coded gradient is acceptable. Justified: it is the visual identity of the hero.
- **Context strip surface (`--color-context-bg #1a1815`):** slightly elevated from the `--color-paper` (#0e0d0b) background. Justified: subtle visual separation between the hero and the proof-point columns without introducing a new color.
- **Hero stats numbers in `--font-display`:** large display type used outside the headline. Justified: stats are identity-level claims; treating them with display weight reinforces their importance without prose.
- **`/work/[slug]` case study sections:** currently scaffolded with placeholder text. Do not autogenerate case study content. Leave placeholders until real content is written.

---

## Enforcement Rules (Always Active)

**Layout:**
- Reading sections: `max-width: 36rem` (~640px) for prose, centered
- Hero: split grid desktop, stacked mobile
- All `flex` containers have explicit `align-items`
- `min-width: 0` on every flex child containing text

**Design:**
- All colors via tokens
- Purple (`--color-rust`) is the only accent
- No `outline: none` without a custom focus ring
- No horizontal scroll at any viewport
- Touch targets ≥ 44px on all interactive elements
- No `transition: all`

**Voice:**
- Project copy leads with the human problem
- No abstract mission statements
- No corporate register

**Sustainability:**
- Every intentional deviation documented under Project-Specific Overrides
- No hardcoded hex outside the override list
- Editing token values updates every component that consumes them — verify before changing
