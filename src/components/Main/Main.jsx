import React from 'react'
import './Main.css'
import Contact from '../Contact-us/Contact'
import RoadmapContainer from '../Rodmap-container/RoadmapContainer'
import Navbar from '../Navbar/Navbar'
import Creator from '../Creator/Creator'
import HowItWorks from '../How-it-works/HowItWorks'

function Main() {
  return (
    <div className='main'>
        <Navbar/>
        <Creator/>
        <HowItWorks/>
        <div className='image'>
          <img src="src\assets\earnr_5@4x 1.png"/>
        </div>
        <Contact/>
    </div>
  )
}

export default Main


