import type { Metadata } from 'next'
import { Inter, Instrument_Serif } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import { Navigation } from '@/components/layout/Navigation'
import { Footer } from '@/components/layout/Footer'
import { ScrollProgress } from '@/components/layout/ScrollProgress'
import { generateRootJsonLd, generatePageMetadata } from '@/lib/seo'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const instrumentSerif = Instrument_Serif({
  weight: '400',
  subsets: ['latin'],
  style: ['normal', 'italic'],
  variable: '--font-instrument-serif',
  display: 'swap',
})

export const metadata: Metadata = {
  ...generatePageMetadata(),
  verification: {
    google: 'r7A5EdJr_F1NpBLQZ5Jsu0J8Vo7txV3Hokdu8FER8Yk',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = generateRootJsonLd()

  return (
    <html
      lang="en"
      className={`${inter.variable} ${instrumentSerif.variable} dark antialiased`}
    >
      <head>
        {/* JSON-LD structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* Theme & PWA */}
        <meta name="theme-color" content="#060606" />
        <meta name="color-scheme" content="dark" />
        <link rel="manifest" href="/manifest.json" />

        {/* Humans & AI discoverability */}
        <link rel="author" href="/humans.txt" />

        {/* Canonical self-reference for homepage */}
        <link rel="canonical" href="https://ajaypalsingh.in" />

        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Google Analytics 4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-QMX4VHV52X"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-QMX4VHV52X');
          `}
        </Script>
      </head>
      <body className="min-h-screen flex flex-col bg-[#060606] text-[#f0f0f0] font-body selection:bg-[#c8a97e]/20 selection:text-[#f0f0f0]">
        <ScrollProgress />
        <Navigation />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
