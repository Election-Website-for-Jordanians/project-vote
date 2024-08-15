// models/LocalListing.js
"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class LocalListing extends Model {
    static associate(models) {
      this.hasMany(models.Candidate, {
        foreignKey: "localListingID", // Ensure this matches the Candidate model
        as: "candidates" // Define the alias used in the query
      });
    }
  }
  LocalListing.init(
    {
      listingID: {
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
      modelName: "LocalListing",
    }
  );
  return LocalListing;
};
