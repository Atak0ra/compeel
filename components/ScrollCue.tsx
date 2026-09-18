'use client'

import { ChevronDown } from 'lucide-react'

export default function ScrollCue() {
  function handleClick() {
    window.scrollBy({ top: window.innerHeight - 61, behavior: 'smooth' })
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label="Défiler vers le bas"
      className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted transition-colors hover:text-accent motion-safe:animate-bounce"
    >
      <ChevronDown size={20} strokeWidth={1.5} />
    </button>
  )
}
