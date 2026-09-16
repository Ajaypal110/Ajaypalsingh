import Link from 'next/link'
import type { Project } from '@/lib/data/projects'

interface ProjectCardProps {
  project: Project
  featured?: boolean
}

export function ProjectCard({ project, featured = false }: ProjectCardProps) {
  const isInternal = project.url?.startsWith('/')

  return (
    <div
      className={`relative rounded-2xl border border-[#1f1f1f] bg-[#0c0c0c] hover:border-[#333333] transition-all duration-300 flex flex-col justify-between overflow-hidden group ${
        featured
          ? 'p-8 sm:p-12 md:col-span-2 border-[#c8a97e]/30 hover:border-[#c8a97e]/60'
          : 'p-6 sm:p-8'
      }`}
    >
      {featured && (
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#c8a97e]/5 rounded-full blur-3xl pointer-events-none" />
      )}

      <div className="space-y-4 relative z-10">
        <div className="flex items-center justify-between gap-3 text-xs font-mono">
          <span className="text-[#555555]">{project.year}</span>
          <span
            className={`px-2.5 py-0.5 rounded uppercase tracking-wider text-[10px] font-semibold border ${
              project.status === 'building'
                ? 'bg-[#c8a97e]/10 text-[#c8a97e] border-[#c8a97e]/30'
                : 'bg-[#141414] text-[#888888] border-[#1f1f1f]'
            }`}
          >
            {project.status}
          </span>
        </div>

        <h3
          className={`font-display text-[#f0f0f0] font-normal group-hover:text-[#c8a97e] transition-colors ${
            featured ? 'text-3xl sm:text-4xl' : 'text-2xl'
          }`}
        >
          {project.name}
        </h3>

        <p className="text-sm sm:text-base text-[#888888] leading-relaxed">
          {project.description}
        </p>

        <div className="pt-2">
          <p className="text-xs font-mono text-[#555555] uppercase tracking-wider mb-1">
            Why I built this:
          </p>
          <p className="text-xs text-[#888888] italic leading-relaxed">
            &ldquo;{project.why}&rdquo;
          </p>
        </div>
      </div>

      <div className="pt-6 mt-6 border-t border-[#151515] flex flex-wrap items-center justify-between gap-4 relative z-10">
        <div className="flex flex-wrap gap-1.5">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-[#141414] text-[#888888] border border-[#1f1f1f]"
            >
              {tech}
            </span>
          ))}
        </div>

        {project.url && (
          <div>
            {isInternal ? (
              <Link
                href={project.url}
                className="text-xs font-mono text-[#f0f0f0] hover:text-[#c8a97e] transition-colors inline-flex items-center gap-1.5"
              >
                <span>View Blueprint</span>
                <span>→</span>
              </Link>
            ) : (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono text-[#f0f0f0] hover:text-[#c8a97e] transition-colors inline-flex items-center gap-1.5"
              >
                <span>View Project</span>
                <span>↗</span>
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
