import Link from 'next/link'
import { Reveal } from '@/components/motion/Reveal'
import { siteConfig } from '@/lib/data/site'

export function HomeContact() {
  return (
    <section className="section-padding border-t border-[#1e2230] relative overflow-hidden bg-grid-architectural">
      <div className="container-site">
        <div className="max-w-4xl mx-auto rounded-2xl border border-[#1e2230] bg-[#11131a] p-8 sm:p-14 text-center space-y-6 relative overflow-hidden">
          {/* Subtle accent glow */}
          <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full pointer-events-none opacity-15 blur-[120px]"
            style={{
              background: 'radial-gradient(circle, rgba(224, 122, 95, 0.3) 0%, transparent 70%)',
            }}
          />

          <Reveal>
            <span className="text-xs uppercase tracking-[0.2em] text-[#e07a5f] font-mono block">
              06 // Connect
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#f5f6f9] tracking-tight mt-2">
              Have an idea worth building?
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-base sm:text-lg text-[#8e92a4] max-w-xl mx-auto leading-relaxed">
              I’m always open to thoughtful discussions with other founders, engineers, and creators. Whether it’s about agency workflows, SaaS architecture, or new concepts.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="btn-solid"
              >
                <span>Open Contact Channel</span>
                <span>→</span>
              </Link>
              <a
                href={`mailto:${siteConfig.social.email}`}
                className="btn-outline font-mono text-xs"
              >
                <span>{siteConfig.social.email}</span>
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
