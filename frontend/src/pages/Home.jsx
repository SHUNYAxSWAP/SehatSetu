import React from 'react'
import NavBar from '../components/NavBar'
import HeroSection from '../components/HeroSection'
import Features from '../components/Features'
import Speciality from '../components/Speciality'
import Contact from '../components/Contact'
import About from '../components/About'

const Home = () => {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <Features />
      <Speciality />
      <Contact />
      <About />
    </div>
  )
}

export default Home