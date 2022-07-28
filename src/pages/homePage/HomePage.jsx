import React from "react";
import MainHeader from "../../components/mainHeader/mainComponent"
import "../homePage/HomePage.css"
import ComponentFooter from '../../components/footer/componentFooter'
import CaruselPages from "../carusel/CaruselPages";
import CatigoryPAges from "../Category/CatigoryPAges";
import TopPAges from "../TopSalon/TopPAges";



const HomePage = () => {



    return (

        <div>

            <MainHeader />

            <div className="Home_page_block">
                <CaruselPages />
                <CatigoryPAges />
                <TopPAges />
                <CatigoryPAges />
                <ComponentFooter />
            </div>

        </div>

    )
}
export default HomePage