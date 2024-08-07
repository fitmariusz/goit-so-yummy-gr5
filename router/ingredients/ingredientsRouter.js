const express = require("express");
const router = express.Router();
const { jwtAuth } = require("../../middlewares/jwtMiddleware");
const {
  getIngredientsFromRecipe,
  getRecipesByIngredient,
} = require("../../controlers/ingredients/ingredientsIndex");

router.get("/list", jwtAuth, getIngredientsFromRecipe);
router.get("/", jwtAuth, getRecipesByIngredient);

module.exports = router;