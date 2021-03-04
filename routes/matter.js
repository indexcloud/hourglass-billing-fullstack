const express = require("express");
const matterController = require("../controllers/matter");
// const authController = require("../controllers/auth");
const router = express.Router();

router.get("/matters", matterController.getMatters);
// router.get("/matters", authController.isLoggedIn, matterController.getMatters);

router.post("/matters", matterController.postAddMatter);
// router.post("/matters", authController.isLoggedIn, matterController.postAddMatter);

module.exports = router;
