import React, { useEffect, useState } from "react";
import Banner from "./ShopPage/Banner";
import Sidebar from "./ShopPage/Sidebar";
import Product from "./ShopPage/Product";
import axios from "axios";
import { useParams } from "react-router-dom";

function BestSellers (props) {

    const [totalProducts, setTotalProducts] = useState("");
    const [title, setTitle] = useState("");

    const { id } = useParams();

    const [products, setProducts] = useState([
        {
            id: "",
            title: "",
            variants: [{
                color: "",
                price: "",
                colorImage: "",
                images: [""],
            }],
          }
    ]);

    useEffect(() => {
        async function getProductsByCategory() {
            try {
                const response = await axios.get("/Product/getBestProducts", {params: {id: id}});
                const data = response.data.result.map((product) => ({
                    id: product._id,
                    title: product.title,
                    variants: product.variants.map((variant) => ({
                    color: variant.color,
                    price: variant.info[0].price,
                    colorImage: variant.colorImage,
                    images: variant.images,
                    })),
                }));
                setProducts(data);
                setTotalProducts(data.length);
                setTitle(response.data.category);
            } catch (error) {
                setTotalProducts(0);
                setTitle("");
            }
        }

        getProductsByCategory();
    }, [id]);

    return (
    <div id="page-content" style={{paddingTop: "0px"}}>
    <Banner title={`${title != "" ? `Best ${title}` : `No Products Available`}`}></Banner>
    <div className="container">
        <div className="row">
            <Sidebar></Sidebar>
            {/*Main Content*/}
            <div className="col-12 col-sm-12 col-md-9 col-lg-9 main-col">
                {/* <div className="category-description">
                    <h3>Category Description</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing.</p>
                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.</p>
                </div>
                <hr /> */}
                <div className="productList product-load-more">
                    {/*Toolbar*/}
                    <button type="button" className="btn btn-filter d-block d-md-none d-lg-none"> Product Filters</button>
                    <div className="toolbar">
                        <div className="filters-toolbar-wrapper">
                            <div className="row">
                                <div className="col-4 col-md-4 col-lg-4 filters-toolbar__item collection-view-as d-flex justify-content-start align-items-center">
                                    <a href="/shop-left-sidebar.html" title="Grid View" className="change-view change-view--active">
                                        <img src="/assets/images/grid.jpg" alt="Grid" />
                                    </a>
                                    <a href="/shop-listview.html" title="List View" className="change-view">
                                        <img src="/assets/images/list.jpg" alt="List" />
                                    </a>
                                </div>
                                <div className="col-4 col-md-4 col-lg-4 text-center filters-toolbar__item filters-toolbar__item--count d-flex justify-content-center align-items-center">
                                    <span className="filters-toolbar__product-count">Showing: {totalProducts}</span>
                                </div>
                                <div className="col-4 col-md-4 col-lg-4 text-right">
                                    <div className="filters-toolbar__item">
                                          <label htmlFor="SortBy" className="hidden">Sort</label>
                                          <select name="SortBy" id="SortBy" className="filters-toolbar__input filters-toolbar__input--sort">
                                            <option value="title-ascending" selected="selected">Sort</option>
                                            <option>Best Selling</option>
                                            <option>Alphabetically, A-Z</option>
                                            <option>Alphabetically, Z-A</option>
                                            <option>Price, low to high</option>
                                            <option>Price, high to low</option>
                                            <option>Date, new to old</option>
                                            <option>Date, old to new</option>
                                          </select>
                                          <input className="collection-header__default-sort" type="hidden" value="manual" />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    {/*End Toolbar*/}
                    <div className="grid-products grid--view-items">
                        <div className="row">
                        {totalProducts != 0 && products.map((row) => (
                            <Product key={row.id} id={row.id} title={row.title} variants={row.variants} />
                        ))}
                        </div>
                    </div>
                </div>
                <div className="infinitpaginOuter">
                    <div className="infinitpagin">	
                        <a href="/#" className="btn loadMore">Load More</a>
                    </div>
                </div>
            </div>
            {/*End Main Content*/}
        </div>
    </div>
</div>
    );
}

export default BestSellers;