module.exports = (sequelize, Sequelize) => {
	const User = sequelize.define("user", {
		id: {
			type: Sequelize.INTEGER,
			autoIncrement: true,
			allowNull: false,
			primaryKey: true,
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
		firstName: Sequelize.STRING,
		lastName: Sequelize.STRING,
		company: Sequelize.STRING,
		role: {
			type: Sequelize.INTEGER,
		},
		phone: Sequelize.INTEGER,
		street: Sequelize.STRING,
		city: Sequelize.STRING,
		zipCode: Sequelize.STRING,
		country: Sequelize.STRING,
	});
	return User;
};
