import React from "react";

function ProductDetails(props) {
  const paragraphs = props.productDetails.split('\n\n');
  return (
    <div id="tab1" className="tab-content" style={{display: "block"}}>
      <div className="product-description rte" style={{whiteSpace: "pre-line"}}>
        {props.productDetails}
      </div>
    </div>
  );
}

export default ProductDetails;
