import React, { useState } from 'react'
import ComponentHeader from '../../components/header/componentHeader';
import { useForm } from 'react-hook-form';
import "../verificatioon/PageVerification.css"
import { Link, useLocation } from 'react-router-dom';



const PageVerification = () => {
    const { handleSubmit } = useForm({ shouldUseNativeValidation: true })

    const location = useLocation();
    console.log(location.state);


    const onSubmit = async data => { console.log(otp); };
    const [otp, setOtp] = useState(new Array(4).fill(""));

    const handleChange = (element, index) => {
        if (isNaN(element.value)) return false;

        setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

        //Focus next input
        if (element.nextSibling) {
            element.nextSibling.focus();
        }
    };

    return (
        <>
            <ComponentHeader />
            <div className='full_verification'>
                <form onSubmit={handleSubmit(onSubmit)} className="full_sms_masege_inp" >
                    
                    <div className='verification_title'>
                        <h1 className='verification_titles'>Verification code</h1>
                    </div>

                    <p> Please enter verification code sent to your mobile </p>

                    <div className='sms_masege_inp'>
                        {otp.map((data, index) => {
                            return (
                                <input
                                    className="sms_inp"
                                    type="text"
                                    name="otp"
                                    maxLength="1"
                                    key={index}
                                    value={data}
                                    onChange={e => handleChange(e.target, index)}
                                    onFocus={e => e.target.select()}
                                />
                            );
                        })}

                    </div>

                    <Link to="/home" className='pages_verification_linl'>
                        <input type={'submit'} value="verify" className='Next_btn' />
                    </Link>


                    <button
                        className="Clear_button"
                        onClick={e => setOtp([...otp.map(v => "")])}>
                        Clear

                    </button>
                </form>

            </div>
        </>
    )
}
export default PageVerification
