'use client'

import { useEffect, useRef, useState } from 'react'

export default function FadeIn({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 }
    )
    observer.observe(node)

    // Filet de sécurité : le texte ne doit jamais rester invisible si l'observer ne se déclenche pas.
    const fallback = setTimeout(() => setVisible(true), 1500)

    return () => {
      observer.disconnect()
      clearTimeout(fallback)
    }
  }, [])

  return (
    <div className={`fade-in ${visible ? 'fade-in-visible' : ''} ${className}`} ref={ref}>
      {children}
    </div>
  )
}
