import React from 'react'
import About from "./About"
import Banner from "./Banner"
import Skills from './Skills'
import Projects from './Projects'
import { useThemeContext } from '../context/ThemeContext'
import ContactUs from './ContactUs'

const Home = () => {
        const { theme } = useThemeContext();
  
  return (
<div     id='home' className={theme === "light" ? "bg-slate-200" : "bg-[#1e26299a] " }>
      <About />
      <Skills />
      <Projects />
      <Banner />
      <ContactUs />
    </div>
  )
}

export default Home
