import FullYear from '@/app/components/footer/components/full-year'
import './footer.css'

const Footer: React.FC = () => {
  return (
    <>
      <div className="footer"></div>
      <footer className="footer__content">
        <span className="footer__rights-logo">©</span>
        <FullYear />
        <span> Jose Kaypa</span>
        <span> All rights reserved</span>
      </footer>
    </>
  )
}

export default Footer
