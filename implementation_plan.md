# Premium Personal Website — ajaypalsingh.in

Build a production-quality, motion-rich personal website for Ajaypal Singh, positioning him as a **Founder • Builder • Entrepreneur** and founder of **Ojaven**.

## User Review Required

> [!IMPORTANT]
> **Motion MCP:** No dedicated Motion/animation MCP server is available in this environment. I'll use the `motion` npm package (v12+, formerly framer-motion) directly via `motion/react` imports. This is the production-standard approach.

> [!IMPORTANT]
> **Social profile URLs needed.** The plan assumes the following — please confirm or correct:
> - Email: contact@ajaypalsingh.in (or preferred)
> - LinkedIn: linkedin.com/in/ajaypalsingh
> - GitHub: github.com/ajaypalsingh (or actual handle)
> - X/Twitter: x.com/ajaypalsingh (or actual handle)

> [!IMPORTANT]
> **Project details.** I'll create placeholder descriptions for Wanderlust, Khammaghani, Smart Property Listings, and other projects. You can refine the copy later — the data layer is separated for easy editing.

## Open Questions

1. **Domain & hosting:** Any specific deployment target (Vercel, Netlify, self-hosted)?
2. **Contact form backend:** Should I wire the form to an API route (Next.js API route with email service) or just a mailto link for now?
3. **Blog/writing content:** Should articles be MDX files in the repo, or do you plan to use a CMS later? I'll default to local MDX for now.
4. **Color accent preference:** I'll use a warm amber/gold accent (`#C8A97E`) against the dark theme for a premium founder feel. Any preference?

---

## Tech Stack

| Layer | Choice |
|-------|--------|
| Framework | Next.js 15 (App Router, TypeScript) |
| Styling | Tailwind CSS v4 |
| Animation | `motion` (motion/react) — scroll-triggered, staggered reveals, parallax, hover effects |
| Font | Inter (body) + a display serif or Geist/Manrope for headlines |
| SEO | Next.js Metadata API, JSON-LD structured data |
| Deployment | Static export compatible (works on Vercel, Netlify, etc.) |

---

## Proposed Changes

### Phase 1 — Project Scaffolding & Design System

#### [NEW] Next.js project initialization
- `npx -y create-next-app@latest ./ --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"`
- Install additional deps: `motion`, `@next/font` (or next/font), `clsx`

#### [NEW] `src/styles/globals.css`
- Dark theme design tokens (CSS custom properties)
- Amber/gold accent: `--accent: #C8A97E`
- Near-black background: `--bg-primary: #0A0A0A`, `--bg-secondary: #111111`
- Light typography: `--text-primary: #F5F5F5`, `--text-secondary: #999999`
- Typography scale, spacing scale, border styles

#### [NEW] `tailwind.config.ts`
- Extend theme with custom colors, fonts, animation keyframes

---

### Phase 2 — Core Layout & Components

#### [NEW] `src/components/layout/Navigation.tsx`
- Sticky, transparent → frosted glass on scroll
- Logo: "AS" monogram or "Ajaypal Singh"
- Links: About, Ojaven, Builds, Writing, Now, Contact
- Mobile hamburger with smooth slide-in menu
- Active section indicator via Intersection Observer
- Motion-animated entrance

#### [NEW] `src/components/layout/Footer.tsx`
- Premium minimal footer
- Social links (LinkedIn, GitHub, X, Email)
- "© 2026 Ajaypal Singh" 
- Subtle reveal animation on scroll

#### [NEW] `src/app/layout.tsx`
- Root layout with fonts (Inter + display font)
- Metadata defaults
- Navigation + Footer wrapper
- Scroll progress indicator
- `prefers-reduced-motion` context provider

---

### Phase 3 — Homepage

#### [NEW] `src/components/sections/Hero.tsx`
- Large editorial typography: "AJAYPAL / SINGH" with staggered character reveal
- Tagline: "Building ideas that deserve to exist."
- Personal statement mentioning Ojaven
- CTAs: "Explore my work" / "About me"
- Abstract interactive visual system (canvas-based particle/node network reacting to mouse position)
- Subtle parallax depth layers

#### [NEW] `src/components/ui/InteractiveBackground.tsx`
- Lightweight canvas/SVG-based abstract visual
- Connected nodes/particles representing building/systems/ideas
- Responds to mouse movement
- GPU-accelerated, performant

#### [NEW] `src/components/ui/MagneticButton.tsx`
- Buttons with subtle magnetic pull toward cursor on hover
- Smooth scale + color transitions

#### [NEW] `src/app/page.tsx`
- Homepage composition: Hero + mini sections previewing About, Ojaven, Builds, Writing

---

### Phase 4 — About Page

#### [NEW] `src/app/about/page.tsx`
- Personal story in editorial layout
- Journey timeline with scroll-based animation
- Milestones: Learning → Building → Experimenting → Entrepreneurship → Ojaven → Future
- Skills/interests section (not as a skills grid — as a narrative)
- Photography or abstract visual accent

#### [NEW] `src/components/sections/Timeline.tsx`
- Vertical scroll-activated timeline
- Each milestone animates in with staggered reveal
- Line draws on scroll using `useScroll` + `useTransform`

---

### Phase 5 — Ojaven Page

#### [NEW] `src/app/ojaven/page.tsx`
- Hero: "Building the future of agency operations"
- Problem → Vision → Product concept
- "Currently in development" status badge
- Launch countdown or date: **10 July 2027**
- UI mockup visualizations (gradient cards representing features)
- CTA: "Follow the build" → social links
- Clearly branded as Ajaypal Singh's venture

#### [NEW] `src/components/sections/OjavenShowcase.tsx`
- Animated feature cards
- Mock dashboard UI visualization
- Interactive hover states with depth

---

### Phase 6 — Projects/Builds Page

#### [NEW] `src/app/builds/page.tsx`
- "Selected Builds" — interactive project grid
- Featured project (Ojaven) larger card
- Other projects: Wanderlust, Khammaghani, Smart Property Listings, experiments

#### [NEW] `src/components/sections/ProjectCard.tsx`
- Premium card with image reveal on hover
- Status badge (Live / In Development / Experiment)
- Tech tags
- Smooth border glow + elevation on hover

#### [NEW] `src/lib/data/projects.ts`
- Separated data layer for easy future editing

---

### Phase 7 — Writing/Ideas Page

#### [NEW] `src/app/writing/page.tsx`
- Editorial blog listing
- Category filters: Building, Technology, Entrepreneurship, SaaS, AI, SEO
- Each post card: title, description, date, category, reading time

#### [NEW] `src/app/writing/[slug]/page.tsx`
- Individual article page with clean reading typography
- MDX support for rich content

#### [NEW] `src/lib/data/articles.ts`
- Article metadata (initially with 3-4 sample articles)

#### [NEW] `src/content/` directory
- MDX article files

---

### Phase 8 — Now Page

#### [NEW] `src/app/now/page.tsx`
- "What I'm focused on right now"
- Current focus items as a clean list
- "Last updated: September 2026"
- Easy to edit (data in a separate file)

#### [NEW] `src/lib/data/now.ts`
- Separated current focus data

---

### Phase 9 — Journey Page

#### [NEW] `src/app/journey/page.tsx`
- Story-driven experience page (NOT a resume)
- Education → Technical growth → Projects → Entrepreneurship → Founder journey
- Scroll-animated sections
- Milestone cards with subtle motion

---

### Phase 10 — Contact Page

#### [NEW] `src/app/contact/page.tsx`
- "Have an idea worth building?"
- Contact form: Name, Email, Message
- Client-side validation
- Honeypot spam protection
- Social links: Email, LinkedIn, GitHub, X
- Form submits to Next.js API route (or shows success state)

#### [NEW] `src/app/api/contact/route.ts`
- API route for form submission (basic handler, easily connectable to email service)

---

### Phase 11 — Motion System

#### [NEW] `src/lib/animations.ts`
- Centralized animation variants and transition presets
- `fadeInUp`, `staggerContainer`, `scaleIn`, `slideIn`, `textReveal`
- Spring physics constants
- Reduced motion detection utility

#### [NEW] `src/components/motion/AnimateOnScroll.tsx`
- Reusable scroll-triggered animation wrapper using `useInView`

#### [NEW] `src/components/motion/TextReveal.tsx`
- Word-by-word or line-by-line text reveal animation

#### [NEW] `src/components/motion/ParallaxSection.tsx`
- Scroll-linked parallax wrapper using `useScroll` + `useTransform`

#### [NEW] `src/components/motion/StaggerChildren.tsx`
- Container that staggers children entrance animations

#### [NEW] `src/hooks/useReducedMotion.ts`
- Hook to detect `prefers-reduced-motion` and disable animations

---

### Phase 12 — SEO & Structured Data

#### [NEW] `src/lib/seo.ts`
- Centralized metadata generation
- JSON-LD generators: Person, Organization, WebSite, Article, BreadcrumbList
- Open Graph and Twitter card metadata builders

#### [MODIFY] Each `page.tsx`
- Export `generateMetadata()` with proper titles, descriptions, OG images

#### [NEW] `src/app/sitemap.ts`
- Dynamic sitemap generation

#### [NEW] `src/app/robots.ts`
- Robots.txt configuration

---

### Phase 13 — Interactive Details & Polish

- Custom cursor effect (desktop only)
- Link underline animations
- Scroll progress bar at top
- Image reveal animations (clip-path transitions)
- Hover previews on project cards
- Smooth page transitions

---

## File Structure Summary

```
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx                    # Homepage
│   ├── about/page.tsx
│   ├── ojaven/page.tsx
│   ├── builds/page.tsx
│   ├── writing/
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx
│   ├── now/page.tsx
│   ├── journey/page.tsx
│   ├── contact/page.tsx
│   ├── api/contact/route.ts
│   ├── sitemap.ts
│   └── robots.ts
├── components/
│   ├── layout/
│   │   ├── Navigation.tsx
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── Timeline.tsx
│   │   ├── OjavenShowcase.tsx
│   │   └── ProjectCard.tsx
│   ├── motion/
│   │   ├── AnimateOnScroll.tsx
│   │   ├── TextReveal.tsx
│   │   ├── ParallaxSection.tsx
│   │   └── StaggerChildren.tsx
│   └── ui/
│       ├── InteractiveBackground.tsx
│       ├── MagneticButton.tsx
│       ├── ScrollProgress.tsx
│       └── CustomCursor.tsx
├── hooks/
│   └── useReducedMotion.ts
├── lib/
│   ├── animations.ts
│   ├── seo.ts
│   └── data/
│       ├── projects.ts
│       ├── articles.ts
│       ├── now.ts
│       └── navigation.ts
├── content/                        # MDX articles
│   └── building-ojaven.mdx
└── styles/
    └── globals.css
```

---

## Verification Plan

### Automated Tests
```bash
npm run build          # Production build succeeds with no errors
npm run lint           # ESLint passes
```

### Manual Verification
- Run `npm run dev` and visually inspect all pages
- Test responsive layouts at 375px, 768px, 1024px, 1440px, 1920px
- Verify animations respect `prefers-reduced-motion`
- Check keyboard navigation and focus states
- Verify all SEO metadata renders correctly (inspect `<head>`)
- Validate structured data with Google's Rich Results Test format
- Lighthouse audit targeting 90+ on all metrics
