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
    <div className="w-full text-[#0F1330] font-['Bricolage_Grotesque',sans-serif]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── Hero ────────────────────────────────────────────── */}
      <section className="relative min-h-[560px] sm:min-h-[600px] px-6 sm:px-12 lg:px-16 pt-40 sm:pt-44 pb-12 overflow-hidden">
        {/* Orbit decoration */}
        <div
          aria-hidden="true"
          className="absolute top-32 right-6 sm:right-12 lg:right-16 w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] lg:w-[250px] lg:h-[250px]"
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
              width="40%" height="40%"
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

        <p className="m-0 text-[15px]" style={{ color: '#5A5F7A' }}>Contact</p>
        <h1
          className="mt-2 mb-0 font-medium leading-[.88] tracking-[-0.07em]"
          style={{ fontSize: 'clamp(72px, 14vw, 200px)' }}
        >
          Say hello.
        </h1>
        <p
          className="mt-6 max-w-[560px] leading-[1.22] tracking-[-0.025em]"
          style={{ fontSize: 'clamp(18px, 2.5vw, 28px)', color: '#0F1330' }}
        >
          Building something, stuck on an idea, or curious about Ojaven? Write to me. I&apos;d like to hear what you&apos;re working on.
        </p>
      </section>

      {/* ── Form + Aside ─────────────────────────────────────── */}
      <section className="px-6 sm:px-12 lg:px-16 pb-32 lg:pb-40">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
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
