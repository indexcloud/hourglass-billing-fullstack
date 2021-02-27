exports.postSignUp = (req, res, next) => {
	res.redirect("/signin");
};

exports.postSignIn = (req, res, next) => {
	isLoggedIn = true;
	res.send(isLoggedIn);
};

exports.getSignOut = (req, res, next) => {
	req.session.destroy(err => {
		res.redirect("/");
	});
};

exports.isLoggedIn = (req, res, next) => {
	if (req.isAuthenticated()) {
		return next();
	}
	res.redirect("/signin");
};

exports.getReset = (req, res, next) => {
	let message = req.flash("error");
	if (message.length > 0) {
		message = message[0];
	} else {
		message = null;
	}
	res.render("auth/reset", {
		path: "/reset",
		pageTitle: "Reset Password",
		errorMessage: message,
	});
};
