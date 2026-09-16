// Site-wide constants — single source of truth
// Update this file to change personal information

export const siteConfig = {
  name: 'Ajaypal Singh',
  fullName: 'Ajaypal Singh Solanki',
  title: 'Ajaypal Singh — Founder, Builder & Entrepreneur',
  description:
    'Ajaypal Singh (Ajaypal Singh Solanki) is a founder, builder, and entrepreneur based in India. Currently building Ojaven — a platform for modern digital agencies. Explore builds, writing, and the journey.',
  url: 'https://ajaypalsingh.in',
  tagline: 'Founder • Builder • Entrepreneur',
  location: 'India',

  // SEO keyword variations — used across metadata and JSON-LD
  keywords: [
    'Ajaypal Singh',
    'Ajaypal Singh Solanki',
    'Ajaypalsingh',
    'Ajaypal',
    'Ajaypal Solanki',
    'ajaypalsingh.in',
    'Ojaven founder',
    'Ojaven',
    'Indian entrepreneur',
    'SaaS founder India',
    'software builder',
    'tech founder',
    'founder personal website',
    'builder entrepreneur India',
  ],

  // Social links — replace PLACEHOLDER values with actual URLs
  social: {
    email: 'PLACEHOLDER_EMAIL',
    linkedin: 'PLACEHOLDER_LINKEDIN_URL',
    github: 'https://github.com/Ajaypal110',
    twitter: 'PLACEHOLDER_TWITTER_URL',
  },

  // Ojaven venture details
  ojaven: {
    name: 'Ojaven',
    description:
      'A platform for modern agencies — simplifying workflows, client collaboration, and project execution for digital agencies.',
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
