import React, {useState, useEffect} from "react";

function Item (props) {
    const [totalPrice, setTotalPrice] = useState();

    useEffect(() => {
        setTotalPrice(props.data.price * props.data.quantity);
    }, [props.data.quantity]);

    return (
        <tr>
            <td className="text-left">{props.data.title}</td>
            <td>${props.data.price}</td>
            <td>{props.data.size}</td>
            <td>{props.data.quantity}</td>
            <td>${totalPrice}</td>
        </tr>
    );
}

export default Item;