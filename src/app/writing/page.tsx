import { WritingView } from '@/components/writing/WritingView'
import { generatePageMetadata, generateWritingPageJsonLd } from '@/lib/seo'
import type { Metadata } from 'next'

export const metadata: Metadata = generatePageMetadata({
  title: 'Notes | Ajaypal Singh',
  description:
    'Notes by Ajaypal Singh on building Ojaven, AI, SaaS, product building, entrepreneurship and the lessons learned along the way.',
  path: '/writing',
  image: '/og/writing.png',
})

export default function WritingPage() {
  const jsonLd = generateWritingPageJsonLd()

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <WritingView />
    </>
  )
}
