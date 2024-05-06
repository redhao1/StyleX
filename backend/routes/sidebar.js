const express = require("express");
const mongoose = require("mongoose");
const Schemas = require("../schemas");

const router = express.Router();

router.get("/getColorsFromProducts", async (req, res) => {
    const id = req.query.id;
    const result = await Schemas.Product.distinct('variants.color', {productCategory: new mongoose.Types.ObjectId(id)});
    res.send(result);
});

router.get("/getSizesFromProducts", async (req, res) => {
    const id = req.query.id;
    const result = await Schemas.Product.distinct('variants.info.size', {productCategory: new mongoose.Types.ObjectId(id)});
    res.send(result);
});

router.get("/getBrandsFromProducts", async (req, res) => {
    const id = req.query.id;
    const result = await Schemas.Product.distinct('brand', {productCategory: new mongoose.Types.ObjectId(id)});
    res.send(result);
});

router.get("/getPricesFromProducts", async (req, res) => {
    const id = req.query.id;
    const result = await Schemas.Product.aggregate([
        {
          $match: { productCategory: new mongoose.Types.ObjectId(id) }
        },
        {
          $unwind: "$variants"
        },
        {
          $unwind: "$variants.info"
        },
        {
          $group: {
            _id: null,
            minPrice: { $min: "$variants.info.price" },
            maxPrice: { $max: "$variants.info.price" }
          }
        }
      ]);
      if (result.length) {
        res.status(200).json({ result });
      } else {
        res.status(404).json({ result });
      }
});





async function getGenderCategoryId (categoryId) {
  const result = await Schemas.GenderCategory.find({category: new mongoose.Types.ObjectId(categoryId)});
  return result;
}

router.get("/getNewArrivalsColorsFromProducts", async (req, res) => {
  const id = req.query.id;
  const genderCategories = await getGenderCategoryId(id);
  const categoryIds = genderCategories.map((row) => new mongoose.Types.ObjectId(row._id));
  const result = await Schemas.Product.distinct('variants.color', { productCategory: { $in: categoryIds } });
  res.send(result);
});

router.get("/getNewArrivalsSizesFromProducts", async (req, res) => {
  const id = req.query.id;
  const genderCategories = await getGenderCategoryId(id);
  const categoryIds = genderCategories.map((row) => new mongoose.Types.ObjectId(row._id));
  const result = await Schemas.Product.distinct('variants.info.size', {productCategory: { $in: categoryIds }});
  res.send(result);
});

router.get("/getNewArrivalsBrandsFromProducts", async (req, res) => {
  const id = req.query.id;
  const genderCategories = await getGenderCategoryId(id);
  const categoryIds = genderCategories.map((row) => new mongoose.Types.ObjectId(row._id));
  const result = await Schemas.Product.distinct('brand', {productCategory: { $in: categoryIds }});
  res.send(result);
});

router.get("/getNewArrivalsPricesFromProducts", async (req, res) => {
  const id = req.query.id;
  const genderCategories = await getGenderCategoryId(id);
  const categoryIds = genderCategories.map((row) => new mongoose.Types.ObjectId(row._id));
  const result = await Schemas.Product.aggregate([
      {
        $match: { productCategory: { $in: categoryIds } }
      },
      {
        $unwind: "$variants"
      },
      {
        $unwind: "$variants.info"
      },
      {
        $group: {
          _id: null,
          minPrice: { $min: "$variants.info.price" },
          maxPrice: { $max: "$variants.info.price" }
        }
      }
    ]);
    if (result.length) {
      res.status(200).json({ result });
    } else {
      res.status(404).json({ result });
    }
});





async function getGenderCategoryIdByGenderId (genderId) {
  const result = await Schemas.GenderCategory.find({gender: new mongoose.Types.ObjectId(genderId)});
  return result;
}

router.get("/getGenderColorsFromProducts", async (req, res) => {
  const id = req.query.id;
  const genderCategories = await getGenderCategoryIdByGenderId(id);
  const categoryIds = genderCategories.map((row) => new mongoose.Types.ObjectId(row._id));
  const result = await Schemas.Product.distinct('variants.color', { productCategory: { $in: categoryIds } });
  res.send(result);
});

router.get("/getGenderSizesFromProducts", async (req, res) => {
  const id = req.query.id;
  const genderCategories = await getGenderCategoryIdByGenderId(id);
  const categoryIds = genderCategories.map((row) => new mongoose.Types.ObjectId(row._id));
  const result = await Schemas.Product.distinct('variants.info.size', {productCategory: { $in: categoryIds }});
  res.send(result);
});

router.get("/getGenderBrandsFromProducts", async (req, res) => {
  const id = req.query.id;
  const genderCategories = await getGenderCategoryIdByGenderId(id);
  const categoryIds = genderCategories.map((row) => new mongoose.Types.ObjectId(row._id));
  const result = await Schemas.Product.distinct('brand', {productCategory: { $in: categoryIds }});
  res.send(result);
});

router.get("/getGenderPricesFromProducts", async (req, res) => {
  const id = req.query.id;
  const genderCategories = await getGenderCategoryIdByGenderId(id);
  const categoryIds = genderCategories.map((row) => new mongoose.Types.ObjectId(row._id));
  const result = await Schemas.Product.aggregate([
      {
        $match: { productCategory: { $in: categoryIds } }
      },
      {
        $unwind: "$variants"
      },
      {
        $unwind: "$variants.info"
      },
      {
        $group: {
          _id: null,
          minPrice: { $min: "$variants.info.price" },
          maxPrice: { $max: "$variants.info.price" }
        }
      }
    ]);
    if (result.length) {
      res.status(200).json({ result });
    } else {
      res.status(404).json({ result });
    }
});
module.exports = router;