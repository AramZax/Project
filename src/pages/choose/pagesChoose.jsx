// import React from "react"
// import ComponentHeader from '../../components/header/componentHeader';
// import ComponentFooter from '../../components/footer/componentFooter'
// import "../choose/pagesChoose.css"
// import { Link, useLocation,useNavigate } from "react-router-dom"

// const PagesChoose = () => {

//   const location = useLocation();
 
//   const navigate = useNavigate();
  
//   const toChooseSectionEmail = ()=>{
//     navigate("/email", {...location})
//   }

// const toChooseSectionPhone =()=>{
//   navigate("/otp",{...location})
// }

//   console.log(location.state);
  
//   return (
//     <>
//       <div>
//         <ComponentHeader />
//         <div className="choose_section_parent">

//           <div className="page_choose">
//             <h2 className="page_choose_title">Sign up</h2>
          
//               <button onClick={()=>toChooseSectionPhone()} className="choose_btn">Continue with mobile number</button>
            


//         <div className="choose_section">
//         <button onClick={()=>toChooseSectionEmail()} className="choose_btn">Continue with email</button>
//         </div>


//           </div>

//         </div>



//         <ComponentFooter />
//       </div>
//     </>
//   )
// }

// export default PagesChoose

