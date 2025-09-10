type Project = {
  id: number,
  name: string,
  src: string,
  alt: string,
  description: string,
  techs: { src: string; name: string }[],
  links: {
    github: string
    live?: string
  }
}

export default Project