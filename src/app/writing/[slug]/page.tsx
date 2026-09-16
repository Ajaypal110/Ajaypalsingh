import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'
import { articles } from '@/lib/data/articles'
import { formatDate } from '@/lib/utils'
import { generateArticleJsonLd, generatePageMetadata } from '@/lib/seo'
import { siteConfig } from '@/lib/data/site'
import { Reveal } from '@/components/motion/Reveal'

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
    title: article.title,
    description: article.excerpt,
    path: `/writing/${article.slug}`,
    type: 'article',
    publishedTime: article.date,
    category: article.category,
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
    <article className="pt-32 pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="container-site">
        <div className="max-w-2xl mx-auto space-y-12">
          {/* Back Navigation */}
          <Reveal>
            <Link
              href="/writing"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-[#555555] hover:text-[#c8a97e] transition-colors"
            >
              <span>←</span>
              <span>Back to all essays</span>
            </Link>
          </Reveal>

          {/* Article Header */}
          <header className="space-y-6">
            <Reveal delay={0.1}>
              <div className="flex items-center gap-3 text-xs font-mono text-[#555555]">
                <span className="text-[#c8a97e] uppercase tracking-wider">{article.category}</span>
                <span>•</span>
                <span>{formatDate(article.date)}</span>
                <span>•</span>
                <span>{article.readingTime}</span>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <h1 className="font-display text-4xl sm:text-5xl text-[#f0f0f0] font-normal leading-tight">
                {article.title}
              </h1>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="text-lg text-[#888888] italic border-l-2 border-[#c8a97e]/40 pl-4 py-1 leading-relaxed">
                {article.excerpt}
              </p>
            </Reveal>
          </header>

          {/* Article Content */}
          <div className="pt-8 border-t border-[#151515] space-y-6 text-base sm:text-lg text-[#bbbbbb] leading-relaxed font-normal font-body">
            {article.content.map((paragraph, index) => (
              <Reveal key={index} delay={0.05 * index}>
                <p>{paragraph}</p>
              </Reveal>
            ))}
          </div>

          {/* Author Card */}
          <div className="pt-12 border-t border-[#151515]">
            <Reveal>
              <div className="p-6 sm:p-8 rounded-xl border border-[#1f1f1f] bg-[#0c0c0c] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                <div className="space-y-1">
                  <span className="text-xs uppercase tracking-widest text-[#c8a97e] font-mono">
                    Written by
                  </span>
                  <h3 className="font-display text-xl text-[#f0f0f0]">
                    {siteConfig.name}
                  </h3>
                  <p className="text-xs text-[#888888] font-mono">
                    {siteConfig.tagline}
                  </p>
                </div>

                <Link
                  href="/about"
                  className="px-5 py-2.5 rounded-full border border-[#1f1f1f] hover:border-[#c8a97e] text-xs font-mono text-[#f0f0f0] hover:text-[#c8a97e] transition-colors"
                >
                  About the Author →
                </Link>
              </div>
            </Reveal>
          </div>

          {/* Related Articles */}
          {relatedArticles.length > 0 && (
            <div className="pt-12 border-t border-[#151515] space-y-6">
              <Reveal>
                <h3 className="font-display text-2xl text-[#f0f0f0]">
                  Continue Reading
                </h3>
              </Reveal>

              <div className="space-y-4">
                {relatedArticles.map((rel) => (
                  <Reveal key={rel.slug}>
                    <Link
                      href={`/writing/${rel.slug}`}
                      className="block p-5 rounded-xl border border-[#1f1f1f] bg-[#0c0c0c] hover:border-[#333333] transition-all group"
                    >
                      <div className="flex items-center justify-between text-xs font-mono text-[#555555] mb-2">
                        <span className="text-[#c8a97e]">{rel.category}</span>
                        <span>{rel.readingTime}</span>
                      </div>
                      <h4 className="font-display text-xl text-[#f0f0f0] group-hover:text-[#c8a97e] transition-colors">
                        {rel.title}
                      </h4>
                    </Link>
                  </Reveal>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </article>
  )
}
