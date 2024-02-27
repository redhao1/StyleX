import React from "react";

function CollectionTabSlider() {
        
    return (
        <div className="section featured-column">
        	<div className="container">
            	<div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                        <div className="section-header text-center">
                            <h2 className="h2">Picks of the day</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                	{/*Featured Item*/}
                	 <div className="col-12 col-sm-6 col-md-4 col-lg-4 text-center">
                     	<p>
                           <a href="#">   
                              <img className="blur-up lazyload" data-src="assets/images/collection/modern-fi-1.jpg" src="assets/images/collection/modern-fi-1.jpg" alt="feature-row__image" />
                           </a> 
                        </p>
                        <h3 className="h4"><a href="#">NEW-SEASON SUITS</a></h3>
                        <div className="rte-setting"><p>Suitability game strong</p></div>
                        <a href="#" className="btn no-border">Shop The Edit</a>
                     </div>
                     {/*End Featured Item*/}
                     {/*Featured Item*/}
                     <div className="col-12 col-sm-6 col-md-4 col-lg-4 text-center">
                     	<p>
                           <a href="#">   
                              <img className="blur-up lazyload" data-src="assets/images/collection/modern-fi-2.jpg" src="assets/images/collection/modern-fi-2.jpg" alt="feature-row__image" />
                           </a> 
                        </p>
                        <h3 className="h4"><a href="#">STANDOUT SEQUINS</a></h3>
                        <div className="rte-setting"><p>Studio 2018</p></div>
                        <a href="#" className="btn no-border">Shop Now</a>
                     </div>
                     {/*End Featured Item*/}
                     {/*Featured Item*/}
                     <div className="col-12 col-sm-6 col-md-4 col-lg-4 text-center">
                     	<p>
                           <a href="#">   
                              <img className="blur-up lazyload" data-src="assets/images/collection/modern-fi-3.jpg" src="assets/images/collection/modern-fi-3.jpg" alt="feature-row__image" />
                           </a> 
                        </p>
                        <h3 className="h4"><a href="#">COLD-WEATHER ACCESSORIES</a></h3>
                        <div className="rte-setting"><p>Coats are only the beginning</p></div>
                        <a href="#" className="btn no-border">Shop The Edit</a>
                     </div>
                     {/*End Featured Item*/}
                </div>
            </div>
        </div>
    );
}

export default CollectionTabSlider;
