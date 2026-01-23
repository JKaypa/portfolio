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

const iconPath = (icon: string): string => '/icons/' + icon
const imgPath = (img: string): string => '/images/projects/' + img

const projectData: Project[] = [
  {
    id: 1,
    name: 'Go Travel',
    src: imgPath('travel-app-project.webp'),
    alt: 'travel app project image',
    description: 'Book your next adventure followed by your friends and loved ones',
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
    name: 'Typing Race',
    src: imgPath('type-race.png'),
    alt: 'typing race project image',
    description: 'Play with others and compete to type a given text as fast as possible in real time',
    techs: [
      { src: iconPath('typescript.svg'), name: 'TypeScript' },
      { src: iconPath('html.svg'), name: 'HTML5' },
      { src: iconPath('css.svg'), name: 'CSS3' },
      { src: iconPath('node.svg'), name: 'Node' },
      { src: iconPath('express.svg'), name: 'Express' },
      { src: iconPath('socket-io.svg'), name: 'Socket.IO' },
      { src: iconPath('esbuild.svg'), name: 'Esbuild' },
    ],
    links: {
      github: 'https://github.com/JKaypa/racingtype',
      live: 'https://okay-steffi-kaypa-dev-4c35edc0.koyeb.app/signin',
    },
  },
  {
    id: 3,
    name: 'Travelling Nerd',
    src: imgPath('travel-nerd-project.webp'),
    alt: 'travel nerd project image',
    description: 'Document your most exiting trips and share them with the world',
    techs: [
      { src: iconPath('typescript.svg'), name: 'TypeScript' },
      { src: iconPath('react.svg'), name: 'React' },
      { src: iconPath('node.svg'), name: 'Node' },
      { src: iconPath('express.svg'), name: 'Express' },
      { src: iconPath('mongo.svg'), name: 'MongoDB' },
    ],
    links: {
      github: 'https://github.com/JKaypa/TravellingNerd',
      live: 'https://travelling-nerd-jkaypa.vercel.app/',
    },
  },
]

export default projectData
