require("dotenv").config();
const Categorie = require("../../models/categoriesList");

const getCategiriesList = async (req, res, next) => {
    try {
      // const categories = CategoriesList.find({})

      const categoriesList = (await Categorie.find()).map(category => category.title);
        res.send(categoriesList);
    //   status: "success",
    //   code: 200,
    //   data: {
    //     id: user.id,
    //     name: user.name,
    //     emil: user.email,
    //   },
    // });
  } catch (error) {
    next(error);
  }
};


module.exports = {
  getCategiriesList,
  // updateSubscription,
};
