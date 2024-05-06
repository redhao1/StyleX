import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Item (props) {
    const [totalPrice, setTotalPrice] = useState();

    useEffect(() => {
        setTotalPrice(props.data.price * props.data.quantity);
    }, [props.data.quantity]);

    async function incrementQuantity () {
        const result = await axios.post("/incrementQuantity", {productId: props.data.productId, sku: props.data.sku});
        if (result.status == 200) {
            props.pageRefresh();
        }
    }

    async function decrementQuantity () {
        if (props.data.quantity > 1) {
            const result = await axios.post("/decrementQuantity", {productId: props.data.productId, sku: props.data.sku});
            if (result.status == 200) {
                props.pageRefresh();
            }
        }
    }

    return (
        <li className="item">
            <a className="product-image" href="#">
                <Link to={`/ProductPage/${props.data.productId}`}><img src={`/assets/images/custom/product/images/${props.data.image}`} alt={props.data.title} title="" /></Link>
            </a>
            <div className="product-details">
            	<a onClick={() => props.deleteItem(props.data.productId, props.data.sku)} className="remove"><i className="anm anm-times-l" aria-hidden="true"></i></a>
                {/* <a href="#" className="edit-i remove"><i className="anm anm-edit" aria-hidden="true"></i></a> */}
                <a className="pName" href="cart.html">Sleeve Kimono Dress</a>
                <div className="variant-cart">{props.data.color} / {props.data.size}</div>
                <div className="wrapQtyBtn">
                    <div className="qtyField">
                    	<span className="label">Qty:</span>
                        <a className="qtyBtn minus" onClick={decrementQuantity}><i className="fa anm anm-minus-r" aria-hidden="true"></i></a>
                        <input type="text" id="Quantity" name="quantity" value={props.data.quantity} className="product-form__input qty" />
                        <a className="qtyBtn plus" onClick={incrementQuantity}><i className="fa anm anm-plus-r" aria-hidden="true"></i></a>
                    </div>
                </div>
                <div className="priceRow">
                	<div className="product-price">
                    	<span className="money">${totalPrice}</span>
                    </div>
                 </div>
			</div>
        </li>
    );
}

export default Item;