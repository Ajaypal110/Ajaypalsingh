'use client'

import { useState, useEffect, useTransition, Suspense } from 'react'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import { articles, articleCategories, type Article } from '@/lib/data/articles'
import { formatDate } from '@/lib/utils'
import type { WritingSection } from '@/lib/seo'

interface WritingViewProps {
  initialSection?: WritingSection
}

interface SectionMeta {
  label: string
  desc: string
  r: string
  shapeBg: string
  shapeBd: string
  url: string
}

function WritingViewInner({ initialSection = 'all' }: WritingViewProps) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [, startTransition] = useTransition()

  const [section, setSection] = useState<WritingSection>(initialSection)
  const [topic, setTopic] = useState<string>(searchParams.get('topic') || 'All')

  // Sync state with prop if it changes via Next.js navigation
  useEffect(() => {
    if (initialSection) {
      setSection(initialSection)
    }
  }, [initialSection])

  // Sync state if user clicks browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname
      if (path === '/writing/articles') setSection('articles')
      else if (path === '/writing/notes') setSection('notes')
      else if (path === '/writing/books') setSection('books')
      else if (path === '/writing/ideas') setSection('ideas')
      else if (path === '/writing') setSection('all')

      const params = new URLSearchParams(window.location.search)
      setTopic(params.get('topic') || 'All')
    }

    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  // Switch section and update browser history cleanly
  const handleSectionChange = (newSec: WritingSection) => {
    setSection(newSec)
    setTopic('All')

    const targetUrl = newSec === 'all' ? '/writing' : `/writing/${newSec}`
    if (typeof window !== 'undefined' && window.location.pathname !== targetUrl) {
      window.history.pushState(null, '', targetUrl)
    }
  }

  // Handle topic change
  const handleTopicChange = (newTopic: string) => {
    setTopic(newTopic)
    const currentPath = section === 'all' ? '/writing' : `/writing/${section}`
    const query = newTopic === 'All' ? '' : `?topic=${encodeURIComponent(newTopic)}`
    const targetUrl = `${currentPath}${query}`
    if (typeof window !== 'undefined') {
      window.history.pushState(null, '', targetUrl)
    }
  }

  // Articles & counts
  const articlesAll = articles
  const counts: Record<WritingSection, number> = {
    all: articlesAll.length,
    articles: articlesAll.length,
    notes: 0,
    books: 0,
    ideas: 0,
  }

  const meta: Record<Exclude<WritingSection, 'all'>, SectionMeta> = {
    articles: {
      label: 'Articles',
      desc: 'Long, finished pieces on building, products and business.',
      r: '50%',
      shapeBg: '#1F2AD6',
      shapeBd: 'none',
      url: '/writing/articles',
    },
    notes: {
      label: 'Notes',
      desc: 'Short thoughts, one idea at a time. Quick enough to read right here.',
      r: '4px',
      shapeBg: '#0F1330',
      shapeBd: 'none',
      url: '/writing/notes',
    },
    books: {
      label: 'Books',
      desc: 'Books I write, from first draft to finished.',
      r: '2px 6px 6px 2px',
      shapeBg: '#AEB5FF',
      shapeBd: 'none',
      url: '/writing/books',
    },
    ideas: {
      label: 'Ideas',
      desc: "Things I'm exploring but haven't built yet. Some may turn into products.",
      r: '50%',
      shapeBg: 'transparent',
      shapeBd: '3px solid #1F2AD6',
      url: '/writing/ideas',
    },
  }

  const order: WritingSection[] = ['all', 'articles', 'notes', 'books', 'ideas']
  const idx = Math.max(0, order.indexOf(section))

  // Filtered articles for Articles section
  const filteredArticles =
    topic === 'All'
      ? articlesAll
      : articlesAll.filter((a) => a.category.toLowerCase() === topic.toLowerCase())

  // Featured and latest for All view
  const featured = articlesAll[0]
  const latestArticles = articlesAll.slice(1)

  // Coming soon copy
  const soonCopy: Record<string, { title: string; text: string }> = {
    notes: {
      title: 'Short notes are on the way.',
      text: 'Quick thoughts and lessons, one idea at a time. The first ones will land here soon.',
    },
    books: {
      title: 'Books will live here.',
      text: 'When I publish a book, you will find it here, with what it is about and where to read it.',
    },
    ideas: {
      title: 'An open list of ideas.',
      text: "Ideas I'm exploring, with where each one stands. The list opens soon.",
    },
  }

  return (
    <div className="w-full text-[#0F1330]">
      {/* 1. HERO SECTION */}
      <section className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-16 pt-28 sm:pt-36 lg:pt-[150px] box-border grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-6 items-end">
        <div className="lg:col-span-8">
          <p className="fade text-[15px] text-[#5A5F7A] m-0" style={{ ['--d' as any]: '100ms' }}>
            Writing
          </p>
          <h1 className="mt-4 sm:mt-5 mb-0 text-[80px] sm:text-[160px] lg:text-[250px] font-medium leading-[0.88] tracking-[-0.07em]">
            <span className="mask">
              <span className="rise" style={{ ['--d' as any]: '150ms' }}>
                Writing
              </span>
            </span>
          </h1>
        </div>
        <p
          className="fade lg:col-span-4 m-0 lg:mb-5 text-xl sm:text-2xl lg:text-[26px] leading-[1.3] tracking-[-0.02em] text-[#0F1330] max-w-[440px]"
          style={{ ['--d' as any]: '450ms' }}
        >
          Articles, notes, books and ideas. Where I think out loud about building, AI, software and
          business.
        </p>
      </section>

      {/* 2. STICKY SECTION TABS */}
      <nav
        aria-label="Writing sections"
        className="sticky top-[72px] sm:top-[88px] lg:top-[96px] z-20 mt-12 sm:mt-16 py-3 bg-[rgba(247,247,245,0.9)] backdrop-blur-[14px]"
      >
        <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-16 box-border">
          <div
            role="tablist"
            className="relative grid grid-cols-5 p-1.5 rounded-full bg-white border border-[#DADCE8] shadow-sm select-none"
          >
            {/* Sliding Navy Pill Indicator */}
            <span
              className="tabs-pill absolute top-1.5 bottom-1.5 left-1.5 rounded-full bg-[#0F1330] pointer-events-none"
              aria-hidden="true"
              style={{
                width: 'calc((100% - 12px) / 5)',
                transform: `translateX(calc(${idx} * 100%))`,
              }}
            />

            {/* Tab: All */}
            <button
              role="tab"
              aria-selected={section === 'all'}
              aria-current={section === 'all' ? 'page' : undefined}
              onClick={() => handleSectionChange('all')}
              className={`tab relative z-10 h-12 sm:h-14 lg:h-[60px] rounded-full border-0 bg-transparent flex items-center justify-center gap-2 sm:gap-3 text-sm sm:text-base lg:text-[18px] font-medium cursor-pointer transition-colors ${
                section === 'all' ? 'text-[#F7F7F5]' : 'text-[#0F1330]'
              }`}
            >
              <span
                className="tab-shape hidden sm:block w-3.5 h-3.5 rounded-[3px] shrink-0"
                aria-hidden="true"
                style={{
                  background: section === 'all' ? '#F7F7F5' : '#0F1330',
                }}
              />
              <span>All</span>
              <span
                className="cnt text-xs px-2 sm:px-2.5 py-0.5 rounded-full font-medium"
                style={{
                  background: section === 'all' ? 'rgba(247,247,245,0.16)' : '#ECEEF8',
                  color: section === 'all' ? '#F7F7F5' : '#1F2AD6',
                }}
              >
                {counts.all}
              </span>
            </button>

            {/* Tab: Articles (replaces Essays) */}
            <button
              role="tab"
              aria-selected={section === 'articles'}
              aria-current={section === 'articles' ? 'page' : undefined}
              onClick={() => handleSectionChange('articles')}
              className={`tab relative z-10 h-12 sm:h-14 lg:h-[60px] rounded-full border-0 bg-transparent flex items-center justify-center gap-2 sm:gap-3 text-sm sm:text-base lg:text-[18px] font-medium cursor-pointer transition-colors ${
                section === 'articles' ? 'text-[#F7F7F5]' : 'text-[#0F1330]'
              }`}
            >
              <span
                className="tab-shape hidden sm:block w-3.5 h-3.5 rounded-full shrink-0 bg-[#1F2AD6]"
                aria-hidden="true"
              />
              <span>Articles</span>
              <span
                className="cnt text-xs px-2 sm:px-2.5 py-0.5 rounded-full font-medium"
                style={{
                  background: section === 'articles' ? 'rgba(247,247,245,0.16)' : '#ECEEF8',
                  color: section === 'articles' ? '#F7F7F5' : '#1F2AD6',
                }}
              >
                {counts.articles}
              </span>
            </button>

            {/* Tab: Notes */}
            <button
              role="tab"
              aria-selected={section === 'notes'}
              aria-current={section === 'notes' ? 'page' : undefined}
              onClick={() => handleSectionChange('notes')}
              className={`tab relative z-10 h-12 sm:h-14 lg:h-[60px] rounded-full border-0 bg-transparent flex items-center justify-center gap-2 sm:gap-3 text-sm sm:text-base lg:text-[18px] font-medium cursor-pointer transition-colors ${
                section === 'notes' ? 'text-[#F7F7F5]' : 'text-[#0F1330]'
              }`}
            >
              <span
                className="tab-shape hidden sm:block w-3.5 h-3.5 rounded-[4px] shrink-0 bg-[#0F1330]"
                aria-hidden="true"
              />
              <span>Notes</span>
              <span
                className="cnt text-xs px-2 sm:px-2.5 py-0.5 rounded-full font-medium"
                style={{
                  background: section === 'notes' ? 'rgba(247,247,245,0.16)' : '#ECEEF8',
                  color: section === 'notes' ? '#F7F7F5' : '#5A5F7A',
                }}
              >
                {counts.notes > 0 ? counts.notes : 'Soon'}
              </span>
            </button>

            {/* Tab: Books */}
            <button
              role="tab"
              aria-selected={section === 'books'}
              aria-current={section === 'books' ? 'page' : undefined}
              onClick={() => handleSectionChange('books')}
              className={`tab relative z-10 h-12 sm:h-14 lg:h-[60px] rounded-full border-0 bg-transparent flex items-center justify-center gap-2 sm:gap-3 text-sm sm:text-base lg:text-[18px] font-medium cursor-pointer transition-colors ${
                section === 'books' ? 'text-[#F7F7F5]' : 'text-[#0F1330]'
              }`}
            >
              <span
                className="tab-shape hidden sm:block w-3.5 h-3.5 rounded-[2px_6px_6px_2px] shrink-0 bg-[#AEB5FF]"
                aria-hidden="true"
              />
              <span>Books</span>
              <span
                className="cnt text-xs px-2 sm:px-2.5 py-0.5 rounded-full font-medium"
                style={{
                  background: section === 'books' ? 'rgba(247,247,245,0.16)' : '#ECEEF8',
                  color: section === 'books' ? '#F7F7F5' : '#5A5F7A',
                }}
              >
                {counts.books > 0 ? counts.books : 'Soon'}
              </span>
            </button>

            {/* Tab: Ideas */}
            <button
              role="tab"
              aria-selected={section === 'ideas'}
              aria-current={section === 'ideas' ? 'page' : undefined}
              onClick={() => handleSectionChange('ideas')}
              className={`tab relative z-10 h-12 sm:h-14 lg:h-[60px] rounded-full border-0 bg-transparent flex items-center justify-center gap-2 sm:gap-3 text-sm sm:text-base lg:text-[18px] font-medium cursor-pointer transition-colors ${
                section === 'ideas' ? 'text-[#F7F7F5]' : 'text-[#0F1330]'
              }`}
            >
              <span
                className="tab-shape hidden sm:block w-3.5 h-3.5 rounded-full shrink-0 border-[3px]"
                aria-hidden="true"
                style={{
                  borderColor: section === 'ideas' ? '#AEB5FF' : '#1F2AD6',
                  background: 'transparent',
                }}
              />
              <span>Ideas</span>
              <span
                className="cnt text-xs px-2 sm:px-2.5 py-0.5 rounded-full font-medium"
                style={{
                  background: section === 'ideas' ? 'rgba(247,247,245,0.16)' : '#ECEEF8',
                  color: section === 'ideas' ? '#F7F7F5' : '#5A5F7A',
                }}
              >
                {counts.ideas > 0 ? counts.ideas : 'Soon'}
              </span>
            </button>
          </div>
        </div>
      </nav>

      {/* 3. MAIN SECTION CONTENT */}
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-16 pt-12 pb-36 box-border">
        {/* Section Intro Header (shown when section !== 'all') */}
        {section !== 'all' && (
          <div className="swap flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 sm:gap-10 mb-9">
            <div>
              <h2 className="m-0 text-5xl sm:text-7xl lg:text-[96px] font-medium tracking-[-0.06em] leading-[0.95]">
                {meta[section].label}
              </h2>
              <p className="mt-3.5 mb-0 max-w-[620px] text-lg sm:text-xl lg:text-[22px] leading-[1.4] text-[#5A5F7A]">
                {meta[section].desc}
              </p>
            </div>
            <span className="text-[15px] text-[#5A5F7A] shrink-0 font-medium">
              {section === 'articles'
                ? `${filteredArticles.length} ${filteredArticles.length === 1 ? 'article' : 'articles'}`
                : 'Coming soon'}
            </span>
          </div>
        )}

        {/* Topic Filter Chips (shown on Articles section) */}
        {section === 'articles' && (
          <div
            role="group"
            aria-label="Filter by topic"
            className="flex flex-wrap gap-2.5 mb-9"
          >
            {articleCategories.map((t) => {
              const isSelected = topic === t
              return (
                <button
                  key={t}
                  onClick={() => handleTopicChange(t)}
                  aria-pressed={isSelected}
                  className={`chip h-10 px-4.5 rounded-full text-sm font-medium transition-colors cursor-pointer ${
                    isSelected
                      ? 'bg-[#0F1330] text-[#F7F7F5] border border-[#0F1330]'
                      : 'bg-transparent text-[#0F1330] border border-[#DADCE8] hover:border-[#0F1330]'
                  }`}
                >
                  {t}
                </button>
              )
            })}
          </div>
        )}

        {/* ---------------- SECTION: ALL VIEW ---------------- */}
        {section === 'all' && (
          <div className="swap">
            {/* Featured Latest Article (large cobalt card) */}
            {featured && (
              <Link
                href={`/writing/${featured.slug}`}
                className="feat block rounded-[32px] bg-[#1F2AD6] text-[#F7F7F5] p-7 sm:p-10 lg:p-[52px] relative overflow-hidden min-h-[400px] box-border shadow-lg cursor-pointer"
              >
                {/* Rotating Orb Graphic */}
                <svg
                  className="orb pointer-events-none absolute -right-24 sm:-right-28 -top-24 sm:-top-28 w-[400px] sm:w-[520px] lg:w-[560px] h-[400px] sm:h-[520px] lg:h-[560px] opacity-45"
                  viewBox="0 0 520 520"
                  fill="none"
                  aria-hidden="true"
                >
                  <circle cx="260" cy="260" r="259" stroke="#AEB5FF" strokeDasharray="4 10" />
                  <circle cx="260" cy="260" r="180" stroke="#AEB5FF" />
                  <circle cx="260" cy="80" r="10" fill="#F7F7F5" />
                </svg>

                {/* Card Meta Row */}
                <div className="relative z-10 flex flex-wrap items-center gap-3 text-sm sm:text-[15px] text-[#D6DAFF]">
                  <span className="px-3 py-1.5 rounded-full bg-[rgba(247,247,245,0.16)] text-[#F7F7F5] font-medium">
                    Latest article
                  </span>
                  <span>{featured.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>{formatDate(featured.date)}</span>
                  <span aria-hidden="true">·</span>
                  <span>{featured.readingTime}</span>
                </div>

                {/* Title */}
                <h3 className="feat-title relative z-10 mt-12 sm:mt-16 lg:mt-[76px] mb-0 max-w-[900px] text-4xl sm:text-6xl lg:text-[96px] font-medium leading-[0.95] tracking-[-0.06em]">
                  {featured.title}
                </h3>

                {/* Bottom Row: Excerpt + Action */}
                <div className="relative z-10 mt-6 sm:mt-7 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 sm:gap-10">
                  <p className="m-0 max-w-[560px] text-lg sm:text-xl lg:text-[22px] leading-[1.45] text-[#D6DAFF]">
                    {featured.excerpt}
                  </p>
                  <span
                    aria-hidden="true"
                    className="shrink-0 w-14 sm:w-16 lg:w-[72px] h-14 sm:h-16 lg:h-[72px] rounded-full bg-[#F7F7F5] flex items-center justify-center shadow-md"
                  >
                    <svg
                      className="spin-ic w-5 h-5 sm:w-6 sm:h-6"
                      viewBox="0 0 14 14"
                      fill="none"
                      stroke="#1F2AD6"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                    >
                      <path d="M3 11L11 3M5 3h6v6" />
                    </svg>
                  </span>
                </div>
              </Link>
            )}

            {/* Browse by section */}
            <h2 className="mt-20 sm:mt-28 mb-0 pb-5 border-b border-[#0F1330] text-3xl sm:text-5xl lg:text-[56px] font-medium tracking-[-0.05em]">
              Browse by section
            </h2>
            <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {(['articles', 'notes', 'books', 'ideas'] as const).map((key) => {
                const s = meta[key]
                const count = counts[key]
                const badgeText = count > 0 ? `${count} ${count === 1 ? 'piece' : 'pieces'}` : 'Coming soon'
                const badgeFg = count > 0 ? '#1F2AD6' : '#5A5F7A'

                return (
                  <button
                    key={key}
                    onClick={() => handleSectionChange(key)}
                    className="sec text-left border-0 rounded-[28px] bg-[#ECEEF8] text-[#0F1330] p-7 min-h-[320px] box-border flex flex-col justify-between cursor-pointer"
                  >
                    <div className="flex justify-between items-start w-full">
                      <span
                        className="sshape block shrink-0 w-[52px] h-[52px]"
                        aria-hidden="true"
                        style={{
                          borderRadius: s.r,
                          background: s.shapeBg,
                          border: s.shapeBd,
                        }}
                      />
                      <span
                        className="badge text-[13px] font-medium px-3 py-1.5 rounded-full bg-white"
                        style={{ color: badgeFg }}
                      >
                        {badgeText}
                      </span>
                    </div>

                    <div>
                      <h3 className="m-0 text-3xl sm:text-[40px] font-medium tracking-[-0.045em] leading-[1.05]">
                        {s.label}
                      </h3>
                      <p className="soft mt-2.5 mb-0 text-[17px] leading-[1.4] text-[#5A5F7A]">
                        {s.desc}
                      </p>
                      <span className="mt-4.5 inline-flex items-center gap-2 text-[15px] font-semibold">
                        Open {s.label}
                        <svg
                          className="spin-ic w-3.5 h-3.5"
                          viewBox="0 0 14 14"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          aria-hidden="true"
                        >
                          <path d="M3 11L11 3M5 3h6v6" />
                        </svg>
                      </span>
                    </div>
                  </button>
                )
              })}
            </div>

            {/* Latest Rows */}
            <div className="mt-20 sm:mt-28 flex justify-between items-end pb-5 border-b border-[#0F1330]">
              <h2 className="m-0 text-3xl sm:text-5xl lg:text-[56px] font-medium tracking-[-0.05em]">
                Latest
              </h2>
              <span className="text-[15px] font-normal text-[#5A5F7A]">
                {articlesAll.length} published
              </span>
            </div>

            <div className="divide-y divide-[#DADCE8]">
              {latestArticles.map((item) => (
                <Link
                  key={item.slug}
                  href={`/writing/${item.slug}`}
                  className="row grid grid-cols-1 sm:grid-cols-12 gap-3 sm:gap-6 items-center py-7 sm:py-8 text-[#5A5F7A] transition-colors"
                >
                  <span className="sm:col-span-2 text-[15px] font-medium">
                    {formatDate(item.date)}
                  </span>
                  <span className="row-title sm:col-span-6 text-2xl sm:text-3xl lg:text-[38px] font-medium tracking-[-0.04em] leading-[1.05] text-[#0F1330]">
                    {item.title}
                  </span>
                  <span className="sm:col-span-2 flex gap-1.5 flex-wrap">
                    <span className="text-[13px] font-medium px-2.5 py-1 rounded-full bg-[#0F1330] text-[#F7F7F5]">
                      Article
                    </span>
                    <span className="text-[13px] font-medium px-2.5 py-1 rounded-full bg-[#ECEEF8] text-[#1F2AD6]">
                      {item.category}
                    </span>
                  </span>
                  <span className="sm:col-span-2 flex justify-start sm:justify-end items-center gap-4 text-[15px]">
                    <span>{item.readingTime}</span>
                    <span
                      aria-hidden="true"
                      className="row-go w-11 h-11 rounded-full border border-[#DADCE8] flex items-center justify-center text-[#0F1330] shrink-0"
                    >
                      <svg
                        className="spin-ic w-3.5 h-3.5"
                        viewBox="0 0 14 14"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                      >
                        <path d="M3 11L11 3M5 3h6v6" />
                      </svg>
                    </span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* ---------------- SECTION: ARTICLES VIEW (replaces Essays) ---------------- */}
        {section === 'articles' && (
          <div className="swap border-t border-[#0F1330]">
            <div className="divide-y divide-[#DADCE8]">
              {filteredArticles.map((item) => (
                <Link
                  key={item.slug}
                  href={`/writing/${item.slug}`}
                  className="row grid grid-cols-1 sm:grid-cols-12 gap-3 sm:gap-6 items-center py-8 sm:py-10 text-[#5A5F7A]"
                >
                  <span className="sm:col-span-2 text-[15px] font-medium">
                    {formatDate(item.date)}
                  </span>
                  <span className="sm:col-span-6">
                    <span className="row-title block text-2xl sm:text-3xl lg:text-[44px] font-medium tracking-[-0.045em] leading-[1.02] text-[#0F1330]">
                      {item.title}
                    </span>
                    <span className="block mt-2.5 text-[17px] leading-[1.45] text-[#5A5F7A] max-w-[560px]">
                      {item.excerpt}
                    </span>
                  </span>
                  <span className="sm:col-span-2">
                    <span className="inline-block text-[13px] font-medium px-3 py-1 rounded-full bg-[#ECEEF8] text-[#1F2AD6]">
                      {item.category}
                    </span>
                  </span>
                  <span className="sm:col-span-2 flex justify-start sm:justify-end items-center gap-4 text-[15px]">
                    <span>{item.readingTime}</span>
                    <span
                      aria-hidden="true"
                      className="row-go w-11 h-11 rounded-full border border-[#DADCE8] flex items-center justify-center text-[#0F1330] shrink-0"
                    >
                      <svg
                        className="spin-ic w-3.5 h-3.5"
                        viewBox="0 0 14 14"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                      >
                        <path d="M3 11L11 3M5 3h6v6" />
                      </svg>
                    </span>
                  </span>
                </Link>
              ))}
            </div>

            {filteredArticles.length === 0 && (
              <p className="m-0 py-16 text-center text-xl sm:text-[22px] text-[#5A5F7A]">
                No articles on {topic} yet.
              </p>
            )}
          </div>
        )}

        {/* ---------------- SECTION: COMING SOON (Notes, Books, Ideas) ---------------- */}
        {(section === 'notes' || section === 'books' || section === 'ideas') && (
          <div className="swap relative overflow-hidden rounded-[36px] border-[1.5px] border-dashed border-[#B8BCD6] p-8 sm:p-12 lg:p-16 min-h-[480px] box-border grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
            {/* Left Column: Copy & Actions */}
            <div className="lg:col-span-6">
              <span className="inline-flex items-center gap-2.5 text-sm font-medium px-3.5 py-2 rounded-full bg-[#ECEEF8] text-[#1F2AD6]">
                <span className="live-cobalt w-2 h-2 rounded-full bg-[#1F2AD6]" />
                Coming soon
              </span>
              <h3 className="mt-6 mb-0 text-4xl sm:text-6xl lg:text-[72px] font-medium leading-[0.98] tracking-[-0.055em]">
                {soonCopy[section]?.title}
              </h3>
              <p className="mt-4.5 mb-0 max-w-[480px] text-lg sm:text-xl lg:text-[21px] leading-[1.45] text-[#5A5F7A]">
                {soonCopy[section]?.text}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <button
                  onClick={() => handleSectionChange('articles')}
                  className="rl h-[52px] px-6 rounded-full border-0 bg-[#1F2AD6] text-[#F7F7F5] text-[15px] font-semibold cursor-pointer shadow-sm hover:bg-[#1820A8] transition-colors"
                >
                  <span className="roll">
                    <span>Read the articles</span>
                    <span>Read the articles</span>
                  </span>
                </button>
                <Link
                  href="/contact"
                  className="rl h-[52px] px-6 rounded-full border border-[#DADCE8] text-[#0F1330] inline-flex items-center text-[15px] font-semibold hover:border-[#0F1330] transition-colors"
                >
                  <span className="roll">
                    <span>Say hello</span>
                    <span>Say hello</span>
                  </span>
                </Link>
              </div>
            </div>

            {/* Right Column: Custom Graphics per Spec */}
            <div
              aria-hidden="true"
              className="lg:col-span-6 h-[320px] sm:h-[340px] relative flex items-center justify-center select-none"
            >
              {/* Notes Graphic: Stack of 3 note cards */}
              {section === 'notes' && (
                <div className="relative w-[340px] sm:w-[400px] h-[280px]">
                  {/* Card 1: White tilted -6deg */}
                  <div className="ncard absolute left-4 top-5 w-[220px] sm:w-[250px] h-[160px] rounded-[20px] bg-white border border-[#DADCE8] -rotate-6 p-5 box-border shadow-md">
                    <div className="h-2.5 w-4/5 rounded-full bg-[#DADCE8]" />
                    <div className="mt-2.5 h-2.5 w-3/5 rounded-full bg-[#DADCE8]" />
                    <div className="mt-2.5 h-2.5 w-[70%] rounded-full bg-[#DADCE8]" />
                  </div>
                  {/* Card 2: Navy tilted 4deg */}
                  <div className="ncard absolute left-24 sm:left-32 top-16 w-[220px] sm:w-[250px] h-[160px] rounded-[20px] bg-[#0F1330] rotate-4 p-5 box-border shadow-xl">
                    <div className="h-2.5 w-[70%] rounded-full bg-[#2A3060]" />
                    <div className="mt-2.5 h-2.5 w-[85%] rounded-full bg-[#2A3060]" />
                    <div className="mt-2.5 h-2.5 w-1/2 rounded-full bg-[#AEB5FF]" />
                  </div>
                  {/* Card 3: Cobalt tilted -2deg */}
                  <div className="ncard absolute left-14 sm:left-16 top-32 w-[200px] sm:w-[230px] h-[120px] rounded-[20px] bg-[#1F2AD6] -rotate-2 p-4 box-border shadow-lg" />
                </div>
              )}

              {/* Books Graphic: Shelf with 3 books fanning out on hover */}
              {section === 'books' && (
                <div className="shelf relative w-[340px] sm:w-[400px] h-full flex items-end justify-center gap-4 sm:gap-5 pb-7 border-b-[3px] border-[#0F1330]">
                  <div
                    className="b b1 w-24 sm:w-32 h-44 sm:h-52 rounded-[4px_10px_10px_4px] bg-[#AEB5FF] shadow-md"
                    style={{ transformOrigin: 'bottom center' }}
                  />
                  <div
                    className="b b2 w-28 sm:w-36 h-56 sm:h-64 rounded-[4px_10px_10px_4px] bg-[#1F2AD6] shadow-xl flex items-end p-4 box-border"
                    style={{ transformOrigin: 'bottom center' }}
                  >
                    <span className="text-sm sm:text-base text-[#F7F7F5] font-medium leading-tight">
                      Ajaypal Singh
                    </span>
                  </div>
                  <div
                    className="b b3 w-24 sm:w-28 h-40 sm:h-44 rounded-[4px_10px_10px_4px] bg-[#0F1330] shadow-md"
                    style={{ transformOrigin: 'bottom center' }}
                  />
                </div>
              )}

              {/* Ideas Graphic: Orbit rings + pulsing spark with lightbulb */}
              {section === 'ideas' && (
                <div className="relative w-[320px] h-[320px] flex items-center justify-center">
                  <svg
                    className="orb absolute w-[320px] h-[320px]"
                    viewBox="0 0 320 320"
                    fill="none"
                  >
                    <circle cx="160" cy="160" r="158" stroke="#DADCE8" strokeDasharray="3 9" />
                    <circle cx="160" cy="2" r="8" fill="#AEB5FF" />
                  </svg>
                  <svg className="absolute w-[220px] h-[220px]" viewBox="0 0 220 220" fill="none">
                    <circle cx="110" cy="110" r="108" stroke="#DADCE8" />
                  </svg>
                  <div className="spark w-28 sm:w-[120px] h-28 sm:h-[120px] rounded-full bg-[#1F2AD6] flex items-center justify-center shadow-lg">
                    <svg
                      width="44"
                      height="44"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#F7F7F5"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.6.4 1 1.1 1 1.8V16h5v-.3c0-.7.4-1.4 1-1.8A6 6 0 0 0 12 3z" />
                    </svg>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export function WritingView(props: WritingViewProps) {
  return (
    <Suspense fallback={null}>
      <WritingViewInner {...props} />
    </Suspense>
  )
}
