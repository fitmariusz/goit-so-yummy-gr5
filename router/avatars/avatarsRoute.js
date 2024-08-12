const express = require("express");
const { getAvatar } = require("../../controlers/avatar/controllAvatar");
const router = express.Router();

router.get("/:name", getAvatar);

module.exports = router;
