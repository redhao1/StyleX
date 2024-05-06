import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

function Item (props) {
    const navigate = useNavigate();

    const [stock, setStock] = useState("In stock");
    const [cart, setCart] = useState(true);
    const [buttonText, setButtonText] = useState("Add to Cart");

    async function addToCart() {
        if (props.isUser) {
            try {
                if (props.data.stock > 0) {
                    const result = await axios.post("/addToCart", {productId: props.data.productId, sku: props.data.sku, quantity: 1});
                    if (result.status === 200) {
                        setCart(false);
                        setButtonText("Already in Cart");
                        Swal.fire({
                            icon: 'success',
                            title: 'Item Added to Cart!',
                            text: `${props.data.title} has been added to your cart.`,
                            showConfirmButton: false,
                            timer: 2000,
                        });
                    } else {
                        setCart(false);
                        setButtonText("Already in Cart");
                        Swal.fire({
                            icon: 'warning',
                            title: 'Item Already in Cart',
                            text: `${props.data.title} is already in your cart.`,
                            showConfirmButton: false,
                            timer: 2000,
                        });
                    }
                } else {
                    setCart(true);
                    setButtonText("Add to Cart");
                    Swal.fire({
                        icon: 'error',
                        title: 'Item Out of Stock',
                        text: `${props.data.title} is out of stock.`,
                        showConfirmButton: true,
                        confirmButtonText: 'OK!',
                    });
                    
                }
            } catch {
                console.log("Error adding item to cart.")
            }
        } else {
            navigate("/Login");
        } 
    }
    
    useEffect(() => {
        if (props.isUser) {
            if (props.data.stock > 0) {
                isItemInCart();
                setStock("In stock");
            } else {
                setStock("Out of stock");
                setCart(false);
                setButtonText("Out of Stock");
            }
        } else {
            navigate("/Login");
        }
    }, [props.isUser, props.data.stock]);

    async function isItemInCart() {
        try {
            const result = await axios.get("/isItemInCart", { params: { productId: props.data.productId, sku: props.data.sku } });
            if (result.status === 200) {
                setCart(false);
                setButtonText("Already in Cart");
            } else {
                setCart(true);
                setButtonText("Add to Cart");
            }
        } catch (error) {
            setCart(true);
            setButtonText("Add to Cart");
            console.error("Error checking if item is in cart:", error);
        }
    }

    return (
        <tr>
            <td className="product-thumbnail text-center">
                 <Link to={`/ProductPage/${props.data.productId}`}><img src={`/assets/images/custom/product/images/${props.data.image}`} alt={props.data.title} title="" /></Link>
            </td>
            <td className="product-name"><h4 className="no-margin"><Link to={`/ProductPage/${props.data.productId}`}>{props.data.title}</Link></h4></td>
            <td className="stock text-center">
                <span className="in-stock">{props.data.color} / {props.data.size}</span>
            </td>
            <td className="product-price text-center"><span className="amount">{props.data.quantity}</span></td>
            <td className="product-price text-center"><span className="amount">${props.data.price} x {props.data.quantity} = ${props.data.price * props.data.quantity}</span></td>
            
            <td className="product-subtotal text-center"><span className="amount">{props.data.status}</span></td>
        </tr>
    );
}

export default Item;