import Link from 'next/link'
import { Reveal } from '@/components/motion/Reveal'
import { siteConfig } from '@/lib/data/site'

export function OjavenPreview() {
  return (
    <section className="section-padding border-t border-[#1e2230] bg-[#0b0d13]/50 relative overflow-hidden">
      {/* Background ambient mesh */}
      <div 
        className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none opacity-20 blur-[130px]"
        style={{
          background: 'radial-gradient(circle, rgba(224, 122, 95, 0.2) 0%, transparent 70%)',
        }}
      />

      <div className="container-site relative z-10">
        <div className="space-y-12">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-2">
              <Reveal>
                <span className="text-xs uppercase tracking-[0.2em] text-[#e07a5f] font-mono block">
                  02 // Primary Venture
                </span>
                <h2 className="text-headline-section text-[#f5f6f9]">
                  Ojaven
                </h2>
              </Reveal>
            </div>

            <Reveal delay={0.1}>
              <div className="flex items-center gap-3 font-mono text-xs text-[#8e92a4] border border-[#1e2230] bg-[#11131a] px-4 py-2 rounded-full">
                <span className="w-2 h-2 rounded-full bg-[#34d399] animate-pulse" />
                <span>Planned Launch: <strong className="text-[#f5f6f9]">{siteConfig.ojaven.launchDate}</strong></span>
              </div>
            </Reveal>
          </div>

          {/* Main Venture Card / Abstract UI Presentation */}
          <Reveal delay={0.15}>
            <div className="rounded-2xl border border-[#1e2230] bg-[#11131a] p-6 sm:p-10 lg:p-14 relative overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                {/* Left: Problem & Vision */}
                <div className="lg:col-span-6 space-y-6">
                  <div className="space-y-2">
                    <span className="text-xs font-mono uppercase tracking-wider text-[#8e92a4]">
                      The Problem & The Purpose
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-semibold text-[#f5f6f9] tracking-tight">
                      Modern agencies don’t need more bloated tools. They need operational clarity.
                    </h3>
                  </div>

                  <p className="text-[#8e92a4] text-base leading-relaxed">
                    Most creative and technical agencies operate across 5 or 6 fragmented SaaS subscriptions—one for client chat, another for tasks, another for approvals, and another for invoicing. Founders become human glue bridging disconnected tabs.
                  </p>

                  <p className="text-[#8e92a4] text-base leading-relaxed">
                    I am engineering Ojaven to serve as a unified, high-utility operational backbone built specifically around agency dynamics and client delivery.
                  </p>

                  <div className="pt-2 flex flex-wrap items-center gap-4">
                    <Link
                      href="/ojaven"
                      className="btn-solid"
                    >
                      <span>Read the Full Blueprint</span>
                      <span>→</span>
                    </Link>
                  </div>
                </div>

                {/* Right: Abstract System Blueprint / Lifecycle Stages */}
                <div className="lg:col-span-6 space-y-4">
                  <div className="rounded-xl border border-[#1e2230] bg-[#0a0c10] p-6 space-y-5 font-mono">
                    <div className="flex items-center justify-between text-xs text-[#54586d] border-b border-[#1e2230] pb-3">
                      <span>SYSTEM // ARCHITECTURE MATRIX</span>
                      <span className="text-[#34d399]">BUILD_IN_PROGRESS</span>
                    </div>

                    {/* 3 Explicit Lifecycle Stages */}
                    <div className="space-y-3 text-xs">
                      {/* Stage 1 */}
                      <div className="p-3.5 rounded-lg border border-[#1e2230] bg-[#11131a] flex items-center justify-between gap-4">
                        <div className="space-y-1">
                          <div className="text-[#f5f6f9] font-medium flex items-center gap-2">
                            <span className="text-[#34d399]">✓</span>
                            <span>Phase 01: Concept & Problem Discovery</span>
                          </div>
                          <p className="text-[11px] text-[#54586d]">Agency workflows, pain points, and schema definitions mapped.</p>
                        </div>
                        <span className="text-[10px] uppercase text-[#34d399] px-2 py-0.5 rounded bg-[#34d399]/10">Complete</span>
                      </div>

                      {/* Stage 2 */}
                      <div className="p-3.5 rounded-lg border border-[#e07a5f]/40 bg-[#e07a5f]/5 flex items-center justify-between gap-4">
                        <div className="space-y-1">
                          <div className="text-[#f5f6f9] font-medium flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#e07a5f] animate-pulse" />
                            <span>Phase 02: Core Engineering & Systems</span>
                          </div>
                          <p className="text-[11px] text-[#8e92a4]">Client collaboration portals, pipeline states, and data contracts.</p>
                        </div>
                        <span className="text-[10px] uppercase text-[#e07a5f] px-2 py-0.5 rounded bg-[#e07a5f]/15 font-semibold">Active</span>
                      </div>

                      {/* Stage 3 */}
                      <div className="p-3.5 rounded-lg border border-[#1e2230] bg-[#11131a]/60 flex items-center justify-between gap-4 opacity-70">
                        <div className="space-y-1">
                          <div className="text-[#8e92a4] font-medium flex items-center gap-2">
                            <span>○</span>
                            <span>Phase 03: Public Launch & Deployment</span>
                          </div>
                          <p className="text-[11px] text-[#54586d]">Global release and multi-tenant production operations.</p>
                        </div>
                        <span className="text-[10px] uppercase text-[#8e92a4] px-2 py-0.5 rounded bg-[#1e2230]">10 July 2027</span>
                      </div>
                    </div>

                    <div className="pt-2 text-[11px] text-[#54586d] flex items-center justify-between">
                      <span>ROLE: FOUNDER & ARCHITECT</span>
                      <span className="text-[#8e92a4]">INDIA → WORLD</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
