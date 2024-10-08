"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class districts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  districts.init(
    {
      votingCount: { type: DataTypes.INTEGER, defaultValue: 0 },
      districtID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      districtName: { type: DataTypes.STRING, allowNull: true },
    },
    {
      sequelize,
      modelName: "districts",
    }
  );
  return districts;
};
