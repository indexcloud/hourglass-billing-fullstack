module.exports = (sequelize, Sequelize) => {
	const Invoice = sequelize.define("invoice", {
		id: {
			type: Sequelize.INTEGER,
			allowNull: false,
			primaryKey: true,
		},
		status: {
			type: Sequelize.STRING,
			defaultValue: "Unpaid",
		},
		invoiceDate: Sequelize.DATE,
		dueDate: Sequelize.DATE,
		balance: Sequelize.DOUBLE,
		matter: Sequelize.STRING,
	});
	return Invoice;
};
