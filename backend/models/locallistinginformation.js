"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class localListingInformation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  localListingInformation.init(
    {
      nationalID: {
        type: DataTypes.STRING,
        references: { model: "Candidates", key: "candidateID" },
      },

      gender: DataTypes.STRING,
      candidacyCourse: DataTypes.STRING,
      localListingID: {type:DataTypes.INTEGER,references:{model:"LocalListings",key:"listingID"}},
    },
    {
      sequelize,
      modelName: "localListingInformation",
    }
  );
  return localListingInformation;
};
