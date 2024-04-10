import React from 'react'
import './Contact.css'
import Form from './Form'

function Contact() {
  
  return (
    <div className='contact'>
      <div className="contact-col">
          <h3>Send us a message <img src="../../public/photos/msg-icon.png" alt="" /></h3>
          <p>
            Feel free to reach out through contact form or find our contact imformation below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.
          </p>
          <ul>
            <li><img src="../../public/photos/mail-icon.png" alt="" />kesavyadav072@gmail.com</li>
            <li> <img src="../../public/photos/phone-icon.png" alt="" />7508794201</li>
            <li> <img src="../../public/photos/location-icon.png" alt="" />77 Massachusetts Ave, Cambidge</li>
          </ul>
      </div>
      <div className="contact-col">
        <Form/>
      </div>
    </div>
  )
}

export default Contact