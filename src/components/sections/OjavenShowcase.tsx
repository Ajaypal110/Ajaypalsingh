import { Reveal } from '@/components/motion/Reveal'

interface FeatureConcept {
  title: string
  tagline: string
  description: string
  conceptTag: string
}

const concepts: FeatureConcept[] = [
  {
    title: 'Unified Operational Flow',
    tagline: 'Collapsing fragmented toolchains',
    description:
      'Instead of stitching together dozens of disparate apps for clients, tasks, and assets, Ojaven explores a single, focused environment tailored to agency workflows.',
    conceptTag: 'Core Architecture',
  },
  {
    title: 'Client Collaboration Layer',
    tagline: 'Transparent, dignified communication',
    description:
      'Eliminating chaotic email chains and scattered feedback loops with an interface designed specifically for agency-client transparency.',
    conceptTag: 'Client Experience',
  },
  {
    title: 'Automation Without Bloat',
    tagline: 'Practical operational intelligence',
    description:
      'Lightweight, high-leverage automations that take the burden off creative and strategic teams without requiring complex configuration.',
    conceptTag: 'System Intelligence',
  },
  {
    title: 'Precision Resource Visibility',
    tagline: 'Clarity on commitments and bandwidth',
    description:
      'A bird’s-eye view of agency bandwidth, project health, and delivery timelines without overwhelming spreadsheets.',
    conceptTag: 'Operations',
  },
]

export function OjavenShowcase() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {concepts.map((concept, idx) => (
          <Reveal key={concept.title} delay={0.1 * idx}>
            <div className="p-8 rounded-2xl border border-[#1f1f1f] bg-[#0c0c0c] hover:border-[#c8a97e]/30 transition-all duration-300 h-full flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-[#c8a97e]">{concept.conceptTag}</span>
                  <span className="text-[11px] px-2 py-0.5 rounded bg-[#141414] text-[#555555]">
                    Concept Preview
                  </span>
                </div>

                <h3 className="font-display text-2xl text-[#f0f0f0] group-hover:text-[#c8a97e] transition-colors">
                  {concept.title}
                </h3>

                <p className="text-xs font-mono text-[#888888]">
                  {concept.tagline}
                </p>

                <p className="text-sm text-[#888888] leading-relaxed">
                  {concept.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#151515] flex items-center justify-between text-xs text-[#555555] font-mono">
                <span>Phase: R&D & Prototyping</span>
                <span>Target: 2027</span>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  )
}
