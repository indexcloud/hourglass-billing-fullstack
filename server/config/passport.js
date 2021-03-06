const bcrypt = require("bcrypt");

module.exports = (passport, user) => {
	const User = user;
	const LocalStrategy = require("passport-local").Strategy;

	// Local Sign Up
	passport.use(
		"local-signup",
		new LocalStrategy(
			{
				usernameField: "email",
				passwordField: "password",
				passReqToCallback: true, // allows us to pass back the entire request to the callback
			},

			function (req, username, password, done) {
				const generateHash = password => {
					return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
				};
				const confirmPassword = req.body.confirmPassword;

				User.findOne({
					where: {
						email: username,
					},
				}).then(user => {
					if (user) {
						return done(null, false);
					} else if (password !== confirmPassword) {
						return done(null, false);
					} else {
						const userPassword = generateHash(password);
						const data = {
							email: username,
							password: userPassword,
						};
						User.create(data).then((newUser, created) => {
							if (!newUser) {
								return done(null, false);
							}
							if (newUser) {
								console.log("User created");
								return done(null, newUser);
							}
						});
					}
				});
			}
		)
	);

	// Serialize
	passport.serializeUser((user, done) => {
		done(null, user);
	});

	// Deserialzie user
	passport.deserializeUser((id, done) => {
		User.findByPk(id).then(user => {
			if (user) {
				done(null, user); // return req.user for routes and controllers
			} else {
				done(user.errors, null);
			}
		});
	});

	// Local Sign In
	passport.use(
		"local-signin",
		new LocalStrategy(
			{
				usernameField: "email",
				passwordField: "password",
				passReqToCallback: true,
			},

			function (req, username, password, done) {
				const isValidPassword = (userpass, password) => {
					return bcrypt.compareSync(password, userpass);
				};

				User.findOne({
					where: {
						email: username,
					},
				})
					.then(user => {
						if (!user) {
							return done(null, false);
						}
						if (!isValidPassword(user.password, password)) {
							return done(null, false);
						}

						// user.createCart();
						const userinfo = user.get();
						return done(null, userinfo);
					})
					.catch(err => {
						console.log("Error:", err);

						return done(null, false, {
							message: "Something went wrong with your Signin",
						});
					});
			}
		)
	);
};
