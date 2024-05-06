const express = require("express");
const mongoose = require("mongoose");
const Schemas = require("../schemas");

const router = express.Router();


router.get("/getGenders", async (req, res) => {
    const data = await Schemas.Gender.find({});
    res.send(data);
});

module.exports = router;