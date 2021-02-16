'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class employee extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      // define association here
    }
  }
  employee.init({
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    pin: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'employee'
  });
  return employee;
};
