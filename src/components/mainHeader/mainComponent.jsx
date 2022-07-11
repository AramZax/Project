import React, { useState, useRef } from "react";
import Logo from '../../assets/logo.png'
import "../mainHeader/mainComponent.css"
import { BsSearch } from 'react-icons/bs';

import { Spin as Hamburger } from 'hamburger-react'

const MainHeader = () => {
    const [isOpen, setOpen] = useState(false)
    const [focus, setFocus] = useState(false)
    const FocusInInput = useRef()

    const change = () => {
        setFocus(true)
        if (focus) {
            FocusInInput.current.focus()
        }
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
                    <input className="main_input" type="text" ref={FocusInInput} />

                    <div className="Search_icon">
                        <BsSearch className="search" onClick={change} />
                    </div>
                    <div className="hamburger_icon">
                        <Hamburger toggled={isOpen} toggle={setOpen} />

                    </div>



                </div>


            </div>
            {isOpen ? <div className="Main_asid_hover">
                <div className="hover">
                    <span className="hover_title"> Home page</span>
                    <span className="hover_title">My account</span>
                    <span className="hover_title">My task</span>
                    <span className="hover_title">Repeat again</span>
                    <span className="hover_title">My wish list </span>
                    <span className="hover_title">Privacy policy</span>
                    <span className="hover_title">Legal</span>
                    <span className="hover_title"> ( all policies including exchange)</span>
                </div>
            </div> : null}

            <div className="main_header_menu">
                <span className="min_header_title">Home</span>
                <span className="min_header_title">My account</span>
                <span className="min_header_title">My task</span>
                <span className="min_header_title">Repeat again</span>
                <span className="min_header_title">My wish list </span>
                <span className="min_header_title">Privacy policy</span>
                <span className="min_header_title">Legal</span>

            </div>


        </>
    )
}
export default MainHeader