import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import myImages from 'D:/html tutorial/jcrCab/new/src/images/placesjaipur2.jpeg'
import myImages1 from 'D:/html tutorial/jcrCab/new/src/images/jaisalmer2.jpg'
import myImages2 from 'D:/html tutorial/jcrCab/new/src/images/Feature-City-Palace-Udaipur-Rajasthan.jpg'
import myImages3 from 'D:/html tutorial/jcrCab/new/src/images/junagarh-fort-bikaner-rajasthan.jpg'

const Slider = () => {
  return (
    <div className="cointainer-fluid">
        <div className=" fontstyle text-center pt-4">
            <h3>Taxi Services</h3>
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
              <h2>Taxi Service in Rajasthan</h2>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="cointainer containershadow sliderContent m-auto pt-3">
          <div className="img_col">
            <img src={myImages} alt="" />
          </div>
          <div className="text_col">
            <div className="texthead">
            Taxi in Jaipur
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
            Taxi in Jaisalmer
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
            Taxi in Udaipur
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
            Taxi in Bikaner
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="cointainer pt-3 sliderContent1">
          <div className="img_col">
            <img src="./src/images/Jodhpur-sightseeing-tour.jpg" alt="" />
          </div>
          <div className="text_col">
            <div className="texthead">
            Taxi in Jaipur
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
    </div>
  )
}

export default Slider
