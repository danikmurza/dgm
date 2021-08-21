import React from "react"

const AboutUs = () => {
    return (
        <div className="about-us">
            <h3 className="roadside">About Us</h3>
            <p className="mb-0 p-4">DGM EXPRESS in Palatine, IL is an innovative company with more than 2 years of
                experience providing roadside services.
                We have the proper equipment & professional team for all of your needs. We provide you with safe & fast
                services.</p>

            <p className="mb-0 p-4">We service Palatine, IL, as well as all the surrounding areas. At DGM express , our focus is on offering
                a service at an affordable price every time.
                We have the most modern equipment available for the quickest response time. With professionally trained
                drivers, we can handle any type of roadside assistance.
                At DGM express , we have no hidden fees or extra charges, with only one price to get the job done safe.
                We accept any major credit cars, debit cards or cash.
                our services offered:</p>

            <div className="row justify-content-evenly mb-0  text-center">
                <div className="col-6">
                    -Jump Starts
                </div>
                <div className="col-6">
                    -Tire Changes
                </div>
            </div>
            <div className="row justify-content-evenly mb-0 text-center">
                <div className="col-6">
                    -Lock Outs
                </div>
                <div className="col-6">
                    -Fuel Delivery
                </div>
            </div>
            <p className="mb-0 text-center">We provide the lowest rates in the area.</p>
            <p className="pb-4 mb-0 text-center">Call Today for a free quote!</p>
        </div>
    )
}

export default AboutUs
