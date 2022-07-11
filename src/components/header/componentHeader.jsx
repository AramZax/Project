import React from 'react'
import './componentHeader.css';
import Logo from '../../assets/logo.png'

const ComponentHeader = () => {
  return (
    <div className="header_main_block">
            <div className="header_inside_block"> 
                    <img src={Logo} alt="..." />
                    <h1 className="header_title_text">Complete House Services</h1>
            </div>
    </div>
  )
}

export default ComponentHeader