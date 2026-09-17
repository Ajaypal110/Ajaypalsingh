import Link from 'next/link'
import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/seo'
import { articles } from '@/lib/data/articles'
import { siteConfig } from '@/lib/data/site'

export const metadata: Metadata = generatePageMetadata({
  title: 'Sitemap — Ajaypal Singh',
  description:
    'Complete directory and visual index of all public pages, venture notes, articles, and technical feeds across ajaypalsingh.in.',
  path: '/sitemap',
  keywords: [
    'Ajaypal Singh sitemap',
    'site directory',
    'ajaypalsingh.in pages',
    'Ajaypalsingh articles index',
  ],
})

export default function SitemapPage() {
  const sections = [
    {
      title: 'Main Pages',
      desc: 'The primary navigation and overview of the site.',
      links: [
        { label: 'Home', href: '/', desc: 'Founder overview, core approach, and current ventures.' },
        { label: 'About', href: '/about', desc: 'Background, founder story, and what I keep coming back to.' },
        { label: 'Ojaven', href: '/ojaven', desc: 'Notes on building Ojaven, architectural vision, and road to launch.' },
        { label: 'Writing', href: '/writing', desc: 'Complete directory of essays, notes, and ideas.' },
        { label: 'Contact', href: '/contact', desc: 'Direct channels to start a conversation or collaborate.' },
      ],
    },
    {
      title: 'Writing & Articles',
      desc: 'In-depth long-form writing on software engineering, product architecture, and venture building.',
      links: articles.map((a) => ({
        label: a.title,
        href: `/writing/${a.slug}`,
        desc: `${a.readingTime} · Published ${a.date}`,
      })),
    },
    {
      title: 'Ventures & Projects',
      desc: 'Companies and dedicated software systems in active development.',
      links: [
        {
          label: 'Ojaven (Platform for Modern Agencies)',
          href: '/ojaven',
          desc: 'Target Launch: 10 July 2027 · Started: 10 July 2026',
        },
      ],
    },
    {
      title: 'Machine Feeds & SEO Directives',
      desc: 'Standardized protocols and documentation for search engines, web crawlers, and AI systems.',
      links: [
        { label: 'sitemap.xml', href: '/sitemap.xml', desc: 'XML Sitemap index for search engine crawlers.' },
        { label: 'robots.txt', href: '/robots.txt', desc: 'Search engine crawling policies and index permissions.' },
        { label: 'llms.txt', href: '/llms.txt', desc: 'Structured Markdown summary for LLM agents and AI crawlers.' },
        { label: 'llms-full.txt', href: '/llms-full.txt', desc: 'Full-context factual corpus for AI retrieval.' },
      ],
    },
    {
      title: 'Social & Verified Profiles',
      desc: 'Official channels and external founder presences.',
      links: [
        { label: 'LinkedIn', href: siteConfig.social.linkedin, desc: 'Professional updates and venture connections.', external: true },
        { label: 'X (Twitter)', href: siteConfig.social.twitter, desc: 'Realtime commentary, building notes, and thoughts.', external: true },
        { label: 'Instagram', href: siteConfig.social.instagram, desc: 'Visual captures and founder behind-the-scenes.', external: true },
        { label: 'Facebook', href: siteConfig.social.facebook, desc: 'Official profile and public updates.', external: true },
      ],
    },
  ]

  return (
    <div className="w-full bg-[#F7F7F5] text-[#0F1330] font-['Bricolage_Grotesque',sans-serif]">
      <main className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-16 pt-28 sm:pt-36 lg:pt-44 pb-28 sm:pb-36 box-border">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="text-sm text-[#5A5F7A] mb-4">
          <Link href="/" className="hover:text-[#1F2AD6] transition-colors">
            Home
          </Link>{' '}
          / <span className="text-[#0F1330] font-medium">Sitemap</span>
        </nav>

        {/* Page Header */}
        <div className="border-b border-[#0F1330] pb-10 sm:pb-14">
          <p className="m-0 text-sm font-mono uppercase tracking-wider text-[#1F2AD6] mb-2">
            Site Directory
          </p>
          <h1 className="m-0 text-5xl sm:text-7xl lg:text-[100px] font-medium leading-[0.94] tracking-[-0.055em] text-[#0F1330]">
            Sitemap
          </h1>
          <p className="mt-5 text-xl sm:text-2xl text-[#5A5F7A] max-w-[48ch] leading-[1.4]">
            An organized index of every public page, venture blueprint, long-form essay, and machine feed on ajaypalsingh.in.
          </p>
        </div>

        {/* Sitemap Sections Grid */}
        <div className="mt-14 sm:mt-20 space-y-16 sm:space-y-24">
          {sections.map((sec) => (
            <section key={sec.title} aria-labelledby={sec.title.toLowerCase().replace(/\s+/g, '-')}>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-baseline gap-2 pb-4 border-b border-[#DADCE8]">
                <h2
                  id={sec.title.toLowerCase().replace(/\s+/g, '-')}
                  className="m-0 text-2xl sm:text-3xl lg:text-[34px] font-medium tracking-[-0.035em] text-[#0F1330]"
                >
                  {sec.title}
                </h2>
                <p className="m-0 text-sm sm:text-base text-[#5A5F7A]">{sec.desc}</p>
              </div>

              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {sec.links.map((link) => {
                  const isExternal = 'external' in link && link.external
                  const Tag = isExternal ? 'a' : Link
                  const props = isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {}

                  return (
                    <Tag
                      key={link.label}
                      href={link.href}
                      {...props}
                      className="group p-5 rounded-2xl bg-white border border-[#DADCE8] hover:border-[#1F2AD6] hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                    >
                      <div className="flex justify-between items-start gap-3">
                        <span className="text-lg font-medium text-[#0F1330] group-hover:text-[#1F2AD6] transition-colors">
                          {link.label}
                        </span>
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                          className="shrink-0 text-[#8A8FB0] group-hover:text-[#1F2AD6] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                        >
                          <path d="M4 12L12 4M6 4h6v6" />
                        </svg>
                      </div>
                      <p className="mt-3 text-sm text-[#5A5F7A] leading-relaxed">
                        {link.desc}
                      </p>
                    </Tag>
                  )
                })}
              </div>
            </section>
          ))}
        </div>
      </main>
    </div>
  )
}
