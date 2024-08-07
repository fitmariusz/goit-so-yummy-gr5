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
  // favorites:
  // {
  //   type: Array,
  //   default : null
  // },
});

userSchema.methods.setPassword = function (password) {
  this.password = bCrypt.hashSync(password, bCrypt.genSaltSync(6));
};

userSchema.methods.validPassword = function (password) {
  return bCrypt.compareSync(password, this.password);
};

const User = mongoose.model("user", userSchema);

module.exports = User;
