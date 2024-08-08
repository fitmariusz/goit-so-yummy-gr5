require("dotenv").config();
const Recipe = require("../../models/recipes");

const getPopularRecipes = async (req, res, next) => {
  try {
    const recipes = await Recipe.aggregate([
      {
        $project: {
          name: 1,
          favoritCount: { $size: "$favorites" }, // Policz liczbę elementów w tablicy favorit
        },
      },
      {
        $sort: { favoritCount: -1 }, // Sortowanie malejąco według liczby elementów w tablicy favorit
      },
    ]).exec();
    res.json({
      status: "success",
      code: 200,
      popular: recipes,
    });
  } catch (error) {
    next(error);
  }
};
module.exports = getPopularRecipes;
