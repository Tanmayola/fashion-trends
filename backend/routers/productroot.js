const express = require("express");
const Productcontroller = require("../controllers/products/getproductcontroller");
const router = express.Router(); // Correctly instantiate Router

router.get("/fashiontrends", Productcontroller);

module.exports = router;
