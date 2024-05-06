import React, { useState, useEffect } from "react";
import $ from "jquery";
import "jquery-ui/ui/widgets/slider";
import ColorFilter from "./Sidebar/ColorFilter";
import axios from "axios";
import SizeFilter from "./Sidebar/SizeFilter";
import { useParams, useLocation } from "react-router-dom";
import BrandFilter from "./Sidebar/BrandFilter";

function Sidebar () {

  const { id } = useParams();
  const location = useLocation();

  const [url, setUrl] = useState("");
  const [colors, setColors] = useState([]);
  const [sizes, setSizes] = useState([]);
  const [brands, setBrands] = useState([]);
  const [prices, setPrices] = useState({
    minPrice: null,
    maxPrice: null,
  });
  const [dataFetched, setDataFetched] = useState(false);

  useEffect(() => {
    if (location.pathname.includes('/ShopPage')) {
      setUrl("");
    } else if (location.pathname.includes('/ShopByGender')) {
      setUrl("Gender");
    } else {
      setUrl("NewArrivals");
    }
  }, [location.pathname])

  useEffect(() => {
    setDataFetched(false);
    async function getData() {
      let response = await axios.get(`/Sidebar/get${url}ColorsFromProducts`, {params: {id: id}});
      setColors(response.data);
      response = await axios.get(`/Sidebar/get${url}SizesFromProducts`, {params: {id: id}});
      setSizes(response.data);
      response = await axios.get(`/Sidebar/get${url}BrandsFromProducts`, {params: {id: id}});
      setBrands(response.data);
      try {
        response = await axios.get(`/Sidebar/get${url}PricesFromProducts`, {params: {id: id}});
        if (response.status === 200) {
          setPrices({
            minPrice: parseFloat(response.data.result[0].minPrice),
            maxPrice: parseFloat(response.data.result[0].maxPrice)
          });
        }
      } catch (error) {
        setPrices({
          minPrice: 0,
          maxPrice: 100
        });
      }
      setDataFetched(true);
    }

    getData();
  }, [id, url]);

  const [sidebar, setSidebar] = useState({
    categories: true,
    price: true,
    size: true,
    color: true,
    brands: true,
  });

  function handleSidebar (event) {
    setSidebar((prev) => {
      return (
        {
          ...prev,
          [event]: !prev[event],
        }
      );
    });
  }

  const [minValue, setMinValue] = useState();
  const [maxValue, setMaxValue] = useState();

  useEffect(() => {
    if (dataFetched) {
      setMinValue(prices.minPrice);
      setMaxValue(prices.maxPrice);
    } else {
      setMinValue(0);
      setMaxValue(100);
    }
  }, [dataFetched, prices])

  useEffect(() => {
    if (dataFetched) {
      $('#slider-range').slider({
        range: true,
        min: prices.minPrice,
        max: prices.maxPrice,
        values: [prices.minPrice, prices.maxPrice],
        slide: (event, ui) => {
          setMinValue(ui.values[0]);
          setMaxValue(ui.values[1]);
        }
      });
    }
  }, [dataFetched, prices.minPrice, prices.maxPrice]);

    const [isColorSelected, setIsColorSelected] = useState();
    const [isSizeSelected, setIsSizeSelected] = useState();

    function handleSelectColor(index) {
      setIsColorSelected(index);
    }

    function handleSelectSize(index) {
      setIsSizeSelected(index);
    }

    return (
        <div className="col-12 col-sm-12 col-md-3 col-lg-3 sidebar filterbar">
        <div className="closeFilter d-block d-md-none d-lg-none"><i className="icon icon anm anm-times-l"></i></div>
        <div className="sidebar_tags">
            {/*Categories*/}
            <div className="sidebar_widget categories filter-widget">
                <div className={`widget-title ${sidebar.categories ? "" : "active"}`} onClick={() => handleSidebar("categories")}><h2>Categories</h2></div>
                <div className="widget-content" style={{display: sidebar.categories ? "" : "none"}}>
                    <ul className="sidebar_categories">
                        <li className="level1 sub-level"><a href="/#;" className="site-nav">Clothing</a>
                            <ul className="sublinks">
                                <li className="level2"><a href="/#;" className="site-nav">Men</a></li>
                                <li className="level2"><a href="/#;" className="site-nav">Women</a></li>
                                <li className="level2"><a href="/#;" className="site-nav">Child</a></li>
                                <li className="level2"><a href="/#;" className="site-nav">View All Clothing</a></li>
                            </ul>
                        </li>
                        <li className="level1 sub-level"><a href="/#;" className="site-nav">Jewellery</a>
                            <ul className="sublinks">
                                <li className="level2"><a href="/#;" className="site-nav">Ring</a></li>
                                <li className="level2"><a href="/#;" className="site-nav">Neckalses</a></li>
                                <li className="level2"><a href="/#;" className="site-nav">Eaarings</a></li>
                                <li className="level2"><a href="/#;" className="site-nav">View All Jewellery</a></li>
                            </ul>
                        </li>
                        <li className="lvl-1"><a href="/#;" className="site-nav">Shoes</a></li>
                        <li className="lvl-1"><a href="/#;" className="site-nav">Accessories</a></li>
                        <li className="lvl-1"><a href="/#;" className="site-nav">Collections</a></li>
                        <li className="lvl-1"><a href="/#;" className="site-nav">Sale</a></li>
                        <li className="lvl-1"><a href="/#;" className="site-nav">Page</a></li>
                    </ul>
                </div>
            </div>
            {/*Categories*/}
            {/* Price Filter*/}
            {/* <div className="sidebar_widget filterBox filter-widget">
                <div className={`widget-title ${sidebar.price ? "" : "active"}`} onClick={() => handleSidebar("price")}>
                    <h2>Price</h2>
                </div>
                <form action="#" method="post" className="price-filter" style={{display: sidebar.price ? "" : "none"}}>

                <div id="slider-range" className="ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all">
                    <div className="ui-slider-range ui-widget-header ui-corner-all" style={{left: `${prices.minPrice}`, right: `${prices.maxPrice}%`, width: `${prices.maxPrice - prices.minPrice}%`}}></div>
                    <span className="ui-slider-handle ui-state-default ui-corner-all" tabIndex="0"></span>
                    <span className="ui-slider-handle ui-state-default ui-corner-all" tabIndex="0"></span>
                </div>

                    <div className="row">
                        <div className="col-6">
                            <p className="no-margin"><input id="amount" type="text" value={"$" + minValue + " - " + "$" + maxValue} readOnly/></p>
                        </div>
                        <div className="col-6 text-right margin-25px-top">
                            <button className="btn btn-secondary btn--small">filter</button>
                        </div>
                    </div>
                </form>
            </div> */}
            {/*End Price Filter */}
            {/*Size Swatches*/}
            <div className="sidebar_widget filterBox filter-widget size-swacthes">
                <div className={`widget-title ${sidebar.size ? "" : "active"}`} onClick={() => handleSidebar("size")}><h2>Size</h2></div>
                <div className="filter-color swacth-list" style={{display: sidebar.size ? "" : "none"}}>
                    <ul>
                        {sizes.map((row, index) => (
                          <SizeFilter key={index + row} id={index} size={row} isSizeSelected={isSizeSelected} onHandleClick={handleSelectSize} />
                        ))}
                    </ul>
                </div>
            </div>
            {/*End Size Swatches*/}
            {/*Color Swatches*/}
            <div className="sidebar_widget filterBox filter-widget">
                <div className={`widget-title ${sidebar.color ? "" : "active"}`} onClick={() => handleSidebar("color")}><h2>Color</h2></div>
                <div className="filter-color swacth-list clearfix" style={{display: sidebar.color ? "" : "none"}}>
                    {colors.map((row, index) => (
                      <ColorFilter key={index + row} id={index} color={row.toLowerCase()} isColorSelected={isColorSelected} onHandleClick={handleSelectColor} />
                    ))}
                </div>
            </div>
            {/*End Color Swatches*/}
            {/*Brand*/}
            <div className="sidebar_widget filterBox filter-widget">
                <div className={`widget-title ${sidebar.brands ? "" : "active"}`} onClick={() => handleSidebar("brands")}><h2>Brands</h2></div>
                <ul style={{display: sidebar.brands ? "" : "none"}}>
                    {brands.map((row, index) => (
                      <BrandFilter key={index + row} id={index} brand={row} />
                    ))}
                </ul>
            </div>
            {/*End Brand*/}
            {/*Popular Products*/}
            {/* <div className="sidebar_widget">
                <div className="widget-title"><h2>Popular Products</h2></div>
                <div className="widget-content">
                    <div className="list list-sidebar-products">
                      <div className="grid">
                        <div className="grid__item">
                          <div className="mini-list-item">
                            <div className="mini-view_image">
                                <a className="grid-view-item__link" href="/#">
                                    <img className="grid-view-item__image" src="/assets/images/product-images/mini-product-img.jpg" alt="" />
                                </a>
                            </div>
                            <div className="details"> <a className="grid-view-item__title" href="/#">Cena Skirt</a>
                              <div className="grid-view-item__meta"><span className="product-price__price"><span className="money">$173.60</span></span></div>
                            </div>
                          </div>
                        </div>
                        <div className="grid__item">
                          <div className="mini-list-item">
                            <div className="mini-view_image"> <a className="grid-view-item__link" href="/#"><img className="grid-view-item__image" src="/assets/images/product-images/mini-product-img1.jpg" alt="" /></a> </div>
                            <div className="details"> <a className="grid-view-item__title" href="/#">Block Button Up</a>
                              <div className="grid-view-item__meta"><span className="product-price__price"><span className="money">$378.00</span></span></div>
                            </div>
                          </div>
                        </div>
                        <div className="grid__item">
                          <div className="mini-list-item">
                            <div className="mini-view_image"> <a className="grid-view-item__link" href="/#"><img className="grid-view-item__image" src="/assets/images/product-images/mini-product-img2.jpg" alt="" /></a> </div>
                            <div className="details"> <a className="grid-view-item__title" href="/#">Balda Button Pant</a>
                              <div className="grid-view-item__meta"><span className="product-price__price"><span className="money">$278.60</span></span></div>
                            </div>
                          </div>
                        </div>
                        <div className="grid__item">
                          <div className="mini-list-item">
                            <div className="mini-view_image"> <a className="grid-view-item__link" href="/#"><img className="grid-view-item__image" src="/assets/images/product-images/mini-product-img3.jpg" alt="" /></a> </div>
                            <div className="details"> <a className="grid-view-item__title" href="/#">Border Dress in Black/Silver</a>
                              <div className="grid-view-item__meta"><span className="product-price__price"><span className="money">$228.00</span></span></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
            </div> */}
            {/*End Popular Products*/}          
        </div>
    </div>
    );
}

export default Sidebar;