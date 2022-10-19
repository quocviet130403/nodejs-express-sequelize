const { Sequelize, Model, DataTypes } = require('sequelize')

const sequelize = new Sequelize('sqlite::memory:');
const State = sequelize.define('State', {
  name: DataTypes.STRING,
  address: DataTypes.STRING,
  province: DataTypes.STRING,
});

module.exports = State;