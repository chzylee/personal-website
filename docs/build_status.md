# Build Status — redesign/2-elements (Attempt 2: elements fair game)

STATUS: IN-PROGRESS
LOCK: PRIMARY · fable · 2026-07-13T05:10:26Z
RUN-COUNT: 1
RESUME POINTER: Branch just seeded off clean main by the PRIMARY (fable) orchestrator. No content work done yet. Dispatch the Fable worker to do the PART II §3 content changes at Attempt 2 latitude (§4: elements fair game), build, self-review, and open the PR. Start from checklist item 1.

## Attempt
Attempt 2 of 3 — `redesign/2-elements`. Latitude (runbook §4): keep tokens/type/aesthetic, but signature elements (CRT HeroScreen, constellation lattice, TV/event-reel scaffolding) MAY be repurposed, moved, or replaced if it serves the applied-AI pivot better (e.g. the CRT could carry systems instead of only FGC achievements). Justify each element change in CLAUDE.md + PR notes. Nothing beyond the honesty guardrails and CLAUDE.md voice/accessibility/mobile-strict rules is invariant here.

Branch is off clean `main` (attempts never build on each other). The TV/event-reel WIP parked on `wip/event-reel-tv` is NOT present here; it may be reintroduced only if this attempt's latitude calls for it.

## Checklist (PART II §3, shared across all attempts)
- [ ] 1. Rework positioning copy: hero identity block, roles, subtext, open-to-work pill, contact lede so SWE track record LEADS and applied AI reads as the threaded current direction. Open-to-work roles honestly span both (software engineering + applied-AI roles).
- [ ] 2. Add "what I'm building now" block naming **Ship Pipeline** and **ts-pmo** as living, in-progress systems. (REQUIRED)
- [ ] 3. Thread **/ratify** (prediction-before-reveal ownership protocol) as the through-line idea where it fits naturally.
- [ ] 4. Soft forward pointer only toward a coming case study / Ledger. Do NOT build /ledger, invent data, or promise dates.
- [ ] 5. Leave FGC content as-is (src/pages/fgc/ and FGC copy elsewhere). Do not touch.
- [ ] 6. Update CLAUDE.md on this branch to match every change (including any element repurposing this attempt makes, with justification).
- [ ] 7. Build passes: `npm run build` (astro build) + `npm run check` (astro check).
- [ ] 8. Self-review vs CLAUDE.md Enforcement Rules + §2 honesty guardrails. Run gstack /design-review if available and fix findings.
- [ ] 9. Open PR titled exactly "Site redesign — attempt 2 (elements fair game)". Set STATUS: DONE. Never merge.

## Honesty guardrails (HARD — see runbook §2)
Ongoing efforts not finished products; no trend claims; vocabulary ceiling (experiment/log/instrument/in-progress/building — never study results/findings/proven method/productivity scores); no invented metrics; NO em-dashes in visible copy. Verified applied-AI facts are ONLY those in runbook §1; invent nothing beyond it.

## Log
- 2026-07-13T05:10:26Z — PRIMARY (fable) orchestrator, cron fire 05:07:50Z. Attempt 1 confirmed DONE (PR #3 open). Active attempt = 2. Branch `redesign/2-elements` created off clean main; lock taken; RUN-COUNT=1. Dispatching Fable worker for attempt 2. Decision (unattended): proceeded to attempt 2 because attempt 1 is committed + DONE + PR-open and the prior kickoff run does attempt 1 only then exits; no lock/worker on attempt 2.
