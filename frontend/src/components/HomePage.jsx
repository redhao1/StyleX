import React from "react";
import ImageBanner from "./HomePage/ImageBanner";
import DailyPick from "./HomePage/DailyPick";
import ShopFor from "./HomePage/ShopFor";
import LogoSlider from "./LogoSlider";
import FeaturedProduct from "./FeaturedProduct";
import StoreFeature from "./HomePage/StoreFeature";

function HomePage() {
  return (
    <div>
      <div id="page-content">
        <ImageBanner></ImageBanner>
        <ShopFor></ShopFor>
        <DailyPick></DailyPick>
        {/* <LogoSlider></LogoSlider>
        <FeaturedProduct></FeaturedProduct> */}
        <StoreFeature></StoreFeature>
      </div>
    </div>
  );
}

export default HomePage;
