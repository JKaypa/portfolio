import ProjectList from "@/app/components/projects/components/project-list/project-list";
import ProjectCard from "@/app/components/projects/components/project-card/project-card";
import ModalContent from "@/app/components/projects/components/modal/modal-content";
import projectData from "@/app/components/projects/project-data-list";
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
          {projectData.map(({name, src, alt, description, techs, links, id}) =>
              <ProjectList
                  key={id}
                  id={id}
                  openButtonContent={<ProjectCard imgSrc={src} alt={alt} name={name}
                                                  description={description}
                                    />}
              >

                <ModalContent name={name} src={src} alt={alt} description={description}
                              techs={techs} links={links}/>
              </ProjectList>)}
        </div>
      </div>
  )
}

export default Projects
