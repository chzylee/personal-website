export interface CommunityProject {
  slug: string;
  title: string;
  summary: string;
  tags: string[];
  liveUrl?: string;
}

export const communityProjects: CommunityProject[] = [
  {
    slug: 'midweek-mashers',
    title: 'Midweek Mashers',
    summary:
      'Founded and grew an online competitive gaming event series from scratch, building community infrastructure, tooling, and programming that grew offline attendance from ~70 to ~200 players.',
    tags: ['Community Building', 'Event Organization', 'Discord', 'Streaming'],
    liveUrl: 'https://midweekmelting.com',
  },
];
