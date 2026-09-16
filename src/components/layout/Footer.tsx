import Link from 'next/link'
import { siteConfig } from '@/lib/data/site'
import { navLinks } from '@/lib/data/navigation'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-[#1f1f1f] bg-[#060606] text-[#888888] mt-auto">
      <div className="container-site py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          {/* Identity Column */}
          <div className="md:col-span-6 space-y-4">
            <Link
              href="/"
              className="inline-block font-display text-2xl text-[#f0f0f0] tracking-tight hover:text-[#c8a97e] transition-colors"
            >
              {siteConfig.name}
            </Link>
            <p className="text-sm text-[#888888] font-mono">
              {siteConfig.tagline}
            </p>
            <p className="text-sm text-[#555555] max-w-md leading-relaxed">
              Founder & builder. Currently creating {siteConfig.ojaven.name}, scheduled to launch in July 2027. Exploring the intersection of software, business, and craftsmanship.
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-3 space-y-3">
            <p className="text-xs uppercase tracking-widest text-[#555555] font-mono">
              Index
            </p>
            <ul className="space-y-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#888888] hover:text-[#f0f0f0] transition-colors inline-flex items-center gap-1 group"
                  >
                    <span>{link.label}</span>
                    <span className="text-[#555555] group-hover:text-[#c8a97e] transition-colors text-xs">
                      →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Column */}
          <div className="md:col-span-3 space-y-3">
            <p className="text-xs uppercase tracking-widest text-[#555555] font-mono">
              Network
            </p>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#888888] hover:text-[#f0f0f0] transition-colors inline-flex items-center gap-1.5"
                >
                  <span>LinkedIn</span>
                  <span className="text-xs text-[#555555]">↗</span>
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#888888] hover:text-[#f0f0f0] transition-colors inline-flex items-center gap-1.5"
                >
                  <span>X (Twitter)</span>
                  <span className="text-xs text-[#555555]">↗</span>
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#888888] hover:text-[#f0f0f0] transition-colors inline-flex items-center gap-1.5"
                >
                  <span>GitHub</span>
                  <span className="text-xs text-[#555555]">↗</span>
                </a>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-[#888888] hover:text-[#c8a97e] transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Direct Message</span>
                  <span className="text-xs text-[#555555]">→</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#151515] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#555555]">
          <p>© {currentYear} {siteConfig.name}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/80 animate-pulse" />
              <span>Available for high-conviction ideas</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
