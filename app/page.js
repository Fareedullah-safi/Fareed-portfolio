import React from 'react'
import NavBar from './pages/NavBar'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Skills from './pages/Skills'
import Project from "./pages/Project"
import Contact from "./pages/Contact"


const page = () => {
  return (
    <main>
      <NavBar />
      <Home />
      <About />
      <Services />
      <Skills />
      <Project />
      <Contact />
    </main>
  )
}

export default page