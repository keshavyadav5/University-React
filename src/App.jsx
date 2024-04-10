import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Program from './Components/Programs/Program'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

function App() {
  return (
    <div>
    <Navbar/>
    <Hero/>
    <div className="container">
      <Title subTitle = 'Our PROGRAM' title='what we offer'/>
      <Program/>
      <About/>
      <Title subTitle = 'Gallery' title='Campus Photos'/>
      <Campus/>
      <Title subTitle = 'TESTIMONIALS' title='What Student Says'/>
      <Testimonials/>
      <Title subTitle = 'Contact Us' title='Get in Touch'/>
      <Contact/>
      <Footer/>
    </div>
    </div>
  )
}

export default App
