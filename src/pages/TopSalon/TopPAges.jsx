import React from 'react'
import salon from "../../assets/salon.png"

const TopPAges = () => {
  return (
    <div>                <div className="homa_page_tops">                
    <span className="tops_salon_title">Top beauty salons near you</span>

    <div className="top_block"> 

      <div className="top_saection">
          <img className="salon_img" src={salon} alt="" />
          <span className="top_review">Review</span>
      </div>

      <div className="top_saection">
         <img className="salon_img" src={salon} alt="" />
         <span className="top_review">Review</span>
      </div>

      <div className="top_saection">
         <img className="salon_img" src={salon} alt="" />
         <span className="top_review">Review</span>
      </div>

      <div className="top_saection">
         <img className="salon_img" src={salon} alt="" />
         <span className="top_review">Review</span> 
      </div>
  </div>

  </div></div>
  )
}

export default TopPAges