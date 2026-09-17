'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { motion } from 'motion/react'
import { siteConfig } from '@/lib/data/site'
import { Reveal } from '@/components/motion/Reveal'

export function Hero() {
  const [imageError, setImageError] = useState(false)

  return (
    <section className="relative min-h-[95vh] flex flex-col justify-between pt-28 md:pt-36 pb-12 overflow-hidden bg-grid-architectural">
      {/* Subtle depth lighting — strictly CSS, no cheap neon particles */}
      <div 
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] md:w-[1000px] h-[450px] md:h-[600px] rounded-full pointer-events-none opacity-25 blur-[140px]"
        style={{
          background: 'radial-gradient(ellipse, rgba(224, 122, 95, 0.18) 0%, rgba(15, 17, 23, 0.05) 60%, transparent 85%)',
        }}
      />

      <div className="container-site relative z-10 my-auto">
        {/* Top Meta Bar */}
        <Reveal delay={0.05}>
          <div className="flex flex-wrap items-center justify-between gap-3 mb-8 md:mb-12 border-b border-[#1e2230]/70 pb-4">
            <div className="inline-flex items-center gap-2.5 text-xs font-mono text-[#8e92a4]">
              <span className="w-2 h-2 rounded-full bg-[#34d399] animate-pulse" />
              <span className="uppercase tracking-widest text-[#f5f6f9] font-medium">
                {siteConfig.tagline}
              </span>
            </div>
            <div className="text-xs font-mono text-[#54586d] hidden sm:block">
              ajaypalsingh.in — 28°N 77°E (India)
            </div>
          </div>
        </Reveal>

        {/* Main Asymmetric Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Bold Typographic Statement */}
          <div className="lg:col-span-8 space-y-6">
            <Reveal delay={0.1}>
              <div className="space-y-1">
                <span className="text-xs uppercase tracking-[0.2em] text-[#e07a5f] font-mono block">
                  Personal Digital Home
                </span>
                <h1 className="text-headline-hero tracking-tighter text-[#f5f6f9] uppercase">
                  Ajaypal <br className="hidden sm:inline" />
                  <span className="text-[#8e92a4] hover:text-[#f5f6f9] transition-colors">Singh</span>
                </h1>
              </div>
            </Reveal>

            <Reveal delay={0.25}>
              <div className="max-w-2xl space-y-4 text-base sm:text-lg md:text-xl text-[#8e92a4] font-normal leading-relaxed pt-2">
                <p className="text-[#f5f6f9] text-xl sm:text-2xl font-medium tracking-tight">
                  Building products, exploring ideas, and figuring out what comes next.
                </p>
                <p>
                  I am an independent founder who cares about software systems that solve real operational friction. Right now, my focus is entirely on{' '}
                  <Link
                    href="/ojaven"
                    className="text-[#f5f6f9] hover:text-[#e07a5f] font-medium underline underline-offset-4 decoration-[#e07a5f]/50 hover:decoration-[#e07a5f] transition-all"
                  >
                    Ojaven
                  </Link>
                  — a platform for modern digital agencies targeting launch on 10 July 2027.
                </p>
              </div>
            </Reveal>

            {/* Quick Action Navigation */}
            <Reveal delay={0.4}>
              <div className="pt-4 flex flex-wrap items-center gap-3.5">
                <Link
                  href="/about"
                  className="btn-solid"
                >
                  <span>My Story</span>
                  <span>→</span>
                </Link>

                <Link
                  href="/ojaven"
                  className="btn-outline"
                >
                  <span>What I&apos;m Building</span>
                </Link>

                <Link
                  href="/writing"
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-sm text-[#8e92a4] hover:text-[#f5f6f9] font-mono transition-colors"
                >
                  <span>Notes & Ideas</span>
                  <span className="text-[#e07a5f]">↗</span>
                </Link>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Architectural Visual Anchor / Portrait Slot */}
          <div className="lg:col-span-4">
            <Reveal delay={0.35}>
              <div className="relative rounded-2xl border border-[#1e2230] bg-[#11131a] p-6 shadow-2xl overflow-hidden group">
                {/* Accent glow on hover */}
                <div className="absolute -top-16 -right-16 w-36 h-36 bg-[#e07a5f]/10 rounded-full blur-2xl group-hover:bg-[#e07a5f]/20 transition-all duration-500 pointer-events-none" />

                {/* Portrait or Monogram Graphic */}
                <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-[#0a0c10] border border-[#1e2230] flex items-center justify-center">
                  {!imageError ? (
                    <Image
                      src="/portrait.jpg"
                      alt="Ajaypal Singh"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      onError={() => setImageError(true)}
                      priority
                    />
                  ) : null}

                  {/* High-end Architectural Fallback if image not provided yet */}
                  {imageError && (
                    <div className="p-6 w-full h-full flex flex-col justify-between text-left relative">
                      <div className="flex items-center justify-between text-[11px] font-mono text-[#54586d]">
                        <span>ID // APS-01</span>
                        <span>SINGH</span>
                      </div>
                      
                      <div className="my-auto space-y-2">
                        <span className="text-4xl sm:text-5xl font-bold tracking-tighter text-[#f5f6f9] block">
                          APS.
                        </span>
                        <p className="text-xs font-mono text-[#8e92a4] uppercase tracking-wider">
                          Ajaypal Singh
                        </p>
                      </div>

                      <div className="pt-4 border-t border-[#1e2230] text-[11px] font-mono text-[#54586d] flex items-center justify-between">
                        <span>EST. 2026</span>
                        <span className="text-[#34d399]">ONLINE</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Telemetry info under visual */}
                <div className="mt-4 pt-4 border-t border-[#1e2230]/70 flex items-center justify-between text-xs font-mono">
                  <div className="space-y-0.5">
                    <span className="text-[#54586d] block text-[10px] uppercase">Primary Venture</span>
                    <span className="text-[#f5f6f9] font-medium">Ojaven</span>
                  </div>
                  <div className="space-y-0.5 text-right">
                    <span className="text-[#54586d] block text-[10px] uppercase">Target Launch</span>
                    <span className="text-[#e07a5f] font-medium">10 July 2027</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      {/* Bottom Telemetry Bar & Scroll Prompt */}
      <div className="container-site relative z-10 pt-10">
        <Reveal delay={0.5}>
          <div className="border-t border-[#1e2230]/60 pt-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono text-[#54586d]">
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#e07a5f]" />
                Building full-time
              </span>
              <span className="hidden md:inline">Open to conversations & founder exchanges</span>
            </div>

            <div className="flex items-center gap-2 text-[#8e92a4]">
              <span>Scroll to explore</span>
              <motion.span
                animate={{ y: [0, 4, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                className="text-sm text-[#e07a5f]"
              >
                ↓
              </motion.span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
