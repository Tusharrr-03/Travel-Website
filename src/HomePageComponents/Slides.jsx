import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';

const Slides = () => {
  return (
    <>
      {/* Header Section */}

      <div className="container-fluid ">
        <div className=" fontstyle heading p-0 text-center ">
          <h2>
            Discover Rajasthan with JCR Cabs
          </h2>
        </div>
        <div className="carlog">
          <img src="../src/images/bdr.png" alt="" />
        </div>
      </div>

      {/* slidser section */}


      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        autoplay={true}
        navigation={true}
        pagination={true}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {/* Slide One */}
        <SwiperSlide>
          <div className="container-fluid slides-text ">
            <div className="sider-row row d-flex p-4">
              <div className="col-md-4 discover_img_safari">
                <img src="https://www.jcrcab.com/wp-content/uploads/2023/04/camel-Jeep-Safari.png" alt="" />
              </div>
              <div className="col-md-7 fontstyle discover_cont_safari">
                <h3>Desert Safari</h3>
                <p>The most interesting activity about Rajasthan includes the desert safaris where we can experience the culture in the best way possible. The sand dunes and camel rides with the folk music and bonfire in the night sound like the most interesting and engaging way to enjoy with your families. The Desert Safari at Dausa also gives you the chance to spot the greater part of the wildlife.</p>
                <p>Along with desert safari in JCR Rental Cars, the local temples can also be visited. Jaisalmer is known for the bonfire camping. Khuri Sand Dunes and Osian Desert are some of the best places for desert safaris. The different types of safaris include Jeep Safari, Quad Bike Safari and Camel Safari. We ensure your safety and fun by providing you with the best drivers at JCR Cars. The best weather to visit is preferably in winter because of the moderate temperature, not too hot in the daytime and not too chilly at night. Trust us for your family outing and have a memorable trip with JCR Cars!</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/* Slide Two */}
        <SwiperSlide>
          <div className="container-fluid slides-text">
            <div className="container">
              <div className="sider-row row d-flex p-4 ">
                <div className="col-md-4 p-2 discover_img_safari">
                  <img src="https://www.jcrcab.com/wp-content/uploads/2023/11/testing-img-1.jpg" alt="Historical Forts" />
                </div>
                <div className="col-md-7 fontstyle historical_fort_cont ">
                  <h3>Historical Forts</h3>
                  <p>The forts are usually the most sought-after attraction for any city. Apart from being the most beautiful part of the city the forts also speak volumes about the culture and history of the city. It stands tall with pride hiding in its walls the stories of wars and cultures. Each room of the fort has a different story to tell. The victories and defeats of the dynasties are all within the forts. Rajasthan is known for its extravagant culture and history. The maharajas and maharanis have a great impact on each of our history textbooks and so do their huge residences. The Bhatner Fort located in Hanumangarh, Rajasthan is also known to be one of the oldest forts in India. Anupgarh Fort, Bala Qila, Kumbalgarh Fort, Garh Palace, Jaisalmer Fort, and Jaigarh Fort are just some examples of how vast the rich cultural heritage of Rajasthan is.</p>
                  <p>You can discover Rajasthan with JCR cars with the immense knowledge and professionalism of our drivers. You can fully trust your family with us. Come with us on this journey where we take you with us to the most beautiful forts. Your trip with JCR Cars will be the most comfortable, memorable and enjoyable. We provide rentals all across Rajasthan. So, sit back, relax and enjoy the trip. JCR Cars got you covered!</p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/* Slide Three */}
        <SwiperSlide>
          <div className="container-fluid slides-text">
            <div className="container">
              <div className="sider-row row d-flex p-4">
                <div className="col-md-4 p-2 discover_img_safari">
                  <img src="https://www.jcrcab.com/wp-content/uploads/2023/11/thumb_6555f908ca34f1700133128.jpg" alt="Royal Palaces" />
                </div>
                <div className="col-md-7 fontstyle royal_cont_places">
                  <h3>Royal Places</h3>
                  <p>The lesser-known fact about palaces is their vastness of culture. We often tend to associate the term palace word royalty but we usually fail to go deep into the humongous stories of the very place where the royalties reside. The palace is itself an attractive spot to spend time and learn about the history related to the families with deeper secrets of their reign. The state of Rajasthan welcomes you to unearth the royal families with their exquisite residences. City palaces of Karauli, Dholpur, and Jaipur share the same name but have hundreds of different stories to tell. From the boundaries surrounded by once river meant to protect the families from wars to the room where the Ranis used to leisurely play along with their maids to the huge rooms where the Rajas used to listen to the problems of their kingdom.</p>
                  <p>The lesser-known fact about palaces is their vastness of culture. We often tend to associate the term palace word royalty but we usually fail to go deep into the humongous stories of the very place where the royalties reside. The palace is itself an attractive spot to spend time and learn about the history related to the families with deeper secrets of their reign. The state of Rajasthan welcomes you to unearth the royal families with their exquisite residences. City palaces of Karauli, Dholpur, and Jaipur share the same name but have hundreds of different stories to tell. From the boundaries surrounded by once river meant to protect the families from wars to the room where the Ranis used to leisurely play along with their maids to the huge rooms where the Rajas used to listen to the problems of their kingdom.</p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/* Slide Four */}
        <SwiperSlide>
          <div className="container-fluid slides-text">
            <div className="container">
              <div className="sider-row row d-flex p-4">
                <div className="col-md-4 p-2 discover_img_safari">
                  <img src="https://www.jcrcab.com/wp-content/uploads/2023/11/colorful-rajasthan-tour.jpg" alt="Fairs and Festivals" />
                </div>
                <div className="col-md-8 fontstyle fair_cont_festival">
                  <h3>Fair and Festival</h3>
                  <p>India is hugely diverse when it comes to celebrations and festivities. All around the states of India, there can be observed hundreds of festivals that contribute to the tourism and economy of the state. Fairs add to the pride of respective states and further the fame of the state. Talking about fairs and festivals of India and not mentioning the vastness of attractive fairs held in Rajasthan is out of the question. Some of the most important fairs in Rajasthan include the Ramdevra Fair, Kartik Mela, and Mahavir Jain Fair.</p>
                  <p>The Pushkar Fair is organized yearly in the Kartik month. The Karni Mata Fair is held twice a year during Navratras. Apart from the fairs, the festivals known exclusively to the people of Rajasthan include the festival of Gangaur in which the ladies have a gala time and wish for the longevity of their husbands. It’s a delight to watch the happiness on their faces and how beautifully the entire roads and crossings are covered with lights and flowers. You can experience the time with JCR Cars and be assured of some good and memorable times. Join us and experience the fun!</p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>

  );
};

export default Slides