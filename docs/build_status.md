# Build Status — redesign/1-preserve (Attempt 1: preserve identity)

STATUS: IN-PROGRESS
LOCK: PRIMARY · fable · 2026-07-13T04:49:05Z
RUN-COUNT: 1
RESUME POINTER: §3 content changes 1-6 done and pushed (commit 979e300 + this one). Build + check green after content changes. Remaining: self-review vs Enforcement Rules + §2 (item 8, incl. /design-review if available), then open the PR (item 9).

## Attempt
Attempt 1 of 3 — `redesign/1-preserve`. Latitude: preserve the editorial dark/purple identity, type system, and every signature element (CRT HeroScreen, constellation lattice, TV/event-reel scaffolding). Rework only copy, section content/order, IA, and ADD the "what I'm building now" systems block within that language. Nothing signature removed.

## Checklist (PART II §3, shared across all attempts)
- [x] 1. Rework positioning copy: hero identity block, roles, subtext, open-to-work pill, contact lede so SWE track record LEADS and applied AI reads as the threaded current direction. Open-to-work roles honestly span both (software engineering + applied-AI roles). (Hero.astro roles/reel/subtext/pill; index.astro title/description/contact lede; About.astro ownership paragraph; achievements.ts AI slide.)
- [x] 2. Add "what I'm building now" block naming **Ship Pipeline** and **ts-pmo** as living, in-progress systems. (REQUIRED) (`#now` section in index.astro, between About and Selected work, as-of dated.)
- [x] 3. Thread **/ratify** (prediction-before-reveal ownership protocol) as the through-line idea where it fits naturally. (Hero reel "Owning every change AI writes"; About ownership sentence; now-block through-line paragraph; CRT AI slide context.)
- [x] 4. Soft forward pointer only toward a coming case study / Ledger. Do NOT build /ledger, invent data, or promise dates. (Muted closing line of the now block; no route, no dates, no numbers.)
- [x] 5. Leave FGC content as-is (src/pages/fgc/ and FGC copy elsewhere). Do not touch. (No FGC file edited; About/community copy untouched except the AI paragraph.)
- [x] 6. Update CLAUDE.md on this branch to match every change (Site Purpose spine + Applied-AI honesty rules + homepage section order + reel/roles/contact descriptions + IA table).
- [x] 7. Build passes: `npm run build` (astro build) + `npm run check` (astro check). (0 errors, 0 warnings after content changes.)
- [x] 8. Self-review vs CLAUDE.md Enforcement Rules + §2 honesty guardrails. Ran gstack /design-review (diff-aware, homepage, desktop 1280 + mobile 375): 3 findings, all fixed and verified with before/after screenshots. FINDING-001: hero primary CTA never revealed at 375x667 (reveal.ts -10% rootMargin clipped it; above-the-fold elements now reveal on load per the script's documented intent). FINDING-002: now-block intro said "Two of them" with exactly two systems listed; now "Both". FINDING-003: contact lede split "applied-AI" across lines; now matches the pill wording. No console errors; no horizontal scroll at 375; tokens-only CSS; no em-dashes in visible copy (grep-verified).
- [ ] 9. Open PR titled exactly "Site redesign — attempt 1 (preserve identity)". Set STATUS: DONE. Never merge.

## Honesty guardrails (HARD — see runbook §2)
Ongoing efforts not finished products; no trend claims; vocabulary ceiling (experiment/log/instrument/in-progress/building — never study results/findings/proven method/productivity scores); no invented metrics; NO em-dashes in visible copy. Verified applied-AI facts are ONLY those in runbook §1; invent nothing beyond it.

## Log
- 2026-07-13T04:49:05Z — Manual kickoff (PRIMARY, worker=fable). Branch seeded off clean main. Lock taken. Dispatching first Fable worker for attempt 1.
- 2026-07-13T04:57Z — Fable worker run 1: all §3 content changes done (items 1-7). Judgment calls: second role label = "Building Applied AI" (activity, not a claimed title); reel swaps "Engineering trustworthy AI workflows" for "Owning every change AI writes"; now-block placed after About on --color-paper-soft (keeps section alternation, About's AI paragraph bridges into it); title = "Noah Lee: Full-Stack Engineer, Building Applied AI Systems". Note: this branch is off clean main, so the TV/event-reel WIP (parked on wip/event-reel-tv) is not present here; nothing signature that exists on this branch was removed. Next: self-review + design review, then PR.
