import type { VercelRequest, VercelResponse } from '@vercel/node'
import Groq from 'groq-sdk'
import { SYSTEM_PROMPT } from './context.js'

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY })

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') return res.status(405).end()

  const { messages } = req.body as {
    messages: Array<{ role: 'user' | 'assistant'; content: string }>
  }

  if (!Array.isArray(messages) || messages.length === 0) {
    return res.status(400).json({ error: 'Invalid messages' })
  }

  res.setHeader('Content-Type', 'text/event-stream')
  res.setHeader('Cache-Control', 'no-cache')
  res.setHeader('Connection', 'keep-alive')

  try {
    const stream = await groq.chat.completions.create({
      messages: [{ role: 'system', content: SYSTEM_PROMPT }, ...messages],
      model: 'llama-3.3-70b-versatile',
      max_tokens: 512,
      temperature: 0.7,
      stream: true,
    })

    for await (const chunk of stream) {
      const text = chunk.choices[0]?.delta?.content ?? ''
      if (text) res.write(`data: ${JSON.stringify({ text })}\n\n`)
    }
  } catch {
    res.write(`data: ${JSON.stringify({ error: 'Falha ao obter resposta.' })}\n\n`)
  }

  res.write('data: [DONE]\n\n')
  res.end()
}
