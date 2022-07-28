// import React from "react"
// import ComponentHeader from '../../components/header/componentHeader';
// import "../loginemail/pagesLoginEmail.css"
// import { useForm } from "react-hook-form";
// import { Link } from "react-router-dom";

// const PagesLoginEmail = () =>{
//     const { register, handleSubmit } = useForm({ shouldUseNativeValidation: true });
//     const onSubmit = async data => { console.log(data) };


//     return(
//        <div>
//          <ComponentHeader />
//                 <div className="logine_Page_email">
//                         <form onSubmit={handleSubmit(onSubmit)} className="login_email_section">
//                         <h1 className="title">Log in </h1>

//                         <div className="login_email_main" >
//                             <span className="Login_title">Enter your email</span>
//                             <input className="Login_email_inp" type="email"  placeholder="Email..." {...register("email")}/>
//                         </div>

//                     <Link to ="/loginPassword" className="pages_login_email_link">  <button className="login_emailBtn">Next</button>  </Link>   

//                         </form>
//                 </div>
//        </div>
//     )
// }
// export default PagesLoginEmail