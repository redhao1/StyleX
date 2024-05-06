import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Item from "./Cart/Item";
import axios from "axios";

function Cart (props) {
    const navigate = useNavigate();

    const [totalPrice, setTotalPrice] = useState();
    const [checkoutButton, setCheckoutButton] = useState(true);

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
        if (data.length != 0) {
            setCheckoutButton(true);
        } else {
            setCheckoutButton(false);
        }
    }

    async function goToCheckout() {
        const result = await axios.get("/countCartItems");
        if (result.status === 200) {
            setCheckoutButton(true);
            navigate("/Checkout");
        } else {
            getItems();
        }
    }

    useEffect(() => {
        let total = 0;
        products.forEach((row) => (total += (row.price * row.quantity)));
        setTotalPrice(total);
    }, [products]);

    useEffect(() => {
        if (props.isUser) {
            getItems();
        } else {
            navigate("/Login");
        }
    }, [props.isUser]);

    async function deleteItem (productId, sku) {
        const result = await axios.post("/deleteItem", {productId: productId, sku: sku});
        if (result.status === 200) {
            getItems();
        }
    }

    return (
    <div id="page-content" style={{paddingTop: "0px"}}>
    {/*Page Title*/}
    <div className="page section-header text-center">
        <div className="page-title">
            <div className="wrapper"><h1 className="page-width">Your cart</h1></div>
          </div>
    </div>
    {/*End Page Title*/}
    
    <div className="container">
        <div className="row">
            <div className="col-12 col-sm-12 col-md-8 col-lg-8 main-col">
                <form action="#" method="post" className="cart style2">
                    <table>
                        <thead className="cart__row cart__header">
                            <tr>
                                <th colspan="2" className="text-center">Product</th>
                                <th className="text-center">Price</th>
                                <th className="text-center">Quantity</th>
                                <th className="text-right">Total</th>
                                <th className="action">&nbsp;</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((row) => (
                                <Item data={row} pageRefresh={getItems} deleteItem={deleteItem} />
                            ))}
                        </tbody>
                        <tfoot>
                            <tr>
                                <td colspan="3" className="text-left"><Link to="/" className="btn--link cart-continue"><i className="icon icon-arrow-circle-left"></i> Continue shopping</Link></td>
                                <td colspan="3" className="text-right"><button type="submit" name="update" className="btn--link cart-update" onClick={(event) => {event.preventDefault(); getItems();}}><i className="fa fa-refresh"></i> Update</button></td>
                            </tr>
                        </tfoot>
                </table>
                </form>                   
               </div>
            <div className="col-12 col-sm-12 col-md-4 col-lg-4 cart__footer">
                <div className="solid-border">
                    <h5>Discount Codes</h5>
                    <form action="#" method="post">
                        <div class="form-group">
                            <label htmlFor="address_zip">Enter your coupon code if you have one.</label>
                            <input type="text" name="coupon" />
                        </div>
                        <div class="actionRow">
                            <div><input type="button" class="btn btn-secondary btn--small" value="Apply Coupon" /></div>
                        </div>
                    </form>
                </div>
                <div className="solid-border">
                  <div className="row">
                      <span className="col-12 col-sm-6 cart__subtotal-title"><strong>Subtotal</strong></span>
                    <span className="col-12 col-sm-6 cart__subtotal-title cart__subtotal text-right"><span className="money">${totalPrice}</span></span>
                  </div>
                  <div className="cart__shipping">Shipping &amp; taxes calculated at checkout</div>
                  <p className="cart_tearm">
                    <label>
                      <input type="checkbox" name="tearm" id="cartTearm" className="checkbox" value="tearm" required="true" /> I agree with the terms and conditions</label>
                  </p>
                    {
                        checkoutButton ?
                            <button onClick={goToCheckout} type="submit" name="checkout" id="cartCheckout" className="btn btn--small-wide checkout" value="Checkout">Checkout</button>
                        :
                            <button type="submit" name="checkout" id="cartCheckout" className="btn btn--small-wide checkout" value="Checkout" disabled={!checkoutButton} style={!checkoutButton ? {backgroundColor: "white", color: "pink", borderColor: "pink"} : null}>Checkout</button>
                    }
                  <div className="paymnet-img"><img src="assets/images/payment-img.jpg" alt="Payment" /></div>
                </div>
            </div>
        </div>
    </div>
</div>
    );
}

export default Cart;