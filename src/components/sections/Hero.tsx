'use client'

import Link from 'next/link'
import { motion } from 'motion/react'
import { siteConfig } from '@/lib/data/site'
import { TextReveal } from '@/components/motion/TextReveal'
import { Reveal } from '@/components/motion/Reveal'
import { Magnetic } from '@/components/motion/Magnetic'

export function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Ambient background glow — pure CSS */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[900px] h-[400px] md:h-[600px] rounded-full pointer-events-none opacity-40 blur-[120px]"
        style={{
          background: 'radial-gradient(ellipse, rgba(200, 169, 126, 0.15) 0%, rgba(20, 20, 20, 0.05) 50%, transparent 80%)',
        }}
      />

      {/* Subtle grid texture */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#f0f0f0 1px, transparent 1px), linear-gradient(to right, #f0f0f0 1px, transparent 1px)`,
          backgroundSize: '4rem 4rem',
        }}
      />

      <div className="container-site relative z-10 text-center flex flex-col items-center">
        {/* Positioning Pill */}
        <Reveal delay={0.1}>
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-[#1f1f1f] bg-[#0c0c0c]/80 backdrop-blur-sm mb-8 text-xs font-mono text-[#888888]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c8a97e] animate-pulse" />
            <span className="tracking-wide uppercase">{siteConfig.tagline}</span>
          </div>
        </Reveal>

        {/* Hero Name — Editorial Headline */}
        <div className="mb-6 space-y-1 md:space-y-2">
          <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight text-[#f0f0f0] font-normal leading-[0.95]">
            <TextReveal text="AJAYPAL" as="span" className="block" />
            <TextReveal text="SINGH" as="span" className="block text-[#c8a97e]" delay={0.2} />
          </h1>
        </div>

        {/* Personal Statement */}
        <Reveal delay={0.4} className="max-w-2xl mx-auto mb-10">
          <p className="text-base sm:text-lg md:text-xl text-[#888888] leading-relaxed font-normal">
            Independent founder and builder creating thoughtful software. Currently building{' '}
            <Link
              href="/ojaven"
              className="text-[#f0f0f0] hover:text-[#c8a97e] transition-colors underline underline-offset-4 decoration-[#c8a97e]/40 hover:decoration-[#c8a97e]"
            >
              Ojaven
            </Link>
            , a platform designed for modern agencies, scheduled for release in July 2027.
          </p>
        </Reveal>

        {/* Action CTAs */}
        <Reveal delay={0.55}>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Magnetic>
              <Link
                href="/builds"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#f0f0f0] text-[#060606] font-medium text-sm hover:bg-[#c8a97e] hover:text-[#060606] transition-all duration-300 shadow-lg hover:shadow-[#c8a97e]/20"
              >
                <span>Explore Builds</span>
                <span>→</span>
              </Link>
            </Magnetic>

            <Magnetic>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-[#1f1f1f] bg-[#0c0c0c]/60 backdrop-blur-sm text-[#f0f0f0] font-medium text-sm hover:border-[#c8a97e]/60 hover:text-[#c8a97e] transition-all duration-300"
              >
                <span>Read the Story</span>
              </Link>
            </Magnetic>
          </div>
        </Reveal>

        {/* Venture Status Callout */}
        <Reveal delay={0.7} className="mt-16 md:mt-24">
          <div className="inline-flex items-center gap-3 text-xs text-[#555555] font-mono border-t border-[#151515] pt-6">
            <span>Primary Focus:</span>
            <span className="text-[#888888]">Ojaven (Architecture & Concept Phase)</span>
            <span className="text-[#333333]">•</span>
            <span>Target: 10 July 2027</span>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
