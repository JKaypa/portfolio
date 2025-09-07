import Image from "next/image";
import './contact-icons.css'

const ContactIcons = () => {
  return <div className="profile__icons">
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
}

export default ContactIcons