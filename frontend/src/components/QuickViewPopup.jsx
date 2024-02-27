import React from "react";

function QuickViewPopup () {
    return (
        <div className="modal fade quick-view-popup" id="content_quickview">
    	<div className="modal-dialog">
        	<div className="modal-content">
            	<div className="modal-body">
                    <div id="ProductSection-product-template" className="product-template__container prstyle1">
                <div className="product-single">
                {/* Start model close */}
                <a href="javascript:void()" data-dismiss="modal" className="model-close-btn pull-right" title="close"><span className="icon icon anm anm-times-l"></span></a>
                {/* End model close */}
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                        <div className="product-details-img">
                            <div className="pl-20">
                                <img src="assets/images/product-detail-page/camelia-reversible-big1.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                            <div className="product-single__meta">
                                <h2 className="product-single__title">Product Quick View Popup</h2>
                                <div className="prInfoRow">
                                    <div className="product-stock"> <span className="instock ">In Stock</span> <span className="outstock hide">Unavailable</span> </div>
                                    <div className="product-sku">SKU: <span className="variant-sku">19115-rdxs</span></div>
                                </div>
                                <p className="product-single__price product-single__price-product-template">
                                    <span className="visually-hidden">Regular price</span>
                                    <s id="ComparePrice-product-template"><span className="money">$600.00</span></s>
                                    <span className="product-price__price product-price__price-product-template product-price__sale product-price__sale--single">
                                        <span id="ProductPrice-product-template"><span className="money">$500.00</span></span>
                                    </span>
                                </p>
                                <div className="product-single__description rte">
                                    Belle Multipurpose Bootstrap 4 Html Template that will give you and your customers a smooth shopping experience which can be used for various kinds of stores such as fashion,...
                                </div>
                                
                            <form method="post" action="http://annimexweb.com/cart/add" id="product_form_10508262282" accept-charset="UTF-8" className="product-form product-form-product-template hidedropdown" enctype="multipart/form-data">
                                <div className="swatch clearfix swatch-0 option1" data-option-index="0">
                                    <div className="product-form__item">
                                      <label className="header">Color: <span className="slVariant">Red</span></label>
                                      <div data-value="Red" className="swatch-element color red available">
                                        <input className="swatchInput" id="swatch-0-red" type="radio" name="option-0" value="Red" />
                                        <label className="swatchLbl color medium rectangle" for="swatch-0-red" style={{ backgroundImage: 'url(assets/images/product-detail-page/variant1-4.jpg)' }} title="Red"></label>
                                      </div>
                                      <div data-value="Blue" className="swatch-element color blue available">
                                        <input className="swatchInput" id="swatch-0-blue" type="radio" name="option-0" value="Blue" />
                                        <label className="swatchLbl color medium rectangle" for="swatch-0-blue" style={{ backgroundImage: 'url(assets/images/product-detail-page/variant1-4.jpg)' }} title="Blue"></label>
                                      </div>
                                      <div data-value="Green" className="swatch-element color green available">
                                        <input className="swatchInput" id="swatch-0-green" type="radio" name="option-0" value="Green" />
                                        <label className="swatchLbl color medium rectangle" for="swatch-0-green" style={{ backgroundImage: 'url(assets/images/product-detail-page/variant1-4.jpg)' }} title="Green"></label>
                                      </div>
                                      <div data-value="Gray" className="swatch-element color gray available">
                                        <input className="swatchInput" id="swatch-0-gray" type="radio" name="option-0" value="Gray" />
                                        <label className="swatchLbl color medium rectangle" for="swatch-0-gray" style={{ backgroundImage: 'url(assets/images/product-detail-page/variant1-4.jpg)' }} title="Gray"></label>
                                      </div>
                                    </div>
                                </div>
                                <div className="swatch clearfix swatch-1 option2" data-option-index="1">
                                    <div className="product-form__item">
                                      <label className="header">Size: <span className="slVariant">XS</span></label>
                                      <div data-value="XS" className="swatch-element xs available">
                                        <input className="swatchInput" id="swatch-1-xs" type="radio" name="option-1" value="XS" />
                                        <label className="swatchLbl medium rectangle" for="swatch-1-xs" title="XS">XS</label>
                                      </div>
                                      <div data-value="S" className="swatch-element s available">
                                        <input className="swatchInput" id="swatch-1-s" type="radio" name="option-1" value="S" />
                                        <label className="swatchLbl medium rectangle" for="swatch-1-s" title="S">S</label>
                                      </div>
                                      <div data-value="M" className="swatch-element m available">
                                        <input className="swatchInput" id="swatch-1-m" type="radio" name="option-1" value="M" />
                                        <label className="swatchLbl medium rectangle" for="swatch-1-m" title="M">M</label>
                                      </div>
                                      <div data-value="L" className="swatch-element l available">
                                        <input className="swatchInput" id="swatch-1-l" type="radio" name="option-1" value="L" />
                                        <label className="swatchLbl medium rectangle" for="swatch-1-l" title="L">L</label>
                                      </div>
                                    </div>
                                </div>
                                {/* Product Action */}
                                <div className="product-action clearfix">
                                    <div className="product-form__item--quantity">
                                        <div className="wrapQtyBtn">
                                            <div className="qtyField">
                                                <a className="qtyBtn minus" href="javascript:void(0);"><i className="fa anm anm-minus-r" aria-hidden="true"></i></a>
                                                <input type="text" id="Quantity" name="quantity" value="1" className="product-form__input qty" />
                                                <a className="qtyBtn plus" href="javascript:void(0);"><i className="fa anm anm-plus-r" aria-hidden="true"></i></a>
                                            </div>
                                        </div>
                                    </div>                                
                                    <div className="product-form__item--submit">
                                        <button type="button" name="add" className="btn product-form__cart-submit">
                                            <span>Add to cart</span>
                                        </button>
                                    </div>
                                </div>
                                {/* End Product Action */}
                            </form>
                            <div className="display-table shareRow">
                                    <div className="display-table-cell">
                                        <div className="wishlist-btn">
                                            <a className="wishlist add-to-wishlist" href="#" title="Add to Wishlist"><i className="icon anm anm-heart-l" aria-hidden="true"></i> <span>Add to Wishlist</span></a>
                                        </div>
                                    </div>
                                </div>
                        </div>
                </div>
            </div>
                {/*End-product-single*/}
                </div>
            </div>
        		</div>
        	</div>
        </div>
    </div>
    );
}

export default QuickViewPopup;