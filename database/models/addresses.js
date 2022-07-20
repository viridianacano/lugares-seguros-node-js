'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class address extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      address.hasOne(models.places);
    }
  }
  address.init({
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    street: DataTypes.STRING,
    suburb: DataTypes.STRING,
    postalCode: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'address',
  });
  return address;
};