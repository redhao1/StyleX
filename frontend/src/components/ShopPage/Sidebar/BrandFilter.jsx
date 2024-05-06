import React from "react";

function BrandFilter (props) {
    return (
        <li>
            <input type="checkbox" value={props.brand} id={`${"check" + props.id}`} />
            <label htmlFor={`${"check" + props.id}`}><span><span></span></span>{props.brand}</label>
        </li>
    );
}

export default BrandFilter;