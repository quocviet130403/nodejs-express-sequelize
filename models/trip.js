'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Trip extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ State, Ticket }) {
      // define association here
      this.belongsTo(State, { foreignKey: "fromState", as: "from" })
      this.belongsTo(State, { foreignKey: "toState", as: "to" })
      this.hasMany(Ticket, {  foreignKey: "trip_id"})
    }
  }
  Trip.init({
    timeStart: DataTypes.DATE,
    price: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Trip',
  });
  return Trip;
};