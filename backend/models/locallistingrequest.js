"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class LocalListingRequest extends Model {
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
  LocalListingRequest.init(
    {
      isApproved: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "LocalListingRequest",
    }
  );
  return LocalListingRequest;
};
