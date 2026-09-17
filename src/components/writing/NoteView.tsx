'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import type { Article } from '@/lib/data/articles'
import { formatDate } from '@/lib/utils'

interface NoteViewProps {
  article: Article
  related: {
    dir: string
    article: Article
    href?: string
  }[]
}

function renderParagraphContent(text: string) {
  const regex = /\[([^\]]+)\]\(([^)]+)\)/g
  const parts: React.ReactNode[] = []
  let lastIndex = 0
  let match: RegExpExecArray | null

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.substring(lastIndex, match.index))
    }
    const [, linkText, url] = match
    const isInternal = url.startsWith('/') || url.startsWith('#')
    if (isInternal) {
      parts.push(
        <Link
          key={match.index}
          href={url}
          className="text-[#1F2AD6] underline underline-offset-4 font-medium hover:text-[#0F1330] transition-colors"
        >
          {linkText}
        </Link>
      )
    } else {
      parts.push(
        <a
          key={match.index}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#1F2AD6] underline underline-offset-4 font-medium hover:text-[#0F1330] transition-colors"
        >
          {linkText}
        </a>
      )
    }
    lastIndex = regex.lastIndex
  }

  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex))
  }

  return parts.length > 0 ? parts : text
}

export function NoteView({ article, related }: NoteViewProps) {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [activeSection, setActiveSection] = useState<number>(0)
  const [copied, setCopied] = useState(false)
  const [mobileTocOpen, setMobileTocOpen] = useState(false)
  const sectionRefs = useRef<(HTMLElement | null)[]>([])

  const sections =
    article.sections && article.sections.length > 0
      ? article.sections
      : [
          {
            id: 'content',
            title: article.title,
            content: article.content,
          },
        ]

  // Calculate scroll progress and active section spy
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = docHeight > 0 ? Math.min(1, Math.max(0, scrollY / docHeight)) : 0
      setScrollProgress(progress)

      // Section active spy (heading crossed 35% of viewport)
      const threshold = window.innerHeight * 0.35
      let currentActive = 0
      sectionRefs.current.forEach((el, index) => {
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= threshold) {
            currentActive = index
          }
        }
      })
      setActiveSection(currentActive)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Copy link handler
  const handleCopy = () => {
    try {
      if (typeof navigator !== 'undefined' && navigator.clipboard) {
        navigator.clipboard.writeText(window.location.href)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
      }
    } catch {
      // noop
    }
  }

  // Reading time minutes left estimation
  const totalMinutes = parseInt(article.readingTime, 10) || 5
  const minsLeft = Math.max(0, Math.ceil(totalMinutes * (1 - scrollProgress)))
  const readLeftText = minsLeft > 0 ? `${minsLeft} min left` : 'Finished'

  // Ring offset calculation (circumference is 2 * PI * 16 ≈ 100.5)
  const circumference = 100.5
  const ringOffset = circumference * (1 - scrollProgress)

  const shareUrl = typeof window !== 'undefined' ? window.location.href : `https://ajaypalsingh.in/writing/${article.slug}`
  const shareXUrl = `https://x.com/intent/post?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(article.title)}`
  const shareLinkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`

  return (
    <div className="relative w-full">
      {/* 1. READING PROGRESS BAR (fixed at top 3px) */}
      <div
        aria-hidden="true"
        className="fixed top-0 left-0 right-0 h-[3px] z-[90] pointer-events-none bg-transparent"
      >
        <div
          className="h-full bg-[#1F2AD6] origin-left transition-transform duration-75 ease-out"
          style={{ transform: `scaleX(${scrollProgress})` }}
        />
      </div>

      <article className="w-full text-[#0F1330]">
        {/* 2. HERO / HEADER SECTION */}
        <header className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-16 pt-28 sm:pt-36 lg:pt-[150px] box-border">
          {/* Breadcrumbs Row */}
          <nav
            aria-label="Breadcrumb"
            className="flex justify-between items-center text-[15px] text-[#5A5F7A]"
          >
            <ol className="list-none m-0 p-0 flex items-center gap-2.5">
              <li>
                <Link href="/" className="text-[#5A5F7A] hover:text-[#1F2AD6] transition-colors">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/writing" className="text-[#5A5F7A] hover:text-[#1F2AD6] transition-colors">
                  Writing
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/writing/articles" className="text-[#5A5F7A] hover:text-[#1F2AD6] transition-colors">
                  Articles
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-[#0F1330] font-medium line-clamp-1 max-w-[200px] sm:max-w-[380px]">
                {article.title}
              </li>
            </ol>
            <Link
              href="/writing/articles"
              className="group flex items-center gap-2.5 text-[#0F1330] hover:text-[#1F2AD6] font-medium transition-colors"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:-translate-x-1.5"
              >
                <path d="M13 8H3M7 4L3 8l4 4" />
              </svg>
              <span>All articles</span>
            </Link>
          </nav>

          {/* Main Title & Meta Row */}
          <div className="mt-12 sm:mt-16 lg:mt-[72px] grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-end">
            {/* Left 8 columns */}
            <div className="lg:col-span-8">
              <div className="flex flex-wrap items-center gap-3.5 text-[15px] text-[#5A5F7A]">
                <Link
                  href={`/writing?topic=${encodeURIComponent(article.category)}`}
                  className="px-3.5 py-1.5 rounded-full bg-[#ECEEF8] text-[#1F2AD6] font-medium hover:bg-[#1F2AD6] hover:text-[#F7F7F5] transition-colors"
                >
                  {article.category}
                </Link>
                <time dateTime={article.date}>{formatDate(article.date)}</time>
                <span aria-hidden="true" className="w-1 h-1 rounded-full bg-[#B8BCD6]" />
                <span>{article.readingTime}</span>
              </div>
              <h1 className="m-0 mt-6 sm:mt-7 text-5xl sm:text-7xl lg:text-[100px] xl:text-[124px] font-medium leading-[0.92] tracking-[-0.065em] text-[#0F1330]">
                {article.title}
              </h1>
            </div>

            {/* Right 4 columns: Excerpt & Author */}
            <div className="lg:col-span-4">
              <p className="m-0 text-xl sm:text-2xl leading-[1.4] tracking-[-0.015em] text-[#3A3F5C]">
                {article.excerpt}
              </p>
              <div className="mt-7 pt-5 border-t border-[#DADCE8] flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-full bg-[#3A45E6] overflow-hidden flex items-center justify-center shrink-0">
                  <svg width="40" height="40" viewBox="0 0 40 40" aria-hidden="true">
                    <circle cx="20" cy="16" r="8" fill="#5560F0" />
                    <path d="M4 40c0-9 7-15 16-15s16 6 16 15z" fill="#5560F0" />
                  </svg>
                </div>
                <div className="leading-snug">
                  <Link
                    href="/about"
                    className="text-[17px] font-semibold text-[#0F1330] hover:text-[#1F2AD6] transition-colors block"
                  >
                    Ajaypal Singh
                  </Link>
                  <div className="text-[14px] text-[#5A5F7A]">Founder and builder</div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* 3. COVER FIGURE */}
        <figure className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-16 mt-12 sm:mt-16 box-border">
          <div className="relative h-[340px] sm:h-[460px] lg:h-[560px] rounded-[28px] sm:rounded-[32px] bg-[#1F2AD6] overflow-hidden text-[#F7F7F5] p-8 sm:p-11 flex flex-col justify-between">
            {/* Concentric circles SVG */}
            <svg
              aria-hidden="true"
              width="1000"
              height="1000"
              viewBox="0 0 1000 1000"
              fill="none"
              className="absolute -right-48 sm:-right-60 -top-52 sm:-top-64 opacity-35 pointer-events-none"
            >
              <circle cx="500" cy="500" r="499" stroke="#AEB5FF" />
              <circle cx="500" cy="500" r="380" stroke="#AEB5FF" />
              <circle cx="500" cy="500" r="260" stroke="#AEB5FF" />
              <circle cx="500" cy="500" r="140" stroke="#AEB5FF" />
            </svg>

            {/* Inverted Monogram Logo Mark */}
            <svg
              aria-hidden="true"
              width="52"
              height="52"
              viewBox="0 0 42 42"
              className="relative z-10"
            >
              <circle cx="21" cy="21" r="21" fill="#F7F7F5" />
              <path
                d="M12 28 L19 13 L26 28"
                fill="none"
                stroke="#1F2AD6"
                strokeWidth="2.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M31 16.5c-1-1.6-2.6-2.3-4.3-2.3"
                fill="none"
                stroke="#1F2AD6"
                strokeWidth="2.6"
                strokeLinecap="round"
              />
              <circle cx="31" cy="26.5" r="2.4" fill="#AEB5FF" />
            </svg>

            {/* Note title & footer */}
            <div className="relative z-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <p
                aria-hidden="true"
                className="m-0 max-w-[760px] text-3xl sm:text-5xl lg:text-[76px] xl:text-[88px] font-medium leading-[0.95] tracking-[-0.06em]"
              >
                {article.title}
              </p>
              <p className="m-0 text-[14px] sm:text-[15px] text-[#D6DAFF] shrink-0">
                ajaypalsingh.in / articles
              </p>
            </div>
          </div>
          <figcaption className="mt-3 text-[13px] text-[#5A5F7A]">
            Cover image. The same design is used for this article&apos;s share image.
          </figcaption>
        </figure>

        {/* 4. BODY LAYOUT (12 COLUMNS) */}
        <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-16 mt-16 sm:mt-24 box-border grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-start">
          {/* Mobile Collapsible TOC button */}
          <div className="lg:hidden col-span-1 border border-[#DADCE8] rounded-2xl p-4 bg-white">
            <button
              onClick={() => setMobileTocOpen(!mobileTocOpen)}
              className="w-full flex items-center justify-between text-sm font-medium text-[#0F1330]"
            >
              <span>On this page ({sections.length} sections)</span>
              <span>{mobileTocOpen ? '↑' : '↓'}</span>
            </button>
            {mobileTocOpen && (
              <ol className="list-none mt-3 pt-3 border-t border-[#DADCE8] space-y-2">
                {sections.map((sec, idx) => (
                  <li key={sec.id}>
                    <a
                      href={`#${sec.id}`}
                      onClick={() => setMobileTocOpen(false)}
                      className={`block text-sm ${idx === activeSection ? 'text-[#1F2AD6] font-semibold' : 'text-[#5A5F7A]'}`}
                    >
                      {sec.title}
                    </a>
                  </li>
                ))}
              </ol>
            )}
          </div>

          {/* DESKTOP LEFT ASIDE: Sticky "On this page" TOC */}
          <aside
            aria-label="On this page"
            className="hidden lg:block lg:col-span-3 sticky top-[130px]"
          >
            <p className="m-0 mb-4 text-sm text-[#5A5F7A] font-medium">On this page</p>
            <ol className="list-none m-0 p-0 border-l border-[#DADCE8]">
              {sections.map((sec, i) => {
                const isActive = i === activeSection
                return (
                  <li key={sec.id} className="relative">
                    <a
                      href={`#${sec.id}`}
                      className={`relative block py-2.5 pl-5 text-[16px] transition-all duration-300 ${
                        isActive
                          ? 'text-[#0F1330] font-semibold pl-6'
                          : 'text-[#8A8FB0] hover:text-[#0F1330]'
                      }`}
                    >
                      {/* Active indicator 7px dot */}
                      <span
                        aria-hidden="true"
                        className={`absolute -left-[4px] top-1/2 -mt-[3.5px] w-[7px] h-[7px] rounded-full bg-[#1F2AD6] transition-transform duration-300 ${
                          isActive ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
                        }`}
                      />
                      {sec.title}
                    </a>
                  </li>
                )
              })}
            </ol>

            {/* Reading progress ring & minutes left widget */}
            <div className="mt-7 flex items-center gap-3 text-sm text-[#5A5F7A] font-mono">
              <svg
                width="36"
                height="36"
                viewBox="0 0 40 40"
                aria-hidden="true"
                className="-rotate-90 shrink-0"
              >
                <circle
                  cx="20"
                  cy="20"
                  r="16"
                  fill="none"
                  stroke="#DADCE8"
                  strokeWidth="3"
                />
                <circle
                  cx="20"
                  cy="20"
                  r="16"
                  fill="none"
                  stroke="#1F2AD6"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeDasharray={circumference}
                  strokeDashoffset={ringOffset}
                  className="transition-all duration-150 ease-out"
                />
              </svg>
              <span>{readLeftText}</span>
            </div>
          </aside>

          {/* CENTER: THE EDITORIAL PROSE */}
          <div className="lg:col-span-6 min-w-0">
            {sections.map((sec, secIdx) => (
              <section
                key={sec.id}
                id={sec.id}
                ref={(el) => {
                  sectionRefs.current[secIdx] = el
                }}
                className="scroll-mt-28"
              >
                {/* Heading 2 with link hash icon on hover */}
                {sec.title !== article.title && (
                  <h2 className="relative group m-0 mt-16 sm:mt-20 mb-5 text-3xl sm:text-[42px] font-medium leading-[1.05] tracking-[-0.045em] text-[#0F1330]">
                    <a
                      href={`#${sec.id}`}
                      aria-label={`Link to section ${sec.title}`}
                      className="absolute -left-10 sm:-left-11 top-1.5 w-8 h-8 rounded-full flex items-center justify-center text-[#1F2AD6] opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300"
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        aria-hidden="true"
                      >
                        <path d="M6.5 9.5a3 3 0 0 0 4.2 0l2-2a3 3 0 0 0-4.2-4.2l-.8.8M9.5 6.5a3 3 0 0 0-4.2 0l-2 2a3 3 0 0 0 4.2 4.2l.8-.8" />
                      </svg>
                    </a>
                    {sec.title}
                  </h2>
                )}

                {/* Section Paragraphs */}
                {sec.content.map((pText, pIdx) => {
                  const isFirstEver = secIdx === 0 && pIdx === 0
                  return (
                    <p
                      key={pIdx}
                      className={`m-0 mb-7 ${
                        isFirstEver
                          ? 'text-[22px] sm:text-[25px] leading-[1.55] text-[#0F1330]'
                          : 'text-[18px] sm:text-[21px] leading-[1.72] text-[#262B4A]'
                      }`}
                    >
                      {renderParagraphContent(pText)}
                    </p>
                  )
                })}

                {/* SPECIAL FIGURE: Interactive Tool Pile on the tools section */}
                {sec.id === 'tools' && (
                  <figure className="group/pile my-11">
                    <div className="relative h-[300px] rounded-[28px] bg-[#ECEEF8] overflow-hidden">
                      {/* Card 1: Client messaging */}
                      <div className="absolute left-1/2 top-[70px] -ml-[110px] w-[220px] h-[150px] rounded-[18px] bg-white border border-[#DADCE8] p-[18px] box-border -rotate-6 shadow-[0_20px_40px_-24px_rgba(15,19,48,0.35)] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/pile:-translate-x-[150px] group-hover/pile:translate-y-[24px] group-hover/pile:-rotate-[10deg]">
                        <div className="w-7 h-7 rounded-full bg-[#AEB5FF]" />
                        <p className="m-0 mt-10 text-[18px] font-medium text-[#0F1330] leading-tight">
                          Client messaging
                        </p>
                      </div>

                      {/* Card 2: Tasks */}
                      <div className="absolute left-1/2 top-[60px] -ml-[110px] w-[220px] h-[150px] rounded-[18px] bg-white border border-[#DADCE8] p-[18px] box-border -rotate-2 shadow-[0_20px_40px_-24px_rgba(15,19,48,0.35)] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/pile:-translate-x-[50px] group-hover/pile:-translate-y-[10px] group-hover/pile:-rotate-[3deg]">
                        <div className="w-7 h-7 rounded-[8px] bg-[#0F1330]" />
                        <p className="m-0 mt-10 text-[18px] font-medium text-[#0F1330] leading-tight">
                          Tasks
                        </p>
                      </div>

                      {/* Card 3: File approvals */}
                      <div className="absolute left-1/2 top-[68px] -ml-[110px] w-[220px] h-[150px] rounded-[18px] bg-white border border-[#DADCE8] p-[18px] box-border rotate-3 shadow-[0_20px_40px_-24px_rgba(15,19,48,0.35)] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/pile:translate-x-[50px] group-hover/pile:translate-y-[14px] group-hover/pile:rotate-[4deg]">
                        <div className="w-7 h-7 rounded-t-[14px] bg-[#5560F0]" />
                        <p className="m-0 mt-10 text-[18px] font-medium text-[#0F1330] leading-tight">
                          File approvals
                        </p>
                      </div>

                      {/* Card 4: Invoicing */}
                      <div className="absolute left-1/2 top-[76px] -ml-[110px] w-[220px] h-[150px] rounded-[18px] bg-[#1F2AD6] p-[18px] box-border rotate-7 shadow-[0_20px_40px_-24px_rgba(15,19,48,0.45)] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/pile:translate-x-[150px] group-hover/pile:-translate-y-[18px] group-hover/pile:rotate-[10deg]">
                        <div className="w-7 h-7 rounded-br-[14px] bg-[#F7F7F5]" />
                        <p className="m-0 mt-10 text-[18px] font-medium text-[#F7F7F5] leading-tight">
                          Invoicing
                        </p>
                      </div>
                    </div>
                    <figcaption className="mt-3 flex justify-between items-center text-sm text-[#5A5F7A]">
                      <span>One tool for every job adds up fast.</span>
                      <span className="text-[#1F2AD6] font-medium">Hover to spread</span>
                    </figcaption>
                  </figure>
                )}
              </section>
            ))}

            {/* PULL QUOTE */}
            {article.quote && (
              <blockquote className="my-14 p-0 relative">
                <svg
                  aria-hidden="true"
                  width="44"
                  height="34"
                  viewBox="0 0 44 34"
                  fill="#1F2AD6"
                >
                  <path d="M0 34V20C0 8 6 1 18 0v7c-6 1-9 5-9 11h9v16zm26 0V20c0-12 6-19 18-20v7c-6 1-9 5-9 11h9v16z" />
                </svg>
                <p className="m-0 mt-4 text-2xl sm:text-[36px] lg:text-[44px] leading-[1.1] font-medium tracking-[-0.04em] text-[#0F1330]">
                  {article.quote}
                </p>
              </blockquote>
            )}

            {/* OJAVEN CALLOUT BOX */}
            {article.category === 'Building Ojaven' && (
              <aside className="my-12 p-6 sm:p-7 rounded-[22px] bg-[#0F1330] text-[#F7F7F5] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
                <div>
                  <p className="m-0 text-sm text-[#AEB5FF] font-medium">Where it stands</p>
                  <p className="m-0 mt-1.5 text-xl sm:text-[22px] tracking-[-0.02em]">
                    Ojaven is in development. Planned launch: 10 July 2027.
                  </p>
                </div>
                <Link
                  href="/ojaven"
                  className="group/btn shrink-0 inline-flex items-center justify-center h-12 px-5 rounded-full bg-[#F7F7F5] !text-[#0F1330] text-[15px] font-semibold hover:bg-white transition-all overflow-hidden"
                  style={{ color: '#0F1330' }}
                >
                  <span className="relative flex flex-col h-[1.25em] leading-[1.25em] overflow-hidden" style={{ color: '#0F1330' }}>
                    <span className="transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover/btn:-translate-y-full" style={{ color: '#0F1330' }}>
                      Follow the build
                    </span>
                    <span className="transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover/btn:-translate-y-full" style={{ color: '#0F1330' }}>
                      Follow the build
                    </span>
                  </span>
                </Link>
              </aside>
            )}

            {/* ARTICLE FOOTER: TAGS & PUBLISHED DATE */}
            <div className="mt-16 pt-7 border-t border-[#DADCE8] flex flex-wrap justify-between items-center gap-4">
              <div className="flex gap-2 flex-wrap">
                {(article.tags || [article.category]).map((tag) => (
                  <Link
                    key={tag}
                    href={`/writing?topic=${encodeURIComponent(tag)}`}
                    className="text-sm px-3.5 py-1.5 rounded-full bg-[#ECEEF8] text-[#1F2AD6] hover:bg-[#1F2AD6] hover:text-[#F7F7F5] transition-colors"
                  >
                    {tag}
                  </Link>
                ))}
              </div>
              <span className="text-sm text-[#5A5F7A]">
                Published {formatDate(article.date)}
              </span>
            </div>
          </div>

          {/* DESKTOP RIGHT ASIDE: Sticky Share Buttons */}
          <aside
            aria-label="Share this article"
            className="lg:col-span-2 lg:col-start-11 sticky top-[130px] flex lg:flex-col items-center lg:items-end gap-2.5"
          >
            <p className="m-0 mb-1.5 text-sm text-[#5A5F7A] hidden lg:block">Share</p>

            {/* Copy Link button */}
            <button
              onClick={handleCopy}
              aria-label="Copy link to this article"
              className="w-12 h-12 rounded-full border border-[#DADCE8] bg-white text-[#0F1330] hover:bg-[#0F1330] hover:text-[#F7F7F5] hover:border-[#0F1330] flex items-center justify-center transition-all duration-300 cursor-pointer shadow-sm hover:-translate-y-0.5"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                aria-hidden="true"
              >
                <path d="M6.5 9.5a3 3 0 0 0 4.2 0l2-2a3 3 0 0 0-4.2-4.2l-.8.8M9.5 6.5a3 3 0 0 0-4.2 0l-2 2a3 3 0 0 0 4.2 4.2l.8-.8" />
              </svg>
            </button>

            {/* Share on X */}
            <a
              href={shareXUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Share on X"
              className="w-12 h-12 rounded-full border border-[#DADCE8] bg-white text-[#0F1330] hover:bg-[#0F1330] hover:text-[#F7F7F5] hover:border-[#0F1330] flex items-center justify-center transition-all duration-300 shadow-sm hover:-translate-y-0.5"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                <path d="M12.2 1.5h2.2L9.6 7l5.6 7.5h-4.4L7.4 10l-3.9 4.5H1.3l5.1-5.9L1 1.5h4.5l3.1 4.1zm-.8 11.7h1.2L4.8 2.8H3.5z" />
              </svg>
            </a>

            {/* Share on LinkedIn */}
            <a
              href={shareLinkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Share on LinkedIn"
              className="w-12 h-12 rounded-full border border-[#DADCE8] bg-white text-[#0F1330] hover:bg-[#0F1330] hover:text-[#F7F7F5] hover:border-[#0F1330] flex items-center justify-center transition-all duration-300 shadow-sm hover:-translate-y-0.5"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                <path d="M3.6 5.5H1V15h2.6zM2.3 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM15 9.6c0-2.6-1.4-4.3-3.6-4.3-1.3 0-2.1.7-2.5 1.3V5.5H6.4V15H9v-4.9c0-1.2.4-2.2 1.7-2.2 1.2 0 1.6 1 1.6 2.3V15H15z" />
              </svg>
            </a>

            {/* Copied Toast */}
            {copied && (
              <span
                role="status"
                className="mt-1.5 text-xs bg-[#0F1330] text-[#F7F7F5] rounded-full px-3 py-1.5 transition-all shadow-md animate-fade-in"
              >
                Link copied
              </span>
            )}
          </aside>
        </div>

        {/* 5. AUTHOR BOX */}
        <section
          aria-label="About the author"
          className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-16 mt-24 sm:mt-28 box-border"
        >
          <div className="relative overflow-hidden rounded-[28px] sm:rounded-[32px] bg-[#1F2AD6] text-[#F7F7F5] p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
            {/* Concentric circles SVG */}
            <svg
              aria-hidden="true"
              width="520"
              height="520"
              viewBox="0 0 520 520"
              fill="none"
              className="absolute -right-40 -top-48 opacity-35 pointer-events-none"
            >
              <circle cx="260" cy="260" r="259" stroke="#AEB5FF" />
              <circle cx="260" cy="260" r="180" stroke="#AEB5FF" />
              <circle cx="260" cy="260" r="100" stroke="#AEB5FF" />
            </svg>

            {/* Left 2 cols: Photo / Avatar */}
            <div className="lg:col-span-2 flex justify-start">
              <div className="w-[120px] sm:w-[140px] h-[120px] sm:h-[140px] rounded-full bg-[#3A45E6] overflow-hidden flex items-center justify-center relative shadow-md">
                <svg width="100" height="100" viewBox="0 0 40 40" aria-hidden="true">
                  <circle cx="20" cy="16" r="8" fill="#5560F0" />
                  <path d="M4 40c0-9 7-15 16-15s16 6 16 15z" fill="#5560F0" />
                </svg>
              </div>
            </div>

            {/* Center 7 cols: Bio info */}
            <div className="lg:col-span-7 relative">
              <p className="m-0 text-sm text-[#D6DAFF]">Written by</p>
              <p className="m-0 mt-1.5 text-3xl sm:text-5xl font-medium tracking-[-0.05em] leading-tight">
                Ajaypal Singh
              </p>
              <p className="m-0 mt-3 text-base sm:text-lg text-[#D6DAFF] leading-[1.45]">
                Founder and builder. I build products and the companies behind them. Currently building Ojaven.
              </p>
            </div>

            {/* Right 3 cols: Buttons */}
            <div className="lg:col-span-3 flex flex-col sm:flex-row lg:flex-col gap-2.5 relative">
              <Link
                href="/about"
                className="group/btn h-[52px] rounded-full bg-[#F7F7F5] !text-[#0F1330] flex items-center justify-center text-[15px] font-semibold hover:bg-white transition-all overflow-hidden"
                style={{ color: '#0F1330' }}
              >
                <span className="relative flex flex-col h-[1.25em] leading-[1.25em] overflow-hidden" style={{ color: '#0F1330' }}>
                  <span className="transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover/btn:-translate-y-full" style={{ color: '#0F1330' }}>
                    About me
                  </span>
                  <span className="transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover/btn:-translate-y-full" style={{ color: '#0F1330' }}>
                    About me
                  </span>
                </span>
              </Link>
              <Link
                href="/contact"
                className="group/btn h-[52px] rounded-full border border-[#AEB5FF] text-[#F7F7F5] flex items-center justify-center text-[15px] font-semibold hover:border-white transition-all overflow-hidden"
              >
                <span className="relative flex flex-col h-[1.25em] leading-[1.25em] overflow-hidden">
                  <span className="transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover/btn:-translate-y-full">
                    Say hello
                  </span>
                  <span className="transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover/btn:-translate-y-full">
                    Say hello
                  </span>
                </span>
              </Link>
            </div>
          </div>
        </section>

        {/* 6. KEEP READING SECTION */}
        <section
          aria-labelledby="more-title"
          className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-16 pt-24 sm:pt-28 pb-32 sm:pb-40 box-border"
        >
          <div className="flex justify-between items-end border-b border-[#0F1330] pb-6">
            <h2
              id="more-title"
              className="m-0 text-4xl sm:text-6xl font-medium tracking-[-0.05em] text-[#0F1330]"
            >
              Keep reading
            </h2>
            <Link
              href="/writing/articles"
              className="group flex items-center gap-2.5 text-[16px] font-semibold text-[#0F1330] hover:text-[#1F2AD6] transition-colors"
            >
              <span>All articles</span>
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:rotate-45"
              >
                <path d="M3 11L11 3M5 3h6v6" />
              </svg>
            </Link>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
            {related.map((relItem) => {
              const rel = relItem.article
              const relHref = relItem.href || `/writing/${rel.slug}`
              return (
                <Link
                  key={rel.slug}
                  href={relHref}
                  className="group min-h-[300px] rounded-[28px] bg-[#ECEEF8] text-[#0F1330] p-8 sm:p-9 box-border flex flex-col justify-between hover:bg-[#1F2AD6] hover:text-[#F7F7F5] transition-all duration-500 shadow-sm hover:-translate-y-2"
                >
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-[#5A5F7A] group-hover:text-[#D6DAFF] transition-colors">
                      {relItem.dir}
                    </span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 14 14"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    aria-hidden="true"
                    className="transition-transform duration-500 group-hover:rotate-45"
                  >
                    <path d="M3 11L11 3M5 3h6v6" />
                  </svg>
                </div>

                <div>
                  <h3 className="m-0 text-2xl sm:text-[40px] lg:text-[44px] font-medium leading-[1.02] tracking-[-0.045em] max-w-[16ch]">
                    {rel.title}
                  </h3>
                  <div className="mt-5 flex items-center gap-3 text-sm">
                    <span className="px-3 py-1 rounded-full bg-white text-[#1F2AD6] group-hover:bg-white/20 group-hover:text-[#F7F7F5] transition-colors font-medium">
                      {rel.category}
                    </span>
                    <span className="text-[#5A5F7A] group-hover:text-[#D6DAFF] transition-colors">
                      {formatDate(rel.date)} · {rel.readingTime}
                    </span>
                  </div>
                </div>
              </Link>
            )
          })}
          </div>
        </section>
      </article>
    </div>
  )
}
