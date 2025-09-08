import projectData from './project-data-list'
import ProjectCard from './components/project-card/project-card'
import Modal from "./components/modal/modal";
import OpenModalButton from "./components/modal/open-modal-button";
import ModalContent from "./components/modal/modal-content";
import './projects.css'

const Projects: React.FC = () => {
  return (
      <div className="projects">
        <header className="project-header">
          <h1 className="project-title">Check My Work</h1>
          <p className="project-subtitle">
            These are some of my projects, click them to see more details.
          </p>
        </header>

        <div className="project-grid">
          {projectData.map(({ id, name, src, alt, description, techs, links }) => (
              <div key={id}>
                <OpenModalButton id={id} className="project-modal__open-button">
                  <ProjectCard
                      imgSrc={src}
                      name={name}
                      alt={alt}
                      description={description}
                  />
                </OpenModalButton>

                <Modal id={id}>
                  <ModalContent
                      name={name}
                      src={src} alt={alt}
                      description={description}
                      techs={techs}
                      links={links}
                  />
                </Modal>
              </div>
          ))}
        </div>
      </div>
  )
}

export default Projects
