import rateLimit from '@/app/api/send-email/rate-limiter'
import validate from '@/app/api/validation'
import { NextRequest } from 'next/server'
import sendEmail from '@/app/api/send-email/send-email'

export async function POST(req: NextRequest): Promise<Response> {
  const ip = req.headers.get('x-forwarded-for') || req.headers.get('x-real-ip')

  const isLimitReached = await rateLimit(ip)

  if (isLimitReached) {
    return Response.json({ error: 'Too many requests, please try again later' })
  }

  const userData = await req.formData()

  const [isValid, user] = validate(userData)

  if (!isValid) {
    return Response.json({ error: 'Invalid data' })
  }

  try {
    const error = await sendEmail(user)

    if (error) {
      return Response.json({ message: error.message })
    }

    return Response.json({ message: 'Email sent successfully' })
  } catch (error) {
    return Response.json({ unknownError: error })
  }
}
