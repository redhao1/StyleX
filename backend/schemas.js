const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Gender = mongoose.model("Gender", new Schema({}, {strict: false}));
const Category = mongoose.model("Category", new Schema({}, {strict: false}), "categories");
const genderCategoriesSchema = new Schema({}, {strict: false});
const GenderCategory = mongoose.model("GenderCategories", genderCategoriesSchema, "genderCategories");
const Product = mongoose.model("Product", new Schema({}, {strict: false}));

const orderSchema = new Schema({
    productId: { type: Schema.Types.ObjectId, required: true },
    sku: { type: String, required: true },
    quantity: { type: Number, required: true},
    userId: { type: Schema.Types.ObjectId, required: true },
    billingId: { type: Schema.Types.ObjectId, required: true },
    paymentId: { type: Schema.Types.ObjectId, required: true },
    status: { type: String, required: true },
});
const Order = mongoose.model("Order", orderSchema, "orders");

const rentProducts = new Schema({
    productId: { type: Schema.Types.ObjectId, required: true },
    sku: { type: String, required: true },
    quantity: { type: Number, required: true},
    userId: { type: Schema.Types.ObjectId, required: true },
    billingId: { type: Schema.Types.ObjectId, required: true },
    paymentId: { type: Schema.Types.ObjectId, required: true },
    status: { type: String, required: true },
});
const RentProducts = mongoose.model("RentProducts", rentProducts, "rentProducts");

const newsletterSchema = new Schema({
    email: { type: String, required: true },
    date: { type: Date, required: true },
});
const Newsletter = mongoose.model("Newsletter", newsletterSchema, "newsletter");

module.exports = {
    Gender: Gender,
    Category: Category,
    Product: Product,
    GenderCategory: GenderCategory,
    Order: Order,
    Newsletter: Newsletter,
    RentProducts: RentProducts,
};
