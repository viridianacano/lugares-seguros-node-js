'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class places extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      places.belongsTo(models.address);
      places.belongsTo(models.users);
      places.hasMany(models.comments);
      places.hasMany(models.likes);
    }
  }
  places.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    image: DataTypes.STRING,
    statusDeLete: DataTypes.BOOLEAN,
    userId: DataTypes.INTEGER,
    addressId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'places',
  });
  return places;
};