const express = require("express");
const router = express.Router();
const {
  getCategiriesList,
} = require("../../controlers/categoriesList/categoiresListIndex");
const recipeFunction = require("../../controlers/recipes/recipesIndex");
const { jwtAuth } = require("../../middlewares/jwtMiddleware");

router.get("/category-list", jwtAuth, getCategiriesList);
router.get("/search", jwtAuth, recipeFunction.findRecipesByText);
router.get("/category/:category", jwtAuth, recipeFunction.findRecipesByCategory);
router.get("/id/:id", jwtAuth, recipeFunction.findRecipeById);
router.post("/ownRecipes", jwtAuth, recipeFunction.insertRecipe);
router.delete("/ownRecipes/:recipeId", jwtAuth, recipeFunction.remoweRecipe);
router.get("/ownRecipes", jwtAuth);

module.exports = router;
