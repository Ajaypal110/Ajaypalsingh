# Writing pages: Design Spec (Writing hub, sections and single pages)

This spec covers the notes list and the individual note page. It follows `DESIGN_HANDOFF.md` (tokens, header, footer, motion rules) and `SITE_CONTENT_AND_SEO.md` (titles, schema, internal links).

**Design files:** `design-files/Writing.dc.html` and `design-files/Note.dc.html`. These are reference mockups only, so rebuild them in Next.js with `motion/react`.

---

## 1. Writing hub (`/writing`) and its sections

Writing has **four sections**. Build logs are **not** part of Writing. They stay on the Ojaven page.

| Section | What it is | Section page | Item URL | Item layout |
|---|---|---|---|---|
| **Essays** | Long, finished pieces (1,000+ words) | `/writing/essays` | `/writing/[slug]` (keep the existing URLs) | Full article page (section 2) |
| **Notes** | Short thoughts, one idea each (100–400 words) | `/writing/notes` | `/writing/[slug]` | Readable in full on the card. The item page uses the same article layout, but shorter and without a cover. |
| **Books** | Books Ajaypal writes | `/writing/books` | `/writing/books/[slug]` | Book page (section 1.8) |
| **Ideas** | Ideas being explored but not built yet | `/writing/ideas` | none; each idea is an anchor, `/writing/ideas#[slug]` | A row in the list |

**Reserved slugs:** `essays`, `notes`, `books` and `ideas` can't be used as post slugs.

**Every section is always visible**, even with no content, and shows a designed "Coming soon" state until the first entry is published.

**Content model**
- Keep everything in `/content/writing/*.mdx`, with a `type` field in the frontmatter: `essay | note | book | idea`.
- Posts that already exist get `type: essay`.

### 1.1 Hero (all section pages)
- Label: "Writing"
- H1: "Writing" (250px, weight 500, letter-spacing -0.07em), rising from a mask on load
- Intro on the right (26px): "Essays, notes, books and ideas. Where I think out loud about building, AI, software and business."

### 1.2 Section tabs (sticky)
- **Position:** sticks just under the header (top 96px), on a blurred paper-coloured bar.
- **Shape:** one white pill container with five equal tabs, 60px tall: **All · Essays · Notes · Books · Ideas**.
- **Each tab shows:**
  - a small shape icon:
    - All: rounded square
    - Essays: cobalt circle
    - Notes: navy square
    - Books: lavender book shape
    - Ideas: cobalt ring
  - the label
  - a count pill, or "Soon" when the section is empty
- **Active tab:** a navy pill slides under it (0.6s) and its text turns white. The icon rotates on hover.
- **Tabs are real links** to `/writing`, `/writing/essays` and so on, styled as tabs, so every section has its own URL for SEO. Use `aria-current="page"` on the active one.
- **Page change:** a short fade-and-rise transition (0.7s).

### 1.3 "All" view (`/writing`)
1. **Latest essay:** a large cobalt card with the "Latest essay" pill, the title at 96px, the summary and a round arrow button. It uses the same hover effects as before.
2. **"Browse by section":** four cards (28px radius, `#ECEEF8`, at least 320px tall).
   - **Top:** the section shape and a badge ("3 pieces" or "Coming soon").
   - **Bottom:** the section name at 40px, a short description and "Open [Section]" with an arrow.
   - **On hover:** the card turns cobalt, lifts 8px and the shape rotates.
   - Each card links to its section page.
3. **"Latest":** the newest items from every section except the featured one.
   - Each row: date | title (38px) | a **type** chip (navy) plus a topic chip | read time | a round arrow button.
   - The count on the right reads "[n] published".

No topic filter appears on "All".

### 1.4 Section page header (Essays, Notes, Books, Ideas)
- **Left:** the section name as an H2 (96px) and its description (22px, slate).
- **Right:** the count ("3 essays", "[n] entries" or "Coming soon").

**Descriptions**

| Section | Description |
|---|---|
| Essays | Long, finished pieces on building, products and business. |
| Notes | Short thoughts, one idea at a time. Quick enough to read right here. |
| Books | Books I write, from first draft to finished. |
| Ideas | Things I'm exploring but haven't built yet. Some may turn into products. |

### 1.5 Essays (`/writing/essays`)
- **Topic filters:** All · Building Ojaven · AI · SaaS · Product · Entrepreneurship · Lessons.
  - These keep `?topic=` in the URL.
- **List:** a line on top, then rows:
  - date | title (44px) plus a summary under it (17px) | topic chip | read time | a round arrow button
  - On hover, the title turns cobalt and slides 12px, and the button fills.
- **Nothing matches a topic:** "No essays on [topic] yet."

### 1.6 Notes (`/writing/notes`)
- **Layout:** a three-column staggered grid of note cards (24px radius), with the topic filters above it.
- **Card colours rotate:** white with a border → navy → light lavender-grey → cobalt → white → light.
- **Card contents:** the full short text (22px), then a topic chip and date at the bottom.
- **On hover:** the card lifts 6px, tilts -0.5° and gains a soft shadow.
- **Links:** if a note has more than about 60 words, the card shows a "Read" link to `/writing/[slug]`.

### 1.7 Ideas (`/writing/ideas`)

**Status legend** above the list, as coloured dots:

| Status | Meaning | Dot |
|---|---|---|
| Thinking | just an idea | cobalt ring |
| Exploring | researching it | lavender |
| Testing | trying it out | cobalt |
| Parked | on hold for now | grey |

**List rows:** status (dot and label) | idea name (32px) | one-line description | "Added [Month Year]". On hover the name turns cobalt.

**Idea frontmatter:** `type: idea`, `title`, `summary`, `status`, `added`.

### 1.8 Books (`/writing/books`) and a single book (`/writing/books/[slug]`)
**List:** two-column cards (32px radius, `#ECEEF8`).
- **Left:** a 2:3 book cover (220px wide).
  - Left edge rounded 6px, right edge 14px, with a thin spine line.
  - Shows "Ajaypal Singh" and the title.
  - Tilted in 3D (`rotateY(-14deg)`); it straightens and lifts on hover.
- **Right:**
  - status chip ("Writing" or "Published")
  - title (44px) and subtitle
  - year and number of chapters
  - "View book" with an arrow

**Single book page** (same page frame as a note):
- a large cover
- the title and subtitle
- status and year
- "What it's about"
- chapter list
- where to get it (buttons to real stores, only when they exist)
- an author box
- **Schema:** `Book` with `author` → `#person`. Add `isbn`, `datePublished` and `bookFormat` only when real.

**Book frontmatter:** `type: book`, `title`, `subtitle`, `status`, `year`, `cover`, `chapters`, `links[]`.

### 1.9 "Coming soon" state (Notes, Books and Ideas while empty)
- **Container:** a large panel with a dashed border (36px radius, at least 480px tall), in two columns.
- **Left:**
  - a "Coming soon" pill with a live dot
  - a title (72px) and text
  - two buttons: **Read the essays** (cobalt, links to Essays) and **Say hello** (outlined, links to `/contact`)
- **Right:** a graphic for each section.
  - **Notes:** three stacked note cards.
  - **Books:** three books on a shelf that fan out on hover.
  - **Ideas:** a lightbulb in a cobalt circle that pulses gently, inside slowly rotating orbit rings.

**Text for each section**

| Section | Title | Text |
|---|---|---|
| Notes | Short notes are on the way. | Quick thoughts and lessons, one idea at a time. The first ones will land here soon. |
| Books | Books will live here. | When I publish a book, you will find it here, with what it is about and where to read it. |
| Ideas | An open list of ideas. | Ideas I'm exploring, with where each one stands. The list opens soon. |

**Show it automatically:** when a section has zero published entries, show this state. When the first entry is published, it switches to the normal layout with no code change.

### 1.10 SEO for the writing pages

| Page | Title | Description |
|---|---|---|
| `/writing` | Writing \| Ajaypal Singh | Essays, notes, books and ideas by Ajaypal Singh on building Ojaven, AI, SaaS, products and entrepreneurship. |
| `/writing/essays` | Essays \| Ajaypal Singh | Long-form essays by Ajaypal Singh on building products, SaaS, AI and growing a business. |
| `/writing/notes` | Notes \| Ajaypal Singh | Short notes by Ajaypal Singh: quick thoughts and lessons on building, products and business. |
| `/writing/books` | Books \| Ajaypal Singh | Books written by Ajaypal Singh. |
| `/writing/ideas` | Ideas \| Ajaypal Singh | Ideas Ajaypal Singh is exploring, from early thinking to testing. |

**Search engine rules for the section pages**
- **While a section is empty** ("Coming soon"): show it, but add `<meta name="robots" content="noindex, follow">` and leave it out of the sitemap. Thin empty pages can hurt the site.
- **Once it has entries:** switch it to `index` and add it to the sitemap automatically.

**Schema**
- `/writing`: `CollectionPage` + `BreadcrumbList`
- Each section page: `CollectionPage`, with `ItemList` pointing to its items
- Essays and notes: `BlogPosting`
- Books: `Book`
- Ideas: no item schema

**Breadcrumbs:** Home / Writing / [Section] / [Item]

**Internal links**
- Each item links back to its section page.
- The homepage "Writing" card lists the 3 latest items with their type and links to `/writing`.

## 2. Single note (`/writing/[slug]`)

### 2.1 Reading progress
- A 3px cobalt bar fixed at the very top of the screen, above the header.
- It fills from left to right as the reader scrolls. Use `useScroll().scrollYProgress` with `scaleX`.

### 2.2 Top of the page
Layout: 12-column grid, 150px top padding.

**Breadcrumb row**
- Left: `Home / Writing / [Section] / [Title]`, using an `<ol>` and `aria-current="page"` on the last item.
- Right: "All notes" with a back arrow. On hover the arrow moves 6px left.

**Main row** (72px below)
- **Left, 8 columns:**
  - A meta line: topic chip (links to `/writing?topic=…`) · date (`<time datetime>`) · read time.
  - H1 at 124px, weight 500, line-height 0.92, letter-spacing -0.065em. Each line rises from a mask with a 110ms stagger.
- **Right, 4 columns:**
  - The summary, 24px.
  - A divider line.
  - The author row: a 48px round photo, "Ajaypal Singh" linking to `/about`, and "Founder and builder" underneath.

### 2.3 Cover
- A full-width cobalt panel, 560px tall with a 32px radius.
- **Contents:**
  - concentric circles
  - the inverted logo mark (white circle) at the top left
  - the note title at 88px, bottom left
  - "ajaypalsingh.in / notes" at the bottom right
- **Entrance:** a clip-path wipe from the top, 1.4s.
- **Share image:** generate the note's OG image (1200×630) with this same design using `next/og`. Frontmatter can set `cover` to use a real image instead.

### 2.4 Body layout
The body sits 100px below the cover, on the same 12-column grid.

**Left, columns 1–3: sticky "On this page" (top 130px)**
- A list of all H2s with a 1px left line.
- **Active section:** the heading whose top has passed 35% of the viewport.
  - It turns navy, shifts 16px right and shows a 7px cobalt dot on the line.
- **Below the list:** a small progress ring and a "[n] min left" label, which changes to "Finished" at the end.
- **Generating the list:** build it from the MDX headings, for example with `rehype-slug` and a small heading extractor.

**Centre, columns 4–9: the text**

| Element | Style |
|---|---|
| First paragraph | 25px, navy |
| Paragraphs | 21px, line-height 1.72, `#262B4A`, 28px gap |
| H2 | 42px, weight 500, letter-spacing -0.045em, 76px space above, `scroll-margin-top: 120px` |
| Heading link icon | Shows to the left of an H2 on hover. Links to `#id`. |
| Links in the text | Cobalt with a light underline. A solid cobalt underline draws in on hover. |
| Pull quote (`<blockquote>`) | A cobalt quote mark, then 44px text, 56px space above and below |
| Image (`<figure>`) | 24px radius, with a caption at 14px in slate |
| Callout box | Navy box, 22px radius: a small label, a 22px line and a white "Follow the build" button. Used for the Ojaven status line. |
| Interactive graphic (optional) | The "tools pile" in the first note: four cards that spread apart on hover. It's a custom MDX component, `<ToolPile />`. |

**End of the text**
- Topic tags on the left and "Published [date]" on the right, with a line above.
- If the note was updated, also show "Updated [date]".

**Right, columns 11–12: sticky share buttons (top 130px)**
- Three 48px round buttons:
  - **Copy link:** copies the URL and shows a "Link copied" toast.
  - **Share on X:** `https://x.com/intent/post?url=…&text=…`
  - **Share on LinkedIn:** `https://www.linkedin.com/sharing/share-offsite/?url=…`
- On hover, a button fills navy and lifts 2px.

### 2.5 Author box
- A cobalt panel with a 32px radius and circles in the background.
- **Left:** a 140px round photo.
- **Centre:**
  - "Written by"
  - "Ajaypal Singh" at 48px
  - "Founder and builder. I build products and the companies behind them. Currently building Ojaven."
- **Right:** two stacked buttons.
  - **About me:** white, links to `/about`.
  - **Say hello:** outlined, links to `/contact`.
- The button labels roll up on hover.

### 2.6 Keep reading
- **Heading:** "Keep reading" at 64px, with an "All notes" link on the right and a line below.
- **Two large cards** (28px radius, `#ECEEF8`, at least 300px tall):
  - **Card 1:** the previous note, labelled "Previous note".
  - **Card 2:** a note with the same topic, or the next newest, labelled "More notes".
- **Each card shows:** the label and an arrow at the top, then the title (44px), topic chip, date and read time.
- **On hover:** the card lifts 8px and turns cobalt, the text turns white and the arrow rotates.

### 2.7 Footer
- The footer is revealed from underneath as on every other page.

### 2.8 MDX frontmatter

```yaml
title: "Why I Am Building Ojaven"
description: "Every product starts with a friction point that refuses to go away. Here is the problem behind Ojaven, and why I chose to build it."
date: "2026-09-01"
updated: ""            # optional
topic: "Building Ojaven"
tags: ["Building Ojaven", "Entrepreneurship"]
cover: ""              # optional, otherwise generated
```

**Read time:** work it out from the word count at 220 words per minute, rounded up.

### 2.9 SEO for each note
Full details are in `SITE_CONTENT_AND_SEO.md` sections 3.6, 4.5 and 5.
- **Title:** `[Note title] | Ajaypal Singh`
- **Description:** the frontmatter `description`
- **Canonical:** `/writing/[slug]`
- **Open Graph:**
  - `type: article`
  - `publishedTime` and `modifiedTime`
  - the generated cover image
- **Schema:** `BlogPosting` + `BreadcrumbList`
  - author and publisher point to `https://ajaypalsingh.in/#person`
- **Internal links:**
  - the byline links to `/about`
  - at least one link inside the text, for example to `/ojaven`
  - the author box links to `/about` and `/contact`
  - two related notes
  - the breadcrumb links to `/writing`

### 2.10 Mobile (below 768px)
- The "On this page" list becomes a collapsible "On this page" button under the top section.
- The share buttons move to a row under the text.
- H1 is 56px.
- The cover is 320px tall with a 40px title.
- Paragraphs are 18px with line-height 1.7.
- H2s are 30px.
- Keep Reading cards stack into one column.
- The author box stacks: photo, then text, then buttons.

### 2.11 Accessibility and performance
- Wrap the note in `<article>`, with one H1 and the H2s in order.
- The table of contents is a `<nav aria-label="On this page">`.
- Decorative graphics use `aria-hidden`.
- The reading progress bar is decorative (`aria-hidden`).
- Respect reduced motion: no wipes, no heading rise, no pile spread.
- Build note pages statically (`generateStaticParams`) so the text is in the HTML.
