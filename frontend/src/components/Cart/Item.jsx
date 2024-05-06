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
        <tr className="cart__row border-bottom line1 cart-flex border-top">
                                <td className="cart__image-wrapper cart-flex-item">
                                    <Link to={`/ProductPage/${props.data.productId}`}><img className="cart__image" src={`/assets/images/custom/product/images/${props.data.image}`} alt={props.data.title} /></Link>
                                </td>
                                <td className="cart__meta small--text-left cart-flex-item">
                                    <div className="list-view-item__title">
                                        <Link to={`/ProductPage/${props.data.productId}`}>{props.data.title} </Link>
                                    </div>
                                    
                                    <div className="cart__meta-text">
                                        Color: {props.data.color}<br />Size: {props.data.size}<br />
                                    </div>
                                </td>
                                <td className="cart__price-wrapper cart-flex-item">
                                    <span className="money">${props.data.price}</span>
                                </td>
                                <td className="cart__update-wrapper cart-flex-item text-right">
                                    <div className="cart__qty text-center">
                                        <div className="qtyField">
                                            <a className="qtyBtn minus" onClick={decrementQuantity}><i className="icon icon-minus"></i></a>
                                            <input className="cart__qty-input qty" type="text" name="updates[]" id="qty" value={props.data.quantity} pattern="[0-9]*" />
                                            <a className="qtyBtn plus" onClick={incrementQuantity}><i className="icon icon-plus"></i></a>
                                        </div>
                                    </div>
                                </td>
                                <td className="text-right small--hide cart-price">
                                    <div><span className="money">${totalPrice}</span></div>
                                </td>
                                <td className="text-center small--hide"><a onClick={() => props.deleteItem(props.data.productId, props.data.sku)} className="btn btn--secondary cart__remove" title="Remove tem"><i className="icon icon anm anm-times-l"></i></a></td>
                            </tr>
    );
}

export default Item;