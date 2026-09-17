import { Reveal } from '@/components/motion/Reveal'

interface ArchitectureModule {
  title: string
  subtitle: string
  description: string
  status: 'Concept' | 'In Engineering' | 'Planned'
  stageNumber: string
}

const modules: ArchitectureModule[] = [
  {
    stageNumber: '01',
    title: 'Unified Operational Core',
    subtitle: 'Consolidating agency fragmented channels',
    description:
      'Rather than stitching 5+ SaaS tools together for tasks, client feedback, and assets, Ojaven is built around a single, cohesive agency data model.',
    status: 'In Engineering',
  },
  {
    stageNumber: '02',
    title: 'Client Collaboration Layer',
    subtitle: 'Transparent, dignified communication',
    description:
      'Replaces scattered Slack channels and messy email threads with a dedicated client portal that presents deliverables, approvals, and updates with total clarity.',
    status: 'In Engineering',
  },
  {
    stageNumber: '03',
    title: 'Ambient System Automation',
    subtitle: 'Removing repetitive administrative friction',
    description:
      'Quiet background routines that automatically route approvals, log activity states, and sync client sign-offs without requiring manual data entry.',
    status: 'Concept',
  },
  {
    stageNumber: '04',
    title: 'Agency Bandwidth & Health Engine',
    subtitle: 'Predictable capacity management',
    description:
      'Provides agency leaders with live visibility into active project commitments, scope changes, and deliverable health without tedious spreadsheet tracking.',
    status: 'Planned',
  },
]

export function OjavenShowcase() {
  return (
    <div className="space-y-8">
      {/* Visual System Architecture Diagram */}
      <Reveal>
        <div className="rounded-2xl border border-[#1e2230] bg-[#11131a] p-6 sm:p-10 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#1e2230] pb-4 text-xs font-mono">
            <span className="text-[#e07a5f] font-medium">OJAVEN // ARCHITECTURAL SCHEMATIC</span>
            <span className="text-[#34d399] flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#34d399] animate-pulse" />
              ACTIVE SYSTEM ENGINEERING
            </span>
          </div>

          {/* Interactive wireframe pipeline */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-mono text-xs">
            <div className="p-4 rounded-lg border border-[#1e2230] bg-[#0a0c10] space-y-2">
              <span className="text-[#54586d] block text-[10px]">LAYER 01</span>
              <p className="text-[#f5f6f9] font-medium">Client Interaction Portal</p>
              <p className="text-[#8e92a4] text-[11px] leading-relaxed">
                Asynchronous approvals, deliverable sign-offs, and communication.
              </p>
            </div>

            <div className="p-4 rounded-lg border border-[#e07a5f]/40 bg-[#e07a5f]/5 space-y-2">
              <span className="text-[#e07a5f] block text-[10px]">LAYER 02 (CORE)</span>
              <p className="text-[#f5f6f9] font-medium">Operational Hub</p>
              <p className="text-[#8e92a4] text-[11px] leading-relaxed">
                Unified data pipeline managing project states, assets, and milestones.
              </p>
            </div>

            <div className="p-4 rounded-lg border border-[#1e2230] bg-[#0a0c10] space-y-2">
              <span className="text-[#54586d] block text-[10px]">LAYER 03</span>
              <p className="text-[#f5f6f9] font-medium">Delivery & Handoff</p>
              <p className="text-[#8e92a4] text-[11px] leading-relaxed">
                Clean asset packages, invoicing triggers, and archived records.
              </p>
            </div>
          </div>
        </div>
      </Reveal>

      {/* Module Breakdown Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {modules.map((m, idx) => (
          <Reveal key={m.title} delay={0.1 * idx}>
            <div className="p-6 sm:p-8 rounded-xl border border-[#1e2230] bg-[#11131a] hover:border-[#2e3448] transition-all h-full flex flex-col justify-between group space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-[#e07a5f]">{'//'} MODULE {m.stageNumber}</span>
                  <span
                    className={`text-[10px] uppercase font-semibold px-2.5 py-0.5 rounded-full ${
                      m.status === 'In Engineering'
                        ? 'bg-[#34d399]/15 text-[#34d399] border border-[#34d399]/30'
                        : m.status === 'Concept'
                        ? 'bg-[#e07a5f]/15 text-[#e07a5f] border border-[#e07a5f]/30'
                        : 'bg-[#1e2230] text-[#8e92a4]'
                    }`}
                  >
                    {m.status}
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-[#f5f6f9] group-hover:text-[#e07a5f] transition-colors">
                  {m.title}
                </h3>

                <p className="text-xs font-mono text-[#8e92a4]">
                  {m.subtitle}
                </p>

                <p className="text-sm text-[#8e92a4] leading-relaxed">
                  {m.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#1e2230] flex items-center justify-between text-xs font-mono text-[#54586d]">
                <span>TARGET: 10 JULY 2027</span>
                <span>STATUS: TRANSPARENT</span>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  )
}
