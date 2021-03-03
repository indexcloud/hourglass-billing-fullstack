const express = require("express");
const activitiesController = require("../controllers/activities");
const authController = require("../controllers/auth");
const router = express.Router();

router.get("/times", activitiesController.getTimes);
// router.get("/activites", authController.isLoggedIn, activitiesController.getTimes);

router.post("/new-time", activitiesController.postAddTime);
// router.post("/new-time", authController.isLoggedIn, activitiesController.postAddTime);

module.exports = router;
