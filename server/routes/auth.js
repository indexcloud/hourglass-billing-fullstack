const express = require("express");
const passport = require("passport");
const {isLoggedIn} = require("../controllers/auth");
const authController = require("../controllers/auth");
const router = express.Router();

// Local Sign Up
router.post("/signup", passport.authenticate("local-signup", {failureRedirect: "/signup"}), authController.postSignUp);

// Local Sign In
router.post("/signin", passport.authenticate("local-signin", {failureRedirect: "/signin"}), authController.postSignIn);
// router.post("/signin", authController.postSignIn);

// Google Sign In
router.get("/auth/google", passport.authenticate("google", {scope: ["profile", "email"]}));

router.get("/auth/google/callback", passport.authenticate("google", {failureRedirect: "/signin"}), function (req, res) {
	isLoggedIn = true;
	res.send(isLoggedIn);
});

// Sign Out
router.get("/signout", authController.getSignOut);

// Reset Password
router.get("/reset", authController.getReset);

module.exports = router;
