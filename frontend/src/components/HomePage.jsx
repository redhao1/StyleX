import React from "react";
import ImageBanner from "./HomePage/ImageBanner";
import DailyPick from "./HomePage/DailyPick";
import ShopFor from "./HomePage/ShopFor";
import RedirectButton from "./HomePage/RedirectButton";
import StoreFeature from "./HomePage/StoreFeature";

//const userRoutes = require('./routes / userRoutes');


function HomePage() {
  return (
    <div>
      <div id="page-content">
        <RedirectButton/>
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
