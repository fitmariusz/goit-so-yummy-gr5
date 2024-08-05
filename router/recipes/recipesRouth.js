const express = require("express");
const router = express.Router();
// const { jwtAuth } = require("../../middlewares/jwtMiddleware");
const { getCategiriesList } = require("../../controlers/categoriesList/categoiresListIndex");
const recipeFunction = require("../../controlers/recipes/recipesIndex");


router.get("/category-list", getCategiriesList);
router.get("/search", recipeFunction.findRecipesByText);
router.get('/:id', recipeFunction.findRecipeById);


module.exports = router;
