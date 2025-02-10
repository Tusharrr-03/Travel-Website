import React from 'react'

const Form = () => {
  return (
    <div class="container-fluid background-image">
    <div class="row justify-content-center d-flex">
    <h2 class="text-center mb-4 ms-auto fontDec ">Get A Taxi Now</h2>

      <div class="col-lg-9 gx-5 col-md-8 col-sm-10 d-flex mainformclass ">
        <div class="form-container fontstyle ">
          {/* <h4 class="text-center mb-4">+91-9799735500</h4> */}
          <form className=' '>
            <div class="mb-3 fontstyle d-flex">
              <label for="name" class="form-label me-5 ">Your Name</label>
              <input type="text" class="form-control md-w-50 w-100" id="name" placeholder="Enter your name"/>
            </div>
            <div class="mb-3 fontstyle d-flex">
              <label for="email" class="form-label me-5 ">Your Email</label>
              <input type="email" class="form-control md-w-50 w-100" id="email" placeholder="Enter your email"/>
            </div>
            <div class="mb-3 fontstyle d-flex">
              <label for="phone" class="form-label me-4 "> Phone Number</label>
              <input type="tel" class="form-control md-w-50 w-100 ms-1" id="phone" placeholder="Enter your phone number"/>
            </div>
            <div class="mb-3 fontstyle d-flex">
              <label for="option" class="form-label me-4 ">Select Option</label>
              <select class="form-select md-w-50 w-100 ms-2 " id="option">
                <option selected>--Please choose an option--</option>
                <option value="one-way">One-Way Trip</option>
                <option value="round-trip">Round-Trip</option>
              </select>
            </div>
            <div class="mb-3 fontstyle d-flex">
              <label for="pickup" class="form-label me-3 ">Pickup Address</label>
              <input type="text" class="form-control md-w-50 w-100" id="pickup" placeholder="Enter pickup address"/>
            </div>
            <div class="mb-3 fontstyle d-flex">
              <label for="destination" class="form-label ">Destination</label>
              <input type="text" class="form-control md-w-50 w-100 ms-4" id="destination" placeholder="Enter destination address"/>
            </div>
            <div class="mb-3 fontstyle d-flex">
              <label for="message" class="form-label me-4 ">Your Message</label>
              <textarea class="form-control md-w-50 w-100" id="message" rows="3" placeholder="Enter your message"></textarea>
            </div>
            <button type="submit" class="btn btn-primary w-100">Submit</button>
          </form>
        </div>
        <div class="hero-image ">
          <img src="https://www.jcrcab.com/wp-content/uploads/2024/12/Jaisalmer.png" alt="Hero Image"/>
        </div>
      </div>
    </div>
  </div>









      // <div className="container-fluid form align-items-center justify-content-center" style={{
      // padding: "0px 0px"}}>

      // <div className='container-fluid '>
      //   <div className="container">
      //     <div className='heading'>
      //       <div className="text-center">
      //         <h1 className='ms-5 text-white'> 
      //            Welcome to JCR Cab & Car Rental Rajasthan
      //         </h1>
      //       </div>
      //         <h4 className='fw-light text-white fs-5'>
      //           JCR Cab & Car Rental is trusted in Rajasthan. We have most modern Luxuary Cars, Coaches and Small Cars in our fleet.
      //         </h4>
      //     </div>
      //   </div>
        
      // </div>

      // <div className='container-fluid w-75 border border-1 bgcolor ' style={{ padding: "0px 0px" }}>
      //   <div>
      //     <button className='width-button'>Local Trip</button>
      //     <button className=''>Round Trip</button>
      //     <button className=''>One way Trip</button>
      //     <hr />
      //   </div>
      //   <div>
      //     <form action="" className='form-view'>
      //       <select name="" id="box-size">
      //         <option value="">Select From City</option>
      //         <option value="">Jodhpur</option>
      //         <option value="">Jaipur</option>
      //         <option value="">Udaipur</option>
      //         <option value="">Jaisalmer</option>
      //         <option value="">Bikaner</option>
      //         <option value="">Delhi</option>
      //         <option value="">Agra</option>
      //       </select>
      //       <input type="number" placeholder='No of people' min={4} max={60} id='number' />
      //       <input type="date" name="" id="date" />
      //       <input type="date" id='date' />
      //       <button className='width-button'>Search</button>
      //     </form>
      //   </div>
      // </div>
      // </div>
  
      
  )
}

export default Form
