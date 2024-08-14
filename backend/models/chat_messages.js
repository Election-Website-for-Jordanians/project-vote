"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class chat_messages extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Citizen, {
        foreignKey: "nationalID",
        as: "user_id",
      });
      this.hasMany(models.Admin, {
        foreignKey: "admin_id",
        as: "admin_id",
      });
    }
  }
  chat_messages.init(
    {
      message: DataTypes.STRING,
      is_admin: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "chat_messages",
    }
  );
  return chat_messages;
};
