const express = require("express");
const router = express.Router();
const { jwtAuth } = require("../../middlewares/jwtMiddleware");
const {
  getIngredientsFromRecipe,
  getRecipesByIngredient,
  getIngredientsInfo,
} = require("../../controlers/ingredients/ingredientsIndex");

router.get("/", jwtAuth, getRecipesByIngredient);
router.get("/list", jwtAuth, getIngredientsFromRecipe);
router.get("/Id/:ingredientId", getIngredientsInfo);


module.exports = router;
