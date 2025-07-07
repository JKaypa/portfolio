import { projectData } from './projectData.ts'
import { Project } from './Project.tsx'
import './project.css'

const Projects: React.FC = () => {
  return (
    <>
      <header className="project-header">
        <h1 className="project-title">My Work</h1>
        <p className="project-subtitle">These are some of my projects</p>
      </header>

      <div className="project-grid">
        {projectData.map((project) => (
          <Project
            key={project.name}
            imgSrc={project.src}
            name={project.name}
            alt={project.alt}
            description={project.description}
          />
        ))}
      </div>
    </>
  )
}

export { Projects }
