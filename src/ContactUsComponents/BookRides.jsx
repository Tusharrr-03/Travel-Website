import React from 'react'
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const BookRides = () => {
  return (
    <div className="container-fluid pt-3 ">
      <section className='fontstyle'>
        <div className="cointainer ">
          <div className="class text-center pt-4">
            <h3>Book your comfortable and hassle free ride with us.</h3>
            <p class='fontssize'>Ready to Ride? Let's go for comfortable and seamless ride by just contacting below</p>
          </div>
        </div>
      </section>
      <div class='container-fluid bgColorBox d-flex justify-content-center align-content-center'>
        <div class="container w-75">
            <section className='ContactUsFor'>
                <div class='row'>
                    <div class="col-md-4 col-sm-6 col-xs-12">
                        <div className='text-center p-3'>
                            <img src="https://www.jcrcab.com/wp-content/themes/JCR_CAB/images/office.png" width='50px' alt="address" />
                            <p className='fontdesigns'>Sweet, 9,Gopal Pyau Trust, Amarta Devi Circle, Pali Rd, near Jodhana, Jodhpur, Rajasthan 342001</p>
                        </div>
                    </div>
                    <div class="col-md-4 col-sm-6 col-xs-12">
                        <div className='text-center p-3'>
                            <img src="https://www.jcrcab.com/wp-content/themes/JCR_CAB/images/call.png" width='50px' alt="address" />
                            <p className='fontdesigns'>+919414137405 +919799735500</p>
                        </div>
                    </div>
                    <div class="col-md-4 col-sm-6 col-xs-12">
                        <div className='text-center p-3'>
                            <img src="https://www.jcrcab.com/wp-content/themes/JCR_CAB/images/mail1.png" width='50px' alt="address" />
                            <p className='fontdesigns'>jcrcab12@gmail.com</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
      </div>
      <Container className="contact-form-container py-5">
      <Row className="justify-content-center">
        {/* Form Section */}
        <Col lg={6} md={12}>
          <h4 className="mb-4 text-uppercase SubHeading font-weight-bold">
            Send us a message and we will reach you out soon!
          </h4>
          <Form>
            <Row>
              <Col md={6} className="mb-3">
                <Form.Control type="text" placeholder="Name" required />
              </Col>
              <Col md={6} className="mb-3">
                <Form.Control type="email" placeholder="Email Address" required />
              </Col>
            </Row>

            <Row>
              <Col md={6} className="mb-3">
                <Form.Control type="tel" placeholder="Phone Number" required />
              </Col>
              <Col md={6} className="mb-3">
                <Form.Control type="text" placeholder="Subject" required />
              </Col>
            </Row>

            <Form.Control
              as="textarea"
              rows={4}
              placeholder="Your Plan"
              className="mb-3"
            />

            <div className="d-flex align-items-center mb-3">
              <strong className="mr-2">4 - 2 = </strong>
              <Form.Control type="text" style={{ width: "60px" }} required />
            </div>

            <Button variant="primary" type="submit" className="w-100">
              Submit
            </Button>
          </Form>
        </Col>

        {/* Map Section */}
        <Col lg={6} md={12} className="mt-4 mt-lg-0">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093657!2d144.95565161531677!3d-37.81731397975198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d5df8a70f41%3A0x6b9cd8d5c31b1a1!2sYour%20Location!5e0!3m2!1sen!2sin!4v1631457325046!5m2!1sen!2sin"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Google Map"
          ></iframe>
        </Col>
      </Row>
    </Container>
    </div>
  )
}

export default BookRides