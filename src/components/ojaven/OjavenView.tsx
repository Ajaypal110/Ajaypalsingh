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
        <h1 className="text-[72px] sm:text-[140px] lg:text-[250px] font-medium leading-[0.9] tracking-[-0.07em] -ml-1 sm:-ml-2.5">
          Ojaven
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
                    href="#official-site"
                    className="text-[#1F2AD6] hover:underline"
                    onClick={(e) => {
                      e.preventDefault()
                      alert('The official Ojaven website will be announced closer to release.')
                    }}
                  >
                    [ojaven link]
                  </a>
                </dd>
              </div>
            </dl>
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
