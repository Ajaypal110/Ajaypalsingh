'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useReducedMotion } from '@/hooks/useReducedMotion'

export function HomeView() {
  const prefersReduced = useReducedMotion()
  const [ready, setReady] = useState(false)
  const [openAccordion, setOpenAccordion] = useState<number>(0)
  const [journeyStep, setJourneyStep] = useState<number>(0)
  const [tiltStyle, setTiltStyle] = useState<string>('none')
  const [imageError, setImageError] = useState(true)

  const stepRefs = useRef<(HTMLLIElement | null)[]>([])

  // Intro curtain & readiness
  useEffect(() => {
    const timer = setTimeout(() => setReady(true), prefersReduced ? 0 : 250)
    return () => clearTimeout(timer)
  }, [prefersReduced])

  // Scroll measurement for sticky journey
  useEffect(() => {
    const onScroll = () => {
      const vh = window.innerHeight
      let activeIdx = 0
      stepRefs.current.forEach((el, idx) => {
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top < vh * 0.5) {
            activeIdx = idx
          }
        }
      })
      setJourneyStep(activeIdx)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // 3D Photo tilt on mouse move
  const handleHeroMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (prefersReduced) return
    const rect = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    setTiltStyle(`rotateY(${(x * 10).toFixed(2)}deg) rotateX(${(y * -8).toFixed(2)}deg)`)
  }

  const handleHeroMouseLeave = () => {
    setTiltStyle('none')
  }

  const pad = (n: number) => String(n).padStart(2, '0')

  // "How I spend my time" data — Section 3.2
  const spendTimeRows = [
    {
      title: 'Building products',
      text: 'Taking an idea from a rough note to something that works, then making it better.',
      tags: ['Products', 'Software'],
      shapeStyle: { borderRadius: '50%', background: '#1F2AD6' },
    },
    {
      title: 'Experimenting',
      text: 'Trying ideas quickly to see which ones deserve more of my time.',
      tags: ['Ideas', 'Prototypes'],
      shapeStyle: { borderRadius: '6px', background: '#0F1330' },
    },
    {
      title: 'Working with AI',
      text: 'Understanding AI well enough to put it inside real products, not just demos.',
      tags: ['AI', 'Products'],
      shapeStyle: { borderRadius: '50%', background: 'transparent', border: '7px solid #1F2AD6' },
    },
    {
      title: 'Thinking about products',
      text: 'How people actually use software, and what makes some of it feel right.',
      tags: ['Product', 'SaaS'],
      shapeStyle: { borderRadius: '17px 17px 0 0', background: '#AEB5FF' },
    },
    {
      title: 'Growing a business',
      text: 'How a technical idea turns into a real company, and what it takes to run and grow one.',
      tags: ['Entrepreneurship', 'Business'],
      shapeStyle: { borderRadius: '0 17px', background: '#1F2AD6' },
    },
  ]

  // "How I got here" journey steps — Section 3.2
  const journey = [
    { t: 'Curiosity', text: 'It started with technology, and wanting to know how things actually work.' },
    { t: 'Building', text: 'I found out I enjoy learning by building. When something has to work, it sticks.' },
    { t: 'Experimenting', text: 'I started trying ideas just to see what they could turn into.' },
    { t: 'Products', text: 'Then I got curious about products themselves. How they work, and how people really use them.' },
    { t: 'Business', text: 'Then a bigger question. How does a technical idea become a real business?' },
    { t: 'Founder', text: 'That question turned into entrepreneurship, and into building my first venture.' },
    { t: 'Next', text: 'More products, more ventures. This part is still being written.' },
  ]

  return (
    <div className={`relative w-full ${ready ? 'ready' : ''}`}>
      {/* Intro Curtain: 6 slats */}
      <div
        aria-hidden="true"
        className="fixed inset-0 z-[150] pointer-events-none flex flex-col"
      >
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <div
            key={i}
            className="flex-grow bg-[#0F1330] -mb-[1px] origin-top transition-transform duration-1000 ease-[cubic-bezier(0.76,0,0.24,1)]"
            style={{
              transform: ready || prefersReduced ? 'scaleY(0)' : 'scaleY(1)',
              transitionDelay: `${i * 70}ms`,
            }}
          />
        ))}
      </div>

      {/* 1. HERO SECTION */}
      <section aria-labelledby="hero-name" className="bg-[#F7F7F5]">
        <div
          onMouseMove={handleHeroMouseMove}
          onMouseLeave={handleHeroMouseLeave}
          className="relative min-h-[920px] bg-[#1F2AD6] text-[#F7F7F5] overflow-hidden origin-top"
        >
          {/* Concentric circles SVG */}
          <svg
            aria-hidden="true"
            width="1400"
            height="1400"
            viewBox="0 0 1400 1400"
            fill="none"
            className="absolute -left-[380px] -top-[300px] opacity-[0.22] pointer-events-none"
          >
            <circle cx="700" cy="700" r="699" stroke="#AEB5FF" />
            <circle cx="700" cy="700" r="560" stroke="#AEB5FF" />
            <circle cx="700" cy="700" r="420" stroke="#AEB5FF" />
            <circle cx="700" cy="700" r="280" stroke="#AEB5FF" />
          </svg>

          <div className="relative max-w-[1440px] h-full mx-auto px-6 sm:px-16 pt-28 sm:pt-36 pb-20 box-border">
            {/* Live Indicator Pill */}
            <p
              className="m-0 flex items-center gap-2.5 text-sm sm:text-base text-[#D6DAFF] transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{
                opacity: ready ? 1 : 0,
                transform: ready ? 'none' : 'translateY(20px)',
                transitionDelay: '1100ms',
              }}
            >
              <span className="live w-2 h-2 rounded-full bg-[#AEB5FF]" />
              Founder • Builder • Entrepreneur
            </p>

            {/* Giant Hero Headline */}
            <h1
              id="hero-name"
              className="m-0 mt-6 z-10 text-6xl sm:text-8xl md:text-[140px] lg:text-[220px] xl:text-[262px] font-medium leading-[0.84] tracking-[-0.065em]"
              style={{ fontVariationSettings: "'opsz' 96" }}
            >
              <span className="block overflow-hidden pb-[0.04em]">
                <span
                  className="block transition-transform duration-[1300ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
                  style={{
                    transform: ready || prefersReduced ? 'none' : 'translateY(105%)',
                    transitionDelay: '700ms',
                  }}
                >
                  Ajaypal
                </span>
              </span>
              <span className="block overflow-hidden pl-8 sm:pl-20 md:pl-36 pb-[0.04em]">
                <span
                  className="block transition-transform duration-[1300ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
                  style={{
                    transform: ready || prefersReduced ? 'none' : 'translateY(105%)',
                    transitionDelay: '820ms',
                  }}
                >
                  Singh
                </span>
              </span>
            </h1>

            {/* Portrait Photo on the right with 6 cobalt shutters & 3D tilt */}
            <div className="mt-8 lg:mt-0 lg:absolute lg:top-[132px] lg:right-16 w-full max-w-[280px] sm:max-w-[340px] lg:w-[372px] h-[400px] sm:h-[500px] lg:h-[620px] [perspective:1200px] z-20">
              <div
                className="relative w-full h-full rounded-[6px] overflow-hidden bg-[#3A45E6] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                style={{ transform: tiltStyle }}
              >
                {!imageError ? (
                  <Image
                    src="/portrait.jpg"
                    alt="Portrait of Ajaypal Singh, founder and builder"
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
                    viewBox="0 0 372 620"
                    preserveAspectRatio="xMidYMax slice"
                  >
                    <circle cx="186" cy="250" r="86" fill="#5560F0" />
                    <path d="M16 620c0-150 76-250 170-250s170 100 170 250z" fill="#5560F0" />
                  </svg>
                )}



                {/* 6 Opening Shutters */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 flex flex-col pointer-events-none"
                >
                  {[0, 1, 2, 3, 4, 5].map((i) => (
                    <div
                      key={i}
                      className="flex-grow bg-[#1F2AD6] -mb-[1px] origin-left transition-transform duration-[1100ms] ease-[cubic-bezier(0.76,0,0.24,1)]"
                      style={{
                        transform: ready || prefersReduced ? 'scaleX(0)' : 'scaleX(1)',
                        transitionDelay: `${1000 + i * 80}ms`,
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Intro paragraph — Section 3.2 */}
            <p
              className="mt-8 sm:mt-12 lg:mt-24 max-w-[470px] text-lg sm:text-2xl lg:text-[26px] leading-[1.3] tracking-[-0.015em] transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{
                opacity: ready ? 1 : 0,
                transform: ready ? 'none' : 'translateY(20px)',
                transitionDelay: '1250ms',
              }}
            >
              I build products and the companies behind them. I care about how products work, how businesses grow, and how ideas become something real.
            </p>

            {/* Rotating Seal Badge */}
            <div
              aria-hidden="true"
              className="mt-8 lg:mt-0 lg:absolute lg:top-[600px] lg:left-[690px] w-[130px] h-[130px] sm:w-[170px] sm:h-[170px] z-30 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{
                opacity: ready ? 1 : 0,
                transform: ready ? 'none' : 'translateY(20px)',
                transitionDelay: '1400ms',
              }}
            >
              <div className="relative w-full h-full">
                <svg className="seal w-full h-full" viewBox="0 0 170 170">
                  <defs>
                    <path
                      id="sealpath"
                      d="M85 85 m-66 0 a66 66 0 1 1 132 0 a66 66 0 1 1 -132 0"
                    />
                  </defs>
                  <circle cx="85" cy="85" r="84" fill="#0F1330" />
                  <text
                    style={{
                      fontFamily: '"Bricolage Grotesque", sans-serif',
                      fontSize: '14.5px',
                      fontWeight: 500,
                      letterSpacing: '2.4px',
                    }}
                    fill="#F7F7F5"
                  >
                    <textPath href="#sealpath">
                      Ajaypal Singh ✦ Founder ✦ Builder ✦ Entrepreneur ✦
                    </textPath>
                  </text>
                </svg>

                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 42 42"
                  className="absolute top-[32%] left-[32%] sm:w-[44px] sm:h-[44px]"
                  aria-hidden="true"
                >
                  <path
                    d="M12 28 L19 13 L26 28"
                    fill="none"
                    stroke="#F7F7F5"
                    strokeWidth="2.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M31 16.5c-1-1.6-2.6-2.3-4.3-2.3"
                    fill="none"
                    stroke="#F7F7F5"
                    strokeWidth="2.6"
                    strokeLinecap="round"
                  />
                  <circle cx="31" cy="26.5" r="2.4" fill="#AEB5FF" />
                </svg>
              </div>
            </div>

            {/* Bottom Meta Bar & Scroll Cue — Section 3.2 */}
            <div
              className="mt-12 sm:mt-16 lg:mt-24 pt-5 border-t border-[rgba(214,218,255,.3)] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-sm transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{
                opacity: ready ? 1 : 0,
                transform: ready ? 'none' : 'translateY(20px)',
                transitionDelay: '1500ms',
              }}
            >
              <div>
                <div className="text-[#AEB5FF] font-mono text-xs">Role</div>
                <div className="mt-1 text-[17px] font-medium">Founder and builder</div>
              </div>
              <div>
                <div className="text-[#AEB5FF] font-mono text-xs">Focus</div>
                <div className="mt-1 text-[17px] font-medium">Products, AI, SaaS, business</div>
              </div>
              <div>
                <div className="text-[#AEB5FF] font-mono text-xs">Approach</div>
                <div className="mt-1 text-[17px] font-medium">Build, test, learn, repeat</div>
              </div>
              <div className="flex justify-start lg:justify-end items-center">
                <span className="relative w-[1px] h-10 bg-[rgba(214,218,255,.3)] overflow-hidden block">
                  <span className="cue absolute top-0 left-0 w-[1px] h-10 bg-[#F7F7F5] block" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. INTRO STATEMENT — Section 3.2 */}
      <section className="py-20 sm:py-36 lg:py-48 px-6 sm:px-16 bg-[#F7F7F5]">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6">
          <p className="lg:col-span-2 m-0 text-base text-[#5A5F7A] font-mono">Hello</p>
          <h2 className="lg:col-span-10 m-0 text-3xl sm:text-5xl lg:text-[76px] xl:text-[80px] font-medium leading-[1.05] tracking-[-0.05em] text-[#0F1330]">
            Turning ideas into software, and software into real companies. Built with craft, tested in reality.
          </h2>
          <div className="lg:col-start-8 lg:col-span-5 mt-10 lg:mt-16 space-y-6">
            <p className="m-0 text-xl leading-[1.5] text-[#5A5F7A]">
              This is my corner of the internet. It will grow as I do, with the things I build, what I learn and what I think about along the way.
            </p>
            <Link
              href="/about"
              className="roll-hover inline-flex items-center gap-3 text-[17px] font-semibold text-[#0F1330] hover:text-[#1F2AD6]"
            >
              <span className="roll">
                <span>Read my story</span>
                <span>Read my story</span>
              </span>
              <span className="w-10 h-10 rounded-full bg-[#1F2AD6] text-[#F7F7F5] flex items-center justify-center">
                <svg
                  className="roll-ic w-3.5 h-3.5"
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
            </Link>
          </div>
        </div>
      </section>

      {/* 3. HOW I SPEND MY TIME (ACCORDION) */}
      <section aria-labelledby="do-title" className="pb-24 sm:pb-36 lg:pb-44 px-6 sm:px-16 bg-[#F7F7F5]">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 pb-8 border-b border-[#0F1330]">
            <h2 id="do-title" className="m-0 text-4xl sm:text-5xl lg:text-[64px] font-medium tracking-[-0.05em] leading-none text-[#0F1330]">
              How I spend my time
            </h2>
            <p className="m-0 text-base sm:text-lg text-[#5A5F7A] max-w-[320px]">
              Not a list of skills. Just what I actually do.
            </p>
          </div>

          <div className="divide-y divide-[#DADCE8]">
            {spendTimeRows.map((r, i) => {
              const isOpen = openAccordion === i
              return (
                <div key={r.title} className={`acc ${isOpen ? 'open' : ''}`}>
                  <button
                    onClick={() => setOpenAccordion(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                    className="w-full bg-transparent border-0 py-7 sm:py-9 flex items-center justify-between text-left text-[#0F1330] cursor-pointer group"
                  >
                    <div className="flex items-center gap-6 sm:gap-10">
                      <span
                        className="acc-shape w-8 h-8 shrink-0 block"
                        style={r.shapeStyle}
                        aria-hidden="true"
                      />
                      <span className="acc-title text-2xl sm:text-4xl lg:text-[56px] font-medium tracking-[-0.045em] leading-none">
                        {r.title}
                      </span>
                    </div>

                    <span className="acc-plus shrink-0 w-11 h-11 sm:w-13 sm:h-13 rounded-full border border-[#DADCE8] flex items-center justify-center">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        aria-hidden="true"
                      >
                        <path d="M8 2v12M2 8h12" />
                      </svg>
                    </span>
                  </button>

                  <div className="acc-body">
                    <div className="overflow-hidden">
                      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pb-9 pl-14 sm:pl-20">
                        <p className="md:col-span-8 m-0 text-xl sm:text-2xl leading-[1.4] text-[#0F1330]">
                          {r.text}
                        </p>
                        <div className="md:col-span-4 flex flex-wrap gap-2 items-start justify-start md:justify-end">
                          {r.tags.map((t) => (
                            <span
                              key={t}
                              className="text-xs sm:text-sm font-medium py-2 px-3.5 rounded-full bg-[#ECEEF8] text-[#1F2AD6]"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 4. HOW I GOT HERE (STICKY JOURNEY) */}
      <section
        aria-labelledby="journey-title"
        className="bg-[#0F1330] text-[#F7F7F5] rounded-[32px] sm:rounded-[48px] px-6 sm:px-16"
      >
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Sticky Left Column */}
          <div className="lg:col-span-6 lg:sticky lg:top-0 lg:h-screen pt-16 lg:pt-0 flex flex-col justify-center">
            <h2 id="journey-title" className="m-0 text-base font-medium text-[#AEB5FF] font-mono uppercase tracking-wider">
              How I got here
            </h2>

            {/* Giant Swapping Word */}
            <div
              aria-hidden="true"
              className="relative h-32 sm:h-40 overflow-hidden mt-6 text-6xl sm:text-8xl lg:text-[130px] font-medium tracking-[-0.06em] leading-[130px]"
            >
              {journey.map((j, i) => {
                const isCurrent = i === journeyStep
                const isPast = i < journeyStep
                return (
                  <span
                    key={j.t}
                    className={`absolute left-0 bottom-0 whitespace-nowrap transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                      isCurrent
                        ? 'translate-y-0 opacity-100'
                        : isPast
                        ? '-translate-y-[105%] opacity-0'
                        : 'translate-y-[105%] opacity-0'
                    }`}
                  >
                    {j.t}
                  </span>
                )
              })}
            </div>

            {/* Step Counter and Progress Bar */}
            <div className="mt-8 flex items-center gap-4 text-sm sm:text-base text-[#B8BCD6] font-mono tabular-nums">
              <span>
                {pad(journeyStep + 1)} / {pad(journey.length)}
              </span>
              <span className="relative w-40 sm:w-56 h-[2px] bg-[#1F2550] block overflow-hidden">
                <span
                  className="absolute inset-0 bg-[#AEB5FF] block origin-left transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                  style={{
                    transform: `scaleX(${(journeyStep + 1) / journey.length})`,
                  }}
                />
              </span>
            </div>
          </div>

          {/* Right Column: 7 Steps */}
          <ol className="lg:col-start-8 lg:col-span-5 list-none m-0 p-0 pt-12 lg:pt-[25vh] pb-16 lg:pb-[35vh] space-y-24 sm:space-y-36">
            {journey.map((j, i) => {
              const isActive = i === journeyStep
              return (
                <li
                  key={j.t}
                  ref={(el) => {
                    stepRefs.current[i] = el
                  }}
                  className={`min-h-[30vh] sm:min-h-[50vh] flex flex-col justify-center transition-opacity duration-500 ${
                    isActive ? 'opacity-100' : 'opacity-30'
                  }`}
                >
                  <span className="text-sm font-mono text-[#AEB5FF] tabular-nums">
                    {pad(i + 1)}
                  </span>
                  <h3 className="mt-2 text-3xl sm:text-4xl font-medium tracking-[-0.04em]">
                    {j.t}
                  </h3>
                  <p className="mt-3.5 text-lg sm:text-2xl leading-[1.45] text-[#D6DAFF]">
                    {j.text}
                  </p>
                </li>
              )
            })}
          </ol>
        </div>
      </section>

      {/* 5. VENTURES */}
      <section aria-labelledby="ventures-title" className="py-24 sm:py-36 lg:py-44 px-6 sm:px-16 bg-[#F7F7F5]">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 pb-6">
            <h2
              id="ventures-title"
              className="m-0 text-6xl sm:text-8xl lg:text-[150px] font-medium tracking-[-0.065em] leading-[0.9] text-[#0F1330]"
            >
              Ventures
            </h2>
            <p className="m-0 text-base sm:text-lg text-[#5A5F7A] max-w-[340px]">
              Companies and products I start. The list is short for now.
            </p>
          </div>

          {/* Table Header */}
          <div className="mt-12 hidden md:grid grid-cols-12 gap-6 px-5 pb-3.5 text-sm text-[#5A5F7A] border-b border-[#0F1330] font-mono">
            <span className="col-span-4">Name</span>
            <span className="col-span-4">What it is</span>
            <span className="col-span-2">Status</span>
            <span className="col-span-2 text-right">Year</span>
          </div>

          {/* Row 1: Ojaven */}
          <Link
            href="/ojaven"
            className="vrow grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 items-center py-8 px-5 border-b border-[#DADCE8] text-[#0F1330] group"
          >
            <span className="col-span-4 text-3xl sm:text-4xl lg:text-[48px] font-medium tracking-[-0.045em]">
              Ojaven
            </span>
            <span className="col-span-4 text-lg sm:text-xl text-[#5A5F7A] group-hover:text-[#F7F7F5] transition-colors">
              A platform for modern agencies
            </span>
            <span className="col-span-2 text-base flex items-center gap-2">
              <span className="live w-2 h-2 rounded-full bg-[#1F2AD6] group-hover:bg-[#AEB5FF]" />
              In development
            </span>
            <span className="col-span-2 text-base flex justify-start md:justify-end items-center gap-3">
              <span>Launch 2027</span>
              <svg
                className="ic w-4 h-4"
                viewBox="0 0 14 14"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                aria-hidden="true"
              >
                <path d="M3 11L11 3M5 3h6v6" />
              </svg>
            </span>
          </Link>


        </div>
      </section>

      {/* 6. RIGHT NOW + NOTES (TWO CARDS) */}
      <section className="pb-24 sm:pb-36 lg:pb-44 px-6 sm:px-16 bg-[#F7F7F5]">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Card: Right Now (Cobalt) */}
          <div className="lg:col-span-6 bg-[#1F2AD6] text-[#F7F7F5] rounded-[32px] p-8 sm:p-11 relative overflow-hidden flex flex-col justify-between">
            <svg
              aria-hidden="true"
              width="420"
              height="420"
              viewBox="0 0 420 420"
              fill="none"
              className="absolute -right-36 -bottom-36 opacity-35 pointer-events-none"
            >
              <circle cx="210" cy="210" r="209" stroke="#AEB5FF" />
              <circle cx="210" cy="210" r="140" stroke="#AEB5FF" />
              <circle cx="210" cy="210" r="70" stroke="#AEB5FF" />
            </svg>

            <div className="flex justify-between items-center relative z-10">
              <h2 className="m-0 text-3xl sm:text-5xl lg:text-[56px] font-medium tracking-[-0.05em]">
                Right now
              </h2>
              <span className="flex items-center gap-2 text-xs sm:text-sm text-[#D6DAFF] font-mono">
                <span className="live w-2 h-2 rounded-full bg-[#AEB5FF]" />
                Updated September 2026
              </span>
            </div>

            <dl className="m-0 mt-8 relative z-10 divide-y divide-[rgba(214,218,255,.25)]">
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-4 py-4">
                <dt className="sm:col-span-4 text-sm text-[#D6DAFF] font-mono pt-1">Focus</dt>
                <dd className="sm:col-span-8 m-0 text-lg sm:text-xl leading-[1.35]">Building a company from zero</dd>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-4 py-4">
                <dt className="sm:col-span-4 text-sm text-[#D6DAFF] font-mono pt-1">Building</dt>
                <dd className="sm:col-span-8 m-0 text-lg sm:text-xl leading-[1.35]">
                  My first venture,{' '}
                  <Link href="/ojaven" className="underline font-medium hover:text-[#AEB5FF] transition-colors">
                    Ojaven
                  </Link>
                </dd>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-4 py-4">
                <dt className="sm:col-span-4 text-sm text-[#D6DAFF] font-mono pt-1">Exploring</dt>
                <dd className="sm:col-span-8 m-0 text-lg sm:text-xl leading-[1.35]">AI, SaaS and product building</dd>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-4 py-4">
                <dt className="sm:col-span-4 text-sm text-[#D6DAFF] font-mono pt-1">Thinking about</dt>
                <dd className="sm:col-span-8 m-0 text-lg sm:text-xl leading-[1.35]">Entrepreneurship and how businesses work</dd>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-4 py-4">
                <dt className="sm:col-span-4 text-sm text-[#D6DAFF] font-mono pt-1">Learning</dt>
                <dd className="sm:col-span-8 m-0 text-lg sm:text-xl leading-[1.35]">Product architectures and systems</dd>
              </div>
            </dl>
          </div>

          {/* Right Card: Articles (Bordered Paper) */}
          <div className="lg:col-span-6 border border-[#DADCE8] rounded-[32px] p-8 sm:p-11 flex flex-col justify-between bg-white">
            <div>
              <div className="flex justify-between items-center">
                <h2 className="m-0 text-3xl sm:text-5xl lg:text-[56px] font-medium tracking-[-0.05em] text-[#0F1330]">
                  Articles
                </h2>
                <Link
                  href="/writing/articles"
                  className="roll-hover inline-flex items-center gap-2.5 text-sm font-semibold text-[#0F1330] hover:text-[#1F2AD6]"
                >
                  <span className="roll">
                    <span>All articles</span>
                    <span>All articles</span>
                  </span>
                  <svg
                    className="roll-ic w-3.5 h-3.5"
                    viewBox="0 0 14 14"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    aria-hidden="true"
                  >
                    <path d="M3 11L11 3M5 3h6v6" />
                  </svg>
                </Link>
              </div>

              <p className="mt-4 text-lg sm:text-xl leading-[1.45] text-[#5A5F7A] max-w-[34ch]">
                My articles on building, AI, SaaS, products and the lessons along the way.
              </p>
            </div>

            <div className="mt-8 pt-8 flex flex-col gap-3">
              {[
                { title: 'Why I Am Building Ojaven', topic: 'Building', href: '/writing/why-i-am-building-ojaven' },
              ].map((n) => (
                <Link
                  key={n.title}
                  href={n.href}
                  className="flex justify-between items-center p-4 sm:p-5 rounded-2xl border border-dashed border-[#B8BCD6] hover:border-[#1F2AD6] hover:bg-[#ECEEF8]/50 text-[#0F1330] transition-all group"
                >
                  <span className="text-base font-medium group-hover:text-[#1F2AD6] transition-colors">
                    {n.title}
                  </span>
                  <span className="text-xs font-mono py-1 px-3 rounded-full bg-[#ECEEF8] text-[#1F2AD6]">
                    {n.topic}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
