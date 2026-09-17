'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { siteConfig } from '@/lib/data/site'

export function Footer() {
  const [copied, setCopied] = useState(false)
  const magRef = useRef<HTMLAnchorElement>(null)

  const email = siteConfig.social.email

  // Copy email to clipboard with toast
  const handleCopy = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(email)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    }
  }

  // Magnetic button cursor tracking (with reduced-motion guard)
  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!magRef.current) return
    const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (isReduced) return

    const rect = magRef.current.getBoundingClientRect()
    const x = (e.clientX - (rect.left + rect.width / 2)) * 0.35
    const y = (e.clientY - (rect.top + rect.height / 2)) * 0.35
    magRef.current.style.transform = `translate(${x.toFixed(1)}px, ${y.toFixed(1)}px)`
  }

  const handleMouseLeave = () => {
    if (!magRef.current) return
    magRef.current.style.transform = 'translate(0, 0)'
  }

  return (
    <footer
      id="contact"
      className="ft lg:fixed left-0 right-0 bottom-0 lg:h-[840px] z-[1] bg-[#0F1330] text-[#F7F7F5] overflow-hidden font-['Bricolage_Grotesque',sans-serif]"
    >
      <div className="max-w-[1440px] h-full mx-auto pt-16 sm:pt-20 lg:pt-20 px-6 sm:px-12 lg:px-16 pb-8 sm:pb-10 lg:pb-12 flex flex-col justify-between box-border">
        {/* Top: Headline & Magnetic Round CTA */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 lg:gap-10">
          <h2 className="m-0 max-w-[900px] text-4xl sm:text-6xl lg:text-[92px] font-medium leading-[0.96] tracking-[-0.055em] text-[#F7F7F5]">
            Got an idea worth building? Let&apos;s talk.
          </h2>

          <a
            ref={magRef}
            href={`mailto:${email}`}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="ft-mag shrink-0 w-36 h-36 sm:w-44 sm:h-44 rounded-full bg-[#1F2AD6] text-[#F7F7F5] flex items-center justify-center cursor-pointer shadow-lg"
          >
            <span className="ft-mag-in flex flex-col items-center gap-2 text-base font-semibold">
              <svg
                width="22"
                height="22"
                viewBox="0 0 14 14"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                aria-hidden="true"
              >
                <path d="M3 11L11 3M5 3h6v6" />
              </svg>
              <span>Write to me</span>
            </span>
          </a>
        </div>

        {/* 4 Columns (Matching Footer.dc.html exactly) */}
        <div className="mt-12 lg:mt-16 pt-8 border-t border-[#1F2550] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-6">
          {/* Email Column */}
          <div className="lg:col-span-5 space-y-2">
            <p className="m-0 text-[14px] text-[#8A8FB0]">Email</p>
            <div className="mt-2.5 flex items-center gap-3 relative flex-wrap">
              <a
                href={`mailto:${email}`}
                className="text-xl sm:text-2xl lg:text-[30px] font-medium tracking-[-0.03em] transition-opacity hover:opacity-80 break-all"
                style={{ color: '#F7F7F5' }}
              >
                {email}
              </a>
              <button
                onClick={handleCopy}
                aria-label="Copy email address"
                className="w-10 h-10 rounded-full border border-[#2A3060] bg-transparent text-[#F7F7F5] hover:border-[#AEB5FF] flex items-center justify-center cursor-pointer transition-colors shrink-0"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  aria-hidden="true"
                >
                  <rect x="5" y="5" width="8" height="9" rx="2" />
                  <path d="M3 11V4a2 2 0 0 1 2-2h5" />
                </svg>
              </button>
              <span
                role="status"
                className={`ft-toast text-[13px] bg-[#AEB5FF] text-[#0F1330] rounded-full py-1 px-3 pointer-events-none transition-all duration-300 ${
                  copied ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'
                }`}
              >
                Copied
              </span>
            </div>
          </div>

          {/* Pages Column */}
          <nav aria-label="Pages" className="lg:col-span-2">
            <p className="m-0 mb-3 text-[14px] text-[#8A8FB0]">Pages</p>
            <div className="flex flex-col gap-1.5 text-[16px]">
              {[
                { label: 'Home', href: '/' },
                { label: 'About', href: '/about' },
                { label: 'Ojaven', href: '/ojaven' },
                { label: 'Writing', href: '/writing' },
              ].map((p) => (
                <Link key={p.label} href={p.href} className="ft-link">
                  <span>{p.label}</span>
                  <span>{p.label}</span>
                </Link>
              ))}
            </div>
          </nav>

          {/* Elsewhere Column */}
          <nav aria-label="Elsewhere" className="lg:col-span-2">
            <p className="m-0 mb-3 text-[14px] text-[#8A8FB0]">Elsewhere</p>
            <div className="flex flex-col gap-1.5 text-[16px]">
              {[
                { label: 'LinkedIn', href: siteConfig.social.linkedin },
                { label: 'X', href: siteConfig.social.twitter },
                { label: 'Instagram', href: siteConfig.social.instagram },
                { label: 'Facebook', href: siteConfig.social.facebook },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ft-link"
                >
                  <span>{s.label}</span>
                  <span>{s.label}</span>
                </a>
              ))}
            </div>
          </nav>

          {/* Currently Column */}
          <div className="lg:col-span-3">
            <p className="m-0 mb-3 text-[14px] text-[#8A8FB0]">Currently</p>
            <p className="m-0 text-[16px] leading-[1.45] text-[#D6DAFF]">
              Studying, building and getting ready to write more.
            </p>
            <p className="mt-2.5 text-[13px] text-[#8A8FB0]">
              Last updated September 2026
            </p>
          </div>
        </div>

        {/* Stretched Interactive Wordmark SVG */}
        <div
          aria-hidden="true"
          className="my-auto py-2 overflow-visible relative select-none"
        >
          <svg
            width="100%"
            height="auto"
            viewBox="0 0 1312 230"
            className="block w-full"
          >
            <text
              x="0"
              y="175"
              textLength="1312"
              lengthAdjust="spacing"
              style={{
                fontFamily: '"Bricolage Grotesque", sans-serif',
                fontSize: '210px',
                fontWeight: 600,
                letterSpacing: '-4px',
              }}
            >
              {'Ajaypal Singh'.split('').map((char, i) => (
                <tspan key={i} className="ft-letter cursor-default">
                  {char}
                </tspan>
              ))}
            </text>
          </svg>
        </div>

        {/* Bottom Bar */}
        <div className="h-14 shrink-0 flex justify-between items-center border-t border-[#1F2550] text-[13px] sm:text-[14px] text-[#8A8FB0]">
          <span>© {new Date().getFullYear()} Ajaypal Singh</span>
          <span>All rights reserved</span>
        </div>
      </div>
    </footer>
  )
}
