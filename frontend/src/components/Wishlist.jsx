import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Item from "./Wishlist/Item";
import axios from "axios";

function Wishlist (props) {
    const navigate = useNavigate();

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

    async function getWishlistItems() {
        const result = await axios.get("/getWishlistItems");
        const data = result.data;
        setProducts(data);
    }

    useEffect(() => {
        if (props.isUser) {
            getWishlistItems();
        } else {
            navigate("/Login");
        }
    }, [props.isUser]);

    async function deleteWishlistItem (productId, sku) {
        const result = await axios.post("/deleteWishlistItem", {productId: productId, sku: sku});
        if (result.status === 200) {
            getWishlistItems();
        }
    }

    return (
        <div id="page-content" style={{paddingTop: "0px"}}>
    	<div className="page section-header text-center">
			<div className="page-title">
        		<div className="wrapper"><h1 className="page-width">Wish List</h1></div>
      		</div>
		</div>
        
        <div className="container">
        	<div className="row">
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 main-col">
                	<form action="#">
                        <div className="wishlist-table table-content table-responsive">
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                    	<th className="product-name text-center alt-font">Remove</th>
                                        <th className="product-price text-center alt-font">Images</th>
                                        <th className="product-name alt-font">Product</th>
                                        <th className="product-price text-center alt-font">Unit Price</th>
                                        <th className="stock-status text-center alt-font">Stock Status</th>
                                        <th className="product-subtotal text-center alt-font">Add to Cart</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {products.map((row) => (
                                        <Item data={row} pageRefresh={getWishlistItems} deleteWishlistItem={deleteWishlistItem} isUser={props.isUser}/>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </form>                   
               	</div>
            </div>
        </div>
        
    </div>
    );
}

export default Wishlist;