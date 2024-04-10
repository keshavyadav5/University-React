import React from 'react'
import './About.css';

function About() {
  return (
    <div className='about'>
      <div className="about-left">
        <img src="../../public/photos/about.png" alt="aboutimgage" className='about-img'/>
        <img src="../../public/photos/play-icon.png" alt="" className='play-icon'/>
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nuturing Tomorrow's Leaders Today</h2>
        <p>
          Embark on a transformative educational journey with our university's comprehensive education programs. Our cutting-edge curriculum is designed to empower students with the knowledge, skills and experiences needed toexcel in the dynamic field of education
        </p>
        <p>
          With a focus on innovation, hands-on learning, and personalized mentorship, our program prepare aspiring educators to make a meaningful impact in classrooms, schools, and commutities
        </p>
        <p>
          Whether you aspire to become a teacher, administrator, counselor, or educational leader, our diverse range of programs offers the perfect pathway to achieve your goals nad unlock your full potential in shapoing the future of education.
        </p>
      </div>
    </div>
  )
}

export default About