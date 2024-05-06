import React, { useState } from 'react';
import axios from 'axios';

function UploadPage() {
  const [itemName, setItemName] = useState('');
  const [itemDescription, setItemDescription] = useState('');

  const handleUpload = async (event) => {
    event.preventDefault();
    try {
      // Assuming you have an API endpoint to handle item uploads
      const response = await axios.post('/api/upload', {
        itemName,
        itemDescription,
      });
      console.log('Item uploaded:', response.data);
      // Add any further actions you want to perform after upload
    } catch (error) {
      console.error('Error uploading item:', error);
    }
  };

  return (
    <div>
      <h1>Upload Page</h1>
      <form onSubmit={handleUpload}>
        <div>
          <label htmlFor="itemName">Item Name:</label>
          <input
            type="text"
            id="itemName"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="itemDescription">Item Description:</label>
          <textarea
            id="itemDescription"
            value={itemDescription}
            onChange={(e) => setItemDescription(e.target.value)}
          ></textarea>
        </div>
        <button type="submit">Upload Item</button>
      </form>
    </div>
  );
}

export default UploadPage;
