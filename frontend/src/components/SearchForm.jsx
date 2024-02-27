import React from "react";

function SearchForm () {
    <div className="search">
        <div className="search__form">
            <form className="search-bar__form" action="#">
                <button className="go-btn search__button" type="submit"><i className="icon anm anm-search-l"></i></button>
                <input className="search__input" type="search" name="q" value="" placeholder="Search entire store..." aria-label="Search" autocomplete="off" />
            </form>
            <button type="button" className="search-trigger close-btn"><i className="anm anm-times-l"></i></button>
        </div>
    </div>
}

export default SearchForm;