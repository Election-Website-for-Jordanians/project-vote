'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class LocalListing extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  LocalListing.init({
    Name: DataTypes.STRING,
    votingCount: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'LocalListing',
  });
  return LocalListing;
};