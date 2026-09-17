'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { siteConfig } from '@/lib/data/site'

interface HeaderProps {
  active?: 'Home' | 'About' | 'Ojaven' | 'Writing' | 'Contact'
  onDark?: boolean
}

interface MenuPreview {
  kicker: string
  text: string
}

const linkPreviews: Record<string, MenuPreview> = {
  Home: {
    kicker: 'Overview',
    text: 'Who I am, what I care about, and what I am building.',
  },
  About: {
    kicker: 'My story',
    text: 'The longer story, from learning to code to starting a company.',
  },
  Ojaven: {
    kicker: 'Venture',
    text: 'My notes on the venture I am building right now.',
  },
  Writing: {
    kicker: 'Notebook',
    text: 'My notebook on building, AI, software and business.',
  },
  Contact: {
    kicker: 'Let’s talk',
    text: 'Have an idea, a question or something to build? Write to me.',
  },
}

export function Header({ active, onDark = false }: HeaderProps) {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [hoveredNav, setHoveredNav] = useState<string | null>(null)
  const [previewLink, setPreviewLink] = useState<string>('Home')

  const navRef = useRef<HTMLDivElement>(null)
  const [pillStyle, setPillStyle] = useState<{ width: number; x: number; opacity: number }>({
    width: 0,
    x: 0,
    opacity: 0,
  })

  const email = siteConfig.social.email

  // Detect current active label if not explicitly provided
  const currentActive =
    active ||
    (pathname === '/'
      ? 'Home'
      : pathname.startsWith('/about')
      ? 'About'
      : pathname.startsWith('/ojaven')
      ? 'Ojaven'
      : pathname.startsWith('/writing')
      ? 'Writing'
      : pathname.startsWith('/contact')
      ? 'Contact'
      : 'Home')

  // Homepage hero is dark cobalt (#1F2AD6) before scrolling
  const isHomepage = pathname === '/'
  const isHeroDark = (onDark || isHomepage) && !scrolled

  const fg = isHeroDark ? '#F7F7F5' : '#0F1330'
  const fgSoft = isHeroDark ? '#D6DAFF' : '#5A5F7A'
  const markBg = isHeroDark ? '#F7F7F5' : '#1F2AD6'
  const markFg = isHeroDark ? '#1F2AD6' : '#F7F7F5'

  const btnBg = isHeroDark ? '#F7F7F5' : '#1F2AD6'
  const btnFg = isHeroDark ? '#1F2AD6' : '#F7F7F5'
  const btnDot = isHeroDark ? '#1F2AD6' : '#F7F7F5'
  const btnDotFg = isHeroDark ? '#F7F7F5' : '#1F2AD6'

  // Scroll listener
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close menu on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  // Lock scroll when full-screen menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const links = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Ojaven', href: '/ojaven' },
    { label: 'Writing', href: '/writing' },
    { label: 'Contact', href: '/contact' },
  ]

  // Calculate nav pill position
  const targetLabel = hoveredNav || currentActive

  const measurePill = useCallback(() => {
    if (!navRef.current) return
    const activeEl = navRef.current.querySelector<HTMLElement>(`[data-nav="${targetLabel}"]`)
    if (activeEl) {
      const parentRect = navRef.current.getBoundingClientRect()
      const elRect = activeEl.getBoundingClientRect()
      setPillStyle({
        width: elRect.width,
        x: elRect.left - parentRect.left,
        opacity: 1,
      })
    }
  }, [targetLabel])

  useEffect(() => {
    measurePill()
    const timer = setTimeout(measurePill, 100)
    const resizeHandler = () => measurePill()
    window.addEventListener('resize', resizeHandler)

    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(measurePill)
    }

    return () => {
      clearTimeout(timer)
      window.removeEventListener('resize', resizeHandler)
    }
  }, [measurePill, scrolled])

  // no-op — kept for ref, Contact now goes to /contact page

  return (
    <div className="hd fixed top-0 left-0 right-0 z-[80] pointer-events-none font-['Bricolage_Grotesque',sans-serif]">
      {/* Main Header Bar */}
      <div
        className={`mx-auto transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] grid grid-cols-3 items-center box-border ${
          scrolled
            ? 'max-w-[1120px] mt-3 py-2 px-2 pl-4 rounded-full bg-[rgba(247,247,245,.82)] border border-[rgba(15,19,48,.08)] backdrop-blur-[18px] shadow-[0_10px_40px_-18px_rgba(15,19,48,.35)]'
            : 'max-w-[1440px] mt-0 py-[22px] px-9 rounded-none bg-transparent border-transparent'
        }`}
      >
        {/* Left: Brand Monogram & Name */}
        <Link
          href="/"
          aria-label="Ajaypal Singh, home"
          className="justify-self-start flex items-center gap-3 pointer-events-auto transition-colors duration-300 group"
          style={{ color: fg }}
        >
          <svg width="42" height="42" viewBox="0 0 42 42" aria-hidden="true" className="shrink-0">
            <circle cx="21" cy="21" r="21" fill={markBg} className="transition-colors duration-300" />
            <path
              d="M12 28 L19 13 L26 28"
              fill="none"
              stroke={markFg}
              strokeWidth="2.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-colors duration-300"
            />
            <path
              d="M31 16.5c-1-1.6-2.6-2.3-4.3-2.3"
              fill="none"
              stroke={markFg}
              strokeWidth="2.6"
              strokeLinecap="round"
              className="transition-colors duration-300"
            />
            <circle cx="31" cy="26.5" r="2.4" fill="#AEB5FF" />
          </svg>
          <span className="flex flex-col leading-[1.15]">
            <span className="text-base font-semibold tracking-[-0.02em]">Ajaypal Singh</span>
            <span
              className={`hd-sub text-[13px] transition-all duration-500 overflow-hidden ${
                scrolled ? 'max-h-0 opacity-0' : 'max-h-[20px] opacity-100'
              }`}
              style={{ color: fgSoft }}
            >
              Founder and builder
            </span>
          </span>
        </Link>

        {/* Center: Nav Pill */}
        <nav
          ref={navRef}
          aria-label="Main"
          onMouseLeave={() => setHoveredNav(null)}
          className="justify-self-center relative hidden md:flex p-[5px] rounded-full bg-[rgba(255,255,255,.82)] border border-[rgba(15,19,48,.08)] backdrop-blur-[14px] pointer-events-auto"
        >
          {/* Sliding Navy Highlight Pill */}
          <span
            aria-hidden="true"
            className="absolute top-[5px] bottom-[5px] left-0 rounded-full bg-[#0F1330] pointer-events-none transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{
              width: pillStyle.width > 0 ? `${pillStyle.width}px` : undefined,
              transform: pillStyle.width > 0 ? `translateX(${pillStyle.x}px)` : undefined,
              opacity: pillStyle.opacity,
            }}
          />

          {links.map((link) => {
            const isSelected = link.label === targetLabel
            const isPageActive = link.label === currentActive

            return (
              <Link
                key={link.label}
                href={link.href}
                data-nav={link.label}
                onMouseEnter={() => setHoveredNav(link.label)}
                onFocus={() => setHoveredNav(link.label)}
                aria-current={isPageActive ? 'page' : undefined}
                className="relative z-[1] py-2.5 px-[18px] rounded-full text-sm font-medium transition-colors duration-300 whitespace-nowrap"
                style={{
                  color: isSelected ? '#F7F7F5' : '#0F1330',
                }}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>

        {/* Right: "Say hello" + 2-Dot Menu Button */}
        <div className="justify-self-end flex items-center gap-2 pointer-events-auto">
          <a
            href="/contact"
            className="group/btn hidden sm:flex items-center gap-2.5 h-12 py-0 pl-[22px] pr-2 rounded-full font-semibold text-sm transition-all duration-300 shadow-sm"
            style={{ background: btnBg, color: btnFg }}
          >
            <span className="hd-roll inline-flex flex-col overflow-hidden h-[1.2em] leading-[1.2em]">
              <span className="transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover/btn:-translate-y-full">
                Say hello
              </span>
              <span className="transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover/btn:-translate-y-full">
                Say hello
              </span>
            </span>
            <span
              className="w-[34px] h-[34px] rounded-full flex items-center justify-center transition-colors duration-300 shrink-0"
              style={{ background: btnDot }}
            >
              <svg
                className="w-3.5 h-3.5 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover/btn:rotate-45"
                viewBox="0 0 14 14"
                fill="none"
                stroke={btnDotFg}
                strokeWidth="1.8"
                strokeLinecap="round"
                aria-hidden="true"
              >
                <path d="M3 11L11 3M5 3h6v6" />
              </svg>
            </span>
          </a>

          <button
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            aria-expanded={menuOpen}
            className="w-12 h-12 rounded-full border border-[rgba(15,19,48,.08)] bg-[#0F1330] text-[#F7F7F5] flex items-center justify-center cursor-pointer hover:bg-[#1F2AD6] transition-colors duration-300 shadow-sm"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
              <circle cx="5" cy="9" r="1.8" fill="currentColor" />
              <circle cx="13" cy="9" r="1.8" fill="currentColor" />
            </svg>
          </button>
        </div>
      </div>

      {/* Full-Screen Menu Overlay */}
      <div
        className={`fixed inset-0 bg-[#0F1330] text-[#F7F7F5] pointer-events-auto overflow-y-auto transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] ${
          menuOpen
            ? 'opacity-100 visible [clip-path:inset(0_0_0_0)]'
            : 'opacity-0 invisible [clip-path:inset(0_0_100%_0)]'
        }`}
        aria-hidden={!menuOpen}
      >
        <div className="max-w-[1440px] mx-auto min-h-full box-border p-7 sm:p-9 flex flex-col justify-between">
          {/* Menu Top Bar */}
          <div className="flex justify-between items-center">
            <span className="text-base font-semibold tracking-[-0.02em] text-[#F7F7F5]">
              Ajaypal Singh
            </span>
            <button
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
              className="w-12 h-12 rounded-full border border-[#2A3060] bg-transparent text-[#F7F7F5] flex items-center justify-center cursor-pointer hover:bg-[#1F2AD6] transition-colors duration-300"
            >
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
                <path d="M3 3l10 10M13 3L3 13" />
              </svg>
            </button>
          </div>

          {/* Menu Center Content */}
          <div className="my-auto py-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Nav Links Column */}
            <nav aria-label="Menu links" className="lg:col-span-7 flex flex-col">
              {links.map((link, idx) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  onMouseEnter={() => setPreviewLink(link.label)}
                  onFocus={() => setPreviewLink(link.label)}
                  className="group block py-2.5 border-b border-[#1F2550] text-[#F7F7F5] hover:text-[#AEB5FF] text-5xl sm:text-7xl lg:text-[88px] font-medium tracking-[-0.055em] leading-[1.0] transition-colors duration-300"
                  style={{
                    color: '#F7F7F5',
                    transitionDelay: menuOpen ? `${120 + idx * 60}ms` : '0ms',
                  }}
                >
                  <span className="hd-roll inline-flex flex-col overflow-hidden h-[1em] leading-[1em]">
                    <span className="transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-full">
                      {link.label}
                    </span>
                    <span className="transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-full">
                      {link.label}
                    </span>
                  </span>
                </Link>
              ))}
            </nav>

            {/* Hover Preview Card Column */}
            <div className="hidden lg:flex lg:col-start-9 lg:col-span-4 aspect-[4/5] rounded-[28px] bg-[#1F2AD6] p-8 flex-col justify-between overflow-hidden relative shadow-2xl">
              <svg
                aria-hidden="true"
                width="360"
                height="360"
                viewBox="0 0 360 360"
                fill="none"
                className="absolute -right-28 -top-28 opacity-50 pointer-events-none"
              >
                <circle cx="180" cy="180" r="179" stroke="#AEB5FF" />
                <circle cx="180" cy="180" r="120" stroke="#AEB5FF" />
                <circle cx="180" cy="180" r="60" stroke="#AEB5FF" />
              </svg>

              <span className="text-sm text-[#D6DAFF] relative z-10 font-medium">
                {linkPreviews[previewLink]?.kicker || 'Explore'}
              </span>
              <p className="m-0 text-3xl font-medium leading-[1.15] tracking-[-0.03em] text-[#F7F7F5] relative z-10">
                {linkPreviews[previewLink]?.text || ''}
              </p>
            </div>
          </div>

          {/* Menu Bottom Footer Bar */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-t border-[#1F2550] pt-6 text-sm text-[#B8BCD6]">
            <a
              href={`mailto:${email}`}
              className="text-[#F7F7F5] transition-opacity hover:opacity-80"
            >
              {email}
            </a>
            <div className="flex flex-wrap gap-6">
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#F7F7F5] transition-colors"
              >
                LinkedIn
              </a>
              <a
                href={siteConfig.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#F7F7F5] transition-colors"
              >
                X
              </a>
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#F7F7F5] transition-colors"
              >
                Instagram
              </a>
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#F7F7F5] transition-colors"
              >
                Facebook
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
