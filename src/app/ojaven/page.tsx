import { OjavenView } from '@/components/ojaven/OjavenView'
import { generatePageMetadata, generateOjavenPageJsonLd } from '@/lib/seo'
import type { Metadata } from 'next'

export const metadata: Metadata = generatePageMetadata({
  title: 'Ojaven — A Platform for Modern Agencies',
  description:
    'Founded by Ajaypal Singh (Ajaypal Singh Solanki), Ojaven is a dedicated operational platform designed to simplify workflows, client collaboration, and project delivery for modern digital agencies. Planned launch: 10 July 2027.',
  path: '/ojaven',
  keywords: [
    'Ojaven platform',
    'Ojaven SaaS',
    'Ajaypal Singh Ojaven',
    'digital agency platform',
    'agency operations tool',
    'Ojaven founder Ajaypal',
  ],
})

export default function OjavenPage() {
  const jsonLd = generateOjavenPageJsonLd()

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <OjavenView />
    </>
  )
}
