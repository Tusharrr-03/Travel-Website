import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import myImages from 'D:/html tutorial/jcrCab/new/src/images/Fateh-Sagar-Lake-Udaipur-rj.jpg'
import myImages1 from 'D:/html tutorial/jcrCab/new/src/images/junagarh-fort-bikaner-rajasthan.jpg'
import myImages2 from 'D:/html tutorial/jcrCab/new/src/images/Blue_City-1.jpg'
import myImages3 from 'D:/html tutorial/jcrCab/new/src/images/pinkcity-jaipur.jpg'

const Slider = () => {
  return (
    <div className="cointainer-fluid">
        <div className="fontstyle text-center pt-4">
            <h3>Luxury Bus Services</h3>
            <img src="src/images/bdr.png" alt="" />
        </div>
      
        <Swiper
      spaceBetween={50}
      slidesPerView={5}
      autoplay={true}
      
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <div className="cointainer m-auto pt-3 sliderContent1">
          <div className="text_col_heading">
            <div className="heading_main">
              <h2>Bus Service in Rajasthan</h2>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="cointainer pt-3 sliderContent">
          <div className="img_col">
            <img src={myImages} alt="" />
          </div>
          <div className="text_col">
            <div className="texthead">
            Luxury bus Service Udaipur
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="cointainer col-radius pt-3 sliderContent1">
          <div className="img_col">
            <img src={myImages1} alt="" />
          </div>
          <div className="text_col">
            <div className="texthead">
            Luxury bus Service Bikaner
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="cointainer pt-3 sliderContent1">
          <div className="img_col">
            <img src={myImages2} alt="" />
          </div>
          <div className="text_col">
            <div className="texthead">
            Luxury bus Service Jodhpur
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="cointainer pt-3 sliderContent1">
          <div className="img_col">
            <img src={myImages3} alt="" />
          </div>
          <div className="text_col">
            <div className="texthead">
            Luxury bus Service Jaipur
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
    </div>
  )
}

export default Slider
