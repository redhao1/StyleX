import React from "react";

function Swatches (props) {
    return (
        <li className="swatch medium rounded" onClick={() => { props.onSwatchClick(props.id) }}>
            <img src={`/assets/images/custom/product/variant-images/${props.colorImage}`} alt="image" />
        </li>
    );
}

export default Swatches;