import React from "react";

function CollectionBoxSlider() {
    return(
        <div className="section custom-content-style1">
        	<div className="container">
            	<div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                        <div className="section-header text-center">
                            <h2 className="h2">Shop For</h2>
                        </div>
                    </div>
                </div>
                <div className="row align-items-center mb-4">
                    <div className="col-12 col-sm-3 col-md-3 col-lg-3">
                        <div className="custom-text text-center">
                            <h4 className="h3">
                                <a href="#">Warm layers, fall colors and trendy styles are here for fall!</a>   
                            </h4>
                            <div className="rte-setting"><p>UP TO 60% OFF </p></div>
                            <a className="btn" href="#">Shop Women's</a>
                        </div>
                    </div>
                    <div className="col-12 col-sm-3 col-md-3 col-lg-3">
                        <div className="custom-text text-center">
                            <img className="blur-up lazyload" data-src="assets/images/collection/shoes-collection1.jpg" src="assets/images/collection/shoes-collection1.jpg" alt="" title="" />
                        </div>
                    </div>
                    <div className="col-12 col-sm-3 col-md-3 col-lg-3">
                        <div className="custom-text text-center">
                            <img className="blur-up lazyload" data-src="assets/images/collection/shoes-collection2.jpg" src="assets/images/collection/shoes-collection2.jpg" alt="" title="" />
                        </div>
                    </div>
                    <div className="col-12 col-sm-3 col-md-3 col-lg-3">
                        <div className="custom-text text-center">
                            <h4 className="h3">
                                <a href="#">Stay warm and look cool in fall styles for guys!</a>   
                            </h4>
                            <div className="rte-setting"><p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, velit...</p></div>
                            <a className="btn" href="#">Shop Men's</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CollectionBoxSlider;