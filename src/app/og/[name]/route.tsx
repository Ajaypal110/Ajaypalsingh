import { ImageResponse } from 'next/og'
import { NextRequest } from 'next/server'

export const runtime = 'edge'

const OG_PAGES: Record<string, { title: string; subtitle?: string }> = {
  default: {
    title: 'Ajaypal Singh',
    subtitle: 'Founder and builder',
  },
  home: {
    title: 'Ajaypal Singh',
    subtitle: 'Founder and builder',
  },
  about: {
    title: "Hi, I'm Ajaypal.",
    subtitle: 'Founder and builder',
  },
  ojaven: {
    title: 'Ojaven',
    subtitle: 'Founder notes · Launch 2027',
  },
  writing: {
    title: 'Notes',
    subtitle: 'By Ajaypal Singh',
  },
  contact: {
    title: 'Say hello.',
    subtitle: 'Get in touch with Ajaypal Singh',
  },
}

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ name: string }> }
) {
  const { name } = await params
  const cleanName = name.replace(/\.(png|jpg|jpeg|webp)$/i, '').toLowerCase()
  const page = OG_PAGES[cleanName] || OG_PAGES.default

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: '#1F2AD6',
          padding: '80px 88px',
          fontFamily: 'sans-serif',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Thin Lavender Circle Motifs (matching Section 6) */}
        <div
          style={{
            position: 'absolute',
            right: '-160px',
            bottom: '-160px',
            width: '640px',
            height: '640px',
            borderRadius: '50%',
            border: '1.5px solid rgba(174, 181, 255, 0.28)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              width: '420px',
              height: '420px',
              borderRadius: '50%',
              border: '1.5px solid rgba(174, 181, 255, 0.22)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div
              style={{
                width: '200px',
                height: '200px',
                borderRadius: '50%',
                border: '1.5px solid rgba(174, 181, 255, 0.18)',
              }}
            />
          </div>
        </div>

        {/* Top Left: Logo Mark */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            zIndex: 10,
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
            }}
          >
            <svg
              width="48"
              height="48"
              viewBox="0 0 42 42"
              fill="none"
            >
              <circle cx="21" cy="21" r="21" fill="#0F1330" />
              <path
                d="M12 28 L19 13 L26 28"
                fill="none"
                stroke="#F7F7F5"
                strokeWidth="2.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M31 16.5c-1-1.6-2.6-2.3-4.3-2.3"
                fill="none"
                stroke="#F7F7F5"
                strokeWidth="2.6"
                strokeLinecap="round"
              />
              <circle cx="31" cy="26.5" r="2.4" fill="#AEB5FF" />
            </svg>
            <span
              style={{
                color: '#F7F7F5',
                fontSize: '24px',
                fontWeight: 600,
                letterSpacing: '-0.02em',
              }}
            >
              Ajaypal Singh
            </span>
          </div>

          <span
            style={{
              color: '#AEB5FF',
              fontSize: '20px',
              fontWeight: 500,
              letterSpacing: '-0.01em',
            }}
          >
            ajaypalsingh.in
          </span>
        </div>

        {/* Center: Main Page Title */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            zIndex: 10,
          }}
        >
          {page.subtitle && (
            <span
              style={{
                color: '#AEB5FF',
                fontSize: '26px',
                fontWeight: 500,
                letterSpacing: '-0.02em',
              }}
            >
              {page.subtitle}
            </span>
          )}
          <h1
            style={{
              fontSize: page.title.length > 20 ? '76px' : '92px',
              fontWeight: 600,
              color: '#F7F7F5',
              letterSpacing: '-0.045em',
              lineHeight: 1.05,
              margin: 0,
            }}
          >
            {page.title}
          </h1>
        </div>

        {/* Bottom Bar: Small ajaypalsingh.in & subtle brand text */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderTop: '1px solid rgba(174, 181, 255, 0.25)',
            paddingTop: '24px',
            zIndex: 10,
          }}
        >
          <span
            style={{
              color: '#AEB5FF',
              fontSize: '18px',
              fontWeight: 500,
              letterSpacing: '0.02em',
            }}
          >
            ajaypalsingh.in
          </span>
          <span
            style={{
              color: '#D6DAFF',
              fontSize: '18px',
              fontWeight: 400,
            }}
          >
            Personal digital home
          </span>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}
