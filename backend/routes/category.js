const express = require("express");
const mongoose = require("mongoose");
const Schemas = require("../schemas");

const router = express.Router();

router.get("/getCategoriesByGender", async(req, res) => {
    const genderId = req.query.id;
    const paddedGenderId = genderId.padEnd(24, '0');
    const result = await Schemas.GenderCategory.aggregate([
        {
          $match: { gender: new mongoose.Types.ObjectId(paddedGenderId) }
        },
        {
          $lookup: {
            from: 'categories',
            localField: 'category',
            foreignField: '_id',
            as: 'categoryInfo'
          }
        },
        {
          $unwind: '$categoryInfo'
        },
        {
            $project: {
                '_id': 0,
                categoryId: '$categoryInfo._id',
                categoryName: '$categoryInfo.name',
                genderCategoryId: '$_id',
            }
        }      
    ]);

    res.send(result);
});

router.get("/getCategories", async(req, res) => {
  const result = await Schemas.Category.find({});
  res.send(result);
});

module.exports = router;