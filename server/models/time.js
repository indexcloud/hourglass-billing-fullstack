module.exports = (sequelize, Sequelize) => {
	const Time = sequelize.define("time", {
		id: {
			type: Sequelize.INTEGER,
			autoIncrement: true,
			allowNull: false,
			primaryKey: true,
		},
		date: Sequelize.DATEONLY,
		description: Sequelize.STRING,
		quantity: Sequelize.DOUBLE,
		rate: Sequelize.DOUBLE,
		amount: Sequelize.DOUBLE,
		matterId: Sequelize.INTEGER,
	});
	return Time;
};
