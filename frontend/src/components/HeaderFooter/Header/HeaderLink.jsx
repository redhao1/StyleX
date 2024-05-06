import React from "react";
import { Link } from "react-router-dom";

function HeaderLink (props) {
    return (
        <li><Link to={`/${props.url}/${props.id}`} className="site-nav">{props.name}</Link></li>
    );
}

export default HeaderLink;