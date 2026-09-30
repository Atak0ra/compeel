import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const escapeHtml = (value: string) =>
  value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

const field = (body: unknown, key: string) => {
  const value = (body as Record<string, unknown> | null)?.[key]
  return typeof value === 'string' ? value.trim() : ''
}

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null)

  const firstName = field(body, 'firstName')
  const lastName = field(body, 'lastName')
  const organization = field(body, 'organization')
  const email = field(body, 'email')

  if (!firstName || !lastName || !organization || !email) {
    return NextResponse.json({ error: 'Merci de remplir tous les champs.' }, { status: 400 })
  }
  if ([firstName, lastName, organization, email].some((value) => value.length > 200)) {
    return NextResponse.json({ error: 'Un champ dépasse la longueur autorisée.' }, { status: 400 })
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: 'Adresse email invalide.' }, { status: 400 })
  }

  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json({ error: 'Formulaire non configuré.' }, { status: 500 })
  }

  const rows: [string, string][] = [
    ['Prénom', firstName],
    ['Nom', lastName],
    ['Organisation / Cabinet', organization],
    ['Email', email],
  ]

  try {
    const resend = new Resend(process.env.RESEND_API_KEY)
    const { error } = await resend.emails.send({
      from: 'Compeel <contact@compeel.com>',
      to: 'williams.stanley.desouza@gmail.com',
      replyTo: email,
      subject: `Demande d'accès bêta DameJustice · ${firstName} ${lastName}`,
      text: `Nouvelle demande d'accès bêta DameJustice\n\n${rows.map(([label, value]) => `${label} : ${value}`).join('\n')}`,
      html: `<h2>Nouvelle demande d'accès bêta DameJustice</h2><table cellpadding="6" style="border-collapse:collapse">${rows
        .map(([label, value]) => `<tr><td><strong>${label}</strong></td><td>${escapeHtml(value)}</td></tr>`)
        .join('')}</table>`,
    })

    if (error) {
      return NextResponse.json({ error: 'Envoi impossible pour le moment.' }, { status: 502 })
    }

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ error: 'Envoi impossible pour le moment.' }, { status: 500 })
  }
}
