import React from "react";
import { Link } from "react-router-dom";

function Item (props) {
    return (
        <div className="col-12 col-sm-6 col-md-3 col-lg-3 text-center">
            <p>
                <Link to={`/ProductPage/${props.productId}`}>   
                    <img className="blur-up lazyload" data-src={`/assets/images/custom/product/images/${props.image}`} src={`/assets/images/custom/product/images/${props.image}`} alt="feature-row__image" />
                </Link> 
            </p>
            <h5 className="h4"><Link to={`/ProductPage/${props.productId}`}>{props.title}</Link></h5>
            <Link to={`/ProductPage/${props.productId}`} className="btn no-border">Shop The Edit</Link>
        </div>
    );
}

export default Item;