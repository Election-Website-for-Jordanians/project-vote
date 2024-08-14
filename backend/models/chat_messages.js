"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class chat_messages extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
   
  }
  chat_messages.init(
    {
      user_id:{type:DataTypes.STRING,references:{foreignKey:'nationalID'}},
      admin_id:{type:DataTypes.STRING,references:{foreignKey:'admin_id'}},
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
