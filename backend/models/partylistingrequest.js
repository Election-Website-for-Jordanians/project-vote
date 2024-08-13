"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class partyListingRequest extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Candidate, {
        foreignKey: "candidateID",
        as: "requesterID",
      });
    }
  }
  partyListingRequest.init(
    {
      isApproved: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "partyListingRequest",
    }
  );
  return partyListingRequest;
};
