import Form from "next/form";


const ContactForm: React.FC = () => {


  const handleSubmit = async (formData: FormData) => {
    'use server'

  }

  return <Form action={handleSubmit} className="contact-form">

    <label className="form-group">
      Name
      <input
          type="text"
          name="name"
          className="form-input"
          placeholder="Your name"
          minLength={3}
          required
      />
    </label>


    <label htmlFor="email" className="form-group">
      Email
      <input
          type="email"
          id="email"
          name="email"
          className="form-input"
          placeholder="Your email"
          required
      />
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
}

export default ContactForm