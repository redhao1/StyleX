import React from "react";

function RedirectButton() {
  const handleClick = () => {
    // Redirect to http://localhost:5173 when button is clicked
    window.location.href = "http://localhost:5173";
  };
{/* <button onClick={handleClick}>Start Renting Luxury Items</button> */}
  return (
    
    <div className="custom-text text-center">
      <a className="btn" onClick={handleClick}>Start Renting Luxury Items now</a>
    </div>
  );
}

export default RedirectButton;