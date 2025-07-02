import '../styles/profile.css'
import photo from '../assets/Foto.jpg'
import enResume from '../assets/FullstackJKaypa.pdf'
import { LiaLinkedinIn, LiaGithub, LiaWhatsapp } from 'react-icons/lia'
import { IconContext } from 'react-icons'
import { ReactElement } from 'react'

export default function Profile(): ReactElement {
  return (
    <section className="profile">
      <div className="profile__square"></div>
      <picture>
        <img src={photo} alt="Jose Kaypa photography" className="profile__photo" />
      </picture>

      <article className="profile__info">
        <div className="profile__welcome">
          <p>Hello World! 🌎</p>
          <div className="profile__introduce">
            <span className="profile__pronoun">I'm</span>

            <span className="profile__name">Jose</span>
            <span className="profile__name">Kaypa</span>
          </div>
        </div>
        <p className="profile__role">Software Developer</p>

        <p className="profile__description">
          I am a Full Stack web developer with formal studies in Software Engineering. In addition
          to having experience in both Front-end and Back-end technologies, I also possess strong
          knowledge of cloud computing and Linux server management. I strive to deliver quality
          products and ensure an appropriate software development life cycle.
        </p>

        <div className="profile__buttons">
          <div className="profile__resume">
            <a
              href={enResume}
              target="_blank"
              rel="noopener noreferrer"
              className="button button--link-resume"
            >
              English
            </a>
            <a
              href={enResume}
              target="_blank"
              rel="noopener noreferrer"
              className="button button--link-resume"
            >
              Spanish
            </a>
            <button className="button button--resume">My Resume</button>
          </div>
          <IconContext.Provider value={{ className: 'profile__social-icons' }}>
            <div className="profile__icons">
              <a
                href="https://www.linkedin.com/in/jkaypa/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LiaLinkedinIn />
              </a>
              <a href="https://github.com/JKaypa  " target="_blank" rel="noopener noreferrer">
                <LiaGithub />
              </a>
              <a href="https://wa.me/573013111395" target="_blank" rel="noopener noreferrer">
                <LiaWhatsapp />
              </a>
            </div>
          </IconContext.Provider>
        </div>
      </article>
    </section>
  )
}
