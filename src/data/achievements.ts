// Slides shown in the hero's CRT "screen" slideshow. The screen now runs two
// channels in one reel: ACHIEVEMENTS (the proven SWE + community track record)
// and NOW BUILDING (the applied-AI systems, honestly framed as in-progress
// experiments; see the Applied-AI honesty rules in CLAUDE.md). Data-driven so
// the reel is easy to edit, reorder, or extend. Keep figures short (they render
// in large display type) and context to one line. No em-dashes (site voice rule).
export type Channel = 'achievements' | 'now';

export interface Slide {
  /** Which channel frame the CRT shows for this slide. */
  channel: Channel;
  /** Small mono category label, e.g. "Security at scale". */
  tag: string;
  /** Big display figure, e.g. "16,000+". Keep it short (a number OR a word). */
  figure: string;
  /** What the figure is, one short phrase. */
  title: string;
  /** Where / detail, one line. */
  context: string;
}

export const slides: Slide[] = [
  {
    channel: 'achievements',
    tag: 'Security at scale',
    figure: '16,000+',
    title: 'Vulnerabilities cleared',
    context: 'A backlog nobody owned, at United',
  },
  {
    channel: 'achievements',
    tag: 'Scale in production',
    figure: '300K+',
    title: 'Kafka messages a day',
    context: 'An AWS Lambda pipeline, at United',
  },
  {
    channel: 'achievements',
    tag: 'Mentorship that sticks',
    figure: 'Mastery',
    title: 'Mentored a team to work with autonomy',
    context: 'Independent problem-solvers, not task-takers',
  },
  {
    channel: 'achievements',
    tag: 'Community built',
    figure: '70 → 200+',
    title: 'Players at our major',
    context: "Melty Blood, the scene I've grown since 2024",
  },
  {
    channel: 'achievements',
    tag: 'Built to share',
    figure: 'Adopted',
    title: 'By other organizers',
    context: 'Event organization tools used in multiple communities',
  },
  {
    channel: 'now',
    tag: 'Now building',
    figure: '2 builds',
    title: 'Ship Pipeline, LLM-assisted dev',
    context: 'Staged ladder; every deliverable paired with a verifier. Ongoing',
  },
  {
    channel: 'now',
    tag: 'Now building',
    figure: 'v0 live',
    title: 'ts-pmo, long-term project ops',
    context: 'Effort → work-stream → task; daily debrief into a Work Log',
  },
  {
    channel: 'now',
    tag: 'The through-line',
    figure: '/ratify',
    title: 'Predict before the reveal',
    context: 'Log predicted / surprised / no-opinion; surprise rate as a comprehension signal',
  },
];
