import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { articles } from '@/lib/data/articles'
import { generateArticleJsonLd, generatePageMetadata } from '@/lib/seo'
import { NoteView } from '@/components/writing/NoteView'

interface ArticlePageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }))
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params
  const article = articles.find((a) => a.slug === slug)

  if (!article) {
    return generatePageMetadata({
      title: 'Article Not Found',
    })
  }

  return generatePageMetadata({
    title: `${article.title} | Ajaypal Singh`,
    description: article.excerpt,
    path: `/writing/${article.slug}`,
    type: 'article',
    publishedTime: article.date,
    category: article.category,
    keywords: [
      article.title,
      `Ajaypal Singh ${article.category}`,
      'Ajaypalsingh articles',
    ],
  })
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params
  const articleIndex = articles.findIndex((a) => a.slug === slug)

  if (articleIndex === -1) {
    notFound()
  }

  const article = articles[articleIndex]
  const jsonLd = generateArticleJsonLd(article)

  // Calculate related exploration cards
  const related =
    articles.length > 1
      ? [
          {
            dir: 'Previous article',
            article:
              articleIndex > 0
                ? articles[articleIndex - 1]
                : articles[articles.length - 1],
            href: `/writing/${(articleIndex > 0 ? articles[articleIndex - 1] : articles[articles.length - 1]).slug}`,
          },
          {
            dir: 'More articles',
            article:
              articles.find((a, i) => i !== articleIndex && a.category === article.category) ||
              (articleIndex < articles.length - 1 ? articles[articleIndex + 1] : articles[0]),
            href: `/writing/${(articles.find((a, i) => i !== articleIndex && a.category === article.category) || (articleIndex < articles.length - 1 ? articles[articleIndex + 1] : articles[0])).slug}`,
          },
        ]
      : [
          {
            dir: 'Primary Venture',
            article: {
              slug: 'ojaven',
              title: 'Ojaven: A Platform for Modern Agencies',
              category: 'Venture',
              date: '2026-07-10',
              readingTime: 'Founder notes',
              excerpt: 'Operational clarity and native architecture for digital agencies.',
              content: [],
            },
            href: '/ojaven',
          },
          {
            dir: 'Founder Story',
            article: {
              slug: 'about',
              title: 'The Story of How I Got Here and What Comes Next',
              category: 'About Me',
              date: '2026-09-01',
              readingTime: 'About',
              excerpt: 'The longer story, from learning to code to starting a company.',
              content: [],
            },
            href: '/about',
          },
        ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <NoteView article={article} related={related} />
    </>
  )
}

