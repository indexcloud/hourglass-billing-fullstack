module.exports = (sequelize, Sequelize) => {
	const Contact = sequelize.define("contact", {
		id: {
			type: Sequelize.INTEGER,
			autoIncrement: true,
			allowNull: false,
			primaryKey: true,
		},
		firstName: Sequelize.STRING,
		lastName: Sequelize.STRING,
		email: {
			type: Sequelize.STRING,
			validate: {
				isEmail: true,
			},
		},
		phone: Sequelize.STRING,
		street: Sequelize.STRING,
		city: Sequelize.STRING,
		zipCode: Sequelize.STRING,
	});
	return Contact;
};
