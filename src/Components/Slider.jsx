import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Slider.css';

// import required modules
import { Autoplay, EffectFade, Pagination, Navigation } from 'swiper/modules';

const Slider = () => {

    return (
      <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        effect={'fade'}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, EffectFade, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="flex justify-center items-center bg-[linear-gradient(45deg,rgba(0,0,0,0.4),rgba(0,0,0,0.7)),url(https://i.ibb.co.com/NYW69WT/Slide01.jpg)] bg-contain md:bg-cover bg-center bg-no-repeat w-full h-screen">
            <h1 className='text-2xl font-rancho md:text-4xl lg:text-7xl text-white'>Discover <span className="text-[#F05A7E]">Timeless</span> Masterpieces: <br></br> Bring Beauty to <span className="text-[#F05A7E]">Your Space</span></h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center items-center bg-[linear-gradient(45deg,rgba(0,0,0,0.4),rgba(0,0,0,0.7)),url(https://i.ibb.co.com/Gd46ygc/Slide02.jpg)] bg-contain md:bg-cover bg-center bg-no-repeat w-full h-screen">
            <h1 className='text-2xl font-rancho md:text-4xl lg:text-7xl text-white'>Exclusive <span className="text-[#F05A7E]">Handcrafted</span> Art:<br></br> Made to <span className="text-[#F05A7E]">Inspire</span></h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center items-center bg-[linear-gradient(45deg,rgba(0,0,0,0.4),rgba(0,0,0,0.7)),url(https://i.ibb.co.com/RvdyCFD/Slide03.png)] bg-contain md:bg-cover bg-center bg-no-repeat w-full h-screen">
            <h1 className='text-2xl font-rancho md:text-4xl lg:text-7xl text-white'>Transform <span className="text-[#F05A7E]">Your</span> Walls<br></br> with Stunning Original <span className="text-[#F05A7E]">Paintings</span></h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center items-center bg-[linear-gradient(45deg,rgba(0,0,0,0.4),rgba(0,0,0,0.7)),url(https://i.ibb.co.com/Zhpr2H2/Slide04.jpg)] bg-contain md:bg-cover bg-center bg-no-repeat w-full h-screen">
            <h1 className='text-2xl font-rancho md:text-4xl lg:text-7xl text-white'>Shop <span className="text-[#F05A7E]">Unique</span> Artworks by <br></br> <span className="text-[#F05A7E]">Talented</span> Artists Worldwide</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center items-center bg-[linear-gradient(45deg,rgba(0,0,0,0.4),rgba(0,0,0,0.7)),url(https://i.ibb.co.com/jJXGG8L/Slide05.png)] bg-contain md:bg-cover bg-center bg-no-repeat w-full h-screen">
            <h1 className='text-2xl font-rancho md:text-4xl lg:text-7xl text-white'>Express <span className="text-[#F05A7E]">Your </span> Style <br></br>with <span className="text-[#F05A7E]">Customizable</span> Art Creations</h1>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
    );
};

export default Slider;