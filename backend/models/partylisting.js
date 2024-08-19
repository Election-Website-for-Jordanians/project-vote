"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class PartyListing extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) { PartyListing.hasMany(models.PartyListingInformation, { foreignKey: 'partyListingID' });}
  }

  PartyListing.init(
    {
      partyID: {
        primaryKey: true,
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      Name: DataTypes.STRING,
      votingCount: DataTypes.INTEGER,
      didPass: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      isApproved: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      }
    },
    {
      sequelize,
      modelName: "PartyListing",
    }
  );

  return PartyListing;
};
