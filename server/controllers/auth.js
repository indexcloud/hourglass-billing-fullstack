exports.postSignUp = (req, res, next) => {
	res.send("Sign up succeed");
};

exports.postSignIn = (req, res, next) => {
	isLoggedIn = true;
	res.send(isLoggedIn);
};

exports.getSignOut = (req, res, next) => {
	req.session.destroy(err => {
		isLoggedIn = false;
		res.send(isLoggedIn);
	});
};

exports.isLoggedIn = (req, res, next) => {
	if (req.isAuthenticated()) {
		return next();
	}
};
