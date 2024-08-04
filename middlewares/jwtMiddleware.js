const passport = require("passport");

const jwtAuth = (req, res, next) => {
  passport.authenticate("jwt", { session: false }, (err, user) => {
    if (
      !user ||
      err ||
      !user.token ||
      user.token !== req.headers.authorization.split(" ")[1]
    ) {
      return res.status(401).json({
        status: "error",
        code: 401,
        message: "Unauthorized",
        data: "Unauthorized",
      });
    }
    req.user = user;
    next();
  })(req, res, next);
};

const authRefreshToken = (req, res, next) => {
  passport.authenticate("jwt", { session: false }, (err, user) => {
    console.log(user);
    if (
      !user ||
      err ||
      !user.refreshToken ||
      user.refreshToken !== req.headers.authorization.split(" ")[1]
    ) {
      return res.status(401).json({
        status: "error",
        code: 401,
        message: "Unauthorized ref",
        data: "Unauthorized",
      });
    }
    req.user = user;
    next();
  })(req, res, next);
};

module.exports = { jwtAuth, authRefreshToken };
