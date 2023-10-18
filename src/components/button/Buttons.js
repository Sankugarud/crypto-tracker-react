import React from 'react'
import './button.css'
const Buttons = ({btn, onclick, outline}) => {
  return (
    <div className={outline ? 'outline' : 'btn'} onClick={onclick}>
        {btn}
    </div>
  )
}

export default Buttons