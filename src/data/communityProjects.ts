export interface CommunityProject {
  slug: string;
  title: string;
  summary: string;
  tags: string[];
  liveUrl?: string;
  iconFile?: string;
}

export const communityProjects: CommunityProject[] = [
  {
    slug: 'midweek-mashers',
    title: 'Midweek Mashers',
    summary:
      'Founded an online competitive gaming community hub, building tooling to streamline the event experience and running multiple event series to support and grow the scene for a niche, old game. As the online community grew, attendance at major offline events increased from under 100 players to over 200 at large tournaments.',
    tags: ['Community Building', 'Event Organization', 'Discord', 'Streaming'],
    liveUrl: 'https://midweekmelting.com',
    iconFile: 'midweek-logo.png',
  },
];
