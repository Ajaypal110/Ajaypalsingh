import { AboutView } from '@/components/about/AboutView'
import { generatePageMetadata, generateAboutJsonLd } from '@/lib/seo'
import type { Metadata } from 'next'

export const metadata: Metadata = generatePageMetadata({
  title: 'About Ajaypal Singh | Founder and Builder',
  description:
    'The story of Ajaypal Singh: how curiosity about technology turned into building products, thinking about business and founding Ojaven.',
  path: '/about',
  image: '/og/about.png',
  type: 'profile',
})

export default function AboutPage() {
  const jsonLd = generateAboutJsonLd()

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AboutView />
    </>
  )
}
