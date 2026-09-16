import { Reveal } from '@/components/motion/Reveal'
import { Timeline } from '@/components/sections/Timeline'
import { nowData } from '@/lib/data/now'
import { generatePageMetadata } from '@/lib/seo'
import type { Metadata } from 'next'

export const metadata: Metadata = generatePageMetadata({
  title: 'About — Journey, Philosophy & Focus',
  description:
    'Learn about Ajaypal Singh — personal background, philosophy on building software, entrepreneurial journey, and current focus.',
  path: '/about',
})

export default function AboutPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="container-site">
        <div className="max-w-4xl mx-auto space-y-24">
          {/* Header */}
          <div className="space-y-4">
            <Reveal>
              <span className="text-xs uppercase tracking-widest text-[#c8a97e] font-mono block">
                Profile & Philosophy
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="font-display text-4xl sm:text-6xl text-[#f0f0f0] font-normal leading-tight">
                About Ajaypal Singh
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-lg text-[#888888] font-normal max-w-2xl leading-relaxed">
                Founder, builder, and entrepreneur. Working across the lifecycle of software products — from raw idea and system design to implementation and operations.
              </p>
            </Reveal>
          </div>

          {/* Personal Narrative */}
          <div className="space-y-8 text-[#888888] text-base sm:text-lg leading-relaxed border-t border-[#151515] pt-12">
            <Reveal>
              <h2 className="font-display text-2xl sm:text-3xl text-[#f0f0f0] font-normal mb-6">
                The Path to Building
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p>
                My relationship with technology started with straightforward curiosity: understanding how digital tools can turn ideas into functional realities. Over time, that technical curiosity evolved into a deeper commitment to entrepreneurship — the process of finding meaningful problems, building solutions with care, and taking full responsibility for their execution.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p>
                I don’t view building software as just assembling libraries or shipping features. It is an exercise in reducing friction, eliminating clutter, and building systems that respect the user’s time and attention. Whether crafting small experiments or architecting extensive platforms, my approach centers on durability, clean design, and deliberate problem-solving.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p>
                Right now, a major share of my focus is dedicated to <strong className="text-[#f0f0f0] font-medium">Ojaven</strong>, a platform I am creating to help digital agencies work with greater clarity and cohesion. It represents both my architectural convictions and my vision of what high-utility B2B software should feel like.
              </p>
            </Reveal>
          </div>

          {/* Timeline */}
          <div className="border-t border-[#151515] pt-16">
            <div className="mb-10">
              <Reveal>
                <span className="text-xs uppercase tracking-widest text-[#c8a97e] font-mono block mb-2">
                  Evolution
                </span>
                <h2 className="font-display text-3xl sm:text-4xl text-[#f0f0f0] font-normal">
                  The Journey So Far
                </h2>
              </Reveal>
            </div>
            <Timeline />
          </div>

          {/* Now Section */}
          <div className="border-t border-[#151515] pt-16">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-8">
              <Reveal>
                <div>
                  <span className="text-xs uppercase tracking-widest text-[#c8a97e] font-mono block mb-2">
                    Current Horizon
                  </span>
                  <h2 className="font-display text-3xl sm:text-4xl text-[#f0f0f0] font-normal">
                    What I’m Focused On
                  </h2>
                </div>
              </Reveal>
              <Reveal delay={0.1}>
                <span className="text-xs font-mono text-[#555555]">
                  Last updated: {nowData.lastUpdated}
                </span>
              </Reveal>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {nowData.focus.map((item, idx) => (
                <Reveal key={item.category} delay={0.1 * idx}>
                  <div className="p-6 rounded-xl border border-[#1f1f1f] bg-[#0c0c0c] h-full flex flex-col justify-start">
                    <span className="text-xs font-mono text-[#c8a97e] mb-2 uppercase tracking-wider">
                      {item.category}
                    </span>
                    <p className="text-sm text-[#888888] leading-relaxed">
                      {item.item}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Guiding Convictions */}
          <div className="border-t border-[#151515] pt-16">
            <div className="mb-10">
              <Reveal>
                <span className="text-xs uppercase tracking-widest text-[#c8a97e] font-mono block mb-2">
                  Values
                </span>
                <h2 className="font-display text-3xl sm:text-4xl text-[#f0f0f0] font-normal">
                  Core Principles
                </h2>
              </Reveal>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Reveal delay={0.1}>
                <div className="p-6 rounded-xl border border-[#1f1f1f] bg-[#0c0c0c] space-y-2">
                  <h3 className="font-display text-xl text-[#f0f0f0]">Substance Over Noise</h3>
                  <p className="text-sm text-[#888888] leading-relaxed">
                    Prioritize tangible product execution over performative networking and buzzwords.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="p-6 rounded-xl border border-[#1f1f1f] bg-[#0c0c0c] space-y-2">
                  <h3 className="font-display text-xl text-[#f0f0f0]">Craftsmanship at Scale</h3>
                  <p className="text-sm text-[#888888] leading-relaxed">
                    Software should be fast, reliable, and deeply intuitive, regardless of how complex the backend is.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.3}>
                <div className="p-6 rounded-xl border border-[#1f1f1f] bg-[#0c0c0c] space-y-2">
                  <h3 className="font-display text-xl text-[#f0f0f0]">Patience & Compounding</h3>
                  <p className="text-sm text-[#888888] leading-relaxed">
                    Significant companies and products take years of consistent, unglamorous execution to build.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
