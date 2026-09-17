import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'
import { articles } from '@/lib/data/articles'
import { formatDate } from '@/lib/utils'
import { generateArticleJsonLd, generatePageMetadata } from '@/lib/seo'
import { siteConfig } from '@/lib/data/site'

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
    title: `${article.title} — Ajaypal Singh`,
    description: `${article.excerpt} Notes by Ajaypal Singh (Ajaypal Singh Solanki).`,
    path: `/writing/${article.slug}`,
    type: 'article',
    publishedTime: article.date,
    category: article.category,
    keywords: [
      `${article.title}`,
      `Ajaypal Singh ${article.category}`,
      'Ajaypalsingh notes',
    ],
  })
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params
  const article = articles.find((a) => a.slug === slug)

  if (!article) {
    notFound()
  }

  const jsonLd = generateArticleJsonLd(article)
  const relatedArticles = articles
    .filter((a) => a.slug !== article.slug)
    .slice(0, 2)

  return (
    <article className="w-full text-[#0F1330] px-6 md:px-12 lg:px-16 pt-28 md:pt-36 pb-28 lg:pb-36">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-3xl mx-auto space-y-12">
        {/* Back Navigation */}
        <Link
          href="/writing"
          className="inline-flex items-center gap-2 text-[15px] font-medium text-[#5A5F7A] hover:text-[#1F2AD6] transition-colors group"
        >
          <span className="transition-transform group-hover:-translate-x-1">←</span>
          <span>Back to all notes</span>
        </Link>

        {/* Article Header */}
        <header className="space-y-6">
          <div className="flex flex-wrap items-center gap-3 text-[14px]">
            <span className="px-3 py-1 rounded-full bg-[#ECEEF8] text-[#1F2AD6] font-medium">
              {article.category}
            </span>
            <span className="text-[#DADCE8]">•</span>
            <span className="text-[#5A5F7A]">{formatDate(article.date)}</span>
            <span className="text-[#DADCE8]">•</span>
            <span className="text-[#5A5F7A]">{article.readingTime}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-[-0.045em] leading-[1.05] text-[#0F1330]">
            {article.title}
          </h1>

          <p className="text-xl sm:text-2xl leading-[1.4] text-[#5A5F7A] border-l-2 border-[#1F2AD6] pl-5 py-1">
            {article.excerpt}
          </p>
        </header>

        {/* Article Body */}
        <div className="pt-8 border-t border-[#DADCE8] space-y-6 text-lg sm:text-xl text-[#0F1330] leading-[1.65]">
          {article.content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        {/* Author Card */}
        <div className="pt-12 border-t border-[#DADCE8]">
          <div className="p-8 rounded-[24px] border border-[#DADCE8] bg-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-sm">
            <div className="space-y-1">
              <span className="text-[13px] uppercase tracking-wider text-[#1F2AD6] font-medium">
                Written by
              </span>
              <h3 className="text-2xl font-medium text-[#0F1330]">
                {siteConfig.name}
              </h3>
              <p className="text-[15px] text-[#5A5F7A]">
                {siteConfig.tagline} • Building Ojaven
              </p>
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0F1330] text-[#F7F7F5] hover:bg-[#1F2AD6] text-[15px] font-medium transition-colors"
            >
              <span>About Ajaypal</span>
              <span>→</span>
            </Link>
          </div>
        </div>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <div className="pt-12 border-t border-[#DADCE8] space-y-6">
            <h3 className="text-2xl font-medium tracking-[-0.03em] text-[#0F1330]">
              Other notes
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {relatedArticles.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/writing/${rel.slug}`}
                  className="group block p-6 rounded-[20px] border border-[#DADCE8] bg-white hover:border-[#1F2AD6] transition-all shadow-sm"
                >
                  <div className="flex items-center justify-between text-[13px] text-[#5A5F7A] mb-3">
                    <span className="px-2.5 py-0.5 rounded-full bg-[#ECEEF8] text-[#1F2AD6] font-medium">
                      {rel.category}
                    </span>
                    <span>{rel.readingTime}</span>
                  </div>
                  <h4 className="text-xl font-medium text-[#0F1330] group-hover:text-[#1F2AD6] transition-colors leading-[1.25]">
                    {rel.title}
                  </h4>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  )
}
