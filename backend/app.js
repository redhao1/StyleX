const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const passport = require("passport");
const strategy = require("passport-local");
const bodyParser = require("body-parser");
const session = require("express-session");
const genderRoutes = require("./routes/gender");
const productRoutes = require("./routes/product");
const categoryRoutes = require("./routes/category");
const sidebarRoutes = require("./routes/sidebar");
const Schemas = require("./schemas");

const app = express();

app.use("/Gender", genderRoutes);
app.use("/Category", categoryRoutes);
app.use("/Product", productRoutes);
app.use("/Sidebar", sidebarRoutes);

app.use(express.static(path.join(__dirname, 'frontend')));
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(session({
    secret: "StyleX@Glitch",
    resave: false,
    saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());
const uri = "mongodb://localhost:27017/StyleX";
const Schema = mongoose.Schema;

//Database Connection
async function mongoConnect() {
    try {
        await mongoose.connect(uri);
        console.log("Mongo connected.");
    } catch (error) {
        console.log("Mongo not connected.", error);
    }
}
mongoConnect();


async function isUserAuthenticated (req, res) {
    if (req.isAuthenticated()) {
        res.status(200).json({success: true});
    } else {
        res.status(401).json({success: false});
    }
}





//User Schema
const userSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: {type: String, required: true},
});
const User = mongoose.model("User", userSchema, "users");





//Cart Schema
const cartSchema = new Schema({
    productId: { type: Schema.Types.ObjectId, required: true },
    sku: { type: String, required: true },
    quantity: { type: Number, required: true},
    userId: { type: Schema.Types.ObjectId, required: true },
});
const Cart = mongoose.model("Cart", cartSchema, "cart");

app.post("/addToCart", async (req, res) => {
    try {
        if (!req.isAuthenticated()) {
            return res.status(401).json({ success: false, message: "User not authenticated." });
        }

        const email = req.session.email;
        const user = await User.findOne({ email: email });
        if (!user) {
            return res.status(404).json({ success: false, message: "User not found." });
        }

        const existingCartItem = await Cart.findOne({
            productId: req.body.productId,
            sku: req.body.sku,
            userId: user._id,
        });
        if (existingCartItem) {
            return res.status(400).json({ success: false, message: "Item already exists in the cart." });
        }

        const item = new Cart({
            productId: req.body.productId,
            sku: req.body.sku,
            quantity: req.body.quantity,
            userId: user._id,
        });
        await item.save();
        res.status(200).json({ success: true, message: "Item added to cart." });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, error: "Internal Server Error" });
    }
});

app.get("/getItems", async (req, res) => {
    try {
        if (!req.isAuthenticated()) {
            return res.status(401).json({ success: false, message: "User not authenticated." });
        }

        const email = req.session.email;
        const user = await User.findOne({ email: email });
        if (!user) {
            return res.status(404).json({ success: false, message: "User not found." });
        }

        const userId = user._id;
        const cartItems = await Cart.find({ userId: userId });

        const productIds = cartItems.map(item => item.productId);
        const skus = cartItems.map(item => item.sku);

        const products = await Schemas.Product.find({
            $or: [
                { _id: { $in: productIds } },
                { 'variants.info.sku': { $in: skus } }
            ]
        });

        const cartWithProductDetails = cartItems.map(cartItem => {
            const product = products.find(product => product._id.equals(cartItem.productId));
            const variant = product.variants.find(variant => variant.info.some(info => info.sku === cartItem.sku));
            const sizeObj = variant.info.find(info => info.sku === cartItem.sku);
            const { title } = product;
            const { color } = variant;
            const image = variant.images[0];
            const { size, price } = sizeObj;
            return {
                ...cartItem.toObject(),
                title,
                color,
                size,
                price,
                image,
            };
        });
        res.send(cartWithProductDetails);
    } catch (error) {
        res.status(500).json({ success: false, message: "Error getting cart items." });
    }
});

app.get("/getProduct", async (req, res) => {
    try {
        const product = await Schemas.Product.findOne({ _id: new mongoose.Types.ObjectId("65f2bdcaaa9552bd1ed8cbaa") });

        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }

        const variant = product.variants.find(v => v.info.some(info => info.sku == req.query.productSKU));

        if (!variant) {
            return res.status(404).json({ error: 'Variant not found' });
        }

        const { title } = product;
        const { color } = variant;
        const { size, price } = variant.info.find(info => info.sku == req.query.productSKU);

        res.status(200).json({ success: false, message: "Error getting cart items.", result: { title, color, price, size } });
    } catch (error) {
        res.status(500).json({ success: false, message: "Error getting cart items." });
    }
});

app.post("/rentProduct", async (req, res) => {
    try {
        if (!req.isAuthenticated()) {
            return res.status(401).json({ success: false, message: "User not authenticated." });
        }

        const newBill = new Billing({
            firstName: req.body.billingForm.firstName,
            lastName: req.body.billingForm.lastName,
            email: req.body.billingForm.email,
            telephone: req.body.billingForm.telephone,
            address: req.body.billingForm.address,
            city: req.body.billingForm.city,
            postCode: req.body.billingForm.postCode,
            country: new mongoose.Types.ObjectId(req.body.billingForm.country),
            state:  new mongoose.Types.ObjectId(req.body.billingForm.state),
        });

        if (req.body.billingForm.apartment) {
            newBill.apartment = req.body.billingForm.apartment;
        }

        const savedBill = await newBill.save();

        const dateObject = new Date(req.body.paymentForm.expDate);
        const expdate = dateObject.toISOString();

        const newPayment = new Payment({
            nameOnCard: req.body.paymentForm.nameOnCard,
            cardType: req.body.paymentForm.cardType,
            cardNumber: req.body.paymentForm.cardNumber,
            cvv: req.body.paymentForm.cvv,
            expdate: expdate,
            totalPrice: req.body.totalPrice,
        });

        const savedPayment = await newPayment.save();

        if (!savedBill || !savedPayment) {
            return res.status(404).json({ success: false, message: "Error inserting bill & payment." });
        }

        const userId = await requestUserId(req, res);

        const result = await Schemas.RentProducts.create({
            productId: req.body.productId,
            sku: req.body.productSKU,
            quantity: 1,
            userId: userId,
            billingId: savedBill._id,
            paymentId: savedPayment._id,
            status: "Product Rented",
        });
        
        return res.status(200).json({ message: 'Order placed successfully.' });
    } catch (error) {
        console.error('Error placing order:', error);
        res.status(500).json({ success: false, message: "Error placing the order." });
    }
});





//Rent Plan Schema
const rentPlanSchema = new Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
});
const RentPlans = mongoose.model("RentPlans", rentPlanSchema, "rentPlans");

//Subscribers Schema
const subscribersSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, required: true },
    planId: { type: Schema.Types.ObjectId, required: true },
    purchasedDate: { type: Date, required: true },
    paymentId: { type: Schema.Types.ObjectId, required: true }
});
const Subscribers = mongoose.model("Subscribers", subscribersSchema, "subscribers");

app.get("/getRentPlan", async (req, res) => {
    try {
        const result = await RentPlans.findOne({ _id: req.query.planId });
        if (result) {
            res.status(200).json({ success: false, result: result });
        } else {
            res.status(404).json({ success: false, result: result });   
        }
    } catch (error) {
        res.status(500).json({ success: false, message: "Error getting cart items." });
    }
});

app.post("/subscribe", async (req, res) => {
    try {
        const userId = await requestUserId(req, res);

        const dateObject = new Date(req.body.paymentForm.expDate);
        const expdate = dateObject.toISOString();

        const newPayment = new Payment({
            nameOnCard: req.body.paymentForm.nameOnCard,
            cardType: req.body.paymentForm.cardType,
            cardNumber: req.body.paymentForm.cardNumber,
            cvv: req.body.paymentForm.cvv,
            expdate: expdate,
            totalPrice: req.body.totalPrice,
        });

        const savedPayment = await newPayment.save();

        const result = await Subscribers.findOneAndUpdate(
            { userId: userId },
            { $set: { planId: new mongoose.Types.ObjectId(req.body.planId), paymentId: savedPayment._id } },
            { upsert: true }
        );

        if (result) {
            res.status(200).json({ success: false, result: result });
        } else {
            //res.status(404).json({ success: false, result: result });
        }
    } catch (error) {
        res.status(500).json({ success: false, message: "Error" });
    }
});

app.get("/checkSubscriptions", async (req, res) => {
    try {
        const userId = await requestUserId(req, res);

        if (!userId) {
            res.status(404).json({ success: false });
        }

        const result = await Subscribers.findOne(
            { userId: userId },
        );

        if (result) {
            if (result.planId != "" ) {
                res.status(200).json({ success: false });
            } else {
                res.status(404).json({ success: false });
            }
        } else {
            res.status(404).json({ success: false });
        }
    } catch (error) {
        res.status(500).json({ success: false, message: "Error" });
    }
});





app.post("/incrementQuantity", async (req, res) => {
    if (!req.isAuthenticated()) {
        return res.status(401).json({ success: false, message: "User not authenticated." });
    }

    const email = req.session.email;
    const user = await User.findOne({ email: email });
    if (!user) {
        return res.status(404).json({ success: false, message: "User not found." });
    }

    const updatedCartItem = await Cart.findOneAndUpdate(
        { productId: req.body.productId, userId: user._id, sku: req.body.sku },
        { $inc: { quantity: 1 } }, // Increment the quantity by one using $inc operator
    );
    
    if (!updatedCartItem) {
        return res.status(404).json({ success: false, message: "Cart item not found." });
    }
    
    res.status(200).json({ success: true, message: "Cart item quantity incremented successfully."});
});

app.post("/decrementQuantity", async (req, res) => {
    if (!req.isAuthenticated()) {
        return res.status(401).json({ success: false, message: "User not authenticated." });
    }

    const email = req.session.email;
    const user = await User.findOne({ email: email });
    if (!user) {
        return res.status(404).json({ success: false, message: "User not found." });
    }

    const updatedCartItem = await Cart.findOneAndUpdate(
        { productId: req.body.productId, userId: user._id, sku: req.body.sku },
        { $inc: { quantity: -1 } }, // Increment the quantity by one using $inc operator
    );
    
    if (!updatedCartItem) {
        return res.status(404).json({ success: false, message: "Cart item not found." });
    }
    
    res.status(200).json({ success: true, message: "Cart item quantity incremented successfully."});
});

app.post("/deleteItem", async (req, res) => {
    try {
        if (!req.isAuthenticated()) {
            return res.status(401).json({ success: false, message: "User not authenticated." });
        }
    
        const email = req.session.email;
        const user = await User.findOne({ email: email });
        if (!user) {
            return res.status(404).json({ success: false, message: "User not found." });
        }

        const deletedItem = await Cart.findOneAndDelete({
            userId: user._id,
            productId: req.body.productId,
            sku: req.body.sku,
        });

        if (!deletedItem) {
            throw new Error('Cart item not found.');
        }

        res.status(200).json({ success: true, message: "Cart item deleted successfully."});
    } catch {
        console.log("Error deleting cart item.");
    }
});

app.get("/countCartItems", async (req, res) => {
    try {
        const userId = await requestUserId(req, res);

        const cartItems = await Cart.find({ userId: userId });
    
        if (cartItems.length > 0) {
            res.status(200).send({ success: true, message: 'Items are in the cart'});
        } else {
            res.status(404).send({ success: true, message: 'No items in the cart for the user'});
        }
    } catch (error) {
        res.status(500).send({ success: false, message: 'Error checking cart'});
    }
});





//Billing Schema
const billingSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true},
    telephone: { type: String, required: true },
    address: { type: String, required: true },
    apartment: { type: String, required: false },
    city: { type: String, required: true},
    postCode: { type: String, required: true },
    country: { type: Schema.Types.ObjectId, required: true },
    state: { type: Schema.Types.ObjectId, required: true },
});
const Billing = mongoose.model("Billing", billingSchema, "billing");

//Payment Schema
const paymentSchema = new Schema({
    nameOnCard: { type: String, required: true },
    cardType: { type: String, required: true },
    cardNumber: { type: String, required: true},
    cvv: { type: Number, required: true },
    expdate: { type: Date, required: true },
    totalPrice: { type: Number, required: true },
});
const Payment = mongoose.model("Payment", paymentSchema, "payment");

app.post("/placeOrder", async (req, res) => {
    try {
        if (!req.isAuthenticated()) {
            return res.status(401).json({ success: false, message: "User not authenticated." });
        }

        const newBill = new Billing({
            firstName: req.body.billingForm.firstName,
            lastName: req.body.billingForm.lastName,
            email: req.body.billingForm.email,
            telephone: req.body.billingForm.telephone,
            address: req.body.billingForm.address,
            city: req.body.billingForm.city,
            postCode: req.body.billingForm.postCode,
            country: new mongoose.Types.ObjectId(req.body.billingForm.country),
            state:  new mongoose.Types.ObjectId(req.body.billingForm.state),
        });

        if (req.body.billingForm.apartment) {
            newBill.apartment = req.body.billingForm.apartment;
        }

        const savedBill = await newBill.save();

        const dateObject = new Date(req.body.paymentForm.expDate);
        const expdate = dateObject.toISOString();

        const newPayment = new Payment({
            nameOnCard: req.body.paymentForm.nameOnCard,
            cardType: req.body.paymentForm.cardType,
            cardNumber: req.body.paymentForm.cardNumber,
            cvv: req.body.paymentForm.cvv,
            expdate: expdate,
            totalPrice: req.body.totalPrice,
        });

        const savedPayment = await newPayment.save();

        if (!savedBill || !savedPayment) {
            return res.status(404).json({ success: false, message: "Error inserting bill & payment." });
        }

        const userId = await requestUserId(req, res);

        const cartItems = await Cart.find({ userId: userId });

        if (!cartItems || cartItems.length === 0) {
            return res.status(404).json({ message: 'No items found in cart for the user.' });
        }

        const modifiedCartItems = cartItems.map(item => ({
            productId: item.productId,
            sku: item.sku,
            quantity: item.quantity,
            userId: item.userId,
            billingId: savedBill._id,
            paymentId: savedPayment._id,
            status: "Order Placed",
        }));

        await Schemas.Order.insertMany(modifiedCartItems);
        await Cart.deleteMany({ userId });

        return res.status(200).json({ message: 'Order placed successfully.' });
    } catch (error) {
        console.error('Error placing order:', error);
        res.status(500).json({ success: false, message: "Error placing the order." });
    }
});

app.get("/isItemInCart", async (req, res) => {    
    const userId = await requestUserId(req, res);

    const result = await Cart.findOne({
        productId: req.query.productId,
        sku: req.query.sku,
        userId: userId,
    });

    if (result !== null) {
        return res.status(200).json({ success: true, message: "Item already in cart." });
    }
    return res.status(400).json({ success: false, message: "Item not found in cart." });
});


async function requestUserId (req, res) {
    if (!req.isAuthenticated()) {
        //return res.status(401).json({ success: false, message: "User not authenticated." });
        throw new Error("User not authenticated.");
    }

    const email = req.session.email;
    const user = await User.findOne({ email: email });
    if (!user) {
        //return res.status(404).json({ success: false, message: "User not found." });
        throw new Error("User not found.");
    }

    return user._id;
}





//User Details Schema
const userDetails = new Schema({
    telephone: { type: String, required: true },
    addressLine1: { type: String, required: true },
    addressLine2: { type: String, required: false },
    apartment: {type: String, required: false},
    city: { type: String, required: true },
    state: { type: mongoose.Types.ObjectId, required: true },
    country: { type: mongoose.Types.ObjectId, required: true },
    postCode: {type: String, required: true},
    userId: { type: mongoose.Types.ObjectId, required: true },
});
const UserDetails = mongoose.model("UserDetails", userDetails, "userDetails");



app.get("/getUserDetails", async (req, res) => {
    try {
        const userId = await requestUserId(req, res);
        
        const userDetails = await User.aggregate([
            {
                $match: { _id: new mongoose.Types.ObjectId(userId) }
            },
            {
                $lookup: {
                    from: "userDetails",
                    localField: "_id",
                    foreignField: "userId",
                    as: "userDetails"
                }
            },
            {
                $unwind: {
                    path: "$userDetails",
                    preserveNullAndEmptyArrays: true
                }
            },
            {
                $project: {
                    _id: 0,
                    firstName: 1,
                    lastName: 1,
                    email: 1,
                    telephone: { $ifNull: ['$userDetails.telephone', ''] },
                    addressLine1: { $ifNull: ['$userDetails.addressLine1', ''] },
                    addressLine2: { $ifNull: ['$userDetails.addressLine2', ''] },
                    apartment: { $ifNull: ['$userDetails.apartment', ''] },
                    city: { $ifNull: ['$userDetails.city', ''] },
                    state: { $ifNull: ['$userDetails.state', ''] },
                    country: { $ifNull: ['$userDetails.country', ''] },
                    postCode: { $ifNull: ['$userDetails.postCode', ''] },
                }
            }
        ]);

        if (userDetails.length > 0) {
            res.status(200).json({ error: 'User details fetched successfully.', result: userDetails[0] });
        } else {
            res.status(404).json({ error: 'No user details.', result: userDetails[0] });
        }
    } catch (err) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.post("/updateUserDetails", async (req, res) => {
    try {
        const userId = await requestUserId(req, res);
        const userUpdates = {
            firstName: req.body.userDetails.firstName,
            lastName: req.body.userDetails.lastName,
            email: req.body.userDetails.email,
        };

        const userDetailsUpdates = {
            telephone: req.body.userDetails.telephone,
            addressLine1: req.body.userDetails.addressLine1,
            addressLine2: req.body.userDetails.addressLine2,
            apartment: req.body.userDetails.apartment,
            city: req.body.userDetails.city,
            state: "",
            country: "",
            postCode: req.body.userDetails.postCode,
        };

        if (req.body.userDetails.state !== '') {
            userDetailsUpdates.state = new mongoose.Types.ObjectId(req.body.userDetails.state);
        }

        if (req.body.userDetails.country !== '') {
            userDetailsUpdates.country = new mongoose.Types.ObjectId(req.body.userDetails.country);
        }
        
        const updatedUser = await User.findOneAndUpdate(
            { _id: userId },
            userUpdates,
        );

        const updatedUserDetails = await UserDetails.findOneAndUpdate(
            { userId: userId },
            userDetailsUpdates,
            { upsert: true }
        );

        if (updatedUser && updatedUserDetails) {
            res.status(200).json({ error: null });
        } else {
            res.status(404).json({ error: 'User or user details not found.' });
        }
    } catch (err) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});









app.post("/subscribeNewsletter", async (req, res) => {
    try {
        const subscriber = await Schemas.Newsletter.findOne({email: req.body.email});
        if (subscriber != null) {
            return res.status(404).json({ success: false, message: "Already subscribed." });
        }
        
        const currentDate = new Date();
        const date = currentDate.toISOString()
        const newsletter = await Schemas.Newsletter({
            email: req.body.email,
            date: date,
        });

        const result = await newsletter.save();
        
        if (result != null) {
            return res.status(200).json({ success: true, message: "Newsletter subscribed successfully." });
        }
        return res.status(404).json({ success: false, message: "Can't subscribe newsletter at the moment." });
    } catch (error) {
        return res.status(500).json({ success: false, message: "Error subscribing newsletter." });
    }
});





//Wishlist Schema
const wishlistSchema = new Schema({
    productId: { type: Schema.Types.ObjectId, required: true },
    sku: { type: String, required: true },
    userId: { type: Schema.Types.ObjectId, required: true },
});
const Wishlist = mongoose.model("Wishlist", wishlistSchema, "wishlist");

app.post("/addToWishlist", async (req, res) => {
    try {
        const userId = await requestUserId(req, res);

        const existingWishlistItem = await Wishlist.findOne({
            productId: req.body.productId,
            sku: req.body.sku,
            userId: userId,
        });
        if (existingWishlistItem) {
            return res.status(400).json({ success: false, message: "Item already exists in the wishlist." });
        }

        const item = new Wishlist({
            productId: req.body.productId,
            sku: req.body.sku,
            userId: userId,
        });
        await item.save();
        res.status(200).json({ success: true, message: "Item added to wishlist." });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, error: "Internal Server Error" });
    }
});

app.get("/getWishlistItems", async (req, res) => {
    try {
        const userId = await requestUserId(req, res);

        const wishlistItems = await Wishlist.find({ userId: userId });

        const productIds = wishlistItems.map(item => item.productId);
        const skus = wishlistItems.map(item => item.sku);
        
        const products = await Schemas.Product.find({
            $or: [
                { _id: { $in: productIds } },
                { 'variants.info.sku': { $in: skus } }
            ]
        });

        const wishlistWithProductDetails = wishlistItems.map(wishlistItem => {
            const product = products.find(product => product._id.equals(wishlistItem.productId));
            const variant = product.variants.find(variant => variant.info.some(info => info.sku === wishlistItem.sku));
            const sizeObj = variant.info.find(info => info.sku === wishlistItem.sku);
            const { title } = product;
            const { color } = variant;
            const image = variant.images[0];
            const { size, price, stock } = sizeObj;
            return {
                ...wishlistItem.toObject(),
                title,
                color,
                size,
                price,
                stock,
                image,
            };
        });
        res.send(wishlistWithProductDetails);
    } catch (error) {
        res.status(500).json({ success: false, message: "Error getting wishlist items." });
    }
});

app.post("/deleteWishlistItem", async (req, res) => {
    try {
        const userId = await requestUserId(req, res);

        const deletedItem = await Wishlist.findOneAndDelete({
            userId: userId,
            productId: req.body.productId,
            sku: req.body.sku,
        });

        if (!deletedItem) {
            throw new Error('Wishlist item not found.');
        }

        res.status(200).json({ success: true, message: "Wishlist item deleted successfully."});
    } catch {
        console.log("Error deleting wishlist item.");
    }
});

app.get("/isItemInWishlist", async (req, res) => {    
    const userId = await requestUserId(req, res);

    const result = await Wishlist.findOne({
        productId: req.query.productId,
        sku: req.query.sku,
        userId: userId,
    });

    if (result !== null) {
        return res.status(200).json({ success: true, message: "Add item to wishlist." });
    }
    return res.status(400).json({ success: false, message: "Item already exists in the wishlist." });
});

app.get("/getOrderItems", async (req, res) => {
    try {
        const userId = await requestUserId(req, res);

        const orderItems = await Schemas.Order.find({ userId: userId });
        
        const rentedItems = await Schemas.RentProducts.find({ userId: userId });

        const productIds = [
            ...orderItems.map(item => item.productId),
            ...rentedItems.map(item => item.productId)
        ];

        const skus = [
            ...orderItems.map(item => item.sku),
            ...rentedItems.map(item => item.sku)
        ];
        
        const products = await Schemas.Product.find({
            $or: [
                { _id: { $in: productIds } },
                { 'variants.info.sku': { $in: skus } }
            ]
        });

        const itemsWithProductDetails = [...orderItems, ...rentedItems].map(item => {
            const product = products.find(product => product._id.equals(item.productId));
            const variant = product.variants.find(variant => variant.info.some(info => info.sku === item.sku));
            const sizeObj = variant.info.find(info => info.sku === item.sku);
            const { title } = product;
            const { color } = variant;
            const image = variant.images[0];
            const { size, price, stock } = sizeObj;
            return {
                ...item.toObject(),
                title,
                color,
                size,
                price,
                stock,
                image,
            };
        });
        res.send(itemsWithProductDetails);
    } catch (error) {
        res.status(500).json({ success: false, message: "Error getting wishlist items." });
    }
});





const countriesSchema = new Schema({
    name: { type: String, required: true },
});
const Countries = mongoose.model("Countries", countriesSchema, "countries");

app.get("/getCountries", async (req, res) => {
    const result = await Countries.find();
    if (result.length) {
        return res.status(200).json({ success: true, message: "Countries fetched successfully.", countries: result });
    }
    return res.status(400).json({ success: false, message: "Error fetching countries." });
});

const statesSchema = new Schema({
    name: { type: String, required: true },
    CountryId: { type: Schema.Types.ObjectId, required: true },
});
const States = mongoose.model("States", statesSchema, "states");

app.get("/getStates", async (req, res) => {
    const result = await States.find();
    if (result.length) {
        return res.status(200).json({ success: true, message: "States fetched successfully.", states: result });
    }
    return res.status(400).json({ success: false, message: "Error fetching states." });
});





app.get("/isUserAuthenticated", async (req, res) => {
    await isUserAuthenticated(req, res);
});

app.post("/Login", passport.authenticate("local"), (req, res) => {
    req.session.email = req.user.email;
    res.status(200).json({success: true, message: "Login Successful"});
});

app.post("/Register", async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const newUser = new User({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: hashedPassword,
        });
        await newUser.save();
        res.status(200).json({ success: true, message: "User Successfully Registered" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, error: "Internal Server Error" });
    }
});


app.get("/logoutUser", async (req, res) => {
    req.logOut((error) => {
        if (error) {
            res.status(400).json({success: false});
            console.log(error);
        } else {
            res.status(200).json({success: true});
        }
    });
});

passport.use(new strategy(async (username, password, cb) => {
    try {
        const user = await User.findOne({email: username});
        if (!user) {
            console.log("User not found.")
            return cb(null, false, {message: "User not found."});
        } else {
            const activeUser = await bcrypt.compare(password, user.password);
            if (!activeUser) {
                console.log("Invalid Credentials.");
                return cb(null, false, {message: "Invalid Credentials."});
            } else {
                return cb(null, user);
            }
        };
    } catch (error) { 
        console.log(error);
        return cb(error);
    }
}));


passport.serializeUser((user, cb) => {
    cb(null, user);
});

passport.deserializeUser((user, cb) => {
    cb(null, user);
});

//Server Port
app.listen(3000, () => {
    console.log(`Server started on port: ${3000}`);
});
