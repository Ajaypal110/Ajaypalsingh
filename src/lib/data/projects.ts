export type ProjectStatus = 'building' | 'live' | 'experiment' | 'archived'

export interface Project {
  slug: string
  name: string
  shortDescription: string
  description: string
  why: string
  status: ProjectStatus
  tech: string[]
  url?: string
  featured?: boolean
  year: string
}

export const projects: Project[] = [
  {
    slug: 'ojaven',
    name: 'Ojaven',
    shortDescription: 'A platform for modern agencies',
    description:
      'Ojaven is a platform I am building to help modern agencies operate more effectively. The goal is to simplify the complexity that agencies deal with as they grow.',
    why: 'I kept seeing the same operational friction in agencies — tools that don\'t talk to each other, workflows that break at scale, and founders spending time on process instead of craft. Ojaven is my attempt to solve that.',
    status: 'building',
    tech: ['Next.js', 'TypeScript', 'PostgreSQL'],
    url: '/ojaven',
    featured: true,
    year: '2026–',
  },
  {
    slug: 'wanderlust',
    name: 'Wanderlust',
    shortDescription: 'Travel discovery and planning',
    description:
      'A travel discovery application focused on helping people find and plan experiences that match their interests.',
    why: 'Built to explore how recommendation systems could be applied to travel planning in a more personal, curated way.',
    status: 'experiment',
    tech: ['React', 'Node.js'],
    year: '2025',
  },
  {
    slug: 'khammaghani',
    name: 'Khammaghani',
    shortDescription: 'Cultural platform project',
    description:
      'A digital platform exploring how technology can preserve and share cultural traditions.',
    why: 'An exploration of how software can serve communities with rich cultural histories that are underserved by mainstream platforms.',
    status: 'experiment',
    tech: ['Next.js', 'TypeScript'],
    year: '2025',
  },
  {
    slug: 'smart-property-listings',
    name: 'Smart Property Listings',
    shortDescription: 'Intelligent real estate listing tool',
    description:
      'A tool that helps generate better, more descriptive property listings using structured data.',
    why: 'Noticed that most property listings are written hastily and miss the details that buyers care about. Built a structured approach to create better listings faster.',
    status: 'experiment',
    tech: ['Next.js', 'TypeScript'],
    year: '2024',
  },
]
