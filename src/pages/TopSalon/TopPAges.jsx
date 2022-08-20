import axios from 'axios'
import React, { useState, useEffect } from 'react'
import salon from "../../assets/salon.png"
import { AiFillStar } from 'react-icons/ai'



const TopPAges = () => {
   const [data, setData] = useState([])



   useEffect(() => {
      axios.get(`https://www.amazon.org.am/api/admin/salons`)
         .then(response => setData(response.data))
         .catch(error => console.log(error))
     
   }, [])

   console.log(data, 'asdasd');



   return (
      <div className="homa_page_tops">
         <span className='top_span'>Top beauty salons near you</span>
         {data.map((element,index)=>{
            return(
               <div  key={index} className ="top_block">
              
   
                  <div className="top_saection">
                     <img className="salon_img" src={element.img} alt="" />
                     <span className="top_review">Review /  {element.revews} <AiFillStar className='top_star' /></span>
                  </div>
   
            </div>
         
            )
         })}
       
         </div>
   )
}

export default TopPAges