const express = require("express");
const router = express.Router();
const { jwtAuth } = require("../../middlewares/jwtMiddleware");

router.put("/", jwtAuth);
router.delete("/", jwtAuth);
    
