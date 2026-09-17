import Link from 'next/link'
import { Reveal } from '@/components/motion/Reveal'
import { articles } from '@/lib/data/articles'
import { formatDate } from '@/lib/utils'

export function WritingPreview() {
  const latestArticles = articles.slice(0, 3)

  return (
    <section className="section-padding border-t border-[#1e2230] relative">
      <div className="container-site">
        <div className="space-y-12">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <Reveal>
                <span className="text-xs uppercase tracking-[0.2em] text-[#e07a5f] font-mono block mb-2">
                  04 // Notebook & Thinking
                </span>
                <h2 className="text-headline-section text-[#f5f6f9]">
                  Ideas & Writing
                </h2>
              </Reveal>
            </div>

            <Reveal delay={0.1}>
              <Link
                href="/writing"
                className="text-sm font-medium text-[#8e92a4] hover:text-[#e07a5f] transition-colors inline-flex items-center gap-1.5 group"
              >
                <span>Browse all notes</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </Reveal>
          </div>

          {/* Articles List / Notebook Style */}
          <div className="space-y-4">
            {latestArticles.map((article, idx) => (
              <Reveal key={article.slug} delay={0.1 * (idx + 1)}>
                <Link
                  href={`/writing/${article.slug}`}
                  className="block rounded-xl border border-[#1e2230] bg-[#11131a] p-6 sm:p-8 hover:border-[#2e3448] hover:bg-[#141721] transition-all group"
                >
                  <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4">
                    <div className="space-y-2 max-w-2xl">
                      <div className="flex items-center gap-3 text-xs font-mono text-[#54586d]">
                        <span className="text-[#e07a5f] font-medium">{article.category}</span>
                        <span>•</span>
                        <span>{article.readingTime}</span>
                        <span>•</span>
                        <span>{formatDate(article.date)}</span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-semibold text-[#f5f6f9] group-hover:text-[#e07a5f] transition-colors">
                        {article.title}
                      </h3>

                      <p className="text-sm text-[#8e92a4] leading-relaxed">
                        {article.excerpt}
                      </p>
                    </div>

                    <div className="shrink-0 text-sm font-mono text-[#54586d] group-hover:text-[#e07a5f] group-hover:translate-x-1 transition-all flex items-center gap-1">
                      <span>Read</span>
                      <span>→</span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
