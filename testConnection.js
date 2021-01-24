const dotenv = (require('dotenv')).config();
const { Sequelize } = require('sequelize');

const testConnection = async() => {
  try {
    const sequelize = new Sequelize(process.env.MYSQL_DB, process.env.MYSQL_USER, process.env.MYSQL_PASSWORD, {
      host: process.env.MYSQL_HOST,
      dialect: 'mysql',
    });
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

testConnection();