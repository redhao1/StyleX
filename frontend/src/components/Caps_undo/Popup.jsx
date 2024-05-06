import React, { useState } from 'react'; // Import useState for managing current image index
import styles from './Popup.module.css';

function Popup({ cap, onClose }) {
  // State to keep track of the current image index
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Function to move to the next image
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % cap.images.length);
  };

  // Function to move to the previous image
  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + cap.images.length) % cap.images.length);
  };

  return (
    <div className={styles.backdrop} onClick={onClose}>
      <div className={styles.content} onClick={(e) => e.stopPropagation()}>
        <div className={styles.imageSection}>
          {/* Only display the image that matches the currentImageIndex */}
          <img src={cap.images[currentImageIndex]} alt={`Product ${currentImageIndex + 1}`} />
          {/* Previous button */}
          <button className={styles.prevButton} onClick={prevImage}>&lt;</button>
          {/* Next button */}
          <button className={styles.nextButton} onClick={nextImage}>&gt;</button>
        </div>
        <div className={styles.infoSection}>
          <h2>{cap.brand}</h2>
          <h3>{cap.productName}</h3>
          <p className={styles.productDescription}>{cap.description}</p>
          <p className={styles.price}>Rental Price: ${cap.rentalPrice}</p>
          <div className={styles.sizeAndCart}>
            <select className={styles.sizeSelect}>
              {cap.sizes.map((size) => (
                <option key={size} value={size}>{size}</option>
              ))}
            </select>
            <button className={styles.addToCartButton}>Add to Cart</button>
          </div>
        </div>
        <span className={styles.closeButton} onClick={onClose}>&times;</span>
      </div>
    </div>
  );
}

export default Popup;
