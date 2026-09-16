import Link from 'next/link'
import { Reveal } from '@/components/motion/Reveal'
import { articles } from '@/lib/data/articles'
import { formatDate } from '@/lib/utils'

export function WritingPreview() {
  const latestArticles = articles.slice(0, 2)

  return (
    <section className="py-20 md:py-28 border-t border-[#151515]">
      <div className="container-site">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <Reveal>
              <div>
                <span className="text-xs uppercase tracking-widest text-[#c8a97e] font-mono block mb-2">
                  04 — Notes & Thoughts
                </span>
                <h2 className="font-display text-3xl sm:text-4xl text-[#f0f0f0] font-normal">
                  Recent Writing
                </h2>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <Link
                href="/writing"
                className="text-sm text-[#888888] hover:text-[#c8a97e] transition-colors inline-flex items-center gap-1.5 font-medium group"
              >
                <span>Read all essays</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </Reveal>
          </div>

          <div className="space-y-6">
            {latestArticles.map((article, idx) => (
              <Reveal key={article.slug} delay={0.15 * (idx + 1)}>
                <Link
                  href={`/writing/${article.slug}`}
                  className="block p-6 sm:p-8 rounded-xl border border-[#1f1f1f] bg-[#0c0c0c] hover:border-[#333333] transition-all duration-300 group"
                >
                  <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4">
                    <div className="space-y-2 max-w-2xl">
                      <div className="flex items-center gap-3 text-xs font-mono text-[#555555]">
                        <span className="text-[#c8a97e]">{article.category}</span>
                        <span>•</span>
                        <span>{article.readingTime}</span>
                      </div>
                      <h3 className="font-display text-2xl sm:text-3xl text-[#f0f0f0] group-hover:text-[#c8a97e] transition-colors font-normal">
                        {article.title}
                      </h3>
                      <p className="text-sm sm:text-base text-[#888888] leading-relaxed">
                        {article.excerpt}
                      </p>
                    </div>

                    <div className="shrink-0 text-xs font-mono text-[#555555] flex items-center gap-2">
                      <span>{formatDate(article.date)}</span>
                      <span className="text-[#888888] group-hover:text-[#c8a97e] group-hover:translate-x-1 transition-all">
                        →
                      </span>
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
