'use client'

import { useState } from 'react'
import Link from 'next/link'
import { articles, articleCategories, type Article } from '@/lib/data/articles'
import { formatDate } from '@/lib/utils'

export function WritingView() {
  const [activeTopic, setActiveTopic] = useState<string>('All')

  const filteredArticles =
    activeTopic === 'All'
      ? articles
      : articles.filter((a) => a.category.toLowerCase() === activeTopic.toLowerCase())

  const emptyKicker = activeTopic === 'All' ? 'All notes' : `Notes on ${activeTopic}`

  // For template placeholder preview rows when category is sparse or empty
  const placeholderPool = articleCategories.filter((c) => c !== 'All')
  const templateRows = [0, 1, 2].map((i) => ({
    topic: activeTopic === 'All' ? placeholderPool[i % placeholderPool.length] : activeTopic,
  }))

  return (
    <div className="w-full text-[#0F1330]">
      {/* SECTION 1: HEADER & TOPIC FILTERS */}
      <section className="relative px-6 md:px-12 lg:px-16 pt-28 md:pt-36 pb-12 lg:pb-16 min-h-[540px] lg:min-h-[640px] flex flex-col justify-between">
        <div>
          <p className="text-[15px] text-[#5A5F7A] mb-2 font-medium">Writing</p>
          <h1 className="text-[80px] sm:text-[150px] lg:text-[260px] font-medium leading-[0.9] tracking-[-0.07em] -ml-1 sm:-ml-3 text-[#0F1330]">
            Notes
          </h1>
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mt-6">
          {/* Topic Filter Chips */}
          <div
            role="group"
            aria-label="Filter by topic"
            className="flex flex-wrap items-center gap-2.5 max-w-2xl"
          >
            {articleCategories.map((topic) => {
              const isSelected = activeTopic === topic
              return (
                <button
                  key={topic}
                  onClick={() => setActiveTopic(topic)}
                  aria-pressed={isSelected}
                  className={`h-11 px-5 rounded-full text-[15px] font-medium transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? 'bg-[#0F1330] text-[#F7F7F5] border border-[#0F1330]'
                      : 'bg-transparent text-[#0F1330] border border-[#DADCE8] hover:border-[#0F1330]'
                  }`}
                >
                  {topic}
                </button>
              )
            })}
          </div>

          <p className="text-xl sm:text-2xl lg:text-[28px] leading-[1.25] tracking-[-0.02em] text-[#0F1330] max-w-[420px]">
            My notebook on the internet. Thinking out loud about building, AI, software and business.
          </p>
        </div>
      </section>

      {/* SECTION 2: COBALT NOTEBOOK ORB CALLOUT */}
      <section className="px-6 md:px-12 lg:px-16 py-6">
        <div className="rounded-[32px] bg-[#1F2AD6] text-[#F7F7F5] p-8 sm:p-12 lg:p-16 relative overflow-hidden min-h-[340px] sm:min-h-[360px] flex flex-col justify-center">
          {/* Rotating orb graphic */}
          <svg
            className="orb pointer-events-none absolute right-[-100px] sm:right-[-120px] top-[-90px] sm:top-[-110px] w-[360px] sm:w-[480px] lg:w-[520px] h-[360px] sm:h-[480px] lg:h-[520px] opacity-45"
            viewBox="0 0 520 520"
            fill="none"
            aria-hidden="true"
          >
            <circle cx="260" cy="260" r="259" stroke="#AEB5FF" strokeDasharray="4 10" />
            <circle cx="260" cy="260" r="180" stroke="#AEB5FF" />
            <circle cx="260" cy="80" r="10" fill="#F7F7F5" />
          </svg>

          <p className="relative z-10 text-[15px] text-[#D6DAFF] font-medium m-0">
            {emptyKicker}
          </p>
          <h2 className="relative z-10 mt-4 max-w-[820px] text-4xl sm:text-6xl lg:text-[76px] font-medium leading-[1.0] tracking-[-0.055em]">
            {filteredArticles.length > 0
              ? `${filteredArticles.length} note${filteredArticles.length > 1 ? 's' : ''} published.`
              : 'Nothing published yet.'}
          </h2>
          <p className="relative z-10 mt-5 max-w-[560px] text-lg sm:text-xl lg:text-[22px] leading-[1.45] text-[#D6DAFF]">
            {filteredArticles.length > 0
              ? 'Read through the thoughts, build logs, and experiments below.'
              : 'The first notes will be about building Ojaven, AI, and the lessons I pick up along the way.'}
          </p>
        </div>
      </section>

      {/* SECTION 3: NOTES & TEMPLATE ROWS */}
      <section aria-labelledby="tpl-title" className="px-6 md:px-12 lg:px-16 pt-20 lg:pt-28 pb-28 lg:pb-36">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end border-b border-[#0F1330] pb-6 gap-2">
          <h2
            id="tpl-title"
            className="text-3xl sm:text-4xl lg:text-[48px] font-medium tracking-[-0.045em] text-[#0F1330]"
          >
            {filteredArticles.length > 0 ? 'Published notes' : 'How notes will appear'}
          </h2>
          <p className="text-[15px] text-[#5A5F7A]">
            {filteredArticles.length > 0
              ? 'Dispatches from the desk'
              : 'Template rows, replace with real notes'}
          </p>
        </div>

        {/* Real Articles List */}
        {filteredArticles.length > 0 && (
          <div className="divide-y divide-[#DADCE8]">
            {filteredArticles.map((article: Article) => (
              <Link
                key={article.slug}
                href={`/writing/${article.slug}`}
                className="group grid grid-cols-1 sm:grid-cols-12 gap-3 sm:gap-6 items-center py-7 sm:py-9 text-[#5A5F7A] transition-colors"
              >
                <span className="sm:col-span-2 text-[15px] font-medium text-[#5A5F7A]">
                  {formatDate(article.date)}
                </span>
                <span className="sm:col-span-6 text-2xl sm:text-3xl lg:text-[36px] font-medium tracking-[-0.035em] text-[#0F1330] transition-transform duration-500 ease-out group-hover:translate-x-3 sm:group-hover:translate-x-4">
                  {article.title}
                </span>
                <span className="sm:col-span-2">
                  <span className="inline-block text-[13px] font-medium px-3 py-1.5 rounded-full bg-[#ECEEF8] text-[#1F2AD6]">
                    {article.category}
                  </span>
                </span>
                <span className="sm:col-span-2 text-left sm:text-right text-[15px] text-[#5A5F7A]">
                  {article.readingTime}
                </span>
              </Link>
            ))}
          </div>
        )}

        {/* Template Rows (shown if empty or for previewing upcoming layout) */}
        {filteredArticles.length === 0 && (
          <div className="divide-y divide-[#DADCE8]">
            {templateRows.map((r, idx) => (
              <div
                key={idx}
                className="group grid grid-cols-1 sm:grid-cols-12 gap-3 sm:gap-6 items-center py-7 sm:py-9 text-[#5A5F7A]"
              >
                <span className="sm:col-span-2 text-[15px]">[Date]</span>
                <span className="sm:col-span-6 text-2xl sm:text-3xl lg:text-[36px] font-medium tracking-[-0.035em] text-[#0F1330] transition-transform duration-500 ease-out group-hover:translate-x-3 sm:group-hover:translate-x-4">
                  [Note title]
                </span>
                <span className="sm:col-span-2">
                  <span className="inline-block text-[13px] font-medium px-3 py-1.5 rounded-full bg-[#ECEEF8] text-[#1F2AD6]">
                    {r.topic}
                  </span>
                </span>
                <span className="sm:col-span-2 text-left sm:text-right text-[15px]">
                  [x] min read
                </span>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  )
}
