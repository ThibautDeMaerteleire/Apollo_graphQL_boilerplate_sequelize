const dotenv = (require('dotenv')).config();
const { Sequelize } = require('sequelize');

module.exports = new Sequelize(process.env.MYSQL_DB, process.env.MYSQL_USER, process.env.MYSQL_PASSWORD, {
  host: process.env.MYSQL_HOST,
  dialect: 'mysql',
  sync: {
    alter: true,
    force: true,
  },
  define: {
    timestamps: true
  }
});