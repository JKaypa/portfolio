import fallbackImage from '../assets/fallback-image.png'
import bgUniverse from '../assets/bg-universe.mp4'
import blackhole from '../assets/blackhole.webm'
import '../styles/videobg.css'

export default function VideoBg() {
  return (
    <video autoPlay muted loop poster={fallbackImage} className="vd-bg">
      <source src={blackhole} type="video/webm" />
      <source src={bgUniverse} type="video/mp4" />
    </video>
  )
}
