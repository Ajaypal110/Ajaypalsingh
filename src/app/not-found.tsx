import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-[75vh] flex items-center justify-center pt-24 pb-16">
      <div className="container-site text-center max-w-lg space-y-6">
        <span className="text-xs font-mono uppercase tracking-widest text-[#c8a97e]">
          404 — Not Found
        </span>

        <h1 className="font-display text-4xl sm:text-5xl text-[#f0f0f0] font-normal tracking-tight">
          This page does not exist.
        </h1>

        <p className="text-sm sm:text-base text-[#888888] leading-relaxed">
          The link you followed may be broken or the page may have been moved. Plenty of other interesting things exist across the site.
        </p>

        <div className="pt-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#f0f0f0] text-[#060606] font-medium text-sm hover:bg-[#c8a97e] transition-colors"
          >
            <span>Return to Homepage</span>
            <span>→</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
