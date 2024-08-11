require("dotenv").config();
const Recipe = require("../../models/recipes");
const User = require("../../models/user");
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

const findRecipesByCategory = async (req, res, next) => {
  try {
    const recipe = await Recipe.find({ category: req.params.category }).limit(
      DEFAULT_LIMIT_PER_PAGE
    );
    res.json({
      status: "success",
      code: 200,
      data: { recipe },
    });
  } catch (error) {
    next(error);
  }
};

const insertRecipe = async (req, res, next) => {
  try {
    const {
      title,
      category,
      area,
      instructions,
      descriptions,
      thumb,
      preview,
      time,
      favorites,
      youtube,
      tags,
      // createdAt,
      // updatedAt,
      ingredients,
    } = req.body;
    const user = await User.findById(req.user._id);
    const { id, email, name } = user;
    // const objId = req.user._id;
    // console.log(user._id);
    const recipe = await Recipe.create({
      title,
      category,
      area,
      instructions,
      descriptions,
      thumb,
      preview,
      time,
      favorites,
      youtube,
      tags,
      ingredients,
      owner: {
        id,
        email,
        name,
      },
    });

    if (recipe) {
      res.status(201).json({
        status: "success",
        code: 200,
        data: {
          recipe,
        },
      });
    } else {
      res.status(404).json(recipe);
    }
  } catch (error) {
    next(error);
  }
};

const remoweRecipe = async (req, res, next) => {
  try {
    console.log(req.params.recipeId);
    const result = await Recipe.findByIdAndDelete(req.params.recipeId);
    console.log(result);
    res.json({
      status: "success",
      code: "200",
      message: "Succes delete contact",
    });
  } catch (error) {
    next(error);
  }
};

const myRecipes = async (req, res, next) => {
  res.json(req.body);
};

module.exports = {
  findRecipeById,
  findRecipesByText,
  findRecipesByCategory,
  insertRecipe,
  remoweRecipe,
  myRecipes,
};
