module.exports = (sequelize, Sequelize) => {
	const Expense = sequelize.define("expense", {
		expenseId: {
			type: Sequelize.INTEGER,
			autoIncrement: true,
			allowNull: false,
			primaryKey: true,
		},
		expenseDate: Sequelize.DATE,
		description: Sequelize.STRING,
		quantity: Sequelize.DOUBLE,
		rate: Sequelize.DOUBLE,
	});
	return Expense;
};
