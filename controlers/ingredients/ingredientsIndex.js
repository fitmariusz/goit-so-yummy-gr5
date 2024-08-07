require("dotenv").config();
const Recipe = require("../../models/recipes");

const getIngredientsFromRecipe = async (req, res, next) => {
    
    const recipe = await Recipe.findById(req.body.id);
    console.log(recipe.ingredients);
    if (!recipe) {
        res.json(
            {
                status: "error",
                code: 400,
                messager:"Not find recipe",
            },
        );
    }else{
        res.json({
          status: "success",
          code: 200,
          ingredients: recipe.ingredients,
        });
        
    };
};

const getRecipesByIngredient = async (req, res, next) => {
  res.send(req.body);
};

module.exports = {
  getIngredientsFromRecipe,
  getRecipesByIngredient,
};
