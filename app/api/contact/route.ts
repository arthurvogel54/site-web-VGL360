import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const { name, email, message } = await req.json()

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Champs manquants' }, { status: 400 })
  }

  const RESEND_API_KEY = process.env.RESEND_API_KEY
  if (!RESEND_API_KEY) {
    return NextResponse.json({ error: 'Configuration manquante' }, { status: 500 })
  }

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${RESEND_API_KEY}`,
    },
    body: JSON.stringify({
      from: 'VGL360 <onboarding@resend.dev>',
      to: 'contact@vgl360.fr',
      subject: `Nouveau message de ${name}`,
      html: `
        <h2>Nouveau message depuis vgl360.fr</h2>
        <p><strong>Nom :</strong> ${name}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Message :</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
      reply_to: email,
    }),
  })

  if (!res.ok) {
    return NextResponse.json({ error: 'Erreur envoi' }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}
