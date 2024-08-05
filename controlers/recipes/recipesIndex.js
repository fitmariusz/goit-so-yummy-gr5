require("dotenv").config();
const Recipe = require("../../models/recipes")

const findRecipeById = async (req, res, next) => { 
    try {
        // const categories = CategoriesList.find({})
        // res.send(req.params.id)
        const recipe = await Recipe.findById(req.params.id);
        res.json(recipe);

    } catch (error) {
      next(error);
    }
        
    
    


};
module.exports = { findRecipeById };