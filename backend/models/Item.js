const mongoose = require('mongoose');

// Define the schema for the Item model
const itemSchema = new mongoose.Schema({
    itemName: {
        type: String,
        required: true
    },
    itemDescription: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// Create the Item model using the schema
const Item = mongoose.model('Item', itemSchema);

// Export the Item model
module.exports = Item;
