import Image from 'next/image'
import './profile.css'
import ContactIcons from '@/app/components/contact/contact-icons/contact-icons'

const Profile: React.FC = () => {
  return (
    <section className="profile">
      <div className="profile__square show_square"></div>
      <picture>
        <Image
          src="/images/photo.webp"
          alt="Jose Kaypa photography"
          width={350}
          height={406}
          fetchPriority="high"
          priority={true}
          className="profile__photo show_image"
        />
      </picture>

      <article className="profile__info">
        <div className="profile__welcome show_welcome">
          <p>Hello World! 🌎</p>
          <div className="profile__introduce">
            <span className="profile__pronoun">I&apos;m</span>

            <span className="profile__name">Jose</span>
            <span className="profile__name">Kaypa</span>
          </div>
        </div>
        <p className="profile__role show_role">Software Developer</p>

        <p className="profile__description show">
          I am a Full Stack developer with backend focus and basic knowledge of design principles. Constantly looking for learning new concepts and
          better problem solving approaches that let me build clean, scalable, mantenible and loosely coupled architectures that allow me delivering
          quality products and ensure an appropriate software development life cycle.
        </p>

        <div className="profile__buttons show">
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="button">
            My Resume
          </a>
          <ContactIcons />
        </div>
      </article>
    </section>
  )
}

export default Profile
