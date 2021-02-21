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

const Contact = require("./contact")(sequelize, Sequelize);

// Define tables relations

// db list
db.contact = Contact;

module.exports = db;
