import Navbar from './components/navbar/navbar'
import Hero from './components/navbar/hero/hero'
import Marquee from './components/navbar/marquee/marquee'
import About from './components/about/about'
import Domains from './components/Domains/domain'
import Projects from './components/Projects/projects'
import Achievements from './components/Achievements/achievements'
import JoinCTA from './components/JoinCTA/JoinCTA'
import Footer from './components/Footer/footer'
import Tracks from "./components/Tracks/tracks";
import AlumniProjects from './components/alumniProjects/alumniProjects'

import './App.css'

import { useState, useEffect } from 'react'

function App() {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    document.documentElement.className = theme
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light')
  }

  return (
    <>
      <Navbar toggleTheme={toggleTheme} theme={theme} />
      <Hero/>
    <Marquee />
    <About/>
    <Tracks/>
    <Domains/>
    <Projects/>
    <AlumniProjects/>
    <Achievements/>
    <JoinCTA/>
    <Footer/>
    </>
  )
}



export default App