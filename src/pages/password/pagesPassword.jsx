// import React from "react"
// import ComponentHeader from '../../components/header/componentHeader';
// import "../password/pagesPassword.css"
// import { useForm } from "react-hook-form";
// import { useLocation, useNavigate } from "react-router-dom";
// import axios from "axios";




// const PagesPassword = () => {
//     const { register, handleSubmit } = useForm({ shouldUseNativeValidation: true });
//     const location = useLocation();
//     const navigate = useNavigate();


//     const onSubmit = async data => {
//         location.state = {
//             name: location.state.name,
//             email: location.state.email,
//             password: data.password,
//             password_confirmation: data.password_confirmation
//         }
        
//            console.log(location.state);

//                     await axios.post(`https://www.amazon.org.am/api/auth/register`,  location.state)
//                     .then(res => window.localStorage.setItem("token", JSON.stringify(res.data.token))  )  
//                     .catch(err => console.dir(err))
//                     if(window.localStorage.token){
//                         navigate("/home" )
//                     }

        
//     };


//     return (
//         <div>
//             <ComponentHeader />
//             <div className="password_page_section">

//                 <form onSubmit={handleSubmit(onSubmit)} className="page_password" >
                    
//                     <h1 className="password_page_title">Sign up </h1>

//                     <div className="password_first_section">
//                         <span className="password_title">Enter  your password</span>
//                         <input className="password_inp" type="password" required  {...register("password")} />
//                     </div>

//                     <div className="password_first_section">
//                         <span className="password_title">Confirm your password</span>
//                         <input className="password_inp" type="password"  required {...register("password_confirmation")} />
//                     </div>

//                     <button className="password_btn">Next </button>

//                 </form>

//             </div>

//         </div>
//     )
// }
// export default PagesPassword