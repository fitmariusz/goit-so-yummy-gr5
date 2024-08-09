const {
  addToFavorites,
  getFavoritesList,
  deleteFavoriteList,
} = require("../../controlers/favorites/favoritesIndex");
const { jwtAuth } = require("../../middlewares/jwtMiddleware");
const express = require("express");
const router = express.Router();

router.put("/id/:recipeId", jwtAuth, addToFavorites);
router.get("/", jwtAuth, getFavoritesList);
router.delete("/id/:recipeId", jwtAuth, deleteFavoriteList);

module.exports = router;
