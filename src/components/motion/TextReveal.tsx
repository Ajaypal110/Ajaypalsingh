'use client'

import { motion, useInView } from 'motion/react'
import { useRef } from 'react'
import { useReducedMotion } from '@/hooks/useReducedMotion'

interface TextRevealProps {
  text: string
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span'
  className?: string
  delay?: number
  stagger?: number
  splitBy?: 'word' | 'char'
}

export function TextReveal({
  text,
  as: Tag = 'h2',
  className,
  delay = 0,
  stagger: staggerInterval = 0.06,
  splitBy = 'word',
}: TextRevealProps) {
  const ref = useRef<HTMLElement>(null)
  const prefersReduced = useReducedMotion()
  const isInView = useInView(ref, { once: true, margin: '-10% 0px' })

  const units = splitBy === 'word' ? text.split(' ') : text.split('')

  if (prefersReduced) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.2, delay }}
      >
        <Tag ref={ref as React.RefObject<HTMLElement & HTMLHeadingElement & HTMLParagraphElement>} className={className}>
          {text}
        </Tag>
      </motion.div>
    )
  }

  return (
    <Tag
      // @ts-expect-error dynamic tag ref typing
      ref={ref}
      className={className}
      aria-label={text}
      style={{ display: 'block' }}
    >
      {units.map((unit, i) => (
        <span
          key={i}
          style={{ display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom' }}
        >
          <motion.span
            style={{ display: 'inline-block' }}
            initial={{ y: '110%', opacity: 0 }}
            animate={
              isInView
                ? { y: '0%', opacity: 1 }
                : { y: '110%', opacity: 0 }
            }
            transition={{
              duration: 0.7,
              delay: delay + i * staggerInterval,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {unit}
            {splitBy === 'word' && i < units.length - 1 ? '\u00A0' : ''}
          </motion.span>
        </span>
      ))}
    </Tag>
  )
}
