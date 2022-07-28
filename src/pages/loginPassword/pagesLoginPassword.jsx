// import React from "react";
// import ComponentHeader from '../../components/header/componentHeader';
// import { useForm } from "react-hook-form";

// const PagesLoginPassword = ()=>{
//     const { register, handleSubmit } = useForm({ shouldUseNativeValidation: true });
//     const onSubmit = async data => { console.log(data) };
//     return(
//         <div>
//              <ComponentHeader />
//              <div className="logine_Page_email">
//                         <form onSubmit={handleSubmit(onSubmit)} className="login_email_section">
//                         <h1 className="title">Log in </h1>

//                         <div className="login_email_main" >
//                             <span className="Login_title">Enter your Password</span>
//                             <input className="Login_email_inp" type="email"  placeholder="password..." {...register("password")}/>
//                         </div>

//                      <button className="login_emailBtn">Next</button>   

//                         </form>
//                 </div>
//         </div>
//     )
// }
// export default PagesLoginPassword