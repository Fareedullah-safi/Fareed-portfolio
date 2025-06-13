import React from 'react'
import NavBar from './pages/NavBar'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Skills from './pages/Skills'
import Project from "./pages/Project"
import Contact from "./pages/Contact"
import Footer from './pages/Footer'


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
      <Footer />
    </main>
  )
}

export default page