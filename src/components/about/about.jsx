import './about.css'
import logo from '../../assets/image1.webp'

function About() {
  return (
    <section className="about" id="about">
      <div className="about-inner">

        <div className="about-visual">
          <div className="about-box-main">
            <img src={logo} className="about-watermark"/>
          </div>
          <div className="about-badge-year">
            <strong>2021</strong>
            Founded
          </div>
          <div className="about-badge-location">
            UVCE · Bengaluru
          </div>
        </div>


        <div className="about-content">
          <div className="section-tag">About MARVEL</div>
          <h2 className="section-title">Not just a lab.<br />A launchpad.</h2>
          <p>
            MARVEL at <strong>University Visvesvaraya College of Engineering</strong> is
            more than a makerspace — it's an ecosystem built to transform curious
            students into <strong>confident innovators</strong>.
          </p>
          <p>
            With support from the <strong>UVCE Graduates Association</strong>, we provide
            resources, mentorship, and a community that pushes boundaries across
            8 cutting-edge domains.
          </p>
          <div className="about-pills">
            <div className="pill">Hands-on Learning</div>
            <div className="pill">Industry Collaboration</div>
            <div className="pill">Research Focused</div>
            <div className="pill">Alumni Network</div>
            <div className="pill">Interdisciplinary</div>
            <div className="pill">Certificate Programs</div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default About