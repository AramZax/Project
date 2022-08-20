import React, { useState, useRef } from "react";
import Logo2 from "../../assets/Logo2.png"
import "../mainHeader/mainComponent.css"
import { BsSearch } from 'react-icons/bs';
import { BsFillBellFill } from "react-icons/bs"
import { IoIosArrowDown } from "react-icons/io"
// import { IoIosArrowUp } from "react-icons/io"
import { Spin as Hamburger } from 'hamburger-react'
import { Link } from "react-router-dom"


const MainHeader = () => {
    const [isOpen, setOpen] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
    const [seccondMenuOpen, setSeccondMEnuOpen] = useState(false)
    const [leng, setLeng] = useState(false)
    const FocusInInput = useRef()



    const focusInp = () => {
        FocusInInput.current.focus()
    }


    const mainOp = () => {
        setMenuOpen(!menuOpen)
        setSeccondMEnuOpen(false)
        setLeng(false)

    }
    
    const seccondMainOp = () => {
        setSeccondMEnuOpen(!seccondMenuOpen)
        setMenuOpen(false)
        setLeng(false)
    }

    const LengOp = () => {
        setLeng(!leng)
        setMenuOpen(false)
        setSeccondMEnuOpen(false)
    }




    return (
        <>
            <div className="main_header_block" >

                <div className="main_Logo_Block">
                    <div className="main_logo">
                        <Link to="/home"><img className="logo" src={Logo2} alt="..." /> </Link>
                    </div>

                    <h2 className="main-logo_title">Home Ofiice Assistant</h2>

                </div>

                <div className="Main_input_block">

                    <div className="hamburger_icon">
                        <Hamburger toggled={isOpen} toggle={setOpen} />
                    </div>

                    <input className="main_input" type="text" ref={FocusInInput} />

                    <div className="Search_icon">
                        <BsSearch className="search" onClick={focusInp} />
                    </div>

                    <div className="Search_icon">
                        <BsFillBellFill className="bell" />
                    </div>

                </div>


            </div>

            {isOpen ? <div className="Main_asid_hover">
                <div className="hover">
                    <span className="hover_title">Top treding saloon near you</span>
                    <span className="hover_title"> Repeat Again</span>
                 <Link to="/bookings"> <span className="hover_title">Bookings</span>  </Link>   
                    <span className="hover_title">Available saloon</span>
                    <Link to="/contacUS">   <span className="hover_title">Contact</span> </Link>
                    <span className="hover_title">Cart</span>
                    <span className="hover_title">My Account</span>
                    <span className="hover_title"> Categories</span>
                    <span className="hover_title">Privacy Policy</span>
                    <span className="hover_title">Legal </span>
                    <span className="hover_title">Languages</span>

                </div>
            </div> : null}

            <div className="main_header_menu">
                <span className="hover_title">Top treding saloon near you</span>
                <span className="hover_title"> Repeat Again</span>
              <Link to="/bookings"> <span className="hover_title">Bookings</span> </Link>  
                <span className="hover_title">Available saloon</span>
                <Link to="/contacUS"><span className="hover_title">Contact</span>   </Link>
                <span className="hover_title">Cart</span>
            </div>

            <div className="mein_header_countinus">
                <div className="hover_title">
                    <span className="isOpenSpan" onClick={mainOp}>My Account  <IoIosArrowDown /> </span>
                </div>

                <div className="hover_title">
                    <span className="isOpenSpan" onClick={seccondMainOp}> Categories<IoIosArrowDown /></span>
                </div>

                <span className="hover_title">Privacy Policy</span>
                <span className="hover_title">Legal </span>

                <div className="hover_title">
                    <span className="isOpenSpan" onClick={LengOp}>Languages <IoIosArrowDown /></span>
                </div>
            </div>

            {menuOpen ? <div className="main_header_drop_down">
                <div className="section_hover">
                    <span className="countinue_hover_title" >My Task</span>
                    <span className="countinue_hover_title" >My Wish List</span>
                    <span className="countinue_hover_title" >My Fav Saloon</span>
                    <span className="countinue_hover_title" >My Home Assistant</span>
                </div>
                       </div> : null}


            {seccondMenuOpen ? <div className="main_header_seccond_drop_down">
                <div className="section_seccond_hover">
                    <span className="countinue_hover_title" >Country</span>
                    <span className="countinue_hover_title" > County</span>
                    <span className="countinue_hover_title" >Location</span>
                    <span className="countinue_hover_title" >Services</span>
                </div>
                    </div> : null}

            {leng ? <div className="main_header_free_drop_down">
                <div className="section_free_hover">
                    <span className="countinue_hover_title">Englis</span>
                    <span className="countinue_hover_title">France</span>
                    <span className="countinue_hover_title">Armenia</span>
                    <span className="countinue_hover_title"> Italy</span>
                </div>
                     </div> : null}
        </>
    )
}

export default MainHeader