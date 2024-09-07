import './HowItWorks.css'

function HowItWorks() {
  return (
    <div className='how-it-works-container'>
        <div className="how-it-works-image">
            <img className="bottom-image" src="public/assets/How it works_.png" alt="" />
            <img className="top-image" src="public/assets/How it works_ (1).png" alt="" />
        </div>
        <div>
            <img className="base-image" src="public\assets\Group 2.png" alt="" />
            <div className='video-container'>
              <div className='video-1'>
                <video className="video-element" controls>
                  <source src="public\assets\earner creater.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <img src="public\assets\For Creators.png" alt="" className='creator-image'/>
              </div>
              <div className='video-2'>
                <video className="video-element" controls>
                  <source src="public\assets\earnr hindi.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <img src="public\assets\For Supporters.png" alt="" className='supporter-image'/>
              </div>
            </div>
        </div>
    </div>
  )
}

export default HowItWorks;