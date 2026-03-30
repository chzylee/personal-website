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
      'Full-stack tournament finder for the fighting game community. React frontend on S3/CloudFront, Swift Vapor backend on ECS in a private VPC, traffic routed through Cloudflare DNS to ACM-validated HTTPS endpoints. Integrates Google Gemini to convert freeform location input into coordinates. Infrastructure managed with Terraform and GitHub Actions.',
    tags: ['React', 'Swift', 'AWS', 'Terraform', 'Cloudflare'],
    githubUrl: 'https://github.com/enpicie/find-my-fgc',
  },
  {
    title: 'adomi-san-bot',
    description:
      'Discord bot that automates administration for FGC online events and tournaments hosted on start.gg. Serverless architecture on Lambda and SQS — quick responses are returned immediately while heavier operations are dispatched to worker Lambdas asynchronously. Includes onboarding a collaborator and mentoring them through architecture and infrastructure decisions.',
    tags: ['Python', 'AWS', 'Discord', 'Terraform'],
    githubUrl: 'https://github.com/enpicie/adomi-san-bot',
  },
  {
    title: 'FGC League Sheets',
    description:
      'Google Sheets extension for running long-term competitive FGC leagues — distributes players into groups and ranks them by win rate. Designed directly with end users to handle real edge cases. Distributed as a viewable, copyable Sheet with in-file documentation so non-technical users can get started without a setup guide.',
    tags: ['TypeScript', 'Apps Script', 'Clasp'],
    githubUrl: 'https://github.com/enpicie/fgc-league-sheets',
  },
  {
    title: 'Melty Frame Data Bot',
    description:
      'Discord bot serving fighting game frame data from DynamoDB via Lambda and API Gateway. Uses Beautiful Soup to scrape and ingest wiki data automatically. Full GitHub Actions prod and dev pipelines for safe, fast deployments.',
    tags: ['Python', 'AWS', 'Discord'],
    githubUrl: 'https://github.com/chzylee/melty-frame-data-bot',
  },
];
