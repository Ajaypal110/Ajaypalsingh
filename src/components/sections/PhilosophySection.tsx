import { Reveal } from '@/components/motion/Reveal'

export function PhilosophySection() {
  const principles = [
    {
      number: '01',
      title: 'Craft over velocity',
      description:
        'Fast shipping without architectural discipline creates compound technical debt. I prefer building things that remain stable and maintainable five years from now.',
    },
    {
      number: '02',
      title: 'Dignified utility',
      description:
        'Software should not yell at users with endless popups, dark patterns, or feature bloat. Great tools quietly solve hard problems and then get out of the way.',
    },
    {
      number: '03',
      title: 'Patience & compounding',
      description:
        'Meaningful ventures aren’t built in a weekend hackathon. Taking the time to build deep foundations—like targeting 10 July 2027 for Ojaven—is an intentional choice.',
    },
  ]

  return (
    <section className="section-padding border-t border-[#1e2230] bg-[#0b0d13]/40 relative">
      <div className="container-site">
        <div className="space-y-12">
          {/* Header */}
          <div className="max-w-2xl space-y-2">
            <Reveal>
              <span className="text-xs uppercase tracking-[0.2em] text-[#e07a5f] font-mono block">
                05 // Principles
              </span>
              <h2 className="text-headline-section text-[#f5f6f9]">
                How I Think About Building
              </h2>
            </Reveal>
          </div>

          {/* Principles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {principles.map((p, idx) => (
              <Reveal key={p.number} delay={0.1 * (idx + 1)}>
                <div className="h-full rounded-xl border border-[#1e2230] bg-[#11131a] p-6 sm:p-8 space-y-4 flex flex-col justify-between hover:border-[#2e3448] transition-all">
                  <div className="space-y-4">
                    <span className="font-mono text-xs text-[#e07a5f] block">
                      {'//'} {p.number}
                    </span>
                    <h3 className="text-xl font-semibold text-[#f5f6f9]">
                      {p.title}
                    </h3>
                    <p className="text-sm text-[#8e92a4] leading-relaxed">
                      {p.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
