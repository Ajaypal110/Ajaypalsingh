// Server component — emits homepage JSON-LD (WebSite + Person + WebPage) in raw HTML.
// Must NOT be 'use client'. Rendered only on /.
import { generateRootJsonLd } from '@/lib/seo'

export function HomeJsonLd() {
  const jsonLd = generateRootJsonLd()
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}
