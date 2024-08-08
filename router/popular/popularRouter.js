const getPopularRecipes = require("../../controlers/popular/popularIndex");
const { jwtAuth } = require("../../middlewares/jwtMiddleware");
const express = require("express");
const router = express.Router();


router.get('/', jwtAuth, getPopularRecipes)

module.exports = router
