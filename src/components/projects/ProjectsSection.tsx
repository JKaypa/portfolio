import { projectData } from './projectData.ts'
import { Project } from './Project.tsx'
import { useRef } from 'react'
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
        {projectData.map(({ id, name, src, alt, description }) => (
          <div key={id}>
            <button onClick={() => handleShowModal(id)} className="project-button__modal">
              <Project imgSrc={src} name={name} alt={alt} description={description} />
            </button>

            <dialog ref={(ref) => (dialogRef.current[id] = ref)} className="project-dialog">
              <h1>{name}</h1>
              <img src={src} alt={alt} />
              <p>{description}</p>
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
