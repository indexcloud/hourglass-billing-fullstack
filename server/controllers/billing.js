const db = require("../models");
const Matter = db.matter;

exports.getInvoices = (req, res, next) => {
	Matter.findAll()
		.then(matters => {
			console.log(matters);
			res.send(matters);
		})
		.catch(err => console.log(err));
};

exports.postAddInvoice = (req, res, next) => {
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
			console.log("Created New Invoice");
		})
		.catch(err => console.log(err));
};
