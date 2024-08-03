// const express = require("express");
// const router = express.Router();
// const { register, login, logout, getCurrentUser, updateSubscription } = require("../../controlers/auth/authIndex");
// const {
//   validateBody,
//   validateSubscription,
// } = require("../../validation/validationContacts");
// const jwtAuth = require("../../middlewares/jwtMiddleware");
// const { userSchema } = require("../../validation/validationUser");
// const passport = require("../../middlewares/PassConf");

// router.use(passport.initialize()); 

// router.post("/signup", validateBody(userSchema), register);
// router.post("/login", validateBody(userSchema), login);
// router.get("/logout", jwtAuth, logout);
// router.get("/current", jwtAuth, getCurrentUser);
// router.patch("/", jwtAuth, validateSubscription, updateSubscription);

// module.exports = router;
