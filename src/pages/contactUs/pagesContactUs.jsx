import React, { useState } from 'react'
import MainHeader from '../../components/mainHeader/mainComponent'
import ComponentFooter from '../../components/footer/componentFooter'
import "../../pages/contactUs/pagesContacUS.css"
import { BsTelephoneFill } from "react-icons/bs"
import { AiOutlineMail } from "react-icons/ai"
import { GoLocation } from "react-icons/go"
import { ImFacebook2 } from "react-icons/im"
import { BsInstagram } from "react-icons/bs"
import { AiFillLinkedin } from "react-icons/ai"
import { AiFillTwitterSquare } from "react-icons/ai"
import { useForm } from "react-hook-form";
import axios from 'axios'
import HashLoader from "react-spinners/HashLoader";
import { useNavigate } from 'react-router-dom'





const ContacUS = () => {
  const { register, handleSubmit } = useForm({ shouldUseNativeValidation: true });
  const [loading, setLoading] = useState(true)

  const navigate = useNavigate()

  const onSubmit = async data => {
    console.log(data, 'data');
    await axios.post(`https://www.amazon.org.am/api/admin/contactus`, data)
      .then(response => {
        if (response.status === 200) {
          setLoading(!loading)
          setTimeout(() => {
            navigate('/compleat')
          }, 2000)

        }
      })
      .catch((err) => {
        if (err) {
          setLoading(!loading)
          setTimeout(() => {
            setLoading(true)

          }, 2000)
        }
      }
      )
  };




  return (
    <div>
      <MainHeader />
      {loading ? <div className='pages_contactUs_parent'>
        <div className="contactUS_main">
          <div></div>
          <span className='contact_us_span'>Contact us</span>

          <div className="contact_us_view_task">
            <div>View All task /Order</div>
            <div>Check Payment Confirmation</div>
            <div>Call /Screen Share Support</div>
            <div>FAQ/First AID</div>
            <div>Book Assistance  manually for the customer</div>
          </div>

          <div className="contact_us_other_section">

            <h1 className='contact_us_other_title'> Other</h1>

            <div className="information_section_parent">
              <div className="information_section">
                <span className='information_Section_Span info_span'>Contact information</span>
                <span className='information_Section_Span'>Our friendly support team is here to help.</span>
                <span className='information_Section_Span'><BsTelephoneFill className='info_phone_icon' /> + 0123 4567 8910</span>
                <span className='information_Section_Span'> <AiOutlineMail className='info_masseg_icon' /> hoa@gmail.com</span>
                <span className='information_Section_Span'> <GoLocation className='info_location_icon' /> Brook st 12/3</span>

                <div className='information_social_Section'>
                  <BsInstagram className='info_social_icons insta' />
                  <ImFacebook2 className='info_social_icons  face' />
                  <AiFillLinkedin className='info_social_icons in' />
                  <AiFillTwitterSquare className='info_social_icons twiter' />

                </div>
              </div>


              <form onSubmit={handleSubmit(onSubmit)} className="contact_us_inp_section">

                <div className="contact_us_name_inp">
                  <span className='inp_section_span'>Your name</span>
                  <input className='contact_name' type="text" {...register("full_name")} />
                </div>

                <div className="contact_us_name_inp">
                  <span className='inp_section_span'>Your email</span>
                  <input className='contact_name' type="email" {...register("email")} />
                </div>

                <div className="contact_us_name_inp">
                  <span className='inp_section_span'>Your mobile number</span>
                  <input className='contact_name' type="number" {...register("mobile_number")} />
                </div>

                <div className="contact_us_name_inp">
                  <span className='inp_section_span'>Message</span>
                  <input className='message_inp' type="text" {...register("message")} />
                  <button className='contact_btn'>Send</button>
                </div>

              </form>

            </div>

          </div>

        </div>

      </div> :
        <div className='loading_section'>
           <h1 className='loading_title'>Loading...</h1>
          <HashLoader color={"#3578AF"} loading={true} size={80} />
         
        </div>}
      <ComponentFooter />
    </div>
  )
}

export default ContacUS