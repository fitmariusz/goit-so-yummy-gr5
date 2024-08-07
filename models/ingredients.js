const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ingredientsSchema = new Schema({
  ttl: {
    type: String,
    required: [true, "Title is required"],
  },
  desc: {
    type: String,
    required: [true, "Thambs is required"],
  },
  t: {
    type: String,
    required: [true, "Thambs is required"],
  },
  thb: {
    type: String,
    required: [true, "Description is required"],
    unique: true,
  },
});

const Ingredient= mongoose.model("ingredient", ingredientsSchema);

module.exports = Ingredient;
