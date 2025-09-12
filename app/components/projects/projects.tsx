import ProjectList from "@/app/components/projects/components/project-list/project-list";
import ProjectCard from "@/app/components/projects/components/project-card/project-card";
import ModalContent from "@/app/components/projects/components/modal/modal-content";
import projectData from "@/app/components/projects/project-data-list";
import './projects.css'

const Projects: React.FC = () => {

  return (
      <section>
        <header className="project-header">
          <h1 className="section-title">Check My Work</h1>
          <p className="section-subtitle">
            These are some of my projects, click them to see more details.
          </p>
        </header>
        <div className="project-grid">
          {projectData.map((project) =>
              <ProjectList
                  key={ project.id }
                  id={project.id}
                  trigger={<ProjectCard project={project} />}
              >
                <ModalContent project={project}/>
              </ProjectList>)}
        </div>
      </section>
  )
}

export default Projects
