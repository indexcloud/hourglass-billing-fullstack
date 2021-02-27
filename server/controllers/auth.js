exports.postSignUp = (req, res, next) => {
	res.redirect("/signin");
};

exports.postSignIn = (req, res, next) => {
	isLoggedIn = true;
	res.send(isLoggedIn);
};

exports.getSignOut = (req, res, next) => {
	isLoggedIn = false;
	res.send(isLoggedIn);
};

exports.isLoggedIn = (req, res, next) => {
	if (req.isAuthenticated()) {
		return next();
	}
	res.redirect("/signin");
};
