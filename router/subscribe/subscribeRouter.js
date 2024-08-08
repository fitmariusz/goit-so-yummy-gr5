const { jwtAuth } = require("../../middlewares/jwtMiddleware");
const User = require("../../models/user");
const express = require("express");
const router = express.Router();
const sendMail = require("../../middlewares/email");

router.post("/", jwtAuth, async (req, res, next) => {
  const user = await User.findById(req.user._id);
  const { email: userMail, name } = user;
  try {
    await sendMail(
      `<h1>Hello ${name}</h1>
      <h3>Thanks you for add to subscription</h3>`,
      "So-yummo - subscribe",
      userMail
    );
    res.send({
      status: "succes",
      code: 200,
      message: "Thanks you for add to subscription",
    });
  } catch (err) {
    console.log(err);
    return next(err);
  }
});
module.exports = router;
