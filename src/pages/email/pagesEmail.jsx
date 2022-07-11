import React from "react"
import ComponentHeader from '../../components/header/componentHeader';
import ComponentFooter from '../../components/footer/componentFooter'
import "../../pages/email/pagesEmail.css"
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";


const PageEmail = () => {
    const { register, handleSubmit } = useForm({ shouldUseNativeValidation: true });
    const onSubmit = async data => { console.log(data) };

    return (
        <div>
            <ComponentHeader />
            <div className="email_section_parent">
                <form onSubmit={handleSubmit(onSubmit)} className="page_email">
                    <h1 className='Register_sign' > Sign up</h1>

                    <div className=" email_section">
                        <span className="email_section_title">Enter your email</span>
                        <input className="email_register" type="text" placeholder='Email...'  {...register("email")} />

                    </div>
                    <Link to="/password" className="email_section_link"> <button className="email_section_next" >Next</button>  </Link>
                </form>

            </div>
            <ComponentFooter />
        </div>

    )
}
export default PageEmail