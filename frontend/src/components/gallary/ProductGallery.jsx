// ProductGallery.js
import React, { useState } from "react";
import "./ProductGallery.css"; // Adjust the CSS file name as needed
import ProductPopup from "./ProductPopup"; // Renamed Popup for clarity

export default function ProductGallery({ productsData }) {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div className="Wrapper">
      {productsData.map((product) => (
        <div key={product.id} className="productDisplay" onClick={() => { setShowPopup(true); setSelectedProduct(product); }}>
          <img src={product.images[0]} alt={product.productName} />
          <div className="brandName">
            <span className="brand">{product.brand}</span>
            <span className="productName">{product.productName}</span>
          </div>
          <div className="rental">
            <span className="rentalPrice">Rental Price: ${product.rentalPrice}</span>
            <button className="viewButton">View</button>
          </div>
        </div>
      ))}
      {showPopup && selectedProduct && (
        <ProductPopup product={selectedProduct} onClose={() => setShowPopup(false)} />
      )}
    </div>
  );
}
