module.exports = (sequelize, Sequelize) => {
	const Time = sequelize.define("time", {
		timeId: {
			type: Sequelize.INTEGER,
			autoIncrement: true,
			allowNull: false,
			primaryKey: true,
		},
		serviceDate: Sequelize.DATE,
		description: Sequelize.STRING,
		quantity: Sequelize.DOUBLE,
		rate: Sequelize.DOUBLE,
	});
	return Time;
};
