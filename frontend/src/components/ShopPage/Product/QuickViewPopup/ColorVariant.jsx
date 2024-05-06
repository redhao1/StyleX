import React from "react";

function ColorVariant (props) {
    return (
        <div data-value={props.color} className="swatch-element color red available" onClick={() => props.onVariantClick(props.id)}>
            <input className="swatchInput" id={`swatch-${props.id}-${props.color}`} type="radio" name={`option-${props.id}`} value={props.color} />
            <label className="swatchLbl color medium rectangle" htmlFor={`swatch-${props.id}-${props.color}`} style={{ backgroundImage: `url(/assets/images/custom/product/variant-images/${props.image})` }} title={props.color}></label>
        </div>
    );
}

export default ColorVariant;