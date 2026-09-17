'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'motion/react'
import { navLinks } from '@/lib/data/navigation'
import { cn } from '@/lib/utils'
import { useScrollDirection } from '@/hooks/useScrollDirection'

export function Navigation() {
  const pathname = usePathname()
  const scrollDirection = useScrollDirection()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const [prevPathname, setPrevPathname] = useState(pathname)
  if (pathname !== prevPathname) {
    setPrevPathname(pathname)
    setMobileOpen(false)
  }

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{
          y: scrollDirection === 'down' && scrolled ? -90 : 0,
          opacity: 1,
        }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled
            ? 'bg-[#08090c]/85 backdrop-blur-md border-b border-[#1e2230]/80 py-3.5'
            : 'bg-transparent py-5'
        )}
      >
        <div className="container-site">
          <div className="flex items-center justify-between">
            {/* Logo / Personal Brand Mark */}
            <Link
              href="/"
              className="flex items-center gap-2.5 group"
              aria-label="Ajaypal Singh — Home"
            >
              <span className="w-2 h-2 rounded-full bg-[#34d399] animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.5)]" />
              <span className="font-semibold text-sm tracking-tight text-[#f5f6f9] group-hover:text-[#e07a5f] transition-colors duration-200">
                Ajaypal Singh
              </span>
            </Link>

            {/* Desktop Navigation Links */}
            <nav aria-label="Main navigation" className="hidden md:flex items-center gap-7">
              {navLinks.map((link) => {
                const isActive = pathname === link.href
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      'text-sm font-medium transition-colors duration-200 relative py-1',
                      isActive
                        ? 'text-[#f5f6f9]'
                        : 'text-[#8e92a4] hover:text-[#f5f6f9]'
                    )}
                  >
                    {link.label}
                    {isActive && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#e07a5f] rounded-full"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                )
              })}

              <Link
                href="/contact"
                className="ml-2 inline-flex items-center gap-1.5 text-xs font-mono px-3.5 py-1.5 rounded-full border border-[#1e2230] bg-[#0f1117] text-[#8e92a4] hover:text-[#f5f6f9] hover:border-[#e07a5f]/60 hover:bg-[#141721] transition-all"
              >
                <span>Get in Touch</span>
                <span className="text-[#e07a5f]">→</span>
              </Link>
            </nav>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              className="md:hidden flex flex-col items-center justify-center w-10 h-10 rounded-lg border border-[#1e2230] bg-[#0f1117] text-[#f5f6f9]"
            >
              <div className="w-4 flex flex-col gap-1">
                <span
                  className={cn(
                    'block h-0.5 bg-[#f5f6f9] transition-transform duration-200 origin-center',
                    mobileOpen && 'rotate-45 translate-y-1.5'
                  )}
                />
                <span
                  className={cn(
                    'block h-0.5 bg-[#f5f6f9] transition-opacity duration-200',
                    mobileOpen && 'opacity-0'
                  )}
                />
                <span
                  className={cn(
                    'block h-0.5 bg-[#f5f6f9] transition-transform duration-200 origin-center',
                    mobileOpen && '-rotate-45 -translate-y-1.5'
                  )}
                />
              </div>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-[#08090c]/98 backdrop-blur-xl pt-24 px-6 md:hidden flex flex-col justify-between pb-10"
          >
            <div className="space-y-6">
              <span className="text-xs font-mono uppercase tracking-widest text-[#54586d]">
                Navigation
              </span>
              <nav className="flex flex-col space-y-4">
                <Link
                  href="/"
                  className={cn(
                    'text-2xl font-medium transition-colors',
                    pathname === '/' ? 'text-[#e07a5f]' : 'text-[#8e92a4] hover:text-[#f5f6f9]'
                  )}
                >
                  Home
                </Link>
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      'text-2xl font-medium transition-colors',
                      pathname === link.href ? 'text-[#e07a5f]' : 'text-[#8e92a4] hover:text-[#f5f6f9]'
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            <div className="space-y-4 pt-6 border-t border-[#1e2230]">
              <div className="flex items-center gap-2 text-xs font-mono text-[#8e92a4]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#34d399] animate-pulse" />
                <span>Building Ojaven • Target: 10 July 2027</span>
              </div>
              <p className="text-xs text-[#54586d] font-mono">
                ajaypalsingh.in — India
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
