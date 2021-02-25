const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");

// Connecting to local database
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
	host: dbConfig.HOST,
	dialect: dbConfig.dialect,
	operatorsAliases: 0,

	pool: {
		max: dbConfig.pool.max,
		min: dbConfig.pool.min,
		acquire: dbConfig.pool.acquire,
		idle: dbConfig.pool.idle,
	},
});

// Connecting to Heroku database
// const sequelize = new Sequelize(process.env.DATABASE_URL, {
// 	dialect: dbConfig.dialect,
// 	operatorsAliases: 0,

// 	pool: {
// 		max: dbConfig.pool.max,
// 		min: dbConfig.pool.min,
// 		acquire: dbConfig.pool.acquire,
// 		idle: dbConfig.pool.idle,
// 	},
// });

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Import models
const User = require("./user")(sequelize, Sequelize);
const Contact = require("./contact")(sequelize, Sequelize);
const Matter = require("./matter")(sequelize, Sequelize);
const Invoice = require("./invoice")(sequelize, Sequelize);
const Time = require("./time")(sequelize, Sequelize);
const Expense = require("./expense")(sequelize, Sequelize);

// Define tables relations
Contact.hasMany(Matter);
Matter.belongsTo(Contact);
Contact.hasMany(Invoice);
Matter.hasMany(Invoice);
Invoice.belongsTo(Contact);
Invoice.belongsTo(Matter);

// Table list
db.user = User;
db.contact = Contact;
db.matter = Matter;
db.invoice = Invoice;
db.time = Time;
db.expense = Expense;

module.exports = db;
