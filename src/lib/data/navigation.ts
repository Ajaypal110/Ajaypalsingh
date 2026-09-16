export interface NavLink {
  label: string
  href: string
}

export const navLinks: NavLink[] = [
  { label: 'About', href: '/about' },
  { label: 'Ojaven', href: '/ojaven' },
  { label: 'Builds', href: '/builds' },
  { label: 'Writing', href: '/writing' },
  { label: 'Contact', href: '/contact' },
]
