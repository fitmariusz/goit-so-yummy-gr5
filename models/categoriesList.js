const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const categorieListSchema = new Schema({
  title: {
    type: String,
    required: [true, "Title is required"],
  },
  thumb: {
    type: String,
    required: [true, "Thambs is required"],
  },
  description: {
    type: String,
    required: [true, "Description is required"],
    unique: true,
  },
});

const Categorie = mongoose.model("categorie", categorieListSchema);

module.exports = Categorie;
