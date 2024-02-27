import React, { useState } from "react";
import { Link } from "react-router-dom";

function MobileMenu (props) {
  const [isShopExpanded, setIsShopExpanded] = useState(false);
  const [isNewArrivalsExpanded, setIsNewArrivalsExpanded] = useState(false);
  const [isBestsellersExpanded, setIsBestSellersExpanded] = useState(false);
  
  function handleShopExpanded () {
    setIsShopExpanded(!isShopExpanded);
    setIsNewArrivalsExpanded(false);
    setIsBestSellersExpanded(false);
  }

  function handleNewArrivalsExpanded () {
    setIsNewArrivalsExpanded(!isNewArrivalsExpanded);
    setIsShopExpanded(false);
    setIsBestSellersExpanded(false);
  }

  function handleBestsellersExpanded () {
    setIsBestSellersExpanded(!isBestsellersExpanded);
    setIsShopExpanded(false);
    setIsNewArrivalsExpanded(false);
  }

    return (
      <div className={`mobile-nav-wrapper ${props.isMobileMenuOpen ? 'active' : ''}`} role="navigation">
        <div className="closemobileMenu" onClick={props.closeMobileMenu}><i className="icon anm anm-times-l pull-right"></i> Close Menu</div>
          <ul id="MobileNav" className="mobile-nav">
            <li className="lvl1 parent megamenu"><Link to="/">Home</Link></li>
            <li className="lvl1 parent megamenu"><a href="#" onClick={handleShopExpanded}>Shop <i className="anm anm-plus-l"></i></a>
              <ul style={isShopExpanded ? {display: 'block'} : {}}>
                  <li><a href="index.html" className="site-nav">Outerwear</a></li>
                  <li><a href="home2-default.html" className="site-nav">Tops</a></li>
                  <li><a href="home15-funiture.html" className="site-nav">Bottoms</a></li>
                  <li><a href="home3-boxed.html" className="site-nav">Footwear</a></li>
                  <li><a href="home4-fullwidth.html" className="site-nav last">Accessories</a></li>
              </ul>
            </li>
            <li className="lvl1 parent megamenu"><a href="#" onClick={handleNewArrivalsExpanded}>New Arrivals <i className="anm anm-plus-l"></i></a>
                <ul style={isNewArrivalsExpanded ? {display: 'block'} : {}}>
                    <li><a href="index.html" className="site-nav">Outerwear</a></li>
                    <li><a href="home2-default.html" className="site-nav">Tops</a></li>
                    <li><a href="home15-funiture.html" className="site-nav">Bottoms</a></li>
                    <li><a href="home3-boxed.html" className="site-nav">Footwear</a></li>
                    <li><a href="home4-fullwidth.html" className="site-nav last">Accessories</a></li>
                </ul>
            </li>
            <li className="lvl1 parent megamenu"><a href="#" onClick={handleBestsellersExpanded}>Bestsellers <i className="anm anm-plus-l"></i></a>
                <ul style={isBestsellersExpanded ? {display: 'block'} : {}}>
                    <li><a href="index.html" className="site-nav">Outerwear</a></li>
                    <li><a href="home2-default.html" className="site-nav">Tops</a></li>
                    <li><a href="home15-funiture.html" className="site-nav">Bottoms</a></li>
                    <li><a href="home3-boxed.html" className="site-nav">Footwear</a></li>
                    <li><a href="home4-fullwidth.html" className="site-nav last">Accessories</a></li>
                </ul>
            </li>
            <li className="lvl1"><a href="#"><b>Trendy!</b></a>
          </li>
        </ul>
    </div>
    );
}

export default MobileMenu;