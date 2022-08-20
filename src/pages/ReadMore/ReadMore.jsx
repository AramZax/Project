import React, { useEffect, useState } from 'react'
import MainHeader from "../../components/mainHeader/mainComponent"
import "../../pages/ReadMore/ReadMore.css"
import ComponentFooter from '../../components/footer/componentFooter'
import { AiFillStar } from 'react-icons/ai'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import DataTIme from '../DataTime/DataTIme'



const ReadMore = () => {
  const [state, setState] = useState([])
  const { id } = useParams();




  useEffect(() => {
    axios.get(`https://www.amazon.org.am/api/admin/services/${id}`)
      .then(res => setState(res.data))
      .catch(err => console.log(err))

  }, [])


 
  console.log(state, 'stat')

  return (

    <div>
      <MainHeader />
      {state.map((element, index) => {
        return (
          <div className='item_pages_parent' key={index}>
            <div className='item_pages_title'><span>{element.title}</span></div>
            <div className="item_pages_img_section">
              <img className='item_img' src={element.image} alt="..." />
            </div>


            <div className="item_pages_description_parent">
              <div className="item_pages_description_section">
                <div className="item_pages_left"></div>
                <span className='description_title'> {element.title}</span>
                <div className="item_pages_rigth"></div>
              </div>
              <div className="description">
                <span className='description_title_main'>{element.description}</span>
              </div>

              <div className="customor_review">
                <span className='customor_review_title' >Customer review</span>
                <div className='star_section'>

                  <AiFillStar className='star_icon' />
                  <span className='revews_span'> {element.revews}</span>
                </div>
                <span className='price_title'>Price - {element.price}$/h</span>
              </div>


            </div>
             <DataTIme id ={id}/> 
          
            <ComponentFooter />
          </div>
        )
      })}


    </div>

  )
}

export default ReadMore