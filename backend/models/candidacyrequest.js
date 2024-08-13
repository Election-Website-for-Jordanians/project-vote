"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class CandidacyRequest extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.)
    }
  }
  CandidacyRequest.init(
    {
      isApproved: DataTypes.BOOLEAN,
      PartyListingID: DataTypes.INTEGER,
      LocalListingID: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "CandidacyRequest",
    }
  );
  return CandidacyRequest;
};
