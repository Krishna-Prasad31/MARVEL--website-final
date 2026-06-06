import { useState, useEffect } from 'react'
import './navbar.css'
import logo from '../../assets/White New - Copy.svg'
import sun from "../../assets/sun-svgrepo-com.svg"
import moon from "../../assets/moon-svgrepo-com.svg"

function Navbar({toggleTheme, theme}) {

  const [scroll, setScroll] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => { 
    const handleScroll = () => {
      setScroll(window.scrollY > 60)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return(
    <nav className={`navbar ${scroll ? 'scrolled': ''}`}>
      
      <a href="#" className='marvel-logo'>
        <img src={logo} alt="marvel-logo" height="50" />
      </a>

      <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <li><a href="#about">About</a></li>
        <li><a href="#domains">Domains</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#achievements">Achievements</a></li>
      </ul>
 
      <div className="nav-right">
        <button className="theme-toggle" onClick={toggleTheme}>
          {theme === 'dark' ? <img className='sunMoon' src={sun} alt="" /> :<img className='sunMoon' src={moon} alt="" /> }
        </button>
        <a href="https://hub.uvcemarvel.in" className="nav-cta" target="_blank">
          Reach Us Out →
        </a>
      </div>
    </nav>
  )
}

export default Navbar