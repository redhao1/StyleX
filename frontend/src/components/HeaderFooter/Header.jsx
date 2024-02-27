import React from "react";
import { Link } from "react-router-dom";

function Header(props) {
    return(
        <div className="header-wrap animated d-flex border-bottom">
    	<div className="container-fluid">        
            <div className="row align-items-center">
            	{/*Desktop Logo*/}
                <div className="logo col-md-2 col-lg-2 d-none d-lg-block">
                    <Link to="/">
                    	<img src="assets/images/custom/logo.svg" alt="Belle Multipurpose Html Template" title="Belle Multipurpose Html Template" style={{ height: '50px', width: '150px' }} />
                    </Link>
                </div>
                {/*End Desktop Logo*/}
                <div className="col-2 col-sm-3 col-md-3 col-lg-8">
                	<div className="d-block d-lg-none">
                        <button type="button" className="btn--link site-header__menu js-mobile-nav-toggle mobile-nav--open" onClick={props.toggleMobileMenu}>
                        	<i className="icon anm anm-times-l"></i>
                            <i className="anm anm-bars-r"></i>
                        </button>
                    </div>
                	{/*Desktop Menu*/}
                	<nav className="grid__item" id="AccessibleNav">{/* for mobile */}
                        <ul id="siteNav" className="site-nav medium center hidearrow">
                            <li className="lvl1 parent megamenu"><Link to="/">Home <i className="anm anm-angle-down-l"></i></Link></li>
                            <li className="lvl1 parent megamenu"><a href="#">Shop <i className="anm anm-angle-down-l"></i></a>
                            	<div className="megamenu style4">
                                    <ul className="grid grid--uniform mmWrapper">
                                    	<li className="grid__item lvl-1 col-md-3 col-lg-3"><a href="#" className="site-nav lvl-1">For Men</a>
                                            <ul className="subLinks">
                                                <li className="lvl-2"><a href="shop-left-sidebar.html" className="site-nav lvl-2">Outerwear</a></li>
                                                <li className="lvl-2"><a href="shop-right-sidebar.html" className="site-nav lvl-2">Tops</a></li>
                                                <li className="lvl-2"><a href="shop-fullwidth.html" className="site-nav lvl-2">Bottoms</a></li>
                                                <li className="lvl-2"><a href="shop-grid-3.html" className="site-nav lvl-2">Footwear <span className="lbl nm_label2">Sale</span></a></li>
                                                <li className="lvl-2"><a href="shop-grid-4.html" className="site-nav lvl-2">Accessories</a></li>
                                            </ul>
                                      	</li>
                                      	<li className="grid__item lvl-1 col-md-3 col-lg-3"><a href="#" className="site-nav lvl-1">For Women</a>
                                            <ul className="subLinks">
                                                <li className="lvl-2"><a href="shop-left-sidebar.html" className="site-nav lvl-2">Outerwear</a></li>
                                                <li className="lvl-2"><a href="shop-right-sidebar.html" className="site-nav lvl-2">Tops <span className="lbl nm_label3">Hot</span></a></li>
                                                <li className="lvl-2"><a href="shop-grid-3.html" className="site-nav lvl-2">Bottoms</a></li>
                                                <li className="lvl-2"><a href="product-swatches-style.html" className="site-nav lvl-2">Footwear</a></li>
                                                <li className="lvl-2"><a href="shop-left-sidebar.html" className="site-nav lvl-2">Accessories <span className="lbl nm_label1">New</span></a></li>
                                            </ul>
                                      	</li>
                                        <li className="grid__item lvl-1 col-md-6 col-lg-6">
                                        	<a href="#"><img src="assets/images/megamenu-bg1.jpg" alt="" title="" /></a>
                                        </li>
                                    </ul>
                              	</div>
                            </li>
                        <li className="lvl1 parent dropdown"><a href="#">New Arrivals <i className="anm anm-angle-down-l"></i></a>
                          <ul className="dropdown">
                          	<li><a href="cart-variant1.html" className="site-nav">Outerwear</a></li>
                            <li><a href="compare-variant1.html" className="site-nav">Tops</a></li>
							<li><a href="checkout.html" className="site-nav">Bottoms</a></li>
                            <li><a href="about-us.html" className="site-nav">Footwear</a></li>
                            <li><a href="contact-us.html" className="site-nav">Accessories</a></li>
                          </ul>
                        </li>
                        <li className="lvl1 parent dropdown"><a href="#">BestSellers <i className="anm anm-angle-down-l"></i></a>
                          <ul className="dropdown">
                            <li><a href="blog-left-sidebar.html" className="site-nav">Outerwear</a></li>
                            <li><a href="blog-right-sidebar.html" className="site-nav">Tops</a></li>
                            <li><a href="blog-fullwidth.html" className="site-nav">Bottoms</a></li>
                            <li><a href="blog-grid-view.html" className="site-nav">Footwear</a></li>
                            <li><a href="blog-article.html" className="site-nav">Accessories</a></li>
                          </ul>
                        </li>
                        <li className="lvl1"><a href="#"><b>Trendy!</b> <i className="anm anm-angle-down-l"></i></a></li>
                      </ul>
                    </nav>
                    {/*End Desktop Menu*/}
                </div>
                {/*Mobile Logo*/}
                <div className="col-6 col-sm-6 col-md-6 col-lg-2 d-block d-lg-none mobile-logo">
                	<div className="logo">
                        <Link to="/">
                            <img src="assets/images/custom/logo.svg" alt="Belle Multipurpose Html Template" title="Belle Multipurpose Html Template" style={{ height: '50px', width: '150px' }} />
                        </Link>
                    </div>
                </div>
                {/*Mobile Logo*/}
                <div className="col-4 col-sm-3 col-md-3 col-lg-2">
                	<div className="site-cart">
                    	<a href="#" className="site-header__cart" title="Cart">
                        	<i className="icon anm anm-bag-l"></i>
                            <span id="CartCount" className="site-header__cart-count" data-cart-render="item_count">2</span>
                        </a>
                        {/*Minicart Popup*/}
                        <div id="header-cart" className="block block-cart">
                        	<ul className="mini-products-list">
                                <li className="item">
                                	<a className="product-image" href="#">
                                    	<img src="assets/images/product-images/cape-dress-1.jpg" alt="3/4 Sleeve Kimono Dress" title="" />
                                    </a>
                                    <div className="product-details">
                                    	<a href="#" className="remove"><i className="anm anm-times-l" aria-hidden="true"></i></a>
                                        <a href="#" className="edit-i remove"><i className="anm anm-edit" aria-hidden="true"></i></a>
                                        <a className="pName" href="cart.html">Sleeve Kimono Dress</a>
                                        <div className="variant-cart">Black / XL</div>
                                        <div className="wrapQtyBtn">
                                            <div className="qtyField">
                                            	<span className="label">Qty:</span>
                                                <a className="qtyBtn minus" href="javascript:void(0);"><i className="fa anm anm-minus-r" aria-hidden="true"></i></a>
                                                <input type="text" id="Quantity" name="quantity" value="1" className="product-form__input qty" />
                                                <a className="qtyBtn plus" href="javascript:void(0);"><i className="fa anm anm-plus-r" aria-hidden="true"></i></a>
                                            </div>
                                        </div>
                                        <div className="priceRow">
                                        	<div className="product-price">
                                            	<span className="money">$59.00</span>
                                            </div>
                                         </div>
									</div>
                                </li>
                                <li className="item">
                                	<a className="product-image" href="#">
                                    	<img src="assets/images/product-images/cape-dress-2.jpg" alt="Elastic Waist Dress - Black / Small" title="" />
                                    </a>
                                    <div className="product-details">
                                    	<a href="#" className="remove"><i className="anm anm-times-l" aria-hidden="true"></i></a>
                                        <a href="#" className="edit-i remove"><i className="anm anm-edit" aria-hidden="true"></i></a>
                                        <a className="pName" href="cart.html">Elastic Waist Dress</a>
                                        <div className="variant-cart">Gray / XXL</div>
                                        <div className="wrapQtyBtn">
                                            <div className="qtyField">
                                            	<span className="label">Qty:</span>
                                                <a className="qtyBtn minus" href="javascript:void(0);"><i className="fa anm anm-minus-r" aria-hidden="true"></i></a>
                                                <input type="text" id="Quantity" name="quantity" value="1" className="product-form__input qty" />
                                                <a className="qtyBtn plus" href="javascript:void(0);"><i className="fa anm anm-plus-r" aria-hidden="true"></i></a>
                                            </div>
                                        </div>
                                       	<div className="priceRow">
                                            <div className="product-price">
                                                <span className="money">$99.00</span>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <div className="total">
                            	<div className="total-in">
                                	<span className="label">Cart Subtotal:</span><span className="product-price"><span className="money">$748.00</span></span>
                                </div>
                                 <div className="buttonSet text-center">
                                    <a href="cart.html" className="btn btn-secondary btn--small">View Cart</a>
                                    <a href="checkout.html" className="btn btn-secondary btn--small">Checkout</a>
                                </div>
                            </div>
                        </div>
                        {/*End Minicart Popup*/}
                    </div>
                    <div className="site-header__search">
                    	<button type="button" className="search-trigger"><i className="icon anm anm-search-l"></i></button>
                    </div>
                </div>
        	</div>
        </div>
    </div>
    );
}

export default Header;