'use client'

import { useState, useEffect } from 'react'
import { siteConfig } from '@/lib/data/site'

export function ContactAside() {
  const [copied, setCopied] = useState(false)
  const [localTime, setLocalTime] = useState('')

  const email = siteConfig.social.email

  const tick = () => {
    try {
      setLocalTime(
        new Intl.DateTimeFormat('en-IN', {
          hour: '2-digit',
          minute: '2-digit',
          hour12: false,
          timeZone: 'Asia/Kolkata',
        }).format(new Date())
      )
    } catch {
      setLocalTime('--:--')
    }
  }

  useEffect(() => {
    tick()
    const id = setInterval(tick, 15000)
    return () => clearInterval(id)
  }, [])

  const copyEmail = () => {
    try { navigator.clipboard?.writeText(email) } catch {}
    setCopied(true)
    setTimeout(() => setCopied(false), 1800)
  }

  const socials = [
    { name: 'LinkedIn',  handle: 'ajaypalsingh110',   href: siteConfig.social.linkedin },
    { name: 'X',         handle: '@ajaypal110125',     href: siteConfig.social.twitter },
    { name: 'Instagram', handle: '@_ajaypal_singh_',   href: siteConfig.social.instagram },
    { name: 'Facebook',  handle: 'ajaypalsingh',       href: siteConfig.social.facebook },
  ]

  return (
    <div className="flex flex-col gap-4">
      {/* Email card — dark navy */}
      <div className="rounded-[28px] p-8" style={{ background: '#0F1330', color: '#F7F7F5' }}>
        <p className="m-0 text-[14px]" style={{ color: '#8A8FB0' }}>Prefer email?</p>
        <a
          href={`mailto:${email}`}
          className="block mt-2.5 text-[#F7F7F5] text-[26px] sm:text-[28px] font-medium tracking-[-0.03em] break-all hover:opacity-80 transition-opacity"
        >
          {email}
        </a>
        <div className="mt-5 flex items-center gap-3">
          <button
            onClick={copyEmail}
            className="h-[44px] px-[18px] rounded-full border border-[#2A3060] bg-transparent text-[#F7F7F5] text-[14px] flex items-center gap-2 cursor-pointer transition-colors hover:border-[#AEB5FF]"
          >
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <rect x="5" y="5" width="8" height="9" rx="2" />
              <path d="M3 11V4a2 2 0 0 1 2-2h5" />
            </svg>
            Copy address
          </button>
          <span
            role="status"
            className="text-[13px] rounded-full py-1.5 px-3 transition-all duration-300"
            style={{
              background: '#AEB5FF',
              color: '#0F1330',
              opacity: copied ? 1 : 0,
              transform: copied ? 'none' : 'translateX(-6px)',
              pointerEvents: 'none',
            }}
          >
            Copied
          </span>
        </div>
      </div>

      {/* Social links card — white with fill hover */}
      <div
        className="rounded-[28px] overflow-hidden"
        style={{ border: '1px solid #DADCE8', background: '#FFFFFF' }}
      >
        <p className="m-0 px-7 pt-6 pb-3 text-[14px]" style={{ color: '#5A5F7A' }}>
          Find me elsewhere
        </p>
        {socials.map((s) => (
          <a
            key={s.name}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className="soc-link group flex justify-between items-center px-7 py-5 border-t text-[#0F1330] relative overflow-hidden transition-colors"
            style={{ borderColor: '#ECEEF8' }}
          >
            {/* fill bg on hover */}
            <span
              aria-hidden="true"
              className="absolute inset-0 bg-[#1F2AD6] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-[cubic-bezier(.76,0,.24,1)]"
            />
            <span
              className="relative text-[22px] font-medium tracking-[-0.02em] transition-colors duration-300 group-hover:text-[#F7F7F5]"
            >
              {s.name}
            </span>
            <span className="relative flex items-center gap-3 text-[14px] transition-colors duration-300 group-hover:text-[#F7F7F5]" style={{ color: '#5A5F7A' }}>
              {s.handle}
              <svg
                className="transition-transform duration-500 ease-[cubic-bezier(.76,0,.24,1)] group-hover:rotate-45"
                width="14" height="14" viewBox="0 0 14 14"
                fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"
                aria-hidden="true"
              >
                <path d="M3 11L11 3M5 3h6v6" />
              </svg>
            </span>
          </a>
        ))}
      </div>

      {/* Info card — light blue-grey */}
      <div className="rounded-[28px] p-7" style={{ background: '#ECEEF8' }}>
        <dl className="m-0 space-y-0">
          <div className="flex justify-between items-center pb-3.5" style={{ borderBottom: '1px solid #DADCE8' }}>
            <dt className="text-[14px]" style={{ color: '#5A5F7A' }}>My local time</dt>
            <dd className="m-0 flex items-center gap-2 text-[17px] font-medium" style={{ fontVariantNumeric: 'tabular-nums' }}>
              <span
                className="w-2 h-2 rounded-full"
                style={{
                  background: '#1F2AD6',
                  animation: 'ct-live 2s ease-out infinite',
                }}
              />
              {localTime} IST
            </dd>
          </div>
          <div className="flex justify-between py-3.5" style={{ borderBottom: '1px solid #DADCE8' }}>
            <dt className="text-[14px]" style={{ color: '#5A5F7A' }}>Based in</dt>
            <dd className="m-0 text-[17px] font-medium">India</dd>
          </div>
          <div className="flex justify-between py-3.5" style={{ borderBottom: '1px solid #DADCE8' }}>
            <dt className="text-[14px]" style={{ color: '#5A5F7A' }}>Usually replies</dt>
            <dd className="m-0 text-[17px] font-medium">within 1–2 days</dd>
          </div>
          <div className="pt-3.5">
            <dt className="text-[14px]" style={{ color: '#5A5F7A' }}>Happy to talk about</dt>
            <dd className="m-0 mt-2.5 flex flex-wrap gap-2">
              {['Ideas', 'Products', 'AI and SaaS', 'Ojaven', 'Collaborations'].map((tag) => (
                <span
                  key={tag}
                  className="text-[13px] px-3 py-1.5 rounded-full"
                  style={{ background: '#FFFFFF', color: '#1F2AD6' }}
                >
                  {tag}
                </span>
              ))}
            </dd>
          </div>
        </dl>
        <style>{`
          @keyframes ct-live {
            0%   { box-shadow: 0 0 0 0 rgba(31,42,214,.6); }
            100% { box-shadow: 0 0 0 10px rgba(31,42,214,0); }
          }
        `}</style>
      </div>
    </div>
  )
}
