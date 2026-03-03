import { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Plans from './components/Plans'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Testimonials from './components/Testimonials'
import './App.css'

function App() {

  const [showButton, setShowButton] = useState(false)

  useEffect(() =>{
    const handleScroll = () => {
      if(window.scrollY > 300){
        setShowButton(true)
      }else{
        setShowButton(false)
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <Header />
      <Hero />
      <Services />
      <About />
      <Plans />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />

      {showButton && (
      <button className='btn-top-app'
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth"})}>⇧</button>
      )}
    </>
  )
}

export default App
