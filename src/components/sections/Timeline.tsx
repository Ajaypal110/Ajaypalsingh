'use client'

import { Reveal } from '@/components/motion/Reveal'

interface Milestone {
  period: string
  title: string
  description: string
  tag?: string
}

const milestones: Milestone[] = [
  {
    period: 'Current — 2027',
    title: 'Architecting Ojaven & Long-Term Compounding',
    description:
      'Designing and engineering Ojaven from the ground up as a dedicated operational platform for digital agencies. Focusing entirely on software stability, low friction, and durable architecture.',
    tag: 'Primary Venture',
  },
  {
    period: '2024 — 2025',
    title: 'The Shift to Venture & Problem Discovery',
    description:
      'Realized that pure engineering without customer understanding is an incomplete pursuit. Began studying how companies operate, where operational bottlenecks occur, and how independent founders build sustainable products.',
    tag: 'Mindset',
  },
  {
    period: '2023 — 2024',
    title: 'Software Craft & Systems Depth',
    description:
      'Moved beyond basic implementations into understanding system design, distributed patterns, data pipelines, and UI ergonomics. Learned that writing less code with higher intention is the true sign of software maturity.',
    tag: 'Craft',
  },
  {
    period: 'Early Foundations',
    title: 'Curiosity & The Excitement of Building',
    description:
      'Started tinkering with computers and code out of pure curiosity. The feeling of typing logic into an empty editor and seeing an interactive system come alive cemented my passion for creating software.',
    tag: 'Roots',
  },
]

export function Timeline() {
  return (
    <div className="relative py-8">
      {/* Central Line */}
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-[#1e2230] md:-translate-x-1/2" />

      <div className="space-y-10 md:space-y-14">
        {milestones.map((milestone, idx) => {
          const isEven = idx % 2 === 0

          return (
            <div
              key={milestone.title}
              className={`relative flex flex-col md:flex-row items-start ${
                isEven ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline Marker Dot */}
              <div className="absolute left-4 md:left-1/2 top-2 -translate-x-1/2 z-10 w-3 h-3 rounded-full bg-[#08090c] border-2 border-[#e07a5f]" />

              {/* Content Box */}
              <div className="ml-10 md:ml-0 md:w-1/2 md:px-10">
                <Reveal delay={0.1 * idx}>
                  <div className="p-6 rounded-xl border border-[#1e2230] bg-[#11131a] hover:border-[#2e3448] transition-colors space-y-2.5">
                    <div className="flex items-center justify-between gap-2 font-mono text-xs">
                      <span className="text-[#e07a5f] font-medium">{milestone.period}</span>
                      {milestone.tag && (
                        <span className="text-[11px] px-2 py-0.5 rounded bg-[#0f1117] text-[#8e92a4] border border-[#1e2230]">
                          {milestone.tag}
                        </span>
                      )}
                    </div>
                    <h3 className="text-lg font-semibold text-[#f5f6f9]">
                      {milestone.title}
                    </h3>
                    <p className="text-sm text-[#8e92a4] leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </Reveal>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
