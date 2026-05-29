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
      "The scene was small, talented, and culturally rough. Melty is hard to pick up when veterans have years on you, and the community didn't always make it easy for the people who tried. The problem wasn't logistics. A hard game plus a hard culture meant the scene struggled to grow, retain, and motivate players, and that capped what events could ever be. I started a various online event series engineered around format, schedule, and rules that pushed for a healthier culture, and I built Adomin to streamline operational work so organizers had more bandwidth to focus on their communities.",
    whatChanged:
      'Offline major attendance went from roughly 80 to 200+ players. Newcomers have a clear path in. Other organizers have started their own events using the same simple workflow. The scene reads as somewhere people want to be.',
    tags: ['Community', 'Event Organization', 'Discord', 'Streaming', 'Mentorship'],
    liveUrl: 'https://www.start.gg/hub/midweek-melting-1',
    iconFile: 'midweek-logo.png',
  },
];
