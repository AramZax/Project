import React, { useState, useRef } from "react";
import Logo from '../../assets/logo.png'
import "../mainHeader/mainComponent.css"
import { BsSearch } from 'react-icons/bs';
import { BsFillBellFill } from "react-icons/bs"
import { IoIosArrowDown } from "react-icons/io"
import { IoIosArrowUp } from "react-icons/io"
import { Spin as Hamburger } from 'hamburger-react'

const MainHeader = () => {
    const [isOpen, setOpen] = useState(false)
    const [focus, setFocus] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
    const [seccondMenuOpen, setSeccondMEnuOpen] = useState(false)
    const FocusInInput = useRef()


    const change = () => {
        setFocus(true)
        if (focus) {
            FocusInInput.current.focus()
        }
    }
    const mainOp = () => {
        setMenuOpen(!menuOpen)

    }
    const seccondMainOp = () => {
        setSeccondMEnuOpen(!seccondMenuOpen)
    }

    return (
        <>
            <div className="main_header_block" >
                <div className="main_Logo_Block">
                    <div className="main_logo">
                        <img className="logo" src={Logo} alt="..." />
                    </div>


                    <h2 className="main-logo_title">Complate house service</h2>

                </div>

                <div className="Main_input_block">
                    <div className="hamburger_icon">
                        <Hamburger toggled={isOpen} toggle={setOpen} />

                    </div>

                    <input className="main_input" type="text" ref={FocusInInput} />

                    <div className="Search_icon">
                        <BsSearch className="search" onClick={change} />
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
                    <span className="hover_title">Book a slot</span>
                    <span className="hover_title">Available saloon</span>
                    <span className="hover_title">Contact</span>
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
                <span className="hover_title">Book a slot</span>
                <span className="hover_title">Available saloon</span>
                <span className="hover_title">Contact</span>
                <span className="hover_title">Cart</span>


            </div>
            <div className="mein_header_countinus">
                <div className="hover_title">
                    <span className="isOpenSpan" onClick={mainOp}>My Account  <IoIosArrowDown /> </span>

                </div>

                <div className="hover_title">

                    <span className="isOpenSpan" onClick={seccondMainOp}> Categories<IoIosArrowDown /></span> </div>
                <span className="hover_title">Privacy Policy</span>
                <span className="hover_title">Legal </span>

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




        </>
    )
}
export default MainHeader