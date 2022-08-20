import React from 'react'
import MainHeader from '../../components/mainHeader/mainComponent'
import "../compleatis/Compleate.css"
import ComponentFooter from '../../components/footer/componentFooter'
import {IoIosCheckboxOutline} from "react-icons/io"
import { Link } from 'react-router-dom'

const Compleat = () => {


  return (
   <div>
       <MainHeader />
       <div className='compleate_full_parent'>
            <div className='successful_div'>
                <div className='check_title_section'>
                     <h1 className='succesful_title'>Successful</h1>
                    <IoIosCheckboxOutline className='checkbox_icon'/>
                </div>
                   
                    <div className='succesful_lick_section'>
                        <Link to ="/home" > <span className='succesful_link'>Back to Home</span></Link>
                    </div>
            </div>
       </div>
       <ComponentFooter />
   </div>
  )
}

export default Compleat