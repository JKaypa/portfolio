type Props = {
  alt: string
  imgSrc: string
  name: string
  description: string
}

const Project: React.FC<Props> = ({ imgSrc, alt, name, description }) => {
  return (
    <>
      <div>
        <img src={imgSrc} alt={alt} />
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
    </>
  )
}

export { Project }
