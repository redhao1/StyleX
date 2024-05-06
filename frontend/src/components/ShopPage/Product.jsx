import React, { useEffect, useState } from "react";
import Swatches from "./Product/Swatches";
import QuickViewPopup from "./Product/QuickViewPopup";
import { Link } from "react-router-dom";

function Product(props) {
  const [image, setImage] = useState(props.variants[0].images[0]);
  const [hoverImage, setHoverImage] = useState(props.variants[0].images[1]);
  const [price, setPrice] = useState(props.variants[0].price);
  
  function handleVariants (index) {
    setImage(props.variants[index].images[0]);
    setHoverImage(props.variants[index].images[1]);
    setPrice(props.variants[index].price);
  }

  return (
    <>
    <div
      className="col-6 col-sm-6 col-md-4 col-lg-3 item"
      style={{ display: "block" }}
    >
      {/* start product image */}
      <div className="product-image">
        {/* start product image */}
        <Link to={`/ProductPage/${props.id}`}>
          <img
              className="primary blur-up lazyload"
              data-src={`/assets/images/custom/product/images/${image}`}
              src={`/assets/images/custom/product/images/${image}`}
              alt="image"
              title="product"
            />
            <img
              className="hover blur-up lazyload"
              data-src={`/assets/images/custom/product/images/${hoverImage}`}
              src={`/assets/images/custom/product/images/${hoverImage}`}
              alt="image"
              title="product"
            />
          {/* product label */}
          {/* <div className="product-labels rectangular">
            <span className="lbl on-sale">-16%</span>{" "}
            <span className="lbl pr-label1">new</span>
          </div> */}
          {/* End product label */}
        </Link>
        {/* end product image */}

        {/* countdown start */}
        <div className="saleTime desktop" data-countdown="2022/03/01"></div>
        {/* countdown end */}

        {/* Start product button */}
        <form
          className="variants add"
          action="#"
          onclick="window.location.href='cart.html'"
          method="post"
        >
          <button className="btn btn-addto-cart" type="button">
            Select Options
          </button>
        </form>
        <div className="button-set">
          <a
            href="/javascript:void(0)"
            title="Quick View"
            className="quick-view-popup quick-view"
            data-toggle="modal"
            data-target="#content_quickview"
          >
            <i className="icon anm anm-search-plus-r"></i>
          </a>
          <div className="wishlist-btn">
            <a
              className="wishlist add-to-wishlist"
              href="/#"
              title="Add to Wishlist"
            >
              <i className="icon anm anm-heart-l"></i>
            </a>
          </div>
          <div className="compare-btn">
            <a
              className="compare add-to-compare"
              href="/compare.html"
              title="Add to Compare"
            >
              <i className="icon anm anm-random-r"></i>
            </a>
          </div>
        </div>
        {/* end product button */}
      </div>
      {/* end product image */}

      {/*start product details */}
      <div className="product-details text-center">
        {/* product name */}
        <div className="product-name">
          <a href="/#">{props.title}</a>
        </div>
        {/* End product name */}
        {/* product price */}
        <div className="product-price">
          {/* <span className="old-price">$500.00</span> */}
          <span className="price">${price}</span>
        </div>
        {/* End product price */}

        <div className="product-review">
          <i className="font-13 fa fa-star"></i>
          <i className="font-13 fa fa-star"></i>
          <i className="font-13 fa fa-star"></i>
          <i className="font-13 fa fa-star-o"></i>
          <i className="font-13 fa fa-star-o"></i>
        </div>
        {/* Variant */}
        <ul className="swatches">
          {props.variants.map((variant, index) => (
            <Swatches key={variant.title} id={index} colorImage={variant.colorImage} onSwatchClick={handleVariants} ></Swatches>
          ))}
        </ul>
        {/* End Variant */}
      </div>
      {/* End product details */}
      {/* countdown start */}
      {/* <div className="timermobile">
        <div className="saleTime desktop" data-countdown="2022/03/01"></div>
      </div> */}
      {/* countdown end */}
    </div>
    <QuickViewPopup key={props.id} id={props.id}></QuickViewPopup>
    </>
  );
}

export default Product;
