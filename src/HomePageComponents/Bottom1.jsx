import React from 'react'
import myImages from 'D:/html tutorial/jcrCab/new/src/images/bdr.png'
import myImages1 from 'D:/html tutorial/jcrCab/new/src/images/travel/image1.jpg'
import myImages2 from 'D:/html tutorial/jcrCab/new/src/images/travel/image2.jpg'
import myImages3 from 'D:/html tutorial/jcrCab/new/src/images/travel/image3.jpg'
import myImages4 from 'D:/html tutorial/jcrCab/new/src/images/travel/image4.jpg'
import myImages5 from 'D:/html tutorial/jcrCab/new/src/images/travel/image5.jpg'
import myImages6 from 'D:/html tutorial/jcrCab/new/src/images/travel/image6.jpg'
import myImages7 from 'D:/html tutorial/jcrCab/new/src/images/travel/image7.jpeg'
import myImages8 from 'D:/html tutorial/jcrCab/new/src/images/travel/image8.jpg'
import myImages9 from 'D:/html tutorial/jcrCab/new/src/images/travel/image9.jpg'
import myImages10 from 'D:/html tutorial/jcrCab/new/src/images/travel/image10.jpg'
import myImages11 from 'D:/html tutorial/jcrCab/new/src/images/travel/image11.jpg'
import myLogoImages from 'D:/html tutorial/jcrCab/new/src/images/hindustantimes-logo.png'
import myLogoImages1 from 'D:/html tutorial/jcrCab/new/src/images/goibibo-logo.jpg'
import myLogoImages2 from 'D:/html tutorial/jcrCab/new/src/images/aha-taxis-logo.png'
import myLogoImages3 from 'D:/html tutorial/jcrCab/new/src/images/treebo-logo.png'
import myLogoImages4 from 'D:/html tutorial/jcrCab/new/src/images/makemytrip-logo.png'
import myLogoImages5 from 'D:/html tutorial/jcrCab/new/src/images/tripadvisor-logo.png'
import myLogoImages6 from 'D:/html tutorial/jcrCab/new/src/images/romeiris-logo.png'
import myLogoImages7 from 'D:/html tutorial/jcrCab/new/src/images/oyo-logo.png'
import myLogoImages8 from 'D:/html tutorial/jcrCab/new/src/images/rentalcars-logo.png'

const Bottom1 = () => {
  return (
    <div className="container-fluid  banner-bg pt-3 ">
      <section className='fontstyle'>
        <div className="cointainer ">
          <div className="class text-center pt-4">
            <h3>JCRCab: Raise up Your Experience with Our Services</h3>
            <img src={myImages} alt="" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </section>

      {/* <!-- Main Written Portion --> */}

      <div className=" d-md-flex">
        <div className="col-md-3 bottom_door">
          <img src="https://www.jcrcab.com/wp-content/uploads/2024/12/Fort-Window.png" className="other-services-left-banner  img-responsive  " />
        </div>

        <section class="services-section py-5 col-md-9 ">
          <div class="container">
            <div class="row">
              {/* <!-- Service Cards --> */}

              <div class="col-sm-6 col-md-4 col-lg-3 mb-4">
                <div class="service-card">
                  <img src={myImages1} alt="One Day Tour Service" />
                  <div class="overlay fontstyle">
                    <p>One Day Tour Service</p>
                  </div>
                </div>
              </div>
              <div class="col-sm-6 col-md-4 col-lg-3 mb-4">
                <div class="service-card">
                  <img src={myImages2} alt="One Way Taxi Service" />
                  <div class="overlay">
                    <p>One Way Taxi Service</p>
                  </div>
                </div>
              </div>
              <div class="col-sm-6 col-md-4 col-lg-3 mb-4">
                <div class="service-card">
                  <img src={myImages3} alt="Holiday Tour Service" />
                  <div class="overlay">
                    <p>Holiday Tour Service</p>
                  </div>
                </div>
              </div>
              {/* <!-- Add More Cards --> */}
              <div class="col-sm-6 col-md-4 col-lg-3 mb-4">
                <div class="service-card">
                  <img src={myImages4} alt="City to City Taxi Service" />
                  <div class="overlay">
                    <p>City to City Taxi Service</p>
                  </div>
                </div>
              </div>
              <div class="col-sm-6 col-md-4 col-lg-3 mb-4">
                <div class="service-card">
                  <img src={myImages5} alt="JCR Desert Safari" />
                  <div class="overlay">
                    <p>JCR Desert Safari</p>
                  </div>
                </div>
              </div>
              <div class="col-sm-6 col-md-4 col-lg-3 mb-4">
                <div class="service-card">
                  <img src={myImages6} alt="Local Trip Service" />
                  <div class="overlay">
                    <p>One Day Tour Service</p>
                  </div>
                </div>
              </div>
              {/* <!-- Add More as Needed --> */}
              <div class="col-sm-6 col-md-4 col-lg-3 mb-4">
                <div class="service-card">
                  <img src={myImages7} alt="City to City Taxi Service" />
                  <div class="overlay">
                    <p>Tempo Traveller Service</p>
                  </div>
                </div>
              </div>
              <div class="col-sm-6 col-md-4 col-lg-3 mb-4">
                <div class="service-card">
                  <img src={myImages8} alt="JCR Desert Safari" />
                  <div class="overlay">
                    <p>Luxury Bus Service</p>
                  </div>
                </div>
              </div>
              <div class="col-sm-6 col-md-4 col-lg-3 mb-4">
                <div class="service-card">
                  <img src={myImages9} alt="Local Trip Service" />
                  <div class="overlay">
                    <p>Self Car Drive Service</p>
                  </div>
                </div>
              </div>
              {/* <!-- Add More as Needed --> */}
              <div class="col-sm-6 col-md-4 col-lg-3 mb-4">
                <div class="service-card">
                  <img src={myImages10} alt="City to City Taxi Service" />
                  <div class="overlay">
                    <p>Local Trip Service</p>
                  </div>
                </div>
              </div>
              <div class="col-sm-6 col-md-4 col-lg-3 mb-4">
                <div class="service-card">
                  <img src={myImages11} alt="JCR Desert Safari" />
                  <div class="overlay">
                    <p>Round Trip Service</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* <!-- Bootstrap JS --> */}
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"></script>

      {/* Partner Section of all Companies */}
      <section class="partners-section py-5">
        <div class="container text-center">
          <h2 class="mb-4">Our Partners</h2>
          <div class="row justify-content-center g-4">

            <div className='partner-slider'>
              {/* <-- Partner 1 --> */}

              <div class="col-6 col-sm-4 col-md-2">
                <div class="partner-box shadow-sm">
                  <img src={myLogoImages} alt="Hindustan Times" />
                </div>
              </div>

              {/* <!-- Partner 2 --> */}

              <div class="col-6 col-sm-4 col-md-2">
                <div class="partner-box shadow-sm">
                  <img src={myLogoImages1} alt="Goibibo" />
                </div>
              </div>

              {/* <!-- Partner 3 --> */}

              <div class="col-6 col-sm-4 col-md-2">
                <div class="partner-box shadow-sm">
                  <img src={myLogoImages2} alt="Aha Taxis" />
                </div>
              </div>

              {/* <!-- Partner 4 --> */}

              <div class="col-6 col-sm-4 col-md-2">
                <div class="partner-box shadow-sm">
                  <img src={myLogoImages3} alt="Treebo" />
                </div>
              </div>

              {/* <!-- Partner 5 --> */}

              <div class="col-6 col-sm-4 col-md-2">
                <div class="partner-box shadow-sm">
                  <img src={myLogoImages4} alt="MakeMyTrip" />
                </div>
              </div>

              {/* <!-- Partner 6 --> */}

              <div class="col-6 col-sm-4 col-md-2">
                <div class="partner-box shadow-sm">
                  <img src={myLogoImages5} alt="TripAdvisor" />
                </div>
              </div>

              {/* <!-- Partner 7 --> */}

              <div class="col-6 col-sm-4 col-md-2">
                <div class="partner-box shadow-sm">
                  <img src={myLogoImages6} alt="RomeIris" />
                </div>
              </div>

              {/* <!-- Partner 8 --> */}

              <div class="col-6 col-sm-4 col-md-2">
                <div class="partner-box shadow-sm">
                  <img src={myLogoImages7} alt="Oyo" />
                </div>
              </div>

              {/* <!-- Partner 9 --> */}

              <div class="col-6 col-sm-4 col-md-2">
                <div class="partner-box shadow-sm">
                  <img src={myLogoImages8} alt="RentalCars" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* <!-- Banner --> */}
      <div class="container-fluid g20-strip">
        <div class="container">
          <div class="row">
            <div class="col-md-8 col-xs-12 col-lg-8 col-sm-6 text-center">
              <p>Let's cooperate with the G20 together.</p>
            </div>
            <div class="col-md-4 col-sm-6 col-lg-4 col-xs-12 text-center">
              <img src="https://www.jcrcab.com/wp-content/themes/JCR_CAB/images/G20_logo.png" class="img-responsive" />
            </div>
          </div>
        </div>
      </div>



    </div>
  )
}

export default Bottom1
