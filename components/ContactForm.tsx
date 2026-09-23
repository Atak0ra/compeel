'use client'

import { useState, FormEvent } from 'react'
import { Send } from 'lucide-react'

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
      <div role="status" className="py-6">
        <p className="text-base text-accent-deep font-medium mb-1">Message envoyé.</p>
        <p className="text-base text-muted">On vous répond directement à {email}.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} aria-label="Contacter Compeel" aria-busy={status === 'loading'} className="w-full max-w-xl space-y-5">
      <div>
        <label htmlFor="name" className="mb-2 block text-base text-muted">
          Nom
        </label>
        <input
          id="name"
          type="text"
          autoComplete="name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full rounded border border-border bg-white px-3 py-3 text-base text-foreground focus:border-accent-deep"
        />
      </div>

      <div>
        <label htmlFor="email" className="mb-2 block text-base text-muted">
          Email
        </label>
        <input
          id="email"
          type="email"
          autoComplete="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded border border-border bg-white px-3 py-3 text-base text-foreground focus:border-accent-deep"
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-base text-muted">
          Message
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full rounded border border-border bg-white px-3 py-3 text-base text-foreground focus:border-accent-deep"
        />
      </div>

      {status === 'error' && (
        <p role="alert" className="text-base text-red-700">{errorMessage}</p>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="button-primary disabled:cursor-wait disabled:opacity-60"
      >
        <Send size={17} aria-hidden="true" />
        {status === 'loading' ? 'Envoi...' : 'Envoyer'}
      </button>
    </form>
  )
}
