import { Sequelize } from "sequelize/types";
import { Model, DataTypes } from 'sequelize';

export default (sequelize: Sequelize) => {
  class User extends Model {
    user_id?:string;
    user_pwd?: string;
    user_name?: string;
  };
  User.init({
    user_id: {
      type: DataTypes.STRING,
      primaryKey: true,
      unique: true
    },
    user_pwd: {
      type: DataTypes.STRING,
    },
    user_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'User'
  });
  return User;
};
