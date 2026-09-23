import { ChevronDown } from 'lucide-react'

export default function ScrollCue() {
  return (
    <a
      href="#references"
      aria-label="Découvrir les références"
      className="flex h-11 w-11 shrink-0 items-center justify-center self-center text-accent-deep transition-colors hover:text-accent"
    >
      <ChevronDown size={22} strokeWidth={1.5} aria-hidden="true" className="scroll-cue-icon" />
    </a>
  )
}
