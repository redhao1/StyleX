import React, { useState, useEffect } from "react";
import axios from "axios";
import ColorVariant from "./QuickViewPopup/ColorVariant";
import SizeVariant from "./QuickViewPopup/SizeVariant";

function QuickViewPopup (props) {
    let [quantity, setQuantity] = useState(1);

    function handleQuantityIncrease () {
        setQuantity(++quantity);
    }

    function handleQuantityDecrease () {
        if (quantity > 0)
        setQuantity(--quantity);
    }

    const [product, setProduct] = useState({
        id: "",
        title: "",
        about: "",
        variants: [{
            color: "",
            colorImage: "",
            info: [{
                size: "",
                price: "",
                stock: "",
                sku: "",
            }],
            images: [""],
        }]
    });
    const [activeVariant, setActiveVariant] = useState(null);

    useEffect(() => {
        async function loadProduct() {
            const response = await axios.get("/Product/getProductById", { params: { id: props.id } });
            setProduct(response.data);
        }

        loadProduct();
    }, [props.id]);

    useEffect(() => {
        if (product.variants && product.variants.length > 0) {
            setActiveVariant({
                id: 0,
                price: product.variants[0].info[0].price,
                size: product.variants[0].info[0].size,
                color: product.variants[0].color,
                sku: product.variants[0].info[0].sku,
                stock: product.variants[0].info[0].stock,
                image: product.variants[0].images[0],
            });
        }
    }, [product]);

    if (!activeVariant || product.length === 0) {
        return null;
    }

    function handleActiveVariant(index) {
        setActiveVariant({
            id: index,
            price: product.variants[index].info[0].price,
            size: product.variants[index].info[0].size,
            color: product.variants[index].color,
            sku: product.variants[index].info[0].sku,
            stock: product.variants[index].info[0].stock,
            image: product.variants[index].images[0],
        });
    }
    
    function handleSizeVariant(index) {
        setActiveVariant((prevData) => ({
            ...prevData,
            price: product.variants[activeVariant.id].info[index].price,
            size: product.variants[activeVariant.id].info[index].size,
            sku: product.variants[activeVariant.id].info[index].sku,
            stock: product.variants[activeVariant.id].info[index].stock,
        }));
    }

    return (
        <div className="modal fade quick-view-popup show" id="content_quickview">
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
                                <img src={`/assets/images/custom/product/images/${activeVariant.image}`} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                            <div className="product-single__meta">
                                <h2 className="product-single__title">{product.title}</h2>
                                <div className="prInfoRow">
                                    <div className="product-stock">
                                        {activeVariant.stock > 0 ? <span className="instock ">In Stock</span> : <span className="outstock" style={{color: "red"}}>Unavailable</span>}
                                    </div>
                                    <div className="product-sku">SKU: <span className="variant-sku">{activeVariant.sku}</span></div>
                                </div>
                                <p className="product-single__price product-single__price-product-template">
                                    <span className="visually-hidden">Regular price</span>
                                    {/* <s id="ComparePrice-product-template"><span className="money">$600.00</span></s> */}
                                    <span className="product-price__price product-price__price-product-template product-price__sale product-price__sale--single">
                                        <span id="ProductPrice-product-template"><span className="money">${activeVariant.price}.00</span></span>
                                    </span>
                                </p>
                                <div className="product-single__description rte">
                                    {product.about}
                                </div>
                                
                            <form method="post" action="http://annimexweb.com/cart/add" id="product_form_10508262282" acceptCharset="UTF-8" className="product-form product-form-product-template hidedropdown" encType="multipart/form-data">
                                <div className="swatch clearfix swatch-0 option1" data-option-index="0">
                                    <div className="product-form__item">
                                      <label className="header">Color: <span className="slVariant">{activeVariant.color}</span></label>
                                        { product.variants && product.variants.map((row, index) => (
                                            <ColorVariant key={index} id={index} color={row.color} image={row.colorImage} onVariantClick={handleActiveVariant} />
                                        ))}
                                    </div>
                                </div>
                                <div className="swatch clearfix swatch-1 option2" data-option-index="1">
                                    <div className="product-form__item">
                                      <label className="header">Size: <span className="slVariant">{activeVariant.size}</span></label>
                                        { product.variants[activeVariant.id] && product.variants[activeVariant.id].info.map((row, index) => (
                                            <SizeVariant key={row.sku} id={index} size={row.size} onSizeVariantClick={handleSizeVariant} />
                                        ))}
                                    </div>
                                </div>
                                {/* Product Action */}
                                <div className="product-action clearfix">
                                    <div className="product-form__item--quantity">
                                        <div className="wrapQtyBtn">
                                            <div className="qtyField">
                                                <a className="qtyBtn minus" href="javascript:void(0);" onClick={handleQuantityDecrease}><i className="fa anm anm-minus-r" aria-hidden="true"></i></a>
                                                <input type="text" id="Quantity" name="quantity" value={quantity} className="product-form__input qty" />
                                                <a className="qtyBtn plus" href="javascript:void(0);" onClick={handleQuantityIncrease}><i className="fa anm anm-plus-r" aria-hidden="true"></i></a>
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