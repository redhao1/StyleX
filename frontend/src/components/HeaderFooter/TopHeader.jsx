import React, { useState } from "react";
import { Link } from "react-router-dom"

function TopHeader() {

    const [isMobileView, setMobileView] = useState(false);

    function handleMobileView() {
        setMobileView(!isMobileView);
    }

    return(
        <div className="top-header">
        <div className="container-fluid">
            <div className="row">
            	<div className="col-10 col-sm-8 col-md-5 col-lg-4">
                    <div className="currency-picker">
                        <span className="selected-currency">USD</span>
                        <ul id="currencies">
                            <li data-currency="INR" className="">INR</li>
                            <li data-currency="GBP" className="">GBP</li>
                            <li data-currency="CAD" className="">CAD</li>
                            <li data-currency="USD" className="selected">USD</li>
                            <li data-currency="AUD" className="">AUD</li>
                            <li data-currency="EUR" className="">EUR</li>
                            <li data-currency="JPY" className="">JPY</li>
                        </ul>
                    </div>
                    <div className="language-dropdown">
                        <span className="language-dd">English</span>
                        <ul id="language">
                            <li className="">German</li>
                            <li className="">French</li>
                        </ul>
                    </div>
                    <p className="phone-no"><i className="anm anm-phone-s"></i> +440 0(111) 044 833</p>
                </div>
                <div className="col-sm-4 col-md-4 col-lg-4 d-none d-lg-none d-md-block d-lg-block">
                	<div className="text-center"><p className="top-header_middle-text"> Worldwide Express Shipping</p></div>
                </div>
                <div className="col-2 col-sm-4 col-md-3 col-lg-4 text-right">
                	<span className="user-menu d-block d-lg-none"><a onClick={handleMobileView}><i className="anm anm-user-al" aria-hidden="true"></i></a></span>
                    <ul className="customer-links list-inline" style={isMobileView ? {display: 'block'} : {}}>
                        <li><Link to="/Login">Login</Link></li>
                        <li><Link to="/Register">Create Account</Link></li>
                        <li><a href="wishlist.html">Wishlist</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    );
}

export default TopHeader;