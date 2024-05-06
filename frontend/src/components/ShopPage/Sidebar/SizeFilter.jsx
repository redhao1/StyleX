import React from "react";

function SizeFilter (props) {
    return (
        <li><span className={`swacth-btn ${(props.isSizeSelected == props.id) ? "checked" : null}`} onClick={() => (props.onHandleClick(props.id))}>{props.size}</span></li>
    );
}

export default SizeFilter;