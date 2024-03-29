import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import PagesLogin from '../pages/login/pagesLogin';
import PagesRegistration from '../pages/registration/pagesRegistration';
import PagesLanding from '../pages/landing/pagesLanding'
import PageVerification from "../pages/verificatioon/PageVerification";
import Otp from "../pages/otp/Otp";
import HomePage from '../pages/homePage/HomePage'
// import PagesChoose from "../pages/choose/pagesChoose"
// import PageEmail from "../pages/email/pagesEmail"
// import PagesPassword from "../pages/password/pagesPassword"
// import PagesLoginEmail from "../pages/loginemail/pagesLoginEmail";
// import PagesLoginPassword from "../pages/loginPassword/pagesLoginPassword"
import CaruselPages from "../pages/carusel/CaruselPages";
import TopPAges from "../pages/TopSalon/TopPAges";
import ReadMore from "../pages/ReadMore/ReadMore";
import DataTIme from "../pages/DataTime/DataTIme";
import ContacUS from "../pages/contactUs/pagesContactUs";
import BookingsPages from "../pages/booking/BookingsPages";
import Compleat from "../pages/compleatis/Compleat"



    
const Routs = () => {

    return (
        <>
            <Router>
                <div>
                    <Routes>
                        <Route path="/" element={<PagesLanding />} />
                        <Route path="/verification" element={<PageVerification />} />
                        <Route path="/otp" element={<Otp />} />
                        <Route path="/login" element={<PagesLogin />} />
                        <Route path="/register" element={<PagesRegistration />} />
                        <Route path="/home" element={<HomePage />} />
                        <Route path="/carusel" element={<CaruselPages />} />
                        <Route path="/catigory" element={<CaruselPages />} />
                        <Route path="/top" element={<TopPAges />} />
                        <Route path='/item/:id' element={<ReadMore />} />
                        <Route path="/DataTime" element={<DataTIme />} />
                        <Route path="/contacUS" element={<ContacUS />} />
                        <Route path ="/bookings" element ={<BookingsPages/>}/>
                        <Route path = "/compleat" element={<Compleat/>}/>
                        {/* <Route path="/choose" element={<PagesChoose />} /> */}
                        {/* <Route path="/email" element={<PageEmail />} /> */}
                        {/* <Route path="/password" element={<PagesPassword />} /> */}
                        {/* <Route path="/loginEmail" element={<PagesLoginEmail />} /> */}
                        {/* <Route path="/loginPassword" element={<PagesLoginPassword />} /> */}
                    </Routes>
                </div>
            </Router>
        </>
    )
}

export default Routs;