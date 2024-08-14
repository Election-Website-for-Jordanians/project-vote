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
      this.belongsTo(models.Citizen, {
        foreignKey: "NationalID",
        as: "candidateID",
      });
      this.hasMany(models.Advertisment, {
        foreignKey: "candidateID",
        as: "advertisorID",
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
    },
    {
      sequelize,
      modelName: "Candidate",
    }
  );
  return Candidate;
};
