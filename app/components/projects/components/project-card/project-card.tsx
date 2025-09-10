import Image from "next/image";
import './project-card.css'
import Project from "@/app/components/projects/libs/types";

type Props = {
  project: Project
}

const ProjectCard: React.FC<Props> = ({ project }) => {
  const { name, src, alt, description } = project

  return (
      <div className="project-card">
        <Image src={src} alt={alt} width={450} height={255} className="project-card__image" />
        <h2 className="project-card__title">{name}</h2>
        <p className="project-card__description">{description}</p>
      </div>
  )
}

export default ProjectCard
