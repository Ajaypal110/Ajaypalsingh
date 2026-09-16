import Link from 'next/link'
import type { Article } from '@/lib/data/articles'
import { formatDate } from '@/lib/utils'

interface ArticleCardProps {
  article: Article
}

export function ArticleCard({ article }: ArticleCardProps) {
  return (
    <Link
      href={`/writing/${article.slug}`}
      className="block p-6 sm:p-8 rounded-xl border border-[#1f1f1f] bg-[#0c0c0c] hover:border-[#333333] transition-all duration-300 group"
    >
      <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4">
        <div className="space-y-3 max-w-2xl">
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
  )
}
