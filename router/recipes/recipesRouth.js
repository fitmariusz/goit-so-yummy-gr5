const express = require("express");
const router = express.Router();
// const { jwtAuth } = require("../../middlewares/jwtMiddleware");
const { getCategiriesList } = require("../../controlers/categoriesList/categoiresList");


router.get("/category-list", getCategiriesList);


module.exports = router;
