import { WritingView } from '@/components/writing/WritingView'
import { generateWritingSectionMetadata, generateWritingSectionJsonLd } from '@/lib/seo'
import type { Metadata } from 'next'

export const metadata: Metadata = generateWritingSectionMetadata('ideas')

export default function IdeasPage() {
  const jsonLd = generateWritingSectionJsonLd('ideas', [])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <WritingView initialSection="ideas" />
    </>
  )
}
