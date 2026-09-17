export interface Article {
  slug: string
  title: string
  excerpt: string
  date: string
  category: string
  readingTime: string
  content: string[]
}

export const articleCategories = [
  'All',
  'Building Ojaven',
  'AI',
  'SaaS',
  'Product',
  'Entrepreneurship',
  'Lessons',
] as const

export const articles: Article[] = [
  {
    slug: 'why-i-am-building-ojaven',
    title: 'Why I Am Building Ojaven',
    excerpt:
      'Every product starts with a friction point that refuses to go away. Here is the problem behind Ojaven, and why I chose to build it.',
    date: '2026-09-01',
    category: 'Building Ojaven',
    readingTime: '5 min read',
    content: [
      'Almost every digital agency follows a familiar pattern: they start small with two or three talented people delivering great client work. Early on, communication is effortless. A group chat and a couple of shared documents are enough.',
      'As the agency takes on more clients and adds team members, the operational load explodes. Suddenly, you have one tool for client messaging, another for tasks, a third for file approvals, and another for invoicing. Instead of doing the craft they love, founders spend hours acting as human bridges between disconnected SaaS dashboards.',
      'I kept observing this breakdown repeatedly. Most software built for teams is either too generic (like standard project management boards that know nothing about client dynamics) or overly cumbersome enterprise ERPs requiring weeks of onboarding.',
      'Ojaven is my deliberate attempt to address this gap. Rather than stacking more complexity, the vision is to design a unified operational core specifically tailored for modern agency workflows.',
      'It is not meant to be an all-in-one monster that claims to do everything poorly. It is meant to be a focused platform where agency owners and team leads can see work, communicate with clients with dignity, and keep projects moving forward without friction.',
      'Building Ojaven is an intensive, long-term endeavor. That is why I have scheduled our full release for July 2027. Taking the time to build the foundation properly matters far more than rushing an incomplete product to market.',
    ],
  },
  {
    slug: 'what-building-teaches-you',
    title: 'What Building Software Actually Teaches You',
    excerpt:
      'The lessons that only come from putting something into the world — not from reading about it, watching tutorials, or planning in a notebook.',
    date: '2026-08-15',
    category: 'Lessons',
    readingTime: '6 min read',
    content: [
      'You can read hundreds of essays on product design and clean architecture, but nothing compares to the education you receive when you deploy software to actual users.',
      'When an idea exists solely in your head or in a design mock, it is pristine. There are no edge cases, no network drops, no unexpected user behaviors. Everything functions harmoniously.',
      'The moment you write the first line of code and ship a build, reality intervenes. You realize that a feature you thought was essential is completely ignored, while a secondary detail causes unexpected bottlenecks. This friction is where real learning occurs.',
      'Across every piece of software I have designed and deployed, the single most valuable lesson has been the virtue of simplicity.',
      'Complexity is effortless to generate in software. It creeps into databases, API contracts, and UI components. Simplicity, by contrast, requires intense discipline and ruthless pruning. Every line of code you choose not to write is a bug you will never have to debug.',
    ],
  },
  {
    slug: 'thinking-about-saas-in-2026',
    title: 'Thinking About SaaS in 2026',
    excerpt:
      'Software has changed dramatically. Here are some observations from someone actively architecting a product today.',
    date: '2026-07-20',
    category: 'SaaS',
    readingTime: '7 min read',
    content: [
      'The era of bloated software with hundreds of dormant features is rapidly waning. Users are fatigued by dashboards with endless menus and high monthly subscriptions for tools they only use at 10% capacity.',
      'In 2026, software value is migrating toward precision: products that do a specific, vital job with exceptional speed, clarity, and reliability.',
      'Another shift is the role of intelligence in workflows. Automation should not mean throwing an indiscriminate AI chatbot onto every screen. True leverage comes from ambient intelligence—systems that quietly handle classification, summarization, and routing behind the scenes without demanding the user’s cognitive attention.',
      'For independent founders and builders, this era offers a tremendous advantage. Small, focused teams who care deeply about craft can outmaneuver bloated legacy tools by delivering products that feel fast, respectful, and thoughtfully engineered.',
      'This philosophy underpins how I think about every product I touch: build what is essential, polish it until it feels seamless, and respect the people who rely on it.',
    ],
  },
]
