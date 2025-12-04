'use client'

import Form from 'next/form'
import { toast } from 'sonner'

const ContactForm: React.FC = () => {
  const handleSubmit = async (formData: FormData) => {
    const res = await fetch('https://www.jkaypa.dev/api/send-email', {
      method: 'POST',
      body: formData,
    })

    const data: { message: string } = await res.json()

    if (!res.ok) {
      const error = data
      toast.error(error.message)
    }

    const success = data
    toast.success(success.message)
  }

  return (
    <Form action={handleSubmit} className="contact-form">
      <label className="form-group">
        Subject
        <input type="text" name="subject" className="form-input" placeholder="Add a subject" minLength={3} required />
      </label>

      <label htmlFor="email" className="form-group">
        Email
        <input type="email" id="email" name="email" className="form-input" placeholder="Your email" pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$" required />
      </label>

      <label htmlFor="message" className="form-group">
        Message
        <textarea
          id="message"
          name="message"
          className="form-textarea"
          placeholder="Tell me about your project..."
          rows={5}
          minLength={10}
          required
        />
      </label>
      <div className="cf-turnstile" data-sitekey="0x4AAAAAACBRWFN7oVke7Wwk" data-theme="auto" data-size="flexible" data-callback="onSuccess"></div>
      <button type="submit" className="form-submit-btn">
        Send Message
      </button>
    </Form>
  )
}

export default ContactForm
