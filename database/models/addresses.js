'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class addresses extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      addresses.hasOne(models.places);
    }
  }
  addresses.init({
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    street: DataTypes.STRING,
    suburb: DataTypes.STRING,
    postalCode: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'addresses',
  });
  return addresses;
};