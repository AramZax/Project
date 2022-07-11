import React from "react"
import ComponentHeader from '../../components/header/componentHeader';
import ComponentFooter from '../../components/footer/componentFooter'
import "../choose/pagesChoose.css"
import{Link} from "react-router-dom"

const PagesChoose = () => {
  return (
    <>
            <div>
            <ComponentHeader />
                <div className="choose_section_parent">

                    <div className="page_choose">
                        <h2 className="page_choose_title">Sign up</h2>
                      <Link to = "/otp" className="choose_section" >
                      <button className="choose_btn">Continue with mobile number</button>
                              </Link>    
                       
                       
                       <Link to ="/email"className="choose_section">
                         <button className="choose_btn">Continue with email</button>
                          </Link>    
                    </div>

                </div>



            <ComponentFooter />
            </div>
    </>
  )
}

export default PagesChoose

