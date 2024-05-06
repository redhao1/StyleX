// Caps.js
import React, { useState } from "react";
import "./caps.css";
import Popup from "./Popup";
import capsData from "../data/caps";

export default function Caps() {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedCap, setSelectedCap] = useState(null);

  return (
    <div className="Wrapper">
      {capsData.map((cap) => (
        <div
          key={cap.id}
          className="capdisplay"
          onClick={() => {
            setShowPopup(true);
            setSelectedCap(cap);
          }}
        >
          <img src={cap.images[0]} alt="Cap" />
          <div className="brandname">
            <span className="brand">{cap.brand}</span>
            <span className="productname">{cap.productName}</span>
          </div>
          <div className="rental">
            <span className="rentalprice">
              Rental Price: ${cap.rentalPrice}
            </span>
            <button className="viewButton">View</button>
          </div>
        </div>
      ))}
      {showPopup && selectedCap && (
        <Popup cap={selectedCap} onClose={() => setShowPopup(false)} />
      )}
    </div>
  );
}
