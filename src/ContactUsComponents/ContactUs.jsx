import React from 'react'
import NavBarSec from '../HomePageComponents/NavBarSec'
import Bottomfinal from '../HomePageComponents/Bottomfinal'
import Certificate from './Certificate'
import BookRides from './BookRides'
import FrontSec from './FrontSec'
import Bottom from './Bottom'
import DriverCar from './DriverCar'

export default function ContactUs() {
    return (
        <>
            <NavBarSec/> 
            <FrontSec/>
            
            <BookRides/>
            <Certificate/>
            <Bottom/>
            <Bottomfinal/>      
        </>
    )   
}

