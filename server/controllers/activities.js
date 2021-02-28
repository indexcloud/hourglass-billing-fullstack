const db = require("../models");
const Time = db.time;

exports.getTimes = (req, res, next) => {
	Time.findAll()
		.then(times => {
			console.log("Times sent");
			res.send(times);
		})
		.catch(err => console.log(err));
};

exports.postAddTime = (req, res, next) => {
	const matterId = req.body.matterId;
	const date = req.body.date;
	const description = req.body.description;
	const quantity = req.body.quantity;
	const rate = req.body.rate;
	const amount = req.body.amount;
	Time.create({
		matterId: matterId,
		date: date,
		description: description,
		quantity: quantity,
		rate: rate,
		amount: amount,
	})
		.then(result => {
			console.log("Created New Time");
		})
		.catch(err => console.log(err));
};
