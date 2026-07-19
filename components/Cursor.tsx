'use client'
import { useEffect, useState, useRef } from 'react'

export default function Cursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [trail, setTrail] = useState<{ x: number; y: number; id: number }[]>([])
  const [isTouch, setIsTouch] = useState(false)
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    if ('ontouchstart' in window) {
      setIsTouch(true)
      return
    }

    const onMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY })

      const id = Date.now() + Math.random()
      setTrail(prev => [...prev.slice(-5), { x: e.clientX, y: e.clientY, id }])

      // self-remove this specific dot after 400ms, regardless of future movement
      setTimeout(() => {
        setTrail(prev => prev.filter(t => t.id !== id))
      }, 400)
    }

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      setIsHovering(!!target.closest('a, button, [role="button"]'))
    }

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseover', onOver)
    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseover', onOver)
    }
  }, [])

  if (isTouch) return null

  return (
    <>
      {trail.map(t => (
        <div
          key={t.id}
          style={{
            position: 'fixed',
            left: t.x - 2,
            top: t.y - 2,
            width: 4,
            height: 4,
            background: 'var(--accent)',
            borderRadius: '50%',
            pointerEvents: 'none',
            zIndex: 9998,
            opacity: 0.25,
            transition: 'opacity 0.4s ease',
          }}
        />
      ))}
      <div
        style={{
          position: 'fixed',
          left: pos.x - (isHovering ? 16 : 6),
          top: pos.y - (isHovering ? 16 : 6),
          width: isHovering ? 32 : 12,
          height: isHovering ? 32 : 12,
          border: '1.5px solid var(--accent)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9999,
          transition: 'width 0.2s ease, height 0.2s ease, left 0.2s ease, top 0.2s ease, background 0.2s ease',
          background: isHovering ? 'transparent' : 'var(--accent)',
        }}
      />
    </>
  )
}
