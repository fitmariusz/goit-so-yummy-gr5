require("dotenv").config();
const Recipe = require("../../models/recipes");
const { DEFAULT_LIMIT_PER_PAGE } = require("../../variables/variables");

const findRecipeById = async (req, res, next) => { 
    try {
        const recipe = await Recipe.findById(req.params.id);
        res.json(recipe);

    } catch (error) {
      next(error);
    }
};

const findRecipesByText = async (req, res, next) => { 
    try {
        console.log(req.query.q);
        const recipes = await Recipe.find({ title: { $regex: req.query.q } });
        // const recipes = await Recipe.find({ title: "Spaghetti Bolognese" });
        res.json(recipes);
    } catch (error) {
      next(error);
    }
};

module.exports = { findRecipeById, findRecipesByText };