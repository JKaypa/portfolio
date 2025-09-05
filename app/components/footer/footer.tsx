import './footer.css'

const Footer: React.FC = () => {
  return (
      <>
        <div className="footer"></div>
        <footer className="footer__content">
          <span>{new Date().getFullYear()}</span>
          <span>Jose Kaypa</span>
          <span></span>
        </footer>
      </>
  )
}

export default Footer
