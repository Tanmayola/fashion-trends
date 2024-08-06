const express = require("express");
const rootcontroller = require("../controllers/rootcontroller");
const router = express.Router(); // Correctly instantiate Router

router.get("/", rootcontroller);

module.exports = router;
