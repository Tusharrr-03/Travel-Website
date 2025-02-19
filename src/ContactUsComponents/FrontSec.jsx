// import React from 'react'

// const FrontSec = () => {
//   return (
//     <div className="banner1">
      
//     </div>
//   )
// }

// export default FrontSec



 import React, { useState } from "react";
 import { Container, Row, Col, Button, Form, Tab, Nav } from "react-bootstrap";
 import { FaSearch } from "react-icons/fa";
import DriverCar from "./DriverCar";

 const FrontSec = () => {
   const [tripType, setTripType] = useState("local");
   const [show,hide]=useState(false);

   const ShowDriver=()=>{
    hide(!show);
   }

   return (
    <>
     <div className="trip-booking">
       {/* Background Image with Overlay */}
       <div className="banner1">
         <div className="overlay">
           <h2 className="contact-title">CONTACT US</h2>
           <div className="divider">
             <span className="car-icon">🚗</span>
           </div>

           {/* Trip Type Tabs */}
           <Container>
             <Tab.Container activeKey={tripType} onSelect={(key) => setTripType(key)}>
               <Nav variant="pills" className="trip-tabs">
                 <Nav.Item>
                   <Nav.Link eventKey="local">Local Trip</Nav.Link>
                 </Nav.Item>
                 <Nav.Item>
                   <Nav.Link eventKey="oneway">One Way Trip</Nav.Link>
                 </Nav.Item>
                 <Nav.Item>
                   <Nav.Link eventKey="round">Round Trip</Nav.Link>
                 </Nav.Item>
               </Nav>
             </Tab.Container>
           </Container>

           {/* Booking Form */}
           <Container className="booking-form">
             <Row className="form-row">
               <Col md={3}>
                 <Form.Select>
                   <option>Select From City</option>
                   <option>Jodhpur</option>
                   <option>Jaipur</option>
                   <option>Delhi</option>
                   <option>Mumbai</option>
                 </Form.Select>
               </Col>

               <Col md={2}>
                 <Form.Select>
                   <option>No Of People</option>
                   <option>1</option>
                   <option>2</option>
                   <option>3</option>
                   <option>4+</option>
                 </Form.Select>
               </Col>

               <Col md={2}>
                 <Form.Control type="date" />
               </Col>

               <Col md={2}>
                 <Form.Control type="date" />
               </Col>

               <Col md={2}>
                 <Button className="search-btn" onClick={ShowDriver} >
                   <FaSearch /> Search
                 </Button>
               </Col>
             </Row>
           </Container>
         </div>
       </div>
     </div>
     {
      show==true?<DriverCar/> :<></>
     }
     
     </>
   );
 };

 export default FrontSec;
