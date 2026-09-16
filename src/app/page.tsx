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
    'Personal website of Ajaypal Singh — Founder, Builder & Entrepreneur. Currently building Ojaven, a platform for modern agencies.',
  path: '/',
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
