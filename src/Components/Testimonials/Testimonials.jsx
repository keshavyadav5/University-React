import React, { useRef } from 'react'
import './Testimonials.css';

function Testimonials() {
  const slider = useRef();
  let tx = 0;
  const slideForward = () =>{
    if(tx > -50){
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`
  }
  const slideBackward = () =>{
    if(tx < 0){
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`
  }

  return (
    <div className='testimonials'>
      <img src="../../public/photos/next-icon.png" alt="" className='next-btn' onClick={slideForward}/>
      <img src="../../public/photos/back-icon.png" alt="" className='back-btn' onClick={slideBackward}/>
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src="../../public/photos/user-1.png" alt="" />
                <div>
                  <h3>William Jackson</h3>
                  <span>Apex, Nepal</span>
                </div>
              </div>
              <p>Choosing to pursue my degree at Apex was one of the best decision I've ever made. The supportive community, state-of-the-art facilities, and commitment to academinc excellence have truely exceeds my expections.</p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src="../../public/photos/user-2.png" alt="" />
                <div>
                  <h3>William Jackson</h3>
                  <span>Apex, Nepal</span>
                </div>
              </div>
              <p>Choosing to pursue my degree at Apex was one of the best decision I've ever made. The supportive community, state-of-the-art facilities, and commitment to academinc excellence have truely exceeds my expections.</p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src="../../public/photos/user-3.png" alt="" />
                <div>
                  <h3>William Jackson</h3>
                  <span>Apex, Nepal</span>
                </div>
              </div>
              <p>Choosing to pursue my degree at Apex was one of the best decision I've ever made. The supportive community, state-of-the-art facilities, and commitment to academinc excellence have truely exceeds my expections.</p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src="../../public/photos/user-4.png" alt="" />
                <div>
                  <h3>William Jackson</h3>
                  <span>Apex, Nepal</span>
                </div>
              </div>
              <p>Choosing to pursue my degree at Apex was one of the best decision I've ever made. The supportive community, state-of-the-art facilities, and commitment to academinc excellence have truely exceeds my expections.</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Testimonials