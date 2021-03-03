const express = require("express");
const billingController = require("../controllers/billing");
const authController = require("../controllers/auth");
const router = express.Router();

router.get("/billing", billingController.getInvoices);
// router.get("/billing", authController.isLoggedIn, billingController.getInvoices);

router.post("/billing/", billingController.postAddInvoice);
// router.post("/billing", authController.isLoggedIn, billingController.postAddInvoice);

module.exports = router;
