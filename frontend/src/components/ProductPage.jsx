import React, { useEffect, useState } from "react";
import Breadcrumb from "./HeaderFooter/Breadcrumb";
import ProductFeature from "./ProductPage/ProductFeature";
import ProductTabs from "./ProductPage/ProductTabs";
import RelatedProducts from "./ProductPage/RelatedProducts";
import RecentProducts from "./ProductPage/RecentProducts";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";
import Slider from "react-slick";
import GallerySlider from "./ProductPage/GallerySlider";
import ColorVariant from "./ShopPage/Product/QuickViewPopup/ColorVariant";
import SizeVariant from "./ShopPage/Product/QuickViewPopup/SizeVariant";
import Swal from 'sweetalert2';

function ProductPage(props) {
    const navigate = useNavigate();
    const { id } = useParams();

    const [selectedImage, setSelectedImage] = useState();
    const [cart, setCart] = useState(true);
    const [wishlist, setWishlist] = useState(false);

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        vertical: true
    };

    function handleImageSelect (src) {
        setSelectedImage(src);
    }

    const [product, setProduct] = useState({
        id: "",
        title: "",
        about: "",
        productDetails: "",
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
    var [cartValue, setCartValue] = useState(1);

    useEffect(() => {
        async function loadProduct() {
            const response = await axios.get("/Product/getProductById", { params: { id: id } });
            setProduct(response.data);
        }

        loadProduct();
    }, [id]);

    useEffect(() => {
        async function loadActiveVariant() {
            if (product.variants && product.variants.length > 0) {
                setActiveVariant({
                    id: 0,
                    price: product.variants[0].info[0].price,
                    size: product.variants[0].info[0].size,
                    color: product.variants[0].color,
                    sku: product.variants[0].info[0].sku,
                    stock: product.variants[0].info[0].stock,
                    colorImage: product.variants[0].colorImage,
                    images: product.variants[0].images,
                });
            }
        }

        loadActiveVariant();
    }, [product]);

    useEffect(() => {
        if (activeVariant !== null)
        {
            setSelectedImage(activeVariant.images[0]);
        }
    }, [activeVariant]);

    useEffect(() => {
        if (props.isUser) {
            isItemInCart();
        } else {
            setCart(true);
        }
    }, [activeVariant, props.isUser]);

    async function isItemInCart() {
        try {
            const result = await axios.get("/isItemInCart", { params: { productId: id, sku: activeVariant.sku } });
            if (result.status === 200) {
                setCart(false);
            } else {
                setCart(true);
            }
        } catch (error) {
            setCart(true);
            console.error("Error checking if item is in cart:", error);
        }
    }

    async function handleActiveVariant(index) {
      setActiveVariant({
          id: index,
          price: product.variants[index].info[0].price,
          size: product.variants[index].info[0].size,
          color: product.variants[index].color,
          sku: product.variants[index].info[0].sku,
          stock: product.variants[index].info[0].stock,
          colorImage: product.variants[index].colorImage,
          images: product.variants[index].images,
        });
    }
    
    async function handleSizeVariant(index) {
        setActiveVariant((prevData) => ({
            ...prevData,
            price: product.variants[activeVariant.id].info[index].price,
            size: product.variants[activeVariant.id].info[index].size,
            sku: product.variants[activeVariant.id].info[index].sku,
            stock: product.variants[activeVariant.id].info[index].stock,
        }));
    }

    async function addToCart() {
        if (props.isUser) {
            try {
                const result = await axios.post("/addToCart", {productId: id, sku: activeVariant.sku, quantity: cartValue});
                if (result.status === 200) {
                    setCart(false);
                    Swal.fire({
                        icon: 'success',
                        title: 'Item Added to Cart!',
                        text: `${product.title} has been added to your cart.`,
                        showConfirmButton: false,
                        timer: 2000,
                    });
                } else {
                    Swal.fire({
                        icon: 'warning',
                        title: 'Item Already in Cart',
                        text: `${product.title} is already in your cart.`,
                        showConfirmButton: false,
                        timer: 2000,
                      });
                }
            } catch {
                console.log("Error adding item to cart.")
            }
        } else {
            navigate("/Login");
        } 
    }

    async function addToWishlist() {
        if (props.isUser) {
            try {
                const result = await axios.post("/addToWishlist", {productId: id, sku: activeVariant.sku});
                if (result.status === 200) {
                    setWishlist(true);
                    Swal.fire({
                        icon: 'success',
                        title: 'Item Added to Wishlist!',
                        text: `${product.title} has been added to your wishlist.`,
                        showConfirmButton: false,
                        timer: 2000,
                    });
                } else {
                    Swal.fire({
                        icon: 'warning',
                        title: 'Item Already in Wishlist',
                        text: `${product.title} is already in your wishlist.`,
                        showConfirmButton: false,
                        timer: 2000,
                      });
                }
            } catch {
                console.log("Error adding item to wishlist.")
            }
        } else {
            navigate("/Login");
        }    
    }

    function incrementCartValue() {
        setCartValue(++cartValue);
    }

    function decrementCartValue() {
        if (cartValue > 1) {
            setCartValue(--cartValue);
        }
    }

    if (activeVariant == null) {
        return null;
    }

  return (
    <div id="page-content" style={{paddingTop: "0px"}}>
      <div id="MainContent" className="main-content" role="main">
        <Breadcrumb></Breadcrumb>
        <div id="ProductSection-product-template" className="product-template__container prstyle1 container">
          
        <div className="product-single">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                <div className="product-details-img">
                                    <div className="product-thumb">
                                        <div id="gallery" className="product-dec-slider-2 product-tab-left">
                                        <Slider {...settings}>
                                          {activeVariant.images.map((row) => (
                                            <GallerySlider image={row} handleImageSelect={handleImageSelect}></GallerySlider>
                                          ))}
                                        </Slider>
                                        </div>
                                    </div>
                                    <div className="zoompro-wrap product-zoom-right pl-20">
                                        <div className="zoompro-span">
                                            <img className="blur-up lazyload zoompro" data-zoom-image={`/assets/images/custom/product/images/${selectedImage}`} alt="" src={`/assets/images/custom/product/images/${selectedImage}`} />
                                        </div>
                                        <div className="product-labels"><span className="lbl on-sale">Sale</span><span className="lbl pr-label1">new</span></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                    <div className="product-single__meta">
                                        <h1 className="product-single__title">{product.title}</h1>
                                        <div className="product-nav clearfix">
                                            <a onClick={() => navigate(-1)} className="next" title="Next"><i className="fa fa-angle-right" aria-hidden="true"></i></a>
                                        </div>
                                        <div className="prInfoRow">
                                            <div className="product-stock"> <span className="instock ">In Stock</span> <span className="outstock hide">Unavailable</span> </div>
                                            <div className="product-sku">SKU: <span className="variant-sku">{activeVariant.sku}</span></div>
                                            <div className="product-review"><a className="reviewLink" href="#tab2"><i className="font-13 fa fa-star"></i><i className="font-13 fa fa-star"></i><i className="font-13 fa fa-star"></i><i className="font-13 fa fa-star-o"></i><i className="font-13 fa fa-star-o"></i><span className="spr-badge-caption">6 reviews</span></a></div>
                                        </div>
                                        <p className="product-single__price product-single__price-product-template">
                                            <span className="product-price__price product-price__price-product-template product-price__sale product-price__sale--single">
                                                <span id="ProductPrice-product-template"><span className="money">${activeVariant.price}</span></span>
                                            </span>
                                        </p>
                                        </div>
                                    <div className="product-single__description rte">
                                        <p>{product.about}</p>
                                    </div>
                                    <div id="quantity_message">Hurry! Only  <span className="items">{activeVariant.stock}</span>  left in stock.</div>
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
                                                        <a className="qtyBtn minus" onClick={decrementCartValue}><i className="fa anm anm-minus-r" aria-hidden="true"></i></a>
                                                        <input type="text" id="Quantity" name="quantity" value={cartValue} className="product-form__input qty" />
                                                        <a className="qtyBtn plus" onClick={incrementCartValue}><i className="fa anm anm-plus-r" aria-hidden="true"></i></a>
                                                    </div>
                                                </div>
                                            </div>                                
                                            <div className="product-form__item--submit">
                                                <button type="button" name="add" className="btn product-form__cart-submit" onClick={addToCart} disabled={!cart} style={!cart ? {backgroundColor: "white", color: "pink", borderColor: "pink"} : null}>
                                                    {cart ? <span>Add to cart</span> : <span>Already in cart</span>}
                                                </button>
                                            </div>
                                            {props.sub ?
                                                <div className="shopify-payment-button" data-shopify="payment-button">
                                                    <Link to={`/RentCheckout/${id}/${activeVariant.sku}`} type="button" className="shopify-payment-button__button shopify-payment-button__button--unbranded">Rent</Link>
                                                </div>
                                            : null}
                                            
                                        </div>
                                        {/* End Product Action */}
                                    </form>
                                    <div className="display-table shareRow">
                                            <div className="display-table-cell medium-up--one-third">
                                                <div className="wishlist-btn">
                                                    <a className="wishlist add-to-wishlist" onClick={addToWishlist} title="Add to Wishlist"><i className="icon anm anm-heart-l" aria-hidden="true"></i> <span>Add to Wishlist</span></a>
                                                </div>
                                            </div>
                                            <div className="display-table-cell text-right">
                                                <div className="social-sharing">
                                                    <a target="_blank" href="#" className="btn btn--small btn--secondary btn--share share-facebook" title="Share on Facebook">
                                                        <i className="fa fa-facebook-square" aria-hidden="true"></i> <span className="share-title" aria-hidden="true">Share</span>
                                                    </a>
                                                    <a target="_blank" href="#" className="btn btn--small btn--secondary btn--share share-twitter" title="Tweet on Twitter">
                                                        <i className="fa fa-twitter" aria-hidden="true"></i> <span className="share-title" aria-hidden="true">Tweet</span>
                                                    </a>
                                                    <a href="#" title="Share on google+" className="btn btn--small btn--secondary btn--share" >
                                                        <i className="fa fa-google-plus" aria-hidden="true"></i> <span className="share-title" aria-hidden="true">Google+</span>
                                                    </a>
                                                    <a target="_blank" href="#" className="btn btn--small btn--secondary btn--share share-pinterest" title="Pin on Pinterest">
                                                        <i className="fa fa-pinterest" aria-hidden="true"></i> <span className="share-title" aria-hidden="true">Pin it</span>
                                                    </a>
                                                    <a href="#" className="btn btn--small btn--secondary btn--share share-pinterest" title="Share by Email" target="_blank">
                                                        <i className="fa fa-envelope" aria-hidden="true"></i> <span className="share-title" aria-hidden="true">Email</span>
                                                    </a>
                                                 </div>
                                            </div>
                                        </div>
                                        
                                    <p id="freeShipMsg" className="freeShipMsg" data-price="199"><i className="fa fa-truck" aria-hidden="true"></i> FREE SHIPPING ABOVE <b className="freeShip"><span className="money" data-currency-usd="$999.00" data-currency="USD">$999.00</span></b></p>
                                    <p className="shippingMsg"><i className="fa fa-clock-o" aria-hidden="true"></i> ESTIMATED DELIVERY <b id="fromDate">1 week</b>.</p>
                                    {/* <div className="userViewMsg" data-user="20" data-time="11000"><i className="fa fa-users" aria-hidden="true"></i> <strong className="uersView">14</strong> PEOPLE ARE LOOKING FOR THIS PRODUCT</div> */}
                                </div>
                        </div>
                    </div>

          <ProductFeature id={id}></ProductFeature>
          <ProductTabs id={id} productDetails={product.productDetails}></ProductTabs>
          {/* <RelatedProducts id={id}></RelatedProducts> */}
          <RecentProducts id={id}></RecentProducts>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
