import { projectData } from './projectData.ts'
import { Project } from './Project.tsx'
import { useRef } from 'react'
import githubIcon from '../../assets/github.svg'
import liveIcon from '../../assets/live.svg'
import './project.css'

const Projects: React.FC = () => {
  const dialogRef = useRef<Record<string, HTMLDialogElement | null>>({})

  const handleShowModal = (modalId: number) => {
    dialogRef.current[modalId]?.showModal()
  }

  const handleCloseModal = (modalId: number) => {
    dialogRef.current[modalId]?.close()
  }

  return (
    <>
      <header className="project-header">
        <h1 className="project-title">My Work</h1>
        <p className="project-subtitle">
          These are some of my projects, click them to see more details.
        </p>
      </header>

      <div className="project-grid">
        {projectData.map(({ id, name, src, alt, description, techs, links }) => (
          <div key={id}>
            <button onClick={() => handleShowModal(id)} className="project-button__modal">
              <Project imgSrc={src} name={name} alt={alt} description={description} />
            </button>

            <dialog ref={(ref) => (dialogRef.current[id] = ref)} className="project-dialog">
              <h1>{name}</h1>
              <img src={src} alt={alt} />
              <p>{description}</p>
              <h2>Technologies</h2>
              <div className="project-techs">
                {techs.map(({ src, name }) => (
                  <div>
                    <img src={src} alt={name} key={name} className={'project-techs__icon'} />
                    <p>{name}</p>
                  </div>
                ))}
              </div>
              <h2>Give them a chek</h2>
              <div className="project-tech__links">
                <a href={links.github} target="_blank" rel="noopener noreferrer">
                  <img src={githubIcon} alt="github" className="project-techs__icon" />
                  <p>Source code</p>
                </a>
                {links.live && (
                  <a href={links.live} target="_blank" rel="noopener noreferrer">
                    <img src={liveIcon} alt="live demo" className="project-techs__icon" />
                    <p>Live demo</p>
                  </a>
                )}
              </div>
              <button onClick={() => handleCloseModal(id)} className="project-dialog__button">
                Close
              </button>
            </dialog>
          </div>
        ))}
      </div>
    </>
  )
}

export { Projects }
