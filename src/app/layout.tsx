import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { generatePageMetadata } from '@/lib/seo'

export const metadata: Metadata = {
  ...generatePageMetadata({
    title: 'Ajaypal Singh | Founder and Builder',
    description:
      'Ajaypal Singh is a founder and builder creating products and companies. Currently building Ojaven, a platform for modern agencies.',
  }),
  verification: {
    google: 'r7A5EdJr_F1NpBLQZ5Jsu0J8Vo7txV3Hokdu8FER8Yk',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Google Fonts: Bricolage Grotesque Variable */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wdth,wght@12..96,75..100,200..800&display=swap"
          rel="stylesheet"
        />

        {/* Theme & PWA */}
        <meta name="theme-color" content="#1F2AD6" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="author" href="/humans.txt" />
        <link rel="canonical" href="https://ajaypalsingh.in/" />

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
      <body className="min-h-screen bg-[#0F1330] text-[#0F1330] font-['Bricolage_Grotesque',sans-serif] selection:bg-[#1F2AD6] selection:text-[#F7F7F5] overflow-x-hidden">
        <Header />
        <main className="relative z-[2] bg-[#F7F7F5] mb-0 lg:mb-[100vh] rounded-b-[32px] sm:rounded-b-[48px] overflow-clip shadow-[0_40px_100px_rgba(15,19,48,0.5)]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
