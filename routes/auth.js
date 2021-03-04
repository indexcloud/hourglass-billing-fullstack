const express = require("express");
const passport = require("passport");
// const {isLoggedIn} = require("../controllers/auth");
const authController = require("../controllers/auth");
const router = express.Router();

// Local Sign Up
router.post("/signup", passport.authenticate("local-signup", {failureRedirect: "/signup"}), authController.postSignUp);

// Local Sign In
router.post("/signin", passport.authenticate("local-signin", {failureRedirect: "/signin"}), authController.postSignIn);

// Sign Out
router.get("/signout", authController.getSignOut);

module.exports = router;
