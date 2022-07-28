// import React from "react"
// import ComponentHeader from '../../components/header/componentHeader';
// import ComponentFooter from '../../components/footer/componentFooter'
// import "../../pages/email/pagesEmail.css"
// import { useForm } from "react-hook-form";
// import { Link,useLocation,useNavigate} from "react-router-dom";


// const PageEmail = () => {
//     const { register, handleSubmit } = useForm({ shouldUseNativeValidation: true });
//     const location = useLocation();

//     const navigate = useNavigate();
    
//     console.log(location);


    
//     const onSubmit = async data => {
//         var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; 
//         if(!re.test(data.email)){
//            return null
//         }else{
//             navigate("/password", { 
//                 state: {name:location.state.name,
//                     email:data.email
                      
//                 }})
//         }

       
//         };

//     return (
//         <div>
//             <ComponentHeader />
//             <div className="email_section_parent">
//                 <form onSubmit={handleSubmit(onSubmit)} className="page_email">
//                     <h1 className='Register_sign' > Sign up</h1>

//                     <div className=" email_section">
//                         <span className="email_section_title">Enter your email</span>
//                         <input className="email_register" type="text" placeholder='Email...'  {...register("email")} />

//                     </div>

//                     <div  className="email_section_link">
//                     <button className="email_section_next" >Next</button>
//                     </div>
                    
//                 </form>

//             </div>
//             <ComponentFooter />
//         </div>

//     )
// }
// export default PageEmail