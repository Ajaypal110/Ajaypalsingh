import type { Metadata } from 'next'
import Script from 'next/script'
import { Bricolage_Grotesque } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { generatePageMetadata } from '@/lib/seo'

const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-bricolage',
})

export const metadata: Metadata = {
  ...generatePageMetadata({
    title: 'Ajaypal Singh | Founder and Builder',
    description:
      'Ajaypal Singh is a founder and builder creating products and companies. Currently building Ojaven, a platform for modern agencies.',
  }),
  title: {
    default: 'Ajaypal Singh | Founder and Builder',
    template: '%s | Ajaypal Singh',
  },
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
    <html lang="en" className={`scroll-smooth ${bricolageGrotesque.variable}`}>
      <head>
        {/* Favicon — explicit tags for Google Search indexing */}
        <link rel="icon" href="/favicon.ico" sizes="48x48" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="icon" href="/icon-96.png" sizes="96x96" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* Theme & PWA */}
        <meta name="theme-color" content="#1F2AD6" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="author" href="/humans.txt" />

        {/* Google Analytics 4 — lazy loaded to avoid blocking critical LCP/TBT */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-QMX4VHV52X"
          strategy="lazyOnload"
        />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-QMX4VHV52X');
          `}
        </Script>
      </head>
      <body className={`min-h-screen bg-[#0F1330] text-[#0F1330] ${bricolageGrotesque.className} selection:bg-[#1F2AD6] selection:text-[#F7F7F5] overflow-x-hidden`}>
        <Header />
        <main className="relative z-[2] bg-[#F7F7F5] mb-0 lg:mb-[100vh] rounded-b-[32px] sm:rounded-b-[48px] overflow-clip shadow-[0_40px_100px_rgba(15,19,48,0.5)]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
