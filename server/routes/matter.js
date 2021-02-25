const express = require("express");
const contactController = require("../controllers/matter");
const router = express.Router();

router.post("/matters", contactController.postAddMatter);

module.exports = router;
