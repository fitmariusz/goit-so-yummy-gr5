const express = require("express");
const router = express.Router();
// const { jwtAuth } = require("../../middlewares/jwtMiddleware");
const {
  getCategiriesList,
} = require("../../controlers/categoriesList/categoiresListIndex");
const recipeFunction = require("../../controlers/recipes/recipesIndex");

router.get("/category-list", getCategiriesList);
router.get("/search", recipeFunction.findRecipesByText);
router.get("/category/:category", recipeFunction.findRecipesByCategory);
router.get("/id/:id", recipeFunction.findRecipeById);
router.post("/ownRecipes", recipeFunction.insertRecipe);
router.delete("/ownRecipes", recipeFunction.remoweRecipe);

module.exports = router;
