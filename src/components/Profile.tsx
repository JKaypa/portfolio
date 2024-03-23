import "../styles/profile.css";
import photo from "../assets/Foto.jpg";
import enResume from "../assets/FullstackJKaypa.pdf";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare, FaWhatsappSquare } from "react-icons/fa";
import { IconContext } from "react-icons";

export default function Profile() {
  return (
    <section className="profile-section">
      <div></div>
      <picture className="profile-picture">
        <img src={photo} alt="Jose Kaypa photography" className="photo" />
      </picture>

      <article>
        <div className="profile-line-height">
          <p style={{ textAlign: "left" }}>Hello World !</p>
          <div className="inline">
            <span>I'm</span>

            <span className="profile-name">Jose</span>
            <span className="profile-name">Kaypa</span>
          </div>
        </div>
        <p className="profile-stack">Fullstack Developer</p>

        <p className="profile-description">
          I am a Full Stack web developer with formal studies in Software Engineering. In addition
          to having experience in both Front-end and Back-end technologies, I also possess strong
          knowledge of cloud computing and Linux server management. I strive to deliver quality
          products and ensure an appropriate software development life cycle.
        </p>

        <div className="profile-icons">
          <div className="profile-resume">
            <a href={enResume} target="_blank" rel="noopener noreferrer" className="resume-english">
              English
            </a>
            <a href={enResume} target="_blank" rel="noopener noreferrer" className="resume-spanish">
              Spanish
            </a>
            <button className="resume-button">My Resume</button>
          </div>
          <IconContext.Provider value={{ className: "profile-social_icon" }}>
            <div className="profile-social">
              <a
                href="https://www.linkedin.com/in/jkaypa/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
              <a href="https://github.com/JKaypa  " target="_blank" rel="noopener noreferrer">
                <FaGithubSquare />
              </a>
              <a href="https://wa.me/573013111395" target="_blank" rel="noopener noreferrer">
                <FaWhatsappSquare />
              </a>
            </div>
          </IconContext.Provider>
        </div>
      </article>
    </section>
  );
}
