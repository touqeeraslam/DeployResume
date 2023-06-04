import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import RatingCards from './ratingCards';
import Slider from "react-slick";
import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper";
const slider = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
     <link
        rel="stylesheet"
        type="text/css"
        charset="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css"
      />
         {/* <Swiper
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
      
        
      </Swiper> */}
      <Slider {...settings}>
        <div>

      <RatingCards />
        </div>
        <div>

      <RatingCards />
        </div>
        <div>

      <RatingCards />
        </div>
        <div>

      <RatingCards />
        </div>
      </Slider>
    </>
  )
}

export default slider
