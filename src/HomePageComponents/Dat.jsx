import React from 'react'
import { BsFillHandbagFill } from 'react-icons/bs'
import { FaRegSnowflake } from 'react-icons/fa6'
import { IoPerson } from 'react-icons/io5'
import myImages from 'D:/html tutorial/jcrCab/new/src/images/bdr.png'
import myImages1 from 'D:/html tutorial/jcrCab/new/src/images/car.jpg'
import myImages2 from 'D:/html tutorial/jcrCab/new/src/images/Toyota-Inova-300x240.png'
import myImages3 from 'D:/html tutorial/jcrCab/new/src/images/Toyota-Fortuner-300x240.png'
import myImages4 from 'D:/html tutorial/jcrCab/new/src/images/Audi-300x240.png'
import myImages5 from 'D:/html tutorial/jcrCab/new/src/images/Toyota-Crysta-e1694803229142-300x240.png'

const Dat = () => {
    return (

        // Welcome text and car picture

        <><div className="container-fluid ">
            <div className="container info py-5">

                <div className="row justify-content-center text-center text-md-start">
                    <div className="col-md-6 d-flex flex-column align-items-center">
                        <div className="fontstyle heading p-0">
                            <h4>Welcome to JCR Cab & Car Rental Rajasthan</h4>
                        </div>
                        <div className="align-content-center">
                            <img src={myImages} alt="" id="bdr" className="img-fluid" />
                        </div>
                        <div className="containt py-3">
                            <p>
                                Are you planning to visit a city and do not want to follow the typical tourist-beaten path, or do you want to explore the untouched corners of your own city? Or perhaps, you have a business meeting in some other city? Or maybe looking to book a royal fleet for your wedding? If your query falls among any of them, look no further because JCR Cabs can be the solution! We have emerged as the one-stop solution for Cab Service in Rajasthan. Booking a Taxi in Rajasthan is no longer a hassle with our platform. We are known for our easy online booking services and round-the-clock availability. Personify the spirit of traveling as we help you carve a unique path through the city of your choice. From the golden sands of Jaisalmer to the bustling markets of Jodhpur, Hire a Cab in Rajasthan with JCR cabs and car Rental and see all the sites on your own schedule. JCR Cab offers cab services in India Like Taxi Service In Jodhpur, and Taxi Service In Jaipur.
                            </p>
                            <button className="btn btn-primary">Read more</button>
                        </div>
                    </div>
                    <div className="col-md-5 d-flex justify-content-center">
                        <img src={myImages1} width="100%" alt="" className="img-fluid" />
                    </div>
                </div>

            </div>
        </div>

            {/* Second Heading and Brief */}

            <div className="container-fluid">
                <div className="fontstyle container info py-5">
                    <h3>Experience the taste of Luxury and Royalty with JCR Cabs</h3>
                    <div className="carlog">
                        <img src={myImages} alt="" />
                    </div>
                    <div className="brief py-3">
                        <p>
                            At JCR CAB AGENCY, we ensure that you will ride with us, for that we provide a variety of cabs as per your convenience and requirements. We provide comfortable and budget-friendly cabs as well as luxurious and stylish cabs. We provide the best taxi service with the best and minimal taxi prices. We also provide taxi services throughout Rajasthan.</p>
                    </div>
                </div>

                {/* Car and Details */}

                <div className="container-fluid">
                    <div className="container">
                        <div className="row justify-content-around">
                            <div className="col-md-2 py-3">
                                <div className="image">
                                    <img src={myImages2} width='100%' className='' alt="" />
                                </div>
                                <div className=" text-center">
                                    Toyota Innova
                                </div>
                                <div className="list">
                                    <ul>
                                        <li>
                                            <a href=""><FaRegSnowflake /></a> AC
                                        </li>
                                        <li>
                                            <a href=""><BsFillHandbagFill /></a> Bags
                                        </li>
                                        <li>
                                            <a href=""><IoPerson /></a> 7 Seats
                                        </li>
                                    </ul>
                                </div>

                            </div>
                            <div className="col-md-2">
                                <div className="image pt-3">
                                    <img src={myImages3} width='100%' alt="" />
                                </div>
                                <div className=" text-center">
                                    Toyota Fortuner
                                </div>
                                <div className="list">
                                    <ul>
                                        <li>
                                            <a href=""><FaRegSnowflake /></a> AC
                                        </li>
                                        <li>
                                            <a href=""><BsFillHandbagFill /></a> Bags
                                        </li>
                                        <li>
                                            <a href=""><IoPerson /></a> 7 Seats
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <div className="image pt-3">
                                    <img src={myImages4} width='100%' alt="" />
                                </div>
                                <div className=" text-center">
                                    Audi
                                </div>
                                <div className="list">
                                    <ul>
                                        <li>
                                            <a href=""><FaRegSnowflake /></a> AC
                                        </li>
                                        <li>
                                            <a href=""><BsFillHandbagFill /></a> Bags
                                        </li>
                                        <li>
                                            <a href=""><IoPerson /></a> 4 Seats
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <div className="image pt-2">
                                    <img src={myImages5} width='120%' alt="" />
                                </div>
                                <div className=" text-center">
                                    Toyota Innova
                                </div>
                                <div className="list">
                                    <ul>
                                        <li>
                                            <a href=""><FaRegSnowflake /></a> AC
                                        </li>
                                        <li>
                                            <a href=""><BsFillHandbagFill /></a> Bags
                                        </li>
                                        <li>
                                            <a href=""><IoPerson /></a> 7 Seats
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dat