const Joi = require("joi");

const registerSchema = Joi.object({
  name: Joi.string().min(3).required().messages({
    "string.min": "Password must be at least 3 characters long",
    "string.empty": "Name field is required",
  }),
  email: Joi.string().email().required().messages({
    "string.email": "Please enter a valid email",
    "string.empty": "Email field is required",
  }),
  password: Joi.string().min(6).required().messages({
    "string.min": "Password must be at least 6 characters long",
    "string.empty": "Password field is required",
  }),
});

const loginSchema = Joi.object({
  email: Joi.string().email().required().messages({
    "string.email": "Please enter a valid email",
    "string.empty": "Email field is required",
  }),
  password: Joi.string().min(6).required().messages({
    "string.min": "Password must be at least 6 characters long",
    "string.empty": "Password field is required",
  }),
});

module.exports = {
  registerSchema,
  loginSchema,
};
