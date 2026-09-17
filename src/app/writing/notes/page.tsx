import { WritingView } from '@/components/writing/WritingView'
import { generateWritingSectionMetadata, generateWritingSectionJsonLd } from '@/lib/seo'
import type { Metadata } from 'next'

export const metadata: Metadata = generateWritingSectionMetadata('notes')

export default function NotesPage() {
  const jsonLd = generateWritingSectionJsonLd('notes', [])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <WritingView initialSection="notes" />
    </>
  )
}
