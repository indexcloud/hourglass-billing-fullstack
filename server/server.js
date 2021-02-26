require("dotenv").config();
const path = require("path");
const express = require("express");

// const cors = require("cors");

const app = express();
// const session = require("express-session");
// app.use(cors());

const contactRoutes = require("./routes/contact");
const matterRoutes = require("./routes/matter");

// Express BodyParser
app.use(express.json()); // request body has been parsed
app.use(express.urlencoded({extended: false})); // request body has been url encoded

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, "../client/build")));

const db = require("./models");

app.use(contactRoutes);
app.use(matterRoutes);

// Handle GET requests to /api route
app.get("/matters", (req, res) => {
	res.send({message: "All the matters from server!"});
});

// All other GET requests not handled before will return our React app
app.get("*", (req, res) => {
	res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});

db.sequelize
	// .sync()
	.sync({force: true})
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
