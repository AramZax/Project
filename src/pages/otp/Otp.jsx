import React from 'react'
import { useForm } from 'react-hook-form';
import ComponentHeader from '../../components/header/componentHeader';
import { Link } from 'react-router-dom';
import PhoneInput from 'react-phone-input-2'
import { useState } from 'react';
import "../otp/Otp.css";
import 'react-phone-input-2/lib/style.css'


const Otp = () => {
    const { handleSubmit } = useForm({ shouldUseNativeValidation: true });

    const [state, setState] = useState('');

    const onSubmit = () => {
       console.log(state)
    } 
    
    return (
        <>
            <ComponentHeader />
            <div className='Otp_full_login'>

                <form onSubmit={handleSubmit(onSubmit)} className="Otp_full_login_input" >

                    <div className='Otp_main_section'>
                        <h1 className='Otp_title'>Enter mobile number</h1>
                    </div>

                    <div className='Otp_main_section'>
                        <PhoneInput className='Otp_number_inp'  onChange={phone => setState({ phone })} />
                    </div>

                    
                        <Link to="/pageslogin" className='otp_page_link'>
                          <input type={'submit'}  className='Otp_next_BtnNext' value="Submit" />
                        </Link>
                    

                </form>
                
            </div>
        </>
    )
}
export default Otp