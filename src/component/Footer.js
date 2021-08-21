import React from "react"
import { Button } from 'react-bootstrap'
import { Link } from "react-router-dom"
import '../App.css'


export const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

function Footer() {
    return (
        <div className="foot">
            <div className="column">
                <Link to="/jump_start" className="pages" onClick={() => scrollToTop()}>
                    <img src="https://dgmimages.s3.us-east-2.amazonaws.com/images/battery.png" className="images"
                         alt="battery"/>
                </Link>
                <Link to="/lock_out" className="pages" onClick={() => scrollToTop()}>
                    <img src="https://dgmimages.s3.us-east-2.amazonaws.com/images/car-key.png" className="images"
                         alt="car-key"/>
                </Link>
                <Link to="/tire_service" className="pages" onClick={() => scrollToTop()}>
                    <img src="https://dgmimages.s3.us-east-2.amazonaws.com/images/flat-tire.png" className="images"
                         alt="tire-service"/>
                </Link>
                <Link to="/gas_delivery" className="pages" onClick={() => scrollToTop()}>
                    <img src="https://dgmimages.s3.us-east-2.amazonaws.com/images/gasoline.png" className="images"
                         alt="gas-delivery"/>
                </Link>
                <Link to="/did_start" className="pages brok" onClick={() => scrollToTop()}>
                    <img src="https://dgmimages.s3.us-east-2.amazonaws.com/images/inspection-icon.png" className="images"
                         alt="did-start"/>
                </Link>
                <Link to="/battery_replacement" className="pages brok" onClick={() => scrollToTop()}>
                    <img src="https://dgmimages.s3.us-east-2.amazonaws.com/images/battery-replacement.png" className="images"
                         alt="battery-replacement"/>
                </Link>
            </div>
            <div className="cont2 pb-3">
            {/*    <h1 className="all-price">All Services for 50$</h1>*/}
            </div>

            <footer className="bg-dark pt-5">
                <div className="pt-5 bg-darker">
                    <div className=" text-sm-center">
                        <div className="foot-logo">
                            <div className="mb-4">
                                <img src="https://dgmimages.s3.us-east-2.amazonaws.com/images/visa.png" width="60"
                                     height="40" alt="" className=" mb-2"/>
                                <img src="https://dgmimages.s3.us-east-2.amazonaws.com/images/mastercard.svg" width="80"
                                     height="40" alt="" className=" mb-2"/>
                                <img src="https://dgmimages.s3.us-east-2.amazonaws.com/images/discover.svg" width="80"
                                     height="40" alt="" className=" mb-2"/>
                                <img src="https://dgmimages.s3.us-east-2.amazonaws.com/images/american.svg" width="80"
                                     height="40" alt="american" className=" mb-2"/>
                            </div>
                            <img src="https://dgmimages.s3.us-east-2.amazonaws.com/images/Logotip.png" alt=""
                                 className="logo mb-2"/>
                        </div>
                        <a href="https://dgmexpress.me" className="call">
                            <Button variant="outline-danger" className="book-now call-now mt-3"
                                    onClick={() => scrollToTop()}>BOOK
                                NOW</Button>
                        </a>
                        <div className="mt-3 pb-3 call">
                            <a href="tel:312-966-5464"
                               className="book-now call-now btn btn-outline-danger">312-966-5464</a>
                        </div>

                        <hr className="hr-light pb-4 mb-3"/>

                        <div
                            className="pb-4 font-size-xs text-light opacity-50 text-center text-md-center">
                            © All rights reserved. Made by{" "}
                            <a
                                className="text-light"
                                href="https://skynet.org.kz"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                SkyNet
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer


