import React from "react";
import { Link } from "react-router-dom";

function CategorList(props) {
    return(
        <li className="lvl-2">
            <Link to={`/ShopPage/${props.id}`} id={props.id} className="site-nav lvl-2">
            {props.name}
            </Link>
        </li>
    );
}

export default CategorList;
