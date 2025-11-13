'use client'

import Form from 'next/form'
import { toast } from 'sonner'

const ContactForm: React.FC = () => {
  const handleSubmit = async (formData: FormData) => {
    const res = await fetch('http://localhost:3000/api/send-email', {
      method: 'POST',
      body: formData,
    })

    if (!res.ok) {
      const error = (await res.json()) as { message: string }
      toast.error(error.message)
    }

    const success = (await res.json()) as { message: string }
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

      <button type="submit" className="form-submit-btn">
        Send Message
      </button>
    </Form>
  )
}

export default ContactForm
