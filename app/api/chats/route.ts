// app/api/chat/route.ts
import { NextRequest } from 'next/server'
import { streamText } from 'ai'
import OpenAI from 'openai'

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY! })

export async function POST(req: NextRequest) {
  const { messages } = await req.json()

  const result = await streamText({
    model: 'gpt-4o-mini',  // <-- model name string only
    messages,
    // ❌ no `provider` field
  })

  // ✅ In v3, use toTextStreamResponse()
  return result.toTextStreamResponse()
}
