'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

interface Question {
  t: string
  a: string
}

interface RoadStep {
  when: string
  what: string
  bg: string
  border?: string
  align: string
  justify: string
  isCurrent?: boolean
}

export function OjavenView() {
  const [days, setDays] = useState<number | null>(null)

  useEffect(() => {
    const launchDate = new Date('2027-07-10T00:00:00+05:30').getTime()
    const diff = Math.max(0, Math.ceil((launchDate - Date.now()) / (1000 * 60 * 60 * 24)))
    setDays(diff)
  }, [])

  const questions: Question[] = [
    {
      t: "Why I'm building it",
      a: '[The moment or reason Ojaven started for you, in two or three sentences]',
    },
    {
      t: 'The problem I see',
      a: '[What modern agencies struggle with today, as you have seen it]',
    },
    {
      t: 'What I want it to become',
      a: '[Where you want Ojaven to be a few years after launch]',
    },
    {
      t: "What I'm learning",
      a: '[One or two real lessons from building it so far]',
    },
  ]

  const roadSteps: RoadStep[] = [
    {
      when: '[Date]',
      what: 'Started building',
      bg: '#1F2AD6',
      align: 'text-left',
      justify: 'justify-start',
    },
    {
      when: 'Now',
      what: 'In development',
      bg: '#F7F7F5',
      border: '9px solid #1F2AD6',
      align: 'text-left lg:text-center',
      justify: 'justify-start lg:justify-center',
      isCurrent: true,
    },
    {
      when: '[Date]',
      what: '[Milestone]',
      bg: '#F7F7F5',
      border: '1.5px dashed #8A8FB0',
      align: 'text-left lg:text-center',
      justify: 'justify-start lg:justify-center',
    },
    {
      when: '[Date]',
      what: '[Milestone]',
      bg: '#F7F7F5',
      border: '1.5px dashed #8A8FB0',
      align: 'text-left lg:text-center',
      justify: 'justify-start lg:justify-center',
    },
    {
      when: '10 July 2027',
      what: 'Launch',
      bg: '#0F1330',
      align: 'text-left lg:text-right',
      justify: 'justify-start lg:justify-end',
    },
  ]

  return (
    <div className="w-full text-[#0F1330]">
      {/* SECTION 1: HERO & AT-A-GLANCE */}
      <section className="relative px-6 md:px-12 lg:px-16 pt-28 md:pt-36 pb-16 lg:pb-24">
        {/* Breadcrumb */}
        <p className="text-[15px] text-[#5A5F7A] mb-4">
          <Link href="/#ventures" className="hover:text-[#1F2AD6] transition-colors">
            Ventures
          </Link>{' '}
          / Ojaven
        </p>

        {/* Massive H1 */}
        <h1 className="text-[72px] sm:text-[140px] lg:text-[250px] font-extrabold leading-[0.9] tracking-[-0.04em] -ml-1 sm:-ml-2.5">
          ojaven<span style={{ color: '#E5890A' }}>.</span>
        </h1>

        <div className="mt-8 lg:mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Tagline and description */}
          <div className="lg:col-span-7 space-y-6">
            <p className="text-2xl sm:text-3xl lg:text-[44px] leading-[1.1] tracking-[-0.035em] text-[#0F1330]">
              A platform for modern agencies.
            </p>
            <p className="text-lg sm:text-xl lg:text-[21px] leading-[1.5] text-[#5A5F7A] max-w-[560px]">
              These are my own notes as the founder: why I started it, where it is, and what I&apos;m learning. For the product itself, visit the official site.
            </p>
          </div>

          {/* At-a-glance aside card */}
          <aside
            aria-label="Ojaven at a glance"
            className="lg:col-span-5 w-full bg-white border border-[#DADCE8] rounded-[26px] p-6 sm:p-7 shadow-sm"
          >
            <dl className="divide-y divide-[#ECEEF8]">
              <div className="flex justify-between items-center py-4">
                <dt className="text-[#5A5F7A] text-[15px]">My role</dt>
                <dd className="font-medium text-[17px] text-[#0F1330]">Founder</dd>
              </div>
              <div className="flex justify-between items-center py-4">
                <dt className="text-[#5A5F7A] text-[15px]">Status</dt>
                <dd className="font-medium text-[17px] text-[#0F1330] flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#1F2AD6] live shadow-[0_0_0_0_rgba(31,42,214,0.5)]" />
                  In development
                </dd>
              </div>
              <div className="flex justify-between items-center py-4">
                <dt className="text-[#5A5F7A] text-[15px]">Planned launch</dt>
                <dd className="font-medium text-[17px] text-[#0F1330]">
                  10 July 2027{' '}
                  <span className="text-[#5A5F7A] font-normal">
                    ({days !== null ? `${days} days` : 'calculating...'})
                  </span>
                </dd>
              </div>
              <div className="flex justify-between items-center py-4">
                <dt className="text-[#5A5F7A] text-[15px]">Official site</dt>
                <dd className="font-medium text-[17px]">
                  <a
                    href="https://ojaven.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1F2AD6] hover:underline"
                  >
                    ojaven.com
                  </a>
                </dd>
              </div>
            </dl>

            {/* Ojaven Social Links */}
            <div className="mt-4 pt-4 border-t border-[#ECEEF8]">
              <p className="text-[#5A5F7A] text-[15px] mb-3">Follow Ojaven</p>
              <div className="flex flex-wrap gap-2.5">
                {[
                  {
                    name: 'LinkedIn',
                    href: 'https://linkedin.com/company/ojaven',
                    icon: (
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.446-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125zM7.114 20.452H3.56V9h3.554v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    ),
                  },
                  {
                    name: 'X',
                    href: 'https://x.com/_ojaven',
                    icon: (
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    ),
                  },
                  {
                    name: 'Instagram',
                    href: 'https://instagram.com/_ojaven',
                    icon: (
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                      </svg>
                    ),
                  },
                  {
                    name: 'Facebook',
                    href: 'https://www.facebook.com/profile.php?id=61591705626766',
                    icon: (
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    ),
                  },
                  {
                    name: 'Threads',
                    href: 'https://www.threads.com/@_ojaven',
                    icon: (
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
                        <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.028-3.575.878-6.43 2.523-8.482C5.845 1.205 8.598.024 12.179 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.087-3.898-3.858-5.884-8.246-5.902-2.985.023-5.24.995-6.706 2.888-1.377 1.777-2.088 4.284-2.113 7.457.025 3.174.736 5.68 2.113 7.457 1.466 1.893 3.72 2.865 6.706 2.888 2.688-.02 4.47-.665 5.951-2.158 1.688-1.702 1.655-3.793 1.117-5.081-.316-.76-.887-1.39-1.663-1.858-.194 1.38-.628 2.478-1.297 3.28-.892 1.07-2.157 1.65-3.76 1.72-1.217.055-2.39-.226-3.301-.79-1.076-.665-1.706-1.68-1.774-2.858-.135-2.33 1.734-4.008 4.65-4.18.994-.06 1.925-.02 2.783.117-.114-.686-.345-1.234-.69-1.632-.478-.553-1.216-.834-2.194-.835h-.028c-.79 0-1.858.218-2.54 1.253l-1.744-1.194c.914-1.386 2.397-2.15 4.283-2.15h.033c3.06.02 4.884 1.885 5.07 5.147.107.045.213.093.317.144 1.463.71 2.533 1.788 3.096 3.116.79 1.862.86 4.892-1.617 7.343-1.887 1.863-4.169 2.706-7.401 2.73zm1.096-11.34c-.235 0-.472.007-.712.02-1.735.098-2.81.902-2.746 2.05.067 1.2 1.363 1.756 2.61 1.687 1.13-.062 2.583-.502 2.833-3.512a8.827 8.827 0 0 0-1.985-.245z" />
                      </svg>
                    ),
                  },
                  {
                    name: 'YouTube',
                    href: 'https://www.youtube.com/@teamOjaven',
                    icon: (
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                      </svg>
                    ),
                  },
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-full border border-[#DADCE8] text-[#5A5F7A] text-[14px] font-medium transition-all duration-300 hover:bg-[#0F1330] hover:text-[#F7F7F5] hover:border-[#0F1330] hover:-translate-y-0.5"
                  >
                    {social.icon}
                    {social.name}
                  </a>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* SECTION 2: CONCEPT ILLUSTRATION STAGE */}
      <section className="px-6 md:px-12 lg:px-16 py-8">
        <div className="stage group relative h-[520px] sm:h-[600px] lg:h-[640px] rounded-[32px] bg-[#1F2AD6] overflow-hidden flex items-center justify-center">
          {/* Captions */}
          <p className="absolute top-6 left-6 sm:top-7 sm:left-8 text-xs sm:text-[14px] text-[#F7F7F5] z-20 font-medium">
            Concept illustration, not the real product
          </p>
          <p className="absolute bottom-6 right-6 sm:bottom-7 sm:right-8 text-xs sm:text-[14px] text-[#D6DAFF] z-20 font-medium">
            Real screenshots go here once they exist
          </p>

          {/* Layer 1 (Left background layer) */}
          <div
            aria-hidden="true"
            className="layer l1 absolute w-[300px] sm:w-[480px] lg:w-[600px] h-[220px] sm:h-[300px] lg:h-[380px] rounded-[18px] bg-[#3A45E6] transition-transform duration-1000 ease-out group-hover:-translate-x-6 sm:group-hover:-translate-x-12 group-hover:translate-y-4 sm:group-hover:translate-y-6 group-hover:-rotate-3"
            style={{ top: '18%', left: '8%' }}
          />

          {/* Main Layer (Center Browser Mockup) */}
          <div
            aria-hidden="true"
            className="relative z-10 w-[92%] sm:w-[580px] lg:w-[700px] h-[340px] sm:h-[380px] lg:h-[430px] rounded-[18px] bg-[#F7F7F5] grid grid-cols-[100px_minmax(0,1fr)] sm:grid-cols-[140px_minmax(0,1fr)] lg:grid-cols-[150px_minmax(0,1fr)] overflow-hidden shadow-[0_40px_80px_-40px_rgba(15,19,48,0.6)]"
          >
            {/* Sidebar */}
            <div className="bg-[#ECEEF8] p-4 sm:p-5 flex flex-col gap-3">
              <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-[#1F2AD6]" />
              <div className="h-2 rounded-full bg-[#DADCE8] w-[90%]" />
              <div className="h-2 rounded-full bg-[#DADCE8] w-[70%]" />
              <div className="h-2 rounded-full bg-[#AEB5FF] w-[80%]" />
              <div className="h-2 rounded-full bg-[#DADCE8] w-[60%]" />
            </div>

            {/* Content area */}
            <div className="p-4 sm:p-5 flex flex-col gap-3 overflow-hidden">
              <div className="flex justify-between items-center">
                <div className="h-3 sm:h-3.5 w-28 sm:w-44 rounded-full bg-[#0F1330]" />
                <div className="h-3 sm:h-3.5 w-14 sm:w-16 rounded-full bg-[#DADCE8]" />
              </div>

              {/* 3 Metric Cards */}
              <div className="grid grid-cols-3 gap-2 sm:gap-3">
                <div className="h-14 sm:h-[76px] rounded-xl bg-[#ECEEF8]" />
                <div className="h-14 sm:h-[76px] rounded-xl bg-[#ECEEF8]" />
                <div className="h-14 sm:h-[76px] rounded-xl bg-[#1F2AD6]" />
              </div>

              {/* Chart line box with draw animation */}
              <div className="flex-grow rounded-xl border border-[#DADCE8] relative p-2 flex items-center">
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 520 200"
                  preserveAspectRatio="none"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    className="draw-chart stroke-[#1F2AD6] stroke-[3]"
                    d="M0 170 C60 160 90 140 140 150 S220 100 270 110 S360 60 410 66 S480 30 520 22"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Layer 3 (Right foreground layer) */}
          <div
            aria-hidden="true"
            className="layer l3 absolute z-10 w-[200px] sm:w-[240px] lg:w-[280px] h-[190px] sm:h-[220px] lg:h-[260px] rounded-[18px] bg-[#0F1330] p-4 sm:p-5 flex flex-col gap-3 transition-transform duration-1000 ease-out group-hover:translate-x-6 sm:group-hover:translate-x-12 group-hover:-translate-y-4 sm:group-hover:-translate-y-6 group-hover:rotate-3 shadow-2xl"
            style={{ bottom: '10%', right: '8%' }}
          >
            <div className="h-2.5 w-[60%] rounded-full bg-[#3A3F6C]" />
            <div className="flex gap-2.5 items-center">
              <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#AEB5FF] shrink-0" />
              <div className="h-2 flex-grow rounded-full bg-[#3A3F6C]" />
            </div>
            <div className="flex gap-2.5 items-center">
              <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#3A3F6C] shrink-0" />
              <div className="h-2 flex-grow rounded-full bg-[#3A3F6C]" />
            </div>
            <div className="mt-auto h-8 sm:h-10 rounded-full bg-[#1F2AD6]" />
          </div>
        </div>
      </section>

      {/* SECTION 3: FOUNDER'S NOTES */}
      <section aria-labelledby="notes-title" className="px-6 md:px-12 lg:px-16 pt-24 lg:pt-36">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end border-b border-[#0F1330] pb-6 sm:pb-8 gap-4">
          <h2
            id="notes-title"
            className="text-4xl sm:text-6xl lg:text-[96px] font-medium tracking-[-0.06em] leading-[0.95]"
          >
            Founder&apos;s notes
          </h2>
          <p className="max-w-[320px] text-base sm:text-[18px] leading-[1.45] text-[#5A5F7A]">
            Answers in my own words. The bracketed parts are still to be written.
          </p>
        </div>

        <div className="divide-y divide-[#DADCE8]">
          {questions.map((q, idx) => (
            <div
              key={idx}
              className="q group grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 py-8 sm:py-11 transition-colors"
            >
              <h3 className="q-title lg:col-span-5 text-2xl sm:text-3xl lg:text-[40px] font-medium tracking-[-0.04em] text-[#0F1330] transition-all duration-500 ease-out group-hover:text-[#1F2AD6] group-hover:translate-x-2 sm:group-hover:translate-x-3.5">
                {q.t}
              </h3>
              <p className="lg:col-start-7 lg:col-span-6 text-lg sm:text-xl lg:text-[23px] leading-[1.5] text-[#5A5F7A]">
                {q.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 4: ROAD TO LAUNCH */}
      <section aria-labelledby="road-title" className="px-6 md:px-12 lg:px-16 pt-24 lg:pt-36">
        <h2
          id="road-title"
          className="text-3xl sm:text-5xl lg:text-[64px] font-medium tracking-[-0.05em]"
        >
          Road to launch
        </h2>

        <div className="relative mt-12 sm:mt-16">
          {/* Desktop timeline track connecting line */}
          <div
            aria-hidden="true"
            className="hidden lg:block absolute top-[17px] left-[18px] right-[18px] h-[2px] bg-[#DADCE8]"
          />
          <div
            aria-hidden="true"
            className="hidden lg:block absolute top-[17px] left-[18px] w-[25%] h-[2px] bg-[#1F2AD6]"
          />

          <ol className="list-none m-0 p-0 relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-5">
            {roadSteps.map((r, idx) => (
              <li key={idx} className={`${r.align} flex flex-col items-start lg:block`}>
                <div className={`flex ${r.justify} w-full`}>
                  <span
                    className="w-9 h-9 rounded-full shrink-0 block"
                    style={{
                      backgroundColor: r.bg,
                      border: r.border || '0',
                    }}
                  />
                </div>
                <p className="mt-4 sm:mt-5 text-[14px] text-[#5A5F7A]">{r.when}</p>
                <h3 className="mt-1.5 text-xl sm:text-2xl lg:text-[26px] font-medium tracking-[-0.03em] text-[#0F1330]">
                  {r.what}
                </h3>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* SECTION 5: BUILD LOG */}
      <section
        aria-labelledby="log-title"
        className="px-6 md:px-12 lg:px-16 pt-24 lg:pt-36 pb-24 lg:pb-36 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6"
      >
        <div className="lg:col-span-4">
          <h2
            id="log-title"
            className="text-3xl sm:text-5xl lg:text-[64px] font-medium tracking-[-0.05em]"
          >
            Build log
          </h2>
          <p className="mt-4 text-base sm:text-lg lg:text-[20px] leading-[1.5] text-[#5A5F7A]">
            Short notes as it takes shape. What changed, what broke and what I learned.
          </p>
        </div>

        <div className="lg:col-start-6 lg:col-span-7 flex flex-col gap-3 sm:gap-4">
          <div className="bg-[#0F1330] text-[#F7F7F5] rounded-[22px] p-6 sm:p-8 text-xl sm:text-2xl lg:text-[26px] tracking-[-0.02em] font-medium">
            The build log starts here. First entry coming soon.
          </div>
          <div className="border border-dashed border-[#B8BCD6] rounded-[22px] p-5 sm:p-6 sm:px-8 flex gap-6 sm:gap-10 text-base sm:text-[18px] text-[#5A5F7A]">
            <span className="w-24 sm:w-28 shrink-0">[Date]</span>
            <span>[Entry title]</span>
          </div>
          <div className="border border-dashed border-[#B8BCD6] rounded-[22px] p-5 sm:p-6 sm:px-8 flex gap-6 sm:gap-10 text-base sm:text-[18px] text-[#5A5F7A]">
            <span className="w-24 sm:w-28 shrink-0">[Date]</span>
            <span>[Entry title]</span>
          </div>
        </div>
      </section>
    </div>
  )
}
