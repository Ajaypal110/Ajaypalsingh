import { articles } from '@/lib/data/articles'
import { siteConfig } from '@/lib/data/site'

export const dynamic = 'force-dynamic'

function escape(str: string) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

export async function GET() {
  const base = siteConfig.url
  const now = new Date().toISOString()

  const staticPages = [
    { url: base,                   freq: 'weekly',  priority: '1.0', lastmod: now },
    { url: `${base}/about`,        freq: 'monthly', priority: '0.9', lastmod: now },
    { url: `${base}/ojaven`,       freq: 'weekly',  priority: '0.95', lastmod: now },
    { url: `${base}/writing`,      freq: 'weekly',  priority: '0.85', lastmod: now },
    { url: `${base}/writing/articles`, freq: 'weekly', priority: '0.85', lastmod: now },
    { url: `${base}/contact`,      freq: 'monthly', priority: '0.75', lastmod: now },
  ]

  const articlePages = articles.map((a) => ({
    url: `${base}/writing/${escape(a.slug)}`,
    freq: 'monthly',
    priority: '0.75',
    lastmod: new Date(a.date).toISOString(),
  }))

  const all = [...staticPages, ...articlePages]

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${all
  .map(
    (p) => `  <url>
    <loc>${escape(p.url)}</loc>
    <lastmod>${p.lastmod}</lastmod>
    <changefreq>${p.freq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, stale-while-revalidate=86400',
    },
  })
}
