import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null)

  const name = typeof body?.name === 'string' ? body.name.trim() : ''
  const email = typeof body?.email === 'string' ? body.email.trim() : ''
  const message = typeof body?.message === 'string' ? body.message.trim() : ''

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Merci de remplir tous les champs.' }, { status: 400 })
  }
  if (name.length > 200 || email.length > 200 || message.length > 5000) {
    return NextResponse.json({ error: 'Un champ dépasse la longueur autorisée.' }, { status: 400 })
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: 'Adresse email invalide.' }, { status: 400 })
  }

  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json({ error: 'Formulaire non configuré.' }, { status: 500 })
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY)
    const { error } = await resend.emails.send({
      from: 'Compeel <contact@compeel.com>',
      to: 'williams.stanley.desouza@gmail.com',
      replyTo: email,
      subject: `Nouveau message de ${name} · compeel.com`,
      text: `${message}\n\n---\n${name}\n${email}`,
    })

    if (error) {
      return NextResponse.json({ error: 'Envoi impossible pour le moment.' }, { status: 502 })
    }

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ error: 'Envoi impossible pour le moment.' }, { status: 500 })
  }
}
