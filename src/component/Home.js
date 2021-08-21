import React from "react"
import { Carousel } from 'react-bootstrap'
import '../App.css'


function Home() {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img rel="preload" className="d-block w-100"
                         src="https://dgmimages.s3.us-east-2.amazonaws.com/images/jump-start.jpg" alt="Jump Start"/>
                    <Carousel.Caption>
                        {/*<h3>First slide label</h3>*/}
                        <h1 className="lo">Jump Start</h1>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100"
                         src="https://dgmimages.s3.us-east-2.amazonaws.com/images/lock-out.jpg" alt="Lock Out"/>
                    <Carousel.Caption>
                        <h1 className="lo">Lock Out</h1>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100"
                         src="https://dgmimages.s3.us-east-2.amazonaws.com/images/tire-service.jpg" alt="Tire Service"/>
                    <Carousel.Caption>
                        <h1 className="lo">Tire Service</h1>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100"
                         src="https://dgmimages.s3.us-east-2.amazonaws.com/images/fuel-delivery.jpg"
                         alt="Fuel Delivery"/>
                    <Carousel.Caption>
                        <h1 className="lo">Fuel Delivery</h1>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <div className="main-text">
                <h3 className="roadside">Roadside Assistance</h3>
                <p className="mb-0 p-4">DGM Express offers the best roadside assistance in the North-west suburbs area.
                    Our company is the first-choice source for roadside assistance. Our clients appreciate our fast
                    dispatch times, competitive rates, and five-star customer service.

                    We are an innovative Company with over 2 years of experience in providing roadside services. We have
                    the proper equipment & skilled personnel to handle any kind of emergency service. We work with all
                    Roadside Assistance Programs in providing any roadside service to get you back on the road. </p>

            </div>
        </>
    )
}

export default Home

