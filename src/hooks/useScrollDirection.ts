'use client'

import { useEffect, useState } from 'react'

/**
 * Returns 'up' or 'down' based on scroll direction.
 * Used for hiding/showing the navigation on scroll.
 */
export function useScrollDirection(): 'up' | 'down' {
  const [direction, setDirection] = useState<'up' | 'down'>('up')
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const threshold = 10

    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (Math.abs(currentScrollY - lastScrollY) < threshold) return

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setDirection('down')
      } else {
        setDirection('up')
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return direction
}
