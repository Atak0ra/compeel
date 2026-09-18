'use client'

import { useState, FormEvent } from 'react'

type Status = 'idle' | 'loading' | 'success' | 'error'

export default function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<Status>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()
    setStatus('loading')
    setErrorMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
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
      <div className="rounded border border-accent/30 bg-surface p-6">
        <p className="text-sm text-accent-deep font-medium mb-1">Message envoyé.</p>
        <p className="text-sm text-muted">On vous répond directement à {email}.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md space-y-4">
      <div>
        <label htmlFor="name" className="mb-1.5 block text-xs uppercase tracking-wider text-muted">
          Nom
        </label>
        <input
          id="name"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full rounded border border-border bg-background px-3 py-2 text-sm text-foreground outline-none transition-colors focus:border-accent"
        />
      </div>

      <div>
        <label htmlFor="email" className="mb-1.5 block text-xs uppercase tracking-wider text-muted">
          Email
        </label>
        <input
          id="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded border border-border bg-background px-3 py-2 text-sm text-foreground outline-none transition-colors focus:border-accent"
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-xs uppercase tracking-wider text-muted">
          Message
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full rounded border border-border bg-background px-3 py-2 text-sm text-foreground outline-none transition-colors focus:border-accent resize-none"
        />
      </div>

      {status === 'error' && (
        <p className="text-sm text-red-600">{errorMessage}</p>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="inline-flex items-center gap-2 rounded border border-accent bg-accent px-6 py-3 text-sm text-background transition-colors hover:border-accent-deep hover:bg-accent-deep disabled:opacity-50"
      >
        {status === 'loading' ? 'Envoi...' : 'Envoyer'}
      </button>
    </form>
  )
}
