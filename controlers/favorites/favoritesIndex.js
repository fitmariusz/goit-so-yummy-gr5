require("dotenv").config();
const Recipe = require("../../models/recipes");

const addToFavorite = async (req, res, next) => {
  const result = await Recipe.updateOne(
    { _id: req.params.recipeId },
    { $push: { favorites: { $each: req.user._id } } }
  ).exec();
};

module.exports = { addToFavorite };
