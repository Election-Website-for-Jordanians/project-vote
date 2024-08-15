"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class PartyListing extends Model {
    static associate(models) {
      this.hasMany(models.Candidate, {
        foreignKey: "partylistingID", // Ensure this matches the Candidate model
        as: "candidates" // Define the alias used in the query
      });
    }
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
    },
    {
      sequelize,
      modelName: "PartyListing",
    }
  );

  return PartyListing;
};
