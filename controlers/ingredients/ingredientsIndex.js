require("dotenv").config();
const Recipe = require("../../models/recipes");
const Ingredients = require("../../models/ingredients");

const getIngredientsFromRecipe = async (req, res, next) => {
  const recipe = await Recipe.findById(req.body.id);
  console.log(recipe.ingredients);
  if (!recipe) {
    res.json({
      status: "error",
      code: 400,
      messager: "Not find recipe",
    });
  } else {
    res.json({
      status: "success",
      code: 200,
      ingredients: recipe.ingredients,
    });
  }
};

const getRecipesByIngredient = async (req, res, next) => {
  try {
    let ingresientId;
    if (!req.body.nameIngredient) {
      res.json({
        ststus: "error",
        cose: 400,
        message: "Must send ingredient name",
      });
    } else {
      try {
        ingresientId = await Ingredients.find(
          { ttl: new RegExp(req.body.nameIngredient, "i") },
          "_id"
        );
      } catch (error) {}
    }
    console.log(ingresientId);
    const recipes = await Recipe.find({
      "ingredients.id": ingresientId,
    }).exec();
    res.json({
      status: "success",
      code: 200,
      recipes,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getIngredientsFromRecipe,
  getRecipesByIngredient,
};
