import React, { useEffect, useState } from 'react'
import ToyotaCrysta from 'D:/html tutorial/jcrCab/new/src/images/Toyota-Crysta-e1694803229142-300x240.png'
import ToyotaInnova from 'D:/html tutorial/jcrCab/new/src/images/Toyota-Inova-300x240.png'
import ToyotaFortuner from 'D:/html tutorial/jcrCab/new/src/images/Toyota-Fortuner-300x240.png'
import AUdi from 'D:/html tutorial/jcrCab/new/src/images/Audi-300x240.png'
import Mercedes from 'D:/html tutorial/jcrCab/new/src/images/Merceded.png'
import axios from 'axios'

const DriverCar = () => {

    const [Data, setData] = useState([]);
    const [path, setpath] = useState([]);

    const ShowForm = async () => {
        try {
            const response = await axios.get(`http://localhost:8000/api/jcr-services/driver/show-driver`)
            setData(response.data.data);
            setpath(response.data.file_path);
        }
        catch (error) {
            console.log(error);
        }
    }
    useEffect(() => { ShowForm(); }, [])

    return (
        <div className='container-fluid'>
            <div class="container mt-4">
                <h3 class="mb-3 p-4">Local Trip</h3>
                <div class="row d-flex gy-3">
                    {/* <!-- Car Item Start --> */}
                    {
                        Data.map((v, i) => (
                            <>
                                <div className='w-30 d-flex justify-content-center align-items-center border col-4 '>
                                    <img src={`${path}${v.profile}`} class="card-img-top" alt="Toyota Crysta" />
                                </div>
                                <div className=' w-50 p-2 col-6'>
                                    <div class="card-body pt-5">
                                        <h5 class="card-title">{v.name}</h5><hr />
                                        <p class="text-muted">SUV</p><hr />
                                        <p><strong>Facilities:</strong> {v.facility}</p><hr />
                                        <p>Call our team for quick inquiry: <strong>{v.name}</strong></p>
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
                            </>
                        ))

                    }

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
