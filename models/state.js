'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class State extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Trip }) {
      // define association here
      this.hasMany(Trip, { foreignKey: "fromState", as: "from" });
      this.hasMany(Trip, { foreignKey: "toState", as: "to" });
    }
  }
  State.init({
    name: {
      type: DataTypes.STRING,
      validate: {
        len: [5,15],
      }
    },
    address: {
      type: DataTypes.STRING,
    },
    province: {
      type: DataTypes.STRING,
      isIn: [['HN', 'HCM', 'DN', 'KH']],
    }
  }, {
    sequelize,
    modelName: 'State',
  });
  return State;
};