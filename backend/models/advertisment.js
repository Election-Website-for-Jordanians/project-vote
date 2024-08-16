"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Advertisment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Advertisment.init(
    {
      advertismentID: DataTypes.INTEGER,
      pictuer: DataTypes.STRING,
      title: DataTypes.STRING,
      votingCount: DataTypes.INTEGER,
      advertisorID: {
        type: DataTypes.INTEGER,
        references: { model: "Citizens", key: "nationalID" },
      },
      description: DataTypes.STRING,
      isApproved:{type:DataTypes.BOOLEAN},
      
    },
    {
      sequelize,
      modelName: "Advertisment",
    }
  );
  return Advertisment;
};
