import React, { useEffect, useState } from 'react'
import catigoria from '../../assets/catigoria.png'
import { Link } from 'react-router-dom'
import axios from 'axios'
const CatigoryPAges = () => {
    const [state, setState] = useState([])


    useEffect(() => {
        axios.get(`https://www.amazon.org.am/api/admin/services`)
            .then(res => setState(res.data))
            .catch((err) => console.log(err))
    }, []);

    console.log(state, 'state');

    return (
        <>
            <div className="catigories-parent"  >
                {state.map((element, index) => {
                    return (
                        <div className="Home_bage_catigories" key={index}>
                            <span className="home_catigories_title">{element.title}</span>
                            <div className="catigories_parent">
                                <div className="catigories_img">
                                    <img className="catigories_img_section" src={element.image} alt="..." />
                                </div>
                            

                                <div className="catigories_catalog">
                                    <span className="price_location_catalog">Price per hour - {element.price} $</span>
                                    <span className="price_location_catalog">Worker level - {element.worker_level}</span>
                                    <span className="price_location_catalog">Location - {element.location}</span>
                                </div>
            
                            </div>
                            <Link to={`/item/${element.id}`} >
                                <div className="catigories_read_more"   >
                                    <button className="catigories_more">Read more</button>
                                </div>
                            </Link>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default CatigoryPAges