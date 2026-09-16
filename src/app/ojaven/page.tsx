import Link from 'next/link'
import { Reveal } from '@/components/motion/Reveal'
import { OjavenShowcase } from '@/components/sections/OjavenShowcase'
import { siteConfig } from '@/lib/data/site'
import { generatePageMetadata } from '@/lib/seo'
import type { Metadata } from 'next'

export const metadata: Metadata = generatePageMetadata({
  title: 'Ojaven — A Platform for Modern Agencies',
  description:
    'The founder build journal and blueprint for Ojaven. A platform currently in development by Ajaypal Singh, launching 10 July 2027.',
  path: '/ojaven',
})

export default function OjavenPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="container-site">
        <div className="max-w-4xl mx-auto space-y-24">
          {/* Header */}
          <div className="space-y-6">
            <Reveal>
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-xs uppercase tracking-widest text-[#c8a97e] font-mono">
                  Primary Venture
                </span>
                <span className="text-[#333333]">•</span>
                <span className="text-xs font-mono text-[#888888]">
                  Built by{' '}
                  <Link href="/about" className="text-[#f0f0f0] hover:text-[#c8a97e] underline underline-offset-2">
                    Ajaypal Singh
                  </Link>
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <h1 className="font-display text-5xl sm:text-7xl text-[#f0f0f0] font-normal tracking-tight">
                Ojaven
              </h1>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="text-lg sm:text-xl text-[#888888] font-normal leading-relaxed max-w-2xl">
                A dedicated platform designed to simplify workflows, client collaboration, and project execution for modern digital agencies.
              </p>
            </Reveal>

            {/* Launch Status Banner */}
            <Reveal delay={0.3}>
              <div className="p-6 rounded-xl border border-[#1f1f1f] bg-[#0c0c0c] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#c8a97e] animate-pulse" />
                  <div>
                    <p className="text-sm font-medium text-[#f0f0f0]">Status: In Active Engineering</p>
                    <p className="text-xs text-[#555555] font-mono">Full platform target launch date</p>
                  </div>
                </div>
                <div className="font-mono text-sm sm:text-base font-semibold text-[#c8a97e]">
                  {siteConfig.ojaven.launchDate}
                </div>
              </div>
            </Reveal>
          </div>

          {/* Why I am Building This */}
          <div className="space-y-8 border-t border-[#151515] pt-16">
            <Reveal>
              <span className="text-xs uppercase tracking-widest text-[#c8a97e] font-mono block mb-2">
                The Origin
              </span>
              <h2 className="font-display text-3xl sm:text-4xl text-[#f0f0f0] font-normal">
                Why I’m Building Ojaven
              </h2>
            </Reveal>

            <div className="space-y-6 text-base sm:text-lg text-[#888888] leading-relaxed">
              <Reveal delay={0.1}>
                <p>
                  Digital agencies represent some of the most dynamic, multidisciplinary teams in the world. They bring together design, engineering, marketing, and strategy to build products for other companies. Yet, the internal tools they rely on often feel fragmented, noisy, and disconnected.
                </p>
              </Reveal>
              <Reveal delay={0.15}>
                <p>
                  Most agencies juggle five or six different SaaS tools just to manage client communication, track deliverables, organize feedback, and monitor team bandwidth. As a team grows, the overhead of managing the tools begins to outgrow the creative work itself.
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <p>
                  I am building Ojaven to bring cohesion to that chaos. Not by adding more arbitrary features, but by designing a streamlined operational core built specifically around the realities of agency delivery.
                </p>
              </Reveal>
            </div>
          </div>

          {/* Product Concepts Showcase */}
          <div className="space-y-8 border-t border-[#151515] pt-16">
            <Reveal>
              <span className="text-xs uppercase tracking-widest text-[#c8a97e] font-mono block mb-2">
                Blueprint
              </span>
              <h2 className="font-display text-3xl sm:text-4xl text-[#f0f0f0] font-normal">
                Architectural Concepts
              </h2>
            </Reveal>

            <OjavenShowcase />
          </div>

          {/* Founder Commitment & Next Steps */}
          <div className="border-t border-[#151515] pt-16">
            <div className="p-8 sm:p-12 rounded-2xl border border-[#1f1f1f] bg-[#0c0c0c] text-center space-y-6">
              <Reveal>
                <h3 className="font-display text-3xl text-[#f0f0f0] font-normal">
                  Follow the Build
                </h3>
              </Reveal>

              <Reveal delay={0.1}>
                <p className="text-[#888888] text-base max-w-xl mx-auto leading-relaxed">
                  I share behind-the-scenes engineering decisions, product design thoughts, and honest updates as Ojaven approaches its 2027 milestone.
                </p>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
                  <Link
                    href="/contact"
                    className="px-6 py-3 rounded-full bg-[#f0f0f0] text-[#060606] font-medium text-sm hover:bg-[#c8a97e] transition-colors"
                  >
                    Reach Out Directly
                  </Link>
                  <Link
                    href="/writing"
                    className="px-6 py-3 rounded-full border border-[#1f1f1f] text-[#f0f0f0] font-medium text-sm hover:border-[#c8a97e] transition-colors"
                  >
                    Read Engineering Notes
                  </Link>
                </div>
              </Reveal>

              <div className="pt-6 text-xs text-[#555555] font-mono">
                Independent venture founded by Ajaypal Singh.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
