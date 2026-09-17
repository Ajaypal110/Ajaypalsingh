import { Reveal } from '@/components/motion/Reveal'
import { nowData } from '@/lib/data/now'

export function FocusNow() {
  return (
    <section className="section-padding border-t border-[#1e2230] relative">
      <div className="container-site">
        <div className="space-y-12">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <Reveal>
                <span className="text-xs uppercase tracking-[0.2em] text-[#e07a5f] font-mono block mb-2">
                  03 // Real-Time Horizon
                </span>
                <h2 className="text-headline-section text-[#f5f6f9]">
                  What I&apos;m Focused On Right Now
                </h2>
              </Reveal>
            </div>
            <Reveal delay={0.1}>
              <div className="text-xs font-mono text-[#54586d] sm:text-right">
                <span>Updated: {nowData.lastUpdated}</span>
              </div>
            </Reveal>
          </div>

          {/* Focus Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {nowData.items.map((item, idx) => (
              <Reveal key={item.category} delay={0.1 * (idx + 1)}>
                <div className="h-full rounded-xl border border-[#1e2230] bg-[#11131a] p-6 sm:p-8 space-y-4 hover:border-[#2e3448] transition-all group">
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-xs uppercase tracking-widest text-[#e07a5f] font-mono font-medium">
                      {item.category}
                    </span>
                    {item.tag && (
                      <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full border border-[#1e2230] bg-[#0f1117] text-[#8e92a4]">
                        {item.tag}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-semibold text-[#f5f6f9] group-hover:text-[#e07a5f] transition-colors">
                    {item.label}
                  </h3>

                  <p className="text-sm sm:text-base text-[#8e92a4] leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
