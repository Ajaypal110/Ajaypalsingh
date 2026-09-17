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

  // Social links — actual profiles provided by user
  social: {
    email: 'ajaypalsingh82775@gmail.com',
    linkedin: 'https://www.linkedin.com/in/ajaypalsingh110/',
    twitter: 'https://x.com/ajaypal110125',
    instagram: 'https://www.instagram.com/_ajaypal_singh_/',
    facebook: 'https://www.facebook.com/profile.php?id=100085924245709',
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
