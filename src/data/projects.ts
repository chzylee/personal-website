export interface Project {
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    title: 'FindMyFGC',
    description:
      'Full-stack tournament finder website for the Fighting Game Community. React frontend on S3/CloudFront, Swift Vapor backend on ECS in a private VPC, traffic routed through Cloudflare DNS to ACM-validated HTTPS endpoints. Integrates Google Maps API to convert intuitive user location input into coordinates. Infrastructure managed with Terraform and GitHub Actions.',
    tags: ['React', 'Swift', 'AWS', 'Terraform', 'Cloudflare'],
    githubUrl: 'https://github.com/enpicie/find-my-fgc',
  },
  {
    title: 'adomi-san-bot',
    description:
      'Discord bot that automates administration for online events and FGC tournaments hosted on start.gg. Serverless architecture on Lambda and SQS — quick responses are returned immediately while heavier operations are dispatched to worker Lambdas asynchronously. Includes onboarding a collaborator and mentoring them through architecture and infrastructure decisions. Shares reusable GitHub Actions pipeline steps with FindMyFGC.',
    tags: ['Python', 'AWS', 'Discord', 'Terraform'],
    githubUrl: 'https://github.com/enpicie/adomi-san-bot',
  },
  {
    title: 'FGC League Sheets',
    description:
      'Google Sheets extension for running long-term competitive FGC leagues: distributes players into groups, ranks them by win rate, and manages adding/removing players. Partnered directly with end users to identify real edge cases and follow an intuitive workflow. Distributed as a viewable, copyable Sheet with in-file documentation so non-technical users can get started without a setup guide.',
    tags: ['TypeScript', 'Apps Script', 'Clasp'],
    githubUrl: 'https://github.com/enpicie/fgc-league-sheets',
  },
  {
    title: 'Melty Frame Data Bot',
    description:
      'Discord bot serving fighting game frame data from DynamoDB via Lambda and API Gateway. Used Beautiful Soup to scrape and ingest wiki data automatically. Full GitHub Actions prod and dev pipelines for safe, fast deployments.',
    tags: ['Python', 'AWS', 'Discord'],
    githubUrl: 'https://github.com/chzylee/melty-frame-data-bot',
  },
];
