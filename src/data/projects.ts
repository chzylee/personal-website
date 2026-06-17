export interface Project {
  title: string;
  /** Short card line — leads with the human problem solved. */
  oneLine: string;
  /** First-person felt experience of why this needed to exist. */
  whyBuilt: string;
  /** Outcome and proof — concrete numbers where they exist. */
  whatChanged: string;
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
  iconFile?: string;
}

export const projects: Project[] = [
  {
    title: 'FindMyFGC',
    oneLine: 'Lets fighting-game players find real tournaments near them.',
    whyBuilt:
      "Finding fighting game events used to mean knowing someone in the scene. Search engines didn't always surface them, and announcements got buried in Discord and scattered across Twitter/X, where you'd never see them unless you already knew where to look. I built the missing piece so anyone can find tournaments without needing the inside track.",
    whatChanged:
      'Full-stack tournament finder used by players across regions. React on S3/CloudFront, Swift Vapor on EKS in a private VPC, Cloudflare DNS to ACM-validated HTTPS endpoints. Google Gemini API converts natural-language location input into coordinates. Infrastructure managed with Terraform and GitHub Actions.',
    tags: ['React', 'Swift', 'AWS', 'Terraform', 'Cloudflare'],
    githubUrl: 'https://github.com/enpicie/find-my-fgc',
    liveUrl: 'https://www.findmyfgc.cc/',
    iconFile: 'findmyfgclogo.png',
  },
  {
    title: 'adomi-san-bot',
    oneLine: 'Removes the manual grind from running online FGC tournaments.',
    whyBuilt:
      "Running an online tournament requires operational overhead disjoint between Discord and start.gg. Check-ins, event visibility, score reporting, reminders: fragmented, slow, error-prone operations. I built Adomi-san to take the strain out of running events, so the work doesn't drain the bandwidth to actually show up for the community.",
    whatChanged:
      'Four new event series have launched on Adomi-san, and average turnout at my weekly events has grown from 20-25 players to 35. Organizers track less by hand; players focus on playing. Serverless on Lambda and SQS: quick responses return immediately while heavy ops dispatch to worker Lambdas asynchronously. Used across Midweek Melting and adjacent series. Mentored a new developer through the architecture decisions.',
    tags: ['Python', 'AWS', 'Discord', 'Terraform'],
    githubUrl: 'https://github.com/enpicie/adomi-san-bot',
    iconFile: 'adomin.jpg',
  },
  {
    title: 'NEST',
    oneLine: 'A single source of truth for first-time tournament organizers.',
    whyBuilt:
      'Anyone trying to run their first netplay event has to piece it together from scratch: OBS scenes, Discord templates, bot config, the works. I packaged my organizer workflow into a kit so any new TO can get started fast.',
    whatChanged:
      'Used by Midweek Melting and other Melty Blood netplay events. Lowers the activation energy for new TOs. Distributed as a Jekyll site on GitHub Pages so it stays free to host and easy to contribute to.',
    tags: ['Jekyll', 'GitHub Pages'],
    githubUrl: 'https://github.com/enpicie/nest',
    liveUrl: 'https://enpicie.github.io/nest/',
    iconFile: 'nest-logo.png',
  },
  {
    title: 'FGC League Sheets',
    oneLine: 'Multi-week competitive leagues without a programmer.',
    whyBuilt:
      'Long-term league formats are abstract and require significant manual effort to maintain, but they have helped the Melty community grow. I built a Google Sheets extension to let organizers maintain a comfortable interface to manage everything while automating the core workflow to reduce room for error and alleviate organizer strain.',
    whatChanged:
      'Shipped a full working extension in two days, driven by an upfront design and data-model plan with AI-assisted tooling, and I reviewed every generated line. Distributed as a viewable, copyable Sheet with in-file documentation so non-technical users get started without a setup guide. Partnered directly with end users to find real edge cases and shape an intuitive workflow. Melty\'s DMF Duel League has supported dozens of players and expanded to facilitate both beginner and advanced leagues.',
    tags: ['TypeScript', 'Apps Script', 'Clasp'],
    githubUrl: 'https://github.com/enpicie/fgc-league-sheets',
    iconFile: 'fgc-league-sheets logo.png',
  },
  {
    title: 'Melty Frame Data Bot',
    oneLine: 'Frame data one Discord command away.',
    whyBuilt:
      'Players ask frame-data questions mid-conversation. Switching to a wiki breaks the flow of the discussion. I built a bot that puts the data right next to the talk.',
    whatChanged:
      'Serves fighting-game frame data from DynamoDB via Lambda and API Gateway. Beautiful Soup scrapes and ingests wiki data automatically. Full prod and dev pipelines on GitHub Actions for safe, fast deployments.',
    tags: ['Python', 'AWS', 'Discord'],
    githubUrl: 'https://github.com/chzylee/melty-frame-data-bot',
    iconFile: 'framedata-icon.png',
  },
];
