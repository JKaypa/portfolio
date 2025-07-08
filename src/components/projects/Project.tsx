type Props = {
  alt: string
  imgSrc: string
  name: string
  description: string
}

const Project: React.FC<Props> = ({ imgSrc, alt, name, description }) => {
  return (
    <>
      <div className="project-card">
        <img src={imgSrc} alt={alt} width={400} />
        <h2 className="project-card__title">{name}</h2>
        <p className="project-card__description">{description}</p>
      </div>
    </>
  )
}

export { Project }
