import React from 'react'
import myImages from "D:/html tutorial/jcrCab/new/src/images/s1.png"
import myImages1 from "D:/html tutorial/jcrCab/new/src/images/s2.png"
import myImages2 from "D:/html tutorial/jcrCab/new/src/images/s3.png"
import myImages3 from "D:/html tutorial/jcrCab/new/src/images/s4.png"

const Hovers = () => {
  return (
    <div className="container-fluid imagesHover">
        <div className="container ">
            <div className="row">
                <div className="col-md-12 fontstyle text-center">
                    <h1>Why Choose Us</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 pt-2 text-center">
                <img src="https://www.jcrcab.com/wp-content/themes/JCR_CAB/images/bdr.png" alt="border-img" class="border" />
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 text-center">
                    <p>
                    Our customers always return to avail of our services on a regular basis because of the satisfaction and contentment they receive from our services. Our transparent pricing policy ensures that our customers always pay a fair and justified price. With competitive rates, professional service, our extensive network of cabs and drivers, Car Hire In Jodhpur we can give you the service and attention you deserve.
                    </p>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row mt-3">
                <div className="col-md-6 col-xs-12 mx-auto d-flex ">
                    <div className="col-md-3 ms-5 col-xs-6 service_img">
                        <img src={myImages} alt="" />
                        <p>ON TIME SERVICES</p>
                    </div>
                    <div className="col-md-3 col-xs-6 service_img">
                        <img src={myImages1} alt="" />
                        <p>HYGINIC FLEETS</p>
                    </div>
                    <div className="col-md-3 col-xs-6 service_img">
                        <img src={myImages2} alt="" />
                        <p>BEST PRICE GAURANTEE</p>
                    </div>
                    <div className="col-md-3 col-xs-6 service_img">
                        <img src={myImages3} alt="" />
                        <p>CUSTOMER SATISFACTION</p>
                    </div>
                </div>
                <div class="modualclass d-flex">
                <div class="col-md-3 col-xs-12 text-center">
                    <div class="col-md-12 col-xs-6 text-center service_img">
                        <img src="https://www.jcrcab.com/wp-content/themes/JCR_CAB/images/s4.png" alt="COURTEOUS DRIVER" class=""/>
                        <p>COURTEOUS DRIVER</p>
                    </div>
                    <div class="col-md-12 col-xs-6 text-center service_img">
                        <img src="https://www.jcrcab.com/wp-content/themes/JCR_CAB/images/s5.png" alt="WELL CLEAN CAR" class=""/>
                        <p>WELL CLEAN CAR</p>
                    </div>
                </div>
                <div class="col-md-6 col-xs-12 padding_img ">
                    <img src="https://www.jcrcab.com/wp-content/themes/JCR_CAB/images/audi.jpg" alt="banner img" class=""/>
                </div>
                <div class="col-md-3 text-center">
                    <div class="col-md-12 col-xs-6 text-center service_img">
                        <img src="https://www.jcrcab.com/wp-content/themes/JCR_CAB/images/s6.png" alt="24 customer Services<" class=""/>
                        <p>24 customer Services</p>
                    </div>
                    <div class="col-md-12 col-xs-6 text-center service_img">
                        <img src="https://www.jcrcab.com/wp-content/themes/JCR_CAB/images/s7.png" alt="EXCELLENT CAR HIRE DISCOUNT" class=""/>
                        <p>EXCELLENT CAR HIRE DISCOUNT</p>
                    </div>
                </div>
            </div>
            </div>
        </div>
     </div>
  )
}

export default Hovers
