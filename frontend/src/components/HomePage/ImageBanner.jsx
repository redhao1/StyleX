import React from "react";
import { Link } from "react-router-dom";

function HomeSlider () {
    return(
        <div class="section imgBanners">
        	<div class="imgBnrOuter">
            	<div class="container">
                	<div class="row">
                    	<div class="col-12 col-sm-12 col-md-3 col-lg-3">
                        	<div class="img-bnr">
                            	<div class="inner center">
                                	<Link to="/ShopByCategory/66370cfc42fade568077944d">
                                   		<img data-src="/assets/images/collection/modern1.jpg" src="/assets/images/collection/modern1.jpg" alt="Cap" title="Cap" class="blur-up lazyload" />
                                        <span class="ttl">Cap</span>
                                    </Link>
                                </div>
                            </div>
                            <div class="img-bnr">
                            	<div class="inner center">
                                	<Link to="/ShopByCategory/66370ce542fade568077944c">
                                   		<img data-src="/assets/images/collection/modern2.jpg" src="/assets/images/collection/modern2.jpg" alt="Sweaters" title="Sweaters" class="blur-up lazyload" />
                                        <span class="ttl">Sweaters</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-sm-12 col-md-6 col-lg-6">
                        	<div class="inner center">
                                <Link to="/ShopByCategory/65f1684eaa9552bd1ed8cb9d">
                                    <img data-src="/assets/images/collection/modern3.jpg" src="/assets/images/collection/modern3.jpg" alt="Tops" title="Tops" class="blur-up lazyload" />
                                    <span class="ttl">Tops</span>
                                </Link>
                            </div>
                        </div>
                        <div class="col-12 col-sm-12 col-md-3 col-lg-3">
                        	<div class="inner center">
                                <Link to="/ShopByCategory/65f1bcecaa9552bd1ed8cba8">
                                    <img data-src="/assets/images/collection/modern4.jpg" src="/assets/images/collection/modern4.jpg" alt="Jeans" title="Jeans" class="blur-up lazyload" />
                                    <span class="ttl">Bottoms</span>
                                </Link>
                            </div>
                            <div class="inner center">
                                <Link to="/ShopByCategory/66370d1b42fade568077944e">
                                    <img data-src="/assets/images/collection/modern5.jpg" src="/assets/images/collection/modern5.jpg" alt="Shoes" title="Shoes" class="blur-up lazyload" />
                                    <span class="ttl">Shoes</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeSlider;