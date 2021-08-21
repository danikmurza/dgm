import React from "react"
import {Button} from 'react-bootstrap'
import {Link} from "react-router-dom"
// import HamburgerMenu from 'react-hamburger-menu'

import {scrollToTop} from './Footer'
import '../App.css'


class Header extends React.Component {

    state={
        open: false
    }

    handleClick = () => {
        this.setState({
            open: !this.state.open
        });
    }

    render() {

        return (
            <>
                <div className="navigation row">
                    <Link to="/" className="btn  col-1 nav-btn" onClick={() => scrollToTop()}>Home</Link>
                    <Link to="/did_start" className="btn  col-1 nav-btn" onClick={() => scrollToTop()}>Car Is Not Starting Diagnostic</Link>
                    <Link to="/battery_replacement" className="btn col-1 nav-btn" onClick={() => scrollToTop()}>Replacement Battery</Link>
                    <Link to="/jump_start" className="btn col-1 nav-btn" onClick={() => scrollToTop()}>Jump Start</Link>
                    <Link to="/gas_delivery" className="btn col-1 nav-btn" onClick={() => scrollToTop()}>Fuel
                        Delivery</Link>
                    <Link to="/lock_out" className="btn col-1 nav-btn" onClick={() => scrollToTop()}>Lock out</Link>
                    <Link to="/tire_service" className="btn col-1 nav-btn" onClick={() => scrollToTop()}>Tire
                        Service</Link>
                    <Link to="/about_us" className="btn col-1 nav-btn" onClick={() => scrollToTop()}>About Us</Link>
                    <div className="col-lg-4 ">
                        <a href="https://dgmexpress.me" className="col-12 mr-0 pr-0">
                            <Button variant="outline-success" className="book-now" onClick={() => scrollToTop()}>BOOK
                                NOW</Button>
                        </a>
                    </div>
                </div>
                <div className="iphone">
                    <Link to="/" className="mt-4 call">
                        <Button variant="outline-danger" className="call-now"
                                onClick={() => scrollToTop()}>Home</Button>
                    </Link>
                    <a href="https://dgmexpress.me" className="call">
                        <Button variant="outline-danger" className="book-now call-now mt-3"
                                onClick={() => scrollToTop()}>BOOK
                            NOW</Button>
                    </a>
                    <div className="mt-3 pb-3 call">
                        <a href="tel:312-966-5464" className="call-now btn btn-outline-danger">312-966-5464</a>
                    </div>
                </div>
                {/*<div className="cont2 pb-3">*/}
                {/*    <h1 className="all-price">All Services for 50$</h1>*/}
                {/*</div>*/}
                </>
        )
    }
}

export default Header
