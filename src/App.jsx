import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import TecnologyCarts from './components/TecnologyCarts'
import AboutUs from './components/AboutUs'
import Achievement from './components/Achivement'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <TecnologyCarts />
      <AboutUs/>
      <Achievement/>
      <Footer/>

    </div>
  )
}

export default App