import Link from 'next/link'
import { Reveal } from '@/components/motion/Reveal'
import { siteConfig } from '@/lib/data/site'

export function OjavenPreview() {
  return (
    <section className="py-20 md:py-28 border-t border-[#151515] relative overflow-hidden">
      <div className="container-site">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <div className="flex items-center justify-between gap-4 mb-8">
              <span className="text-xs uppercase tracking-widest text-[#c8a97e] font-mono">
                02 — Major Venture
              </span>
              <span className="text-xs font-mono text-[#555555]">
                Launch Target: {siteConfig.ojaven.launchDate}
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative group rounded-2xl p-8 sm:p-12 md:p-16 border border-[#1f1f1f] bg-[#0c0c0c] hover:border-[#c8a97e]/40 transition-all duration-500 overflow-hidden shadow-2xl">
              {/* Subtle accent corner gradient */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-[#c8a97e]/5 rounded-full blur-3xl pointer-events-none group-hover:bg-[#c8a97e]/10 transition-all duration-500" />

              <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-8">
                <div className="space-y-6 max-w-2xl">
                  <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full bg-[#c8a97e]/10 border border-[#c8a97e]/20 text-[#c8a97e] text-xs font-mono">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c8a97e] animate-pulse" />
                    <span>In Active Development</span>
                  </div>

                  <h3 className="font-display text-4xl sm:text-5xl md:text-6xl text-[#f0f0f0] font-normal tracking-tight">
                    {siteConfig.ojaven.name}
                  </h3>

                  <p className="text-base sm:text-lg text-[#888888] leading-relaxed">
                    A purpose-built platform currently in development, designed to streamline operations, workflows, and client delivery for modern digital agencies.
                  </p>

                  <div className="pt-2 flex flex-wrap items-center gap-6 text-xs text-[#555555] font-mono">
                    <div>
                      <span className="text-[#888888]">Role:</span> Founder & Lead Architect
                    </div>
                    <div>
                      <span className="text-[#888888]">Target Release:</span> 10 July 2027
                    </div>
                  </div>
                </div>

                <div className="shrink-0">
                  <Link
                    href="/ojaven"
                    className="inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-[#141414] border border-[#1f1f1f] text-[#f0f0f0] hover:bg-[#c8a97e] hover:text-[#060606] hover:border-[#c8a97e] font-medium text-sm transition-all duration-300 group/btn"
                  >
                    <span>Read Vision & Blueprint</span>
                    <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
