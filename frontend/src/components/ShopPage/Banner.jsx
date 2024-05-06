import React from "react";

function Banner(props) {
  return (
    <div className="collection-header" style={{ marginBottom: "45px" }}>
      <div className="collection-hero">
        <div className="collection-hero__image">
          <img
            className="blur-up lazyload"
            data-src="/assets/images/cat-women.jpg"
            src="/assets/images/cat-women.jpg"
            alt="Women"
            title="Women"
          />
        </div>
        <div className="collection-hero__title-wrapper">
          <h1 className="collection-hero__title page-width">
            {props.title}
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Banner;
