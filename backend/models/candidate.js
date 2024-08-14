"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Candidate extends Model {
    static associate(models) {
      this.belongsTo(models.LocalListing, { // Add this line to establish the relationship
        foreignKey: "listingID", // Assuming this is the foreign key in Candidate table
        as: "localListing", // Alias to refer to this relationship
      });

      this.belongsTo(models.Citizen, {
        foreignKey: "NationalID",
        as: "citizen",
      });

      this.hasMany(models.Advertisment, {
        foreignKey: "candidateID",
        as: "advertisments",
      });
    }
  }

  Candidate.init(
    {
      profilePicture: { type: DataTypes.STRING },
      gender: { type: DataTypes.STRING, allowNull: false },
      Quota: { type: DataTypes.STRING, allowNull: false },
      votingCount: { type: DataTypes.INTEGER, defaultValue: 0 },
      isPresident: { type: DataTypes.BOOLEAN, defaultValue: false },
      listingID: { // Add this field if Candidate belongs to LocalListing
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'LocalListings',
          key: 'listingID',
        },
      },
    },
    {
      sequelize,
      modelName: "Candidate",
    }
  );

  return Candidate;
};
