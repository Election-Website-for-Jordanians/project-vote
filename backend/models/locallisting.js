// "use strict";
// const { Model } = require("sequelize");
// module.exports = (sequelize, DataTypes) => {
//   class LocalListing extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       LocalListing.hasMany(models.localListingInformation, {
//         foreignKey: "localListingID",
//       });
//     }
//   }
//   LocalListing.init(
//     {
//       listingID: {
//         primaryKey: true,
//         autoIncrement: true,
//         allowNull: false,
//         type: DataTypes.INTEGER,
//       },
//       Name: DataTypes.STRING,
//       votingCount: DataTypes.INTEGER,
//       didPass: {
//         type: DataTypes.BOOLEAN,
//         defaultValue: false,
//       },
//     },
//     {
//       sequelize,
//       modelName: "LocalListing",
//     }
//   );
//   return LocalListing;
// };

// models/LocalListing.js
"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class LocalListing extends Model {
    static associate(models) {
      LocalListing.hasMany(models.localListingInformation, {
        foreignKey: "localListingID",
      });
    }
  }
  LocalListing.init(
    {
      listingID: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      Name: DataTypes.STRING,
      votingCount: DataTypes.INTEGER,
      isApproved: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    },
    {
      sequelize,
      modelName: "LocalListing",
    }
  );
  return LocalListing;
};
