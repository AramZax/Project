import React from "react"
import ComponentHeader from '../../components/header/componentHeader';
import "../password/pagesPassword.css"
import { useForm } from "react-hook-form";



const PagesPassword = () => {
    const { register, handleSubmit } = useForm({ shouldUseNativeValidation: true });
    const onSubmit = async data => { console.log(data) };
    return (
        <div>
            <ComponentHeader />
            <div className="password_page_section">
                <form onSubmit={handleSubmit(onSubmit)} className="page_password" >
                    <h1 className="password_page_title">Sign up </h1>

                    <div className="password_first_section">
                        <span className="password_title">Enter  your password</span>
                        <input className="password_inp" type="password"  {...register("password")} />
                    </div>

                    <div className="password_first_section">
                        <span className="password_title">Confirm your password</span>
                        <input className="password_inp" type="password"  {...register("confirm password")} />
                    </div>

                    <button className="password_btn">Next </button>

                </form>

            </div>

        </div>
    )
}
export default PagesPassword