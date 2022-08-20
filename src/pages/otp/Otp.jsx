import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import ComponentHeader from '../../components/header/componentHeader';
import ComponentFooter from '../../components/footer/componentFooter';
// import { useNavigate, useLocation, } from 'react-router-dom';
import PhoneInput from 'react-phone-input-2'
import "../otp/Otp.css";
import 'react-phone-input-2/lib/style.css'
import { Link } from "react-router-dom"


const Otp = () => {
    const { handleSubmit } = useForm();
    const [state, setState] = useState('')

    const onSubmit = () => {
        console.log(state)
    }
    return (
        <>
            <ComponentHeader />
            <div>
                <div className="Otp_full_login">
                    <div className='login_register'>
                        <div className='log_sign' >
                            <Link to="/register" className='pages_login_sign'>sign up</Link>
                            <button className='pages_login_btn'>login </button>
                        </div>
                    </div>
                    <form className="Otp_full_login_input" onSubmit={handleSubmit(onSubmit)}>
                        <h1 className='otp_title'> Log in by OTP</h1>
                        <div className="Otp_title">
                            <h3>Enter mobile number</h3>
                            <PhoneInput onChange={phone => setState({ phone })} />
                        </div>
                        <Link to="/verification"><button className="number_but">Send the code</button>  </Link>
                    </form>
                </div>
                <ComponentFooter />
            </div>
        </>
    )
}
export default Otp