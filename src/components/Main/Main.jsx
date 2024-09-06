import './Main.css'
import Contact from '../Contact-us/Contact'
import Navbar from '../Navbar/Navbar'
import Creator from '../Creator/Creator'
import HowItWorks from '../How-it-works/HowItWorks'

function Main() {
  return (
    <div className='main'>
        <Navbar/>
        <Creator/>
        <HowItWorks/>
        <Contact/>
    </div>
  )
}

export default Main