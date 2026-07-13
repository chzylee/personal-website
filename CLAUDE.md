# CLAUDE.md — endotlee.com (Noah Lee's personal site)

## Site Purpose

This site exists to communicate one statement and back it with proof:

> **My existing experience is SWE. My current work is applied AI. I'm moving toward applied AI while still a SWE.**

The spine (repositioned 2026-07, attempt 3 "open reinvention"): the **SWE track record leads** (full-stack, AWS, ex-United Airlines, security at scale) because the primary audience is hiring, and **applied AI is the threaded current direction**: present throughout the content as the current work, never the loud headline. The applied-AI work is surfaced honestly as living, in-progress systems (Ship Pipeline, ts-pmo), with **/ratify** (a prediction-before-reveal ownership protocol) as the through-line idea: keeping human ownership and accountability of work that AI did. The FGC / community work is *proof of the same instinct*, not a co-headline, and stays exactly as it is.

**Active job search.** Noah is doing outreach now. The homepage must let a recruiter grasp his level AND how to reach him in ~5 seconds. An explicit **Open to work** state (roles + location + remote-open) is part of the design, not an afterthought. Open-to-work roles honestly span both tracks: software engineering AND applied-AI roles.

**Audiences (in priority order):**
1. Software recruiters and hiring managers (full-stack / solutions / applied-AI roles)
2. Freelance clients / small business owners
3. FGC tournament organization staff (e.g., EVO-tier)

**What the site must not feel like:** a template, a generic dark-mode dev portfolio, generic SaaS slop, a résumé printed to HTML.
**What it must feel like:** an editorial piece by someone with a point of view.

> **Note:** older site messages were *"I build systems for people"* and later *"I ship and secure what teams actually need, from inside the workflow out."* The current homepage leads with the SWE-track-record-plus-applied-AI framing above. Keep this section as the source of truth if the rendered copy and this doc ever disagree.

### Applied-AI honesty rules (HARD, always active)

The applied-AI systems are open experiments, not products. All copy about them must obey:
- **Ongoing efforts, not finished products.** Version-stamped, "as of"-dated, or explicitly in progress. Never imply completion, a shipped product, or customers for the AI work.
- **No trend claims.** Currently 2 builds / 7 ratification-log items, below the owner's own threshold (needs at least 5 builds / 100 items). Nothing "improves", "rises", or "bends the right way". Any figure is "early telemetry of an open experiment".
- **Vocabulary ceiling.** Use: experiment, log, instrument, in progress, building. Never: study results, findings, proven method, productivity/throughput scores.
- **No invented metrics.** The verified facts: Ship Pipeline (LLM-assisted dev system, staged ladder, every deliverable paired with a verifier, run on 2 builds: Runway and Rotato, ongoing); ts-pmo (long-term project ops, effort → work-stream → task tracking with behavioral and outcome accountability, v0 live, daily work captured via a debrief step into a Work Log); /ratify (state your expectation about an AI change before the reveal, log predicted / surprised / no-opinion, surprise rate as a comprehension signal). Nothing beyond these.
- **A `/ledger` route is planned but its data infra does not exist.** Soft forward pointer only: no route, no numbers, no dates promised.

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
| `--color-paper-soft` | `#1a1815` | Elevated surface (proof-point cards, contact footer) |
| `--color-ink` | `#f2ede6` | Primary text — warm off-white |
| `--color-ink-muted` | `#8a8480` | Secondary text |
| `--color-rust` | `#9b6dff` | Single accent (electric purple) — used sparingly |
| `--color-rule` | `#2a2723` | Dividers, hairlines, borders |
| `--color-context-bg` | `#1a1815` | Legacy (was the dark context-strip band; the strip is now the proof-points section on `--color-paper`) |
| `--color-context-ink` | `#f2ede6` | Legacy context-strip text token |
| `--color-context-muted` | `#8a8480` | Legacy context-strip muted token |

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
- The hero headline is the only place where display + serif italic + purple accent collide on the same line. This collision is the visual identity — preserve it exactly there, do not replicate it elsewhere. Attempt 3 makes the headline a **single static statement** (`Hero.astro`), not a rotating reel: `Seven years shipping and securing software` in Bebas display with `end to end.` as the serif-italic purple accent. A confident, fixed positioning line (SWE track record leads) reads instantly in the 5-second scan and does not depend on JS or motion; the applied-AI direction is threaded in the subtext, and the proof is the track-record stat strip beneath it. (Attempts 1 and 2 used a JS rotating reel; attempt 3 deliberately retires it for a calmer, editorial "working in the open" identity.)
- Italic serif is reserved for short, intentional phrases (the headline accent `end to end`, the About `game`). Never for entire paragraphs. Serif descenders reserve a hair of `padding-bottom` so they don't clip at `line-height: 1.0`.
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
| `/` | Hero (static statement + track-record strip + build-log panel) + about + "what I'm building now" systems block + selected work + recent writing + photography + contact | Marketing |
| `/work` | Two-section narrative: Part one (Community work) + Part two (Engineering work) | Reading |
| `/work/[slug]` | Deep case study per project | Reading |
| `/fgc` | Extended FGC work — graphics, specific events, scene context. Currently a placeholder; Noah builds this out over time | Reading |
| `/blog` | Writing index | Reading |
| `/blog/[slug]` | Individual post | Reading |
| `/photography` | (currently part of homepage; standalone deferred) | Tool / Gallery |

**Hero on homepage is the only "marketing" surface.** Everything else is reading mode. There are no tool-mode views in the current site.

### Homepage section order

1. **Hero** — text hero on `--color-paper` over an **interactive lattice backdrop** (ambient texture; no photo / no slideshow). Left-aligned, vertically centered, generous whitespace. Left column stack, in order: **identity block** (circular face avatar + a large **Noah Lee** name with the role labels `Full-Stack Engineer` / `Building Applied AI` stacked vertically to its right (the first is the proven identity and carries the accent; the second is the threaded current direction, phrased as an activity in progress rather than a claimed specialist title), divided by a hairline, as an editorial nameplate; reuses `src/assets/photo.jpg`, the nav avatar, enlarged; United lives in the subtext and proof, not here), **static H1 statement** (`Seven years shipping and securing software end to end.`, the SWE track record leading), **two-part subtext** (line 1: AWS, security at scale, ex-United; the bolded clause threads the current applied-AI direction: systems that keep a human accountable for what ships), **track-record stat strip** (three verified figures: `16,000+` vulnerabilities cleared, `300K+` Kafka msgs a day on AWS, `7 yrs` shipping end-to-end), **Open-to-work status pill** (pulsing dot + `software & applied-AI roles` + location), CTA row (`Get in touch` primary, `See what I'm building` secondary → `#now`). The **identity block answers "who is this" in under a second** (face + name + role). On desktop the right column holds the **build-log panel** (the signature device; see Project-Specific Overrides) that names the applied-AI systems as an in-progress, "as of"-dated log; a **toned-down lattice** sits behind everything as ambient texture. On mobile the build-log panel is hidden and the hero is the type stack alone (the `#now` section below carries the systems).
2. **What I'm building now** — the substantive read of the applied-AI direction, on `--color-paper-soft` (`#now`, `.now` in `index.astro`): display heading + a mono `In progress · as of <month year>` stamp (keep this date current when editing), a short intro (track record = SWE, current work = applied AI, both open experiments), a two-item hairline list naming **Ship Pipeline** (`building · 2 builds`) and **ts-pmo** (`v0 live`) with honest one-line descriptions, a through-line paragraph on **/ratify** (mono accent on the protocol name), and a muted soft pointer to a future case study + `/ledger` view (no route, no dates). All copy governed by the Applied-AI honesty rules above. The hero's build-log panel is the compact live tease of these systems (desktop) and is hidden on mobile, so this section is the single full read on small screens; the two are complementary depths, not redundant. No eyebrow (the heading carries it).
3. **About** — quiet synthesis on paper background: display lede (with the serif-italic collision) + short body paragraphs and the community photo. FGC / community framing (`For the love of the game`) stays exactly as it is. No eyebrow.
4. **Selected work** — 3 teaser cards, link to /work
5. **Recent writing** — 3 most recent posts, list format
6. **Photography** — 3-column grid + lightbox (preserved)
7. **Contact** — real CTA: lede (`Open to software & applied-AI roles`, matching the pill wording), availability/location line, email at full size + copy button, Résumé + LinkedIn pill links, social icons. No eyebrow.

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
- Hero on 375px: headline, subtext, open-to-work pill, primary CTA visible above fold

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
- **No em-dashes or decorative en-dashes in visible copy.** Em-dash (`—`) is the #1 "AI wrote this" tell; this site does not use it. Restructure with a period, comma, colon, or parentheses. Use a plain hyphen (`-`) for ranges (`20-25`, not `20–25`) and compounds. Directional arrows (`→`, `↔`) are fine — they carry meaning. This applies to headlines, body, labels, buttons, captions, and `<title>` / meta description.
- **Eyebrow restraint.** The `.eyebrow` kicker is a deliberate system primitive, not a per-section reflex. Use it sparingly — currently only the `Selected work` / `Writing` wayfinding labels (the hero uses the nameplate role labels, and `#now` lets its heading carry the section). Do not add an eyebrow above every section; the headline alone usually carries it. Rough cap: no more than ~1 eyebrow per 3 sections.
- **Decorative dots are rationed.** A colored status dot is allowed only when it conveys real state. The single justified use is the hero **Open-to-work** pulse. Don't sprinkle dots on lists, nav, or every status line.

---

## Project-Specific Overrides

*Document intentional exceptions here. Each entry must include the rule and the reason.*

- **Static hero headline (attempt 3):** the hero H1 is a single, fixed statement (`Hero.astro`), NOT a rotating reel. `Seven years shipping and securing software` in Bebas display with `end to end.` as the serif-italic purple accent (the identity collision, held to one stable line). Justified: attempt 3's "open reinvention" retires the JS reel used by attempts 1 and 2 in favor of a calmer, more editorial "working in the open" identity; a static SWE-first statement reads instantly in the 5-second scan, needs no JS or motion to be complete, and lets the applied-AI direction thread quietly through the subtext and the build-log panel instead of competing for the headline. The reel component/behavior can be recovered from git history (or attempts 1/2) if ever wanted.
- **Build-log panel (hero signature device, attempt 3):** the desktop right column holds a **build-log card** (`Hero.astro` `.hero__log` / `.buildlog`) styled like a terminal / changelog window: a header bar (`~/now-building` path + a mono `log` tag, on a hairline, no fake traffic-light dots so the decorative-dot rule stays clean), a `In progress · as of <month year>` meta line, and a hairline list of the applied-AI systems (`Ship Pipeline` / `ts-pmo` / `/ratify`) each with a mono name, a mono accent status stamp (`building`, `v0 live`, `instrument`), and a one-line description, closing on a muted soft pointer to a future case study + `/ledger` view. This is the hero's right-side anchor and "wow", replacing the CRT that attempts 1 and 2 use. It is on-thesis: the through-line of the applied-AI work is keeping a human accountable for what AI ships, so the site presents that work as an honest, logged, in-progress record rather than a finished product. All copy obeys the Applied-AI honesty rules (in-progress, "as of"-dated, status stamps are counts/version labels never invented metrics, vocabulary ceiling respected). **Mobile (`< 1024px`): the panel is `display: none`** to keep the hero lean (headline/subtext/pill/CTA above the fold per the mobile-strict rule); the `#now` section below is the single full read there. It is a real `<aside aria-label="What I'm building now">` with genuine content (not decorative chrome), so no ARIA gymnastics are needed. `HeroScreen.astro` + `src/data/achievements.ts` (the retired CRT + its data) are left unused on disk and recoverable; they are no longer imported.
- **Interactive lattice backdrop (hero):** behind the hero sits a deliberately *subtle* canvas dot grid (`Hero.astro` `.hero__lattice` + `<script>`), pure ambient texture, NOT the focal point. It is near-invisible at rest; within a spotlight radius around the pointer, nodes gather a little (gentle magnetic pull), brighten faintly toward `--color-rust`, and softly "wire up" with low-alpha links between lit neighbours. A soft purple `.hero__bloom` (radial gradient via `color-mix` on `--color-rust`) tracks the same eased focus point for depth. When the pointer is idle (or on touch / no-pointer devices) the focus point slowly auto-roams. The canvas reads brand colors from the CSS tokens at runtime (no hardcoded hex). Performance: `devicePixelRatio` capped at 2, typed-array node store allocated on resize (not per frame), rAF paused via `IntersectionObserver` when off-screen and via `visibilitychange` when the tab is hidden. Animates only canvas draws + a compositor `transform` on the bloom. Honors `prefers-reduced-motion`: renders a single static frame, no loop. This is the one allowed exception to "No `overflow: hidden` as a lazy fix" (the hero clips the bloom on purpose). The lattice is retained across attempts as shared ambient backdrop; attempt 3 kept its motion but dropped the controller-hint proximity logic (the gamepad easter egg was part of the retired CRT). Alternative hero directions are catalogued in the gitignored `HERO-DIRECTIONS.local.md`.
- **Open-to-work status pill + pulse:** the hero shows an availability pill with a single pulsing dot (`.hero__status-dot::after`, animating `transform`/`opacity` only). Justified: active job search — availability is identity-level information and the dot conveys real state. This is the ONLY decorative dot on the site (see Voice rules). Honors `prefers-reduced-motion` via the global reduce block.
- **Display figures in the hero track-record strip:** the hero left column carries a `<dl>` stat strip with large purple display figures (`16,000+`, `300K+`, `7 yrs`) outside the headline. Justified: the figures are the proven-SWE proof; display weight makes them scannable in the 5-second read. All three are verified facts stated elsewhere on the site (no invented metrics). The applied-AI status stamps in the build-log panel and `#now` section are counts/version labels (`2 builds`, `v0 live`), never performance figures.
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
- No em-dashes / decorative en-dashes in visible copy (hyphen for ranges)
- Eyebrows rationed (~1 per 3 sections), decorative dots rationed (only the hero open-to-work pulse)

**Sustainability:**
- Every intentional deviation documented under Project-Specific Overrides
- No hardcoded hex outside the override list
- Editing token values updates every component that consumes them — verify before changing
