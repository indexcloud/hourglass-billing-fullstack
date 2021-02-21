const express = require("express");
const contactController = require("../controllers/contact");
const router = express.Router();

router.post("/contacts", contactController.postAddContact);

module.exports = router;
