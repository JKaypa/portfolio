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
          <p>Software Engineering student</p>
          <p className="profile-description">I am a Full Stack web developer with formal studies in Software Engineering. In addition to having experience in both
            Front-end and Back-end technologies, I also possess strong knowledge of cloud computing and Linux server
            management. I strive to deliver quality products and ensure an appropriate software development life cycle.</p>
            <div className='profile-buttons'>
              <button className='resume-button'>Resume</button>
              <a className='resume-english'>English</a>
              <a className='resume-spanish'>Spanish</a>
            </div>
        </article>
      </main>
    </section>
  )
}
