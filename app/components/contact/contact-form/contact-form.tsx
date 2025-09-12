import Image from 'next/image'
import Contact from "@/app/components/contact/contact-form/contact";
import './contact-form.css'

const ContactForm: React.FC = () => {

  return (
    <section>
      <h1 className="section-title">Get In Touch</h1>
      <p className="section-subtitle">Have a project in mind? Let&#39;s discuss how we can work together.</p>
      <div className="contact-form-container">
        <div className="contact-form-image">
          <Image
            src="/images/programming.webp"
            alt="Programming workspace"
            width={400}
            height={500}
            className="contact-image"
          />
        </div>
        
        <div className="contact-form-content">
          <h1 className="contact-form-title">Contact me</h1>
          <Contact />
        </div>
      </div>
    </section>
  )
}

export default ContactForm
