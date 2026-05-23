import type { VercelRequest, VercelResponse } from '@vercel/node'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') return res.status(405).end()

  const { name, email, subject, message } = req.body as {
    name: string
    email: string
    subject: string
    message: string
  }

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: 'Todos os campos são obrigatórios.' })
  }

  try {
    await resend.emails.send({
      from: 'Portfolio <onboarding@resend.dev>',
      to: 'luiszarbielli@outlook.com',
      replyTo: email,
      subject: `[Portfólio] ${subject}`,
      html: `
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Assunto:</strong> ${subject}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    })

    res.status(200).json({ ok: true })
  } catch {
    res.status(500).json({ error: 'Falha ao enviar mensagem. Tente novamente.' })
  }
}
