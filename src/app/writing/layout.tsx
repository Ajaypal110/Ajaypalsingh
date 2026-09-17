import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Writing | Ajaypal Singh',
  description:
    'Articles, notes, books and ideas by Ajaypal Singh on building Ojaven, AI, SaaS, products and entrepreneurship.',
}

export default function WritingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
