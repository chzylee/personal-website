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
      'Tournament finder web app for the fighting game community. React frontend hosted on S3/CloudFront; backend running behind AWS ALB with a fully Terraform-managed infrastructure.',
    tags: ['AWS', 'React', 'TypeScript', 'Terraform'],
    githubUrl: 'https://github.com/chzylee/findmyfgc',
  },
  {
    title: 'adomi-san-bot',
    description:
      'Discord bot for FGC community event management. Runs serverlessly on AWS Lambda with SQS and DynamoDB, deployed end-to-end via OpenTofu and GitHub Actions.',
    tags: ['AWS', 'Python', 'Discord', 'OpenTofu'],
    githubUrl: 'https://github.com/enpicie/adomi-san-bot',
  },
  {
    title: 'FGC League Sheets',
    description:
      'Google Apps Script extension for managing FGC league scoring directly inside Google Sheets — standings, match entry, and point calculations without leaving the spreadsheet.',
    tags: ['Google Apps Script', 'TypeScript'],
    githubUrl: 'https://github.com/chzylee/fgc-league-sheets',
  },
];
