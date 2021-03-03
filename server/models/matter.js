module.exports = (sequelize, Sequelize) => {
	const Matter = sequelize.define("matter", {
		id: {
			type: Sequelize.INTEGER,
			autoIncrement: true,
			allowNull: false,
			primaryKey: true,
		},
		matter: Sequelize.STRING,
		description: Sequelize.STRING,
		practiceArea: Sequelize.STRING,
		clientId: Sequelize.STRING,
	});
	return Matter;
};
