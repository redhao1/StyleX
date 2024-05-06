import React from "react";
import "../pricing.css";
import { Link } from "react-router-dom";

function Pricing() {
  return (
    <div id="page-content" style={{paddingTop: "0px"}}>
    	<div className="page section-header">
			  <div className="page-title text-center">
        	<div className="wrapper"><h1 className="page-width">Subscribe to Rent!</h1></div>
      	</div>
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-12 col-sm-8 col-md-6 col-lg-4">
              <div class="single_price_plan wow fadeInUp" data-wow-delay="0.2s" style={{visibility: "visible", animationDelay: "0.2s", animationName: "fadeInUp"}}>
                <div class="title"><span>Required</span>
                  <h3>Standard</h3>
                  {/* <p>Start a trial</p> */}
                  <div class="line"></div>
                </div>
                <div class="price">
                  <h4>$99.99</h4>
                </div>
                <div class="description">
                  <p><i class="lni lni-checkmark-circle"></i>Duration: 1 Month</p>
                  <p><i class="lni lni-checkmark-circle"></i>3 Clothes / Month</p>
                  <p><i class="lni lni-close"></i>Additional Delivery Charges</p>
                  <p><i class="lni lni-close"></i>No Brand Repetation</p>
                  <p><i class="lni lni-close"></i>No Cloth Repetation</p>
                </div>
                <div class="button"><Link to="/Subscribe/66372d4b42fade5680779460" class="btn btn-success btn-2">Subscribe</Link></div>
              </div>
            </div>
            <div class="col-12 col-sm-8 col-md-6 col-lg-4">
              <div class="single_price_plan wow fadeInUp" data-wow-delay="0.2s" style={{visibility: "visible", animationDelay: "0.2s", animationName: "fadeInUp"}}>
                <div class="side-shape"><img src="https://bootdey.com/img/popular-pricing.png" alt="" /></div>
                <div class="title"><span>Popular</span>
                  <h3>Mordern</h3>
                  {/* <p>For Small Business Team</p> */}
                  <div class="line"></div>
                </div>
                <div class="price">
                  <h4>$199.99</h4>
                </div>
                <div class="description">
                  <p><i class="lni lni-checkmark-circle"></i>Duration: 1 Month</p>
                  <p><i class="lni lni-checkmark-circle"></i>5 Clothes / Month</p>
                  <p><i class="lni lni-checkmark-circle"></i>Additional Delivery Charges</p>
                  <p><i class="lni lni-close"></i>No Cloth Repetation</p>
                </div>
                <div class="button"><Link to="/Subscribe/66372dc242fade568077946b" class="btn btn-warning">Subscribe</Link></div>
              </div>
            </div>
            <div class="col-12 col-sm-8 col-md-6 col-lg-4">
              <div class="single_price_plan wow fadeInUp" data-wow-delay="0.2s" style={{visibility: "visible", animationDelay: "0.2s", animationName: "fadeInUp"}}>
                <div class="title"><span>Best</span>
                  <h3>Premium</h3>
                  {/* <p>Unlimited Possibilities</p> */}
                  <div class="line"></div>
                </div>
                <div class="price">
                  <h4>$299.99</h4>
                </div>
                <div class="description">
                  <p><i class="lni lni-checkmark-circle"></i>Duration: 1 Month</p>
                  <p><i class="lni lni-checkmark-circle"></i>7 Clothes / Month</p>
                  <p><i class="lni lni-checkmark-circle"></i>No Additional Delivery Charges</p>
                </div>
                <div class="button"><Link to="/Subscribe/66372dcd42fade568077946c" class="btn btn-info">Subscribe</Link></div>
              </div>
            </div>
          </div>
        </div>
		  </div> 
    </div>
  );
}

export default Pricing;