import React from "react";
import ImageBanner from "./HomePage/ImageBanner";
import DailyPick from "./HomePage/DailyPick";
import ShopFor from "./HomePage/ShopFor";
import StoreFeature from "./HomePage/StoreFeature";

function HomePage() {
  return (
    <div>
      <div id="page-content">
        <ImageBanner></ImageBanner>
        <ShopFor></ShopFor>
        <DailyPick></DailyPick>
        <StoreFeature></StoreFeature>
      </div>
    </div>
  );
}

export default HomePage;
