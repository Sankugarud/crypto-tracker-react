import React from 'react'
import './home.css'
import Maincomponent from '../landingpage/Maincomponent/Maincomponent'

const Home = ({changeTheme}) => {
  const backgroundColor = changeTheme ? 'white' : 'black';

  
  return (
    <div className='home'>
      <Maincomponent changeTheme={changeTheme} />
    </div>
  )
}

export default Home