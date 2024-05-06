import React from "react";

function SearchForm (props) {
    return(
        <div className={`search ${props.isSearch ? "search--opened" : ""}`}  ref={props.searchRef}>
        <div className="search__form">
            <form className="search-bar__form" action="#">
                <button className="go-btn search__button" type="submit"><i className="icon anm anm-search-l"></i></button>
                <input className="search__input" type="search" name="q" value="" placeholder="Search entire store..." aria-label="Search" autoComplete="off" />
            </form>
            <button onClick={props.closeSearch} type="button" className="search-trigger close-btn"><i className="anm anm-times-l"></i></button>
        </div>
    </div>
    );
}

export default SearchForm;