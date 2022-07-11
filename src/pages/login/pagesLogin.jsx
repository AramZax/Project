import React from 'react'
import ComponentHeader from '../../components/header/componentHeader';
import ComponentFooter from '../../components/footer/componentFooter'
import './pagesLogin.css';
import { Link } from "react-router-dom";
import {AiFillFacebook} from "react-icons/ai"
import {AiFillInstagram} from "react-icons/ai"

const PagesLogin = () => {
  

    return (
        <div>
            <ComponentHeader />
            <div className='full_login'>
                <form className='full_login_input_group'>
                    <h1 className="login_title"> Log in </h1>
                    
                    <Link to="/loginEmail" className='Pages_login_link'> 
                       <button className='login_page_emailBtn'>Continue with email</button> 
                    </Link>   
                      
           
                   <Link to="/otp" className='Pages_login_link'> 
                   <button className='login_page_emailBtn'>Continue with mobile number</button> 
                   </Link> 
               
       
                    <div className="facebook_block"><AiFillFacebook className='fbIcon'/> Continue with Facebook </div>
                    <div className="instagram_block"><AiFillInstagram className='instIcon'/> Continue white Instagram</div>
                </form>
            </div>
            <ComponentFooter />
        </div>
    )
}

export default PagesLogin