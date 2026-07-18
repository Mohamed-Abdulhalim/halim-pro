'use client'
import { useRef, useState, ReactNode } from 'react'

export default function MagneticButton({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLAnchorElement>(null)
  const [pos, setPos] = useState({ x: 0, y: 0 })

  const onMove = (e: React.MouseEvent) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const x = (e.clientX - rect.left - rect.width / 2) * 0.3
    const y = (e.clientY - rect.top - rect.height / 2) * 0.3
    setPos({ x, y })
  }

  const onLeave = () => setPos({ x: 0, y: 0 })

  return (
    <a
      ref={ref}
      className={className}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{
        display: 'inline-block',
        transform: `translate(${pos.x}px, ${pos.y}px)`,
        transition: 'transform 0.2s cubic-bezier(0.22, 1, 0.36, 1)',
      }}
    >
      {children}
    </a>
  )
}
