import Link from 'next/link'
import { Reveal } from '@/components/motion/Reveal'
import { projects } from '@/lib/data/projects'

export function BuildsPreview() {
  // Show non-Ojaven projects in preview
  const previewProjects = projects.filter((p) => p.slug !== 'ojaven').slice(0, 3)

  return (
    <section className="py-20 md:py-28 border-t border-[#151515]">
      <div className="container-site">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <Reveal>
              <div>
                <span className="text-xs uppercase tracking-widest text-[#c8a97e] font-mono block mb-2">
                  03 — Exploration & Builds
                </span>
                <h2 className="font-display text-3xl sm:text-4xl text-[#f0f0f0] font-normal">
                  Selected Work & Experiments
                </h2>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <Link
                href="/builds"
                className="text-sm text-[#888888] hover:text-[#c8a97e] transition-colors inline-flex items-center gap-1.5 font-medium group"
              >
                <span>View all builds</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {previewProjects.map((project, idx) => (
              <Reveal key={project.slug} delay={0.15 * (idx + 1)}>
                <div className="h-full flex flex-col justify-between p-6 rounded-xl border border-[#1f1f1f] bg-[#0c0c0c] hover:border-[#333333] transition-all duration-300">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-xs font-mono text-[#555555]">
                      <span>{project.year}</span>
                      <span className="capitalize px-2 py-0.5 rounded bg-[#141414] text-[#888888] border border-[#1f1f1f]">
                        {project.status}
                      </span>
                    </div>

                    <h3 className="font-display text-xl text-[#f0f0f0]">
                      {project.name}
                    </h3>

                    <p className="text-sm text-[#888888] leading-relaxed line-clamp-3">
                      {project.shortDescription}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-[#151515] flex items-center justify-between">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#141414] text-[#888888]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
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
