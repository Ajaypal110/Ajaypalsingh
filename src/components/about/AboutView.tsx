'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export function AboutView() {
  const [imageError, setImageError] = useState(false)

  // Chapters 1-3 from SITE_CONTENT_AND_SEO.md Section 3.3
  const chaptersA = [
    {
      n: '01',
      t: 'Learning by doing',
      text: 'Technology got interesting to me once I started building with it. Reading about things was never enough. I wanted to make them work.',
    },
    {
      n: '02',
      t: 'More than code',
      text: 'Over time, technology stopped being only about code. I got curious about how products work and how people actually use software.',
    },
    {
      n: '03',
      t: 'From products to business',
      text: 'Then the questions got bigger. How can a product be better? How does a technical idea turn into a real business?',
    },
  ]

  // Chapters 4-5 from SITE_CONTENT_AND_SEO.md Section 3.3
  const chaptersB = [
    {
      n: '04',
      t: 'Becoming a founder',
      isOjaven: true,
      text: "That's where my interest in entrepreneurship came from. Now I'm building my first venture, Ojaven, and learning a lot from doing it.",
    },
    {
      n: '05',
      t: 'What comes next',
      text: 'Ojaven is my first venture, not my last. I want to keep building products and companies, and this site is where I keep track of it all.',
    },
  ]

  const careItems = [
    { t: 'How products work', r: '50%' },
    { t: 'How people really use software', r: '10px' },
    { t: 'How ideas become businesses', r: '22px 22px 0 0' },
    { t: 'Learning something new', r: '0 22px' },
  ]

  return (
    <div className="w-full bg-[#F7F7F5] text-[#0F1330] font-['Bricolage_Grotesque',sans-serif]">
      {/* 1. HERO SECTION */}
      <section className="relative px-6 sm:px-12 lg:px-16 pt-28 sm:pt-36 lg:pt-44 pb-16 lg:pb-24 max-w-[1440px] mx-auto box-border">
        <p className="m-0 text-sm sm:text-base text-[#5A5F7A] font-mono">About</p>

        {/* Hero Title & Portrait Container */}
        <div className="mt-4 lg:mt-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8">
            <h1 className="m-0 text-5xl sm:text-7xl md:text-8xl lg:text-[140px] xl:text-[180px] font-medium leading-[0.9] tracking-[-0.065em]">
              Hi<span className="inline-block pl-[0.14em]">,</span> I&apos;m Ajaypal.
            </h1>
          </div>

          {/* Portrait Figure */}
          <figure className="lg:col-span-4 w-full max-w-[340px] lg:max-w-none m-0 justify-self-end">
            <div className="h-[360px] sm:h-[420px] lg:h-[460px] rounded-[6px] bg-[#3A45E6] overflow-hidden relative">
              {!imageError ? (
                <Image
                  src="/portrait.jpg"
                  alt="Ajaypal Singh"
                  fill
                  className="object-cover"
                  onError={() => setImageError(true)}
                  priority
                />
              ) : (
                <svg
                  aria-hidden="true"
                  width="100%"
                  height="100%"
                  viewBox="0 0 360 460"
                  preserveAspectRatio="xMidYMax slice"
                >
                  <circle cx="180" cy="190" r="74" fill="#5560F0" />
                  <path d="M20 460c0-120 70-200 160-200s160 80 160 200z" fill="#5560F0" />
                </svg>
              )}

            </div>
            <figcaption className="mt-2.5 flex justify-between text-[13px] text-[#5A5F7A]">
              <span>Rajasthan, India</span>
              <span>2025</span>
            </figcaption>
          </figure>
        </div>

        {/* Lead text & Education Box (Section 3.3) */}
        <div className="mt-12 sm:mt-16 lg:mt-24 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          <p className="lg:col-span-6 m-0 text-2xl sm:text-3xl lg:text-[34px] leading-[1.25] tracking-[-0.025em] text-[#0F1330]">
            I&apos;m a founder and builder. I got into technology by building with it, then got curious about everything around it: products, people and business.
          </p>
          <div className="lg:col-span-6 flex flex-col justify-between gap-6">
            <p className="m-0 text-lg sm:text-xl leading-[1.5] text-[#5A5F7A]">
              Right now I&apos;m building my first venture. This page is the story of how I got here and where I&apos;m taking it.
            </p>
            {/* Education: Only appearance on the site per Rule 9 */}
            <div className="pt-4 border-t border-[#DADCE8] flex justify-between items-center gap-4 text-sm text-[#5A5F7A]">
              <span>Education</span>
              <span className="text-[#0F1330] font-medium">Pursuing B.Tech, Computer Science (AI)</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. WIDE PHOTO PANEL */}
      <section aria-label="Photo" className="px-6 sm:px-12 lg:px-16 max-w-[1440px] mx-auto">
        <div className="h-[320px] sm:h-[460px] lg:h-[600px] rounded-[24px] sm:rounded-[32px] bg-[#1F2AD6] relative overflow-hidden flex flex-col justify-end p-6 sm:p-12 text-[#F7F7F5]">
          <svg
            aria-hidden="true"
            width="1100"
            height="1100"
            viewBox="0 0 1100 1100"
            fill="none"
            className="absolute -right-[300px] -top-[230px] opacity-30 pointer-events-none"
          >
            <circle cx="550" cy="550" r="549" stroke="#AEB5FF" />
            <circle cx="550" cy="550" r="420" stroke="#AEB5FF" />
            <circle cx="550" cy="550" r="290" stroke="#AEB5FF" />
            <circle cx="550" cy="550" r="160" stroke="#AEB5FF" />
          </svg>
          <div className="relative z-10">
            <p className="m-0 text-lg sm:text-2xl lg:text-[28px] tracking-[-0.02em]">
              Building something from zero is the most honest way to learn.
            </p>

          </div>
        </div>
      </section>

      {/* 3. THE LONG VERSION (CHAPTERS A) */}
      <section aria-labelledby="long-title" className="pt-20 sm:pt-32 lg:pt-40 px-6 sm:px-12 lg:px-16 max-w-[1440px] mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 sm:gap-6 border-b border-[#0F1330] pb-6 sm:pb-8">
          <h2
            id="long-title"
            className="m-0 text-4xl sm:text-6xl lg:text-[88px] font-medium tracking-[-0.06em] leading-[0.95]"
          >
            The long version
          </h2>
          <p className="m-0 text-sm sm:text-base text-[#5A5F7A] max-w-[300px]">
            No dates, just the order things happened in.
          </p>
        </div>

        <ol className="list-none m-0 p-0 divide-y divide-[#DADCE8]">
          {chaptersA.map((c) => (
            <li
              key={c.n}
              className="ch-row grid grid-cols-1 lg:grid-cols-12 gap-3 lg:gap-6 py-8 sm:py-12 group cursor-default"
            >
              <span className="lg:col-span-2 text-sm sm:text-base text-[#1F2AD6] font-mono tabular-nums pt-1 sm:pt-2">
                {c.n}
              </span>
              <h3 className="ch-title lg:col-span-4 m-0 text-2xl sm:text-3xl lg:text-[40px] font-medium tracking-[-0.045em] leading-[1.05]">
                {c.t}
              </h3>
              <p className="lg:col-span-6 m-0 text-base sm:text-lg lg:text-[22px] leading-[1.5] text-[#3A3F5C]">
                {c.text}
              </p>
            </li>
          ))}
        </ol>
      </section>

      {/* 4. NAVY QUOTE PANEL */}
      <section className="py-14 sm:py-20 px-6 sm:px-12 lg:px-16 max-w-[1440px] mx-auto">
        <div className="bg-[#0F1330] text-[#F7F7F5] rounded-[24px] sm:rounded-[32px] p-7 sm:p-14 lg:p-20 relative overflow-hidden">
          <svg
            aria-hidden="true"
            width="120"
            height="120"
            viewBox="0 0 42 42"
            className="absolute right-8 sm:right-14 top-8 sm:top-14 opacity-90 hidden sm:block pointer-events-none"
          >
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
          <p className="m-0 max-w-[1050px] text-2xl sm:text-4xl lg:text-[68px] font-medium leading-[1.05] tracking-[-0.055em]">
            I don&apos;t want to be defined by one skill. I want to be known for the things I build.
          </p>
        </div>
      </section>

      {/* 5. CHAPTERS B */}
      <section className="px-6 sm:px-12 lg:px-16 max-w-[1440px] mx-auto">
        <ol start={4} className="list-none m-0 p-0 divide-y divide-[#DADCE8]">
          {chaptersB.map((c) => (
            <li
              key={c.n}
              className="ch-row grid grid-cols-1 lg:grid-cols-12 gap-3 lg:gap-6 py-8 sm:py-12 group cursor-default"
            >
              <span className="lg:col-span-2 text-sm sm:text-base text-[#1F2AD6] font-mono tabular-nums pt-1 sm:pt-2">
                {c.n}
              </span>
              <h3 className="ch-title lg:col-span-4 m-0 text-2xl sm:text-3xl lg:text-[40px] font-medium tracking-[-0.045em] leading-[1.05]">
                {c.t}
              </h3>
              <p className="lg:col-span-6 m-0 text-base sm:text-lg lg:text-[22px] leading-[1.5] text-[#3A3F5C]">
                {c.isOjaven ? (
                  <>
                    That&apos;s where my interest in entrepreneurship came from. Now I&apos;m building my first venture,{' '}
                    <Link href="/ojaven" className="text-[#1F2AD6] underline hover:text-[#0F1330] font-medium transition-colors">
                      Ojaven
                    </Link>
                    , and learning a lot from doing it.
                  </>
                ) : (
                  c.text
                )}
              </p>
            </li>
          ))}
        </ol>
      </section>

      {/* 6. WHAT I KEEP COMING BACK TO (4 CARDS) */}
      <section aria-labelledby="care-title" className="py-20 sm:py-32 px-6 sm:px-12 lg:px-16 max-w-[1440px] mx-auto">
        <h2 id="care-title" className="m-0 text-3xl sm:text-5xl lg:text-[60px] font-medium tracking-[-0.05em]">
          What I keep coming back to
        </h2>

        <div className="mt-8 sm:mt-11 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {careItems.map((k) => (
            <article
              key={k.t}
              className="care h-[240px] sm:h-[280px] rounded-[24px] bg-[#ECEEF8] p-6 sm:p-7 flex flex-col justify-between cursor-default transition-all duration-300 hover:bg-[#1F2AD6] hover:text-[#F7F7F5] group"
            >
              <span
                className="shape w-10 h-10 bg-[#1F2AD6] group-hover:bg-[#F7F7F5] block transition-colors duration-300"
                style={{ borderRadius: k.r }}
                aria-hidden="true"
              />
              <h3 className="m-0 text-xl sm:text-2xl font-medium tracking-[-0.03em] leading-[1.15]">
                {k.t}
              </h3>
            </article>
          ))}
        </div>

        {/* 7. CLOSING LINKS (Section 3.3) */}
        <div className="mt-16 sm:mt-24 pt-8 border-t border-[#DADCE8] flex flex-wrap items-center gap-6 sm:gap-10">
          <Link
            href="/ojaven"
            className="inline-flex items-center gap-2.5 text-base sm:text-lg font-semibold text-[#0F1330] hover:text-[#1F2AD6] transition-colors"
          >
            <span>See what I&apos;m building</span>
            <span>→</span>
          </Link>
          <Link
            href="/writing/articles"
            className="inline-flex items-center gap-2.5 text-base sm:text-lg font-semibold text-[#0F1330] hover:text-[#1F2AD6] transition-colors"
          >
            <span>Read my articles</span>
            <span>→</span>
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2.5 text-base sm:text-lg font-semibold text-[#0F1330] hover:text-[#1F2AD6] transition-colors"
          >
            <span>Say hello</span>
            <span>→</span>
          </Link>
        </div>
      </section>
    </div>
  )
}
