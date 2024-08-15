// models/Candidate.js
"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Candidate extends Model {
    static associate(models) {
      this.belongsTo(models.LocalListing, {
        foreignKey: "localListingID",
        as: "candidates" // Ensure this alias matches in the LocalListing model
      });

      this.belongsTo(models.Citizen, {
        foreignKey: 'candidateID',
        targetKey: 'nationalID',
        as: 'citizenInfo'
      });
    

      // Other associations...
    }
  }

  Candidate.init(
    {
      candidateID: {
        type: DataTypes.STRING,
        primaryKey: true,
        references: {
          model: 'Citizens',
          key: 'nationalID',
        },
      },
      profilePicture: { type: DataTypes.STRING },
      gender: { type: DataTypes.STRING, allowNull: false },
      Quota: { type: DataTypes.STRING, allowNull: false },
      votingCount: { type: DataTypes.INTEGER, defaultValue: 0 },
      isPresident: { type: DataTypes.BOOLEAN, defaultValue: false },
      localListingID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'LocalListings',
          key: 'listingID',
        },
      },
      partylistingID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'PartyListings',
          key: 'partyID',
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
