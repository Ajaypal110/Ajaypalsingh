import Link from 'next/link'
import { ContactForm } from '@/components/ui/ContactForm'
import { siteConfig } from '@/lib/data/site'
import { generatePageMetadata, generateContactPageJsonLd } from '@/lib/seo'
import type { Metadata } from 'next'

export const metadata: Metadata = generatePageMetadata({
  title: 'Contact — Ajaypal Singh',
  description:
    'Get in touch with Ajaypal Singh (Ajaypal Singh Solanki) regarding founder discussions, Ojaven, software architecture, or collaborations.',
  path: '/contact',
  keywords: [
    'contact Ajaypal Singh',
    'Ajaypalsingh email',
    'reach Ajaypal Singh Solanki',
    'Ojaven contact',
  ],
})

export default function ContactPage() {
  const jsonLd = generateContactPageJsonLd()

  return (
    <div className="w-full text-[#0F1330] px-6 md:px-12 lg:px-16 pt-28 md:pt-36 pb-28 lg:pb-36">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-5xl mx-auto space-y-16">
        {/* Header */}
        <div className="space-y-4">
          <p className="text-[15px] font-medium text-[#5A5F7A]">
            <Link href="/" className="hover:text-[#1F2AD6] transition-colors">
              Home
            </Link>{' '}
            / Contact
          </p>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-medium tracking-[-0.05em] leading-[1.0] text-[#0F1330]">
            Have an idea worth building?
          </h1>
          <p className="text-lg sm:text-xl lg:text-[22px] text-[#5A5F7A] font-normal max-w-2xl leading-relaxed">
            I am always interested in thoughtful conversations with founders, engineers, and creators who care about building good software.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pt-4 items-start">
          {/* Form Column */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

          {/* Direct Connect Info Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-7 sm:p-8 rounded-[24px] border border-[#DADCE8] bg-white space-y-4 shadow-sm">
              <h3 className="text-2xl font-medium text-[#0F1330] tracking-[-0.03em]">
                Direct Inquiries
              </h3>
              <p className="text-[15px] text-[#5A5F7A] leading-relaxed">
                Prefer direct email over forms? You can reach me directly anytime:
              </p>
              <div>
                <a
                  href={`mailto:${siteConfig.social.email}`}
                  className="text-lg font-medium text-[#1F2AD6] hover:underline break-all"
                >
                  {siteConfig.social.email}
                </a>
              </div>
            </div>

            <div className="p-7 sm:p-8 rounded-[24px] border border-[#DADCE8] bg-white space-y-4 shadow-sm">
              <h3 className="text-2xl font-medium text-[#0F1330] tracking-[-0.03em]">
                Profiles & Presence
              </h3>
              <ul className="space-y-3.5 text-[15px] font-medium">
                <li>
                  <a
                    href={siteConfig.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#5A5F7A] hover:text-[#1F2AD6] flex items-center justify-between group transition-colors"
                  >
                    <span>LinkedIn</span>
                    <span className="text-xs transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
                  </a>
                </li>
                <li>
                  <a
                    href={siteConfig.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#5A5F7A] hover:text-[#1F2AD6] flex items-center justify-between group transition-colors"
                  >
                    <span>Twitter / X</span>
                    <span className="text-xs transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
                  </a>
                </li>
                <li>
                  <a
                    href={siteConfig.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#5A5F7A] hover:text-[#1F2AD6] flex items-center justify-between group transition-colors"
                  >
                    <span>Instagram</span>
                    <span className="text-xs transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
                  </a>
                </li>
                <li>
                  <a
                    href={siteConfig.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#5A5F7A] hover:text-[#1F2AD6] flex items-center justify-between group transition-colors"
                  >
                    <span>Facebook</span>
                    <span className="text-xs transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
