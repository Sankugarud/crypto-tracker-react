import React from 'react'
import './footer.css'
const Footer = () => {
    let genColor = '';
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        genColor =  color;
      }
      getRandomColor();
  return (
      <div style={{backgroundColor:genColor}} className="container">
        <div>
            <span>&copy; 2023 creativeLabs.</span>
        </div>
        <div>
            <p>Powered by Zerodha</p>
        </div>
      </div>
  )
}

export default Footer