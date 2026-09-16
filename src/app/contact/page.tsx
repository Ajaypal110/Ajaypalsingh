import { Reveal } from '@/components/motion/Reveal'
import { ContactForm } from '@/components/ui/ContactForm'
import { siteConfig } from '@/lib/data/site'
import { generatePageMetadata } from '@/lib/seo'
import type { Metadata } from 'next'

export const metadata: Metadata = generatePageMetadata({
  title: 'Contact — Connect & Inquire',
  description:
    'Get in touch with Ajaypal Singh regarding software, founder collaborations, Ojaven, or high-conviction ideas.',
  path: '/contact',
})

export default function ContactPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="container-site">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Header */}
          <div className="space-y-4">
            <Reveal>
              <span className="text-xs uppercase tracking-widest text-[#c8a97e] font-mono block">
                Direct Line
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="font-display text-4xl sm:text-6xl text-[#f0f0f0] font-normal tracking-tight">
                Have an idea worth building?
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-lg text-[#888888] font-normal max-w-2xl leading-relaxed">
                I am always interested in thoughtful conversations with founders, engineers, and creators who care deeply about technology and business.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pt-4">
            {/* Form Column */}
            <div className="md:col-span-7">
              <Reveal delay={0.3}>
                <ContactForm />
              </Reveal>
            </div>

            {/* Direct Connect Info Column */}
            <div className="md:col-span-5 space-y-8">
              <Reveal delay={0.4}>
                <div className="p-6 rounded-xl border border-[#1f1f1f] bg-[#0c0c0c] space-y-4">
                  <h3 className="font-display text-xl text-[#f0f0f0]">
                    Direct Inquiries
                  </h3>
                  <p className="text-sm text-[#888888] leading-relaxed">
                    Prefer direct email over forms? You can reach me directly anytime:
                  </p>
                  <div>
                    <a
                      href={`mailto:${siteConfig.social.email}`}
                      className="text-sm font-mono text-[#c8a97e] hover:underline break-all"
                    >
                      {siteConfig.social.email}
                    </a>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.5}>
                <div className="p-6 rounded-xl border border-[#1f1f1f] bg-[#0c0c0c] space-y-4">
                  <h3 className="font-display text-xl text-[#f0f0f0]">
                    Profiles & Presence
                  </h3>
                  <ul className="space-y-3 text-sm">
                    <li>
                      <a
                        href={siteConfig.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#888888] hover:text-[#f0f0f0] flex items-center justify-between group"
                      >
                        <span>LinkedIn</span>
                        <span className="text-xs text-[#555555] group-hover:text-[#c8a97e]">↗</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href={siteConfig.social.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#888888] hover:text-[#f0f0f0] flex items-center justify-between group"
                      >
                        <span>X / Twitter</span>
                        <span className="text-xs text-[#555555] group-hover:text-[#c8a97e]">↗</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href={siteConfig.social.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#888888] hover:text-[#f0f0f0] flex items-center justify-between group"
                      >
                        <span>GitHub</span>
                        <span className="text-xs text-[#555555] group-hover:text-[#c8a97e]">↗</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </Reveal>

              <Reveal delay={0.6}>
                <div className="text-xs font-mono text-[#555555] p-4 rounded-lg bg-[#0c0c0c]/40 border border-[#151515]">
                  Location: India • Remote friendly • Open to high-conviction discussions
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
