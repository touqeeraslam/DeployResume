import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import RatingCards from './ratingCards';
import Slider from "react-slick";
import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper";
const slider = () => {
  
  return (
    <>
         <Swiper
        slidesPerView={1}
        centeredSlides={false}
        slidesPerGroupSkip={1}
        grabCursor={true}
        keyboard={{
          enabled: true,
        }}
        breakpoints={{
          769: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
        }}
        scrollbar={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Keyboard, Scrollbar, Navigation, Pagination]}
        className="mySwiper"
      >
        <div className='text-center'>
        <SwiperSlide>
        <RatingCards />
        </SwiperSlide>
        <SwiperSlide>
        <RatingCards />
        </SwiperSlide>
        <SwiperSlide>
        <RatingCards />
        </SwiperSlide>
        <SwiperSlide>
        <RatingCards />
        </SwiperSlide>
        <SwiperSlide>
        <RatingCards />
        </SwiperSlide>
        <SwiperSlide>
        <RatingCards />
        </SwiperSlide>
        <SwiperSlide>
        <RatingCards />
        </SwiperSlide>
        <SwiperSlide>
        <RatingCards />
        </SwiperSlide>
        </div>
      
        
      </Swiper>
    </>
  )
}

export default slider
