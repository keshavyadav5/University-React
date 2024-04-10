import React from 'react'
import './Campus.css';

function Campus() {
  return (
    <div className='campus'>
     <div className="gallery">
      <img src="../../public/photos/gallery-1.png" alt="" />
      <img src="../../public/photos/gallery-2.png" alt="" />
      <img src="../../public/photos/gallery-3.png" alt="" />
      <img src="../../public/photos/gallery-4.png" alt="" />
     </div>
     <button className='btn dark-btn'>See more here <img src="../../public/photos/white-arrow.png" alt="" /></button>
    </div>
  )
}

export default Campus