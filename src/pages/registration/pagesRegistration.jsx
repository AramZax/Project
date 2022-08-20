import React, { useState } from 'react'
import ComponentHeader from '../../components/header/componentHeader';
import ComponentFooter from '../../components/footer/componentFooter'
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AiFillFacebook } from "react-icons/ai"
import { BsGoogle } from "react-icons/bs"
import { BsShieldFillCheck } from "react-icons/bs"
import { AiFillInstagram } from "react-icons/ai"
import "../../pages/registration/pagesRegistration.css"
import axios from 'axios';
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import Serviceimage from '../../assets/service.png'



const PagesRegistration = () => {
  const { register, handleSubmit } = useForm({ shouldUseNativeValidation: true });

  const navigate = useNavigate();
  const [loading, setLoading] = useState(true)

  const onSubmit = data => {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    axios.post(`https://www.amazon.org.am/api/auth/register`, data)
      .then(res => window.localStorage.setItem("token", res.data.token))
      .then(() => {
        if (window.localStorage.token) {
          setLoading(!loading);
          setTimeout(() => {
            navigate('/home')
          }, 2000)
        } else if (!re.test(data.email)) {
          return null
        } else {
          return null
        }
      })

      .catch((err) => {
        console.log(err)
        if (err) {
          setLoading(!loading)
          setTimeout(() => {
            setLoading(true)
          }, 2000)
        }
      }
      )


  }


  return (
    <div >
      <ComponentHeader />
      {loading ? <div className='Pages_register_parent' >

        <div className='register_login'>


          <div className='login_register'>
            <div className='log_sign' >
              <button className='pages_login_btn'>sign up</button>
              <Link to="/login" className='pages_login_sign'>login</Link>
            </div>
          </div>

        </div>
        <div className='registration_block_full'>

          <div className='left_side_block'>
            <img src={Serviceimage} alt='the image is not available now, sorry' />
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className='form_register_section'>
            <h1 className='Register_sign' > Sign up</h1>

            <div className='registraton_name_inp' >
              
              <input className='Name_register' type="text" required placeholder='Your full name'  {...register("name")} />
             
              <input className='email_registerS' type="email" placeholder='Email or mobile number' required {...register("email")} />
            
              <input className='password_register' type="password" required placeholder='Your password' {...register("password")} />
            
              <input className='password_donfirmation' type="password" required placeholder='Confirm your password'  {...register("password_confirmation")} />
            </div>

            <div className='Registration_Link'>
              <button className='Next_Register'>Next</button>
            </div>


            <div className="social_section">
              <div className="instagram_block"><AiFillInstagram className='instIcon' /> </div>
              <div className="facebook_block"><AiFillFacebook className='fbIcon' />  </div>
              <div className='google_block'><BsGoogle className='googleIcon' /></div>
              <Link to="/otp" className='number_block'><BsShieldFillCheck className='numberIcon' /></Link>
            </div>

          </form>

        </div>


      </div> :
        <div className='loading_section'>

          <ClimbingBoxLoader color={"#3578AF"} loading={true} size={50} />

        </div>}
      <ComponentFooter />
    </div>
  )
}

export default PagesRegistration 