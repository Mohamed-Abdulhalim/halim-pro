
'use client'
import { useEffect, useState } from 'react'

export default function Cursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [trail, setTrail] = useState<{ x: number; y: number; id: number }[]>([])

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY })
      setTrail(prev => [...prev.slice(-5), { x: e.clientX, y: e.clientY, id: Date.now() }])
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  // Hide on touch devices
  if (typeof window !== 'undefined' && 'ontouchstart' in window) return null

  return (
    <>
      <div style={{
        position: 'fixed',
        left: pos.x - 4,
        top: pos.y - 4,
        width: 8,
        height: 8,
        background: 'var(--accent)',
        borderRadius: '50%',
        pointerEvents: 'none',
        zIndex: 9999,
        mixBlendMode: 'difference',
        transition: 'transform 0.1s ease',
      }} />
      {trail.map((t, i) => (
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
            opacity: (i + 1) / trail.length * 0.3,
            transition: 'opacity 0.3s ease',
          }}
        />
      ))}
    </>
  )
}
