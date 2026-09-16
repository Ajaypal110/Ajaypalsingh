import { generatePageMetadata, generateWritingPageJsonLd } from '@/lib/seo'
import type { Metadata } from 'next'

export const metadata: Metadata = generatePageMetadata({
  title: 'Writing by Ajaypal Singh — Essays & Notes',
  description:
    'Essays on building digital products, SaaS architecture, entrepreneurship, and technology craft by Ajaypal Singh (Ajaypal Singh Solanki, Ajaypalsingh).',
  path: '/writing',
  keywords: [
    'Ajaypal Singh blog',
    'Ajaypalsingh writing',
    'Ajaypal Singh essays',
    'SaaS founder blog India',
    'tech entrepreneur writing',
  ],
})

export default function WritingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = generateWritingPageJsonLd()

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  )
}
