import React, { useState } from 'react';
import styles from './ProductPopup.module.css';

function ProductPopup({ product, onClose }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % product.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + product.images.length) % product.images.length);
  };

  return (
    <div className={styles.backdrop} onClick={onClose}>
      <div className={styles.content} onClick={(e) => e.stopPropagation()}>
        <div className={styles.imageSection}>
          <img src={product.images[currentImageIndex]} alt={`Product ${currentImageIndex + 1}`} />
          <button className={styles.prevButton} onClick={prevImage}>&lt;</button>
          <button className={styles.nextButton} onClick={nextImage}>&gt;</button>
        </div>
        <div className={styles.infoSection}>
          <h2>{product.brand}</h2>
          <h3>{product.productName}</h3>
          <p className={styles.productDescription}>{product.description}</p>
          <p className={styles.price}>Rental Price: ${product.rentalPrice}</p>
          <div className={styles.sizeAndCart}>
            {/* Check if product.sizes exists and is an array with length > 0 */}
            {product.sizes && product.sizes.length > 0 && (
              <select className={styles.sizeSelect}>
                {product.sizes.map((size) => (
                  <option key={size} value={size}>{size}</option>
                ))}
              </select>
            )}
            <button className={styles.addToCartButton}>Add to Cart</button>
          </div>
        </div>
        <span className={styles.closeButton} onClick={onClose}>&times;</span>
      </div>
    </div>
  );
}

export default ProductPopup;
