import React from 'react'
import './componentHeader.css';
import Logo2 from "../../assets/Logo2.png"

const ComponentHeader = () => {
  return (
    <div className="header_main_block">
            <div className="header_inside_block"> 
                    <img src={Logo2} alt="..." />
                    <h1 className="header_title_text">Home Office Assistant</h1>
            </div>
    </div>
  )
}

export default ComponentHeader