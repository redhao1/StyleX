import React from "react";

function Footer () {
    return (
        <footer id="footer" className="footer-5">
        <div className="site-footer">
        	<div className="container">
     			{/*Footer Links*/}
            	<div className="footer-top">
                	<div className="row">
                        <div className="col-12 col-sm-12 col-md-3 col-lg-3 footer-links">
                        	<h4 className="h4">Informations</h4>
                            <ul>
                            	<li><a href="#">About us</a></li>
                                <li><a href="#">Careers</a></li>
                                <li><a href="#">Privacy policy</a></li>
                                <li><a href="#">Terms &amp; condition</a></li>
                                <li><a href="#">My Account</a></li>
                            </ul>
                        </div>
                        <div className="col-12 col-sm-12 col-md-3 col-lg-3 footer-links">
                        	<h4 className="h4">Customer Services</h4>
                            <ul>
                            	<li><a href="#">Request Personal Data</a></li>
                                <li><a href="#">FAQ's</a></li>
                                <li><a href="#">Contact Us</a></li>
                                <li><a href="#">Orders and Returns</a></li>
                                <li><a href="#">Support Center</a></li>
                            </ul>
                        </div>
                        <div className="col-12 col-sm-12 col-md-3 col-lg-3">
                        	<div className="display-table">
                                <div className="display-table-cell footer-newsletter">
                                    <form action="#" method="post">
                                    	<label className="h4">Newsletter</label>
                                        <p>Be the first to hear about new trending and offers and see how you've helped.</p>
                                        <div className="input-group">
                                            <input type="email" className="input-group__field newsletter__input" name="EMAIL" value="" placeholder="Email address" required="" />
                                            <span className="input-group__btn">
                                                <button type="submit" className="btn newsletter__submit" name="commit" id="Subscribe"><span className="newsletter__submit-text--large">Subscribe</span></button>
                                            </span>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-3 col-lg-3 contact-box">
                        	<h4 className="h4">About Us</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id odio lectus. Nullam dictum rutrum enim, at varius purus gravida.</p>
                            <ul className="addressFooter">
                                <li className="email"><i className="icon anm anm-envelope-l"></i><p>sales@yousite.com</p></li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/*End Footer Links*/}
                <hr />
                <div className="footer-bottom">
                	<div className="row">
                    	{/*Footer Copyright*/}
	                	<div className="col-12 col-sm-12 col-md-6 col-lg-6 order-1 order-md-0 order-lg-0 order-sm-1 copyright text-sm-center text-md-left text-lg-left"><span></span> <a href="templateshub.net">StyleX</a></div>
                        {/*End Footer Copyright*/}
                        {/*Footer Payment Icon*/}
                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 order-0 order-md-1 order-lg-1 order-sm-0 payment-icons text-right text-md-center">
                   	    	<img src="assets/images/safepayment.png" alt="Payment" />
                        </div>
                        {/*End Footer Payment Icon*/}
                    </div>
                </div>
            </div>
        </div>
    </footer>
    );
}

export default Footer;