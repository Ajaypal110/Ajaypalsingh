import { WritingView } from '@/components/writing/WritingView'
import { generateWritingSectionMetadata, generateWritingSectionJsonLd } from '@/lib/seo'
import type { Metadata } from 'next'

export const metadata: Metadata = generateWritingSectionMetadata('books')

export default function BooksPage() {
  const jsonLd = generateWritingSectionJsonLd('books', [])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <WritingView initialSection="books" />
    </>
  )
}
