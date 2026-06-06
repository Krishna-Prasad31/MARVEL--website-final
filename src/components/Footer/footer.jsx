import './footer.css'

function Footer() {
  return (
    <footer className="footer"> 
      <div className="footer-top">
        <div className="footer-logo">MAR<span>V</span>EL</div>
        <div className="footer-links">
          <a href="#about">About</a>
          <a href="#domains">Domains</a>
          <a href="#projects">Projects</a> 
          <a href="#achievements">Achievements</a>
        </div>
        <div className="footer-socials">
          <a href="" target="_blank" rel="noreferrer">Instagram</a>
          <a href="https://twitter.com/marveluvce" target="_blank" rel="noreferrer">Twitter</a>
          <a href="https://github.com/UVCE-Marvel" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/company/marvel-uvce/" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-copy">© 2026 UVCE MARVEL. All rights reserved.</div>
        <div className="footer-uvce">University Visvesvaraya College of Engineering ·<br></br> K R Circle, Devaraj Urs Rd, Ambedkar Veedhi,<br /> Bengaluru, Karnataka 560001</div>
      </div>
    </footer>
  )
}

export default Footer