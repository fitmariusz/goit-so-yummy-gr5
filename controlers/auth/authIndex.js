require("dotenv").config();
const jwt = require("jsonwebtoken");
const User = require("../../models/user");

const secret = process.env.SECRET;

const register = async (req, res, next) => {
  const { name, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({
        message: "Email is already in use",
      });
    }

    const newUser = new User({ email });
    newUser.name = name;
    console.log(newUser);
    newUser.setPassword(password);
    await newUser.save();

    res.json({
      status: "success",
      code: 201,
      data: {
        user: {
          id: newUser.id,
          name: newUser.name,
          email: newUser.email,
        },
      },
    });
  } catch (error) {
    next(error);
  }
};

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user || !user.validPassword(password)) {
      return res.status(401).json({ message: "Email or password is wrong" });
    }

    const payload = {
      id: user._id,
      email: user.email,
    };

    const token = jwt.sign(payload, secret, { expiresIn: "30h" });
    const refreshToken = jwt.sign(payload, secret, { expiresIn: "30d" });

    user.token = token;
    user.refreshToken = refreshToken;
    await user.save();

    res.json({
      status: "success",
      code: 200,
      data: {
        token: user.token,
        refreshToken: user.refreshToken,
      },
    });
  } catch (error) {
    next(error);
  }
};

const logout = async (req, res, next) => {
  try {
    const user = await User.findById(req.user._id);

    if (!user) {
      return res.status(401).json({
        message: "Not authorized",
      });
    }

    user.token = null;
    await user.save();

    res.json({
      status: "Logout success",
      code: 204,
      message: "Logout success",
    });
  } catch (error) {
    next(error);
  }
};

const getCurrentUser = async (req, res, next) => {
  try {
    const user = req.user;
    if (!user) {
      return res.status(401).json({ message: "Not suthorized" });
    }
    res.json({
      status: "success",
      code: 200,
      data: {
        id: user.id,
        name: user.name,
        emil: user.email,
      },
    });
  } catch (error) {
    next(error);
  }
};

const refresh = async (req, res, next) => {
  if (!req.body.refreshToken) {
    return res.json({
      status: "Invalid request - bad body",
      code: 400,
    });
  } else {
    try {
      const user = await User.findOne(req.body);
      if (!user) {
        res.json({
          status: "Invalid refresh token",
          code: 401,
        });
      } else {
        const payload = {
          id: user._id,
          email: user.email,
        };

        const token = jwt.sign(payload, secret, { expiresIn: "30m" });
        const refreshToken = jwt.sign(payload, secret, { expiresIn: "30d" });

        user.token = token;
        user.refreshToken = refreshToken;
        await user.save();

        res.json({
          startus: "Success",
          code: 200,
          data: {
            token: user.token,
            refreshToken: user.refreshToken,
          },
        });
      }
    } catch (error) {
      next(error);
    }
  }
};

module.exports = {
  register,
  login,
  logout,
  getCurrentUser,
  refresh,
  // updateSubscription,
};
