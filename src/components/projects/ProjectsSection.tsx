import { projectData } from './projectData.ts'
import { Project } from './Project.tsx'

const Projects: React.FC = () => {
  return (
    <>
      <h1>Projects</h1>
      <p>These are some of my projects</p>

      <div>
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
