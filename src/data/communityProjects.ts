export interface CommunityProject {
  slug: string;
  title: string;
  /** Short card line — leads with outcome. */
  oneLine: string;
  /** First-person felt experience of why this needed to exist. Used on the /work index card. */
  whyBuilt: string;
  /** Outcome and proof — concrete numbers where they exist. Used on the /work index card. */
  whatChanged: string;
  tags: string[];
  liveUrl?: string;
  iconFile?: string;
}

export const communityProjects: CommunityProject[] = [
  {
    slug: 'midweek-mashers',
    title: 'Midweek Mashers',
    oneLine: 'Grew a niche, insular Melty Blood scene into a sustained community newcomers can break into.',
    whyBuilt:
      "The scene was small, talented, and culturally rough. Melty is hard to pick up when veterans have years on you, and the community didn't always make it easy for the people who tried. The problem wasn't logistics. A hard game plus a hard culture meant the scene struggled to grow, retain, and motivate players, and that capped what events could ever be. I started a various online event series engineered around format, schedule, and rules that pushed for a healthier culture, and I built Adomi-san to streamline operational work so organizers had more bandwidth to focus on their communities.",
    whatChanged:
      'The scene grew from small and insular into something sustained: average turnout at the weekly online events climbed from 20-25 to 35, and four new event series launched on the same tools and workflow. Newcomers have a clear path in. The scene reads as somewhere people want to be.',
    tags: ['Community', 'Event Organization', 'Discord', 'Streaming', 'Mentorship'],
    iconFile: 'midweek-logo.png',
  },
];
