import React from 'react'
import catigoria from '../../assets/catigoria.png'
import { Link } from 'react-router-dom'

const CatigoryPAges = () => {
  return (
    <div>
    <div className="catigories-parent">


        <div className="Home_bage_catigories">
            <span className="home_catigories_title">House electric</span>
            <div className="catigories_parent">
                <div className="catigories_img">
                    <img className="catigories_img_section" src={catigoria} alt="" />
                </div>

                <div className="catigories_catalog">
                    <span className="price_location_catalog">Price per hour - 15 $</span>
                    <span className="price_location_catalog">Worker level - expert</span>
                    <span className="price_location_catalog">Location - UK</span>
                </div>
            </div>
            <Link to ="/moreInfo">
            <div className="catigories_read_more">
                <button className="catigories_more">Read more</button>   
            </div></Link>    

        </div>


        <div className="Home_bage_catigories">
            <span className="home_catigories_title">Food delivery</span>
            <div className="catigories_parent">
                <div className="catigories_img">
                <img className="catigories_img_section" src={catigoria} alt="" />
                </div>

                <div className="catigories_catalog">
                    <span className="price_location_catalog">Min Order Fee - 10$</span>
                    <span className="price_location_catalog">Location - UK</span>
                    
                </div>
            </div>

            <div className="catigories_read_more">
                <button className="catigories_more">Read more</button>

            </div>

        </div>



        <div className="Home_bage_catigories">
            <span className="home_catigories_title">Tennis classes</span>

            <div className="catigories_parent">

                <div className="catigories_img">
                    <img className="catigories_img_section" src={catigoria} alt="" />
                </div>

                <div className="catigories_catalog">
                    <span className="price_location_catalog">Price per hour - 40 $</span>
                    <span className="price_location_catalog">Worker level - expert</span>
                    <span className="price_location_catalog">Location - UK</span>
                </div>

            </div>

            <div className="catigories_read_more">
                <button className="catigories_more">Read more</button>
            </div>

        </div>


        <div className="Home_bage_catigories">
            <span className="home_catigories_title">Full English Course</span>

            <div className="catigories_parent">

                <div className="catigories_img">
                <img className="catigories_img_section" src={catigoria} alt="" />
                </div>

                <div className="catigories_catalog">
                    <span className="price_location_catalog">Price - 50 $</span>
                    <span className="price_location_catalog">Upper-Intermediate Level (B2)</span>
                    <span className="price_location_catalog">Course duration - 4 months</span>
                </div>

            </div>

            <div className="catigories_read_more">
                <button className="catigories_more">Read more</button>
            </div>

        </div>


        <div className="Home_bage_catigories">
            <span className="home_catigories_title">Garden care</span>

            <div className="catigories_parent">

                <div className="catigories_img">
                 <img className="catigories_img_section" src={catigoria} alt="" />
                </div>

                <div className="catigories_catalog">
                    <span className="price_location_catalog">Price per hour - 20 $</span>
                    <span className="price_location_catalog">Worker level - expert</span>
                    <span className="price_location_catalog">Location - UK</span>
                </div>

            </div>

            <div className="catigories_read_more">
                <button className="catigories_more">Read more</button>
            </div>

        </div>





        <div className="Home_bage_catigories">
            <span className="home_catigories_title"> Pet sitter</span>
            
              <div className="catigories_parent">

                <div className="catigories_img">
                  <img className="catigories_img_section" src={catigoria} alt="" />
                </div>

                <div className="catigories_catalog">
                    <span className="price_location_catalog">Price per hour - 10 $</span>
                    <span className="price_location_catalog">Worker level - expert  </span>
                    <span className="price_location_catalog">Location - UK</span>
                </div>

            </div>

            <div className="catigories_read_more">
                <button className="catigories_more">Read more</button>
            </div>

        </div>

    </div>
    </div>
  )
}

export default CatigoryPAges