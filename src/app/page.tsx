// Server component — homepage entry point.
// Emits WebSite JSON-LD server-side (in raw HTML, not via client JS),
// then renders the interactive HomeView client component.
import { HomeJsonLd } from './HomeJsonLd'
import { HomeView } from './HomeView'

export default function HomePage() {
  return (
    <>
      <HomeJsonLd />
      <HomeView />
    </>
  )
}
