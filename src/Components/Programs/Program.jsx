import React from 'react';
import './Programs.css'

const Program = () => {
  return (
    <div className='programs'>
      <div className="program">
        <img src="../../public/photos/program-1.png" alt="" />
        <div className="caption">
          <img src="../../public/photos/program-icon-1.png" alt="" />
          <p>Graduation Degree</p>
        </div>
      </div>
      <div className="program">
        <img src="../../public/photos/program-2.png" alt="" />
        <div className="caption">
          <img src="../../public/photos/program-icon-2.png" alt="" />
          <p>Master Degree</p>
        </div>
      </div>
      <div className="program">
        <img src="../../public/photos/program-3.png" alt="" />
        <div className="caption">
          <img src="../../public/photos/program-icon-3.png" alt="" />
          <p> Post Graduation </p>
        </div>
      </div>
    </div>
  )
}

export default Program