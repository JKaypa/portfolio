import '../styles/profile.css'
import photo from '../assets/Foto.jpg'

export default function Profile() {
  
  return (
    <section className="profile-section">
      <div></div>
      <main>
        <picture>
          <img src={photo} alt="" className="photo" />
        </picture>

        <article>
          <div className="profile-line-height">
            <p style={{ textAlign: 'left' }}>Hello World !</p>
            <div className="inline">
              <span>I'm</span>
              <span className="profile-name">
                <span className="profile-strong"> J</span>ose{' '}
                <strong className="profile-strong">K</strong>aypa
              </span>
            </div>
          </div>
          <p className="profile-stack">Fullstack Software Developer</p>
          <p className="profile-description">Software Engineering student</p>
        </article>
      </main>
    </section>
  )
}
