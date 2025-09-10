import Image from "next/image";
import './modal.css'
import Project from "@/app/components/projects/libs/types";

type Props = {
  project: Project
}

const ModalContent: React.FC<Props> = ({ project }) => {
  const { name, src, alt, description, techs, links } = project

  return (
    <div className="modal-content">
      <section className="modal-content__head">
        <div className="modal-content__title">
          <h1>{name}</h1>
        </div>
        <Image src={src} alt={alt} width={450} height={255}/>
        <p className="modal-content__description">{description}</p>
      </section>

      <section>
        <h2>Technologies</h2>
        <div className="modal-content__project-techs">
          {techs.map(({src, name}) => (
              <div key={src}>
                <Image src={src} alt={name} width={30} height={30} className="modal-content__tech__icons"/>
                <p>{name}</p>
              </div>
          ))}
        </div>
      </section>

      <section>
        <h2>Give it a chek</h2>
        <div className="modal-content__tech__links">
          <a href={links.github} target="_blank" rel="noopener noreferrer">
            <Image src="/icons/github.svg" alt="github" width={30} height={30}
                   className="modal-content__tech__icons"/>
            <p>Source code</p>
          </a>
          {links.live && (
              <a href={links.live} target="_blank" rel="noopener noreferrer">
                <Image src="/icons/live.svg" alt="live demo" width={30} height={30}
                       className="modal-content__tech__icons"/>
                <p>Live demo</p>
              </a>
          )}
        </div>
      </section>
    </div>
  )
}

export default ModalContent