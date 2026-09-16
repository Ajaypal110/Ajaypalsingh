import { siteConfig } from '@/lib/data/site'
import type { Metadata } from 'next'

// ============================================================
// METADATA GENERATOR
// ============================================================

interface PageMetaOptions {
  title?: string
  description?: string
  path?: string
  image?: string
  type?: 'website' | 'article'
  publishedTime?: string
  category?: string
}

export function generatePageMetadata(options: PageMetaOptions = {}): Metadata {
  const {
    title,
    description = siteConfig.description,
    path = '',
    image = '/og-default.png',
    type = 'website',
    publishedTime,
    category,
  } = options

  const fullTitle = title
    ? `${title} — Ajaypal Singh`
    : siteConfig.title

  const url = `${siteConfig.url}${path}`

  return {
    title: fullTitle,
    description,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: url,
    },
    authors: [{ name: siteConfig.name }],
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: siteConfig.name,
      type: type === 'article' ? 'article' : 'website',
      locale: 'en_IN',
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
      ...(type === 'article' && publishedTime ? { publishedTime } : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [image],
      creator: '@PLACEHOLDER_TWITTER',
    },
    robots: {
      index: true,
      follow: true,
    },
  }
}

// ============================================================
// JSON-LD GENERATORS
// ============================================================

export function generateWebsiteJsonLd() {
  return {
    '@type': 'WebSite',
    '@id': siteConfig.ids.website,
    url: siteConfig.url,
    name: siteConfig.name,
    description: siteConfig.description,
    publisher: { '@id': siteConfig.ids.person },
  }
}

export function generatePersonJsonLd() {
  return {
    '@type': 'Person',
    '@id': siteConfig.ids.person,
    name: siteConfig.name,
    url: siteConfig.url,
    jobTitle: 'Founder',
    description:
      'Founder, builder, and entrepreneur. Currently building Ojaven, a platform for modern agencies.',
    sameAs: [
      siteConfig.social.linkedin,
      siteConfig.social.github,
      siteConfig.social.twitter,
    ].filter((url) => !url.startsWith('PLACEHOLDER')),
    founder: [{ '@id': siteConfig.ids.ojaven }],
  }
}

export function generateOjavenJsonLd() {
  return {
    '@type': 'Organization',
    '@id': siteConfig.ids.ojaven,
    name: 'Ojaven',
    url: `${siteConfig.url}/ojaven`,
    description: siteConfig.ojaven.description,
    founder: { '@id': siteConfig.ids.person },
  }
}

export function generateRootJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      generateWebsiteJsonLd(),
      generatePersonJsonLd(),
      generateOjavenJsonLd(),
    ],
  }
}

export function generateArticleJsonLd(article: {
  title: string
  excerpt: string
  date: string
  slug: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.excerpt,
    datePublished: article.date,
    url: `${siteConfig.url}/writing/${article.slug}`,
    author: { '@id': siteConfig.ids.person },
    publisher: { '@id': siteConfig.ids.person },
  }
}

export function generateBreadcrumbJsonLd(
  items: { name: string; url: string }[]
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}
