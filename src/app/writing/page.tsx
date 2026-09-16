'use client'

import { useState } from 'react'
import { Reveal } from '@/components/motion/Reveal'
import { ArticleCard } from '@/components/ui/ArticleCard'
import { articles, articleCategories } from '@/lib/data/articles'

export default function WritingPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All')

  const filteredArticles =
    selectedCategory === 'All'
      ? articles
      : articles.filter((a) => a.category === selectedCategory)

  return (
    <div className="pt-32 pb-24">
      <div className="container-site">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Header */}
          <div className="space-y-4">
            <Reveal>
              <span className="text-xs uppercase tracking-widest text-[#c8a97e] font-mono block">
                Essays & Notes
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="font-display text-4xl sm:text-6xl text-[#f0f0f0] font-normal tracking-tight">
                Writing & Thinking
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-lg text-[#888888] font-normal max-w-2xl leading-relaxed">
                Essays on building digital products, SaaS architecture, the realities of entrepreneurship, and thoughts on craft.
              </p>
            </Reveal>
          </div>

          {/* Filter Categories */}
          <Reveal delay={0.3}>
            <div className="flex flex-wrap items-center gap-2 pb-6 border-b border-[#151515]">
              {articleCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-1.5 rounded-full text-xs font-mono transition-all duration-200 ${
                    selectedCategory === category
                      ? 'bg-[#c8a97e] text-[#060606] font-semibold'
                      : 'bg-[#0c0c0c] border border-[#1f1f1f] text-[#888888] hover:text-[#f0f0f0] hover:border-[#333333]'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </Reveal>

          {/* Article List */}
          <div className="space-y-6">
            {filteredArticles.length > 0 ? (
              filteredArticles.map((article, idx) => (
                <Reveal key={article.slug} delay={0.1 * (idx + 1)}>
                  <ArticleCard article={article} />
                </Reveal>
              ))
            ) : (
              <div className="py-16 text-center text-sm font-mono text-[#555555]">
                No essays found in this category yet.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
