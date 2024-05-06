import React from "react";

function ColorFilter (props) {
    return (
        <span className={`swacth-btn ${props.color} ${(props.isColorSelected == props.id) ? "checked" : null}`} onClick={() => (props.onHandleClick(props.id))}></span>
    );
}


export default ColorFilter;