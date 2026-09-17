import { siteConfig } from '@/lib/data/site'
import type { Metadata } from 'next'

// ============================================================
// METADATA GENERATOR — Strictly follows SITE_CONTENT_AND_SEO.md
// ============================================================

interface PageMetaOptions {
  title?: string
  description?: string
  path?: string
  image?: string
  type?: 'website' | 'article' | 'profile'
  publishedTime?: string
  modifiedTime?: string
  noIndex?: boolean
  keywords?: string[]
  category?: string
}

export function generatePageMetadata(options: PageMetaOptions = {}): Metadata {
  const {
    title,
    description = 'Ajaypal Singh is a founder and builder creating products and companies. Currently building Ojaven, a platform for modern agencies.',
    path = '',
    image = '/og/default.png',
    type = 'website',
    publishedTime,
    modifiedTime,
    noIndex = false,
  } = options

  const fullTitle = title
    ? title.includes('Ajaypal')
      ? title
      : `${title} | Ajaypal Singh`
    : 'Ajaypal Singh | Founder and Builder'

  const url = `${siteConfig.url}${path}`

  return {
    metadataBase: new URL(siteConfig.url),
    title: fullTitle,
    description,
    applicationName: 'Ajaypal Singh',
    authors: [{ name: 'Ajaypal Singh', url: `${siteConfig.url}/about` }],
    creator: 'Ajaypal Singh',
    publisher: 'Ajaypal Singh',
    alternates: {
      canonical: path || '/',
    },
    icons: {
      icon: [
        { url: '/favicon.ico', sizes: '48x48' },
        { url: '/icon.svg', type: 'image/svg+xml' },
        { url: '/icon-96.png', sizes: '96x96', type: 'image/png' },
        { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      ],
      apple: '/apple-touch-icon.png',
    },
    manifest: '/site.webmanifest',
    openGraph: {
      type: type === 'article' ? 'article' : 'website',
      siteName: 'Ajaypal Singh',
      locale: 'en_US',
      url,
      title: fullTitle,
      description,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: `${fullTitle} — Ajaypal Singh`,
        },
      ],
      ...(type === 'article' && publishedTime ? { publishedTime, modifiedTime } : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [image],
      creator: '@ajaypal110125',
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
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
    other: {
      'theme-color': '#1F2AD6',
    },
  }
}

// ============================================================
// JSON-LD SCHEMAS — Section 4 of SITE_CONTENT_AND_SEO.md
// ============================================================

export function generateWebsiteJsonLd() {
  return {
    '@type': 'WebSite',
    '@id': 'https://ajaypalsingh.in/#website',
    url: 'https://ajaypalsingh.in/',
    name: 'Ajaypal Singh',
    alternateName: 'Ajaypal',
    inLanguage: 'en',
    publisher: { '@id': 'https://ajaypalsingh.in/#person' },
  }
}

export function generatePersonJsonLd() {
  return {
    '@type': 'Person',
    '@id': 'https://ajaypalsingh.in/#person',
    name: 'Ajaypal Singh',
    givenName: 'Ajaypal',
    familyName: 'Singh',
    url: 'https://ajaypalsingh.in/',
    image: 'https://ajaypalsingh.in/og/default.png',
    jobTitle: 'Founder',
    description:
      'Founder and builder creating products and companies. Currently building Ojaven, a platform for modern agencies.',
    worksFor: { '@id': 'https://ajaypalsingh.in/#ojaven' },
    knowsAbout: [
      'Entrepreneurship',
      'Product building',
      'SaaS',
      'Artificial intelligence',
      'Software',
    ],
    email: 'mailto:ajaypalsingh82775@gmail.com',
    sameAs: [
      'https://www.linkedin.com/in/ajaypalsingh110/',
      'https://x.com/ajaypal110125',
      'https://www.instagram.com/_ajaypal_singh_/',
      'https://www.facebook.com/profile.php?id=100085924245709',
    ],
  }
}

export function generateOjavenOrgJsonLd() {
  return {
    '@type': 'Organization',
    '@id': 'https://ajaypalsingh.in/#ojaven',
    name: 'Ojaven',
    url: 'https://ojaven.com',
    description: 'A platform for modern agencies.',
    founder: { '@id': 'https://ajaypalsingh.in/#person' },
  }
}

// Homepage only — includes WebSite + Person + WebPage
// Used exclusively in src/app/page.tsx (server component wrapper)
export function generateRootJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      generateWebsiteJsonLd(),
      generatePersonJsonLd(),
      {
        '@type': 'WebPage',
        '@id': 'https://ajaypalsingh.in/#webpage',
        url: 'https://ajaypalsingh.in/',
        name: 'Ajaypal Singh | Founder and Builder',
        isPartOf: { '@id': 'https://ajaypalsingh.in/#website' },
        about: { '@id': 'https://ajaypalsingh.in/#person' },
        primaryImageOfPage: 'https://ajaypalsingh.in/og/default.png',
        inLanguage: 'en',
      },
    ],
  }
}

// Inner pages — Person + Ojaven only (no WebSite node)
export function generatePersonGraphJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      generatePersonJsonLd(),
      generateOjavenOrgJsonLd(),
    ],
  }
}

export function generateAboutJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      generatePersonJsonLd(),
      {
        '@type': 'ProfilePage',
        '@id': 'https://ajaypalsingh.in/about#webpage',
        url: 'https://ajaypalsingh.in/about',
        name: 'About Ajaypal Singh | Founder and Builder',
        isPartOf: { '@id': 'https://ajaypalsingh.in/#website' },
        mainEntity: { '@id': 'https://ajaypalsingh.in/#person' },
        dateModified: new Date().toISOString().split('T')[0],
        breadcrumb: { '@id': 'https://ajaypalsingh.in/about#breadcrumb' },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://ajaypalsingh.in/about#breadcrumb',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://ajaypalsingh.in/',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'About',
            item: 'https://ajaypalsingh.in/about',
          },
        ],
      },
    ],
  }
}

export function generateOjavenPageJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      generatePersonJsonLd(),
      generateOjavenOrgJsonLd(),
      {
        '@type': 'WebPage',
        '@id': 'https://ajaypalsingh.in/ojaven#webpage',
        url: 'https://ajaypalsingh.in/ojaven',
        name: 'Ojaven | Founder Notes by Ajaypal Singh',
        description:
          'Ajaypal Singh on building Ojaven, a platform for modern agencies.',
        isPartOf: { '@id': 'https://ajaypalsingh.in/#website' },
        about: { '@id': 'https://ajaypalsingh.in/#ojaven' },
        author: { '@id': 'https://ajaypalsingh.in/#person' },
        breadcrumb: { '@id': 'https://ajaypalsingh.in/ojaven#breadcrumb' },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://ajaypalsingh.in/ojaven#breadcrumb',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://ajaypalsingh.in/',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Ojaven',
            item: 'https://ajaypalsingh.in/ojaven',
          },
        ],
      },
    ],
  }
}

export function generateWritingPageJsonLd(postSlugs: string[] = []) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        '@id': 'https://ajaypalsingh.in/writing#webpage',
        url: 'https://ajaypalsingh.in/writing',
        name: 'Notes | Ajaypal Singh',
        isPartOf: { '@id': 'https://ajaypalsingh.in/#website' },
        author: { '@id': 'https://ajaypalsingh.in/#person' },
        breadcrumb: { '@id': 'https://ajaypalsingh.in/writing#breadcrumb' },
      },
      {
        '@type': 'Blog',
        '@id': 'https://ajaypalsingh.in/writing#blog',
        name: 'Notes by Ajaypal Singh',
        url: 'https://ajaypalsingh.in/writing',
        author: { '@id': 'https://ajaypalsingh.in/#person' },
        blogPost: postSlugs.map((slug) => ({
          '@id': `https://ajaypalsingh.in/writing/${slug}#article`,
        })),
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://ajaypalsingh.in/writing#breadcrumb',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://ajaypalsingh.in/',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Notes',
            item: 'https://ajaypalsingh.in/writing',
          },
        ],
      },
    ],
  }
}

export function generateContactPageJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ContactPage',
        '@id': 'https://ajaypalsingh.in/contact#webpage',
        url: 'https://ajaypalsingh.in/contact',
        name: 'Contact Ajaypal Singh | Say Hello',
        isPartOf: { '@id': 'https://ajaypalsingh.in/#website' },
        about: { '@id': 'https://ajaypalsingh.in/#person' },
        breadcrumb: { '@id': 'https://ajaypalsingh.in/contact#breadcrumb' },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://ajaypalsingh.in/contact#breadcrumb',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://ajaypalsingh.in/',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Contact',
            item: 'https://ajaypalsingh.in/contact',
          },
        ],
      },
    ],
  }
}

export function generateArticleJsonLd(article: {
  slug: string
  title: string
  excerpt: string
  date: string
  category: string
  readingTime: string
}) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      generatePersonJsonLd(),
      {
        '@type': 'BlogPosting',
        '@id': `https://ajaypalsingh.in/writing/${article.slug}#article`,
        headline: article.title,
        description: article.excerpt,
        datePublished: article.date,
        dateModified: article.date,
        author: { '@id': 'https://ajaypalsingh.in/#person' },
        isPartOf: { '@id': 'https://ajaypalsingh.in/writing#blog' },
        url: `https://ajaypalsingh.in/writing/${article.slug}`,
        inLanguage: 'en',
        keywords: [article.category, 'Ajaypal Singh', 'Ajaypalsingh'],
        articleSection: article.category,
        breadcrumb: {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://ajaypalsingh.in/' },
            { '@type': 'ListItem', position: 2, name: 'Notes', item: 'https://ajaypalsingh.in/writing' },
            { '@type': 'ListItem', position: 3, name: article.title, item: `https://ajaypalsingh.in/writing/${article.slug}` },
          ],
        },
      },
    ],
  }
}
