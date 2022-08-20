import React, { useState } from 'react'
import ComponentHeader from '../../components/header/componentHeader';
import ComponentFooter from '../../components/footer/componentFooter'
import './pagesLogin.css';
import { AiFillFacebook } from "react-icons/ai"
import { AiFillInstagram } from "react-icons/ai"
import { BsGoogle } from "react-icons/bs"
import { BsShieldFillCheck } from "react-icons/bs"
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import { Link } from "react-router-dom"
import Serviceimage from '../../assets/service.png'


const PagesLogin = () => {
    const { register, handleSubmit } = useForm({ shouldUseNativeValidation: true });
    const navigate = useNavigate()

    const [loading, setLoading] = useState(true)

    const onSubmit = data => {
        axios.post(`https://www.amazon.org.am/api/auth/login`, data)
            .then(res => window.localStorage.getItem(res.data.token))
            .then(() => {
                if (window.localStorage.token) {
                    setLoading(!loading);

                    setTimeout(() => {
                        navigate('/home')
                    }, 2000)
                } else {
                    return null
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
    }


    return (
        <div>
            <ComponentHeader />
            {loading ? <div className="parent">

                <div className='full_login'>
                    <div className='login_register'>
                        <div className='log_sign' >
                            <Link to="/register" className='pages_login_sign'>sign up</Link>
                            <button className='pages_login_btn'>login </button>

                        </div>
                    </div>
                    <div className='login_block '>
                        <div className='left_side_block'>
                            <img src={Serviceimage} alt='the image is not available now, sorry' />
                        </div>

                        <form className='full_login_input_group' onSubmit={handleSubmit(onSubmit)}>
                            <h1 className="login_title"> Log in </h1>
                            <div className='login_name_inp_section'>
                                <input className='login_page_input' type="text" required  {...register("name")} placeholder="type your user name please" />
                            </div>
                            <div className='login_password_inp_section'>
                                <input className='login_page_input' type="password" required {...register("password")} placeholder="type a password..." />
                            </div>
                            <input type="submit" value="next" className='loginSubmit' />

                            <div className="social_section">
                                <div className="instagram_block"><AiFillInstagram className='instIcon' /> </div>
                                <div className="facebook_block"><AiFillFacebook className='fbIcon' />  </div>
                                <div className='google_block'><BsGoogle className='googleIcon' /></div>
                                <Link to="/otp" className='number_block'><BsShieldFillCheck className='numberIcon' /></Link>
                            </div>

                            <span className='login_pages_forgot'>Forgot your password?</span>
                        </form>
                    </div>
                </div>



            </div> :
                <div className='loading_section'>
                    <ClimbingBoxLoader color={"#3578AF"}  loading={true} size={50} />
                </div>
            }

            <ComponentFooter />
        </div>
    )

}

export default PagesLogin;