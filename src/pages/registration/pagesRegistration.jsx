import React from 'react'
import ComponentHeader from '../../components/header/componentHeader';
import ComponentFooter from '../../components/footer/componentFooter'
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import {AiFillFacebook} from "react-icons/ai"
import {AiFillInstagram} from "react-icons/ai"
import "../../pages/registration/pagesRegistration.css"


const PagesRegistration = () => {
  const { register, handleSubmit } = useForm({ shouldUseNativeValidation: true });
  const onSubmit = async data => {
    console.log(data);
  }


 
  return (
    <div >
      <ComponentHeader />
      <div className='Pages_register_parent' >
        <form onSubmit={handleSubmit(onSubmit)} className='form_register_section'>
          <h1 className='Register_sign' > Sign up</h1>



          <div className='registraton_name_inp' >
            <span className='Name_title' >Enter your full name</span>
            <input className='Name_register'  type="text" placeholder='John sla...'  {...register("name")} />
          </div>


         
              <Link to = "/choose" className='Registration_Link'><button className='Next_Register'>Next</button></Link>  
         

    
          
            <div className='facebook_registration_block'><AiFillFacebook className='fbIcon'/>Continue with Facebook </div> 
           <div className='instagem_registration_block'><AiFillInstagram className='instIcon'/> Continue white Instagram</div>
       


        
         


          <div className='register_footer'>
            <span >Already have an account?</span>
    
            <Link to="/login" className="sign_up_link regLogin"> Login</Link>
            
          </div>
        </form>
      </div>
      <ComponentFooter />
    </div>
  )
}

export default PagesRegistration 