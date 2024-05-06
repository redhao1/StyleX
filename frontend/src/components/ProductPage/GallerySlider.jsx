import React from "react";

function GallerySlider (props) {
    return (
        <a onClick={() => props.handleImageSelect(props.image)} data-image={`/assets/images/custom/product/images/${props.image}`} data-zoom-image={`/assets/images/custom/product/images/${props.image}`} className="slick-slide slick-cloned" data-slick-index="-4" aria-hidden="true" tabIndex="-1">
            <img className="blur-up lazyload" data-src={`/assets/images/custom/product/images/${props.image}`} src={`/assets/images/custom/product/images/${props.image}`} alt="" />
        </a>
    );
}

export default GallerySlider;