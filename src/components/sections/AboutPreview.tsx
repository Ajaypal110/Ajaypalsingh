import Link from 'next/link'
import { Reveal } from '@/components/motion/Reveal'

export function AboutPreview() {
  return (
    <section className="py-20 md:py-28 border-t border-[#151515]">
      <div className="container-site">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <span className="text-xs uppercase tracking-widest text-[#c8a97e] font-mono block mb-4">
              01 — Perspective
            </span>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-[#f0f0f0] font-normal leading-tight mb-8">
              Building software with intent, clarity, and patience.
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="space-y-6 text-base sm:text-lg text-[#888888] leading-relaxed">
              <p>
                I view technology as a medium for solving friction and giving form to ideas. Rather than chasing short-lived trends, my focus is on understanding real problems, creating durable digital products, and building with long-term craftsmanship.
              </p>
              <p>
                From self-driven experiments to full-scale SaaS platforms like Ojaven, every project is a testing ground for curiosity, architecture, and entrepreneurial discipline.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.3} className="mt-8">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#f0f0f0] hover:text-[#c8a97e] transition-colors group"
            >
              <span>Read the full journey & philosophy</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
