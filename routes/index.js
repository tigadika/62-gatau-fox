const express = require("express");
const Controller = require("../controllers");
const router = express.Router();

router.post("/register", Controller.register);

module.exports = router;
