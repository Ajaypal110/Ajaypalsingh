import { ContactForm } from '@/components/ui/ContactForm'
import { ContactAside } from '@/components/ui/ContactAside'
import { generatePageMetadata, generateContactPageJsonLd } from '@/lib/seo'
import type { Metadata } from 'next'

export const metadata: Metadata = generatePageMetadata({
  title: 'Contact — Ajaypal Singh',
  description:
    'Get in touch with Ajaypal Singh regarding founder discussions, Ojaven, software architecture, or collaborations.',
  path: '/contact',
  keywords: [
    'contact Ajaypal Singh',
    'Ajaypalsingh email',
    'reach Ajaypal Singh',
    'Ojaven contact',
  ],
})

export default function ContactPage() {
  const jsonLd = generateContactPageJsonLd()

  return (
    <div className="w-full text-[#0F1330] font-['Bricolage_Grotesque',sans-serif] bg-[#F7F7F5] min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── Hero ────────────────────────────────────────────── */}
      <section className="relative px-6 sm:px-12 lg:px-16 pt-32 sm:pt-40 pb-12 overflow-hidden max-w-[1440px] mx-auto">
        {/* Orbit decoration — hidden on mobile to avoid overlap */}
        <div
          aria-hidden="true"
          className="hidden sm:block absolute top-28 right-6 sm:right-12 lg:right-16 w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] lg:w-[260px] lg:h-[260px] pointer-events-none"
        >
          <svg
            className="w-full h-full"
            viewBox="0 0 250 250"
            fill="none"
            style={{ animation: 'ct-spin 30s linear infinite' }}
          >
            <circle cx="125" cy="125" r="124" stroke="#DADCE8" strokeDasharray="3 8" />
            <circle cx="125" cy="125" r="84" stroke="#DADCE8" />
            <circle cx="125" cy="1" r="7" fill="#1F2AD6" />
          </svg>
          <div
            className="absolute top-[27%] left-[27%] w-[46%] h-[46%] rounded-full flex items-center justify-center"
            style={{ background: '#1F2AD6' }}
          >
            <svg
              width="40%"
              height="40%"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#F7F7F5"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 6h16v12H4z" />
              <path d="M4 7l8 6 8-6" />
            </svg>
          </div>
        </div>

        <p className="m-0 text-[13px] sm:text-[15px] text-[#5A5F7A] font-mono">Contact</p>
        <h1
          className="mt-2 mb-0 font-medium leading-[.88] tracking-[-0.065em] text-[#0F1330]"
          style={{ fontSize: 'clamp(56px, 11vw, 200px)' }}
        >
          Say hello.
        </h1>
        <p
          className="mt-5 sm:mt-6 max-w-[560px] leading-[1.3] tracking-[-0.02em] text-[#0F1330]"
          style={{ fontSize: 'clamp(17px, 2.2vw, 26px)' }}
        >
          Building something, stuck on an idea, or curious about Ojaven? Write to me.
          I&apos;d like to hear what you&apos;re working on.
        </p>
      </section>

      {/* ── Form + Aside ─────────────────────────────────────── */}
      <section className="px-6 sm:px-12 lg:px-16 pb-24 sm:pb-32 lg:pb-40 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
          <div className="lg:col-start-9 lg:col-span-4">
            <ContactAside />
          </div>
        </div>
      </section>

      <style>{`
        @keyframes ct-spin { to { transform: rotate(360deg); } }
      `}</style>
    </div>
  )
}
