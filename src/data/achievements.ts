// Highlights shown in the hero's CRT "screen" slideshow. Data-driven so the
// reel is easy to edit, reorder, or extend. Keep figures short (they render in
// large display type) and context to one line. No em-dashes (site voice rule).
export interface Achievement {
  /** Small mono category label, e.g. "Security at scale". */
  tag: string;
  /** Big display figure, e.g. "16,000+". Keep it short (a number OR a word). */
  figure: string;
  /** What the figure is, one short phrase. */
  title: string;
  /** Where / detail, one line. */
  context: string;
}

export const achievements: Achievement[] = [
  {
    tag: 'Security at scale',
    figure: '16,000+',
    title: 'Vulnerabilities cleared',
    context: 'A backlog nobody owned, at United',
  },
  {
    tag: 'Mentorship that sticks',
    figure: 'Mastery',
    title: 'Mentored a team to work with autonomy',
    context: 'Independent problem-solvers, not task-takers',
  },
  {
    tag: 'AI, done accountably',
    figure: 'Accountable',
    title: 'AI accelerates, I own what ships',
    context: 'Ship Pipeline and /ratify, in progress',
  },
  {
    tag: 'Community built',
    figure: '70 → 200+',
    title: 'Players at our major',
    context: "Melty Blood, the scene I've grown since 2024",
  },
  {
    tag: 'Built to share',
    figure: 'Adopted',
    title: 'By other organizers',
    context: 'Event organization tools used in multiple communities',
  },
];
