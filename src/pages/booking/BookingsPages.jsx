import axios from 'axios'
import React, { useState, useEffect } from 'react'
import MainHeader from '../../components/mainHeader/mainComponent'
import ComponentFooter from '../../components/footer/componentFooter';
import "../../pages/booking/bookingPages.css"


const BookingsPages = () => {
    const [state, setState] = useState([])

    useEffect(() => {
        axios.get(`https://www.amazon.org.am/api/user/1`)
            .then(response => setState(JSON.parse(response.data.bookings)))
            .catch(error => console.log(error))
    }, [])
    console.log(state);
    return (
        <div>
            <MainHeader />
            <div className='booking_pages_title'>
                <span className='booking_pages_title_span'>Bookings</span>
            </div>
            {state.map((element, index) => {
                return (
                    <div key={index}>
                       
                        <div className='table_parent'>
                            <span className='table_Span'>
                               id/{element.id}
                   
                            </span>

                            <span className='table_Span'>
                              data/  {element.data}
                            </span>

                            <span className='table_Span'>
                             time/   {element.time}
                            </span>

                            <span className='table_Span'>
                             hours/   {element.hours}
                            </span>

                            <span className='table_Span'>
                            location/   {element.location}
                            </span>

                        </div>

                    </div>
                )
            })}
       
        </div>

    )
}

export default BookingsPages