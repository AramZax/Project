import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form';
import ComponentHeader from '../../components/header/componentHeader';
import { useNavigate, useLocation, } from 'react-router-dom';
import PhoneInput from 'react-phone-input-2'
import "../otp/Otp.css";
import 'react-phone-input-2/lib/style.css'
import axios from 'axios'

const Otp = () => {
    const [state, setState] = useState([])

    useEffect(() => {
        axios.get(`https://www.amazon.org.am/api/admin/services`)
            .then(res => setState(res.data))
            .catch(err => console.log(err))
    })

    return (
        <>
            <ComponentHeader />
            {state.map((e) => {
                return (
                    <li> {e.description} </li>
                )
            }
            )}
        </>
    )
}
export default Otp