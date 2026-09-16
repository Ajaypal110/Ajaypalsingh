import { Hero } from '@/components/sections/Hero'
import { AboutPreview } from '@/components/sections/AboutPreview'
import { OjavenPreview } from '@/components/sections/OjavenPreview'
import { BuildsPreview } from '@/components/sections/BuildsPreview'
import { WritingPreview } from '@/components/sections/WritingPreview'
import { generatePageMetadata } from '@/lib/seo'
import type { Metadata } from 'next'

export const metadata: Metadata = generatePageMetadata({
  title: 'Ajaypal Singh — Founder, Builder & Entrepreneur',
  description:
    'Ajaypal Singh (Ajaypal Singh Solanki) — Founder, builder, and entrepreneur based in India. Building Ojaven, a platform for modern agencies. Explore projects, essays, and the founder journey at ajaypalsingh.in.',
  path: '/',
  keywords: [
    'Ajaypal Singh personal website',
    'Ajaypal Singh Solanki website',
    'founder website India',
    'Ajaypalsingh portfolio',
  ],
})

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <Hero />
      <AboutPreview />
      <OjavenPreview />
      <BuildsPreview />
      <WritingPreview />
    </div>
  )
}
