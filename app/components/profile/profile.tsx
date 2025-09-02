import './profile.css'
import { ReactElement } from 'react'
import Image from "next/image";

export default function Profile(): ReactElement {
  return (
      <section className="profile">
        <div className="profile__square"></div>
        <picture>
          <Image src="/images/photo.webp" alt="Jose Kaypa photography" width={350} height={406}
                 fetchPriority="high" loading="eager" className="profile__photo"
          />
        </picture>

        <article className="profile__info">
          <div className="profile__welcome">
            <p>Hello World! 🌎</p>
            <div className="profile__introduce">
              <span className="profile__pronoun">I&apos;m</span>

              <span className="profile__name">Jose</span>
              <span className="profile__name">Kaypa</span>
            </div>
          </div>
          <p className="profile__role">Software Developer</p>

          <p className="profile__description">
            I am a Full Stack developer with backend focus and basic knowledge of design principles.
            Constantly looking for learning new concepts and better problem solving approaches that
            let me build clean, scalable, mantenible and loosely coupled architectures that allow me
            delivering quality products and ensure an appropriate software development life cycle.
          </p>

          <div className="profile__buttons">
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="button">
              My Resume
            </a>

            <div className="profile__icons">
              <a
                  href="https://www.linkedin.com/in/jkaypa"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="See my Likedin profile"
                  className="profile__social-icons"
              >
                <Image src="/icons/linkedin.svg" alt="linkedin logo" width={30} height={30}/>
              </a>

              <a
                  href="https://github.com/JKaypa"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="See my GitHub profile"
                  className="profile__social-icons"
              >
                <Image src="/icons/github.svg" alt="github logo" width={30} height={30}/>
              </a>

              <a
                  href="https://wa.me/573013111395"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Contact me on whatsapp"
                  className="profile__social-icons"
              >
                <Image src="/icons/whatsapp.svg" alt="whatsapp logo" width={30} height={30}/>
              </a>
            </div>

          </div>
        </article>
      </section>
  )
}
