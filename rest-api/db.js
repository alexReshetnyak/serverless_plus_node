const { DB_PASSWORD } = require('./secret');
const Sequelize = require('sequelize');
// * Connect to elephant mysql
// const sequelize = new Sequelize(
//   'postgres://hvvoqlla:B-BC-E2IoEQ0Yw-6UtZJKm60yMU4PkVs@kandula.db.elephantsql.com:5432/hvvoqlla'
// );

// * AWS RDS endpoint
const sequelize = new Sequelize(
  // postgres://dbUserName:dbUserPass@endpoint:port/dbName
  `postgres://alex:${DB_PASSWORD}@tododb.ccuaf8aunzjg.eu-west-1.rds.amazonaws.com:5432/tododb`
);

const todo = require('./models/todo')(sequelize, Sequelize);

const db = {
  Sequelize,
  sequelize,
  todo,
};

// * force: true - drop todo db
db.sequelize.sync(/*{ force: true }*/);

module.exports = db;