import { WritingView } from '@/components/writing/WritingView'
import { generateWritingSectionMetadata, generateWritingSectionJsonLd } from '@/lib/seo'
import { articles } from '@/lib/data/articles'
import type { Metadata } from 'next'

export const metadata: Metadata = generateWritingSectionMetadata('articles')

export default function ArticlesPage() {
  const jsonLd = generateWritingSectionJsonLd('articles', articles)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <WritingView initialSection="articles" />
    </>
  )
}
