require("dotenv").config();
const path = require("path");
const express = require("express");

// const cors = require("cors");

const app = express();
const passport = require("passport");
const session = require("express-session");
// app.use(cors());

// Importing routes
const authRoutes = require("./routes/auth");
const contactRoutes = require("./routes/contact");
const matterRoutes = require("./routes/matter");
const activitisRoutes = require("./routes/activities");

// Express BodyParser
app.use(express.json()); // request body has been parsed
app.use(express.urlencoded({extended: false})); // request body has been url encoded

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, "../client/build")));

app.use(session({secret: "keyboard cat", resave: true, saveUninitialized: true}));
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

const db = require("./models");

require("./config/passport.js")(passport, db.user);

// Passing local variables to Template Engine Render Pages
// app.use((req, res, next) => {
// 	res.locals.isAuthenticated = req.session.isLoggedIn;
// 	// res.locals.csrfToken = req.csrfToken();
// 	next();
// });

app.use(authRoutes);
app.use(contactRoutes);
app.use(matterRoutes);
app.use("/activities", activitisRoutes);

// All other GET requests not handled before will return our React app
app.get("*", (req, res) => {
	res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});

db.sequelize
	.sync()
	// .sync({force: true})
	.then(result => {
		console.log("Database looks fine");
	})
	.catch(err => {
		console.log(err);
	});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
	console.log(`Server listening on ${PORT}`);
});
