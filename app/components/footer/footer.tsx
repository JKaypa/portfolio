import './footer.css'
import FullYear from "@/app/components/footer/components/full-year";

const Footer: React.FC = () => {
  return (
      <>
        <div className="footer"></div>
        <footer className="footer__content">
          <FullYear />
          <span>Jose Kaypa</span>
          <span><span className="footer__rights-logo">©</span> All rights reserved</span>
        </footer>
      </>
  )
}

export default Footer
