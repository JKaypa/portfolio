import rateLimit from '@/app/api/send-email/rate-limiter'
import validate from '@/app/api/validation'
import { NextRequest } from 'next/server'
import sendEmail from '@/app/api/send-email/send-email'
import validateTurnstile from '@/app/api/send-email/turnstile-validation'

export async function POST(req: NextRequest): Promise<Response> {
  const ip = req.headers.get('x-forwarded-for') || req.headers.get('x-real-ip')
  const emailData = await req.formData()
  const token = emailData.get('cf-turnstile-response')

  const validation = await validateTurnstile(token, ip)

  if (!validation.success) {
    return Response.json('Invalid verification', { status: 400 })
  }

  const isLimitReached = await rateLimit(ip)
  if (isLimitReached) {
    return Response.json({ error: 'Too many requests, please try again later' }, { status: 429 })
  }

  const [isValid, email] = validate(emailData)

  if (!isValid) {
    return Response.json({ error: 'Invalid data' }, { status: 400 })
  }

  try {
    const error = await sendEmail(email)

    if (error) {
      return Response.json({ message: error.message }, { status: 500 })
    }

    return Response.json({ message: 'Email sent successfully' })
  } catch (error) {
    return Response.json({ unknownError: error }, { status: 500 })
  }
}
