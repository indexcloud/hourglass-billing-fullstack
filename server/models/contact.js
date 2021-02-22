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
		company: Sequelize.STRING,
		email: {
			type: Sequelize.STRING,
			unique: true,
			allowNull: false,
			validate: {
				isEmail: true,
			},
		},
		phone: Sequelize.INTEGER,
		street: Sequelize.STRING,
		city: Sequelize.STRING,
		zipCode: Sequelize.STRING,
		country: Sequelize.STRING,
	});
	return Contact;
};
