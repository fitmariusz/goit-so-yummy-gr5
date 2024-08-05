const express = require("express");
const router = express.Router();
// const { jwtAuth } = require("../../middlewares/jwtMiddleware");
const { getCategiriesList } = require("../../controlers/categoriesList/categoiresListIndex");
const { findRecipeById } = require("../../controlers/recipes/recipesIndex");


router.get("/category-list", getCategiriesList);
router.get('/:id', findRecipeById)

module.exports = router;
