import { Resend } from 'resend'
import Email from '@/app/api/user-model'

const resend = new Resend(process.env.RESEND_KEY)

const sendEmail = async ({ email, subject, message }: Email) => {
  const { error } = await resend.emails.send({
    from: 'Portfolio <contact@resend.dev>',
    to: ['jose_kaypa@hotmail.com'],
    subject: subject,
    text: message,
    replyTo: email,
  })

  return error
}

export default sendEmail
