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
      className="block p-6 sm:p-8 rounded-xl border border-[#1e2230] bg-[#11131a] hover:border-[#2e3448] hover:bg-[#141721] transition-all group"
    >
      <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4">
        <div className="space-y-3 max-w-2xl">
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

          <p className="text-sm sm:text-base text-[#8e92a4] leading-relaxed">
            {article.excerpt}
          </p>
        </div>

        <div className="shrink-0 text-xs font-mono text-[#54586d] flex items-center gap-1.5 group-hover:text-[#e07a5f] group-hover:translate-x-1 transition-all">
          <span>Read note</span>
          <span>→</span>
        </div>
      </div>
    </Link>
  )
}
