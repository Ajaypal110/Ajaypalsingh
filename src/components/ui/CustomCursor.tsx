'use client'

import { useEffect, useRef } from 'react'
import { useReducedMotion } from '@/hooks/useReducedMotion'

export function CustomCursor() {
  const prefersReduced = useReducedMotion()
  const curRef = useRef<HTMLDivElement>(null)
  const dotRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (prefersReduced) return
    const isCoarse = window.matchMedia && window.matchMedia('(pointer: coarse)').matches
    if (isCoarse) return

    let tx = -100
    let ty = -100
    let cx = -100
    let cy = -100
    let rafId: number

    const onMove = (e: MouseEvent) => {
      tx = e.clientX
      ty = e.clientY
      const hit = e.target && (e.target as Element).closest ? (e.target as Element).closest('a, button, [role="button"]') : null
      if (dotRef.current) {
        if (hit) {
          dotRef.current.classList.add('big')
        } else {
          dotRef.current.classList.remove('big')
        }
      }
    }

    window.addEventListener('mousemove', onMove, { passive: true })

    const loop = () => {
      cx += (tx - cx) * 0.18
      cy += (ty - cy) * 0.18
      if (curRef.current) {
        curRef.current.style.transform = `translate3d(${cx.toFixed(1)}px, ${cy.toFixed(1)}px, 0)`
      }
      rafId = requestAnimationFrame(loop)
    }

    loop()

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(rafId)
    }
  }, [prefersReduced])

  if (prefersReduced) return null

  return (
    <div ref={curRef} className="cur" aria-hidden="true">
      <div ref={dotRef} className="cur-dot" />
    </div>
  )
}
