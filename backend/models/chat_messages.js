"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class chat_messages extends Model {
    
   
  }
  chat_messages.init(
    {
      user_id:{type:DataTypes.STRING,references:{foreignKey:'nationalID'}},
      admin_id:{type:DataTypes.STRING,references:{foreignKey:'admin_id'}},
      message: DataTypes.STRING,
      is_admin: DataTypes.BOOLEAN,
      user_id:DataTypes.STRING,
      admin_id:DataTypes.STRING
    },
    {
      sequelize,
      modelName: "chat_messages",
    }
    
  );
  return chat_messages;
};
