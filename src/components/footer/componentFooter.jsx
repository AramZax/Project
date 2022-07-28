import React from 'react'
import './componentFooter.css'
import footerVisaCard from "../../assets/footerVisaCard.png"
import footerMasterCard from '../../assets/footerMasterCard.png'
import footerMaestroCard from "../../assets/footerMaestroCard.png"
import lastApp from "../../assets/lastApp.png"
import lastGoogle from "../../assets/lastGoogle.png"

const ComponentFooter = () => {
  return (
    <div className='component_footer_parent'>


      <div className='component_footer_discription'>
        <div className='component_footer_compani'>
              <span className='footer_compani'>Company</span>
              <span className='footer_compani'>About us</span>
              <span className='footer_compani'>News</span>
              <span className='footer_compani'>Contact us</span>
        </div>

        <div className='component_footer_Maintenance'>
          <span className='footer_maintencace'>Maintenance and services</span>
          <span className='footer_maintencace'>Saloon</span>
          <span className='footer_maintencace'>Plant Health</span>
          <span className='footer_maintencace'>Animal Health</span>
          <span className='footer_maintencace'>Tutoring/Coaching</span>
          <span className='footer_maintencace'>IT & Computing</span>
          <span className='footer_maintencace'>Home Office Set Up</span>

        </div>
        <div className='component_footer_Payment '>
            <span className='footer_maintencace'>Payment Methods</span>

            <div className='component_footer_visa'>
         
                <img className='visaImpg' src={footerVisaCard} alt="..." />
                
                <img className='visaImpg' src={footerMasterCard} alt="..." />

                <img className='visaImpg' src={footerMaestroCard} alt="..." />


            </div>

            <div className='component_footer_store'>

            
                <img className='appStore' src={lastApp} alt="" />
                <img className='googlePlay' src={lastGoogle} alt="" />
               
            </div>
        </div>

      </div>

    </div>
  )
}

export default ComponentFooter