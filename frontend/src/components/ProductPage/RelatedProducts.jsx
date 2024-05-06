import React from "react";
import Slider from "react-slick";

function RelatedProducts() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };

  if (window.innerWidth <= 768) {
    settings.slidesToShow = 3;
  }

  return (
    <div className="related-product grid-products">
      <header className="section-header">
        <h2 className="section-header__title text-center h2">
          <span>Related Products</span>
        </h2>
        <p className="sub-heading">
          You can stop autoplay, increase/decrease aniamtion speed and number of
          grid to show and products from store admin.
        </p>
      </header>
      <div className="productPageSlider">
      <Slider {...settings}>
        <div className="col-12 item">
          {/* start product image */}
          <div className="product-image">
            {/* start product image */}
            <a href="#">
              {/* image */}
              <img
                className="primary blur-up lazyload"
                data-src="/assets/images/product-images/product-image1.jpg"
                src="/assets/images/product-images/product-image1.jpg"
                alt="image"
                title="product"
              />
              {/* End image */}
              {/* Hover image */}
              <img
                className="hover blur-up lazyload"
                data-src="/assets/images/product-images/product-image1-1.jpg"
                src="/assets/images/product-images/product-image1-1.jpg"
                alt="image"
                title="product"
              />
              {/* End hover image */}
              {/* product label */}
              <div className="product-labels rectangular">
                <span className="lbl on-sale">-16%</span>{" "}
                <span className="lbl pr-label1">new</span>
              </div>
              {/* End product label */}
            </a>
            {/* end product image */}

            {/* Start product button */}
            <form
              className="variants add"
              action="#"
              onclick="window.location.href='cart.html'"
              method="post"
            >
              <button className="btn btn-addto-cart" type="button" tabindex="0">
                Select Options
              </button>
            </form>
            <div className="button-set">
              <a
                href="#"
                title="Quick View"
                className="quick-view"
                tabindex="0"
              >
                <i className="icon anm anm-search-plus-r"></i>
              </a>
              <div className="wishlist-btn">
                <a className="wishlist add-to-wishlist" href="wishlist.html">
                  <i className="icon anm anm-heart-l"></i>
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
              <a href="#">Edna Dress</a>
            </div>
            {/* End product name */}
            {/* product price */}
            <div className="product-price">
              <span className="old-price">$500.00</span>
              <span className="price">$600.00</span>
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
              <li className="swatch medium rounded">
                <img
                  src="/assets/images/product-images/variant1.jpg"
                  alt="image"
                />
              </li>
              <li className="swatch medium rounded">
                <img
                  src="/assets/images/product-images/variant2.jpg"
                  alt="image"
                />
              </li>
              <li className="swatch medium rounded">
                <img
                  src="/assets/images/product-images/variant3.jpg"
                  alt="image"
                />
              </li>
              <li className="swatch medium rounded">
                <img
                  src="/assets/images/product-images/variant4.jpg"
                  alt="image"
                />
              </li>
              <li className="swatch medium rounded">
                <img
                  src="/assets/images/product-images/variant5.jpg"
                  alt="image"
                />
              </li>
              <li className="swatch medium rounded">
                <img
                  src="/assets/images/product-images/variant6.jpg"
                  alt="image"
                />
              </li>
            </ul>
            {/* End Variant */}
          </div>
          {/* End product details */}
        </div>
        <div className="col-12 item">
          {/* start product image */}
          <div className="product-image">
            {/* start product image */}
            <a href="#">
              {/* image */}
              <img
                className="primary blur-up lazyload"
                data-src="/assets/images/product-images/product-image2.jpg"
                src="/assets/images/product-images/product-image2.jpg"
                alt="image"
                title="product"
              />
              {/* End image */}
              {/* Hover image */}
              <img
                className="hover blur-up lazyload"
                data-src="/assets/images/product-images/product-image2-1.jpg"
                src="/assets/images/product-images/product-image2-1.jpg"
                alt="image"
                title="product"
              />
              {/* End hover image */}
            </a>
            {/* end product image */}

            {/* Start product button */}
            <form
              className="variants add"
              action="#"
              onclick="window.location.href='cart.html'"
              method="post"
            >
              <button className="btn btn-addto-cart" type="button" tabindex="0">
                Select Options
              </button>
            </form>
            <div className="button-set">
              <a
                href="#"
                title="Quick View"
                className="quick-view"
                tabindex="0"
              >
                <i className="icon anm anm-search-plus-r"></i>
              </a>
              <div className="wishlist-btn">
                <a className="wishlist add-to-wishlist" href="wishlist.html">
                  <i className="icon anm anm-heart-l"></i>
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
              <a href="#">Elastic Waist Dress</a>
            </div>
            {/* End product name */}
            {/* product price */}
            <div className="product-price">
              <span className="price">$748.00</span>
            </div>
            {/* End product price */}
            <div className="product-review">
              <i className="font-13 fa fa-star"></i>
              <i className="font-13 fa fa-star"></i>
              <i className="font-13 fa fa-star"></i>
              <i className="font-13 fa fa-star"></i>
              <i className="font-13 fa fa-star"></i>
            </div>
            {/* Variant */}
            <ul className="swatches">
              <li className="swatch medium rounded">
                <img
                  src="/assets/images/product-images/variant2-1.jpg"
                  alt="image"
                />
              </li>
              <li className="swatch medium rounded">
                <img
                  src="/assets/images/product-images/variant2-2.jpg"
                  alt="image"
                />
              </li>
              <li className="swatch medium rounded">
                <img
                  src="/assets/images/product-images/variant2-3.jpg"
                  alt="image"
                />
              </li>
              <li className="swatch medium rounded">
                <img
                  src="/assets/images/product-images/variant2-4.jpg"
                  alt="image"
                />
              </li>
            </ul>
            {/* End Variant */}
          </div>
          {/* End product details */}
        </div>
        <div className="col-12 item">
          {/* start product image */}
          <div className="product-image">
            {/* start product image */}
            <a href="#">
              {/* image */}
              <img
                className="primary blur-up lazyload"
                data-src="/assets/images/product-images/product-image3.jpg"
                src="/assets/images/product-images/product-image3.jpg"
                alt="image"
                title="product"
              />
              {/* End image */}
              {/* Hover image */}
              <img
                className="hover blur-up lazyload"
                data-src="/assets/images/product-images/product-image3-1.jpg"
                src="/assets/images/product-images/product-image3-1.jpg"
                alt="image"
                title="product"
              />
              {/* End hover image */}
              {/* product label */}
              <div className="product-labels rectangular">
                <span className="lbl pr-label2">Hot</span>
              </div>
              {/* End product label */}
            </a>
            {/* end product image */}

            {/* Start product button */}
            <form
              className="variants add"
              action="#"
              onclick="window.location.href='cart.html'"
              method="post"
            >
              <button className="btn btn-addto-cart" type="button" tabindex="0">
                Select Options
              </button>
            </form>
            <div className="button-set">
              <a
                href="#"
                title="Quick View"
                className="quick-view"
                tabindex="0"
              >
                <i className="icon anm anm-search-plus-r"></i>
              </a>
              <div className="wishlist-btn">
                <a className="wishlist add-to-wishlist" href="wishlist.html">
                  <i className="icon anm anm-heart-l"></i>
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
              <a href="#">3/4 Sleeve Kimono Dress</a>
            </div>
            {/* End product name */}
            {/* product price */}
            <div className="product-price">
              <span className="price">$550.00</span>
            </div>
            {/* End product price */}

            <div className="product-review">
              <i className="font-13 fa fa-star"></i>
              <i className="font-13 fa fa-star"></i>
              <i className="font-13 fa fa-star"></i>
              <i className="font-13 fa fa-star"></i>
              <i className="font-13 fa fa-star-o"></i>
            </div>
            {/* Variant */}
            <ul className="swatches">
              <li className="swatch medium rounded">
                <img
                  src="/assets/images/product-images/variant3-1.jpg"
                  alt="image"
                />
              </li>
              <li className="swatch medium rounded">
                <img
                  src="/assets/images/product-images/variant3-2.jpg"
                  alt="image"
                />
              </li>
              <li className="swatch medium rounded">
                <img
                  src="/assets/images/product-images/variant3-3.jpg"
                  alt="image"
                />
              </li>
              <li className="swatch medium rounded">
                <img
                  src="/assets/images/product-images/variant3-4.jpg"
                  alt="image"
                />
              </li>
            </ul>
            {/* End Variant */}
          </div>
          {/* End product details */}
        </div>
        <div className="col-12 item">
          {/* start product image */}
          <div className="product-image">
            {/* start product image */}
            <a href="#">
              {/* image */}
              <img
                className="primary blur-up lazyload"
                data-src="/assets/images/product-images/product-image4.jpg"
                src="/assets/images/product-images/product-image4.jpg"
                alt="image"
                title="product"
              />
              {/* End image */}
              {/* Hover image */}
              <img
                className="hover blur-up lazyload"
                data-src="/assets/images/product-images/product-image4-1.jpg"
                src="/assets/images/product-images/product-image4-1.jpg"
                alt="image"
                title="product"
              />
              {/* End hover image */}
              {/* product label */}
              <div className="product-labels">
                <span className="lbl on-sale">Sale</span>
              </div>
              {/* End product label */}
            </a>
            {/* end product image */}

            {/* Start product button */}
            <form
              className="variants add"
              action="#"
              onclick="window.location.href='cart.html'"
              method="post"
            >
              <button className="btn btn-addto-cart" type="button" tabindex="0">
                Select Options
              </button>
            </form>
            <div className="button-set">
              <a
                href="#"
                title="Quick View"
                className="quick-view"
                tabindex="0"
              >
                <i className="icon anm anm-search-plus-r"></i>
              </a>
              <div className="wishlist-btn">
                <a className="wishlist add-to-wishlist" href="wishlist.html">
                  <i className="icon anm anm-heart-l"></i>
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
              <a href="#">Cape Dress</a>
            </div>
            {/* End product name */}
            {/* product price */}
            <div className="product-price">
              <span className="old-price">$900.00</span>
              <span className="price">$788.00</span>
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
              <li className="swatch medium rounded">
                <img
                  src="/assets/images/product-images/variant4-1.jpg"
                  alt="image"
                />
              </li>
              <li className="swatch medium rounded">
                <img
                  src="/assets/images/product-images/variant4-2.jpg"
                  alt="image"
                />
              </li>
              <li className="swatch medium rounded">
                <img
                  src="/assets/images/product-images/variant4-3.jpg"
                  alt="image"
                />
              </li>
              <li className="swatch medium rounded">
                <img
                  src="/assets/images/product-images/variant4-4.jpg"
                  alt="image"
                />
              </li>
            </ul>
            {/* End Variant */}
          </div>
          {/* End product details */}
        </div>
        <div className="col-12 item">
          {/* start product image */}
          <div className="product-image">
            {/* start product image */}
            <a href="#">
              {/* image */}
              <img
                className="primary blur-up lazyload"
                data-src="/assets/images/product-images/product-image5.jpg"
                src="/assets/images/product-images/product-image5.jpg"
                alt="image"
                title="product"
              />
              {/* End image */}
              {/* Hover image */}
              <img
                className="hover blur-up lazyload"
                data-src="/assets/images/product-images/product-image5-1.jpg"
                src="/assets/images/product-images/product-image5-1.jpg"
                alt="image"
                title="product"
              />
              {/* End hover image */}
              {/* product label */}
              <div className="product-labels">
                <span className="lbl on-sale">Sale</span>
              </div>
              {/* End product label */}
            </a>
            {/* end product image */}

            {/* Start product button */}
            <form
              className="variants add"
              action="#"
              onclick="window.location.href='cart.html'"
              method="post"
            >
              <button className="btn btn-addto-cart" type="button" tabindex="0">
                Select Options
              </button>
            </form>
            <div className="button-set">
              <a
                href="#"
                title="Quick View"
                className="quick-view"
                tabindex="0"
              >
                <i className="icon anm anm-search-plus-r"></i>
              </a>
              <div className="wishlist-btn">
                <a className="wishlist add-to-wishlist" href="wishlist.html">
                  <i className="icon anm anm-heart-l"></i>
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
              <a href="#">Paper Dress</a>
            </div>
            {/* End product name */}
            {/* product price */}
            <div className="product-price">
              <span className="price">$550.00</span>
            </div>
            {/* End product price */}

            <div className="product-review">
              <i className="font-13 fa fa-star"></i>
              <i className="font-13 fa fa-star"></i>
              <i className="font-13 fa fa-star"></i>
              <i className="font-13 fa fa-star"></i>
              <i className="font-13 fa fa-star"></i>
            </div>
            {/* Variant */}
            <ul className="swatches">
              <li className="swatch medium rounded">
                <img
                  src="/assets/images/product-images/variant3-1.jpg"
                  alt="image"
                />
              </li>
              <li className="swatch medium rounded">
                <img
                  src="/assets/images/product-images/variant3-2.jpg"
                  alt="image"
                />
              </li>
              <li className="swatch medium rounded">
                <img
                  src="/assets/images/product-images/variant3-3.jpg"
                  alt="image"
                />
              </li>
              <li className="swatch medium rounded">
                <img
                  src="/assets/images/product-images/variant3-4.jpg"
                  alt="image"
                />
              </li>
            </ul>
            {/* End Variant */}
          </div>
          {/* End product details */}
        </div>
        <div className="col-12 item">
          {/* start product image */}
          <div className="product-image">
            {/* start product image */}
            <a href="#">
              {/* image */}
              <img
                className="primary blur-up lazyload"
                data-src="/assets/images/product-images/product-image6.jpg"
                src="/assets/images/product-images/product-image6.jpg"
                alt="image"
                title="product"
              />
              {/* End image */}
              {/* Hover image */}
              <img
                className="hover blur-up lazyload"
                data-src="/assets/images/product-images/product-image6-1.jpg"
                src="/assets/images/product-images/product-image6-1.jpg"
                alt="image"
                title="product"
              />
              {/* End hover image */}
              {/* product label */}
              <div className="product-labels rectangular">
                <span className="lbl on-sale">-16%</span>{" "}
                <span className="lbl pr-label1">new</span>
              </div>
              {/* End product label */}
            </a>
            {/* end product image */}

            {/* Start product button */}
            <form
              className="variants add"
              action="#"
              onclick="window.location.href='cart.html'"
              method="post"
            >
              <button className="btn btn-addto-cart" type="button" tabindex="0">
                Select Options
              </button>
            </form>
            <div className="button-set">
              <a
                href="#"
                title="Quick View"
                className="quick-view"
                tabindex="0"
              >
                <i className="icon anm anm-search-plus-r"></i>
              </a>
              <div className="wishlist-btn">
                <a className="wishlist add-to-wishlist" href="wishlist.html">
                  <i className="icon anm anm-heart-l"></i>
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
              <a href="#">Zipper Jacket</a>
            </div>
            {/* End product name */}
            {/* product price */}
            <div className="product-price">
              <span className="price">$788.00</span>
            </div>
            {/* End product price */}

            <div className="product-review">
              <i className="font-13 fa fa-star"></i>
              <i className="font-13 fa fa-star"></i>
              <i className="font-13 fa fa-star"></i>
              <i className="font-13 fa fa-star-o"></i>
              <i className="font-13 fa fa-star-o"></i>
            </div>
          </div>
          {/* End product details */}
        </div>
        <div className="col-12 item">
          {/* start product image */}
          <div className="product-image">
            {/* start product image */}
            <a href="#">
              {/* image */}
              <img
                className="primary blur-up lazyload"
                data-src="/assets/images/product-images/product-image7.jpg"
                src="/assets/images/product-images/product-image7.jpg"
                alt="image"
                title="product"
              />
              {/* End image */}
              {/* Hover image */}
              <img
                className="hover blur-up lazyload"
                data-src="/assets/images/product-images/product-image7-1.jpg"
                src="/assets/images/product-images/product-image7-1.jpg"
                alt="image"
                title="product"
              />
              {/* End hover image */}
            </a>
            {/* end product image */}

            {/* Start product button */}
            <form
              className="variants add"
              action="#"
              onclick="window.location.href='cart.html'"
              method="post"
            >
              <button className="btn btn-addto-cart" type="button" tabindex="0">
                Select Options
              </button>
            </form>
            <div className="button-set">
              <a
                href="#"
                title="Quick View"
                className="quick-view"
                tabindex="0"
              >
                <i className="icon anm anm-search-plus-r"></i>
              </a>
              <div className="wishlist-btn">
                <a className="wishlist add-to-wishlist" href="wishlist.html">
                  <i className="icon anm anm-heart-l"></i>
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
              <a href="#">Zipper Jacket</a>
            </div>
            {/* End product name */}
            {/* product price */}
            <div className="product-price">
              <span className="price">$748.00</span>
            </div>
            {/* End product price */}
            <div className="product-review">
              <i className="font-13 fa fa-star"></i>
              <i className="font-13 fa fa-star"></i>
              <i className="font-13 fa fa-star"></i>
              <i className="font-13 fa fa-star"></i>
              <i className="font-13 fa fa-star"></i>
            </div>
          </div>
          {/* End product details */}
        </div>
        </Slider>
      </div>
    </div>
  );
}

export default RelatedProducts;