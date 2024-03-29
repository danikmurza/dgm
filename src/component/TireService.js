import React from "react"
import '../App.css'
import { scrollToTop } from './Footer'

function TireService() {
    return (
        <div>
            <div>
                <h3 className="text-center mt-2">
                    Tire Service
                </h3>
            </div>
            <div className="jumbotron jumba">
                <img src="https://dgmimages.s3.us-east-2.amazonaws.com/images/tire-service.jpg" className="card-img-top jump-image" alt="jump"/>
                <h6 className="display-4 pt-2 text-center pb-4 title">Tire Service</h6>
                <p className="lead">If you've experienced a tire blow out or a tire puncture and need to put on your car's spare tire, our roadside assistance technicians will expertly install your car's available spare tire to replace your flat tire.

                    In the occasion that you are stranded on the side of the road because of an unfortunate flat tire or blowout, there is no reason to panic.  We will do all the hard work for you.  You will be back on the road safely, on your way to your destination quickly and safely.

                    If you need emergency roadside assistance, call us morning or night, any day of the week and we will dispatch one of our professional technicians to your location. You do not have to be worried about being stranded on the side of the road in a location that you are not familiar with or that could be dangerous. With our professional technicians  we will do whatever is required to get you back on the road. Contact our office when you have an emergency and you will be pleased with the service we provide.</p>
                <hr className="my-4" />
                <p className="lead">
                    <a className="btn btn-primary btn-lg" href="https://dgmexpress.me" role="button" onClick={()=>scrollToTop()}>BOOK NOW</a>
                </p>
            </div>
        </div>
    )
}

export default TireService
