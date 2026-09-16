'use client'

import { motion, useInView, type Variants } from 'motion/react'
import { useRef } from 'react'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { cn } from '@/lib/utils'

type Direction = 'up' | 'down' | 'left' | 'right' | 'none'

interface RevealProps {
  children: React.ReactNode
  className?: string
  direction?: Direction
  delay?: number
  duration?: number
  once?: boolean
}

const getVariants = (direction: Direction, prefersReduced: boolean): Variants => {
  if (prefersReduced || direction === 'none') {
    return {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { duration: 0.2 } },
    }
  }

  const offsets: Record<Direction, { x?: number; y?: number }> = {
    up: { y: 24 },
    down: { y: -24 },
    left: { x: -24 },
    right: { x: 24 },
    none: {},
  }

  const offset = offsets[direction]

  return {
    hidden: { opacity: 0, ...offset },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  }
}

export function Reveal({
  children,
  className,
  direction = 'up',
  delay = 0,
  duration: _duration,
  once = true,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const prefersReduced = useReducedMotion()
  const isInView = useInView(ref, { once, margin: '-10% 0px' })

  const variants = getVariants(direction, prefersReduced)

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className={cn(className)}
      style={delay ? { transitionDelay: `${delay}s` } : undefined}
      custom={delay}
      transition={delay ? { delay } : undefined}
    >
      {children}
    </motion.div>
  )
}
