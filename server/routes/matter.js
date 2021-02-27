const express = require("express");
const matterController = require("../controllers/matter");
const router = express.Router();

router.get("/matters", matterController.getMatters);

router.post("/matters", matterController.postAddMatter);

module.exports = router;
