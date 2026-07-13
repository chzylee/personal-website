# CLAUDE.md — endotlee.com (Noah Lee's personal site)

## Site Purpose

This site exists to communicate one statement and back it with proof:

> **My existing experience is SWE. My current work is applied AI. I'm moving toward applied AI while still a SWE.**

The spine (repositioned 2026-07): the **SWE track record leads** (full-stack, AWS, ex-United Airlines, security at scale) because the primary audience is hiring, and **applied AI is the threaded current direction**: a subtitle present throughout the content, never the loud headline. The applied-AI work is surfaced honestly as living, in-progress systems (Ship Pipeline, ts-pmo), with **/ratify** (a prediction-before-reveal ownership protocol) as the through-line idea: keeping human ownership and accountability of work that AI did. The FGC / community work is *proof of the same instinct*, not a co-headline, and stays exactly as it is.

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
- The hero headline is the only place where display + serif italic + purple accent collide on the same line. This collision is the visual identity — preserve it exactly there, do not replicate it elsewhere. The headline is now a **rotating reel** (`Hero.astro`): each line is a practice Noah brings to a team, where the **leading gerund verb is the serif-italic purple accent** (`*Securing*` the path to production · `*Getting*` separate teams to ship together · `*Training*` engineers for ownership · `*Owning*` every change AI writes · `*Designing*` directly with customers) and the rest is Bebas display. The `Owning` line is the applied-AI through-line (human ownership of AI work) threaded into the signature motion. The verb-as-accent gives the collision a stable position while the line swaps. The reel content is value/practice (conversation starters); the hard numbers live in the proof cards below.
- Italic serif is reserved for short, intentional phrases (the reel verbs, `The same instinct`, `not`). Never for entire paragraphs. The reel verbs carry descenders (`Getting`, `Engineering`, `Designing`); the reel reserves `padding-bottom` so they don't clip at `line-height: 1.0`.
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
| `/` | Hero + achievements CRT + about + "what I'm building now" systems block + selected work + recent writing + photography + contact | Marketing |
| `/work` | Two-section narrative: Part one (Community work) + Part two (Engineering work) | Reading |
| `/work/[slug]` | Deep case study per project | Reading |
| `/fgc` | Extended FGC work — graphics, specific events, scene context. Currently a placeholder; Noah builds this out over time | Reading |
| `/blog` | Writing index | Reading |
| `/blog/[slug]` | Individual post | Reading |
| `/photography` | (currently part of homepage; standalone deferred) | Tool / Gallery |

**Hero on homepage is the only "marketing" surface.** Everything else is reading mode. There are no tool-mode views in the current site.

### Homepage section order

1. **Hero** — text hero on `--color-paper` over an **interactive lattice backdrop** (no photo / no slideshow; the slideshow was cut for feeling weak). Left-aligned, vertically centered, generous whitespace. Stack, in order: **identity block** (circular face avatar + a large **Noah Lee** name with the role labels `Full-Stack Engineer` / `Building Applied AI` stacked vertically to its right (the first label is the proven identity and carries the accent; the second is the threaded current direction, phrased as an activity in progress rather than a claimed specialist title), divided by a hairline, as an editorial nameplate; the name is set large because it is short but capped via `clamp()` UNDER the reel's scale so the value-prop headline stays the biggest moment; reuses `src/assets/photo.jpg`, the nav avatar, enlarged; United lives in the subtext and proof, not here), **rotating proof reel as the H1** (see below), two-line subtext (line 1: the 7-year SWE track record: AWS, security at scale, ex-United; line 2, bolded: current work is applied AI systems that keep a human accountable for what ships), **Open-to-work status pill** (pulsing dot + `software & applied-AI roles` + location), CTA row (`Get in touch` primary, `See the work` secondary). The reel is the headline; the **identity block answers "who is this" in under a second** (face + name + role) and is the fixed literal anchor, so clarity never depends on the animation. It leads the stack deliberately: the name was previously only in the small nav wordmark, which read as a "who am I looking at" gap. On desktop the right column holds a **CRT achievements screen** (`HeroScreen.astro`, see Project-Specific Overrides) that fills what used to be dead right-side space; a **toned-down lattice** sits behind everything as ambient texture. On mobile the screen is hidden and the hero is the type stack alone.
2. **Achievements (mobile relocation of the hero CRT)** — there is no separate desktop proof section. On desktop the hero's CRT screen carries the achievement figures. On mobile (`< 1024px`), where the hero's right-column TV is hidden, the same `HeroScreen` CRT renders as a `.hero-achievements` section between the hero and About (a second `.crt` instance; the component's script wires every instance and drives whichever is in view, so exactly one is visible per viewport). Single source of truth: `src/data/achievements.ts` (its AI slide names Ship Pipeline and /ratify, framed in progress). A former `ContextStrip` proof-cards section lived in this slot ("Let me show my work" + three figure cards) but was **removed as redundant** with the CRT (the same figures appeared twice, back to back); recover it from git history if ever needed.
3. **About** — quiet synthesis on paper background: display lede (with the serif-italic collision) + three short body paragraphs. The final paragraph states the ownership standard for AI-assisted work and bridges to the systems block below. No eyebrow.
4. **What I'm building now** — compact systems block on `--color-paper-soft` (`#now`, `.now` in `index.astro`): display heading + a mono `In progress · as of <month year>` stamp (keep this date current when editing), a short intro (track record = SWE, current work = applied AI, both open experiments), a two-item hairline list naming **Ship Pipeline** and **ts-pmo** with one-line honest descriptions, a through-line paragraph on **/ratify** (mono accent on the protocol name), and a muted soft pointer to a future case study (no route, no dates). All copy governed by the Applied-AI honesty rules above. No eyebrow (the heading carries it).
5. **Selected work** — 3 teaser cards, link to /work
6. **Recent writing** — 3 most recent posts, list format
7. **Photography** — 3-column grid + lightbox (preserved)
8. **Contact** — real CTA: lede (`Open to software engineering & applied-AI roles`), availability/location line, email at full size + copy button, Résumé + LinkedIn pill links, social icons. No eyebrow.

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
- **Eyebrow restraint.** The `.eyebrow` kicker is a deliberate system primitive, not a per-section reflex. Use it sparingly — currently only the hero credential line and the `Selected work` / `Writing` wayfinding labels. Do not add an eyebrow above every section; the headline alone usually carries it. Rough cap: no more than ~1 eyebrow per 3 sections.
- **Decorative dots are rationed.** A colored status dot is allowed only when it conveys real state. The single justified use is the hero **Open-to-work** pulse. Don't sprinkle dots on lists, nav, or every status line.

---

## Project-Specific Overrides

*Document intentional exceptions here. Each entry must include the rule and the reason.*

- **Rotating headline reel:** the hero H1 is a JS-driven rotating reel (`Hero.astro` `<script>`), ~3s per line, animating `opacity`/`transform` only. All items share one CSS-grid cell so the box is as tall as the tallest line and swaps never reflow the page. Progressive enhancement: item 0 carries `.is-active` in the HTML, so with no JS (or under `prefers-reduced-motion`, which the script checks via `matchMedia` and skips) the hero shows a complete, strong first line. The cycling items are `aria-hidden`; the H1 has an `aria-label` summarizing all five for screen readers. Justified: the user wanted animated interest that doubles as proof of front-end craft; the reel is the site's signature motion.
- **Interactive lattice backdrop (hero):** behind the hero sits a deliberately *subtle* canvas dot grid (`Hero.astro` `.hero__lattice` + `<script>`), pure ambient texture, NOT the focal point. It is near-invisible at rest; within a spotlight radius around the pointer, nodes gather a little (gentle magnetic pull), brighten faintly toward `--color-rust`, and softly "wire up" with low-alpha links between lit neighbours. A soft purple `.hero__bloom` (radial gradient via `color-mix` on `--color-rust`) tracks the same eased focus point for depth. When the pointer is idle (or on touch / no-pointer devices) the focus point slowly auto-roams. The canvas reads brand colors from the CSS tokens at runtime (no hardcoded hex). Performance: `devicePixelRatio` capped at 2, typed-array node store allocated on resize (not per frame), rAF paused via `IntersectionObserver` when off-screen and via `visibilitychange` when the tab is hidden. Animates only canvas draws + a compositor `transform` on the bloom. Honors `prefers-reduced-motion`: renders a single static frame, no loop. This is the one allowed exception to "No `overflow: hidden` as a lazy fix" (the hero clips the bloom on purpose). History: an earlier version made the lattice the loud full-bleed focal element with a hidden FGC-input mini-game; that read as cluttered ("over everything"), so the lattice was demoted to texture and the storytelling moved to the CRT screen (below). Alternative hero directions are catalogued in the gitignored `HERO-DIRECTIONS.local.md`.
- **Hero CRT screen (`HeroScreen.astro`):** the desktop right column holds a retro CRT / arcade "screen" running a slideshow of career highlights (data-driven from `src/data/achievements.ts`). This is the hero's primary right-side anchor and "wow" (it replaced the formerly-dead negative space). Chrome: a cabinet bezel, a 4:3 screen with scanline + vignette + glass overlays (the scanline `repeating-linear-gradient` is an intentional CRT effect on a `pointer-events: none` overlay, NOT the banned decorative-stripe pattern), a subtle phosphor flicker, a top **trophy + `ACHIEVEMENTS` / `NN / NN` counter** frame, and a bottom `P1 NOAH` nameplate. Slides crossfade (opacity + a touch of `filter: blur` to bridge the channel-change) and auto-advance every 5s, pausing on hover/focus and when off-screen. **Controls:** on-screen prev/next + dot tabs, keyboard `←`/`→` (gated to when the screen is in view; these keys don't scroll), and a **game controller** via the Gamepad API as an easter egg, with edge-debounced input and a controller indicator (`.crt.is-pad` lights the pad icon + `P1` nameplate). Direction is read from the standard d-pad buttons (14/15), the left analog stick (axis 0), AND **POV-hat axes**: fight sticks (e.g. a HORI stick) report the stick as a hat on a high axis (axis 9) whose neutral sits outside `[-1, 1]` (~1.286). The poll auto-detects a hat by that out-of-range neutral, then decodes only confirmed hat axes (so analog triggers resting at -1 are never mistaken for a direction). a11y: `role="group"` + `aria-roledescription="carousel"`, decorative chrome `aria-hidden`, an `aria-live` region announces the active slide, all controls are real focusable buttons. Honors `prefers-reduced-motion` (no auto-advance/flicker; manual nav still works). **Mobile (`< 1024px`): the hero's TV is hidden** to keep the hero lean (headline/subtext/pill/CTA above the fold per the mobile-strict rule); the same CRT renders instead as a `.hero-achievements` section between the hero and About (a second `HeroScreen` instance, since the desktop one is `display:none` there). The component's script wires every `.crt` on the page and drives whichever is in view, so exactly one is interactive per viewport. To edit the slides, change `achievements.ts`. **Hidden "plug in your controller" hint:** a `.hero__controller-hint` label sits above the CRT, `opacity: 0` at rest; the lattice `<script>` raises its opacity by proximity as the cursor-light passes near it (computed against the hint's center, measured on resize), so it's a discoverable nudge toward the gamepad easter egg, not a permanent label. `aria-hidden` (the always-visible `← →` + pad icon in the CRT controls already conveys controller support accessibly); hidden on mobile with the screen; stays hidden under reduced motion (the render loop runs once, far from the hint).
- **Open-to-work status pill + pulse:** the hero shows an availability pill with a single pulsing dot (`.hero__status-dot::after`, animating `transform`/`opacity` only). Justified: active job search — availability is identity-level information and the dot conveys real state. This is the ONLY decorative dot on the site (see Voice rules). Honors `prefers-reduced-motion` via the global reduce block.
- **Display figures in the CRT achievements reel:** the hero CRT slides use large purple display figures (`16,000+`, `300K+`, `Top 32`, etc.) outside the headline. Justified: the figures are the proof; display weight makes them scannable in the 5-second read. (A former `ContextStrip` proof-cards section also used display figures in an asymmetric feature-plus-two layout; it was removed as redundant with the CRT, see the homepage section order.)
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
