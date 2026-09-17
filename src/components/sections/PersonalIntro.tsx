import Link from 'next/link'
import { Reveal } from '@/components/motion/Reveal'

export function PersonalIntro() {
  return (
    <section className="section-padding border-t border-[#1e2230] relative">
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Section Marker */}
          <div className="lg:col-span-4 space-y-3">
            <Reveal>
              <span className="text-xs uppercase tracking-[0.2em] text-[#e07a5f] font-mono block">
                01 // Perspective
              </span>
              <h2 className="text-headline-sub text-[#f5f6f9]">
                I build software to solve actual friction.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-sm font-mono text-[#54586d] pt-2">
                No corporate fluff. No vanity metrics. Just thoughtful execution.
              </p>
            </Reveal>
          </div>

          {/* Narrative Columns */}
          <div className="lg:col-span-8 space-y-6 text-[#8e92a4] text-base sm:text-lg leading-relaxed">
            <Reveal delay={0.15}>
              <p className="text-[#f5f6f9] text-xl font-medium leading-snug">
                I didn’t get into technology to build resumes or collect tech-stack buzzwords. I got into it because turning an empty screen into an active, functional tool is one of the most exciting things you can do.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <p>
                Over the years, that curiosity shifted from merely learning syntax into understanding how software impacts real people and real businesses. Coding is just the construction material. The real work is finding where systems break down, cutting through unnecessary complexity, and building things that respect people’s time.
              </p>
            </Reveal>

            <Reveal delay={0.25}>
              <p>
                Today, I spend most of my waking hours architecting <strong className="text-[#f5f6f9]">Ojaven</strong>. I’m building it deliberately, without cutting corners, because durability and craft take time.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="pt-4 flex items-center gap-6">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-sm font-medium text-[#f5f6f9] hover:text-[#e07a5f] transition-colors group"
                >
                  <span>Read more about my journey</span>
                  <span className="text-[#e07a5f] group-hover:translate-x-1 transition-transform">→</span>
                </Link>
                <Link
                  href="/contact"
                  className="text-sm font-mono text-[#54586d] hover:text-[#8e92a4] transition-colors"
                >
                  Reach out directly
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
