'use client'

import { useState, FormEvent } from 'react'
import { Send } from 'lucide-react'

type Status = 'idle' | 'loading' | 'success' | 'error'

const lightInput = 'w-full rounded border border-metal bg-background px-3 py-3 text-base text-foreground focus:border-accent-deep'
const darkInput = 'w-full rounded border border-slate-600 bg-transparent px-3 py-3 text-base text-white placeholder:text-slate-500 focus:border-white focus:outline-none focus:ring-1 focus:ring-white'

export default function BetaForm({ dark = false }: { dark?: boolean }) {
  const inputClass = dark ? darkInput : lightInput
  const labelClass = `mb-2 block text-base ${dark ? 'text-slate-300' : 'text-muted'}`
  const buttonClass = dark
    ? 'inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-sm bg-white px-5 py-3 text-base font-medium text-[#0B1220] transition-colors hover:bg-slate-200 disabled:cursor-wait disabled:opacity-60'
    : 'button-primary disabled:cursor-wait disabled:opacity-60'
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [organization, setOrganization] = useState('')
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<Status>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()
    setStatus('loading')
    setErrorMessage('')

    try {
      const response = await fetch('/api/beta', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ firstName, lastName, organization, email }),
      })
      const data = await response.json()

      if (!response.ok) {
        setErrorMessage(data.error ?? 'Envoi impossible pour le moment.')
        setStatus('error')
        return
      }

      setStatus('success')
    } catch {
      setErrorMessage('Envoi impossible. Vérifiez votre connexion et réessayez.')
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div role="status" className="py-6">
        <p className={`text-base font-medium mb-1 ${dark ? 'text-white' : 'text-accent-deep'}`}>Demande envoyée.</p>
        <p className={`text-base ${dark ? 'text-slate-300' : 'text-muted'}`}>On revient vers vous à {email} dès l&apos;ouverture de votre accès.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} aria-label="Demander un accès bêta DameJustice" aria-busy={status === 'loading'} className="w-full space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="beta-firstName" className={labelClass}>Prénom</label>
          <input id="beta-firstName" type="text" autoComplete="given-name" required value={firstName} onChange={(e) => setFirstName(e.target.value)} className={inputClass} />
        </div>
        <div>
          <label htmlFor="beta-lastName" className={labelClass}>Nom</label>
          <input id="beta-lastName" type="text" autoComplete="family-name" required value={lastName} onChange={(e) => setLastName(e.target.value)} className={inputClass} />
        </div>
      </div>

      <div>
        <label htmlFor="beta-organization" className={labelClass}>Organisation</label>
        <input id="beta-organization" type="text" autoComplete="organization" required value={organization} onChange={(e) => setOrganization(e.target.value)} className={inputClass} />
      </div>

      <div>
        <label htmlFor="beta-email" className={labelClass}>Email professionnel</label>
        <input id="beta-email" type="email" autoComplete="email" required value={email} onChange={(e) => setEmail(e.target.value)} className={inputClass} />
      </div>

      {status === 'error' && (
        <p role="alert" className={`border-l-2 border-metal pl-3 text-base ${dark ? 'text-white' : 'text-foreground'}`}>{errorMessage}</p>
      )}

      <button type="submit" disabled={status === 'loading'} className={buttonClass}>
        <Send size={17} aria-hidden="true" />
        {status === 'loading' ? 'Envoi...' : 'Demander un accès bêta'}
      </button>
    </form>
  )
}
