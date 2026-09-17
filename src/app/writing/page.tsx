import { WritingView } from '@/components/writing/WritingView'
import { generatePageMetadata } from '@/lib/seo'
import type { Metadata } from 'next'

export const metadata: Metadata = generatePageMetadata({
  title: 'Notes — Ajaypal Singh',
  description:
    'The personal notebook of Ajaypal Singh (Ajaypal Singh Solanki). Thinking out loud about building Ojaven, AI, software systems, and entrepreneurship.',
  path: '/writing',
  keywords: [
    'Ajaypal Singh writing',
    'Ajaypal Singh notes',
    'Ojaven build notes',
    'software engineering essays',
    'agency operations articles',
    'Ajaypalsingh thinking',
  ],
})

export default function WritingPage() {
  return <WritingView />
}
