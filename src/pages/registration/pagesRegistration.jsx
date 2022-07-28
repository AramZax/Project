import React,{useState} from 'react'
import ComponentHeader from '../../components/header/componentHeader';
import ComponentFooter from '../../components/footer/componentFooter'
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AiFillFacebook } from "react-icons/ai"
import { AiFillInstagram } from "react-icons/ai"
import "../../pages/registration/pagesRegistration.css"
import axios from 'axios';
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";



const PagesRegistration = () => {
  const { register, handleSubmit } = useForm({ shouldUseNativeValidation: true });

  const navigate = useNavigate();
  const [loading, setLoading] = useState(true)

  const onSubmit =  data => {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; 
    axios.post(`https://www.amazon.org.am/api/auth/register`, data)
        .then(res => window.localStorage.setItem("token", res.data.token))
        .then(() => {
            if (window.localStorage.token) {
                setLoading(!loading);
                setTimeout(() => {
                    navigate('/home')
                }, 2000)
            } else if(!re.test(data.email)) {
                return null
            }else{
              return null
            }

        })
        .catch((err) => {
          console.dir(err)
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
        <form onSubmit={handleSubmit(onSubmit)} className='form_register_section'>
          <h1 className='Register_sign' > Sign up</h1>

          <div className='registraton_name_inp' >
            <span className='Name_title' >Enter your full name</span>
            <input className='Name_register' type="text"  placeholder='John sla...' required   {...register("name")} />
            <input className='email_registerS'  type="email" placeholder='email ...' required {...register("email")} />
            <input className='password_register' type="password" placeholder='password' required {...register("password")}/>
            <input className='password_donfirmation' type="password" placeholder='password_confirmation' required  {...register("password_confirmation")}  />
            
          </div>
        
          <div className='Registration_Link'>
            <button className='Next_Register'>Next</button>
          </div>
        

          <div className='facebook_registration_block'><AiFillFacebook className='fbIcon' />Continue with Facebook </div>
          <div className='instagem_registration_block'><AiFillInstagram className='instIcon' /> Continue white Instagram</div>


          <div className='register_footer'>
            <span >Already have an account?</span>

            <Link to="/login" className="sign_up_link regLogin"> Login</Link>

          </div>
        </form>
      </div>: 
        <div className='loading_section'>

       <ClimbingBoxLoader color={"#9CC3D5"} loading={true} size={50} />

       </div> } 
      <ComponentFooter />
    </div>
  )
}

export default PagesRegistration 