import React from "react";

function Option (props) {
    return (
        <option value={props.value}>{props.name}</option>
    );
}

export default Option;