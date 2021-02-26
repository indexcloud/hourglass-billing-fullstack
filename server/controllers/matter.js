const db = require("../models");
const Matter = db.matter;

exports.postAddMatter = (req, res, next) => {
	const matter = req.body.matter;
	const description = req.body.description;
	const practiceArea = req.body.practiceArea;
	const clientId = req.body.clientId;
	Matter.create({
		matter: matter,
		description: description,
		practiceArea: practiceArea,
		clientId: clientId,
	})
		.then(result => {
			console.log("Created New Matter");
		})
		.catch(err => console.log(err));
};
