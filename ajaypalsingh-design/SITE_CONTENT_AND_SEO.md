# ajaypalsingh.in: Site Content and SEO

This is the single source of truth for every word, title, meta tag, internal link and piece of structured data on the site. Use it together with `DESIGN_HANDOFF.md`, which covers the look and motion.

**Rules for the developer AI**
- Use the text exactly as written.
- Keep every `[bracketed]` item as a placeholder until Ajaypal provides the real value.
- Never add claims, numbers, clients, awards or press that are not in this file.
- Ajaypal is presented as a **founder and builder**. Education appears **only once**, on the About page ("Pursuing B.Tech, Computer Science (AI)"). Do not describe him as a student anywhere else, including meta tags and schema.

---

## 1. Site-wide settings

| Setting | Value |
|---|---|
| Canonical domain | `https://ajaypalsingh.in` (no `www`, always `https`) |
| Redirects | `www.ajaypalsingh.in` → `ajaypalsingh.in`; `http` → `https` (301) |
| Language | `<html lang="en">` |
| Site name | Ajaypal Singh |
| Title format | Each page has its own full title (see section 2). Fallback template: `%s \| Ajaypal Singh` |
| Default OG image | `/og/default.png`, 1200×630 (see section 6) |
| Twitter card | `summary_large_image`, creator `[@your_x_handle]` |
| Theme colour | `#1F2AD6` |
| Favicon set | `favicon.ico`, `icon.svg`, `icon-48.png`, `icon-96.png`, `icon-192.png`, `icon-512.png`, `apple-touch-icon.png`, `site.webmanifest` |
| Robots | All public pages `index, follow`. The 404 page is `noindex`. |
| Meta keywords | Do not use. Google ignores them. |

**One name, everywhere.** Always write **Ajaypal Singh**, spelled the same way:
- in the title and H1
- in the schema and `og:site_name`
- in the author name
- on every social profile

### Global `<head>` (Next.js `app/layout.tsx`)

```ts
import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://ajaypalsingh.in'),
  title: { default: 'Ajaypal Singh | Founder and Builder', template: '%s | Ajaypal Singh' },
  description:
    'Ajaypal Singh is a founder and builder creating products and companies. Currently building Ojaven, a platform for modern agencies.',
  applicationName: 'Ajaypal Singh',
  authors: [{ name: 'Ajaypal Singh', url: 'https://ajaypalsingh.in/about' }],
  creator: 'Ajaypal Singh',
  publisher: 'Ajaypal Singh',
  alternates: { canonical: '/' },
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    siteName: 'Ajaypal Singh',
    locale: 'en_US',
    url: 'https://ajaypalsingh.in',
    images: [{ url: '/og/default.png', width: 1200, height: 630, alt: 'Ajaypal Singh, founder and builder' }],
  },
  twitter: { card: 'summary_large_image', creator: '[@your_x_handle]' },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '48x48' },
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/icon-96.png', sizes: '96x96', type: 'image/png' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  themeColor: '#1F2AD6',
};
```

Every page sets its own `title`, `description`, `alternates.canonical` and `openGraph` using the values in section 2.

---

## 2. Page SEO at a glance

| Page | URL | Title | Meta description | H1 |
|---|---|---|---|---|
| Home | `/` | Ajaypal Singh \| Founder and Builder | Ajaypal Singh is a founder and builder creating products and companies. Currently building Ojaven, a platform for modern agencies. | Ajaypal Singh |
| About | `/about` | About Ajaypal Singh \| Founder and Builder | The story of Ajaypal Singh: how curiosity about technology turned into building products, thinking about business and founding Ojaven. | Hi, I'm Ajaypal. |
| Ojaven | `/ojaven` | Ojaven \| Founder Notes by Ajaypal Singh | Ajaypal Singh on building Ojaven, a platform for modern agencies: why it exists, where it is now and the road to its July 2027 launch. | Ojaven |
| Writing | `/writing` | Writing \| Ajaypal Singh | Essays, notes, books and ideas by Ajaypal Singh on building Ojaven, AI, SaaS, products and entrepreneurship. | Writing |
| Writing sections | `/writing/essays`, `/notes`, `/books`, `/ideas` | See `WRITING_PAGES_DESIGN.md` 1.10 | See `WRITING_PAGES_DESIGN.md` 1.10 | Writing |
| Single note | `/writing/[slug]` | `[Note title] \| Ajaypal Singh` | `[1–2 sentence summary of the note, 140–155 characters]` | `[Note title]` |
| Contact | `/contact` | Contact Ajaypal Singh \| Say Hello | Get in touch with Ajaypal Singh about an idea, a product, a collaboration or Ojaven. Send a message or email directly. | Say hello. |
| 404 | any missing URL | Page not found \| Ajaypal Singh | (none, `noindex`) | This page doesn't exist. |

**Open Graph and Twitter:** use the same title and description as the page. Each page gets its own OG image (section 6).

**Length rules**
- Titles: under 60 characters.
- Descriptions: 120–160 characters.
- Every title and description must be unique.

---

## 3. Page content

### 3.1 Header (all pages)

**Header**
- Name: **Ajaypal Singh**
- Under name: Founder and builder
- Menu: Home · About · Ojaven · Writing · Contact
- Button: Say hello (links to `/contact`)

**Full-screen menu previews**

| Link | Preview text |
|---|---|
| Home | Who I am, what I care about, and what I am building. |
| About | The longer story, from learning to code to starting a company. |
| Ojaven | My notes on the venture I am building right now. |
| Writing | Essays, notes, books and ideas on building, AI, software and business. |
| Contact | Have an idea, a question or something to build? Write to me. |

### 3.2 Home (`/`)

**Hero**
- Small line: Founder • Builder • Entrepreneur
- H1: Ajaypal Singh
- Intro: I build products and the companies behind them. I care about how products work, how businesses grow, and how ideas become something real.
- Meta row:
  - Role: Founder and builder
  - Focus: Products, AI, SaaS, business
  - Approach: Build, test, learn, repeat
- Photo alt text: "Portrait of Ajaypal Singh, founder and builder"

**Statement**
- Label: Hello
- H2: I build things. Products, companies, and the ideas behind them. I care about how an idea becomes something real.
- Paragraph: This is my corner of the internet. It will grow as I do, with the things I build, what I learn and what I think about along the way.
- Link: **Read my story** (to `/about`)

**H2: How I spend my time**
- Intro: Not a list of skills. Just what I actually do.

| Row | Text |
|---|---|
| Building products | Taking an idea from a rough note to something that works, then making it better. |
| Experimenting | Trying ideas quickly to see which ones deserve more of my time. |
| Working with AI | Understanding AI well enough to put it inside real products, not just demos. |
| Thinking about products | How people actually use software, and what makes some of it feel right. |
| Growing a business | How a technical idea turns into a real company, and what it takes to run and grow one. |

**H2: How I got here**
1. **Curiosity:** It started with technology, and wanting to know how things actually work.
2. **Building:** I found out I enjoy learning by building. When something has to work, it sticks.
3. **Experimenting:** I started trying ideas just to see what they could turn into.
4. **Products:** Then I got curious about products themselves. How they work, and how people really use them.
5. **Business:** Then a bigger question. How does a technical idea become a real business?
6. **Founder:** That question turned into entrepreneurship, and into building my first venture.
7. **Next:** More products, more ventures. This part is still being written.

**H2: Ventures**
- Intro: Companies and products I start. The list is short for now.

| Name | What it is | Status | Year |
|---|---|---|---|
| **Ojaven** (links to `/ojaven`) | A platform for modern agencies | In development | Launch 2027 |
| Next | Not started yet | Later | [Year] |

**H2: Right now**
- Updated: [Month Year]
- Focus: Building a company from zero
- Building: My first venture, **Ojaven** (links to `/ojaven`)
- Exploring: AI, SaaS and product building
- Thinking about: Entrepreneurship and how businesses work
- Learning: [What you're learning this month]

**H2: Notes**
- Text: My notebook on building, AI, SaaS, products and the lessons along the way. The first notes are on their way.
- Link: **All notes** (to `/writing`)
- When notes exist, show the 3 latest, each linking to `/writing/[slug]`.

### 3.3 About (`/about`)

**Hero**
- Label: About
- H1: Hi, I'm Ajaypal.
- Lead: I'm a founder and builder. I got into technology by building with it, then got curious about everything around it: products, people and business.
- Side text: Right now I'm building my first venture. This page is the story of how I got here and where I'm taking it.
- Education: Pursuing B.Tech, Computer Science (AI)
- Photo: [Your photo], alt text "Ajaypal Singh"
- Caption: [Place] · [Year]
- Wide photo: [Wide photo: you working, or a place that matters to you]. Alt text: "[describe the photo]"

**H2: The long version**
- Intro: No dates, just the order things happened in.
1. **Learning by doing:** Technology got interesting to me once I started building with it. Reading about things was never enough. I wanted to make them work.
2. **More than code:** Over time, technology stopped being only about code. I got curious about how products work and how people actually use software.
3. **From products to business:** Then the questions got bigger. How can a product be better? How does a technical idea turn into a real business?
4. **Becoming a founder:** That's where my interest in entrepreneurship came from. Now I'm building my first venture, **Ojaven** (links to `/ojaven`), and learning a lot from doing it.
5. **What comes next:** Ojaven is my first venture, not my last. I want to keep building products and companies, and this site is where I keep track of it all.

**Quote**
- I don't want to be defined by one skill. I want to be known for the things I build.

**H2: What I keep coming back to**
- How products work
- How people really use software
- How ideas become businesses
- Learning something new

**Closing links** (add at the bottom, above the footer)
- **See what I'm building** (to `/ojaven`)
- **Read my notes** (to `/writing`)
- **Say hello** (to `/contact`)

### 3.4 Ojaven (`/ojaven`)

**Hero**
- Breadcrumb: Home / Ventures / Ojaven
  - "Ventures" links to `/#ventures`
- H1: Ojaven
- Subtitle: A platform for modern agencies.
- Intro: These are my own notes as the founder: why I started it, where it is, and what I'm learning. For the product itself, visit the official site.

**At a glance**

| | |
|---|---|
| My role | Founder (links to `/about`) |
| Status | In development |
| Planned launch | 10 July 2027 ([live number] days) |
| Official site | [ojaven link] (external link with `rel="noopener"`, **not** nofollow) |

**Concept panel**
- Label: Concept illustration, not the real product
- Note: Real screenshots go here once they exist
- Image alt text: "Concept illustration of Ojaven, not the real product"

**H2: Founder's notes**
- Intro: Answers in my own words. The bracketed parts are still to be written.
- Why I'm building it: [your answer]
- The problem I see: [your answer]
- What I want it to become: [your answer]
- What I'm learning: [your answer]

**H2: Road to launch**
1. [Date]: Started building
2. Now: In development
3. [Date]: [Milestone]
4. [Date]: [Milestone]
5. 10 July 2027: Launch

**H2: Build log**
- Intro: Short notes as it takes shape. What changed, what broke and what I learned.
- First entry: The build log starts here. First entry coming soon.
- When build-log notes exist, list them here, each linking to `/writing/[slug]`.

**Closing**
- Want to follow along? I'll write about it in my notes.
- Links:
  - **Open my notes** (to `/writing`)
  - **Get in touch** (to `/contact`)

### 3.5 Writing (`/writing`)

> **Updated:** Writing now has four sections (Essays, Notes, Books, Ideas). The full text and layout are in `WRITING_PAGES_DESIGN.md` section 1, which replaces the text below. Build logs stay on the Ojaven page.


**Hero**
- Label: Writing
- H1: Notes
- Intro: My notebook on the internet. Thinking out loud about building, AI, software and business.

**Topic filter**
- All · Building Ojaven · AI · SaaS · Product · Entrepreneurship · Lessons

**Empty state**
- Nothing published yet.
- The first notes will be about building Ojaven, AI, and the lessons I pick up along the way.

**Note row**
- Date · Title · Topic · [x] min read

### 3.6 Single note (`/writing/[slug]`), template

**MDX frontmatter**

```yaml
title: "[Note title]"
description: "[140–155 character summary]"
date: "YYYY-MM-DD"
updated: "YYYY-MM-DD"
topic: "Building Ojaven | AI | SaaS | Product | Entrepreneurship | Lessons"
cover: "/og/notes/[slug].png"
```

**Page layout**
- Breadcrumb: Home / Notes / [Note title]
- H1: [Note title]
- Byline: By **Ajaypal Singh** (links to `/about`) · [Date] · [x] min read
- Body: H2s for sections. Put one internal link inside the text where it fits naturally (to `/ojaven`, `/about` or another note).
- Author box at the end:
  - "Written by Ajaypal Singh, founder and builder. Currently building Ojaven."
  - Links: **About me** (to `/about`) and **Say hello** (to `/contact`)
- Related notes: 2–3 notes with the same topic.
- Next and previous note links.

### 3.7 Contact (`/contact`)

**Hero**
- Label: Contact
- H1: Say hello.
- Intro: Building something, stuck on an idea, or curious about Ojaven? Write to me. I'd like to hear what you're working on.

**Form**
- H2: Send a message
- Helper: All fields needed
- Topic: What's it about? An idea · Ojaven · Collaboration · Product or AI · Just saying hi
- Fields:
  - Your name (placeholder: Jane Doe)
  - Email (placeholder: jane@company.com)
  - Message (placeholder: Tell me what you're building or thinking about...)
- Errors:
  - Please add your name.
  - Please add a valid email.
  - A few more words, please.
- Privacy note: Your details are only used to reply to you.
- Button: Send message / Sending
- Success:
  - Thanks, [first name].
  - Your message is on its way. I'll reply to [email].
  - Button: Send another message

**Side column**
- Prefer email? [your@email.com], with a **Copy address** button
- Find me elsewhere:
  - LinkedIn [handle]
  - X [@handle]
  - GitHub [handle]
  - Instagram [@handle]
- Details:
  - My local time: [live] IST
  - Based in: [City], India
  - Usually replies: [within X days]
- Happy to talk about: Ideas · Products · AI and SaaS · Ojaven · Collaborations

### 3.8 Footer (all pages)

**Main block**
- H2: Got an idea worth building? Let's talk.
- Button: **Write to me** (to `/contact`)
- Email: [your@email.com] (copy button)

**Columns**
- Pages: Home · About · Ojaven · Writing · Contact
- Elsewhere: LinkedIn · X · GitHub · Instagram
- Currently: Building, exploring new ideas and getting ready to write more. Last updated [Month Year]

**Bottom**
- Wordmark: Ajaypal Singh
- Bottom bar: © 2026 Ajaypal Singh · ajaypalsingh.in · Back to top
- Social links in the footer use `rel="me noopener"` so they confirm the profiles belong to the same person.

### 3.9 404 page

- H1: This page doesn't exist.
- Text: It may have moved, or the link might be wrong.
- Links:
  - **Go home** (to `/`)
  - **Read my story** (to `/about`)
  - **Say hello** (to `/contact`)

---

## 4. Structured data (JSON-LD)

**Rules**
- Use one shared set of `@id`s so Google sees one connected identity.
- Only include facts that are true.
- Leave `sameAs` empty until real profile URLs exist.
- Add each block as `<script type="application/ld+json">` on its page.

**Shared IDs**

| Entity | `@id` |
|---|---|
| Website | `https://ajaypalsingh.in/#website` |
| Person | `https://ajaypalsingh.in/#person` |
| Ojaven | `https://ajaypalsingh.in/#ojaven` (switch to Ojaven's own site ID once it has one) |

### 4.1 Home (`/`)

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://ajaypalsingh.in/#website",
      "url": "https://ajaypalsingh.in/",
      "name": "Ajaypal Singh",
      "alternateName": ["Ajaypal", "ajaypalsingh.in"],
      "description": "The personal website of Ajaypal Singh, founder and builder.",
      "inLanguage": "en",
      "publisher": { "@id": "https://ajaypalsingh.in/#person" }
    },
    {
      "@type": "Person",
      "@id": "https://ajaypalsingh.in/#person",
      "name": "Ajaypal Singh",
      "givenName": "Ajaypal",
      "familyName": "Singh",
      "url": "https://ajaypalsingh.in/",
      "image": "https://ajaypalsingh.in/[photo].jpg",
      "jobTitle": "Founder",
      "description": "Founder and builder creating products and companies. Currently building Ojaven, a platform for modern agencies.",
      "worksFor": { "@id": "https://ajaypalsingh.in/#ojaven" },
      "knowsAbout": ["Entrepreneurship", "Product building", "SaaS", "Artificial intelligence", "Software"],
      "email": "mailto:[your@email.com]",
      "sameAs": [
        "[https://www.linkedin.com/in/your-handle]",
        "[https://x.com/your-handle]",
        "[https://github.com/your-handle]",
        "[https://www.instagram.com/your-handle]",
        "[Ojaven team/founder page URL, when it exists]"
      ]
    },
    {
      "@type": "Organization",
      "@id": "https://ajaypalsingh.in/#ojaven",
      "name": "Ojaven",
      "url": "[ojaven link]",
      "description": "A platform for modern agencies.",
      "founder": { "@id": "https://ajaypalsingh.in/#person" }
    },
    {
      "@type": "WebPage",
      "@id": "https://ajaypalsingh.in/#webpage",
      "url": "https://ajaypalsingh.in/",
      "name": "Ajaypal Singh | Founder and Builder",
      "isPartOf": { "@id": "https://ajaypalsingh.in/#website" },
      "about": { "@id": "https://ajaypalsingh.in/#person" },
      "primaryImageOfPage": "https://ajaypalsingh.in/og/default.png",
      "inLanguage": "en"
    }
  ]
}
```

Notes on this block:
- Remove any `sameAs` line that is still a placeholder before going live.
- Remove `url` from Ojaven until the official site exists.

### 4.2 About (`/about`)

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfilePage",
      "@id": "https://ajaypalsingh.in/about#webpage",
      "url": "https://ajaypalsingh.in/about",
      "name": "About Ajaypal Singh | Founder and Builder",
      "isPartOf": { "@id": "https://ajaypalsingh.in/#website" },
      "mainEntity": { "@id": "https://ajaypalsingh.in/#person" },
      "dateModified": "[YYYY-MM-DD]",
      "breadcrumb": { "@id": "https://ajaypalsingh.in/about#breadcrumb" }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://ajaypalsingh.in/about#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://ajaypalsingh.in/" },
        { "@type": "ListItem", "position": 2, "name": "About", "item": "https://ajaypalsingh.in/about" }
      ]
    }
  ]
}
```

The Person itself is defined on the homepage. Also repeat the full Person node from 4.1 in this graph, because Google reads each page separately.

### 4.3 Ojaven (`/ojaven`)

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://ajaypalsingh.in/ojaven#webpage",
      "url": "https://ajaypalsingh.in/ojaven",
      "name": "Ojaven | Founder Notes by Ajaypal Singh",
      "description": "Ajaypal Singh on building Ojaven, a platform for modern agencies.",
      "isPartOf": { "@id": "https://ajaypalsingh.in/#website" },
      "about": { "@id": "https://ajaypalsingh.in/#ojaven" },
      "author": { "@id": "https://ajaypalsingh.in/#person" },
      "breadcrumb": { "@id": "https://ajaypalsingh.in/ojaven#breadcrumb" }
    },
    {
      "@type": "Organization",
      "@id": "https://ajaypalsingh.in/#ojaven",
      "name": "Ojaven",
      "url": "[ojaven link]",
      "description": "A platform for modern agencies.",
      "founder": { "@id": "https://ajaypalsingh.in/#person" }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://ajaypalsingh.in/ojaven#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://ajaypalsingh.in/" },
        { "@type": "ListItem", "position": 2, "name": "Ojaven", "item": "https://ajaypalsingh.in/ojaven" }
      ]
    }
  ]
}
```

Do **not** add a `SoftwareApplication` or `Product` schema, ratings, offers or a founding date until they are real and live.

### 4.4 Writing (`/writing`)

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": "https://ajaypalsingh.in/writing#webpage",
      "url": "https://ajaypalsingh.in/writing",
      "name": "Notes | Ajaypal Singh",
      "isPartOf": { "@id": "https://ajaypalsingh.in/#website" },
      "author": { "@id": "https://ajaypalsingh.in/#person" },
      "breadcrumb": { "@id": "https://ajaypalsingh.in/writing#breadcrumb" }
    },
    {
      "@type": "Blog",
      "@id": "https://ajaypalsingh.in/writing#blog",
      "name": "Notes by Ajaypal Singh",
      "url": "https://ajaypalsingh.in/writing",
      "author": { "@id": "https://ajaypalsingh.in/#person" },
      "blogPost": []
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://ajaypalsingh.in/writing#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://ajaypalsingh.in/" },
        { "@type": "ListItem", "position": 2, "name": "Notes", "item": "https://ajaypalsingh.in/writing" }
      ]
    }
  ]
}
```

Fill `blogPost` automatically with `{ "@id": "https://ajaypalsingh.in/writing/[slug]#article" }` for each published note.

### 4.5 Single note (`/writing/[slug]`), generated from frontmatter

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      "@id": "https://ajaypalsingh.in/writing/[slug]#article",
      "headline": "[Note title]",
      "description": "[description]",
      "image": "https://ajaypalsingh.in/og/notes/[slug].png",
      "datePublished": "[date]",
      "dateModified": "[updated]",
      "author": { "@id": "https://ajaypalsingh.in/#person" },
      "publisher": { "@id": "https://ajaypalsingh.in/#person" },
      "mainEntityOfPage": "https://ajaypalsingh.in/writing/[slug]",
      "isPartOf": { "@id": "https://ajaypalsingh.in/writing#blog" },
      "articleSection": "[topic]",
      "inLanguage": "en"
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://ajaypalsingh.in/" },
        { "@type": "ListItem", "position": 2, "name": "Notes", "item": "https://ajaypalsingh.in/writing" },
        { "@type": "ListItem", "position": 3, "name": "[Note title]", "item": "https://ajaypalsingh.in/writing/[slug]" }
      ]
    }
  ]
}
```

On note pages, include the Person node with `"name": "Ajaypal Singh"` and `"url": "https://ajaypalsingh.in/about"`.

### 4.6 Contact (`/contact`)

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ContactPage",
      "@id": "https://ajaypalsingh.in/contact#webpage",
      "url": "https://ajaypalsingh.in/contact",
      "name": "Contact Ajaypal Singh | Say Hello",
      "isPartOf": { "@id": "https://ajaypalsingh.in/#website" },
      "about": { "@id": "https://ajaypalsingh.in/#person" },
      "breadcrumb": { "@id": "https://ajaypalsingh.in/contact#breadcrumb" }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://ajaypalsingh.in/contact#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://ajaypalsingh.in/" },
        { "@type": "ListItem", "position": 2, "name": "Contact", "item": "https://ajaypalsingh.in/contact" }
      ]
    }
  ]
}
```

### 4.7 Checking

After deploying, test every page in Google's Rich Results Test and the Schema.org validator. Fix all errors, and fix warnings where the information exists.

---

## 5. Internal linking

**Goal:** every page links back to the homepage and About with the name "Ajaypal Singh", and Ojaven is linked from the pages that talk about it. This tells Google the pages belong together and who they are about.

### 5.1 Link map

| From | Links to | Anchor text |
|---|---|---|
| Header (all pages) | `/`, `/about`, `/ojaven`, `/writing`, `/contact` | Logo: "Ajaypal Singh". Menu: Home, About, Ojaven, Writing, Contact. Button: Say hello |
| Footer (all pages) | Same 5 pages, plus social profiles | Home, About, Ojaven, Writing, Contact. Button: Write to me |
| Home, Statement | `/about` | Read my story |
| Home, Ventures | `/ojaven` | Ojaven |
| Home, Right now | `/ojaven` | Ojaven |
| Home, Notes | `/writing`, 3 latest notes | All notes, plus note titles |
| About, chapter 4 | `/ojaven` | Ojaven |
| About, closing | `/ojaven`, `/writing`, `/contact` | See what I'm building · Read my notes · Say hello |
| Ojaven, breadcrumb | `/`, `/#ventures` | Home · Ventures |
| Ojaven, "My role" | `/about` | Founder |
| Ojaven, build log | Build-log notes | Note titles |
| Ojaven, closing | `/writing`, `/contact` | Open my notes · Get in touch |
| Writing, rows | Each note | Note title |
| Note, byline | `/about` | Ajaypal Singh |
| Note, body | `/ojaven`, `/about` or another note | Descriptive words, never "click here" |
| Note, author box | `/about`, `/contact` | About me · Say hello |
| Note, bottom | 2–3 related notes, plus previous and next | Note titles |
| Contact, intro | `/ojaven` | Ojaven |
| 404 | `/`, `/about`, `/contact` | Go home · Read my story · Say hello |

### 5.2 Rules

- **Links must be crawlable:** real `<a href>` links rendered on the server (Next.js `<Link>` is fine). No links that only work through JavaScript clicks.
- **Every page is reachable** within 2 clicks from the homepage.
- **Anchor text says what the page is.** Use "Ojaven", "Read my story", "Ajaypal Singh". Never use "here" or "click".
- **Visible breadcrumbs** on About, Ojaven, Writing, notes and Contact, matching the BreadcrumbList schema.
- **External links:**
  - Your own profiles: `rel="me noopener"`
  - Ojaven's official site: `rel="noopener"`
  - Other sites: `rel="noopener"`
  - Use `nofollow` only for sponsored or untrusted links.
- **Back-links from outside:** every social profile and the Ojaven site should link back to `https://ajaypalsingh.in` (section 7).

---

## 6. Images and Open Graph

**OG image style** (1200×630)
- Cobalt `#1F2AD6` background with the thin lavender circle motif.
- The logo mark at the top left.
- Page title in Bricolage Grotesque, weight 500, white.
- "ajaypalsingh.in" small at the bottom.

| Page | OG image | OG text |
|---|---|---|
| Home | `/og/default.png` | Ajaypal Singh · Founder and builder |
| About | `/og/about.png` | Hi, I'm Ajaypal. |
| Ojaven | `/og/ojaven.png` | Ojaven · Founder notes |
| Writing | `/og/writing.png` | Notes by Ajaypal Singh |
| Contact | `/og/contact.png` | Say hello. |
| Notes | `/og/notes/[slug].png` | Note title, generated with `next/og` (`opengraph-image.tsx`) |

**Image rules**
- **Real photos:** use `next/image`, WebP or AVIF format, with width and height set.
- **Alt text:** describe the person or scene. Use "Ajaypal Singh" in the portrait alt text, and don't stuff keywords.
- **File names:** descriptive, for example `ajaypal-singh-portrait.jpg` and `ajaypal-singh-working.jpg`.
- **Decorative graphics:** circles, shapes and the rotating badge get `aria-hidden="true"` and empty alt text.

---

## 7. Technical SEO

### 7.1 `app/sitemap.ts`

```ts
import type { MetadataRoute } from 'next';
import { getAllNotes } from '@/lib/notes';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://ajaypalsingh.in';
  const pages = ['', '/about', '/ojaven', '/writing', '/contact'].map((p) => ({
    url: `${base}${p}`,
    lastModified: new Date(),
  }));
  const notes = getAllNotes().map((n) => ({
    url: `${base}/writing/${n.slug}`,
    lastModified: new Date(n.updated ?? n.date),
  }));
  return [...pages, ...notes];
}
```

### 7.2 `app/robots.ts`

```ts
import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: '*', allow: '/' }],
    sitemap: 'https://ajaypalsingh.in/sitemap.xml',
    host: 'https://ajaypalsingh.in',
  };
}
```

### 7.3 Per-page metadata example (`app/about/page.tsx`)

```ts
export const metadata: Metadata = {
  title: { absolute: 'About Ajaypal Singh | Founder and Builder' },
  description:
    'The story of Ajaypal Singh: how curiosity about technology turned into building products, thinking about business and founding Ojaven.',
  alternates: { canonical: '/about' },
  openGraph: {
    type: 'profile',
    url: '/about',
    title: 'About Ajaypal Singh | Founder and Builder',
    description: 'How curiosity about technology turned into building products and founding Ojaven.',
    images: ['/og/about.png'],
    firstName: 'Ajaypal',
    lastName: 'Singh',
  },
};
```

Notes use `generateMetadata()` with values from the frontmatter and `openGraph.type: 'article'`, plus `publishedTime`, `modifiedTime` and `authors: ['https://ajaypalsingh.in/about']`.

### 7.4 Checklist

- [ ] One H1 per page, followed by H2s in order.
- [ ] A self-referencing canonical on every page, with no trailing-slash duplicates.
- [ ] Pages are rendered on the server or statically, so the text is in the HTML without JavaScript.
- [ ] Core Web Vitals:
  - LCP under 2.5s: preload the hero font weight and the hero photo.
  - CLS under 0.1: reserve space for images and fonts.
  - INP under 200ms.
- [ ] Animations never hide text from crawlers. Content is in the HTML even before motion runs.
- [ ] `prefers-reduced-motion` is respected.
- [ ] A custom 404 page with `noindex`.
- [ ] HTTPS, with one 301 hop at most for www → non-www.
- [ ] The contact form has a honeypot and rate limiting. The thank-you state doesn't create a new indexable URL.
- [ ] Only real social URLs are in `sameAs` and in the footer.
- [ ] The favicon files are live and linked from the homepage.

---

## 8. Personal identity outside the site

These steps help Google connect "Ajaypal Singh" to this site. Nothing guarantees rankings or a knowledge panel, but these are the strongest honest signals.

1. **Same name and photo everywhere.** Use "Ajaypal Singh" and the same portrait on LinkedIn, X, GitHub and Instagram.
2. **Same short bio everywhere:** "Founder and builder. Building Ojaven, a platform for modern agencies. ajaypalsingh.in"
3. **Link back.** Put `https://ajaypalsingh.in` in the website field of every profile.
4. **Ojaven site.** Its About or team page should name "Ajaypal Singh, Founder" and link to `https://ajaypalsingh.in`. That page URL can then go in `sameAs`.
5. **Google Search Console.**
   - Verify the domain property.
   - Submit `https://ajaypalsingh.in/sitemap.xml`.
   - Use URL Inspection and **Request indexing** for `/` and `/about`.
6. **Bing Webmaster Tools.** Import the site from Search Console.
7. **Write regularly.** Each published note is another page by "Ajaypal Singh", linked to /about.
8. **Mentions.** Podcasts, interviews, directories and launch posts that link to ajaypalsingh.in with your name help most. Only pursue real ones.

---

## 9. Placeholders to fill before launch

- [ ] Portrait photo plus wide photo, with alt text
- [ ] Email address
- [ ] LinkedIn, X, GitHub and Instagram URLs and handles
- [ ] X handle for `twitter:creator`
- [ ] Ojaven official site link (or remove it from the schema)
- [ ] City
- [ ] Usual reply time
- [ ] "Right now": update date and what you're learning
- [ ] Ojaven founder's notes: 4 answers
- [ ] Ojaven milestone dates
- [ ] Photo captions: place and year
- [ ] "Next" venture year
- [ ] OG images for each page
- [ ] `dateModified` values in the schema
