import React from 'react'
import myImages from 'D:/html tutorial/jcrCab/new/src/images/bdr.png'
import myImages1 from 'D:/html tutorial/jcrCab/new/src/images/jodhpur.jpg'
import myImages2 from 'D:/html tutorial/jcrCab/new/src/images/jaipur.jpg'
import myImages3 from 'D:/html tutorial/jcrCab/new/src/images/jaisalmer-fort-rajasthan.jpg'
import myImages4 from 'D:/html tutorial/jcrCab/new/src/images/udaipur.jpg'

const Plans = () => {
  return (

            // Header section

    <div className="container-fluid">
        <div className="container ">
           <div className='fontstyle head text-center pb-2'>
            <div>
                <h1>Popular Destinations in Rajasthan</h1>
            </div>
            <div>
                <img src={myImages} alt="" />
            </div>
           </div>

           {/* Row First Start */}

           <div className="row justify-content-between imgDataContentmain">
            <div className="col-6 short jdContent d-flex p-0 justify-content-between contentColoumnWise">
                <div className="col-5">
                    <div className="jdimg">
                        <img src={myImages1} width="100%" alt="" />
                    </div>
                </div>
                <div className="col-6 mt-4">
                    <div className="jdbrief">
                        <h1>Jodhpur</h1>
                        <p>
                            Jodhpur: Popular as the Sun City and the Blue city, Jodhpur is a well to do tourist destination which constitutes of many temples, forts, and Havelis. Some of the other tourist attractions of Jodhpur include Mandore gardens, Kaylana Lake, Shastri Circle, Masuria Hill Garden, Rao Jodha Desert Rock Park, etc.
                        </p> 
                        <button>
                            Read More
                        </button>
                    </div>
                </div>
            </div>
            <div className="col-5 short  d-flex p-0 justify-content-between contentColoumnWise">
                <div className="col-md-6 ">
                    <div className="jaiimg">
                        <img src={myImages2} alt="" />
                    </div>
                </div>
                <div className="col-md-5 mt-4">
                    <div className="jaibrief">
                        <h1>Jaipur</h1>
                        <p>
                        Jaipur: Known as the Pink City, Jaipur is one of the largest cities in the state of Rajasthan. It is one of the most popular tourist attractions in India. This city can be considered as a perfect combination of cultural and traditional diversity.
                        </p>
                        <button>
                            Read More
                        </button> 
                    </div>
                </div>
            </div>
           </div>

            {/* Row Second Start */}
            
            <div className="row justify-content-between mt-3 imgDataContentmain">
            <div className="col-6 short  d-flex p-0 justify-content-between contentColoumnWise">
                <div className="col-5">
                    <div className="jaiimg">
                        <img src={myImages3} alt="" />
                    </div>
                </div>
                <div className="col-6 mt-4">
                    <div className="jdbrief">
                        <h1>Jaisalmer</h1>
                        <p>
                            Jaisalmer: Popularly known as the Golden City, Jaisalmer is the largest district of Rajasthan. It is known for its richness in terms of Jain hermitage, the Jaisalmer Fort, and the museums, which represent the cultural diversity of the place as a whole. Another worth noticing thing about Jaisalmer is 'The Desert Festival.
                        </p> 
                        <button>
                            Read More
                        </button>
                    </div>
                </div>
            </div>
            <div className="col-5 short  d-flex p-0 justify-content-between contentColoumnWise">
                <div className="col-md-6 ">
                    <div className="jaiimg">
                        <img src={myImages4} alt="" />
                    </div>
                </div>
                <div className="col-md-5 mt-4">
                    <div className="udibrief">
                        <h1>Udaipur</h1>
                        <p>
                            Udaipur: The historic capital of the kingdom of Mewar, Udaipur is known as the "City of Lakes" It is known for its rich contribution to Indian history. Udaipur is also known for the various national and international cultural events organized there. The beautiful lakes, forts, palaces, and temples add to the richness of its legacy.
                        </p> 
                        <button>
                            Read More
                        </button>
                    </div>
                </div>
            </div>
           </div>
        </div>
    </div>
  )
}

export default Plans
