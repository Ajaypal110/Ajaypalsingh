// Site-wide constants — single source of truth
// Update this file to change personal information

export const siteConfig = {
  name: 'Ajaypal Singh',
  title: 'Ajaypal Singh — Founder, Builder & Entrepreneur',
  description:
    'Personal website of Ajaypal Singh — Founder, Builder & Entrepreneur. Currently building Ojaven, a platform for modern agencies.',
  url: 'https://ajaypalsingh.in',
  tagline: 'Founder • Builder • Entrepreneur',

  // Social links — replace PLACEHOLDER values with actual URLs
  social: {
    email: 'PLACEHOLDER_EMAIL',
    linkedin: 'PLACEHOLDER_LINKEDIN_URL',
    github: 'PLACEHOLDER_GITHUB_URL',
    twitter: 'PLACEHOLDER_TWITTER_URL',
  },

  // Ojaven venture details
  ojaven: {
    name: 'Ojaven',
    description: 'A platform for modern agencies',
    url: 'https://ajaypalsingh.in/ojaven',
    launchDate: '10 July 2027',
    status: 'In Development' as const,
  },

  // JSON-LD entity IDs
  ids: {
    person: 'https://ajaypalsingh.in/#person',
    website: 'https://ajaypalsingh.in/#website',
    ojaven: 'https://ajaypalsingh.in/#ojaven',
  },
} as const
