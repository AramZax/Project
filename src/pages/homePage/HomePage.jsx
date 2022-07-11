import React from "react";
import MainHeader from "../../components/mainHeader/mainComponent"
import "../homePage/HomePage.css"
import{HiLocationMarker} from 'react-icons/hi'

const HomePage = ()=>{
   
    return(
            <>
            <MainHeader />


                <div className="Home_page_block">

                    <div className="Home_page_main">

                        <button className="Home_button">
                          <HiLocationMarker className="Location_icon"/>
                            Top treding saloon near you</button>

                        <button className="Home_button">Available saloon</button>
                        
                        <button className="Home_button">Book a slot</button>

                    </div> 

                </div>
                
            </>
    )
}
export default HomePage