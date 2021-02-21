const db = require("../models");
const Contact = db.contact;

exports.postAddContact = (req, res, next) => {
	console.log(req.body);
	const firstName = req.body.firstName;
	const lastName = req.body.lastName;
	const email = req.body.email;
	const phone = req.body.phone;
	const street = req.body.street;
	const city = req.body.city;
	const zipCode = req.body.zipCode;
	const country = req.body.country;

	Contact.create({
		firstName: firstName,
		lastName: lastName,
		email: email,
		phone: phone,
		street: street,
		city: city,
		zipCode: zipCode,
		country: country,
	})
		.then(result => {
			console.log("Created New Contact");
		})
		.catch(err => console.log(err));
};
