import React,{useState} from 'react'
import './maincomponent.css'
import Buttons from '../../button/Buttons'
import iphone from '../../../assets/iphone.png'
import iphoneBack from '../../../assets/gradient 1.png'
import {motion} from 'framer-motion'
import { useNavigate } from 'react-router-dom';
import ShareBtn from '../sharebtn/ShareBtn'


const Maincomponent = ({changeTheme}) => {
  const [showPopup, setShowPopup] = useState(false);
  const backgroundColor = changeTheme ? 'white' : 'black';
  const trackCryptoClass = changeTheme ? 'track_crypto1' : 'track_crypto';
  const navigate = useNavigate();

  const handleShowShares = () => {
    setShowPopup(true);
  }

  // Function to handle closing the popup
  const handleClosePopup = () => {
    setShowPopup(false);
  }
  return (
    <div className="main_container">
      <div style={{ backgroundColor }} className='maincomponent'>
        
        <div  className="left_side">
            <motion.h1 className={trackCryptoClass} 
               initial={{ opacity: 0, y: 50 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5 }}
            >Track Crypto</motion.h1>
            <motion.h1 className='real-time'
               initial={{ opacity: 0, y: 50 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5, delay:0.5 }}
            >Real Time.</motion.h1>
            <motion.p
               initial={{ opacity: 0, y: 50 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5, delay:1 }}
            >Track crypto through a public api in real time. Visit the dashboard to do so!</motion.p>
            <div className="btns">
                <Buttons btn='Dashboard' onclick={() => navigate('/dashboard')}/>
                <button onClick={handleShowShares} className='sharebtn'>share</button>
            </div>
        </div>
        <div className="right_side">
            <motion.img className='iphone'
            initial={{  y: -10 }}
            animate={{  y: 10 }}
            transition={{ type:"smooth", repeatType:"mirror",duration:2, repeat:Infinity }}
            src={iphone} alt="iphone img" />
            <img className='iphoneback' src={iphoneBack} alt="iphoneBack" />
        </div>

        {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <span className="close" onClick={handleClosePopup}>&times;</span>
            <ShareBtn />
          </div>
        </div>
      )}
      
    </div>
    </div>
    
  )
}

export default Maincomponent