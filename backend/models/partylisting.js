'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PartyListing extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  PartyListing.init({
    Name: DataTypes.STRING,
    members #: DataTypes.INTEGER,
    votingCount: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'PartyListing',
  });
  return PartyListing;
};