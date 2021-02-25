module.exports = (sequelize, Sequelize) => {
	const Invoice = sequelize.define("invoice", {
		invoiceId: {
			type: Sequelize.INTEGER,
			autoIncrement: true,
			allowNull: false,
			primaryKey: true,
		},
		status: Sequelize.STRING,
		invoiceDate: Sequelize.DATE,
		dueDate: Sequelize.DATE,
		serviceTotal: Sequelize.DOUBLE,
		expenseTotal: Sequelize.DOUBLE,
		grandTotal: Sequelize.DOUBLE,
		balance: Sequelize.DOUBLE,
		paid: Sequelize.DOUBLE,
	});
	return Invoice;
};
