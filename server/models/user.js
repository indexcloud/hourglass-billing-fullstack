module.exports = (sequelize, Sequelize) => {
	const User = sequelize.define("contact", {
		userId: {
			type: Sequelize.INTEGER,
			autoIncrement: true,
			allowNull: false,
			primaryKey: true,
		},
		firstName: Sequelize.STRING,
		lastName: Sequelize.STRING,
		company: Sequelize.STRING,
		role: {
			type: Sequelize.INTEGER,
		},
		email: {
			type: Sequelize.STRING,
			unique: true,
			allowNull: false,
			validate: {
				isEmail: true,
			},
		},
		password: {
			type: Sequelize.STRING,
			allowNull: true,
			validate: {notEmpty: true},
		},
		phone: Sequelize.INTEGER,
		street: Sequelize.STRING,
		city: Sequelize.STRING,
		zipCode: Sequelize.STRING,
		country: Sequelize.STRING,
	});
	return User;
};
