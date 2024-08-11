require("dotenv").config();
const User = require("../../models/user");

const getShoppingList = async (req, res, next) => {
  console.log(req.user._id);
  try {
    const user = await User.findById(req.user._id);
    if (user) {
      res.status(200).json({
        status: "succrss",
        code: 200,
        shoppingList: user.shoppingList,
      });
    } else {
      res.status(404).json({
        status: "error",
        code: 404,
        message: "Not fins user",
      });
    }
  } catch (error) {
    next(error);
  }
};

const addIngredientsToList = async (req, res, next) => {
  try {
    const user = await User.updateOne(
      { _id: req.user.id },
      {
        $push: {
          shoppingList: req.body,
        },
      },
      { new: true }
    ).exec();
    if (!user.acknowledged) {
      res.status(404).json({
        status: "error",
        code: 404,
        messager: "Not add ingrediens",
      });
    } else {
      const newUser = await User.findById(req.user._id);
      res.json({
        status: "succrs",
        code: 200,
        user: newUser,
        messager: "Ingredients add to shoping list",
      });
    }
  } catch (error) {
    next(error);
  }
};

const deleteIngredientsFromList = async (req, res, next) => {
  try {
    const user = await User.updateOne(
      { _id: req.user.id },
      {
        $pull: { shoppingList: { id: req.params.ingredientId } },
      },
      { new: true }
    );
    if (!user.modifiedCount) {
      res.status(404).json({
        status: "error",
        code: 404,
        messager: "Not find ingrediens to delete",
      });
    } else {
      const newUser = await User.findById(req.user._id);
      res.json({
        status: "succrs",
        code: 200,
        user: newUser,
        messager: "Ingredients delete from shoping list",
      });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  addIngredientsToList,
  deleteIngredientsFromList,
  getShoppingList,
};
