import React from 'react'
import myImages from 'D:/html tutorial/jcrCab/new/src/images/Scene2.jpg'
import myImages1 from 'D:/html tutorial/jcrCab/new/src/images/Scene1.jpg'

const Tour = () => {
  return (
    <div className="container-fluid journey py-5">
        <div className="row align-content-center">
            <div className="col-md-7">
                <div className="head p-0 fw-bold fs-5 align-content-center">
                    We Care Of Your Journey And Plans
                </div>
                <div className="head2 fw-light">
                    Best Places
                </div>
                <div className="cont">
                    <p>
                    Travel agencies commit to ensure a caring journey. While we understand that travelling means much more than just hopping from one destination to another, we make sure to secure a meticulous planning for having a seamless experience. Our goal is to alleviate the stress out of your enthusiasm allowing you to have a worry-free trip. Our dedicated team devote in providing customer-centric assistance, be it addressing any concern or answering to queries, we bear the responsibility to be of aid in any minute. Our team is well-versed in proving tailor-made itinerates striving to reflect your personal choices and preferences as we take our time to understand how every traveller has unique expectations and desires.
                    </p>
                </div>
                <div className="cont">
                    <p>
                    We keep ourselves updated to the tiniest details so that you don’t have to providing you the scope to completely involve yourself in your adventures. Whether you dream yourself to be in exotic landscapes or rich cultures, we are here to take you to your heavenly abode. We care for your memories that last you a lifetime!
                    </p>
                </div>
            </div>
            <div className="col-md-2 contimg">
                <img src={myImages} width="100%" height="100%" alt="" />
            </div>
            <div className="col-md-2 contimg">
                <img src={myImages1} width="100%" height="100%" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Tour
