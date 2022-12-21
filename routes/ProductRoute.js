const express = require("express");
const { getAllCategory, createCategory } = require("../controller/Productontroller");

const router = express.Router();

router.route("/category").get(getAllCategory).post(createCategory);

module.exports = router;