const express = require("express");
const router = express.Router();
const { jwtAuth } = require("../../middlewares/jwtMiddleware");
const {
  addIngredientsToList,
  deleteIngredientsFromList,
  getShoppingList,
} = require("../../controlers/shoppingList/shoppingLIstIndex");

router.get("/",jwtAuth, getShoppingList)
router.put("/", jwtAuth, addIngredientsToList);
router.delete("/:ingredientId", jwtAuth, deleteIngredientsFromList);

module.exports = router;
 