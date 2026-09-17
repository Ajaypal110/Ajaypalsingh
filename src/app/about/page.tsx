'use client'

import Image from 'next/image'
import { useState } from 'react'
import { generateAboutJsonLd } from '@/lib/seo'

export default function AboutPage() {
  const [imageError, setImageError] = useState(false)
  const jsonLd = generateAboutJsonLd()

  const chaptersA = [
    {
      n: '01',
      t: 'Learning by doing',
      text: 'Technology got interesting to me once I started learning it properly and building with it. Reading about things was never enough. I wanted to make them work.',
    },
    {
      n: '02',
      t: 'More than code',
      text: 'Over time, learning technology stopped being only about programming languages. I got curious about how products work and how people actually use software.',
    },
    {
      n: '03',
      t: 'From products to business',
      text: 'Then the questions got bigger. How can a product be better? How does a technical idea turn into a real business?',
    },
  ]

  const chaptersB = [
    {
      n: '04',
      t: 'Becoming a founder',
      text: "That's where my interest in entrepreneurship came from. Now I'm building my first venture, Ojaven, and learning a lot from doing it.",
    },
    {
      n: '05',
      t: 'Still early',
      text: "I'm in my second year of B.Tech CSE with an AI focus. I'm early in all of this, and that's fine. This site is where I'll keep track of what comes next.",
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 1. HERO SECTION */}
      <section className="relative min-h-[900px] lg:min-h-[1000px] px-6 sm:px-16 pt-36 pb-20 max-w-[1440px] mx-auto box-border">
        <p className="m-0 text-base text-[#5A5F7A] font-mono">About</p>

        {/* Hero Title */}
        <h1 className="m-0 mt-6 max-w-[900px] text-6xl sm:text-8xl md:text-[130px] lg:text-[170px] xl:text-[196px] font-medium leading-[0.88] tracking-[-0.065em]">
          Hi, I&apos;m Ajaypal.
        </h1>

        {/* Portrait Figure */}
        <figure className="mt-8 lg:mt-0 lg:absolute lg:top-[150px] lg:right-16 w-full max-w-[340px] lg:w-[360px] m-0">
          <div className="h-[420px] lg:h-[460px] rounded-[6px] bg-[#3A45E6] overflow-hidden relative">
            {!imageError ? (
              <Image
                src="/portrait.jpg"
                alt="Ajaypal Singh"
                fill
                className="object-cover"
                onError={() => setImageError(true)}
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
            <span className="absolute left-4 bottom-4 text-[13px] text-[#F7F7F5] font-mono">
              [Your photo]
            </span>
          </div>
          <figcaption className="mt-2.5 flex justify-between text-[13px] text-[#5A5F7A] font-mono">
            <span>India</span>
            <span>2026</span>
          </figcaption>
        </figure>

        {/* Intro Paragraphs */}
        <div className="mt-16 lg:mt-32 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <p className="lg:col-span-6 m-0 text-2xl sm:text-3xl lg:text-[36px] leading-[1.22] tracking-[-0.025em] text-[#0F1330]">
            I&apos;m a second-year B.Tech CSE student with an AI focus. I got into technology by learning it and building with it, and then got curious about everything around it.
          </p>
          <p className="lg:col-start-8 lg:col-span-4 m-0 text-lg sm:text-xl leading-[1.5] text-[#5A5F7A]">
            I&apos;m building toward being a founder, and I&apos;m early in that. This page is the honest version of how I got here and where I&apos;m going.
          </p>
        </div>
      </section>

      {/* 2. WIDE PHOTO PANEL */}
      <section aria-label="Photo" className="px-6 sm:px-16 max-w-[1440px] mx-auto">
        <div className="h-[400px] sm:h-[520px] lg:h-[640px] rounded-[32px] bg-[#1F2AD6] relative overflow-hidden flex flex-col justify-end p-8 sm:p-12 text-[#F7F7F5]">
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
            <p className="m-0 text-xl sm:text-2xl lg:text-[28px] tracking-[-0.02em]">
              [Wide photo: you working, or a place that matters to you]
            </p>
            <p className="m-0 mt-2 text-sm text-[#D6DAFF] font-mono">
              Landscape, 2:1
            </p>
          </div>
        </div>
      </section>

      {/* 3. THE LONG VERSION (CHAPTERS A) */}
      <section aria-labelledby="long-title" className="pt-24 sm:pt-36 lg:pt-44 px-6 sm:px-16 max-w-[1440px] mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 border-b border-[#0F1330] pb-8">
          <h2
            id="long-title"
            className="m-0 text-5xl sm:text-7xl lg:text-[96px] font-medium tracking-[-0.06em] leading-[0.95]"
          >
            The long version
          </h2>
          <p className="m-0 text-base sm:text-lg text-[#5A5F7A] max-w-[300px]">
            No dates, just the order things happened in.
          </p>
        </div>

        <ol className="list-none m-0 p-0 divide-y divide-[#DADCE8]">
          {chaptersA.map((c) => (
            <li
              key={c.n}
              className="ch-row grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 py-10 sm:py-12 group cursor-default"
            >
              <span className="lg:col-span-2 text-base text-[#1F2AD6] font-mono tabular-nums pt-2">
                {c.n}
              </span>
              <h3 className="ch-title lg:col-span-4 m-0 text-3xl sm:text-4xl lg:text-[44px] font-medium tracking-[-0.045em] leading-[1.02]">
                {c.t}
              </h3>
              <p className="lg:col-span-6 m-0 text-lg sm:text-xl lg:text-[23px] leading-[1.5] text-[#3A3F5C]">
                {c.text}
              </p>
            </li>
          ))}
        </ol>
      </section>

      {/* 4. NAVY QUOTE PANEL */}
      <section className="py-16 sm:py-20 px-6 sm:px-16 max-w-[1440px] mx-auto">
        <div className="bg-[#0F1330] text-[#F7F7F5] rounded-[32px] p-8 sm:p-16 lg:p-20 relative overflow-hidden">
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
          <p className="m-0 max-w-[1050px] text-3xl sm:text-5xl lg:text-[76px] font-medium leading-[1.02] tracking-[-0.055em]">
            I don&apos;t want to be defined by one skill. I want to be known for the things I build.
          </p>
        </div>
      </section>

      {/* 5. CHAPTERS B */}
      <section className="px-6 sm:px-16 max-w-[1440px] mx-auto">
        <ol start={4} className="list-none m-0 p-0 divide-y divide-[#DADCE8]">
          {chaptersB.map((c) => (
            <li
              key={c.n}
              className="ch-row grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 py-10 sm:py-12 group cursor-default"
            >
              <span className="lg:col-span-2 text-base text-[#1F2AD6] font-mono tabular-nums pt-2">
                {c.n}
              </span>
              <h3 className="ch-title lg:col-span-4 m-0 text-3xl sm:text-4xl lg:text-[44px] font-medium tracking-[-0.045em] leading-[1.02]">
                {c.t}
              </h3>
              <p className="lg:col-span-6 m-0 text-lg sm:text-xl lg:text-[23px] leading-[1.5] text-[#3A3F5C]">
                {c.text}
              </p>
            </li>
          ))}
        </ol>
      </section>

      {/* 6. WHAT I KEEP COMING BACK TO (4 CARDS) */}
      <section aria-labelledby="care-title" className="py-24 sm:py-36 lg:py-44 px-6 sm:px-16 max-w-[1440px] mx-auto">
        <h2 id="care-title" className="m-0 text-4xl sm:text-5xl lg:text-[64px] font-medium tracking-[-0.05em]">
          What I keep coming back to
        </h2>

        <div className="mt-11 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {careItems.map((k) => (
            <article
              key={k.t}
              className="care h-[280px] sm:h-[300px] rounded-[26px] bg-[#ECEEF8] p-7 flex flex-col justify-between cursor-default"
            >
              <span
                className="shape w-11 h-11 bg-[#1F2AD6] block"
                style={{ borderRadius: k.r }}
                aria-hidden="true"
              />
              <h3 className="m-0 text-2xl sm:text-[28px] font-medium tracking-[-0.03em] leading-[1.1]">
                {k.t}
              </h3>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
