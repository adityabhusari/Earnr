import React from 'react'
import './HowItWorks.css'

function HowItWorks() {
  return (
    <div className='how-it-works-container'>
        <div className="how-it-works-image">
            <img className="bottom-image" src="src/assets/How it works_.png" alt="" />
            <img className="top-image" src="src/assets/How it works_ (1).png" alt="" />
        </div>
        <div>
            <img className="base-image" src="src\assets\Group 2.png" alt="" />
            <div className='video-container'>
              <div className='video-1'>
                <img className="mid-image" src="src\assets\Rectangle 6.png" alt="" />
                <img className="up-image" src="src\assets\Rectangle 5.png" alt="" />
              </div>
              <div className='video-2'>
                <img className="mid-image-1" src="src\assets\Rectangle 6.png" alt="" />
                <img className="up-image-1" src="src\assets\Rectangle 5.png" alt="" />
              </div>
            </div>
            
        </div>
    </div>
  )
}

export default HowItWorks