'use client'

import { motion } from 'motion/react'
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
    title: 'Building Ojaven & Long-Term Compounding',
    description:
      'Designing and developing Ojaven from the ground up as a dedicated platform for modern digital agencies. Focusing on software quality, operational simplicity, and durable architecture.',
    tag: 'Primary Venture',
  },
  {
    period: '2024 — 2025',
    title: 'Product Experiments & Technical Depth',
    description:
      'Built and deployed various projects including Wanderlust, Khammaghani, and Smart Property Listings. Focused on understanding user experience patterns, full-stack complexity, and interface performance.',
    tag: 'Exploration',
  },
  {
    period: '2023 — 2024',
    title: 'Shift to Entrepreneurial Thinking',
    description:
      'Realized that writing clean code is only half the battle — building meaningful software requires understanding distribution, workflows, and the economics of solving real problems.',
    tag: 'Mindset',
  },
  {
    period: 'Early Days',
    title: 'The Spark & Self-Driven Curiosity',
    description:
      'Fell in love with the power of software: the ability to turn a blank editor into an interactive system. Spent countless hours breaking things, reading source code, and understanding the web.',
    tag: 'Foundation',
  },
]

export function Timeline() {
  return (
    <div className="relative py-12">
      {/* Central Line */}
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-[#1f1f1f] md:-translate-x-1/2" />

      <div className="space-y-12 md:space-y-16">
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
              <div className="absolute left-4 md:left-1/2 top-1.5 -translate-x-1/2 z-10 w-3 h-3 rounded-full bg-[#060606] border-2 border-[#c8a97e]" />

              {/* Content Box */}
              <div className="ml-10 md:ml-0 md:w-1/2 md:px-10">
                <Reveal delay={0.1 * idx}>
                  <div className="p-6 rounded-xl border border-[#1f1f1f] bg-[#0c0c0c] hover:border-[#333333] transition-colors">
                    <div className="flex items-center justify-between gap-2 mb-2 font-mono text-xs">
                      <span className="text-[#c8a97e]">{milestone.period}</span>
                      {milestone.tag && (
                        <span className="text-[11px] px-2 py-0.5 rounded bg-[#141414] text-[#888888] border border-[#1f1f1f]">
                          {milestone.tag}
                        </span>
                      )}
                    </div>
                    <h3 className="font-display text-xl text-[#f0f0f0] mb-2 font-normal">
                      {milestone.title}
                    </h3>
                    <p className="text-sm text-[#888888] leading-relaxed">
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
