import { ImageResponse } from 'next/og'

export const alt = 'Ajaypal Singh — Founder, Builder & Entrepreneur'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: '#0F1330',
          padding: '72px 80px',
          position: 'relative',
        }}
      >
        {/* Ambient Gradient Glow */}
        <div
          style={{
            position: 'absolute',
            right: '-60px',
            top: '-60px',
            width: '560px',
            height: '560px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(31, 42, 214, 0.5) 0%, rgba(15, 19, 48, 0) 70%)',
          }}
        />

        {/* Top Header Row */}
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
              gap: '12px',
              padding: '10px 22px',
              borderRadius: '9999px',
              backgroundColor: 'rgba(31, 42, 214, 0.4)',
              border: '1px solid rgba(174, 181, 255, 0.35)',
            }}
          >
            <div
              style={{
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                backgroundColor: '#AEB5FF',
              }}
            />
            <span
              style={{
                color: '#F7F7F5',
                fontSize: '20px',
                fontWeight: 600,
                letterSpacing: '-0.02em',
              }}
            >
              Founder • Builder • Entrepreneur
            </span>
          </div>

          <span
            style={{
              color: '#AEB5FF',
              fontSize: '24px',
              fontWeight: 600,
              letterSpacing: '-0.03em',
            }}
          >
            ajaypalsingh.in
          </span>
        </div>

        {/* Main Content Area */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            zIndex: 10,
          }}
        >
          <h1
            style={{
              fontSize: '84px',
              fontWeight: 800,
              color: '#F7F7F5',
              letterSpacing: '-0.05em',
              lineHeight: 1.05,
              margin: 0,
            }}
          >
            Ajaypal Singh
          </h1>
          <p
            style={{
              fontSize: '30px',
              color: '#D6DAFF',
              margin: 0,
              fontWeight: 400,
              letterSpacing: '-0.02em',
              lineHeight: 1.35,
            }}
          >
            Currently building Ojaven — a platform for modern digital agencies.
          </p>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderTop: '1px solid rgba(174, 181, 255, 0.2)',
            paddingTop: '28px',
            zIndex: 10,
          }}
        >
          <span
            style={{
              color: '#8A8FB0',
              fontSize: '20px',
              letterSpacing: '-0.01em',
            }}
          >
            Software • Design • Product • AI
          </span>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              color: '#F7F7F5',
              fontSize: '20px',
              fontWeight: 600,
            }}
          >
            <span>Explore builds & writing</span>
            <span>→</span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
