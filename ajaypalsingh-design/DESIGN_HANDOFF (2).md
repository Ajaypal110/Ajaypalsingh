# ajaypalsingh.in: Design Handoff for Development

Give this file plus the `design-files/` folder to an AI coding assistant. It describes the approved design so it can be built as a real website.

> Note for the AI: The `.dc.html` files in `design-files/` are design mockups from a canvas tool. They load a `support.js` runtime that will not exist in your project, so **do not run them directly**. Read them as the exact reference for layout, sizes, colours, copy and interactions, then rebuild everything in the stack below.

---

## 1. Purpose

- The site is Ajaypal Singh's personal website and long-term identity on the internet.
- It is **not** a resume, a developer portfolio or a company site.
- It presents Ajaypal as a founder, builder and entrepreneur.
- Ojaven, his current venture, appears only in these places:
  - one row in the Ventures section
  - its own page
  - one line in "Right now"
- Do not make Ojaven the focus anywhere else.

**Content rules**
- Never invent revenue, users, clients, awards, press, stats or testimonials.
- Keep every `[bracketed placeholder]` as it is until Ajaypal provides the real content.

## 2. Tech stack

- **Framework:** Next.js (App Router) + TypeScript
- **Styling:** Tailwind CSS or CSS Modules. Use the design tokens below as CSS variables.
- **Animation:** `motion` npm package, imported from `motion/react`
- **Smooth scrolling:** optional `lenis`
- **Fonts:** `next/font/google`, Bricolage Grotesque (variable: opsz 12–96, wdth 75–100, wght 200–800)
- **Writing:** MDX files in `/content/notes`

**Pages**

| Route | Page | Design file |
|---|---|---|
| `/` | Home | `Main.dc.html` |
| `/about` | About | `About.dc.html` |
| `/ojaven` | Ojaven | `Ojaven.dc.html` |
| `/writing` | Writing index | `Writing.dc.html` |
| `/writing/[slug]` | Single note | new page, same style |
| `/contact` | Contact ("Say hello") | `Contact.dc.html` |

**Contact links:** the nav "Contact" link, the header "Say hello" button and the footer "Write to me" button all go to `/contact`. The footer keeps `id="contact"`.

**Shared components**
- `Header`, from `Header.dc.html`
- `Footer`, from `Footer.dc.html`

**Mobile reference:** `Mobile.dc.html` (390px wide)

## 3. Design tokens

**Colours**

```css
:root {
  --cobalt:     #1F2AD6; /* signature colour: hero, cards, buttons */
  --cobalt-2:   #3A45E6; /* photo placeholders, layers */
  --cobalt-3:   #5560F0;
  --paper:      #F7F7F5; /* main background */
  --white:      #FFFFFF;
  --navy:       #0F1330; /* text, dark sections, footer */
  --navy-2:     #171C44; /* footer wordmark */
  --navy-line:  #1F2550; /* lines on dark */
  --lavender:   #AEB5FF; /* accent on blue/dark, live dots */
  --lavender-2: #D6DAFF; /* soft text on blue */
  --tint:       #ECEEF8; /* tag chips, light cards */
  --line:       #DADCE8; /* borders on light */
  --slate:      #5A5F7A; /* secondary text on light */
  --muted:      #8A8FB0; /* labels on dark */
  --muted-2:    #B8BCD6;
}
```

**Typography:** one family, Bricolage Grotesque.

| Use | Size | Weight | Letter-spacing | Line-height |
|---|---|---|---|---|
| Hero name | 262px | 500 | -0.065em | 0.84 |
| Page H1 | 196–260px | 500 | -0.065 to -0.07em | 0.88–0.9 |
| Section display ("Ventures") | 150px | 500 | -0.065em | 0.9 |
| H2 large | 80–96px | 500 | -0.055 to -0.06em | 1.02 |
| H2 medium | 56–64px | 500 | -0.05em | 1 |
| Row titles | 40–56px | 500 | -0.045em | 1 |
| Lead text | 26–36px | 400 | -0.02em | 1.22–1.3 |
| Body | 20–24px | 400 | 0 | 1.45–1.5 |
| Labels | 13–16px | 400–500 | 0 | normal |

Typography rules:
- Use sentence case everywhere. No all-caps labels.
- Use `font-variant-numeric: tabular-nums` for counters.

**Shape and layout**
- **Radii:**
  - 6px for photos
  - 16–26px for cards
  - 32px for big panels
  - 48px for the bottom corners of `main` and the journey section
  - 999px for pills
- **Grid:** max width 1440px, 64px side padding, 12 columns, 24px gutter
- **Section spacing:** 140–200px vertical
- **Mobile:** 20px side padding

**Easing**
- `--ease-out: cubic-bezier(.16,1,.3,1)`, used for most movement
- `--ease-inout: cubic-bezier(.76,0,.24,1)`, used for wipes, curtains and text rolls

**Graphic motifs**
- Thin concentric circles in lavender at 20–45% opacity
- The "A" monogram: a chevron, a small arc and a lavender dot. The SVG is in the Header file.
- A rotating round badge reading "Ajaypal Singh ✦ Founder ✦ Builder ✦ Entrepreneur ✦"
- Small geometric shapes as icons: circle, rounded square, arch, leaf, ring

## 4. Shared components

### Header (`Header.dc.html`)

**Layout**
- Fixed at the top.
- Three columns:
  - **Left:** monogram and name ("Ajaypal Singh" with "Founder and builder" underneath)
  - **Centre:** nav pill with Home, About, Ojaven, Writing, Contact
  - **Right:** "Say hello" button and a round menu button (two dots)

**Scroll behaviour:** once `scrollY > 40`, the full-width bar animates into a compact floating pill.
- max-width 1120px
- 12px from the top
- `rgba(247,247,245,.78)` background with `backdrop-filter: blur(18px)`
- soft shadow
- The "Founder and builder" subtitle collapses.

**Nav highlight**
- A dark navy pill sits behind the active link.
- On hover it slides to the hovered link, changing position and width over 0.55s.
- The link text over the pill turns white.
- In Motion, use a `layoutId` shared element for this.

**Dark mode prop:** `onDark` is true on the home hero. When the header is not compact:
- the name text turns white
- the monogram and the "Say hello" button swap to their inverted colours

**"Say hello" button**
- The label rolls up on hover: two stacked copies, translateY -100%.
- The arrow icon rotates 45°.

**Full-screen menu**
- Navy background, revealed with `clip-path: inset(0 0 100% 0)` → `inset(0)` over 1s.
- Large links at 88px, staggered in 60ms apart. On hover they shift right and turn lavender.
- A cobalt preview card on the right changes its text to match the hovered link.
- The bottom row shows the email and social links.
- Closes with the X button. Should also close on Esc and trap focus.

### Footer (`Footer.dc.html`)

**Curtain reveal**
- The footer is `position: fixed; bottom: 0; height: 780px; z-index: 1`.
- `main` has `position: relative; z-index: 2; margin-bottom: 780px` and rounded bottom corners.
- Scrolling past `main` uncovers the footer underneath.

**Contents**
- **Headline:** "Got an idea worth building? Let's talk." (92px)
- **Magnetic button:** a round 184px cobalt "Write to me" button that follows the cursor at 0.35× strength.
- **Four columns:**
  - Email, with a copy button that shows a "Copied" toast for 1.8s
  - Pages
  - Elsewhere (LinkedIn, X, GitHub, Instagram, all placeholders)
  - Currently, with "Last updated [Month Year]"
- **Wordmark:** a giant "Ajaypal Singh" in `--navy-2`, cropped at the bottom and stretched to the full width. Each letter turns cobalt on hover.
- **Bottom bar:**
  - © 2026 Ajaypal Singh
  - ajaypalsingh.in
  - a "Back to top" button with an SVG ring that fills with scroll progress (circumference 113.1)

## 5. Pages

### Home (`/`, `Main.dc.html`)

1. **Intro curtain**
   - Six navy horizontal slats cover the screen.
   - Each shrinks upward (scaleY → 0, 1s, 70ms stagger).
   - Plays once per session.
2. **Hero** (cobalt background, 920px tall)
   - **Background:** concentric circles.
   - **Top line:** a live lavender dot and "Founder • Builder • Entrepreneur".
   - **Name:** "Ajaypal" / "Singh" (second line indented 150px). Each line rises from a mask with 700ms and 820ms delays.
   - **Photo:** portrait on the right, 372×620.
     - Revealed by six cobalt shutters that shrink left.
     - Tilts in 3D with the mouse (rotateY ±5°, rotateX ±4°).
   - **Intro paragraph:** bottom left.
   - **Round badge:** navy background, rotates continuously (22s) and also rotates with page scroll.
   - **Bottom meta row:** Studying / Into / Doing, plus a "Scroll" cue line.
   - **On scroll:** the hero scales to 0.94 and its bottom corners round to 48px.
3. **Intro statement**
   - Label "Hello" with a five-line H2 (80px).
   - Each line slides up from a mask as it enters the viewport.
   - A supporting paragraph and a "Read my story" link with a round arrow button.
4. **How I spend my time**
   - A heading with a rule line that draws in on scroll.
   - Five expandable rows: Building, Experimenting, Studying AI, Thinking about products, Exploring business.
   - Each row has a shape icon, a 56px title and a plus button that turns into an X.
   - The open row's title turns cobalt and shifts 20px right. Its body shows text and tag chips.
   - The first row is open by default.
   - Animate the body height with Motion's `AnimatePresence`.
5. **How I got here** (navy section with rounded corners)
   - **Left column (sticky, 100vh):** one big word (130px) that swaps as you scroll.
     - The old word slides up and out; the new one slides up and in.
     - A counter ("03 / 07") and a progress bar sit under it.
   - **Right column:** seven steps (Learning, Building, Experimenting, Products, Business, Founder, Next), each at least 56vh tall.
     - Inactive steps are at 28% opacity.
     - The active step is the last one whose top has passed 50% of the viewport.
6. **Ventures**
   - A large "Ventures" title and a table with Name / What it is / Status / Year.
   - **Row 1, Ojaven:** "A platform for modern agencies", "In development" with a live dot, "Launch 2027". Links to `/ojaven`.
     - On hover a cobalt fill rises from the bottom, the text turns white and the arrow rotates.
   - **Row 2, "Next":** "Not started yet", dashed border, muted colour.
7. **Right now + Notes** (two cards side by side)
   - **Right now card (cobalt):**
     - Updated [Month Year]
     - Studying: B.Tech CSE with an AI focus, second year
     - Building: My first venture, Ojaven
     - Exploring: AI, SaaS and product building
     - Thinking about: Entrepreneurship and how businesses work
     - Learning: [placeholder]
   - **Notes card (outlined):**
     - Short description and an "All notes" link.
     - Three dashed placeholder rows. Replace them with the three latest MDX notes when they exist.
8. **Footer reveal**

**Custom cursor (desktop only)**
- A 12px white dot with `mix-blend-mode: difference`, following the mouse with lerp 0.18.
- It grows 4.5× over links and buttons.
- Hide it when `pointer: coarse` or reduced motion is set. Keep the normal cursor visible.

### About (`/about`, `About.dc.html`)

1. **Hero**
   - Label "About" and H1 "Hi, I'm Ajaypal." (196px).
   - Portrait on the right (360×460) with a [Place] / [Year] caption.
   - A lead paragraph and a side paragraph.
2. **Wide photo panel** (cobalt, 640px tall) with a placeholder caption.
3. **"The long version"**
   - Three chapters, then a navy quote panel, then two more chapters.
   - Chapters: Learning by doing, More than code, From products to business, Becoming a founder, Still early.
   - Each chapter row: number | title | text. On hover the title shifts right and turns cobalt.
   - Quote: "I don't want to be defined by one skill. I want to be known for the things I build."
4. **"What I keep coming back to"**
   - Four cards: How products work, How people really use software, How ideas become businesses, Learning something new.
   - On hover a card turns cobalt, lifts 8px and its shape rotates.

### Ojaven (`/ojaven`, `Ojaven.dc.html`)

This page is Ajaypal's own founder notes, not Ojaven's marketing site.

1. **Hero**
   - Breadcrumb "Ventures / Ojaven" and H1 "Ojaven" (250px).
   - Subtitle "A platform for modern agencies." and a note paragraph.
   - **At-a-glance card:**
     - My role: Founder
     - Status: In development
     - Planned launch: 10 July 2027, with the number of days left calculated live
     - Official site: [link]
2. **Concept illustration panel** (cobalt)
   - Layered abstract UI with a line chart that draws itself in.
   - Hovering spreads the layers apart.
   - Always keep the label "Concept illustration, not the real product".
3. **Founder's notes**
   - Four questions: Why I'm building it, The problem I see, What I want it to become, What I'm learning.
   - The answers are placeholders.
4. **Road to launch**
   - Five points: [Date] Started building → Now: In development → [Milestone] → [Milestone] → 10 July 2027 Launch.
5. **Build log**
   - A navy note: "The build log starts here. First entry coming soon."
   - Two dashed placeholder entries.

### Writing (`/writing`, `Writing.dc.html`)

- H1 "Notes" (260px) with an intro on the right.
- **Filter buttons:** All, Building Ojaven, AI, SaaS, Product, Entrepreneurship, Lessons.
  - The active button is solid navy.
  - Use `aria-pressed`.
- **Empty state:** a cobalt panel with a slowly rotating orbit graphic and the text "Nothing published yet."
- **Note rows:** Date | Title | Topic chip | Read time. The title shifts right on hover.
  - Build these from MDX frontmatter: `title`, `date`, `topic`, `readingTime`, `description`.

### Contact (`/contact`, `Contact.dc.html`)

1. **Hero**
   - Label "Contact" and H1 "Say hello." (230px), which rises from a mask on load.
   - Intro: "Building something, stuck on an idea, or curious about Ojaven? Write to me. I'd like to hear what you're working on."
   - On the right, a slowly rotating orbit graphic around a cobalt circle with a mail icon.
2. **Message form** (left, 7 columns, white card with 32px radius)
   - **Topic buttons:** An idea, Ojaven, Collaboration, Product or AI, Just saying hi. One can be selected, using `aria-pressed`.
   - **Fields:** Name, Email and Message (up to 1000 characters, with a live counter).
     - Large 30px text with only a bottom border.
     - A cobalt line draws in under the field in focus.
     - Errors turn that line red (`#C4314B`) and show a message below.
   - **Validation:**
     - Name is required.
     - Email must be valid.
     - Message needs at least 10 characters.
   - **Send button:** cobalt pill with a rolling label and an arrow.
     - While sending, it shows a spinner and "Sending" and is disabled.
   - **Success state:** replaces the form with a cobalt panel.
     - A check mark draws itself.
     - Text: "Thanks, {first name}." and "Your message is on its way. I'll reply to {email}."
     - A "Send another message" button resets the form.
   - **Sending for real:** in the design, sending is simulated. In the real build, connect it to a form service or email API, for example:
     - a Next.js server action with Resend, or
     - Formspree
     - Add basic spam protection: a honeypot field and rate limiting.
3. **Side column** (right, 4 columns)
   - **Email card (navy):** the address, plus a "Copy address" button that shows a "Copied" toast.
   - **"Find me elsewhere":** LinkedIn, X, GitHub and Instagram rows with handles. On hover a cobalt fill sweeps in from the left and the arrow rotates.
   - **Details card:**
     - My local time: live, Asia/Kolkata, shown as "HH:MM IST"
     - Based in: [City], India
     - Usually replies: [within X days]
     - "Happy to talk about" tags

### Mobile (`Mobile.dc.html`)

- **Header:** a pill with the monogram and name on the left, and a menu button on the right.
- **Hero:**
  - Blue background, name at 102px, photo 200×290 at the top right.
  - Round badge at the bottom right.
- **Sections** follow the desktop order in one column:
  - The expandable rows stay.
  - The sticky journey becomes a simple numbered list.
- **Footer:**
  - A full-width "Write to me" button.
  - Two link columns.
  - A cropped wordmark.
  - The curtain reveal is optional on mobile.

## 6. Motion rules

- Use `motion/react`:
  - `useScroll` and `useTransform` for scroll-linked effects: hero scale, badge rotation, line reveals.
  - `whileInView` for section entrances.
  - `layoutId` for the nav highlight.
  - `AnimatePresence` for the menu and the expandable rows.
- One strong moment per section. Do not add fade-up to every element.
- **Durations:**
  - Reveals: 0.9–1.3s
  - Hovers: 0.35–0.6s
- **Reduced motion:** respect `prefers-reduced-motion` with `useReducedMotion()`.
  - No curtain, no tilt, no cursor, no loops.
  - Show all content immediately.
- **Performance:**
  - Animate only `transform`, `opacity` and `clip-path`.
  - Update the cursor and tilt through refs or motion values, not React state.
  - Use `next/image` for photos.

## 7. SEO

- **Metadata:**
  - title "Ajaypal Singh: Founder, Builder, Entrepreneur"
  - a unique description per page
  - canonical `https://ajaypalsingh.in/...`
  - Open Graph and Twitter cards (use a cobalt OG image with the name)
- **JSON-LD `Person`** on the homepage and About:
  - `name`, `url`, `image`, `jobTitle: "Founder"`
  - `founder of` / `worksFor` → `Organization` "Ojaven" (with its URL once live)
  - `alumniOf` / `knowsAbout` (AI, SaaS, product building, entrepreneurship)
  - `sameAs`: only real profile URLs Ajaypal provides
- **JSON-LD `Article`** on each note, with `author` pointing to the Person.
- **Also add:** `sitemap.xml`, `robots.txt`, internal links between pages, and semantic headings (one H1 per page).
- Do not add structured data for anything that isn't true yet.

## 8. Accessibility

- Use real `<a>` and `<button>` elements, with a visible focus ring (2px, cobalt or lavender).
- Give every icon-only button an `aria-label`.
- Set `aria-expanded` on the expandable rows and the menu.
- Minimum touch target is 44px.
- Keep text contrast at 4.5:1 or better. The token pairs above are chosen for this.

## 9. Placeholders to fill

- Portrait photo (3:5)
- About portrait and caption
- Wide landscape photo (2:1)
- Email address
- Contact form service (Resend, Formspree or similar)
- Social handles, city and usual reply time for the Contact page
- LinkedIn, X, GitHub and Instagram URLs
- Ojaven official site URL
- "Right now" update date and what he's learning
- Ojaven answers: why, problem, vision, lessons
- Ojaven milestone dates and build log entries
- Real notes (MDX)
- Year for the "Next" venture row
