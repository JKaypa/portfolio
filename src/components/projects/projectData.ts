type Project = {
  id: number
  name: string
  src: string
  alt: string
  description: string
  techs: { src: string; name: string }[]
  links: {
    github: string
    live?: string
  }
}

const iconPath = (icon: string) => 'src/assets/tech-icons/' + icon

const projectData: Project[] = [
  {
    id: 1,
    name: 'Go Travel',
    src: 'src/assets/projects/travel-app-project.webp',
    alt: 'travel app project image',
    description: 'Book your next trip with your loved ones',
    techs: [
      { src: iconPath('typescript.svg'), name: 'TypeScript' },
      { src: iconPath('react.svg'), name: 'React' },
      { src: iconPath('redux.svg'), name: 'Redux' },
    ],
    links: {
      github: 'https://github.com/JKaypa/go-travel',
      live: 'https://jk-travel-app.netlify.app/sign-in',
    },
  },
  {
    id: 2,
    name: 'Travelling Nerd',
    src: 'src/assets/projects/travel-nerd-project.webp',
    alt: 'travel nerd project image',
    description: 'Document your most exiting trips and share them with the world',
    techs: [
      { src: iconPath('typescript.svg'), name: 'TypeScript' },
      { src: iconPath('react.svg'), name: 'React' },
      { src: iconPath('node.svg'), name: 'Node' },
      { src: iconPath('express.svg'), name: 'Express' },
      { src: iconPath('mongo.svg'), name: 'MongoDB' },
    ],
    links: { github: '' },
  },
]

export { projectData }
