import Form from "next/form";

const Contact: React.FC = () => {

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
          placeholder="Your full name"
      />
    </div>

    <div className="form-group">
      <label htmlFor="email" className="form-label">Email</label>
      <input
          type="email"
          id="email"
          name="email"
          className="form-input"
          placeholder="your.email@example.com"
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
      />
    </div>

    <button
        type="submit"
        className="form-submit-btn"
    >
      Send Message
    </button>
  </Form>
}

export default Contact