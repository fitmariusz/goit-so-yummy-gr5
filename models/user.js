const mongoose = require("mongoose");
const bCrypt = require("bcryptjs");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, "Password is required"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
  },
  token: {
    type: String,
    default: null,
  },
  refreshToken: {
    type: String,
    default: null,
  },
  avatarURL: {
    type: String,
    default: null,
  },
   favorites: [
    {
      id: {
        type: mongoose.Types.ObjectId,
        ref: "recipes",
      },
      _id: false,
     },
    ],
  shoppingList: [
    {
      id: {
        type: mongoose.Types.ObjectId,
        ref: "ingredient",
      },
      measure: {
        type: String,
        // required: [true, "Measure is required"],
      },
      _id: false,
    },
  ],
});

userSchema.methods.setPassword = function (password) {
  this.password = bCrypt.hashSync(password, bCrypt.genSaltSync(6));
};

userSchema.methods.validPassword = function (password) {
  return bCrypt.compareSync(password, this.password);
};

const User = mongoose.model("user", userSchema);

module.exports = User;
