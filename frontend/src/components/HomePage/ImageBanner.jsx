import React from "react";
import { useNavigate } from "react-router-dom";
function HomeSlider () {
     const navigate = useNavigate(); 
    return(
        <div class="section imgBanners">
        	<div class="imgBnrOuter">
            	<div class="container">
                	<div class="row">
                    	<div class="col-12 col-sm-12 col-md-3 col-lg-3">
                        	<div class="img-bnr" onClick={() => navigate("/caps")}>
                            	<div class="inner center">
                                	<a>
                                   		<img data-src="assets/images/collection/VersaceCap2.png" src="assets/images/collection/modern1.jpg" alt="Cap" title="Cap" class="blur-up lazyload" />
                                        <span class="ttl">Cap</span>
                                    </a>
                                </div>
                            </div>
                            <div class="img-bnr">
                            	<div class="inner center" onClick={() => navigate("/sweaters")}>
                                	<a>
                                   		<img data-src="assets/images/collection/modern2.jpg" src="assets/images/collection/modern2.jpg" alt="Sweaters" title="Sweaters" class="blur-up lazyload" />
                                        <span class="ttl">Sweaters</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-sm-12 col-md-6 col-lg-6">
                        	<div class="inner center" onClick={() => navigate("/tops")}>
                                <a>
                                    <img data-src="assets/images/collection/GucciTee.jpg" src="assets/images/collection/modern3.jpg" alt="Tops" title="Tops" class="blur-up lazyload" />
                                    <span class="ttl">Topwear</span>
                                </a>
                            </div>
                        </div>
                        <div class="col-12 col-sm-12 col-md-3 col-lg-3">
                        	<div class="inner center" onClick={() => navigate("/jeans")}>
                                <a >
                                    <img data-src="assets/images/collection/modern4.jpg" src="assets/images/collection/modern4.jpg" alt="Jeans" title="Jeans" class="blur-up lazyload" />
                                    <span class="ttl">Jeans</span>
                                </a>
                            </div>
                            <div class="inner center" onClick={() => navigate("/shoes")}>
                                <a>
                                    <img data-src="assets/images/collection/shoesLuxury.webp" src="assets/images/collection/modern5.jpg" alt="Shoes" title="Shoes" class="blur-up lazyload" />
                                    <span class="ttl">Shoes</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeSlider;