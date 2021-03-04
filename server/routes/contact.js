const express = require("express");
const contactController = require("../controllers/contact");
// const authController = require("../controllers/auth");
const router = express.Router();

router.get("/contacts", contactController.getContacts);
// router.get("/contacts", authController.isLoggedIn, contactController.getContacts);

router.post("/contacts", contactController.postAddContact);
// router.post("/contacts", authController.isLoggedIn, contactController.postAddContact);

module.exports = router;
