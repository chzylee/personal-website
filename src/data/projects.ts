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
      'The fighting game community mostly shares events through screenshots dropped in Discord. There was no central place for a player to ask "what is actually near me this weekend." I built the missing piece.',
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
      'Running an online tournament is more manual work than it looks — check-ins, bracket management, score reporting, reminders, all error-prone. I built this after running these events myself and knowing exactly where things break.',
    whatChanged:
      'Organizers run events in roughly half the time with less room for error. Serverless on Lambda and SQS — quick responses return immediately while heavy ops dispatch to worker Lambdas asynchronously. Used across Midweek Melting and adjacent series. Onboarded a collaborator and mentored them through the architecture decisions.',
    tags: ['Python', 'AWS', 'Discord', 'Terraform'],
    githubUrl: 'https://github.com/enpicie/adomi-san-bot',
    iconFile: 'adomin.jpg',
  },
  {
    title: 'NEST',
    oneLine: 'A single source of truth for first-time tournament organizers.',
    whyBuilt:
      'Anyone trying to run their first netplay event has to reverse-engineer it from scratch — OBS scenes, Discord templates, bot config, the works. I collected the playbook in one place so the next person does not have to start over.',
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
      'League organizers were maintaining brackets and standings in spreadsheets by hand. I built a Sheets extension so non-technical TOs can run real long-term leagues without code — distribute players, rank by win rate, manage roster changes.',
    whatChanged:
      'Distributed as a viewable, copyable Sheet with in-file documentation so non-technical users get started without a setup guide. Partnered directly with end users to find real edge cases and shape an intuitive workflow.',
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
