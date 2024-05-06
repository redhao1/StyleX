import React from "react";
import { Link } from "react-router-dom";

function Product (props) {
    return (
        <div className="col-12 item">
            <div className="product-image">
              <Link to={`/ProductPage/${props.productId}`}>
                <img
                  className="primary blur-up lazyload"
                  data-src={`/assets/images/custom/product/images/${props.image}`}
                  src={`/assets/images/custom/product/images/${props.image}`}
                  alt="image"
                  title="product"
                />
                <img
                  className="hover blur-up lazyload"
                  data-src={`/assets/images/custom/product/images/${props.image}`}
                  src={`/assets/images/custom/product/images/${props.image}`}
                  alt="image"
                  title="product"
                />
              </Link>
            </div>
            <div className="product-details text-center">
              <div className="product-name">
                <a href="#">{props.title}</a>
              </div>
            </div>
        </div>
    );
}

export default Product;