module.exports = (sequelize, Sequelize) => {
	const Service = sequelize.define("service", {
		serviceId: {
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
	return Service;
};
