require("dotenv").config();
const Recipe = require("../../models/recipes");

const addToFavorite = async (req, res, next) => {
    if(req.params.recipeId;
  const result = await Recipe.updateOne(
    { _id: req.params.recipeId},
    { $push: { favorites: { $each: newFavorites } } }
  ).exec();
};

module.exports = { addToFavorite };