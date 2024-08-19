// "use strict";
// const { Model } = require("sequelize");
// module.exports = (sequelize, DataTypes) => {
//   class Citizen extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {}
//   }
//   Citizen.init(
//     {
//       nationalID: { type: DataTypes.STRING, primaryKey: true },
//       name: DataTypes.STRING,
//       email: DataTypes.STRING,
//       password: DataTypes.STRING,
//       didVoteLocal: DataTypes.BOOLEAN,
//       didVoteParty: DataTypes.BOOLEAN,
//       district: DataTypes.STRING,
//       OTP: DataTypes.STRING,
//       isPresident: { type: DataTypes.BOOLEAN, defaultValue: false },
//       isCandidate: { type: DataTypes.BOOLEAN, defaultValue: false },
//       phoneNumber: { type: DataTypes.STRING },
//     },
//     {
//       sequelize,
//       modelName: "Citizen",
//       timestamps: false, // Disable timestamps
//     }
//   );

//   return Citizen;
// };

// models/Citizen.js
"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Citizen extends Model {
    static associate(models) {
      Citizen.hasMany(models.localListingInformation, {
        foreignKey: "nationalID",
      });
    }
  }
  Citizen.init(
    {
      nationalID: { type: DataTypes.STRING, primaryKey: true },
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      didVoteLocal: DataTypes.BOOLEAN,
      didVoteParty: DataTypes.BOOLEAN,
      district: DataTypes.STRING,
      OTP: DataTypes.STRING,
      isPresident: { type: DataTypes.BOOLEAN, defaultValue: false },
      isCandidate: { type: DataTypes.BOOLEAN, defaultValue: false },
      phoneNumber: { type: DataTypes.STRING },
    },
    {
      sequelize,
      modelName: "Citizen",
      timestamps: false,
    }
  );
  return Citizen;
};
