type Project = {
  id: number
  name: string
  src: string
  alt: string
  description: string
}

const projectData: Project[] = [
  {
    id: 1,
    name: 'Travel-App',
    src: 'src/assets/projects/travel-app-project.webp',
    alt: 'travel app project image',
    description: 'Book your next trip with your loved ones',
  },
  {
    id: 2,
    name: 'Travelling Nerd',
    src: 'src/assets/projects/travel-nerd-project.webp',
    alt: 'travel nerd project image',
    description: 'Document your most exiting trips and share them with the world',
  },
]

export { projectData }
