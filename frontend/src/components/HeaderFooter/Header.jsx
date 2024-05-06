import React, { useRef, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import GenderList from "./Header/GenderList";
import Item from "./Header/Item";
import HeaderLink from "./Header/HeaderLink";

function Header(props) {
    const navigate = useNavigate();

    const [isCartViewOpen, setIsCartViewOpen] = useState(false);
    const cartRef = useRef(null);

    const [genders, setGenders] = useState([
        {
            id: "",
            name: "",
        }
    ]);

    const [categories, setCategories] = useState([
        {
            id: "",
            name: "",
        }
    ]);

    function toggleCartView () {
        if (props.isUser) {
            getItems();
        } else {
            navigate("/Login");
        }
    }

    useEffect(() => {
        async function checkSubscriptions () {
            try {
                const response = await axios.get("/checkSubscriptions");
                if (response.status === 200) {
                    props.setSub(true);
                }
            } catch (error) {
                props.setSub(false);
            }
        }

        if (props.isUser) {
            checkSubscriptions();
        } else {
            props.setSub(false);
        }
    }, [props.isUser]);

    useEffect(() => {
        function handleClickOutside (event) {
            if (cartRef.current && !cartRef.current.contains(event.target)) {
                setIsCartViewOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [cartRef]);

    useEffect(() => {
        async function getGenders () {
            const response = await axios.get("/Gender/getGenders");
            const data = response.data.map((gender) => ({
                id: gender._id,
                name: gender.name,
            }));
            setGenders(data);
        }

        async function getCategories () {
            const response = await axios.get("/Category/getCategories");
            if (response.data.length > 0) {
                const data = response.data.map((category) => ({
                    id: category._id,
                    name: category.name,
                }));
                setCategories(data);
            }
        }

        getGenders();
        getCategories();
    }, []);

    const [totalPrice, setTotalPrice] = useState();

    const [products, setProducts] = useState([{
        productId: "",
        sku: "",
        title: "",
        color: "",
        size: "",
        price: "",
        quantity: "",
        image: "",
    }]);

    async function getItems() {
        const result = await axios.get("/getItems");
        const data = result.data;
        setProducts(data);
        if (data.length) {
            setIsCartViewOpen(!isCartViewOpen);
        } else {
            navigate("/Cart");
        }
    }

    useEffect(() => {
        let total = 0
        products.forEach((row) => (total += (row.price * row.quantity)));
        setTotalPrice(total);
    }, [products]);

    async function deleteItem (productId, sku) {
        const result = await axios.post("/deleteItem", {productId: productId, sku: sku});
        if (result.status === 200) {
            getItems();
        }
    }

    return(
        <div className="header-wrap animated d-flex border-bottom">
    	<div className="container-fluid">        
            <div className="row align-items-center">
            	{/*Desktop Logo*/}
                <div className="logo col-md-2 col-lg-2 d-none d-lg-block">
                    <Link to="/">
                    	<img src="/assets/images/custom/logo.svg" alt="Belle Multipurpose Html Template" title="Belle Multipurpose Html Template" style={{ height: '50px', width: '150px' }} />
                    </Link>
                </div>
                {/*End Desktop Logo*/}
                <div className="col-2 col-sm-3 col-md-3 col-lg-8">
                	<div className="d-block d-lg-none">
                        <button type="button" className="btn--link site-header__menu js-mobile-nav-toggle mobile-nav--open" onClick={props.toggleMobileMenu}>
                        	<i className="icon anm anm-times-l"></i>
                            <i className="anm anm-bars-r"></i>
                        </button>
                    </div>
                	{/*Desktop Menu*/}
                	<nav className="grid__item" id="AccessibleNav">{/* for mobile */}
                        <ul id="siteNav" className="site-nav medium center hidearrow">
                            <li className="lvl1 parent megamenu"><Link to="/">Home <i className="anm anm-angle-down-l"></i></Link></li>
                            <li className="lvl1 parent megamenu"><Link>Shop <i className="anm anm-angle-down-l"></i></Link>
                            	<div className="megamenu style4">
                                    <ul className="grid grid--uniform mmWrapper">
                                        {genders.map((gender) => (
                                            <GenderList key={gender.id} id={gender.id} name={gender.name} />
                                        ))}
                                        <li className="grid__item lvl-1 col-md-6 col-lg-6">
                                        	<a><img src="/assets/images/megamenu-bg1.jpg" alt="" title="" /></a>
                                        </li>
                                    </ul>
                              	</div>
                            </li>
                            <li className="lvl1 parent dropdown"><a href="#">New Arrivals <i className="anm anm-angle-down-l"></i></a>
                                <ul className="dropdown">
                                    {categories.map((row) => (
                                        <HeaderLink id={row.id} name={row.name} url="NewArrivals" />
                                    ))}
                                </ul>
                            </li>
                            <li className="lvl1 parent dropdown"><a href="#">BestSellers <i className="anm anm-angle-down-l"></i></a>
                                <ul className="dropdown">
                                    {categories.map((row) => (
                                        <HeaderLink id={row.id} name={row.name} url="BestSellers" />
                                    ))}
                                </ul>
                            </li>
                            {!props.sub ? <li className="lvl1"><Link to="/Pricing"><b>Rent!</b> <i className="anm anm-angle-down-l"></i></Link></li> : null}
                      </ul>
                    </nav>
                    {/*End Desktop Menu*/}
                </div>
                {/*Mobile Logo*/}
                <div className="col-6 col-sm-6 col-md-6 col-lg-2 d-block d-lg-none mobile-logo">
                	<div className="logo">
                        <Link to="/">
                            <img src="/assets/images/custom/logo.svg" alt="Belle Multipurpose Html Template" title="Belle Multipurpose Html Template" style={{ height: '50px', width: '150px' }} />
                        </Link>
                    </div>
                </div>
                {/*Mobile Logo*/}
                <div className="col-4 col-sm-3 col-md-3 col-lg-2">
                	<div className="site-cart" ref={cartRef}>
                    	<a href="#" onClick={toggleCartView} className="site-header__cart" title="Cart">
                        	<i className="icon anm anm-bag-l"></i>
                            <span id="CartCount" className="site-header__cart-count" data-cart-render="item_count">+</span>
                        </a>
                        {/*Minicart Popup*/}
                        <div id="header-cart" className="block block-cart" style={{display: isCartViewOpen ? "block" : ""}}>
                        	<ul className="mini-products-list">
                                {products.map((row) => (
                                    <Item data={row} pageRefresh={getItems} deleteItem={deleteItem} />
                                ))}
                            </ul>
                            <div className="total">
                            	<div className="total-in">
                                	<span className="label">Cart Subtotal:</span><span className="product-price"><span className="money">${totalPrice}</span></span>
                                </div>
                                 <div className="buttonSet text-center">
                                    <Link to="/Cart" className="btn btn-secondary btn--small" onClick={toggleCartView}>View Cart</Link>
                                    <Link to="/Checkout" className="btn btn-secondary btn--small">Checkout</Link>
                                </div>
                            </div>
                        </div>
                        {/*End Minicart Popup*/}
                    </div>
                    <div className="site-header__search">
                    	<button type="button" className="search-trigger" onClick={props.onSearch}><i className="icon anm anm-search-l"></i></button>
                    </div>
                    
                </div>
        	</div>
        </div>
    </div>
    );
}

export default Header;