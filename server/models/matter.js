module.exports = (sequelize, Sequelize) => {
	const Matter = sequelize.define("matter", {
		matterId: {
			type: Sequelize.INTEGER,
			autoIncrement: true,
			allowNull: false,
			primaryKey: true,
		},
		matter: Sequelize.STRING,
		practiceArea: Sequelize.STRING,
	});
	return Matter;
};
