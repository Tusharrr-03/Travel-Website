import React from 'react'
import myLogoImages from 'D:/html tutorial/jcrCab/new/src/images/hindustantimes-logo.png'
import myLogoImages1 from 'D:/html tutorial/jcrCab/new/src/images/goibibo-logo.jpg'
import myLogoImages2 from 'D:/html tutorial/jcrCab/new/src/images/aha-taxis-logo.png'
import myLogoImages3 from 'D:/html tutorial/jcrCab/new/src/images/treebo-logo.png'
import myLogoImages4 from 'D:/html tutorial/jcrCab/new/src/images/makemytrip-logo.png'
import myLogoImages5 from 'D:/html tutorial/jcrCab/new/src/images/tripadvisor-logo.png'
import myLogoImages6 from 'D:/html tutorial/jcrCab/new/src/images/romeiris-logo.png'
import myLogoImages7 from 'D:/html tutorial/jcrCab/new/src/images/oyo-logo.png'
import myLogoImages8 from 'D:/html tutorial/jcrCab/new/src/images/rentalcars-logo.png'

const Bottom = () => {
  return (
    <div className="container-fluid banner-bg pt-3 ">
      <section className='fontstyle'>
        <div className="cointainer ">
          <div className="class text-center pt-4">
            <h3>Why Choose JCR With Car Hiring</h3>
          </div>
        </div>
      </section>

  {/* <!-- Main Written Portion --> */}
<div className='d-flex justify-content-center align-items-center vw-100'>
  <section className="services-section py-5">
    <div className="row justify-content-center">
      {/* <!-- Service Cards --> */}
      <div className="col-md-4 mb-4">
        <div className="infoAbout text-center p-3">
          <img className='imgSize' src='https://www.jcrcab.com/wp-content/uploads/2023/09/car.png' alt='Serviced Vehicles' />
          <h6 className="headlines">Serviced Vehicles</h6>
          <p className="headlinesContent">Our vehicles are always clean and maintained to ensure optimum performance. We add new vehicles to our fleet every year.</p>
        </div>
      </div>
      
      <div className="col-md-4 mb-4">
        <div className="infoAbout text-center p-3">
          <img className='imgSize' src='https://www.jcrcab.com/wp-content/uploads/2023/09/measure-distance.png' width='60px' alt='Unlimited Kilometer' />
          <h6 className="headlines">Unlimited Kilometer</h6>
          <p className="headlinesContent">Drive as many kilometers as you wish as there are no boundaries for the travel distance.</p>
        </div>
      </div>
      
      <div className="col-md-4 mb-4">
        <div className="infoAbout text-center p-3">
          <img className='imgSize' src='https://www.jcrcab.com/wp-content/uploads/2023/09/hidden.png' width='60px' alt='No Hidden Cost' />
          <h6 className="headlines">No Hidden Cost</h6>
          <p className="headlinesContent">Zero hidden charges from your rent include all the charges like insurance and maintenance costs.</p>
        </div>
      </div>

      <div className="col-md-4 mb-4">
        <div className="infoAbout text-center p-3">
          <img className='imgSize' src='https://www.jcrcab.com/wp-content/uploads/2023/09/car-insurance.png' width='60px' alt='Insured Cars' />
          <h6 className="headlines">Insured Cars</h6>
          <p className="headlinesContent">You don’t need to worry about any mishap or road damage. Our vehicles are insured, and we take only a minimum damage charge from you in case of an accident.</p>
        </div>
      </div>

      <div className="col-md-4 mb-4">
        <div className="infoAbout text-center p-3">
          <img className='imgSize' src='https://www.jcrcab.com/wp-content/uploads/2023/09/booking.png' width='60px' alt='Instant Booking' />
          <h6 className="headlines">Instant Booking</h6>
          <p className="headlinesContent">Are you in a hurry and looking for a vehicle? We offer quick bookings with less documentation to assure excellent customer satisfaction.</p>
        </div>
      </div>

      <div className="col-md-4 mb-4">
        <div className="infoAbout text-center p-3">
          <img className='imgSize' src='https://www.jcrcab.com/wp-content/uploads/2023/09/premium-service.png' width='60px' alt='Excellent Service' />
          <h6 className="headlines">Excellent Service</h6>
          <p className="headlinesContent">From deciding a car to finalizing the return, we assist you through your journey.</p>
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

export default Bottom
