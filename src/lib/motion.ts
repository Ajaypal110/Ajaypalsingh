import type { Variants, Transition } from 'motion/react'

// ============================================================
// SPRING PRESETS
// ============================================================

export const springs = {
  gentle: { type: 'spring', stiffness: 120, damping: 20, mass: 1 },
  snappy: { type: 'spring', stiffness: 300, damping: 30, mass: 0.8 },
  bouncy: { type: 'spring', stiffness: 400, damping: 25, mass: 0.5 },
} satisfies Record<string, Transition>

// ============================================================
// DURATION PRESETS (seconds)
// ============================================================

export const duration = {
  fast: 0.2,
  normal: 0.4,
  slow: 0.7,
  glacial: 1.2,
}

// ============================================================
// STAGGER INTERVALS (seconds)
// ============================================================

export const stagger = {
  tight: 0.03,
  normal: 0.06,
  wide: 0.12,
  section: 0.2,
}

// ============================================================
// EASING
// ============================================================

export const easing = {
  outExpo: [0.16, 1, 0.3, 1] as const,
  inOutCubic: [0.645, 0.045, 0.355, 1.0] as const,
  outCubic: [0.33, 1, 0.68, 1] as const,
}

// ============================================================
// ANIMATION VARIANTS
// ============================================================

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: duration.normal, ease: easing.outExpo },
  },
}

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: duration.normal, ease: easing.outCubic },
  },
}

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: duration.normal, ease: easing.outExpo },
  },
}

export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: duration.normal, ease: easing.outExpo },
  },
}

export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: duration.normal, ease: easing.outExpo },
  },
}

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: stagger.normal,
      delayChildren: 0,
    },
  },
}

export const staggerContainerWide: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: stagger.wide,
      delayChildren: 0,
    },
  },
}

// Hero entrance — longer, more dramatic
export const heroTitle: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: duration.glacial, ease: easing.outExpo },
  },
}

// Reduced motion variant — opacity only, fast
export function getReducedVariant(variant: Variants): Variants {
  return {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: duration.fast },
    },
  }
}
