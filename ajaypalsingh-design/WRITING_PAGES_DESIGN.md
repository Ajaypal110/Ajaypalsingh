# Writing pages: Design Spec (Notes index and Single note)

This spec covers the notes list and the individual note page. It follows `DESIGN_HANDOFF.md` (tokens, header, footer, motion rules) and `SITE_CONTENT_AND_SEO.md` (titles, schema, internal links).

**Design files:** `design-files/Writing.dc.html` and `design-files/Note.dc.html`. These are reference mockups only, so rebuild them in Next.js with `motion/react`.

---

## 1. Notes index (`/writing`)

### 1.1 Hero
- Label: "Writing"
- H1: "Notes" (260px, weight 500, letter-spacing -0.07em)
- Intro on the right (28px): "My notebook on the internet. Thinking out loud about building, AI, software and business."

**Topic filter buttons**
- Topics: All · Building Ojaven · AI · SaaS · Product · Entrepreneurship · Lessons
- Buttons are 44px tall pills.
- The active one is solid navy `#0F1330` with white text. The others have a `#DADCE8` border.
- Use `aria-pressed`.
- Filtering happens on the page, and the selection is also kept in the URL as `?topic=ai`, so a filtered link can be shared.

### 1.2 Latest note (shown only when the filter is "All")
- A cobalt card, 32px radius, at least 400px tall, with the rotating dashed orbit graphic.
- **Top row:** a "Latest" pill, then topic · date · read time.
- **Title:** 96px, max-width 900px.
- **Bottom row:** summary (22px, lavender-white) on the left, and a round 72px white button with an arrow on the right.
- **On hover:** the card scales to 0.99, the title slides 16px right and the arrow rotates 45°.
- The whole card is one link to the note.

### 1.3 Notes list
- **Heading:** "All notes", or the topic name when filtered. A note count sits on the right ("3 notes").
- **Each row** is one `<a>` spanning 12 columns:

| Columns | Content |
|---|---|
| 2 | Date |
| 6 | Title, 40px |
| 2 | Topic chip |
| 2 | Read time and a 44px round arrow button |

- **On hover:**
  - the title turns cobalt
  - the round button fills cobalt and the arrow rotates 45°
- **Which rows show:**
  - When "All" is selected, list every note except the latest (it's already in the card).
  - When a topic is selected, list every note in that topic.
- **Empty topic:** "No notes on [topic] yet." and "They're coming. Meanwhile, browse all notes."

---

## 2. Single note (`/writing/[slug]`)

### 2.1 Reading progress
- A 3px cobalt bar fixed at the very top of the screen, above the header.
- It fills from left to right as the reader scrolls. Use `useScroll().scrollYProgress` with `scaleX`.

### 2.2 Top of the page
Layout: 12-column grid, 150px top padding.

**Breadcrumb row**
- Left: `Home / Notes / [Note title]`, using an `<ol>` and `aria-current="page"` on the last item.
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
