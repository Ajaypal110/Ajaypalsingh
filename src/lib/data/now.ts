// What I am focused on right now
// Single source of truth for current pursuits

export interface FocusItem {
  category: 'Building' | 'Learning' | 'Exploring' | 'Thinking'
  label: string
  detail: string
  tag?: string
}

export const nowData = {
  lastUpdated: 'September 2026',
  items: [
    {
      category: 'Building',
      label: 'Ojaven',
      detail: 'Architecting the core data model, operational pipelines, and interface system for the 10 July 2027 launch.',
      tag: 'Primary Venture',
    },
    {
      category: 'Learning',
      label: 'AI & Systems Leverage',
      detail: 'Investigating how high-leverage founders use AI agents and automated reasoning to build software at 10x velocity.',
      tag: 'Technical Depth',
    },
    {
      category: 'Exploring',
      label: 'Product Distribution',
      detail: 'Studying how niche B2B tools build lasting organic demand without relying on traditional paid acquisition traps.',
      tag: 'Strategy',
    },
    {
      category: 'Thinking',
      label: 'Compounding & Craft',
      detail: 'Focusing on long-term conviction over short-term noise. Building things designed to stay useful for years.',
      tag: 'Philosophy',
    },
  ] as FocusItem[],
}
