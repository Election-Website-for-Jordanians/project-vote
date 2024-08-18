"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class PartyListingInformation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  PartyListingInformation.init(
    {
      nationalID: {
        type: DataTypes.STRING,
        references: { model: "Candidates", key: "candidateID" },
      },
      gender: DataTypes.STRING,
      candidacyCourse: DataTypes.STRING,
      partyListingID: {
        type: DataTypes.STRING,
        references: { model: "PartyListing", key: "partyID" },
      },
      profilePicture: { type: DataTypes.STRING },
    },
    {
      sequelize,
      modelName: "PartyListingInformation",
    }
  );
  return PartyListingInformation;
};
