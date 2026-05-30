import type { ShowcaseItem } from './types';

export interface CommunityPageData {
  /** Eyebrow label above the intro in the masthead. */
  introLabel: string;
  /** Page-opening body copy (right column of masthead). */
  intro: string;
  items: ShowcaseItem[];
}

export const midweekMashers: ShowcaseItem[] = [
  {
    label: 'Monthly Tournament Series',
    title: '[ The Flagship Monthly ]',
    meta: '[ Competition · Cadence · Culture ]',
    body:
      "Melty has always had a DIY aesthetic reflecting elements of the internet culture roots of the community for this doujin fighter, and tournaments did not follow a predictable schedule. I started Midweek Melting to create a reliable recurring tourney series to foster competition while maintaining Melty's unique cultural vibe. Midweeks are a blend of competitive and casual meant to capture the experience of grinding a niche game on a Wednesday night.",
    imageFile: 'midweek-melting.png',
    imageAlt:
      'Midweek Melting logo: emoji styled like character Nanaya Shiki and WordArt-style text reading "Midweek Melting".',
  },
  {
    label: 'Reach New Heights',
    title: '[ The "Ascension" Series ]',
    meta: '[ Fresh standards for new and growing players ]',
    body:
      '"Beginner" standards are difficult to define without bias, and opinionated standards can be demotivating. Melt Your Blood is a monthly "Ascension" bracket series to facilitate recurring competition amongst players striving to "ascend" to high-level play. Qualifications are based in performance in large, densely-competitive tournaments such as making Top 32 amidst 217 entrants at Combo Breaker 2026, setting clear goals to grind for to promote healthy growth and achievement.',
    imageFiles: ['myb.png', 'myb-match.png'],
    imageAlt:
      "Melt Your Blood graphics with style inspired by Denzel Curry's \"Melt My Eyez See Your Future\" album art: a stylized melting eyeball and a match screenshot with a similarly stylized overlay reading \"Melt Your Blood\".",
  },
  {
    label: 'Fight For Your Friends',
    title: '[ Telling Community Stories ]',
    meta: '[ Showcasing the people that make the scene special ]',
    body:
      "Melty Hoops 3-on-3 is a team exhibition series where I work with the community to curate teams. Teams can design and advise on portraits to represent the team and each player picks a sprite of their character to represent them on the scoreboard. Between matches, players get a chance to hop in the commentary booth, talk trash, and even talk over their matches if they want. It's the Melty Blood version of street ball.",
    imageFiles: ['melty-hoops.png', 'melty-hoops-scoreboard.png', 'melty-hoops-match.png'],
    imageAlt:
      'Melty Hoops graphics featuring character sprites and portraits designed by teams themselves with a stream layout showing off the players.',
  }
];

