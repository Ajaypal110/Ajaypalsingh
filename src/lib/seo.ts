import { siteConfig } from '@/lib/data/site'
import type { Metadata } from 'next'

// ============================================================
// METADATA GENERATOR — SEO-optimized for all name variations
// Targets: Ajaypal Singh, Ajaypalsingh, Ajaypal Singh Solanki
// ============================================================

interface PageMetaOptions {
  title?: string
  description?: string
  path?: string
  image?: string
  type?: 'website' | 'article'
  publishedTime?: string
  category?: string
  keywords?: string[]
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
    keywords: extraKeywords = [],
  } = options

  const fullTitle = title
    ? title.includes('Ajaypal')
      ? title
      : `${title} — Ajaypal Singh`
    : siteConfig.title

  const url = `${siteConfig.url}${path}`

  // Merge site-wide keywords with page-specific ones
  const allKeywords = [...siteConfig.keywords, ...extraKeywords]

  return {
    title: fullTitle,
    description,
    keywords: allKeywords,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: url,
    },
    authors: [{ name: siteConfig.name, url: siteConfig.url }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    category: category || 'technology',
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
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    // Verification — add your verification codes here when available
    // verification: {
    //   google: 'YOUR_GOOGLE_VERIFICATION_CODE',
    //   yandex: 'YOUR_YANDEX_VERIFICATION_CODE',
    // },
    other: {
      'theme-color': '#060606',
      'color-scheme': 'dark',
      'msapplication-TileColor': '#060606',
    },
  }
}

// ============================================================
// JSON-LD GENERATORS — Rich structured data
// ============================================================

export function generateWebsiteJsonLd() {
  return {
    '@type': 'WebSite',
    '@id': siteConfig.ids.website,
    url: siteConfig.url,
    name: siteConfig.title,
    description: siteConfig.description,
    publisher: { '@id': siteConfig.ids.person },
    inLanguage: 'en-IN',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${siteConfig.url}/writing?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  }
}

export function generatePersonJsonLd() {
  return {
    '@type': 'Person',
    '@id': siteConfig.ids.person,
    name: siteConfig.name,
    alternateName: [
      'Ajaypal Singh Solanki',
      'Ajaypalsingh',
      'Ajaypal',
      'Ajaypal Solanki',
    ],
    url: siteConfig.url,
    jobTitle: 'Founder & Entrepreneur',
    description:
      'Ajaypal Singh (Ajaypal Singh Solanki) is a founder, builder, and entrepreneur based in India. Currently building Ojaven, a platform for modern digital agencies.',
    nationality: {
      '@type': 'Country',
      name: 'India',
    },
    knowsAbout: [
      'Software Development',
      'SaaS Architecture',
      'Entrepreneurship',
      'Product Design',
      'System Design',
      'Web Development',
      'Digital Agency Operations',
    ],
    sameAs: [
      siteConfig.social.linkedin,
      siteConfig.social.github,
      siteConfig.social.twitter,
    ].filter((url) => !url.startsWith('PLACEHOLDER')),
    founder: [{ '@id': siteConfig.ids.ojaven }],
    image: `${siteConfig.url}/og-default.png`,
    mainEntityOfPage: siteConfig.url,
  }
}

export function generateOjavenJsonLd() {
  return {
    '@type': 'Organization',
    '@id': siteConfig.ids.ojaven,
    name: 'Ojaven',
    url: siteConfig.ojaven.url,
    description: siteConfig.ojaven.description,
    founder: { '@id': siteConfig.ids.person },
    foundingDate: '2026',
    foundingLocation: {
      '@type': 'Country',
      name: 'India',
    },
  }
}

export function generateProfilePageJsonLd() {
  return {
    '@type': 'ProfilePage',
    mainEntity: { '@id': siteConfig.ids.person },
    dateCreated: '2026-09-16',
    dateModified: new Date().toISOString().split('T')[0],
    name: `About ${siteConfig.name}`,
    description: `Profile page of ${siteConfig.name} — founder, builder, and entrepreneur.`,
    url: `${siteConfig.url}/about`,
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

export function generateAboutJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      generateProfilePageJsonLd(),
      generatePersonJsonLd(),
      generateBreadcrumbJsonLd([
        { name: 'Home', url: siteConfig.url },
        { name: 'About', url: `${siteConfig.url}/about` },
      ]),
    ],
  }
}

export function generateOjavenPageJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      generateOjavenJsonLd(),
      {
        '@type': 'WebPage',
        name: 'Ojaven — A Platform for Modern Agencies',
        description: siteConfig.ojaven.description,
        url: siteConfig.ojaven.url,
        about: { '@id': siteConfig.ids.ojaven },
        author: { '@id': siteConfig.ids.person },
      },
      generateBreadcrumbJsonLd([
        { name: 'Home', url: siteConfig.url },
        { name: 'Ojaven', url: `${siteConfig.url}/ojaven` },
      ]),
    ],
  }
}

export function generateBuildsPageJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        name: 'Builds & Projects by Ajaypal Singh',
        description:
          'Software projects, platforms, and technical experiments built by Ajaypal Singh.',
        url: `${siteConfig.url}/builds`,
        author: { '@id': siteConfig.ids.person },
      },
      generateBreadcrumbJsonLd([
        { name: 'Home', url: siteConfig.url },
        { name: 'Builds', url: `${siteConfig.url}/builds` },
      ]),
    ],
  }
}

export function generateWritingPageJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        name: 'Writing by Ajaypal Singh',
        description:
          'Essays on building digital products, SaaS architecture, entrepreneurship, and technology craft by Ajaypal Singh.',
        url: `${siteConfig.url}/writing`,
        author: { '@id': siteConfig.ids.person },
      },
      generateBreadcrumbJsonLd([
        { name: 'Home', url: siteConfig.url },
        { name: 'Writing', url: `${siteConfig.url}/writing` },
      ]),
    ],
  }
}

export function generateContactPageJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ContactPage',
        name: 'Contact Ajaypal Singh',
        description:
          'Get in touch with Ajaypal Singh regarding software, founder collaborations, Ojaven, or business inquiries.',
        url: `${siteConfig.url}/contact`,
        about: { '@id': siteConfig.ids.person },
      },
      generateBreadcrumbJsonLd([
        { name: 'Home', url: siteConfig.url },
        { name: 'Contact', url: `${siteConfig.url}/contact` },
      ]),
    ],
  }
}

export function generateArticleJsonLd(article: {
  title: string
  excerpt: string
  date: string
  slug: string
  category?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.excerpt,
    datePublished: article.date,
    dateModified: article.date,
    url: `${siteConfig.url}/writing/${article.slug}`,
    author: {
      '@type': 'Person',
      '@id': siteConfig.ids.person,
      name: siteConfig.name,
      url: siteConfig.url,
    },
    publisher: {
      '@type': 'Person',
      '@id': siteConfig.ids.person,
      name: siteConfig.name,
      url: siteConfig.url,
    },
    mainEntityOfPage: `${siteConfig.url}/writing/${article.slug}`,
    inLanguage: 'en',
    ...(article.category ? { articleSection: article.category } : {}),
  }
}

export function generateBreadcrumbJsonLd(
  items: { name: string; url: string }[]
) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}
