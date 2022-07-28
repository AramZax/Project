import React, { useState } from 'react'
import ComponentHeader from '../../components/header/componentHeader';
import ComponentFooter from '../../components/footer/componentFooter'
import './pagesLogin.css';
import { AiFillFacebook } from "react-icons/ai"
import { AiFillInstagram } from "react-icons/ai"
import {  useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";



const PagesLogin = () => {
    const { register, handleSubmit } = useForm({ shouldUseNativeValidation: true });
    const navigate = useNavigate()


    const [loading, setLoading] = useState(true)




    const onSubmit = data => {
        axios.post(`https://www.amazon.org.am/api/auth/login`, data)
            .then(res => window.localStorage.setItem("token", res.data.token))
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
            {loading ? <div className='full_login'>
                <form className='full_login_input_group' onSubmit={handleSubmit(onSubmit)}>
                    <h1 className="login_title"> Log in </h1>
                    <div className='Pages_login_link'>
                        <input className='login_page_input' type="text" required  {...register("name")} placeholder="UserName" />

                    </div>

                    <input className='login_page_input' type="text" required {...register("password")} placeholder="password" />
                    <input type="submit" className='loginSubmit' />
                    <div className="facebook_block"><AiFillFacebook className='fbIcon' /> Continue with Facebook </div>
                    <div className="instagram_block"><AiFillInstagram className='instIcon' /> Continue white Instagram</div>
                </form>
            </div> :
                <div className='loading_section'>

                    <ClimbingBoxLoader color={"#9CC3D5"} loading={true} size={50} />
                </div>
            }
            <ComponentFooter />
        </div>
    )

}

export default PagesLogin;