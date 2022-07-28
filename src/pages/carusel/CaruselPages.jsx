import React from 'react'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Pagination,  A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import slider from "../../assets/slider.png"

const CaruselPages = () => {
  return (
    <div className="Home_page_carusel">
                    <Swiper
                        
                        modules={[Navigation, Pagination,  A11y]}
                        spaceBetween={20}
                        slidesPerView={1}
                        navigation
                        pagination={{ clickable: true }}
                        scrollbar={{ draggable: true }}
                        
                        onSlideChange={() => console.log('slide change')}>
                        <SwiperSlide ><img className="img1" src={slider} alt="..." /></SwiperSlide>
                        <SwiperSlide><img className="img1" src={slider} alt="..." /></SwiperSlide>
                        <SwiperSlide><img className="img1" src={slider} alt="..." /></SwiperSlide>
                        <SwiperSlide><img className="img1" src={slider} alt="..." /></SwiperSlide>
                        
                    </Swiper>
                </div>
  )
}

export default CaruselPages