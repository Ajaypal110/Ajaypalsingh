import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-[75vh] flex items-center justify-center pt-24 pb-16">
      <div className="container-site text-center max-w-lg space-y-6">
        <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#e07a5f]">
          404 // Not Found
        </span>

        <h1 className="text-3xl sm:text-5xl font-bold text-[#f5f6f9] tracking-tight">
          This page does not exist.
        </h1>

        <p className="text-sm sm:text-base text-[#8e92a4] leading-relaxed">
          The link you followed may be broken or the page may have been moved.
        </p>

        <div className="pt-4">
          <Link
            href="/"
            className="btn-solid"
          >
            <span>Return to Homepage</span>
            <span>→</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
