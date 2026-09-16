import { Reveal } from '@/components/motion/Reveal'
import { ProjectCard } from '@/components/sections/ProjectCard'
import { projects } from '@/lib/data/projects'
import { generatePageMetadata, generateBuildsPageJsonLd } from '@/lib/seo'
import type { Metadata } from 'next'

export const metadata: Metadata = generatePageMetadata({
  title: 'Builds & Projects by Ajaypal Singh',
  description:
    'Software projects, platforms, and technical experiments built by Ajaypal Singh (Ajaypal Singh Solanki) — including Ojaven, Wanderlust, Khammaghani, and other builds.',
  path: '/builds',
  keywords: [
    'Ajaypal Singh projects',
    'Ajaypalsingh builds',
    'software projects Ajaypal',
    'Ajaypal Singh software',
  ],
})

export default function BuildsPage() {
  const featuredProject = projects.find((p) => p.featured)
  const otherProjects = projects.filter((p) => !p.featured)
  const jsonLd = generateBuildsPageJsonLd()

  return (
    <div className="pt-32 pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="container-site">
        <div className="max-w-5xl mx-auto space-y-16">
          {/* Header */}
          <div className="space-y-4">
            <Reveal>
              <span className="text-xs uppercase tracking-widest text-[#c8a97e] font-mono block">
                Index of Work
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="font-display text-4xl sm:text-6xl text-[#f0f0f0] font-normal tracking-tight">
                Selected Builds
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-lg text-[#888888] font-normal max-w-2xl leading-relaxed">
                Platforms, software tools, and experiments I have created. Each built to explore an architectural concept, solve an operational problem, or test an idea in the wild.
              </p>
            </Reveal>
          </div>

          {/* Featured Venture */}
          {featuredProject && (
            <div className="space-y-4">
              <Reveal>
                <div className="flex items-center gap-2 text-xs font-mono text-[#555555] uppercase tracking-wider">
                  <span>Current Major Focus</span>
                </div>
              </Reveal>
              <Reveal delay={0.1}>
                <ProjectCard project={featuredProject} featured={true} />
              </Reveal>
            </div>
          )}

          {/* Other Projects Grid */}
          <div className="space-y-6 pt-8 border-t border-[#151515]">
            <Reveal>
              <div className="flex items-center justify-between text-xs font-mono text-[#555555] uppercase tracking-wider">
                <span>Explorations & Experiments</span>
                <span>{otherProjects.length} Projects</span>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {otherProjects.map((project, idx) => (
                <Reveal key={project.slug} delay={0.1 * (idx + 1)}>
                  <ProjectCard project={project} />
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
