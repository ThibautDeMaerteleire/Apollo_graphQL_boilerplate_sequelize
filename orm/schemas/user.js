/**
 * Modelling the user
 */
const sequelize = require('../../dbconnection');
const { DataTypes, Model } = require('sequelize');


class User extends Model {};

User.init({
  // Model attributes are defined here
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    defaultValue: '',
    allowNull: false
  },
  password: {
    type: DataTypes.TEXT,
    defaultValue: '',
    allowNull: false
  },
  username: {
    type: DataTypes.STRING,
    defaultValue: '',
    allowNull: false
  },
  firstName: {
    type: DataTypes.STRING,
    defaultValue: '',
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING,
    defaultValue: '',
    allowNull: false
  },
  createdAt: {
    type: DataTypes.BIGINT,
    defaultValue: new Date().getTime(),
    allowNull: true
  },
  lastOnline: {
    type: DataTypes.BIGINT,
    defaultValue: new Date().getTime(),
    allowNull: true
  },
  token: {
    type: DataTypes.TEXT,
    defaultValue: null,
    allowNull: true
  },
  authToken: {
    type: DataTypes.TEXT,
    defaultValue: null,
    allowNull: true
  },
}, {
  // Other model options go here
  sequelize,
  modelName: 'User',
  tableName: 'users',
});

module.exports = User;