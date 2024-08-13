"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Candidate extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasOne(models.Citizen, {
        foreignKey: "NationalID",
      });
    }
  }
  Candidate.init(
    {
      profilePicture: { type: DataTypes.STRING },
      gender: { type: DataTypes.STRING, allowNull: false },
      Quota: { type: DataTypes.STRING, allowNull: false },
      votingCount: { type: DataTypes.INTEGER, defaultValue: 0 },
    },
    {
      sequelize,
      modelName: "Candidate",
    }
  );
  return Candidate;
};
