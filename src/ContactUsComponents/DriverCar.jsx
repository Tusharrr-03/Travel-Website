import React from 'react'
import ToyotaCrysta from 'D:/html tutorial/jcrCab/new/src/images/Toyota-Crysta-e1694803229142-300x240.png'
import ToyotaInnova from 'D:/html tutorial/jcrCab/new/src/images/Toyota-Inova-300x240.png'
import ToyotaFortuner from 'D:/html tutorial/jcrCab/new/src/images/Toyota-Fortuner-300x240.png'
import AUdi from 'D:/html tutorial/jcrCab/new/src/images/Audi-300x240.png'
import Mercedes from 'D:/html tutorial/jcrCab/new/src/images/Merceded.png'

const DriverCar = () => {
    return (
        <div className='container-fluid'>
            <div class="container mt-4">
                <h3 class="mb-3 p-4">Local Trip</h3>
                <div class="row d-flex gy-3">
                    {/* <!-- Car Item Start --> */}
                    <div className='w-30 d-flex justify-content-center align-items-center border col-4 '>
                        <img src={ToyotaCrysta} class="card-img-top" alt="Toyota Crysta" />
                    </div>
                    <div className=' w-50 p-2 col-6'>
                        <div class="card-body pt-5">
                            <h5 class="card-title">Toyota Crysta</h5><hr />
                            <p class="text-muted">SUV</p><hr />
                            <p><strong>Facilities:</strong> AC | 6 Bags | 7 Seats</p><hr />
                            <p>Call our team for quick inquiry: <strong>+91-9799735500</strong></p>
                            <p className='ParagraphEditing'>Details</p>
                        </div>
                    </div>
                    <div className=' col-2 w-20 py-3 bg-car' >
                        <div className='w-100 text-center '>
                            <a href="#" class="btn btn-primary m-3 text-center">Enquiry</a>
                        </div><br />
                        <div className='w-100 text-center '>
                            <a href="tel:+91XXXXXXXXXX" class="btn btn-info text-white m-3"><i class="fas fa-phone"></i> Call Now</a><br />
                        </div>
                        <div className='w-100 text-center '>
                            <a href="https://wa.me/91XXXXXXXXXX" class="btn btn-success m-3"><i class="fab fa-whatsapp"></i> WhatsApp</a>
                        </div>
                    </div>

                    {/* <!-- Repeatation for other cars --> */}
                    <div className='w-30 d-flex justify-content-center align-items-center border col-4 '>
                        <img src={ToyotaFortuner} class="card-img-top" alt="Toyota Fortuner" />
                    </div>
                    <div className=' w-50 p-2 col-6'>
                        <div class="card-body pt-5">
                            <h5 class="card-title">Toyota Fortuner</h5><hr />
                            <p class="text-muted">SUV</p><hr />
                            <p><strong>Facilities:</strong> AC | 6 Bags | 7 Seats</p><hr />
                            <p>Call our team for quick inquiry: <strong>+91-9799735500</strong></p>
                            <p className='ParagraphEditing'>Details</p>
                        </div>
                    </div>
                    <div className=' col-2 w-20 py-3 bg-car' >
                        <div className='w-100 text-center '>
                            <a href="#" class="btn btn-primary m-3 text-center">Enquiry</a>
                        </div><br />
                        <div className='w-100 text-center '>
                            <a href="tel:+91XXXXXXXXXX" class="btn btn-info text-white m-3"><i class="fas fa-phone"></i> Call Now</a><br />
                        </div>
                        <div className='w-100 text-center '>
                            <a href="https://wa.me/91XXXXXXXXXX" class="btn btn-success m-3"><i class="fab fa-whatsapp"></i> WhatsApp</a>
                        </div>
                    </div>


                    {/* <!-- Repeatation for other cars --> */}
                    <div className='w-30 d-flex justify-content-center align-items-center border col-4 '>
                        <img src={ToyotaInnova} class="card-img-top" alt="Toyota Innova" />
                    </div>
                    <div className=' w-50 p-2 col-6'>
                        <div class="card-body pt-5">
                            <h5 class="card-title">Toyota Innova</h5><hr />
                            <p class="text-muted">SUV</p><hr />
                            <p><strong>Facilities:</strong> AC | 6 Bags | 7 Seats</p><hr />
                            <p>Call our team for quick inquiry: <strong>+91-9799735500</strong></p>
                            <p className='ParagraphEditing'>Details</p>
                        </div>
                    </div>
                    <div className=' col-2 w-20 py-3 bg-car' >
                        <div className='w-100 text-center '>
                            <a href="#" class="btn btn-primary m-3 text-center">Enquiry</a>
                        </div><br />
                        <div className='w-100 text-center '>
                            <a href="tel:+91XXXXXXXXXX" class="btn btn-info text-white m-3"><i class="fas fa-phone"></i> Call Now</a><br />
                        </div>
                        <div className='w-100 text-center '>
                            <a href="https://wa.me/91XXXXXXXXXX" class="btn btn-success m-3"><i class="fab fa-whatsapp"></i> WhatsApp</a>
                        </div>
                    </div>


                    {/* <!-- Repeatation for other cars --> */}
                    <div className='w-30 d-flex justify-content-center align-items-center border col-4 '>
                        <img src={AUdi} class="card-img-top" alt="Audi" />
                    </div>
                    <div className=' w-50 p-2 col-6'>
                        <div class="card-body pt-5">
                            <h5 class="card-title">Audi</h5><hr />
                            <p class="text-muted ">Luxury Car</p><hr />
                            <p><strong>Facilities:</strong> AC | Bags | 5 Seats</p><hr />
                            <p>Call our team for quick inquiry: <strong>+91-9799735500</strong></p>
                            <p className='ParagraphEditing'>Details</p>
                        </div>
                    </div>
                    <div className=' col-2 w-20 py-3 bg-car' >
                        <div className='w-100 text-center '>
                            <a href="#" class="btn btn-primary m-3 text-center">Enquiry</a>
                        </div><br />
                        <div className='w-100 text-center '>
                            <a href="tel:+91XXXXXXXXXX" class="btn btn-info text-white m-3"><i class="fas fa-phone"></i> Call Now</a><br />
                        </div>
                        <div className='w-100 text-center '>
                            <a href="https://wa.me/91XXXXXXXXXX" class="btn btn-success m-3"><i class="fab fa-whatsapp"></i> WhatsApp</a>
                        </div>
                    </div>

                    {/* <!-- Repeatation for other cars --> */}
                    <div className='w-30 d-flex justify-content-center align-items-center border col-4 '>
                        <img src={Mercedes} class="card-img-top" alt="Audi" />
                    </div>
                    <div className=' w-50 p-2 col-6'>
                        <div class="card-body pt-5">
                            <h5 class="card-title">Mercedes</h5><hr />
                            <p class="text-muted">Luxury Car</p><hr />
                            <p><strong>Facilities:</strong> AC | Bags | 5 Seats</p><hr />
                            <p>Call our team for quick inquiry: <strong>+91-9799735500</strong></p>
                            <p className='ParagraphEditing'>Details</p>
                        </div>
                    </div>
                    <div className=' col-2 w-20 py-3 bg-car' >
                        <div className='w-100 text-center '>
                            <a href="#" class="btn btn-primary m-3 text-center">Enquiry</a>
                        </div><br />
                        <div className='w-100 text-center '>
                            <a href="tel:+91XXXXXXXXXX" class="btn btn-info text-white m-3"><i class="fas fa-phone"></i> Call Now</a><br />
                        </div>
                        <div className='w-100 text-center '>
                            <a href="https://wa.me/91XXXXXXXXXX" class="btn btn-success m-3"><i class="fab fa-whatsapp"></i> WhatsApp</a>
                        </div>
                    </div>

                </div>
            </div>
            <div className='container-fluid bgColorBox'>
                <div className='container d-flex'>
                    <div className='w-50 justify-content-center align-items-center col-4 p-5 '>
                        <h5 className='mb-4'>Terms and Conditions</h5>
                        <p className='CostumePara'>Km starts from office & closed to office Basis</p>
                        <p className='CostumePara'>After (12.00 Pm Night ), will be calculated the next day</p>
                        <p className='CostumePara'>GST will be extra charged as per applicable</p>
                    </div>
                    <div className='w-50 justify-content-center align-items-center col-4 p-5 '>
                    <h5 className='mb-4'>Our Specialities</h5>
                        <p className='CostumePara'>All Drivers will be in proper uniform and Carrying their own mobiles.</p>
                        <p className='CostumePara'>Our Coordinator will be at your service to coordinate all the vehicles.</p>
                        <p className='CostumePara'>Mineral water bottle will be given at the pick up point.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DriverCar
