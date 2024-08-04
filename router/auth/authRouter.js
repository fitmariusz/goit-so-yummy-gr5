const express = require("express");
const router = express.Router();
const {
  register,
  login,
  logout,
  getCurrentUser,
  refresh,
} = require("../../controlers/auth/authIndex");
const { validateBody } = require("../../validation/validationContacts");
const {
  jwtAuth,
} = require("../../middlewares/jwtMiddleware");
const {
  registerSchema,
  loginSchema,
} = require("../../validation/validationUser");
const passport = require("../../middlewares/PassConf");

router.use(passport.initialize());

router.post("/register", validateBody(registerSchema), register);
router.post("/login", validateBody(loginSchema), login);
router.get("/logout", jwtAuth, logout);
router.get("/current", jwtAuth, getCurrentUser);
router.get("/refresh", refresh);
// router.patch("/", jwtAuth, validateSubscription, updateSubscription);

module.exports = router;
