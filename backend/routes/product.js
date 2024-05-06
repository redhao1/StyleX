const express = require("express");
const mongoose = require("mongoose");
const Schemas = require("../schemas");

const router = express.Router();

router.get("/getProductsByCategory", async (req, res) => {
    const genderCategory = await Schemas.GenderCategory.findOne({ _id: new mongoose.Types.ObjectId(req.query.id) })
    const gender = await Schemas.Gender.findOne({ _id: genderCategory.gender });
    const category = await Schemas.Category.findOne({ _id: genderCategory.category });

    const categoryId = req.query.id;
    const paddedCategoryId = categoryId.padEnd(24, '0');
    const result = await Schemas.Product.find({productCategory: new mongoose.Types.ObjectId(paddedCategoryId)});

    res.status(200).json({ message: 'Products fetched successfully.', result: result, gender: gender.name, category: category.name });
});

router.get("/getProductById", async (req, res) => {
    const productId = req.query.id;
    const paddedProductId = productId.padEnd(24, '0');
    const result = await Schemas.Product.findOne({_id: new mongoose.Types.ObjectId(paddedProductId)});
    res.send(result);
});

router.get("/getNewProducts", async (req, res) => {
  try {
    const category = await Schemas.Category.findOne({ _id: new mongoose.Types.ObjectId(req.query.id) });

    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
    const genderCategory = await Schemas.GenderCategory.find({ category: new mongoose.Types.ObjectId(req.query.id) });
    const result = await Schemas.Product.find({
      $or: genderCategory.map(row => ({
        productCategory: new mongoose.Types.ObjectId(row._id),
        addedAt: { $gte: sevenDaysAgo }
      }))
    });
    
    if (result.length) {
      res.status(200).json({ message: 'New products fetched successfully.', result: result, category: category.name });
    } else {
      res.status(404).json({ message: 'No new products.', result: result, category: category.name });
    }
  } catch (error) {
      res.status(500).json({ message: 'Error fetching products:', error: error.message });
  }
});

router.get("/getBestProducts", async (req, res) => {
  try {
    const category = await Schemas.Category.findOne({ _id: new mongoose.Types.ObjectId(req.query.id) });

    const genderCategory = await Schemas.GenderCategory.find({ category: new mongoose.Types.ObjectId(req.query.id) });

    if (!genderCategory) {
      return res.status(404).json({ error: 'Gender category not found.' });
    }

    const genderCategoryId = genderCategory.map((row) => (row._id));

    const topSellingProducts = await Schemas.Order.aggregate([
      { $group: { _id: '$productId', totalQuantity: { $sum: '$quantity' } } },
      { $sort: { totalQuantity: -1 } },
      { $limit: 5 }
    ]);

    if (topSellingProducts.length) {
      const productIds = topSellingProducts.map(item => item._id);
      const products = await Schemas.Product.find({ _id: { $in: productIds }, productCategory: { $in: genderCategoryId } });
      res.status(200).json({ error: 'Products fetched successfully.', result: products, category: category.name });
    } else {
      res.status(404).json({ error: 'No products to fetch.', result: products, category: category.name });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.get("/getProductsByGender", async (req, res) => {
  try {
    const gender = await Schemas.Gender.findOne({ _id: new mongoose.Types.ObjectId(req.query.id) });

    const genderCategory = await Schemas.GenderCategory.find({ gender: new mongoose.Types.ObjectId(req.query.id) });

    if (!genderCategory || genderCategory.length === 0) {
      return res.status(404).json({ error: 'Gender category not found.' });
    }

    const genderCategoryId = genderCategory.map((row) => (row._id));

    const result = await Schemas.Product.find({ productCategory: { $in: genderCategoryId } });

    if (result.length) {
      res.status(200).json({ error: 'Products fetched successfully.', result: result, gender: gender.name });
    } else {
      res.status(404).json({ error: 'No products to fetch.', result: result, gender: gender.name });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.get("/getProductsByCategoryId", async (req, res) => {
  try {
    const category = await Schemas.Category.findOne({ _id: new mongoose.Types.ObjectId(req.query.id) });

    const genderCategory = await Schemas.GenderCategory.find({ category: new mongoose.Types.ObjectId(req.query.id) });

    if (!genderCategory || genderCategory.length === 0) {
      return res.status(404).json({ error: 'Gender category not found.' });
    }

    const genderCategoryId = genderCategory.map((row) => (row._id));

    const result = await Schemas.Product.find({ productCategory: { $in: genderCategoryId } });

    if (result.length) {
      res.status(200).json({ error: 'Products fetched successfully.', result: result, category: category.name });
    } else {
      res.status(404).json({ error: 'No products to fetch.', result: result, category: category.name });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.get("/getRecentProducts", async (req, res) => {
  try {
    const product = await Schemas.Product.findOne({ _id: new mongoose.Types.ObjectId(req.query.productId) });
    const result = await Schemas.Product.aggregate([
      {
        $match: {
          productCategory: product.productCategory,
        },
      },
      { $sample: { size: 7 } },
      {
        $project: {
          title: 1,
          image: {
            $arrayElemAt: ["$variants.images", 0],
          },
        },
      },
      {
        $project: {
          title: 1,
          image: { $arrayElemAt: ["$image", 0] },
        },
      },
    ]);

    if (result.length) {
      res.status(200).json({ message: 'Random 7 products fetched successfully.', result: result });
    } else {
      res.status(404).json({ message: 'No products found for the given category.' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error fetching products:', error: error.message });
  }
});

router.get("/getRandomProducts", async (req, res) => {
  try {
    const result = await Schemas.Product.aggregate([
      { $sample: { size: 4 } },
      {
        $project: {
          title: 1,
          image: {
            $arrayElemAt: ["$variants.images", 0],
          },
        },
      },
      {
        $project: {
          title: 1,
          image: { $arrayElemAt: ["$image", 0] },
        },
      },
    ]);

    if (result.length) {
      res.status(200).json({ message: 'Random 7 products fetched successfully.', result: result });
    } else {
      res.status(404).json({ message: 'No products found for the given category.' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error fetching products:', error: error.message });
  }
});

module.exports = router;