export interface CommunityProject {
  slug: string;
  title: string;
  /** Short card line — leads with outcome. */
  oneLine: string;
  /** First-person felt experience of why this needed to exist. */
  whyBuilt: string;
  /** Outcome and proof — concrete numbers where they exist. */
  whatChanged: string;
  tags: string[];
  liveUrl?: string;
  iconFile?: string;
}

export const communityProjects: CommunityProject[] = [
  {
    slug: 'midweek-mashers',
    title: 'Midweek Mashers',
    oneLine: 'Grew Melty Blood scene from a small community to seeing 200+ players at majors.',
    whyBuilt:
      'The scene was small, talented, and structurally stuck — no consistent online play, no clear on-ramp for newcomers, no reliable cadence between offline majors. I started running a weekly online series to give it spine, then kept building tooling and culture around it.',
    whatChanged:
      'Offline major attendance went from roughly 80 to 200+ players, sustained. Newcomers have a clear path in. Other organizers carry parts of the series now and have started their own events using the same template. The scene reads as somewhere people want to be, not just somewhere old heads remain.',
    tags: ['Community', 'Event Organization', 'Discord', 'Streaming', 'Mentorship'],
    liveUrl: 'https://midweekmelting.com',
    iconFile: 'midweek-logo.png',
  },
];
