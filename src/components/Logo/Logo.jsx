import React from 'react'
import './Logo.css'
import { PiBuildingsFill } from 'react-icons/pi';
const Logo = () => {
  return (
    <div className='logo'>
      <div className="icon__container">
        <PiBuildingsFill></PiBuildingsFill>
      </div>
      <h1 className="name">Om <span>Design &</span> Construction</h1>
    </div>
  )
}

export default Logo
