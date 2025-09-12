import Form from "next/form";

const Contact: React.FC = () => {

  const regexPattern = '^[a-zA-Z0-9_+&-]+(?:.[a-zA-Z0-9_+&-]+)@(?:[a-zA-Z0-9-]+.)+[a-zA-Z]{2,7}$'

  const handleSubmit = async (formData: FormData) => {
    'use server'
  }

  return <Form action={handleSubmit} className="contact-form">
    <div className="form-group">
      <label htmlFor="name" className="form-label">Name</label>
      <input
          type="text"
          id="name"
          name="name"
          className="form-input"
          placeholder="Your name"
          minLength={3}
          required
      />
    </div>

    <div className="form-group">
      <label htmlFor="email" className="form-label">Email</label>
      <input
          type="email"
          id="email"
          name="email"
          className="form-input"
          placeholder="your email"
          pattern={regexPattern}
          required
      />
    </div>

    <div className="form-group">
      <label htmlFor="message" className="form-label">Message</label>
      <textarea
          id="message"
          name="message"
          className="form-textarea"
          placeholder="Tell me about your project..."
          rows={5}
          minLength={10}
          required
      />
    </div>

    <button type="submit" className="form-submit-btn">
      Send Message
    </button>
  </Form>
}

export default Contact