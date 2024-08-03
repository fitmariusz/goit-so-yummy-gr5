const joi = require("Joi");

const contactSchem = joi.object({
  name: joi.string().min(3).max(30).required().messages({
    "any.required": "Missing required name field",
  }),
  email: joi.string().email().required().messages({
    "any.required": "Missing required email field",
    "string.email": "Email must be a valid email address",
  }),
  phone: joi.string().min(9).required().messages({
    "any.required": "Missing required phone field",
  }),
  favorite: joi.boolean().required().messages({
    "any.required": "Missing required favorite field",
  }),
});

const favoriteSchem = joi.object({
  favorite: joi.boolean().required().messages({
    "any.required": "Missing required favorite field",
  }),
});
module.exports = {
  contactSchem,
  favoriteSchem,
};
