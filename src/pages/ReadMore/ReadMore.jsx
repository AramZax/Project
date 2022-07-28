import React from 'react'
import MainHeader from "../../components/mainHeader/mainComponent"
import "../../pages/ReadMore/ReadMore.css"
import ComponentFooter from '../../components/footer/componentFooter'
import catigoria from '../../assets/catigoria.png'

const ReadMore = () => {
  return (
    <div>
        <MainHeader/>
        <div className='more_Info_parent'>
            <div className='more_info'>

            </div>
            <div className='more_info_our_services'>

            </div>
            <div className='more_info_recommended'>

            </div>
                <ComponentFooter/>
        </div>
    </div>
  )
}

export default ReadMore