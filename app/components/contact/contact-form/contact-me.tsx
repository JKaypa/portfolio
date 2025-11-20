import Image from 'next/image'
import ContactForm from '@/app/components/contact/contact-form/contact-form'
import './contact-form.css'

const ContactMe: React.FC = () => {
  return (
    <section className="section-bottom-padding">
      <header className="section-header auto-show">
        <h1 className="section-title">Let&#39;s Work Together</h1>
        <p className="section-subtitle">Got a project that needs expert development? You&#39;ve found one.</p>
      </header>
      <div className="contact-form-container auto-show-section">
        <div className="contact-form-image">
          <Image src="/images/programming.webp" alt="Programming workspace" width={400} height={500} className="contact-image" />
        </div>

        <div className="contact-form-content">
          <h1 className="contact-form-title">Contact me</h1>
          <ContactForm />
        </div>
      </div>
    </section>
  )
}

export default ContactMe
