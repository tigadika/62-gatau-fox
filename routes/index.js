const express = require("express");
const Controller = require("../controllers");
const router = express.Router();

router.post("/register", Controller.register);
router.post("/login", Controller.login);
router.get("/getAll", Controller.getAll);
router.post("/getAll/:id", Controller.update);

module.exports = router;
