require("dotenv").config();
const Recipe = require("../../models/recipes");

const addToFavorites = async (req, res, next) => {
  try {
    const { _id: userId } = req.user;
    const { recipeId } = req.params;

    const resultAddUserToResipe = await Recipe.updateOne(
      { _id: recipeId },
      { $push: { favorites: userId } }
    ).exec();

    res.json({
      status: "sukccess",
      cose: 200,
      resultAddUserToResipe,
      // resultAddResipeToUser,
    });
  } catch (error) {
    next(error);
  }
};

const getFavoritesList = async (req, res, next) => {
  const { _id } = req.user;

  const recipes = await Recipe.find({ favorites: _id });
  if (recipes.length === 0) {
    res.json({
      status: "error",
      cose: 404,
      message: "The user hasn't added anything to favorites yet",
    });
  }

  res.json(recipes);
};

const deleteFavoriteList = async (req, res, next) => {
  const { _id: owner } = req.user;
  const { recipeId } = req.params;

  const isAlreadyAdded = await Recipe.findOne({
    $and: [{ _id: recipeId }, { favorites: owner }],
  });

  if (!isAlreadyAdded) {
    res.json({
      status: "error",
      cose: 404,
      message: "This recipe is not in favorites.",
    });
  }

  const result = await Recipe.findByIdAndUpdate(
    { _id: recipeId },
    { $pull: { favorites: owner } },
    {
      new: true,
    }
  );

  if (!result) {
    res.json({
      status: "error",
      cose: 404,
      message: "Not found",
    });
  }

  res.json({
    status: "success",
    cose: 200,
    message: "Removed from favorites",
  });
};

module.exports = { addToFavorites, getFavoritesList, deleteFavoriteList };
