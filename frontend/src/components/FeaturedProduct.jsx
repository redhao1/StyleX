import React from "react";

function FeaturedProduct () {

    function handleClick () {
        window.location.href = 'cart.html';
    };

    return (
        <div className="product-rows section">
        	<div className="container">
            	<div className="row">
                	<div className="col-12 col-sm-12 col-md-12 col-lg-12">
        				<div className="section-header text-center">
                            <h2 className="h2">Featured collection</h2>
                            <p>Our most popular products based on sales</p>
                        </div>
            		</div>
                </div>
                <div className="grid-products">
	                <div className="row">
                        <div className="col-6 col-sm-6 col-md-4 col-lg-4 item grid-view-item style2">
                        	<div className="grid-view_image">
                                {/* start product image */}
                                <a href="product-accordion.html" className="grid-view-item__link">
                                    {/* image */}
                                    <img className="grid-view-item__image primary blur-up lazyload" data-src="assets/images/product-images/product-image1.jpg" src="assets/images/product-images/product-image1.jpg" alt="image" title="product" />
                                    {/* End image */}
                                    {/* Hover image */}
                                    <img className="grid-view-item__image hover blur-up lazyload" data-src="assets/images/product-images/product-image1-1.jpg" src="assets/images/product-images/product-image1-1.jpg" alt="image" title="product" />
                                    {/* End hover image */}
                                    {/* product label */}
                                    <div className="product-labels rectangular"><span className="lbl on-sale">-16%</span> <span className="lbl pr-label1">new</span></div>
                                    {/* End product label */}
                                </a>
                                {/* end product image */}
                                {/*start product details */}
                                <div className="product-details hoverDetails text-center mobile">
                                    {/* product name */}
                                    <div className="product-name">
                                        <a href="product-accordion.html">Edna Dress</a>
                                    </div>
                                    {/* End product name */}
                                    {/* product price */}
                                    <div className="product-price">
                                        <span className="old-price">$500.00</span>
                                        <span className="price">$600.00</span>
                                    </div>
                                    {/* End product price */}
                                    
                                    {/* product button */}
                                    <div className="button-set">
                                        <a href="javascript:void(0)" title="Quick View" className="quick-view-popup quick-view" data-toggle="modal" data-target="#content_quickview">
                                            <i className="icon anm anm-search-plus-r"></i>
                                        </a>
                                        {/* Start product button */}
                                        <form className="variants add" action="#" onClick={handleClick} method="post">
                                            <button className="btn cartIcon btn-addto-cart" type="button" tabIndex="0"><i className="icon anm anm-bag-l"></i></button>
                                        </form>
                                        <div className="wishlist-btn">
                                            <a className="wishlist add-to-wishlist" href="wishlist.html">
                                                <i className="icon anm anm-heart-l"></i>
                                            </a>
                                        </div>
                                        <div className="compare-btn">
                                            <a className="compare add-to-compare" href="compare.html" title="Add to Compare">
                                                <i className="icon anm anm-random-r"></i>
                                            </a>
                                        </div>
                                    </div>
                                    {/* end product button */}
                                </div>
                                {/* Variant */}
                                <ul className="swatches text-center">
                                    <li className="swatch medium rounded"><img src="assets/images/product-images/variant1.jpg" alt="image" /></li>
                                    <li className="swatch medium rounded"><img src="assets/images/product-images/variant2.jpg" alt="image" /></li>
                                    <li className="swatch medium rounded"><img src="assets/images/product-images/variant3.jpg" alt="image" /></li>
                                    <li className="swatch medium rounded"><img src="assets/images/product-images/variant4.jpg" alt="image" /></li>
                                    <li className="swatch medium rounded"><img src="assets/images/product-images/variant5.jpg" alt="image" /></li>
                                    <li className="swatch medium rounded"><img src="assets/images/product-images/variant6.jpg" alt="image" /></li>
                                </ul>
                                {/* End Variant */}
                                {/* End product details */}
                            </div>
                        </div>
                        <div className="col-6 col-sm-6 col-md-4 col-lg-4 item grid-view-item style2">
                        	<div className="grid-view_image">
                                {/* start product image */}
                                <a href="product-accordion.html" className="grid-view-item__link">
                                    {/* image */}
                                    <img className="grid-view-item__image primary blur-up lazyload" data-src="assets/images/product-images/product-image2.jpg" src="assets/images/product-images/product-image2.jpg" alt="image" title="product" />
                                    {/* End image */}
                                    {/* Hover image */}
                                    <img className="grid-view-item__image hover blur-up lazyload" data-src="assets/images/product-images/product-image2-1.jpg" src="assets/images/product-images/product-image2-1.jpg" alt="image" title="product" />
                                    {/* End hover image */}
                                    {/* product label */}
                                    <div className="product-labels rectangular"><span className="lbl on-sale">-16%</span> <span className="lbl pr-label1">new</span></div>
                                    {/* End product label */}
                                </a>
                                {/* end product image */}
                                {/*start product details */}
                                <div className="product-details hoverDetails text-center mobile">
                                    {/* product name */}
                                    <div className="product-name">
                                        <a href="product-accordion.html">Elastic Waist Dress</a>
                                    </div>
                                    {/* End product name */}
                                    {/* product price */}
                                    <div className="product-price">
                                        <span className="price">$748.00</span>
                                    </div>
                                    {/* product button */}
                                    <div className="button-set">
                                        <a href="javascript:void(0)" title="Quick View" className="quick-view-popup quick-view" data-toggle="modal" data-target="#content_quickview">
                                            <i className="icon anm anm-search-plus-r"></i>
                                        </a>
                                        {/* Start product button */}
                                        <form className="variants add" action="#" onClick={handleClick} method="post">
                                            <button className="btn cartIcon btn-addto-cart" type="button" tabIndex="0"><i className="icon anm anm-bag-l"></i></button>
                                        </form>
                                        <div className="wishlist-btn">
                                            <a className="wishlist add-to-wishlist" href="wishlist.html">
                                                <i className="icon anm anm-heart-l"></i>
                                            </a>
                                        </div>
                                        <div className="compare-btn">
                                            <a className="compare add-to-compare" href="compare.html" title="Add to Compare">
                                                <i className="icon anm anm-random-r"></i>
                                            </a>
                                        </div>
                                    </div>
                                    {/* end product button */}
                                </div>
                                {/* Variant */}
                                <ul className="swatches text-center">
                                    <li className="swatch medium rounded"><img src="assets/images/product-images/variant2-1.jpg" alt="image" /></li>
                                    <li className="swatch medium rounded"><img src="assets/images/product-images/variant2-2.jpg" alt="image" /></li>
                                    <li className="swatch medium rounded"><img src="assets/images/product-images/variant2-3.jpg" alt="image" /></li>
                                    <li className="swatch medium rounded"><img src="assets/images/product-images/variant2-4.jpg" alt="image" /></li>
                                </ul>
                                {/* End Variant */}
                                {/* End product details */}
                            </div>
                        </div>
                        <div className="col-6 col-sm-6 col-md-4 col-lg-4 item grid-view-item style2">
                        	<div className="grid-view_image">
                                {/* start product image */}
                                <a href="product-accordion.html" className="grid-view-item__link">
                                    {/* image */}
                                    <img className="grid-view-item__image primary blur-up lazyload" data-src="assets/images/product-images/product-image3.jpg" src="assets/images/product-images/product-image3.jpg" alt="image" title="product" />
                                    {/* End image */}
                                    {/* Hover image */}
                                    <img className="grid-view-item__image hover blur-up lazyload" data-src="assets/images/product-images/product-image3-1.jpg" src="assets/images/product-images/product-image3-1.jpg" alt="image" title="product" />
                                    {/* End hover image */}
                                    {/* product label */}
                                    <div className="product-labels rectangular"><span className="lbl on-sale">-16%</span> <span className="lbl pr-label1">new</span></div>
                                    {/* End product label */}
                                </a>
                                {/* end product image */}
                                {/*start product details */}
                                <div className="product-details hoverDetails text-center mobile">
                                    {/* product name */}
                                    <div className="product-name">
                                        <a href="product-accordion.html">3/4 Sleeve Kimono Dress</a>
                                    </div>
                                    {/* End product name */}
                                    {/* product price */}
                                    <div className="product-price">
                                        <span className="price">$550.00</span>
                                    </div>
                                    {/* product button */}
                                    <div className="button-set">
                                        <a href="javascript:void(0)" title="Quick View" className="quick-view-popup quick-view" data-toggle="modal" data-target="#content_quickview">
                                            <i className="icon anm anm-search-plus-r"></i>
                                        </a>
                                        {/* Start product button */}
                                        <form className="variants add" action="#" onClick={handleClick} method="post">
                                            <button className="btn cartIcon btn-addto-cart" type="button" tabIndex="0"><i className="icon anm anm-bag-l"></i></button>
                                        </form>
                                        <div className="wishlist-btn">
                                            <a className="wishlist add-to-wishlist" href="wishlist.html">
                                                <i className="icon anm anm-heart-l"></i>
                                            </a>
                                        </div>
                                        <div className="compare-btn">
                                            <a className="compare add-to-compare" href="compare.html" title="Add to Compare">
                                                <i className="icon anm anm-random-r"></i>
                                            </a>
                                        </div>
                                    </div>
                                    {/* end product button */}
                                </div>
                                {/* Variant */}
                                <ul className="swatches text-center">
                                    <li className="swatch medium rounded"><img src="assets/images/product-images/variant3-1.jpg" alt="image" /></li>
                                    <li className="swatch medium rounded"><img src="assets/images/product-images/variant3-2.jpg" alt="image" /></li>
                                    <li className="swatch medium rounded"><img src="assets/images/product-images/variant3-3.jpg" alt="image" /></li>
                                    <li className="swatch medium rounded"><img src="assets/images/product-images/variant3-4.jpg" alt="image" /></li>
                                </ul>
                                {/* End Variant */}
                                {/* End product details */}
                            </div>
                        </div>
                        <div className="col-6 col-sm-6 col-md-4 col-lg-4 item grid-view-item style2">
                        	<div className="grid-view_image">
                                {/* start product image */}
                                <a href="product-accordion.html" className="grid-view-item__link">
                                    {/* image */}
                                    <img className="grid-view-item__image primary blur-up lazyload" data-src="assets/images/product-images/product-image4.jpg" src="assets/images/product-images/product-image4.jpg" alt="image" title="product" />
                                    {/* End image */}
                                    {/* Hover image */}
                                    <img className="grid-view-item__image hover blur-up lazyload" data-src="assets/images/product-images/product-image4-1.jpg" src="assets/images/product-images/product-image4-1.jpg" alt="image" title="product" />
                                    {/* End hover image */}
                                    {/* product label */}
                                    <div className="product-labels"><span className="lbl on-sale">Sale</span></div>
                                    {/* End product label */}
                                </a>
                                {/* end product image */}
                                {/*start product details */}
                                <div className="product-details hoverDetails text-center mobile">
                                    {/* product name */}
                                    <div className="product-name">
                                        <a href="product-accordion.html">Cape Dress</a>
                                    </div>
                                    {/* End product name */}
                                    {/* product price */}
                                    <div className="product-price">
                                        <span className="old-price">$900.00</span>
                                        <span className="price">$788.00</span>
                                    </div>
                                    {/* product button */}
                                    <div className="button-set">
                                        <a href="javascript:void(0)" title="Quick View" className="quick-view-popup quick-view" data-toggle="modal" data-target="#content_quickview">
                                            <i className="icon anm anm-search-plus-r"></i>
                                        </a>
                                        {/* Start product button */}
                                        <form className="variants add" action="#" onClick={handleClick} method="post">
                                            <button className="btn cartIcon btn-addto-cart" type="button" tabIndex="0"><i className="icon anm anm-bag-l"></i></button>
                                        </form>
                                        <div className="wishlist-btn">
                                            <a className="wishlist add-to-wishlist" href="wishlist.html">
                                                <i className="icon anm anm-heart-l"></i>
                                            </a>
                                        </div>
                                        <div className="compare-btn">
                                            <a className="compare add-to-compare" href="compare.html" title="Add to Compare">
                                                <i className="icon anm anm-random-r"></i>
                                            </a>
                                        </div>
                                    </div>
                                    {/* end product button */}
                                </div>
                                {/* Variant */}
                                <ul className="swatches text-center">
                                    <li className="swatch medium rounded"><img src="assets/images/product-images/variant4-1.jpg" alt="image" /></li>
                                    <li className="swatch medium rounded"><img src="assets/images/product-images/variant4-2.jpg" alt="image" /></li>
                                    <li className="swatch medium rounded"><img src="assets/images/product-images/variant4-3.jpg" alt="image" /></li>
                                    <li className="swatch medium rounded"><img src="assets/images/product-images/variant4-4.jpg" alt="image" /></li>
                                </ul>
                                {/* End Variant */}
                                {/* End product details */}
                            </div>
                        </div>
                        <div className="col-6 col-sm-6 col-md-4 col-lg-4 item grid-view-item style2">
                        	<div className="grid-view_image">
                                {/* start product image */}
                                <a href="product-accordion.html" className="grid-view-item__link">
                                    {/* image */}
                                    <img className="grid-view-item__image primary blur-up lazyload" data-src="assets/images/product-images/product-image5.jpg" src="assets/images/product-images/product-image5.jpg" alt="image" title="product" />
                                    {/* End image */}
                                    {/* Hover image */}
                                    <img className="grid-view-item__image hover blur-up lazyload" data-src="assets/images/product-images/product-image5-1.jpg" src="assets/images/product-images/product-image5-1.jpg" alt="image" title="product" />
                                    {/* End hover image */}
                                    {/* product label */}
                                    <div className="product-labels"><span className="lbl on-sale">Sale</span></div>
                                    {/* End product label */}
                                </a>
                                {/* end product image */}
                                {/*start product details */}
                                <div className="product-details hoverDetails text-center mobile">
                                    {/* product name */}
                                    <div className="product-name">
                                        <a href="product-accordion.html">Paper Dress</a>
                                    </div>
                                    {/* End product name */}
                                    {/* product price */}
                                    <div className="product-price">
                                        <span className="old-price">$900.00</span>
                                        <span className="price">$788.00</span>
                                    </div>
                                    {/* product button */}
                                    <div className="button-set">
                                        <a href="javascript:void(0)" title="Quick View" className="quick-view-popup quick-view" data-toggle="modal" data-target="#content_quickview">
                                            <i className="icon anm anm-search-plus-r"></i>
                                        </a>
                                        {/* Start product button */}
                                        <form className="variants add" action="#" onClick={handleClick} method="post">
                                            <button className="btn cartIcon btn-addto-cart" type="button" tabIndex="0"><i className="icon anm anm-bag-l"></i></button>
                                        </form>
                                        <div className="wishlist-btn">
                                            <a className="wishlist add-to-wishlist" href="wishlist.html">
                                                <i className="icon anm anm-heart-l"></i>
                                            </a>
                                        </div>
                                        <div className="compare-btn">
                                            <a className="compare add-to-compare" href="compare.html" title="Add to Compare">
                                                <i className="icon anm anm-random-r"></i>
                                            </a>
                                        </div>
                                    </div>
                                    {/* end product button */}
                                </div>
                                {/* Variant */}
                                <ul className="swatches text-center">
                                    <li className="swatch medium rounded"><img src="assets/images/product-images/variant3-1.jpg" alt="image" /></li>
                                    <li className="swatch medium rounded"><img src="assets/images/product-images/variant3-2.jpg" alt="image" /></li>
                                    <li className="swatch medium rounded"><img src="assets/images/product-images/variant3-3.jpg" alt="image" /></li>
                                    <li className="swatch medium rounded"><img src="assets/images/product-images/variant3-4.jpg" alt="image" /></li>
                                </ul>
                                                {/* End Variant */}
                                {/* End product details */}
                            </div>
                        </div>
                        <div className="col-6 col-sm-6 col-md-4 col-lg-4 item grid-view-item style2">
                        	<div className="grid-view_image">
                                {/* start product image */}
                                <a href="product-accordion.html" className="grid-view-item__link">
                                    {/* image */}
                                    <img className="grid-view-item__image primary blur-up lazyload" data-src="assets/images/product-images/product-image16.jpg" src="assets/images/product-images/product-image16.jpg" alt="image" title="product" />
                                    {/* End image */}
                                    {/* Hover image */}
                                    <img className="grid-view-item__image hover blur-up lazyload" data-src="assets/images/product-images/product-image16-1.jpg" src="assets/images/product-images/product-image16-1.jpg" alt="image" title="product" />
                                    {/* End hover image */}
                                </a>
                                {/* end product image */}
                                {/*start product details */}
                                <div className="product-details hoverDetails text-center mobile">
                                    {/* product name */}
                                    <div className="product-name">
                                        <a href="product-accordion.html">Buttercup Dress</a>
                                    </div>
                                    {/* End product name */}
                                    {/* product price */}
                                    <div className="product-price">
                                        <span className="price">$420.00</span>
                                    </div>
                                    {/* product button */}
                                    <div className="button-set">
                                        <a href="javascript:void(0)" title="Quick View" className="quick-view-popup quick-view" data-toggle="modal" data-target="#content_quickview">
                                            <i className="icon anm anm-search-plus-r"></i>
                                        </a>
                                        {/* Start product button */}
                                        <form className="variants add" action="#" onClick={handleClick} method="post">
                                            <button className="btn cartIcon btn-addto-cart" type="button" tabIndex="0"><i className="icon anm anm-bag-l"></i></button>
                                        </form>
                                        <div className="wishlist-btn">
                                            <a className="wishlist add-to-wishlist" href="wishlist.html">
                                                <i className="icon anm anm-heart-l"></i>
                                            </a>
                                        </div>
                                        <div className="compare-btn">
                                            <a className="compare add-to-compare" href="compare.html" title="Add to Compare">
                                                <i className="icon anm anm-random-r"></i>
                                            </a>
                                        </div>
                                    </div>
                                    {/* end product button */}
                                </div>
                                {/* End product details */}
                            </div>
                        </div>
                	</div>
                </div>
           </div>
        </div>
    );
}

export default FeaturedProduct;