
import React from 'react'
import './Hero.css';

function Hero() {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>We Ensure better education for a better world</h1>
        <p>Our cutting-edge curriculum is designed to empower students with knowledge, skills, and experiences needed to excel in the dynamic field of education.</p>
        <button className='btn'>Explore more <img src="../../public/photos/dark-arrow.png" alt="" /></button>
      </div>
    </div>
  )
}

export default Hero