import React from "react";

function SizeVariant(props) {
    return (
        <div data-value={props.size} className="swatch-element xs available" onClick={() => props.onSizeVariantClick(props.id)}>
            <input className="swatchInput" id={`swatch-${props.id}-${props.size}`} type="radio" name={`option-${props.id}`} value={props.size} />
            <label className="swatchLbl medium rectangle" htmlFor={`swatch-${props.id}-${props.size}`} title={props.size}>{props.size}</label>
        </div>
    );
}

export default SizeVariant;