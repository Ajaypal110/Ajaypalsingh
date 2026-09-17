import { OjavenView } from '@/components/ojaven/OjavenView'
import { generatePageMetadata, generateOjavenPageJsonLd } from '@/lib/seo'
import type { Metadata } from 'next'

export const metadata: Metadata = generatePageMetadata({
  title: 'Ojaven | Founder Notes by Ajaypal Singh',
  description:
    'Ajaypal Singh on building Ojaven, a platform for modern agencies: why it exists, where it is now and the road to its July 2027 launch.',
  path: '/ojaven',
  image: '/og/ojaven.png',
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
