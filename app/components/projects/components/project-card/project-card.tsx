import Image from "next/image";
import './project-card.css'

type Props = {
  alt: string
  imgSrc: string
  name: string
  description: string
}

const ProjectCard: React.FC<Props> = ({ imgSrc, alt, name, description }) => {
  return (
      <div className="project-card">
        <Image src={imgSrc} alt={alt} width={450} height={255} className="project-card__image" />
        <h2 className="project-card__title">{name}</h2>
        <p className="project-card__description">{description}</p>
      </div>
  )
}

export default ProjectCard
